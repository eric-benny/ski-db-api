const { GuideSkiModel } = require('../database/model/guideSki');
require('../database/model/skiFamily');
require('../database/model/manufacturer');
require('../database/model/user');
require('../database/model/skiComp');
require('../database/model/ski');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const get = async (event, context) => {
    try {
        await connectToDatabase();
        const year = event.pathParameters ? event.pathParameters.year : undefined;

        if (year) {
            const skis = await GuideSkiModel.find({ year: year }).populate([{
                path: 'ski',
                model: 'Ski',
                populate: [{
                    path: 'manufacturer',
                    model: 'Manufacturer'
                }]
            }]);
            return response.success({
                message: 'Guide Skis',
                data: skis
            });
        } else {
            const skis = await GuideSkiModel.find({});
            return response.success({
                message: 'Guide Skis',
                data: skis
            });
        }
    } catch (e) {
        return response.fail({ message: e.message });
    }
};