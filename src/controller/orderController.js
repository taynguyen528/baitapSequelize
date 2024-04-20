import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { response } from "../config/response.js";

const model = initModels(sequelize);

export const addOrder = async (req, res) => {
    const { userId, foodId, amount, code, arrSubId } = req.body;
    try {
        const newOrder = await model.orders.create({
            user_id: userId,
            food_id: foodId,
            amount: amount,
            code: code,
            arr_sub_id: arrSubId,
        });
        response(res, newOrder, "Order added successfully", 200);
    } catch (error) {
        console.error(error);
        response(res, null, error, 500);
    }
};
