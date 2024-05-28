import React, {useEffect} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {useUserStore} from "../../../store/UserStore.js";
import {Toaster, toast} from "react-hot-toast";


const Profile = () => {

    const {user, getAccessTokenSilently} = useAuth0();

    const {ProfileFromValue,ProfileFormValueOnChange,ReadUserRequest,UpdateUserRequest}= useUserStore();

    useEffect(() => {
        (async () => {
            let accessToken = await getAccessTokenSilently();
            await ReadUserRequest(accessToken)
        })()
    },[getAccessTokenSilently,ReadUserRequest])



    const SaveProfile = async ()  => {
        let accessToken = await getAccessTokenSilently();

       let result = await UpdateUserRequest(
           {
               ...ProfileFromValue,
               Auth0Id: user.sub,
               email: user.email
           }, accessToken
       )
        if (result){
            toast.success("Profile updated successfully")
            await ReadUserRequest()

        }

    }
    console.log(ProfileFromValue)

    return (
        <div className="section">
            <div className="container  my-10">
                <div className="card shadow-sm bg-gradient-to-b from-gray-100 to-gray-50 rounded-sm mx-auto py-5 md:py-10  ">
                <div className="row px-8 md:px-16 py-5 ">

                    <h5 className="text-left mb-1 py-1 text-3xl font-bold text-gray-700 ">User Profile</h5>
                    <p className="text-left mb-4 text-gray-400 font-semibold">View and change your profile information here</p>
                    <hr/>
                    <div className="flex flex-col gap-y-10 justify-between items-center mt-5 ">
                        <div className="w-full flex flex-col ">
                            <label className="form-label text-gray-700 font-semibold " id="customerName">Email</label>
                            <input
                                defaultValue={
                                    user?.email
                                }
                                readOnly={true}
                                className="form-control opacity-60 font-semibold  border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-3 focus:outline-none "
                                id="customerName"/>
                        </div>

                        <div className="w-full flex flex-col ">
                            <label className="form-label text-gray-700 font-semibold " id="customerName">Name</label>
                            <input
                                value={ProfileFromValue.name}
                                onChange={(e) => ProfileFormValueOnChange("name", e.target.value)}

                                className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-3 focus:outline-none "
                                id="customerName"/>
                        </div>
                        <div className="w-full flex flex-col ">
                            <label className="form-label text-gray-700 font-semibold " id="customerName">Phone</label>
                            <input

                                value={ProfileFromValue.phone}
                                onChange={(e) => ProfileFormValueOnChange("phone", e.target.value)}
                                className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-3 focus:outline-none "
                                id="customerName"/>
                        </div>
                        <div className="w-full flex flex-col gap-y-10 md:flex-row gap-x-16">
                            <div className="w-full md:w-1/2 flex flex-col ">
                                <label className="form-label text-gray-700 font-semibold " id="customerName">Address
                                    Line
                                    1</label>
                                <input
                                    value={ProfileFromValue.address}
                                    onChange={(e) => ProfileFormValueOnChange("address", e.target.value)}
                                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-3 focus:outline-none "
                                    id="customerName"/>
                            </div>
                            <div className="w-full md:w-1/2  flex flex-col ">
                                <label className="form-label text-gray-700 font-semibold "
                                       id="customerName">City</label>
                                <input
                                    value={ProfileFromValue.city}
                                    onChange={(e) => ProfileFormValueOnChange("city", e.target.value)}
                                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-3 focus:outline-none "
                                    id="customerName"/>
                            </div>
                        </div>

                        <div className="w-full flex flex-col ">
                            <label className="form-label text-gray-700 font-semibold " id="customerName">Country</label>
                            <input
                                value={ProfileFromValue.country}
                                onChange={(e) => ProfileFormValueOnChange("country", e.target.value)}
                                className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-3 focus:outline-none "
                                id="customerName"/>
                        </div>


                    </div>

                    <button
                        onClick={SaveProfile}
                        className="btn btn-primary mt-10 bg-orange-500 rounded text-white w-1/4 py-2 font-semibold hover:bg-orange-600 ">Update
                    </button>



                </div>



                </div>
                <Toaster position="top-center"/>
            </div>


        </div>
    );

};

export default Profile;
