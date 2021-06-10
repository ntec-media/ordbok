Ordbok (Julev.no)
## Overview

- [Requirements](#requirements)
- [Laravel Sail](#local-development-environment-with-laravel-sail)
- [Installation without Sail](#installation-without-sail)
- [Installation with Sail](#installation-with-sail)
- [Deployments](#deployments)
- [Contributing](#contributing)

## Requirements

- PHP (8.0 or newer) (not required for Sail)
- [Composer](https://getcomposer.org/) (2.0.0 or newer) (not required for Sail)
- [Node.JS](https://nodejs.org) (10.16.3 or newer) (not required for Sail)
- [Laravel 8.x requirements](https://laravel.com/docs/8.x/installation#server-requirements) (not required for Sail)
- [Docker](https://docs.docker.com/engine/) (Optional, required for Sail)
- [Docker Compose](https://docs.docker.com/compose/) (Optional, required for Sail)

## Local development environment with Laravel Sail

Laravel Sail is a package that automatically configures and runs a local development environment using docker.
It takes care of making sure all the required services and requirements exist. Laravel Sail ensures that all
developers have the same environment and takes the configuration hassle of web development out of the picture.
Sail leverages docker and docker-compose and these are required for it to run.

As Sail is installed as a composer package it is recommeded to add an alias to your .bashrc that simplifies usage:

```shell script
alias sail="vendor/bin/sail"
```

As the application runs in a docker container, you can use sail to forward commands to it to use composer, npm and artisan as normal:

```shell script
sail composer ...
sail artisan ...
sail npm ...
```

## Installation without Sail

Once you have all the requirements installed and have cloned the repository, setup your environent file (`/.env`). All its
properties are self-descriptive or can be found online.

Next, install the dependencies for both Composer and NPM:

```shell script
composer install
npm install && npm run dev
```

After this process has finished, you can run a composer script that will prepare the project for you:

```shell script
composer run prepare-project
```

Finally, make sure you've read the through the contributing guidelines and then you're all set to write something awesome.

## Installation with Sail

Once you have all the requirements installed and have cloned the repository, setup your environent file (`/.env`). All its
properties are self-descriptive or can be found online.

Next, install the dependencies for Composer:

```shell script
composer install
```

After this process has finished you can bring up the local development environment using:

```shell script
sail up -d
```

Once the local development enviorment is up, you can install the frontend dependencies:

```shell script
sail npm install && sail npm run dev
```

After all the dependenices are installed, you can run a composer script that will prepare the project for you:

```shell script
sail composer run prepare-project
```

Finally, make sure you've read the through the contributing guidelines and then you're all set to write something awesome.

When you are finished developing you can bring down the local development environment using:

```shell script
sail down
```

## Deployments

All servers are provisioned and managed by [ploi](https://ploi.io)

## Contributing

The contribution guide can be found in [CONTRIBUTING.md](CONTRIBUTING.md).
