import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { response } from "../config/response.js";

const model = initModels(sequelize);

export const likeRestaurant = async (req, res) => {
    const { userId, restaurantId } = req.body;
    try {
        const like = await model.rate_res.create({
            user_id: userId,
            res_id: restaurantId,
            amount: 1,
        });
        response(res, like, "Like a successful restaurant.", 200);
    } catch (error) {
        console.error(error);
        response(res, null, error, 500);
    }
};

export const unlikeRestaurant = async (req, res) => {
    const { userId, restaurantId } = req.body;
    try {
        await model.rate_res.destroy({
            where: { user_id: userId, res_id: restaurantId },
        });
        response(res, null, "Unlike successful restaurants.", 200);
    } catch (error) {
        console.error(error);
        response(res, null, error, 500);
    }
};

export const getListOfLikesByRestaurant = async (req, res) => {
    const { restaurantId } = req.query;
    try {
        const likesCount = await model.rate_res.count({
            where: { res_id: restaurantId },
        });
        response(
            res,
            { restaurantId, likesCount },
            "Get the list of likes by restaurant successfully.",
            200
        );
    } catch (error) {
        console.error(error);
        response(res, null, error, 500);
    }
};

export const addRestaurantRating = async (req, res) => {
    const { userId, restaurantId, rating } = req.body;
    try {
        const review = await model.rate_res.create({
            user_id: userId,
            res_id: restaurantId,
            amount: rating,
        });
        response(res, review, "Add successful restaurant reviews.", 200);
    } catch (error) {
        console.error(error);
        response(res, null, error, 500);
    }
};

export const getListOfRatingsByRestaurant = async (req, res) => {
    const { restaurantId } = req.query;
    try {
        const restaurantRatings = await model.rate_res.findAll({
            where: { res_id: restaurantId },
            attributes: [
                [sequelize.literal("res_id"), "restaurantId"],
                [
                    sequelize.fn("COUNT", sequelize.col("res_id")),
                    "totalRatings",
                ],
            ],
            group: ["res_id"],
        });
        response(
            res,
            restaurantRatings,
            "Get the list of reviews by successful restaurant.",
            200
        );
    } catch (error) {
        console.error(error);
        response(res, null, error, 500);
    }
};
