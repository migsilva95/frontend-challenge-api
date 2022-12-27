# Team.it front end challenge REST API

> Starter REST API for Team.it front end coding challenge

## Getting started

### Prerequisites

- [Node.js](https://nodejs.org/en/) v12 or higher

## What is required to complete the challenge

You are required to create a blog application that interfaces with the provided REST API. The application should have a home page that shows all blog posts, sorted by publish date. Users should be able to view individual posts in a separate page. Within that page they should be able to read comments and add a new comment.

### Business Requirements:

_We are looking for **all of the requirements to be submitted**. This is your chance to impress us so feel free to add additional functionality or design_

- Blog feed should list all posts and associated title, author, date and description, sorted by publish date from newest first
- Users can view individual blog posts in a separate page
- Users can view comments for a blog post
- Users can add a comment to a blog post
- Users can edit a comment to a blog post
- Users can reply a comment to a blog post
- Form validation
- View layouts to blog posts (List, Grid, etc...)

### Technical Requirements

Depending the role please complete one of the following

#### Frontend Developer

Create a web application which runs in the browser and satisfies the following requirements:

- Connects with the API using js / jquery
- The use of a CSS pre-processing tool like SCSS/LESS or CSS in JS
- Semantic, accessible markup
- SEO friendly urls, titles, metadata

_OR_

#### React Developer

Create an react application which runs in the browser and satisfies the following [requirements](#requirements):

You are more than welcome to use the following starting points.

- [Create React App](https://create-react-app.dev/)
- [Vite](https://vitejs.dev/)
- [NextJs](https://nextjs.org/)

##### Requirements

- Two or more distinct components demonstrating component hierarchy
- At least one service to communicate with the REST API (can be done using a context, hooks, services)
  - Take a look at the API section [API Section](#API)
- At least one unit test per component
  - you can use [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
- The use of a CSS pre-processing tool
  - SCSS/LESS/CSSinJS like (Emotion/styledComponents/Vanilla Extract)
- Consideration of semantic markup, SEO and accessibility

## API

> This starter kit provides the basic API you will need to complete your coding challenge. See [Using the REST API](#using-the-rest-api) for more information.

### Quick start

#### 1. Run `npm install`

This will install all dependencies (listed in `package.json`) necessary to get the API up and running.

#### 2. Run `npm run api`

`npm run api` will start [json-server](https://github.com/typicode/json-server) to provide a stubbed out REST API through `localhost:9000`.

> Note: On occasion you may find the port 9000 is already in use. You can change this in the package.json.

## Using the REST API

> Note: Ensure that you've started the API server with `npm run api`.

A REST API is provided with seed data for blog posts and comments. The REST API returns and accepts JSON. Changes made to the "database" will persist as long as the API is running on `localhost:9000`.

**Base path:** http://localhost:9000

**GET** `/posts` _List all blog posts_<br>
**GET** `/posts/{id}` _View single blog post_<br>
**GET** `/posts/{id}/comments` _List all comments for single blog post_<br>
**POST** `/posts/{id}/comments` _Add comment to single blog post_<br>
**PUT** `/comments/{id}` _Update single comment_<br>

## Delivering to Team.it

Please provide a link to a git/bitbucket/etc repository which contains the application code.

If you wish to go a step further you may host the final product for demo purposes, eg. with AWS S3. However, this is not required for completion of the code challenge.

**Thank you, and enjoy the challenge!**