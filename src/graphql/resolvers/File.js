function createdBy(parent, args, context, info) {
    return context.prisma.file({createdBy: parent.createdBy}).createdBy();
}

module.exports = {
    createdBy
}