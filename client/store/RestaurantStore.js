import {create} from "zustand";
import axios from "axios";

const useRestaurantStore = create((set) => ({

    createRestaurant: [],
    updateRestaurant: [],
    readRestaurant: [],

    RestaurantFormValue: {
        restaurantName: '',
        city: '',
        country: '',
        deliveryPrice: '',
        estemetedDeliveryTime: '',
        cuisines: [],
        menuItems: [],
        image: '',

    },
    setRestaurantFormValue: (name, value) => {
        set((state) => {
            return {
                RestaurantFormValue: {
                    ...state.RestaurantFormValue,
                    [name]: value
                }
            }
        })
    },
    CreateRestaurantRequest: async (reqBody,accessToken) => {
        try{
            let result = await axios.post("http://localhost:5050/api/create-restaurant", reqBody, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${accessToken}`
                }
            })
            if (result.data.status === "success") {
                set({ createRestaurant: result.data['message'] })
            }
        }catch (e) {
            console.log(e)
        }
    },
    updateRestaurantRequest: async (reqBody,accessToken) => {
    try{
        let result = await axios.post("http://localhost:5050/api/update-restaurant", reqBody, {
            headers: {
                "Content-Type": "multipart/form-data",
                Authorization: `Bearer ${accessToken}`
            }
        })
        if (result.data.status === "success") {
            set({ updateRestaurant: result.data['message'] })
            set({ readRestaurant: result.data['data'] })
        }
    }catch (e) {
        console.log(e)
    }
  },


    ReadRestaurantRequest: async (accessToken) => {
        try{
            let result = await axios.get("http://localhost:5050/api/my-restaurant", {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: `Bearer ${accessToken}`
                }
            })
            if (result.data.status === "success") {
                set({ readRestaurant: result.data['data'] })
             set({ RestaurantFormValue: {
                 ...result.data['data']
             }})

            }
        }catch (e) {
            console.log(e)
        }
    }


}))

export default useRestaurantStore