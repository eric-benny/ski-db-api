import mongoose from 'mongoose';
import schema from '../schema/guideSki';

export const GuideSkiModel = mongoose.model('GuideSki', schema);