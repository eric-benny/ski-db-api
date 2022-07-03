import mongoose from 'mongoose';
import schema from '../schema/ski';

export const SkiModel = mongoose.model('Ski', schema);