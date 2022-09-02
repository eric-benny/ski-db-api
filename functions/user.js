const { UserModel } = require('../database/model/user');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const create = async (event, context) => {
    try {
        await connectToDatabase();
        console.log("connected to db");

        const data = JSON.parse(event.body);

        console.log(data);

        const user = await UserModel.create(data);

        console.log(user);

        return response.success({
            message: 'User has been created successfully.',
            data: user.toObject()
        });
    } catch (e) {
        return response.fail({ message: e.message });
    }
};

export const get = async (event, context) => {
    try {
        await connectToDatabase();
        console.log("connected to db");

        const userId = event.pathParameters ? event.pathParameters.userId : undefined;
        console.log(userId);
        if (userId) {
            const user = await UserModel.find({ authId: userId });
            return response.success({
                message: 'User',
                data: user
            });
        } else {
            const users = await UserModel.find({});
            return response.success({
                message: 'Users',
                data: users
            });
        }
    } catch (e) {
        return response.fail({ message: e.message });
    }
};

export const addFavorite = async (event, context) => {
    try {
        await connectToDatabase();
        console.log("connected to db");

        const skiId = event.pathParameters ? event.pathParameters.skiId : undefined;
        const userId = event.pathParameters ? event.pathParameters.userId : undefined;

        let user = await UserModel.findOne({ _id: userId });

        user.favorites.push(skiId);

        user = await UserModel.findOneAndUpdate({_id: userId}, {favorites: user.favorites}, {new: true});

        return response.success({
            message: 'User',
            data: user
        });
    } catch (e) {
        return response.fail({ message: e.message });
    }
};

export const removeFavorite = async (event, context) => {
    try {
        await connectToDatabase();
        console.log("connected to db");

        const skiId = event.pathParameters ? event.pathParameters.skiId : undefined;
        const userId = event.pathParameters ? event.pathParameters.userId : undefined;

        let user = await UserModel.findOne({ _id: userId });

        const newFavorites = user.favorites.filter(id => {
            return !id.equals(skiId);
        });

        user = await UserModel.findOneAndUpdate({_id: userId}, {favorites: newFavorites}, {new: true});

        return response.success({
            message: 'User',
            data: user
        });
    } catch (e) {
        return response.fail({ message: e.message });
    }
};