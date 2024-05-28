import {create} from "zustand";
import axios from "axios";
import Profile from "@/components/user/Profile.jsx";
import UnAuthorizedHandler from "../src/utility/unothoraizedHandler.js";


export const useUserStore = create((set) => ({
    CreateUser:[],
    UpdateUser: [],
    ReadUser: [],

    CreateUserRequest: async (reqBody,accessToken) => {

       let result = await axios.post("http://localhost:5050/api/user", reqBody,{
           headers: {
               Authorization: `Bearer ${accessToken}`
           }
       })
        if (result.data.status==="success") {
            set({ CreateUser: result.data['message'] })

        }
    },


    ProfileFromValue:{
      name:'',city:'',country:'',phone:'',address:''
    },

    ProfileFormValueOnChange: (name, value) => {
        set((state) => {
            return {
                ProfileFromValue: {
                    ...state.ProfileFromValue,
                    [name]: value
                }
            };
        })
    },



    UpdateUserRequest: async (reqBody,accessToken) => {
        try
        {
            let result = await axios.post("http://localhost:5050/api/user", reqBody, {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            })
            if (result.data.status === "success") {
                set({UpdateUser: result.data['message']})
            }

        } catch (error) {
            UnAuthorizedHandler(error.response.status);
        }

    },

    ReadUserRequest: async (accessToken) => {
        try {
            let result = await axios.get("http://localhost:5050/api/user/profile", {
                headers: {
                    Authorization: `Bearer ${accessToken}`
                }
            });
            console.log(result.data['data']);

            if (result.data.status === "success") {
                set({
                    ReadUser: result.data['data'],
                    ProfileFromValue: {
                        ...result.data['data']
                    },
                });


            } else {
                set({
                    ReadUser: [],
                    ProfileFromValue: {
                        name: '',
                        city: '',
                        country: '',
                        phone: '',
                        address: ''
                    }
                });
            }
        } catch (error) {
            UnAuthorizedHandler(error.response.status);
            // Handle error as needed
        }
    },





}))


