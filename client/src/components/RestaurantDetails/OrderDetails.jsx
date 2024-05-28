import React from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import {Separator} from "@/components/ui/separator.jsx";
import {Button} from "@/components/ui/button.jsx";
import {AiOutlineEuro} from "react-icons/ai";
import {Badge} from "@/components/ui/badge.jsx";
import {FaEuroSign} from "react-icons/fa6";
import {LuTrash} from "react-icons/lu";
import CheckoutButton from "@/components/RestaurantDetails/CheckoutButton.jsx";



const OrderDetails = ({cartItems,restaurant,removeFromCart}) => {

    const getTotalCost = ()=>{
       const totalInEuros=cartItems.reduce((total,cartItem)=>
            total+cartItem.price*cartItem.quantity,0)
        const totalWithDelivery=totalInEuros+restaurant.deliveryPrice

        return (totalWithDelivery/100).toFixed(2)

    }
    return (
        <Card className="w-full">
            <CardHeader>
                <CardTitle className="text-2xl tracking-tighter font-bold flex justify-between">
                 <span>Your Oder</span>
                    <span><FaEuroSign className="inline"/>{getTotalCost()}</span>
               </CardTitle>
            </CardHeader>
            <Separator/>
            <CardContent className="flex flex-col gap-3">
                {
                    cartItems.map((item)=>(
                        <div key={item._id} className="flex items-center my-2 justify-between">



                            <span>
                                 <Badge variant="outline" className="mr-2">
                                {item.quantity}
                                </Badge>
                                {item.name}
                            </span>
                            <span className="flex items-center gap-1">
                                <LuTrash className="text-red-500" onClick={()=>removeFromCart(item)} />
                                <FaEuroSign className="inline"/>

                                {((item.price * item.quantity)/100).toFixed(2)}

                            </span>
                        </div>
                    ))
                }
               <Separator/>
                <div className="flex justify-between text-gray-700 font-semibold tracking-tighter">
                    <span>Delivery Price</span>
                    <span><FaEuroSign className="inline"/>{(restaurant.deliveryPrice/100).toFixed(2)}</span>
                </div>
            </CardContent>
            <Separator/>
            <CardFooter className="mt-4">
              <CheckoutButton/>
            </CardFooter>
        </Card>

    );
};

export default OrderDetails;
