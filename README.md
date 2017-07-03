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

Just go to the **Github Search Man** website and input the repository name that you want to search.

And, your entire watching repos are shown if you logged in with Github OAuth.

## **Limitation**

1. The search results are shown only top 30cases. I should implement pagination.
2. === Same with `My watching list`
3. Unwatch functions on watching list
4. As, Github API only accept maximum 10 requests(if logged in, 30requests) in one minute, if you rush searching, the search requests are banned from github api server.