const jwt = require('jsonwebtoken');
const APP_SECRET = 'YouNowWhowam1';

function getUserData(context) {
    const Authorization = context.request.get('Authorization');

    if (Authorization) {
        const token = Authorization.replace('Bearer', '');
        const valid = jwt.verify(token, APP_SECRET);
        return valid;
    }

    throw new Error('Not authenticated');
}

function getPermisson(role) {
    if (role === 'admin') {
        return 'fullAccess';
    } else if (role === 'user') {
        return 'RWD';
    }

    throw new Error('Your role is not found')
}

module.exports = {
    APP_SECRET,
    getUserData,
    getPermisson
}