const { SkiCompModel } = require('../database/model/skiComp');
const { SkiModel } = require('../database/model/ski');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const deleteSkiComp = async (event, context) => {
  try {
    await connectToDatabase();
    const skiCompId = event.pathParameters ? event.pathParameters.skiCompId : undefined;

    const comp = await SkiCompModel.findOne({ _id: skiCompId });

    const primarySki = await SkiModel.findOne({ _id: comp.primarySki });
    await SkiModel.updateOne({_id: primarySki._id}, {skiComps: primarySki.skiComps.filter(c => c.toString() !== comp._id.toString())});
    const secondarySki = await SkiModel.findOne({ _id: comp.secondarySki });
    await SkiModel.updateOne({_id: secondarySki._id}, {skiComps: secondarySki.skiComps.filter(c => c.toString() !== comp._id.toString())});

    await SkiCompModel.deleteOne({_id: skiCompId});

    return response.success({
      message: 'Ski Comp has been deleted successfully.',
      data: {message: 'Ski Comp has been deleted successfully.'}
    });
  } catch (e) {
    return response.fail({ message: e.message });
  }
};