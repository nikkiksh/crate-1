# Crate 👕👖📦

#### Get monthly subscription of trendy clothes and accessories.

- **API** built with Node, GraphQL, Express, Sequelize (MySQL) and JWT Auth
- **WebApp** built with React and Redux along with Server Side Rendering (SSR) / SEO friendly
a Written in ES6+ using Babel + Webpack

## Features

- Modular and easily scalable code structure
- Emphasis on developer experience
- UI components in separate folder which can be swapped for your favorite UI framework easily
- Responsive UI for React Native to support Mobile and Tablet
- GraphQL schema with associations
- Database migration and data seeding
- User authentication using JSON Web Tokens with GraphQL API
- File upload feature with GraphQL
- React storybook demonstrating UI components for web
- Server side rendering

## Screenshots and GIFs

Click on image to view fullscreen and zoom

### Desktop

[IMAGE](https://github.com/atulmy/atulmy.github.io/blob/master/images/crate/desktop-all-with-link.png)

![Crate Desktop](https://raw.githubusercontent.com/atulmy/atulmy.github.io/master/images/crate/desktop-all-with-link.png)

## Core Structure

    code
      ├── package.json
      │
      ├── api (api.example.com)
      │   ├── public
      │   ├── src
      │   │   ├── config
      │   │   ├── migrations
      │   │   ├── modules
      │   │   ├── seeders
      │   │   ├── setup
      │   │   └── index.js
      │   │
      │   └── package.json
      │
      ├── web (example.com)
      │   ├── public
      │   ├── src
      │   │   ├── modules
      │   │   ├── setup
      │   │   ├── ui
      │   │   └── index.js
      │   ├── storybook
      │   │
      │   └── package.json
      │
      ├── .gitignore
      └── README.md

## Setup and Running

- Prerequisites

  - Node 12.x or later
  - Running **MySQL database server**
  - From MySQL console create a new database called `crate` as root user.

  ```
  CREATE DATABASE crate;
  ```

- Clone repo `git clone git@github.com:awinabi/crate.git crate`

- Switch to `code` directory `cd code`

- Configurations

  - Modify `/api/src/config/database.json` for database credentials
  - Modify `/api/.env` for PORT (optional)
  - Modify `/web/.env` for PORT / API URL (optional)

- Setup

  - API: Install packages and database setup (migrations and seed) `cd api` and `npm run setup`
  - Webapp: Install packages `cd web` and `npm install`

- Development
  - Run API `cd api` and `npm start`, graphql endpoint is at http://localhost:8000 and the GraphiQL Playground at http://localhost:8000/__graphql
  - Run Webapp `cd web` and `npm start`, browse webapp at http://localhost:3000/

## Login Credentials

Login to Crate from http://localhost:3000/user/login with the following credentials:

### Admin:

> email: admin@crate.com
> password: 123456

### User:

> email: user@crate.com
> password: 123456

## Original Link

- Forked from https://github.com/atulmy/crate
- Authored by Atul Yadav - https://github.com/atulmy
