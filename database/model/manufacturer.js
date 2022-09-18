import mongoose from 'mongoose';
import schema from '../schema/manufacturer';

export const ManufacturerModel = mongoose.model('Manufacturer', schema);