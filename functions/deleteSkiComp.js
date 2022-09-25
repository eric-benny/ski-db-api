const { SkiCompModel } = require('../database/model/skiComp');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const deleteSkiComp = async (event, context) => {
  try {
    await connectToDatabase();
    const skiCompId = event.pathParameters ? event.pathParameters.skiCompId : undefined;

    await SkiCompModel.deleteOne({_id: skiCompId});

    return response.success({
      message: 'Ski Comp has been deleted successfully.',
      data: {message: 'Ski Comp has been deleted successfully.'}
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};