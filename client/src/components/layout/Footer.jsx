import React from 'react';
import {Link} from "react-router-dom";

const Footer = () => {
    return (
    <div className="footer  bottom-0  left-0 w-full  footer-center p-10 bg-orange-500  mb-2 text-white flex flex-col gap-2 md:flex-row md:justify-between justify-center items-center">
        <div>
            <Link to="/" className="text-3xl font-bold text-white tracking-tight">MernEats.com</Link>
        </div>
        <div className="grid grid-flow-col gap-4">
            <span>Privacy Policy</span>
            <span>Terms Of Services</span>
        </div>


        </div>
    );
};

export default Footer;
