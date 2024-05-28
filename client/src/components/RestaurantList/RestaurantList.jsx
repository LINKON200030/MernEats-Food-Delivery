import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import SearchRestaurantCard from '../RestaurantList/SearchRestaurantCard';
import UseRestaurantListStore from "../../../store/RestaurantList.js";
import RestaurantSearchInfo from "@/components/RestaurantList/RestaurantSearchResultInfo.jsx";
import SearchBar from "@/components/RestaurantList/SearchBar.jsx";
import PaginationSeslector from "@/components/RestaurantList/PaginationSeslector.jsx";
import CuisinesFilter from "@/components/RestaurantList/CuisinesFilter.jsx";


const RestaurantList = () => {
    const { city } = useParams();
    const { SearchByCityRequest, SearchByCity } = UseRestaurantListStore();
    const [searchState, setSearchState] = useState({
        searchQuery: '',
        page: 1,
        selectedCuisines: [],
    });
    const setPage = (page) => {
        setSearchState((prevSearchState) => ({
            ...prevSearchState,
            page: page,
        }));
    };


    const setSearchQuery=(query) => {
        setSearchState((prevSearchState) => ({
            ...prevSearchState,
            searchQuery: query,
        }));
    };

    const resetSearchQuery = () => {
        setSearchState((prevSearchState) => ({
            ...prevSearchState,
            searchQuery: '',

        }));
    };


    const setSelectedCuisine = (selectedCuisines) => {
        setSearchState((prevSearchState) => ({
            ...prevSearchState,
            selectedCuisines,
            page: 1,
        }));
    };



    useEffect(() => {
        (async () => {
            await SearchByCityRequest(city,searchState.searchQuery,searchState.page,searchState.selectedCuisines.join(","));
        })();
    }, [city, searchState.searchQuery, searchState.page, SearchByCityRequest, searchState.selectedCuisines.join(",")]);




    if (!SearchByCity || !SearchByCity.data || SearchByCity.data.length === 0 || !city) {
        return (
            <div className="text-center text-2xl mt-8 font-bold text-red-500 mb-72">
                No restaurant found in- <span className="text-green-700">{city?.toUpperCase()}</span>
            </div>
        );
    } else {
        const Restaurants = SearchByCity.data;


        return (
            <div className="w-full">
                <div className="flex flex-col md:flex-row w-[90%] mt-6 justify-between mx-auto">
                    <div id="CuisinesList" className="flex w-[30%] font-semibold text-red-500 gap-x-5">
                      <CuisinesFilter onChange={setSelectedCuisine} selectedCuisine={searchState.selectedCuisines}/>
                    </div>

                    <div id="MainContent" className="flex md:w-[70%] flex-col  gap-x-5">
                        <SearchBar searchQuery={searchState.searchQuery} onSubmit={setSearchQuery} onReset={resetSearchQuery} />
                        <RestaurantSearchInfo total={SearchByCity.pagination.total} city={city} />
                        <SearchRestaurantCard Restaurants={Restaurants} />
                        <PaginationSeslector pages={SearchByCity.pagination.pages}
                                             currentPage={SearchByCity.pagination.page}
                                             onPageChange={setPage}

                        />
                    </div>
                </div>
            </div>
        );
    }
};

export default RestaurantList;
