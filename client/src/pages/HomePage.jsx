import React from 'react';
import Layout from "@/components/layout/Layout.jsx";
import Hero from "@/components/landing/Hero.jsx";

import Landing from "@/components/landing/Landing.jsx";
import SearchByTownOrCity from "@/components/landing/SearchByTownOrCity.jsx";



const HomePage = () => {
    return (

     <Layout>
         <Hero />
         <SearchByTownOrCity />
         <Landing />

     </Layout>

    );
};

export default HomePage;
