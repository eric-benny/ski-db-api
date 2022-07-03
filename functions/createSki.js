const mongoose = require('mongoose');

const { SkiModel } = require('../database/model/ski');
const response = require('../libs/response');

let cachedDB = null;

async function connectToDatabase (uri, options = {}) {
  if (!cachedDB) cachedDB = await mongoose.connect(uri);
}

export const create = async (event, context) => {
  try {
    await connectToDatabase(process.env.DB);
    console.log("connected to db");

    const data = JSON.parse(event.body);

    console.log(data);

    const ski = await SkiModel.create(data);

    console.log(ski);

    return response.success({
      message: 'Ski has been created successfully.',
      data: ski.toObject()
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};