function __resolveType(identity, context, info) {
    if (identity.files) {
        return 'User';
    }

    if (identity.createdBy) {
        return 'File'
    }

    return null
}

module.exports = {
    __resolveType
}