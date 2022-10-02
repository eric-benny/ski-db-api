const { GuideSkiModel } = require('../database/model/guideSki');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const create = async (event, context) => {
  try {
    await connectToDatabase();

    const data = JSON.parse(event.body);

    const guideSki = await GuideSkiModel.create(data);

    return response.success({
      message: 'Guide Ski has been created successfully.',
      data: guideSki.toObject()
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};