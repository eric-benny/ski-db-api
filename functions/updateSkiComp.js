const { SkiCompModel } = require('../database/model/skiComp');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const update = async (event, context) => {
  try {
    await connectToDatabase();
    const skiCompId = event.pathParameters ? event.pathParameters.skiCompId : undefined;

    const data = JSON.parse(event.body);

    await SkiCompModel.updateOne({_id: skiCompId}, data);

    return response.success({
      message: 'Ski Comp has been updated successfully.',
      data: {message: 'Ski Comp has been updated successfully.'}
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};