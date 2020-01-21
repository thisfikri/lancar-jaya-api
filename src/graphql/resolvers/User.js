function files(parent, args, context, info) {
    return context.prisma.user({id: parent.id}).files();
}

module.exports = {
    files
}