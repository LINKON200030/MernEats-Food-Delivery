import React from 'react';

const DetailsInfoCard = ({RestaurantName, RestaurantCity, RestaurantCountry, cuisines}) => {
    return (
        <div className="card bg-base-100 bordered border border-gray-200 shadow hover:shadow-lg rounded-lg ">
            <div className="card-body text-left flex flex-col justify-between items-start gap-y-2 px-5 py-3">
                <h2 className="card-title text-2xl font-bold  capitalize text-gray-900 hover:text-green-900 hover:underline ">{RestaurantName}</h2>
                <p>{RestaurantCity}, {RestaurantCountry}</p>
                <div className="card-actions justify-end flex flex-wrap my-2">
                    {cuisines.map((cuisine, index) => (
                        <span key={index}
                              className="text-sm mr-2 mb-1.5 bg-gray-200 rounded-full px-2 py-1">{cuisine}</span>
                    ))}
                </div>
            </div>

        </div>
    );
};

export default DetailsInfoCard;
