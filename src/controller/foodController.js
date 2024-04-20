import initModels from "../models/init-models.js";
import sequelize from "../models/connect.js";
import { response } from "../config/response.js";

const model = initModels(sequelize);

export const getFood = async (req, res) => {
    try {
        let data = await model.food.findAll();
        response(res, data, "Thành công", 200);
    } catch (error) {
        console.log(error);
        response(res, null, error, 500);
    }
};

