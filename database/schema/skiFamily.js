import mongoose from 'mongoose';
const { Schema } = mongoose;


const skiFamilySchema = new mongoose.Schema({
    manufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
    name: {type: String, unique: true},
}, {collection: 'skiFamilies'});

export default skiFamilySchema;