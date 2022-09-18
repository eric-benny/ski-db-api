import mongoose from 'mongoose';
const { Schema } = mongoose;

const userSchema = new mongoose.Schema({
    authId: String,
    favorites: [{ type: Schema.Types.ObjectId, ref: 'Ski' }]
}, {collection: 'users'});

export default userSchema;