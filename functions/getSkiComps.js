const { SkiCompModel } = require('../database/model/skiComp');
require('../database/model/ski');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const get = async (event, context) => {
  try {
    await connectToDatabase();
    const skiCompId = event.pathParameters ? event.pathParameters.skiCompId : undefined;

    if (skiCompId) {
      const skiComp = await SkiCompModel.findOne({ _id: skiCompId });
      return response.success({
        message: 'skiComp',
        data: skiComp
      });
    } else {
      const skiComps = await SkiCompModel.find({});
      return response.success({
        message: 'Ski Cmps',
        data: skiComps
      });
    }
  } catch (e) {
    return response.fail({ message: e.message });
  }
};