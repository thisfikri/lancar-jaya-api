// User
function modProfileSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.user({id: args.id, mutation_in: ['UPDATED']}).node();
}

const modProfile = {
    subscribe: modProfileSubscribe,
    resolve: payload => {
        return payload
    }
}

// File

function newFileSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.file({id: args.id, mutation_in: ['CREATED']}).node();
}

const newFile = {
    subscribe: newFileSubscribe,
    resolve: payload => {
        return payload
    }
}

function modFileSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.file({id: args.id, mutation_in: ['UPDATED']}).node();
}

const modFile = {
    subscribe: modFileSubscribe,
    resolve: payload => {
        return payload
    }
}

function deletedFileSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.file({id: args.id, mutation_in: ['DELETED']}).node();
}

const deletedFile = {
    subscribe: deletedFileSubscribe,
    resolve: payload => {
        return payload
    }
}

function deletedFilesSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.files({id: args.id, mutation_in: ['DELETED']}).node();
}

const deletedFiles = {
    subscribe: deletedFilesSubscribe,
    resolve: payload => {
        return payload
    }
}

// Folder
function newFolderSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.folder({id: args.id, mutation_in: ['CREATED']}).node();
}

const newFolder = {
    subscribe: newFolderSubscribe,
    resolve: payload => {
        return payload
    }
}

function modFolderSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.folder({id: args.id, mutation_in: ['UPDATED']}).node();
}

const modFolder = {
    subscribe: modFolderSubscribe,
    resolve: payload => {
        return payload
    }
}

function deletedFolderSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.file({id: args.id, mutation_in: ['DELETED']}).node();
}

const deletedFolder = {
    subscribe: deletedFolderSubscribe,
    resolve: payload => {
        return payload
    }
}

function deletedFoldersSubscribe(parent, args, context, info) {
    return context.prisma.$subscribe.folders({id: args.id, mutation_in: ['DELETED']}).node();
}

const deletedFolders = {
    subscribe: deletedFoldersSubscribe,
    resolve: payload => {
        return payload
    }
}

// Setting
function modUserSetting(parent, args, context, info) {
    return context.prisma.$subscribe.userSettings({id: args.id, mutation_in: ['UPDATED']}).node();
}

const modFile = {
    subscribe: modUserSetting,
    resolve: payload => {
        return payload
    }
}

function modAppSetting(parent, args, context, info) {
    return context.prisma.$subscribe.appSettings({id: args.id, mutation_in: ['UPDATED']}).node();
}

const modFile = {
    subscribe: modAppSetting,
    resolve: payload => {
        return payload
    }
}

module.exports = {
    modProfile,
    newFile,
    modFile,
    deletedFile,
    deletedFiles,
    newFolder,
    modFolder,
    deletedFolder,
    deletedFolders,
    modUserSetting,
    modAppSetting

}