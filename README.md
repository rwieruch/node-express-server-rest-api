# Simple Node with Express Server

[![Build Status](https://travis-ci.org/rwieruch/node-express-server.svg?branch=master)](https://travis-ci.org/rwieruch/node-express-server) [![Slack](https://slack-the-road-to-learn-react.wieruch.com/badge.svg)](https://slack-the-road-to-learn-react.wieruch.com/) [![Greenkeeper badge](https://badges.greenkeeper.io/rwieruch/node-express-server.svg)](https://greenkeeper.io/)

An easy way to get started with a Express server with Node.js.

## Features

* Babel 7
* Environment Variables
* Express

## Requirements

* [node & npm](https://nodejs.org/en/)
* [git](https://www.robinwieruch.de/git-essential-commands/)

## Installation

* `git clone git@github.com:rwieruch/node-express-server.git`
* `cd node-express-server`
* `npm install`
* `npm start`

### GET Routes

* visit http://localhost:3000
  * /messages
  * /messages/1
  * /users
  * /users/1

### Beyond GET Routes

#### CURL

* Create a message with:
  * `curl -i -X POST -H "Content-Type:application/json" http://localhost:3000/messages -d '{"text":"Hi again, World"}'`
* Delete a message with:
  * `curl -i -X DELETE -H "Content-Type:application/json" http://localhost:3000/messages/1`

#### Postman

* Install [Postman](https://www.getpostman.com/apps) to interact with REST API
* Create a message with:
  * URL: http://localhost:3000/messages
  * Method: POST
  * Body: raw + JSON (application/json)
  * Body Content: `{ "text": "Hi again, World" }`
* Delete a message with:
  * URL: http://localhost:3000/messages/1
  * Method: DELETE