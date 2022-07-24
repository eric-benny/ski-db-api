import mongoose from 'mongoose';


const manufacturerSchema = new mongoose.Schema({
    name: {type: String, unique: true}
}, {collection: 'manufacturers'});

export default manufacturerSchema;