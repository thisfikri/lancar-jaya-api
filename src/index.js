const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('../prisma/generated/prisma-client');
const resolvers = require('./graphql/resolvers');
const port = 4356;
const endpoint = '/';

const server = new GraphQLServer({
    typeDefs: './src/graphql/schema.graphql',
    resolvers,
    context: request => {
        const apiKey = process.env.API_KEY;
        
        if (apiKey !== request.request.get('api-key')) {
            throw new Error('You not have access to this API.');
        }

        return {
            ...request,
            prisma
        }
    }
});

server.start({port: process.env.PORT || port, endpoint}, () => {
    console.log(`Server is running ${process.env.NODE_ENV === 'development' ? 'on http://localhost:4356' : ''}`);
});