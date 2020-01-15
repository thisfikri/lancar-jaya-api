# Lancar Jaya API
is an API for Lancar Jaya Web & Mobile App

*\*Note: This API is still under development, is not released yet.*

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

- Prisma
```console
$ cd ./prisma
$ prisma deploy
```
First select the Demo server. When the browser opens, register with Prisma Cloud and go back to your terminal.

Then you need to select the region for your Demo server. Once that’s done, you can just hit enter twice to use the suggested values for service and stage.


- Environment Variables

You must set envrionment variables in your machine or you can create ```.env``` file in your root project.
```
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
The script run in ```http://localhost:4356``` if you run code in offline envronment, this can change if you run the script in online environment such as Heroku, the url will be like ```https://your_project.heroku.com```.

Set header ```"api-key":"your_api_key"``` to use this API.

you can change the port and endpoint in ```./index.js```.
```javascript
// you can change port here
const port = 4356
// you can change endpoint here
const endpoint = '/' // you also change endpoint like this '/' (will be: http://your_domain:your_port/)
```
