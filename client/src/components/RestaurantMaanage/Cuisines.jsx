import React from 'react';
import {CuisinesList} from "@/utility/restauran-config.js";
import {useFormik} from "formik";
import {RestaurantProfileSchema} from "@/utility/restaurantProfileSchema.jsx";

const Cuisines = () => {
    const formik = useFormik({
        initialValues: {
            cuisines: [],
        },
        validationSchema: RestaurantProfileSchema,
        onSubmit: (values) => {
            console.log(values);
        },
    })

    const handleCheckboxChange = (cuisine) => {
        const { cuisines } = formik.values;
        const updatedCuisines = cuisines.includes(cuisine)
            ? cuisines.filter((selectedCuisine) => selectedCuisine !== cuisine)
            : [...cuisines, cuisine];

        formik.setFieldValue('cuisines', updatedCuisines);
    };

    return (
            <div className="flex flex-col gap-2  ">
                <label className="text-gray-700 text-2xl font-bold">Cuisines</label>
                <div
                    className="grid grid-cols-2 md:grid-cols-5 my-3 font-semibold gap-3 justify-between text-gray-700">
                    {CuisinesList.map((cuisine) => (
                        <label key={cuisine} className="flex items-center">
                            <input
                                onChange={() => handleCheckboxChange(cuisine)}


                                type="checkbox"
                                id={`cuisine-${cuisine}`}
                                name="cuisines"
                                value={cuisine}


                                className="mr-2 form-checkbox focus:outline-none"
                            />

                            {cuisine}
                        </label>

                    ))}

                </div>
            </div>


    );
};

export default Cuisines;
