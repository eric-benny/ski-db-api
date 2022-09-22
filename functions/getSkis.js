const { SkiModel } = require('../database/model/ski');
require('../database/model/skiFamily');
require('../database/model/manufacturer');
require('../database/model/user');
require('../database/model/skiComp');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const get = async (event, context) => {
  try {
    await connectToDatabase();
    const skiId = event.pathParameters ? event.pathParameters.skiId : undefined;

    if (skiId) {
      const ski = await SkiModel.findOne({ _id: skiId }).populate(['manufacturer', 'family', {
        path: 'skiComps',
        model: 'SkiComp',
        populate: [{
          path: 'primarySki',
          model: 'Ski',
          select: 'model'
        },
        {
          path: 'secondarySki',
          model: 'Ski',
          select: 'model'
        }]
      }, 'notes.user']); // .populate(['skiComps.primarySki']); // .populate([{ path: 'skiComps.primarySki', model: 'Ski', select: 'model' }, { path: 'skiComps.secondarySki', model: 'Ski', select: 'model' },]);
      return response.success({
        message: 'Ski',
        data: ski
      });
    } else {
      const skis = await SkiModel.find({}).populate(['manufacturer', 'family']);
      return response.success({
        message: 'Skis',
        data: skis
      });
    }
  } catch (e) {
    return response.fail({ message: e.message });
  }
};