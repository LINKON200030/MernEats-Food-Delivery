import {create} from 'zustand';
import axios from "axios";


const UseRestaurantListStore = create((set) => ({
    SearchByCity:[],

    RestaurantByID: [],


   SearchByCityRequest: async (city, searchQuery="", page=1,selectedCuisines=[]) => {
       try{
           let result=await axios.get(`/api/restaurant/search/${city}?searchQuery=${searchQuery}&page=${page}&selectedCuisine=${selectedCuisines}`);
           if (result.data["status"] === "success") {
               set({
                   SearchByCity: result.data["data"],

               })
           }
           console.log(result.data["data"])

       }catch (error) {
           console.log(error);
       }
   },

    RestaurantByIDRequest: async (id) => {
        try{
            let result=await axios.get(`/api/restaurant/${id}`);
            if (result.data["status"] === "success") {
                set({
                    RestaurantByID: result.data["data"],
                })
            }

        }catch (error) {
            console.log(error);
        }
    },



    SearchCity: "",
    setSearchCity: (value) => {
        set({SearchCity: value})
    }


}))

export default UseRestaurantListStore