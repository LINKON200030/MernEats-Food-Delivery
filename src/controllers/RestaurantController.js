// RestaurantController.js
import {searchRestaurant, getRestaurant} from "../services/RestaurantService.js";

export const GetRestaurantController = async (req, res) => {
    try {
        const data = await getRestaurant(req);
        return res.json({
            status: "success",
            data: data,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "failed", message: "Something went wrong" });
    }
}
export const RestaurantBySearchKeywordController = async (req, res) => {
    try {


        const data = await searchRestaurant(req);

        return res.json({
            status: "success",
            data: data,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ status: "failed", message: "Something went wrong" });
    }
};

export default { GetRestaurantController, RestaurantBySearchKeywordController }