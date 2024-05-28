import React from 'react';
import LandingPic from "../../assets/images/landing.png";
import DownloadPic from "../../assets/images/appDownload.png";
const Landing = () => {
    return (
        <div className="flex flex-col md:flex-row gap-4 w-full max-h-[500px] mx-auto my-14 p-3 justify-between items-center">
            <div className="flex flex-col gap-4 w-full md:w-1/2 h-auto">
                <img src={LandingPic} className="w-full h-full" />

            </div>
            <div className="flex flex-col gap-8 w-full md:w-1/2 h-auto items-center  justify-center">
                <h1 className="text-4xl font-bold text-gray-800 text-center tracking-tight">
                    Order Takeaway Even Faster
                </h1>
                <p className="text-lg   text-center text-gray-500 tracking-tight">
                    Get your food delivered to your door within 30 minutes. No waiting time, no hassle.
                </p>

                <img src={DownloadPic} className="w-3/5 mb-3"  />

            </div>

        </div>
    );
};

export default Landing;
