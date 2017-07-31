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

In a dedicated terminal window or tab, run:

```sh
mongod
```
