function createdBy(parent, args, context, info) {
    return context.prisma.file({id: parent.id}).createdBy();
}

module.exports = {
    createdBy
}