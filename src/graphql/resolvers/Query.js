const { APP_SECRET, getUserData, getPermisson } = require('./../../utils');

async function userInfo(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.user({ id: userId });
    }

    throw new Error('You not have permission to this action.');
}

async function profile(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.user({ id: userId });
    }

    throw new Error('You not have permission to this action.');
}

async function userSettings(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.userSettings({ id: userId });
    }

    throw new Error('You not have permission to this action.');
}

async function appSettings(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.appSettings({ id: userId });
    }

    throw new Error('You not have permission to this action.');
}

async function files(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.files({ createdBy: userId });
    }

    throw new Error('You not have permission to this action.');
}

async function file(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.file({ _id: args.id, createdBy: userId });
    }

    throw new Error('You not have permission to this action.');
}

async function folders(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.folders({ _id: args.id, createdBy: userId });
    }

    throw new Error('You not have permission to this action.');
}

async function folder(parent, args, context, info) {
    const {userId, role} = getUserData(request);
    const perms = getPermisson(role);
    if (perms === 'fullAccess' || perms === 'RWD') {
        return await context.prisma.folder({ _id: args.id, createdBy: userId });
    }

    throw new Error('You not have permission to this action.');
}

module.exports = {
    userInfo,
    profile,
    userSettings,
    appSettings,
    files,
    file,
    folder,
    folders
}