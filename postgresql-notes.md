# PostgreSQL Notes

## Installation

```sh
brew install postgresql
```

## Start

```sh
brew services start postgresql
```

## Stop

```sh
brew services stop postgresql
```

## Status

```sh
brew services list
```

## Create Database

```sh
createdb <db name>
```

### Example

```sh
createdb mytestdb
```

## Drop Database

```sh
dropdb <db name>
```

### Example

```sh
dropdb mytestdb
```

## List Databases

```sh
psql --list
```

## Console

```sh
psql <db name>
```

### Example

```sh
psql mytestdb
```

## Dump Database

```sh
pg_dump --no-owner <db name> > dump.sql
```

```text
-O
--no-owner
Do not output commands to set ownership of objects to match the
original database. By default, pg_dump issues ALTER OWNER or SET
SESSION AUTHORIZATION statements to set ownership of created database
objects. These statements will fail when the script is run unless it
is started by a superuser (or the same user that owns all of the
objects in the script). To make a script that can be restored by any
user, but will give that user ownership of all the objects, specify
-O or --no-owner.

-c
--clean
Output commands to clean (drop) database objects prior to outputting
the commands for creating them.
```

### Example

```sh
pg_dump --no-owner mytestdb > mytestdb_dump.sql
```

## Dump Schema

```sh
pg_dump --no-owner --schema-only <db name> > schema.sql
```

```text
-s
--schema-only
Dump only the object definitions (schema), not data.
```

### Example

```sh
pg_dump --no-owner --schema-only mytestdb > mytestdb_schema.sql
```

## Restore Database

```sh
psql <db name> < dump.sql
```

### Example

```sh
psql mytestdb < mytestdb_dump.sql
```
