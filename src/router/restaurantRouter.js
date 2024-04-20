import express from "express";
import {
    addRestaurantRating,
    getListOfLikesByRestaurant,
    likeRestaurant,
    unlikeRestaurant,
    getListOfRatingsByRestaurant,
} from "../controller/restaurantController.js";

const restaurantRouter = express.Router();

restaurantRouter.post("/like-restaurant", likeRestaurant);
restaurantRouter.post("/unlike-restaurant", unlikeRestaurant);
restaurantRouter.get("/getListOfLikesByRestaurant", getListOfLikesByRestaurant);
restaurantRouter.post("/addRestaurantRating", addRestaurantRating);
restaurantRouter.get(
    "/getListOfRatingsByRestaurant",
    getListOfRatingsByRestaurant
);

export default restaurantRouter;
