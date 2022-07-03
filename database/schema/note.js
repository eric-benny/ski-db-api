import mongoose from 'mongoose';

const noteSchema = new mongoose.Schema({
    user: String,
    note: String,
    lastUpdated: Date
});

export default noteSchema;