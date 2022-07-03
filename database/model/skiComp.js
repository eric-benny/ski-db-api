import mongoose from 'mongoose';
import schema from '../schema/skiComp';

export const SkiCompModel = mongoose.model('SkiComp', schema);