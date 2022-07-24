import mongoose from 'mongoose';
import schema from '../schema/skiFamily';

export const SkiFamilyModel = mongoose.model('SkiFamily', schema);