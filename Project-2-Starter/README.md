# Project 2 Starter Kit

The Project 2 Starter Kit is an opinionated, preconfigured MVC-style application intended to satisfy the stated requirements and additional requirements of Project 2. It comes with a prerolled authentication system, cypress integration testing, and eslint configuration.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
Node.js 
a local instance of MySQL Server 
an active internet connection
```

### Installing

A step by step series of examples that tell you how to get a development env running

First, install all dependencies through npm or yarn. Make sure you use one or the other, if you are going to use yarn. 

```
npm install
```
OR 

```
yarn 
```

Next run the schema.sql as found within `db/schema.sql`. It should contain: 
```
DROP DATABASE IF EXISTS project_2_local;
CREATE DATABASE project_2_local;

DROP DATABASE IF EXISTS project_2_test;
CREATE DATABASE project_2_test;
```
These names are of course up to you; however, we will need a test and local database if we wish to use the prerolled integration tests. 

* Note: If you are going to change the local database/test database, make sure to follow the Note in the next ste. 

Next, we need to put in your configuration for the connection to your local database server. This can be found in `config.json` in the `config` folder. Currently, it looks like: 

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "project_2_local",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "project_2_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "use_env_variable": "JAWSDB_URL",
    "dialect":"mysql"
  }
}
```
It has three connections;  

- development:
   * For your local development work. 
   * The database name assumes you are still talking to the db defined in schema. Change this if you are not. 
   * Put in your local db root user password.
- test: 
    * For testing locally. 
    * The database name assumes you are still talking to the db defined in schema. Change this if you are not. 
   * Put in your local db root user password.
- production: 
    * For your deployment. 
    * The username, host, port, password, and database name will be from your JAWS configuration via the NODE_ENV on heroku. 

Once you have down that; you are ready to run the server, with:

```
npm run start
```


## Running the tests

Currently, the application has no tests


## Structure

The structure of the application, as produced, is replicated below, with folders marked with ```-``` and files marked with ```*```. Below this, please find the detailed description of each file and what it is doing. 

```
- config
    - middleware
        * isAuthenticated.js
    * config.json
    * passport.js
- controllers
    - api
        * index.js
        * postsController.js
        * usersController.js
    * authController.js
    * htmlController.js
    * index.js
- cypress
    - fixtures
    - integration
        - _base
            * _canary.js
            * login.js
            * signup.js
        - forum
            * layout.js
            * posts.s
    - plugins
        * index.js
    - support
        * commands.js
        * index.js
- db
    * schema.sql
- models
    * index.js
    * post.js
    * user.js
- public
    - stylesheets
        * style.css
    * favicon.ico
- views
    - errors
        * 404.handlebars
    - layouts
        * main.handlebars
    - partials
        * navbar.handlebars
    * forum.handlebars
    * index.handlebars
    * login.handlebars
    * signup.handlebars
* .eslintignore
* .eslintrc.json
* cypress.json
* package.json
* README.md
* server.js
```

### Structure Explanation

- **config**: Configuration. This contains the passport configuration, the middleware for checking if a user is authenticated, and the Sequelize connection configuration 
    - **middleware**: For the authentication middleware and any other Express middleware we might need.
        * **isAuthenticated.js**: This is the authentication middleware. Do not change unless you need to change how passwords work, which is unlikely. It simply checks to see if passport has stored a user in the request; it only does this if someone is logged in. 
    * **config.json**: This is where you put the configurations for Sequelize for each environment. Same as before
    * **passport.js**: This is how we are handling actually authenticating. Firstly, it relies on there being a User model with an email and password column. If you remove that, this will break. Barring that, if you wish to go into detail, look up how the ```passport-local``` strategy works with ```passport```. We will talk about this more in the back third of class. 
- **controllers**: Our controllers. All of them are using Express router to make them as clean as possible. 
    - **api**: API controllers, aka, data controllers. This is where we want to stick anything talking directly to a model, that doesn't have a page attached to it. AKA, APIs.
        * **index.js** This is where you *register* an API controller. First import it, then attach it to a route. This is so we only have to write what path the controller is on *once*. 
        * **postsController.js**: An example RESTful controller for Posts. Notice how the only part of the route we configure is the params and final part of it. This is because the rest of the routing is handled in the index files.   
        * **usersController.js**; An example RESTful controller for User.
    * authController.js: Authentication controller to enable authentication. Exposes four routes, read up on them to understand, and if you change the layout or structure of the login/signup pages you may need to change this. 
    * **htmlController.js**: Where we send our pages from. Notice the ```GET /forum``` route! It uses the ```isAuthenticated``` middleware to prevent access to clients who aren't logged in. Yes, it's that simple - just add ```isAuthenticated``` in between the path and the callback, to make it so someone has to be logged in. 
    * **index.js**: The master registry for all controllers. It registers auth, api, and the html controller. You likely *won't* need to modify this, but if you add a whole new set of controllers or another top level one, you will need to add it here. This is imported by ```server.js```.  
