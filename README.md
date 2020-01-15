# Lancar Jaya API
is an API for Lancar Jaya Web & Mobile App

## Stack Technology
- NodeJS (https://nodejs.org)
- GraphQL (https://graphql.org/)
- Prisma (https://www.prisma.io/)

## Installation and Setup
1. Installation
open terminal choose your directory and write this command below.
```console
$ git clone https://github.com/thisfikri/lancar-jaya-api.git
$ cd lancar-jaya-api
$ yarn global prisma # install prisma first
$ # then
$ yarn # for install all dependencies
```

2. Setup
You must set envrionment variables in your machine or you can create ```.env``` file in your root project.
```terminal
NODE_ENV=development
API_KEY=your_api_key_set_here
```


## Usage
```console
$ # in your root project
$ yarn dev # for development
$ # or
$ yarn start # for production
```
The script run in ```http://localhost:5000/graphql``` if you run code in offline envronment, this can change if you run the script in online environment such as Heroku, the url will be like ```https://your_project.heroku.com```.

you can change the port and endpoint in ```./index.js```.
```javascript
// you can change port here
const port = 4356
// you can change endpoint here
const endpoint = '/' // you also change endpoint like this '/' (will be: http://your_domain:your_port/)
```
