const { SkiFamilyModel } = require('../database/model/skiFamily');
require('../database/model/manufacturer');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const create = async (event, context) => {
  try {
    await connectToDatabase();
    console.log("connected to db");

    const data = JSON.parse(event.body);

    console.log(data);

    const skiFamily = await SkiFamilyModel.create(data);

    console.log(skiFamily);

    return response.success({
      message: 'Ski Family has been created successfully.',
      data: skiFamily.toObject()
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};

export const get = async (event, context) => {
  try {
    await connectToDatabase();
    console.log("connected to db");

    const manufacturerID = event.pathParameters ? event.pathParameters.manufacturer : undefined;
    console.log(manufacturerID);
    let skiFamilies;
    if (manufacturerID) {
      skiFamilies = await SkiFamilyModel.find({manufacturer: manufacturerID});
    } else {
      skiFamilies = await SkiFamilyModel.find({}).populate('manufacturer');
    }

    console.log(skiFamilies);

    return response.success({
      message: 'Ski Families.',
      data: skiFamilies
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};