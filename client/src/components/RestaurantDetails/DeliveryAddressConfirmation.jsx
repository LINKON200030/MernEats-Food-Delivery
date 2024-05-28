import React, {useEffect} from 'react';
import {useAuth0} from "@auth0/auth0-react";
import {useUserStore} from "../../../store/UserStore.js";
import {Button} from "@/components/ui/button.jsx";
import {toast} from "react-hot-toast";
import {useNavigate} from "react-router-dom";


const DeliveryAddressConfirmation = () => {
    let navigate = useNavigate();
    const {user, getAccessTokenSilently} = useAuth0();

    const {ProfileFromValue,ProfileFormValueOnChange,ReadUserRequest,UpdateUserRequest}= useUserStore();

    useEffect(() => {
        (async () => {
            let accessToken = await getAccessTokenSilently();
            await ReadUserRequest(accessToken)
        })()
    },[ReadUserRequest])

    const SaveProfile = async ()  => {
        let accessToken = await getAccessTokenSilently();
         await UpdateUserRequest(
            {
                ...ProfileFromValue,
                Auth0Id: user.sub,
                email: user.email
            }, accessToken
        )
        sessionStorage.setItem(`CustomerDeliveryAddress-${user.sub}`, JSON.stringify(ProfileFromValue))

        navigate("/order-confirmation")

    }




    return (
        <div className="w-full flex flex-col gap-1">
            <div className="w-full flex flex-col ">
                <label className="form-label text-gray-700 font-semibold " id="customerName">Email</label>
                <input
                    defaultValue={
                        user?.email
                    }
                    readOnly={true}
                    className="form-control opacity-60 font-semibold  border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-1 focus:outline-none "
                    id="customerName"/>
            </div>
            <div className="w-full flex items-center space-x-4 justify-between">
                <div className="w-full flex flex-col ">
                    <label className="form-label text-gray-700 font-semibold " id="customerName">Name</label>
                    <input
                        value={ProfileFromValue.name}
                        onChange={(e) => ProfileFormValueOnChange("name", e.target.value)}

                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-1 focus:outline-none "
                        id="customerName"/>
                </div>
                <div className="w-full flex flex-col ">
                    <label className="form-label text-gray-700 font-semibold " id="customerName">Phone</label>
                    <input

                        value={ProfileFromValue.phone}
                        onChange={(e) => ProfileFormValueOnChange("phone", e.target.value)}
                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-1 focus:outline-none "
                        id="customerName"/>
                </div>

            </div>
            <div className="w-full md:w-full flex flex-col ">
                <label className="form-label text-gray-700 font-semibold " id="customerName">Address
                    Line
                    1</label>
                <input
                    value={ProfileFromValue.address}
                    onChange={(e) => ProfileFormValueOnChange("address", e.target.value)}
                    className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-1 focus:outline-none "
                    id="customerName"/>
            </div>
            <div className="w-full flex items-center space-x-4 justify-between">
                <div className="w-full md:w-full flex flex-col ">
                    <label className="form-label text-gray-700 font-semibold "
                           id="customerName">City</label>
                    <input
                        value={ProfileFromValue.city}
                        onChange={(e) => ProfileFormValueOnChange("city", e.target.value)}
                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-1 focus:outline-none "
                        id="customerName"/>
                </div>
                <div className="w-full flex flex-col ">
                    <label className="form-label text-gray-700 font-semibold " id="customerName">Country</label>
                    <input
                        value={ProfileFromValue.country}
                        onChange={(e) => ProfileFormValueOnChange("country", e.target.value)}
                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full  rounded mt-1 focus:outline-none "
                        id="customerName"/>
                </div>
            </div>
            <Button
                onClick={() => SaveProfile()}

                className="w-full flex items-center justify-center mx-auto mt-4 bg-orange-500">
               Go to Payment
            </Button>


        </div>
    );
};

export default DeliveryAddressConfirmation;
