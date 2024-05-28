import React, { useEffect } from 'react';
import { IoSearch } from "react-icons/io5";
import { Button } from "@/components/ui/button.jsx";
import {useFormik} from "formik";

const SearchBar = ({ onSubmit, onReset, searchQuery}) => {
    const formik = useFormik({
        initialValues: {
            searchQuery: searchQuery,
        },
        onSubmit: (values ) => {
            onSubmit(values.searchQuery);

        },
        onReset: () => {
            onReset();
        }
    })

   useEffect(()=>{
       formik.handleReset()
   },[])


    return (
        <form onSubmit={formik.handleSubmit}
            className="w-full flex items-center px-4 mb-3 rounded-lg border border-gray-200 shadow">
            <div className="text-orange-600 hidden md:block text-sm md:text-lg ">
                <IoSearch />
            </div>
            <input
               name="searchQuery"
                type="text"
                placeholder="Search by Cuisine or Restaurant Name"
                className="input input-bordered text-sm w-full md:p-3 py-3 focus:outline-none"
                {...formik.getFieldProps("searchQuery")}

            />
            <div className="ml-auto flex items-center gap-x-5">
                <Button

                    onClick={formik.handleReset}
                    type="button"
                    variant="primary"
                    className={`
                        ${searchQuery.length > 0
                            ? "text-black shadow bg-white rounded-lg py-1 px-3 text-sm"
                            : "hidden"
                    }`}
                >
                    Clear
                </Button>

                    <Button
                        type="submit"
                        variant="primary"

                        className="bg-orange-500 rounded-lg py-1 px-3 text-white text-sm hover:bg-orange-600"
                        size="xs"
                    >
                        Search
                    </Button>

            </div>
        </form>
    );
};

export default SearchBar;
