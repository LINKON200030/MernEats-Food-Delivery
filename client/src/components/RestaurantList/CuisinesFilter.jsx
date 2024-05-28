import React from 'react';
import {CuisinesList} from "@/utility/restauran-config.js";
import {Label} from "@/components/ui/label.jsx";
import {ImCheckboxChecked} from "react-icons/im";

const CuisinesFilter = ({onChange,selectedCuisine,isExpanded,onExpanded}) => {

    const handleCuisineReset = () => {
        onChange([]);
    };
    const handleCuisineChange = (cuisine) => {
        if (selectedCuisine.includes(cuisine)) {
            onChange(selectedCuisine.filter((c) => c !== cuisine));
        } else {
            onChange([...selectedCuisine, cuisine]);
        }
    }
    console.log(selectedCuisine);
    return (
        <>
            <div className="flex flex-col">
            <div className="flex flex-row space-x-4 justify-between items-centern mb-2">
                <div className="text-md font-bold mb-2">
                    Filter By Cuisine
                </div>
                <div onClick={handleCuisineReset} className="text-sm font-semibold mb-2 cursor-pointer hover:text-green-900 underline  text-blue-800">
                    Reset Filters
                </div>

            </div>
            <div className="space-y-2 mb-3 flex flex-col">
                {CuisinesList.map((cuisine, index) => {
                    const isSelected = selectedCuisine.includes(cuisine);
                    return (
                        <div key={index} className="flex flex-col">
                            <input
                                id={`Cuisine_${cuisine}`}
                                type="checkbox"
                                name="Cuisine"
                                value={cuisine}
                                checked={isSelected}
                                onChange={() => handleCuisineChange(cuisine)}
                                className="hidden"
                            />
                            <Label
                                htmlFor={`Cuisine_${cuisine}`}
                                className={`flex flex-1 items-center cursor-pointer text-sm rounded-xl px-4 py-2 font-semibold ${isSelected ? "bg-green-500  border border-green-600" : "border border-slate-300"}`}
                            >
                                {isSelected && <ImCheckboxChecked size={20} className="text-white "/>}
                                <span className="ml-2 text-slate-700">{cuisine}</span>
                            </Label>
                        </div>
                    );
                })}
            </div>
            </div>

        </>
    );
};

export default CuisinesFilter;
