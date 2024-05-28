import React from 'react';
import {Separator} from "@/components/ui/separator.jsx";
import { FaEuroSign } from "react-icons/fa6";
import {Card} from "@/components/ui/card.jsx";


const MenuCard = ({Menu,addToCart}) => {
    return (
        <div className="grid grid-cols-1 gap-4">
            <h3 className="text-2xl mt-5  font-bold">Menu Items</h3>
            <Separator/>
            {
                Menu.map((item, index) => (
                    <Card key={index} onClick={() => addToCart(item)} className="card bg-gray-50 border border-gray-200 shadow hover:shadow-lg hover:transform hover:translate-x-2 transition duration-700 hover:scale-100 rounded-lg">

                        <div className="card-body flex flex-col px-3 py-2">
                            <h2 className="card-title text-xl font-bold mb-3">{item.name}</h2>
                            <p className="text-lg font-semibold text-green-900">
                                <FaEuroSign className="inline mr-1 items-center"/>{item.price}

                            </p>
                        </div>
                    </Card>
                ))
            }
            {
                Menu.length === 0 && <h1 className="text-3xl font-bold text-center">No Menu Found</h1>
            }
        </div>
    );
};

export default MenuCard;
