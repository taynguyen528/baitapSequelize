import express from "express";
import { addOrder } from "../controller/orderController.js";

const orderRouter = express.Router();

orderRouter.post("/addOrder", addOrder);

export default orderRouter;
