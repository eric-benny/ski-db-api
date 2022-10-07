import mongoose from 'mongoose';
const { Schema } = mongoose;

const guideSkiSchema = new mongoose.Schema({
    ski: { type: Schema.Types.ObjectId, ref: 'Ski' },
    year: Number,
    category: String,
    specLength: Number,
    blurb: String
}, {collection: 'guideSkis'});

guideSkiSchema.index({ ski: 1, year: 1, category: 1, specLength: 1 }, {unique: true});

export default guideSkiSchema;