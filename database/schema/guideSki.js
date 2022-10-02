import mongoose from 'mongoose';
const { Schema } = mongoose;

const guideSkiSchema = new mongoose.Schema({
    ski: { type: Schema.Types.ObjectId, ref: 'Ski' },
    year: Number,
    category: String,
    specLength: Number,
    blurb: String
}, {collection: 'guideSkis'});

export default guideSkiSchema;