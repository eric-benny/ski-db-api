import mongoose from 'mongoose';
import noteSchema from './note';
const { Schema } = mongoose;

const comparisonSchema = new mongoose.Schema({
    attribute: String,
    quantifier: {
        type: Number,
        validate: {
            validator: function (v) {
                return Number.isInteger(v) && (v === -1 || v === 0 || v === 1)
            },
            message: "must be integer -1, 0 or 1"

        }
    }
});

const skiCompSchema = new mongoose.Schema({
    primarySki: { type: Schema.Types.ObjectId, ref: 'Ski' },
    secondarySki: { type: Schema.Types.ObjectId, ref: 'Ski' },
    comps: [comparisonSchema],
    notes: String
}, {collection: 'skiComps'});

export default skiCompSchema;