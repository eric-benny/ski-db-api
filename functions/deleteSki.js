const { SkiModel } = require('../database/model/ski');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const deleteSki = async (event, context) => {
  try {
    await connectToDatabase();
    const skiId = event.pathParameters ? event.pathParameters.skiId : undefined;

    console.log(skiId);

    await SkiModel.deleteOne({_id: skiId});

    return response.success({
      message: 'Ski has been deleted successfully.',
      data: {message: 'Ski has been deleted successfully.'}
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};