import mongoose from 'mongoose';
import schema from '../schema/user';

export const UserModel = mongoose.model('User', schema);