![logo](/images/blog_of_holding.png)
## User Stories 
```
-AS A gaming enthusiast,

-I WANT access to a blog website,

-SO THAT we can discuss ideas, opinions, and information about the hobbies, and games we love, and share.

-AS A Blog Reader

-I WANT to filter articles and reviews based on topics that I'm interested in,

-SO THAT I can easily get to blog posts catered to my hobbies and interests.


-I WANT to be able to comment on the blog posts

-SO THAT I can discuss and interact with other users on the application.

-AS A content creator

-I WANT a form that makes it easy to make an interesting article/review that will draw the attention of the other users on the application,

-SO THAT users will want to comment on my post and build communities around my content.
```

## Acceptance Criteria

```md
>GIVEN a blog site filled with articles and reviews
>
>>WHEN I access the homepage,
>
>>THEN I am presented with a good overview of what the website is about, what I'll be able to do, a greeting to the website, and instructions to sign up and/or log in to have the best experience.
>
>>WHEN I am looking at the "Blogs" page,
>
>>THEN a number of posts are presented to me, I am able to then filter further by articles and reviews which will display a number of posts designated to those 2 categories.

>>WHEN I sign up,
>
>>THEN I am prompted to create my very first post, and see a form to use to easily create said post. It includes a Title, Body, Image, and the option to label it as an article or a review.
>

>GIVEN I am an authorized user (signed up and logged in)
>
>>WHEN I access a blog post,
>
>>THEN I am presented with the post's designated page, it's author, and any comments associated with the post. I can also add my own comment below the post with the use of a text editor to make my comment stand out.

```
- - -


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. See deployment for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them

```
1. Node.js 
2. a local instance of MySQL Server 
3. an active internet connection
```

### Installing

-A step by step series of examples that tell you how to get a development env running

-First, install all dependencies through npm or yarn. Make sure you use one or the other, if you are going to use yarn. 

```
-npm install
```
-OR 

```
-yarn 
```
### Database Integration

-Next run the schema.sql as found within `db/schema.sql`. It should contain: 
```
-DROP DATABASE IF EXISTS project_2_local;
-CREATE DATABASE project_2_local;

-DROP DATABASE IF EXISTS project_2_test;
-CREATE DATABASE project_2_test;
```
-These names are of course up to you; however, we will need a test and local database if we wish to use the prerolled integration tests. 



## Built With

* [Express](https://expressjs.com/) - Express, our web framework
* [Express Handlebars](https://www.npmjs.com/package/express-handlebars) - Express Handlebars, a handlebars integration for Express, that simplifies a bunch of Express things
* [Morgan](https://www.npmjs.com/package/morgan) - Morgan, an improved logging library that works nicely with Express. Now, all requests to our server get logged out in the console. 
* [Sequelize](https://sequelize.org/) - Sequelize, our ORM
* [Passport](https://www.npmjs.com/package/passport) - Passport is a an authentication middleware for Express that lets us off load a bunch of the fiddly bits of authentication. 
* [Passport-Local](https://www.npmjs.com/package/passport-local) - Passport is a an authentication middleware for Express that lets us off load a bunch of the fiddly bits of authentication. 
* [Cypress](https://www.cypress.io/) - Cypress is a front-end testing suite that allows for automation of browser based tests.
* [Wysiwyg](https://mindmup.github.io/bootstrap-wysiwyg/) - A compact Wysiwyg (What you see is what you get.) api that allows for text editing within the application itself.
## License

This project is licensed under the MIT License.

