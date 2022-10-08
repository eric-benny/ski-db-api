import mongoose from 'mongoose';
const { Schema } = mongoose;

const noteSchema = new mongoose.Schema({
    user: { type: Schema.Types.ObjectId, ref: 'User' },
    note: String,
    lastUpdated: Date,
    skiDays: Number
}, {collection: 'notes'});

export default noteSchema;