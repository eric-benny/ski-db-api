const { SkiModel } = require('../database/model/ski');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const update = async (event, context) => {
  try {
    await connectToDatabase();
    const skiId = event.pathParameters ? event.pathParameters.skiId : undefined;

    const data = JSON.parse(event.body);

    await SkiModel.updateOne({_id: skiId}, data);

    return response.success({
      message: 'Ski has been updated successfully.',
      data: {message: 'Ski has been updated successfully.'}
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};