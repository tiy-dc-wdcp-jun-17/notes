# Guide To Completing Gabble Project

Do not move onto the next step until you have checked all boxes from previous step. Find an instructor if you are stuck.

1. Set up with psql database and create models.
  - [ ] Make sure you have sequelize and postgres node modules installed via npm
  - [ ] ```cd``` into project folder and run ```sequelize init``` in command line
  - [ ] Edit config.json file (make sure dialect is postgres) and create database (run ```createdb``` in command line with appropriate db name)
  - [ ] Run ```sequelize db:migrate```
  - [ ] create model for Users
    - [ ] add validations and make sure password stored is hashed (```npm install bcrypt```)
  - [ ] create model for Gabs
  - [ ] set associations between Users/Gabs
      - [ ]user hasMany gabs
      - [ ] gabs belongsTo user
      - [ ] set foreign key on gabs table (will need to create a migration file for this)
  - [ ] create model for Likes *FYI* ```sequelize model:create``` won't work unless you set attributes so you may need to manually create the model file for this
  - [ ] set associations for Like table
      - [ ] Like belongsTo user, Like belongsTo Gab (will need to create a migration file for this)
  - [ ] Create a seed file and make sure your associations work when adding a user, adding a gab, and adding likes between users and gabs
