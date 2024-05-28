
import React, {useEffect} from 'react';
import {Button} from "@/components/ui/button.jsx";
import {PiArrowElbowRightBold} from "react-icons/pi";

const BookingGreetings = () => {
    useEffect(() => {
        setTimeout(() => {
            window.location.href = "/";
        }, 10000);
    }, []);
    return (
        <div className="w-full h-screen flex justify-center items-center bg-white dark:bg-slate-800">
            <div
                className="text-center w-1/3 flex flex-col  items-center justify-center h-full space-y-5 p-4 text-2xl font-bold text-slate-700 dark:text-slate-300 ">
                <PiArrowElbowRightBold
                    className="w-12 h-12 bg-orange-500 p-3 rounded-full text-white dark:text-slate-300"/>
                <h1 style={{fontFamily: "The Nautigal"}} className="text-7xl ">Thank you!</h1>
                <p>Your tour has been booked!</p>
                <Button onClick={() => window.location.href = "/"}
                        className="w-full bg-orange-500 text-white hover:bg-orange-600">Send To Home</Button>
            </div>

        </div>
    );
};

export default BookingGreetings;
