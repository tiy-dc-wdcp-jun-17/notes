#!/usr/bin/env bash

if [[ -d ~/code/todosql ]]; then
  echo "~/code/todosql: Already exists. Exiting..."
  exit 1
fi

cd ~/code
git clone https://github.com/tiy-dc-wdcp-jun-17/base-express-app.git todosql
cd todosql
npm install sequelize pg
cd server
sequelize init
cat <<EOS > config/config.json
{
  "development": {
    "username": null,
    "password": null,
    "database": "todos_development",
    "host": "127.0.0.1",
    "dialect": "postgres"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "todos_test",
    "host": "127.0.0.1",
    "dialect": "postgres"
  }
}
EOS

sequelize model:create --name todo --attributes 'description:text completed:boolean'

dropdb todos_development
createdb todos_development
sequelize db:migrate

sequelize seed:create --name todos

for seed_file in seeders/*; do
  cat <<EOS > $seed_file
"use strict";

module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.bulkInsert("todos",[
      {
        description: "Finished this app",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }, {
        description: "Practiced writing code",
        completed: false,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {});
  },

  down: function(queryInterface, Sequelize) {
    return queryInterface.bulkDelete("todos", null, {});
  }
};
EOS
done

sequelize db:seed:all

cat <<EOS > routes/todos.js
const express = require("express");
const router = express.Router();

const models = require("../models");

router.get("/", (req, res) => {
  models.todo.findAll().then(todos => {
    res.render("todos/index", { todos: todos });
  });
});

router.get("/:id", (req, res) => {
  models.todo.findById(req.params.id).then(todo => {
    res.render("todos/show", { todo: todo });
  });
});

module.exports = router;
EOS

mkdir -p views/todos

cat <<EOS > views/todos/index.mustache
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todos</title>
  </head>
  <body>
    <h1>Todos</h1>
    <ul>
    {{#todos}}
      <li><a href="/todos/{{id}}">{{description}}</a> | {{completed}}</li>
    {{/todos}}
    </ul>
  </body>
</html>
EOS

cat <<EOS > views/todos/show.mustache
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Todo</title>
  </head>
  <body>
    <h1>Todo</h1>
    {{#todo}}
      <h2>{{description}}</h2>
      <p>
      {{#completed}}
        DONE
      {{/completed}}
      {{^completed}}
        NOT COMPLETED
      {{/completed}}
      </p>
    {{/todo}}
  </body>
</html>
EOS

# Add one route
cat index.js | sed -e 's/app.use("\/", require(".\/routes\/homepage"));/app.use("\/", require(".\/routes\/homepage"));app.use("\/todos", require(".\/routes\/todos"));/' > index.js.new

mv index.js.new index.js

echo
echo "Type:"
echo "cd ~/code/todosql"
echo "npm start"
echo
echo "Go to http://localhost:3000/todos"
