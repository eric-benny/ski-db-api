const { GuideSkiModel } = require('../database/model/guideSki');
const response = require('../libs/response');
const { connectToDatabase } = require('../libs/db');


export const update = async (event, context) => {
    try {
        await connectToDatabase();
        const guideSkiId = event.pathParameters ? event.pathParameters.guideSkiId : undefined;

        const data = JSON.parse(event.body);

        await GuideSkiModel.updateOne({ _id: guideSkiId }, data);

        return response.success({
            message: 'Guide Ski has been updated successfully.',
            data: {
                message: 'Guide Ski has been updated successfully.',
                id: guideSkiId
            }
        });
    } catch (e) {
        return response.fail({ message: e.message });
    }
};