- cypress: Cypress stuff
    - fixtures: If we need to load the same data every time, it goes here. We aren't using this right now.
    - integration: All of our tests! See test explanations above.
        - _base
            * _canary.js
            * login.js
            * signup.js
        - forum
            * layout.js
            * posts.s
    - plugins: We aren't using this, this is autogenerated by cypress when installed. 
        * index.js
    - support
        * commands.js: This adds a ```login``` and ```logout``` command so that in any other test, we can say ```cy.login()``` add login within that block. (So we don't have to do it over and over and *over* again)
        * index.js: 
- db
    * schema.sql: Our schema file.
- models
    * index.js: The auto-generated index from ```sequelize init:models```
    * **post.js**: An example model 
    * **user.js**: Our user model. Change this at your own risk. It has two key fields, ```username``` and ```password```. All of authentication relies on this. It also prevents exposure of passwords with Sequelize's [scope utility](https://sequelize.org/master/manual/scopes.html); Look at the user/auth controllers to see how to access ```password``` *IF* you need it. It also uses bcryprt.js to encrypt and check our passwords. 
- public
    - stylesheets
        * **style.css**: Our styles
    * **favicon.ico**: My favicon. **REPLACE THIS**
- views
    - errors
        * 404.handlebars: A 404 page
    - layouts
        * main.handlebars: Our main page. This brings in scripts!
    - partials
        * navbar.handlebars: A partial, factored out for clarity. Notice how it takes in **user**. You will need to pass in ```req.user``` as ```user``` to any render that is utilizing the ```navbar``` partial
    * forum.handlebars: An example show and create data page. 
    * index.handlebars: The landing page. It currently has a list of all the requirements. **You should change this.**
    * login.handlebars: The login page. Probably doesn't need to be changed, barring styling.
    * signup.handlebars:  The signup page. Probably doesn't need to be changed, barring styling.
* .eslintignore: What files eslint should ignore. *Always* ignore node_modules unless you want to crash eslint.
* .eslintrc.json: What configuration we want for ESLint. A default, barely intrusive version.
* cypress.json: Our configuration for cypress. By default, it just takes in the port we need for cypress.
* package.json: The package.json
* README.md: This file.
* **server.js**: Our entry point. It handles all the top level imports, hooking up our express instance with all the middleware, including authentication and the router, and then initializes a sequelize connection and the server listening. 


## How to modify:

### I want to add a model.

Add the model to the ```models``` folder. The ```index.js``` file generated from the sequelize-cli will pick it up. 

### I want to add an API controller to expose data

Based on the model, you need to: 
- Create a ```modelController``` in the ```controllers/api``` folder. 
- Add all routes you need. 
- Register the controller in the ```controllers/api/index.js``` file. 

### I want to add a page

- Create a new handlebars file
- Add a route in the ```htmlController```
- Render the new handlebars file inside that route

You may also need to: 
- Get some data
- Add some javascript
- Add some css

## Deployment

Please follow the configuration guide supplied in Unit 14. You will need to: 

- Configure a Heroku application
- Add an instance of JawsDB and add the connection information in ```config/config.json```
- Pass the config var ```NODE_ENV = production``` in the deployed version. 

## Built With

* [Express](https://expressjs.com/) - Express, our web framework
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars) - Express Handlebars, a handlebars integration for Express, that simplifies a bunch of Express things
* [Morgan](https://www.npmjs.com/package/morgan) - Morgan, an improved logging library that works nicely with Express. Now, all requests to our server get logged out in the console. 
* [Sequelize](https://sequelize.org/) - Sequelize, our ORM
* [Passport](https://www.npmjs.com/package/passport) - Passport is a an authentication middleware for Express that lets us off load a bunch of the fiddly bits of authentication. 
* [Passport-Local](https://www.npmjs.com/package/passport-local) - Passport is a an authentication middleware for Express that lets us off load a bunch of the fiddly bits of authentication. 
* [Cypress](https://www.cypress.io/) - Cypress is a front-end testing suite that allows for automation of browser based tests.

## License

This project is licensed under the MIT License.

