import React from 'react';
import {Link} from "react-router-dom";

const RestaurantSearchInfo = ({total, city}) => {
    return (
        <div className="flex justify-between  items-centerm md:gap-x-5 font-semibold text-red-500" >

           <span className="flex flex-col text-xl md:flex-row justify-between items-center ">
                {total}  restaurants found in {city}
               <Link to="/" className="md:ml-3 ml-0 text-black text-sm underline font-semibold hover:text-blue-700" >
                Change Location
            </Link>
           </span>

            Insert Sort Option Here

        </div>
    );
};

export default RestaurantSearchInfo;
