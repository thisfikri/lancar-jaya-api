# Lancar Jaya API
is an API for Lancar Jaya Web & Mobile App

## Installation and Setup
1. Installation
open terminal choose your directory and write this command below.
```terminal
git clone github_url
cd lancarjaya-api-nosql
yarn
```

2. Setup
You must set envrionment variables in your machine or you can create ```.env``` file in your root project.
```terminal
NODE_ENV=development
API_KEY=your_api_key_set_here
```


## Usage
```terminal
# in your root project
yarn dev # for development
# or
yarn start # for production
```
The script run in ```http://localhost:5000/graphql``` if you run code in offline envronment, this can change if you run the script in online environment such as Heroku, the url will be like ```https://your_project.heroku.com```.

you can change the port and endpoint in ```./index.js```.
```javascript
// you can change port here
const port = 5000
// you can change endpoint here
const endpoint = '/' // you also change endpoint like this '/' (will be: http://your_domain:your_port/)
```
