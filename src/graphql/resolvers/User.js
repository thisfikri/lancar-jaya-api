function files(parent, args, context, info) {
    return context.prisma.user({id: parent.cretedBy}).files();
}

module.exports = {
    files
}