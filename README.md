# Kudos

This back-end project was developed during **Next Level Week** by [Rocketseat](https://rocketseat.com.br/). I named it **Kudos** :) It is a service where teammates can acknowledge each other for their contribution and achievements. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [How to run this project locally](#how-to-run-this-project-locally)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

The Kudos database is composed of **users**, **tags** and **compliments**. Tags are keywords that are added to the compliments. A compliment consists in a message and a tag sent from a user to another.

- **Users**
    - A new user must have a name, an email, a password and whether they are an admin
    - No duplicate emails are allowed
- **Tags**
    - No duplicate tags are allowed
    - Names are required
    - Only admin users can add new tags
- **Compliments** 
    - A user can't add a compliment to themselves
    - Sender and receiver must be valid users
    - User must be authenticated to add a compliment
- **Lists**
    - List all tags
    - List all compliments sent/received by user
    - List all users

## My process

### Built with

- Typescript
- SQLite

**Dependencies**
- bcryptjs
- class-transformer
- express
- express-async-errors
- jsonwebtoken
- reflect-metadata
- sqlite3
- typeorm
- typescript
- uuid

**Other tools**
- [Insomnia](https://insomnia.rest/)
- [Beekeeper Studio](https://www.beekeeperstudio.io/)

### How to run this project locally

#### Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

#### Available Scripts

In the project directory, you can run:

```npm install```

or

```yarn install```
 
 To run the server in development mode, use:

 ```yarn dev```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.


### What I learned

This was my first application using Node.js and Typescript and I learned so much from this project!
- Setting up a database
- Using an API client (Insomnia) to test my requests 
- Creating database migrations
- Authentication tokens using JWT
- General back-end flow: server -> routes -> controllers -> services -> repositories -> database

### Continued development

The next step is adding an interface to the project using cross-origin resource sharing. Note to myself:
- yarn add cors
- yarn add @types/cors
- `server.ts` -> add `import cors from "cors"`;
- allow all requests:
`
app.use(cors());    `

- allow especific requests: 
`
app.use(cors({
    origin: ""
}))
`
Another nice addition would be adding an email notification for new compliments.

## Author

- Portfolio - [Bárbara Aliverti](https://barbaraaliverti.github.io/)
- LinkedIn - [@barbaraaliverti](https://www.linkedin.com/in/barbaraaliverti)

