const { ManufacturerModel } = require('../database/model/manufacturer');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const create = async (event, context) => {
  try {
    await connectToDatabase();
    console.log("connected to db");

    const data = JSON.parse(event.body);

    console.log(data);

    const manufacturer = await ManufacturerModel.create(data);

    console.log(manufacturer);

    return response.success({
      message: 'Manufacturer has been created successfully.',
      data: manufacturer.toObject()
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};

export const get = async (event, context) => {
  try {
    await connectToDatabase();
    const manufacturers = await ManufacturerModel.find({});

    return response.success({
      data: manufacturers
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};