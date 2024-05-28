import React from 'react';
import Header from "@/components/layout/Header.jsx";
import Footer from "@/components/layout/Footer.jsx";
import { Toaster } from "@/components/ui/sonner"

const Layout = (props) => {
    return (


            <div>
                <Header />
                {props.children}
                <Toaster position="top-right" />
                <Footer />
            </div>


    );
};

export default Layout;
