import mongoose from 'mongoose';
import noteSchema from './note';
const { Schema } = mongoose;

const imageSchema = new mongoose.Schema({
    url: String,
    description: String
});

const skiSchema = new mongoose.Schema({
    yearCurrent: Number,
    yearReleased: Number,
    yearsActive: [Number],
    retired: { type: Boolean, default: false},
    manufacturer: { type: Schema.Types.ObjectId, ref: 'Manufacturer' },
    model: String,
    parent: { type: Schema.Types.ObjectId, ref: 'Ski', default: null },
    family: { type: Schema.Types.ObjectId, ref: 'SkiFamily' },
    lengths: [Number],
    reviewedLength: Number,
    measuredLength: Number,
    weightStated: Number,
    weightMeas: [Number],
    dimTip: Number,
    dimWaist: Number,
    dimTail: Number,
    dimTipMeas: Number,
    dimWaistMeas: Number,
    dimTailMeas: Number,
    sidcutStated: Number,
    splayTip: Number,
    splayTail: Number,
    camberStated: Number,
    camberMeas: Number,
    core: String,
    mountPointRec: [String],
    mountPointRev: String,
    bootsRev: String,
    bindingRev: String,
    flexTip: String,
    flexShovel: String,
    flexFront: String,
    flexFoot: String,
    flexBack: String,
    flexTail: String,
    skiComps: [{ type: Schema.Types.ObjectId, ref: 'SkiComp' }],
    guideInfo: [{ type: Schema.Types.ObjectId, ref: 'GuideSki' }],
    notes: [noteSchema],
    images: [imageSchema]
}, {collection: 'skis'});

export default skiSchema;