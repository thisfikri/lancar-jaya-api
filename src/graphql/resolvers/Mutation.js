const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { APP_SECRET, getUserData, getPermisson } = require('./../../utils');

async function signIn(parent, args, context, info) {
    const user = await context.prisma.user({username: args.username});
    if (!user) {
        throw new Error('No such user found');
    }

    const valid = bcrypt.compare(args.password, user.password);
    if (!valid) {
        throw new Error('invalid Password');
    }

    const token = jwt.sign({ userId: user.id, role: user.role }, APP_SECRET)
    
    return {
        user,
        token
    }
}

async function signUp(parent, args, context, info) {
    const password = await bcrypt.hash(args.data.password, 10);
    const user = await context.prisma.createUser({ ...args.data, password });
    const token = jwt.sign({ userId: user.id, role: user.role }, APP_SECRET)
    console.log(user)
    return {
        token,
        user
    }
}

async function updateProfile(parent, args, context, info) {
    const {userId, role} = getUserData(context);    
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        return await context.prisma.updateUser({
            data: args,
            where: {
                id: userId
            }
        });
    }

    throw new Error('You not have permission to this operation');
}

async function updateUserSetting(parent, args, context, info) {
    const {userId, role} = getUserData(context);    
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        return await context.prisma.updateUserSetting({
            data: args,
            where: {
                id: userId
            }
        });
    }

    throw new Error('You not have permission to this operation');
}

async function updateAppSetting(parent, args, context, info) {
    const {userId, role} = getUserData(context);    
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        return await context.prisma.updateAppSetting({
            data: args,
            where: {
                id: userId
            }
        });
    }

    throw new Error('You not have permission to this operation');
}

async function createFile(parent, {data}, context, info) {
    const {userId, role} = getUserData(context);    
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        return await context.prisma.createFile({
            name: data.name,
            size: data.size,
            path: data.path,
            createdBy: {connect: {id: userId}}
        });
    }

    throw new Error('You not have permission to this operation');
}

async function updateFile(parent, {id, data}, context, info) {
    const {userId, role} = getUserData(context);
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        return await context.prisma.updateFile({data, where: {id}});
    }

    return false;
}

async function deleteFile(parent, {id}, {context}, info) {
    const {userId, role} = getUserData(context);
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        const res = await context.prisma.deleteFile({id, createdBy: userId});

        return {id: res.id};
    }

    return false;
}

async function deleteFiles(parent, {id}, {context}, info) {
    const {userId, role} = getUserData(context);
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        const res =  await context.prisma.deleteManyFiles({id, createdBy: userId});

        return {id: res.id};
    }

    return false;
}

async function createFolder(parent, {data}, {context}, info) {
    const {userId, role} = getUserData(context);
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        return await context.prisma.createFolder(data);
    }

    return false;
}

async function updateFolder(parent, {id, data}, context, info) {
    const {userId, role} = getUserData(context);
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        return await context.prisma.updateFolder({data, where: {id}});
    }

    return false;
}

async function deleteFolder(parent, {id}, {context}, info) {
    const {userId, role} = getUserData(context);
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        const res = await context.prisma.deleteFolder({id, createdBy: userId});

        return {id: res.id};
    }

    return false;
}

async function deleteFolders(parent, {id}, {context}, info) {
    const {userId, role} = getUserData(context);
    const perms = getPermisson(role);

    if (perms === 'fullAccess' || perms === 'RWD')  {
        const res =  await context.prisma.deleteManyFolders({id, createdBy: userId});

        return {id: res.id};
    }

    return false;
}

module.exports = {
    signIn,
    signUp,
    updateProfile,
    updateUserSetting,
    updateAppSetting,
    createFile,
    updateFile,
    deleteFile,
    deleteFiles,
    createFolder,
    updateFolder,
    deleteFolder,
    deleteFolders
}