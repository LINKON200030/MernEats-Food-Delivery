import React from 'react';
import { IoSearch } from "react-icons/io5";
import {Button} from "@/components/ui/button.jsx";
import {Link} from "react-router-dom";
import UseRestaurantList from "../../../store/RestaurantList.js";

const SearchByTownOrCity = () => {
   const { SearchCity,setSearchCity} = UseRestaurantList();

   const clearHandler=()=>{
       setSearchCity("")
   }



    return (
        <div className="search-by-town-or-city container">
            <div className="relative  bg-white w-full md:w-[80%] rounded-md mx-auto flex flex-col items-center shadow-lg py-5 px-12 -mt-10">
                <div className="card-body text-center flex flex-col gap-3">
                    <h1 className="card-title text-xl md:text-3xl font-bold tracking-tight text-orange-600">Take Into A Takeaway Today</h1>
                    <span className="divider divider-horizontal divider-center divider-2 divider-primary text-sm md:text-xl font-semibold opacity-60 tracking-tight" >
                        Food Is Just A Click Away
                    </span>
                </div>
                <div className=" w-full md:w-5/6 flex items-center px-4 mt-8 mb-3   rounded-lg border border-gray-200 shadow">
                    <div className="text-orange-600 hidden md:block text-sm md:text-lg ">
                        <IoSearch />
                    </div>
                    <input
                        value={SearchCity}
                        onChange={(e)=>setSearchCity(e.target.value)}
                        type="text"
                        placeholder="Search by Town or City"
                        className="input input-bordered text-sm w-full md:p-3 py-3    focus:outline-none"
                    />
                    <div className="ml-auto flex items-center gap-x-5">

                        <Button
                            onClick={clearHandler}
                            type="submit"
                            variant="primary"
                            className={`${
                                SearchCity.length > 0
                                    ? "text-black shadow bg-white rounded-lg py-1 px-3 text-sm"
                                    : "hidden"
                            }`}
                        >
                            Clear
                        </Button>
                       <Link to={SearchCity.length>0?`/search-by-city/${SearchCity}`:"/"}>

                           <Button type="submit" variant="primary" className="bg-orange-500  rounded-lg py-1 px-3 text-white text-sm hover:bg-orange-600" size="xs"  >
                               Search
                           </Button>
                       </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SearchByTownOrCity;
