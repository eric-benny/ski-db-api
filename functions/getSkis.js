const { SkiModel } = require('../database/model/ski');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const get = async (event, context) => {
  try {
    await connectToDatabase();
    const skis = await SkiModel.find({});

    return response.success({
      data: skis
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};