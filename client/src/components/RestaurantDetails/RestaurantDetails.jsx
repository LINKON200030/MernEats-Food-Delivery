import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import UseRestaurantListStore from '../../../store/RestaurantList.js';
import DetailsInfoCard from '@/components/RestaurantDetails/DetailsInfoCard.jsx';
import MenuCard from '@/components/RestaurantDetails/MenuCard.jsx';
import OrderDetails from "@/components/RestaurantDetails/OrderDetails.jsx";
import { Card } from "@/components/ui/card.jsx";

const RestaurantDetails = () => {
    const { id } = useParams();
    const { RestaurantByID, RestaurantByIDRequest } = UseRestaurantListStore();
    const [cartItems, setCartItems] = useState(() => {

        const storedCartItems = sessionStorage.getItem(`cartItems-${id}`);
        if (storedCartItems) {
            return JSON.parse(storedCartItems);
        } else {
            return [];
        }
    });




    useEffect(() => {
        (async () => {
            await RestaurantByIDRequest(id);
        })();
    }, [id, RestaurantByIDRequest]);

    const addToCart = (menuItem) => {
        setCartItems((prevCartItems) => {
            const existingMenuItem = prevCartItems.find((cartItem) =>
                cartItem._id === menuItem._id
            );
            let updatedCartItems;
            if (existingMenuItem) {
                updatedCartItems = prevCartItems.map((cartItem) => {
                    if (cartItem._id === existingMenuItem._id) {
                        return { ...cartItem, quantity: cartItem.quantity + 1 };
                    }
                    return cartItem;
                });
            } else {
                updatedCartItems = [...prevCartItems, { ...menuItem, quantity: 1 }];
            }
            sessionStorage.setItem(`cartItems-${id}`, JSON.stringify(updatedCartItems));
            return updatedCartItems;


        });
    };
   const removeFromCart=(cartItem)=>{
        setCartItems((prevCartItems) => {

            const updatedCartItems = prevCartItems.filter((item) => item._id !== cartItem._id);


            sessionStorage.setItem(`cartItems-${id}`, JSON.stringify(updatedCartItems));
            return updatedCartItems;


        });

   }

    return (
        <div className="my-7 w-11/12 mx-auto">
            {RestaurantByID.data ? (
                <div className="w-full flex flex-col justify-center items-center">
                    <div id="Restaurant-image" className="w-full">
                        <img src={RestaurantByID.data.image} className="w-full h-60 md:h-96  object-cover rounded-3xl" alt="Restaurant" />
                    </div>
                    <div className="my-6  justify-center w-full md:mx-28 md:flex md:flex-row   gap-4 ">
                        <div id="Restaurant-info&menu" className="grid grid-cols-1 gap-4 w-full md:w-7/12">
                            <DetailsInfoCard
                                RestaurantName={RestaurantByID.data.restaurantName}
                                RestaurantCity={RestaurantByID.data.city}
                                RestaurantCountry={RestaurantByID.data.country}
                                cuisines={RestaurantByID.data.cuisines}
                            />
                            <MenuCard Menu={RestaurantByID.data.menuItems} addToCart={addToCart} />
                        </div>
                        <div className="md:w-5/12 w-full ">
                            <OrderDetails cartItems={cartItems} removeFromCart={removeFromCart}  restaurant={RestaurantByID.data} />
                        </div>
                    </div>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default RestaurantDetails;
