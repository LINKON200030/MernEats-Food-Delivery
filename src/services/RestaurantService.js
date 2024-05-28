
import RestaurantModel from "../models/RestaurantModel.js";


const getRestaurant = async (req) => {
    try {
        const { RestaurantId } = req.params;
        const restaurant = await RestaurantModel.findById(RestaurantId);
        return {
            status: "success",
            data: restaurant,
        };
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
}




const searchRestaurant = async (req,res) => {
    try {
        let {city}=req.params;
        console.log(city)
        const {searchQuery,  selectedCuisines, sortOption, page } = req.query;

        const SearchQuery=searchQuery || "";
        const SelectedCuisines=selectedCuisines || "";
        const SortOption=sortOption || "lastUpdated";
        const Page=page || 1;

        let query = {};

        query["city"]=new RegExp(city, "i");
        const cityCheck=await RestaurantModel.countDocuments(query)
        if (cityCheck === 0) {
            return ({
                data: [],
                pagination: {
                    total: 0,
                    page: 1,
                    pages: 1,
                },
        })
        }
        if (SelectedCuisines){
            const cuisinesArray = SelectedCuisines.split(",")
                .map(cuisine => new RegExp(cuisine, "i"));

            query["cuisines"] = { $all: cuisinesArray };
        }
        if (SearchQuery) {
            const searchRegex = new RegExp(SearchQuery, "i");
            query["$or"] = [
                { restaurantName: searchRegex },
                { "menuItems.name": searchRegex },
                { cuisines: { $in: [searchRegex] } },
            ];
        }


        const pageSize = 10;
        const skip = (Page - 1) * pageSize;

        const restaurants = await RestaurantModel.find(query)
            .sort({ [SortOption]: 1 })
            .skip(skip)
            .limit(pageSize)
            .lean();

        const total = await RestaurantModel.countDocuments(query);

        return {
            data: restaurants,
            pagination: {
                total,
                Page,
                pages: Math.ceil(total / pageSize),
            },
        };
    } catch (error) {
        console.error(error);
        throw new Error("Something went wrong");
    }
};

export { getRestaurant, searchRestaurant };
