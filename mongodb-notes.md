# MongoDB Notes

## Installation

### Use Homebrew to install MongoDB

```sh
brew install mongodb
```

### Make the default data directory for MongoDB

```sh
sudo mkdir /data
sudo chown `whoami` /data
mkdir /data/db
```

## Start

### Method #1

In a dedicated terminal window or tab, run:

```sh
mongod
```

### Method #2

To have `launchd` start mongodb now and restart at login:

```sh
brew services start mongodb
```
