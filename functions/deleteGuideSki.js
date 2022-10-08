const { GuideSkiModel } = require('../database/model/guideSki');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const deleteGuideSki = async (event, context) => {
  try {
    await connectToDatabase();
    const guideSkiId = event.pathParameters ? event.pathParameters.guideSkiId : undefined;

    await GuideSkiModel.deleteOne({_id: guideSkiId});

    return response.success({
      message: 'Guide Ski has been deleted successfully.',
      data: {message: 'Guide Ski has been deleted successfully.'}
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};