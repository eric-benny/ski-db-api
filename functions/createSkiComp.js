const { SkiCompModel } = require('../database/model/skiComp');
const { SkiModel } = require('../database/model/ski');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const create = async (event, context) => {
  try {
    await connectToDatabase();
    console.log("connected to db");

    const data = JSON.parse(event.body);

    // console.log(data);

    const dupeSkiComp = await SkiCompModel.findOne({ primarySki: data.secondarySki, secondarySki: data.primarySki });

    if (dupeSkiComp) {
        return response.fail({ message: "Duplictate Error: ski comp for two specified skis already exists" });
    }

    const comp = await SkiCompModel.create(data);

    // console.log(comp);

    await SkiModel.updateOne(
        { _id: comp.primarySki },
        { $push: { skiComps: comp._id } }
    );

    await SkiModel.updateOne(
        { _id: comp.secondarySki },
        { $push: { skiComps: comp._id } }
    );

    return response.success({
      message: 'Ski Comp has been created successfully.',
      data: comp.toObject()
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};