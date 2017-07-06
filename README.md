# Github search man

## Deployed page

[Github Search Man](https://cryptic-oasis-80377.herokuapp.com)

## Abstract

Incremental search on github repositories with watch and unwatch functions.

## Technology stacks

- Client
  - React
  - Redux
- Server
  - nodejs

## How to use

### requirements

1. node(7.10.0)
2. yarn(0.24.5)

### local usage

1. `yarn` or `npm install` on `/`(this) directory
2. `yarn` or `npm install` on `/client` directory
3. to start server, go to `/` and run `yarn run dev`
4. to start go to client `/client` and `yarn run start`

## **Limitation**

1. The search results are shown only top 30cases. I should implement pagination.
2. === Same with `My watching list`
3. Unwatch functions on watching list
4. As, Github API only accept maximum 10 requests(if logged in, 30requests) in one minute, if you rush searching, the search requests are banned from github api server.
