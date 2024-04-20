import express from "express";
import foodRouter from "./foodRouter.js";
import restaurantRouter from "./restaurantRouter.js";
import orderRouter from "./orderRouter.js";

const rootRouter = express.Router();

rootRouter.use("/food", foodRouter);
rootRouter.use("/restaurant", restaurantRouter);
rootRouter.use("/order", orderRouter);

export default rootRouter;
