import React from 'react';
import { Link } from "react-router-dom";
import { AspectRatio } from "@/components/ui/aspect-ratio.jsx";
import { FaClock } from "react-icons/fa";
import { MdEuro } from "react-icons/md";

const SearchRestaurantCard = ({ Restaurants }) => {
    return (
        <div className="grid grid-cols-1 gap-y-8 my-6">
            {Restaurants.map((restaurant) => (
                <div key={restaurant._id} className="border border-gray-300 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition duration-300">
                    <Link to={`/detail/${restaurant._id}`} className="flex flex-col md:flex-row w-full items-start">
                        <div className="md:w-[55%] w-full">
                            <AspectRatio ratio={16 / 9}>
                                <img src={restaurant.image} alt={restaurant.restaurantName} className="w-full h-full rounded-t-lg" />
                            </AspectRatio>
                        </div>
                        <div className="p-4 flex flex-col justify-between w-full md:w-[45%]">
                            <h3 className="text-xl font-semibold mb-3 hover:text-green-900 hover:underline ">{restaurant.restaurantName}</h3>
                            <div className="flex flex-wrap mb-2">
                                {restaurant.cuisines.map((cuisine, index) => (
                                    <span key={index} className="text-sm mr-2 mb-1.5 bg-gray-200 rounded-full px-2 py-1">{cuisine}</span>
                                ))}
                            </div>
                            <div className="flex font-semibold items-center">
                                <FaClock className="text-green-600 mr-1" />
                                <span className="text-sm text-green-600">{restaurant.estemetedDeliveryTime} min</span>
                            </div>
                            <div className="flex font-semibold items-center mt-1 ">
                                <MdEuro className=" mr-1" />
                                <span className="text-sm text-gray-600">Delivery fee: {(restaurant.deliveryPrice / 100).toFixed(2)}</span>
                            </div>
                        </div>
                    </Link>
                </div>
            ))}
        </div>
    );
};

export default SearchRestaurantCard;
