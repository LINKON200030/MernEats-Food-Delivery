import React, {useEffect} from 'react';
import { useFormik } from 'formik';
import useRestaurantStore from '../../../store/RestaurantStore.js';
import { Separator } from '@/components/ui/separator.jsx';
import { CuisinesList } from '@/utility/restauran-config.js';
import {Button} from "@/components/ui/button.jsx";
import {Input} from "@/components/ui/input.jsx";
import {Label} from "@/components/ui/label.jsx";
import {RestaurantProfileSchema} from "@/utility/restaurantProfileSchema.jsx";
import {useAuth0} from "@auth0/auth0-react";


const RestaurantInfo = () => {
    const {user, getAccessTokenSilently }=useAuth0()
    const { RestaurantFormValue,setRestaurantFormValue, updateRestaurantRequest, ReadRestaurantRequest } = useRestaurantStore();


   const formik=useFormik({
       initialValues:{
           restaurantName: '',
           city: '',
           country: '',
           deliveryPrice: '',
           estemetedDeliveryTime: '',
           cuisines: [],
           menuItems: [],
           image: '',
       },
       onSubmit: async (values) => {
           const accessToken = await getAccessTokenSilently();
           try{
               await updateRestaurantRequest({
                   ...formik.values,

               }, accessToken);

           }catch (e) {
               console.log(e)
           }
       },
       validationSchema: RestaurantProfileSchema,
       validateOnChange: false,
       validateOnBlur: false,
       enableReinitialize: true,
   })


    useEffect(() => {
        (async () => {
            let accessToken = await getAccessTokenSilently();
            await ReadRestaurantRequest(accessToken);
        })();
    },[getAccessTokenSilently,ReadRestaurantRequest]);







    const handleInputChange = (event) => {
        const imageFile = event.target.files[0];
        const reader = new FileReader();

        reader.onloadend = () => {
            formik.setFieldValue('image', imageFile); // Update this line
        };

        if (imageFile) {
            reader.readAsDataURL(imageFile);
        }
    };



    const handleCheckboxChange = (cuisine) => {
        const { cuisines } = formik.values;
        const updatedCuisines = cuisines.includes(cuisine)
            ? cuisines.filter((selectedCuisine) => selectedCuisine !== cuisine)
            : [...cuisines, cuisine];

        formik.setFieldValue('cuisines', updatedCuisines);
    };


    const handleAddMenuItem = () => {
        const { menuItems } = formik.values;
        const newMenuItem = { name: '', price: '' }; // Modify as needed
        formik.setFieldValue('menuItems', [...menuItems, newMenuItem]);
    };

    const handleRemoveMenuItem = (index) => {
        const { menuItems } = formik.values;
        const updatedMenuItems = [...menuItems];
        updatedMenuItems.splice(index, 1);
        formik.setFieldValue('menuItems', updatedMenuItems);
    };

    return (
        <div className="section">
            <div className="container my-10">
                <div className="card shadow-sm bg-gradient-to-b from-gray-100 to-gray-50 rounded-sm mx-auto py-5 md:py-10">
                    <form onSubmit={formik.handleSubmit} className="row px-8 md:px-16 py-5">
                        <h5 className="text-left mb-1 py-1 text-3xl font-bold text-gray-700">Details</h5>
                        <p className="text-left mb-4 text-gray-400 font-semibold">Please enter your restaurant
                            details</p>
                        <hr/>
                        <div  className="flex flex-col gap-y-10 justify-between items-center mt-5">
                            <div className="w-full flex flex-col">
                                <label className="form-label text-gray-700 font-semibold" htmlFor="restaurantName">
                                    Restaurant Name
                                </label>
                                <input
                                    value={formik.values?.restaurantName}
                                    type="text"
                                    id="restaurantName"
                                    name="restaurantName"
                                    placeholder="Write your restaurant name here"
                                    className="form-control   border border-opacity-30 border-black py-1.5 px-2 w-full rounded mt-3 focus:outline-none"
                                    {...formik.getFieldProps('restaurantName')}
                                />
                                {
                                    <p className="text-red-500 text-sm font-semibold mt-1 text-left w-full">{formik.errors?.restaurantName}</p>}
                            </div>
                            <div className="w-full flex flex-col gap-y-10 md:flex-row gap-x-16">
                                <div className="w-full flex flex-col">
                                    <label className="form-label text-gray-700 font-semibold" htmlFor="city">
                                        City
                                    </label>
                                    <input
                                        type="text"
                                        id="city"
                                        name="city"
                                        placeholder="Write your city Name"

                                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded mt-3 focus:outline-none"
                                    value={formik.values?.city}
                                        {...formik.getFieldProps('city')}
                                    />
                                    {
                                        <p className="text-red-500 text-sm font-semibold mt-1 text-left w-full">{formik.errors?.city}</p>}
                                </div>
                                <div className="w-full flex flex-col">
                                    <label className="form-label text-gray-700 font-semibold" htmlFor="country">
                                        Country
                                    </label>
                                    <input
                                        type="text"
                                        id="country"
                                        name="country"
                                        placeholder="Write your country Name"

                                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded mt-3 focus:outline-none"
                                    value={formik.values?.country}
                                        {...formik.getFieldProps('country')}
                                    />
                                    {
                                        <p className="text-red-500 text-sm font-semibold mt-1 text-left w-full">{formik.errors?.country}</p>}
                                </div>
                            </div>
                            <div className="w-full flex flex-col gap-y-10 gap-x-16">
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="form-label text-gray-700 font-semibold" htmlFor="deliveryPrice">

                                        Delivery Price
                                    </label>
                                    <input
                                        type="number"
                                        id="deliveryPrice"
                                        name="deliveryPrice"
                                        placeholder="$0.00"
                                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded mt-3 focus:outline-none"
                                   value={formik.values?.deliveryPrice}
                                        {...formik.getFieldProps('deliveryPrice')}
                                    />
                                    {
                                        <p className="text-red-500 text-sm font-semibold mt-1 text-left w-full">{formik.errors?.deliveryPrice}</p>}
                                </div>
                                <div className="w-full md:w-1/2 flex flex-col">
                                    <label className="form-label text-gray-700 font-semibold"
                                           htmlFor="estemetedDeliveryTime">
                                        Estimated Delivery Time
                                    </label>
                                    <input
                                        type="number"
                                        id="estemetedDeliveryTime"
                                        name="estemetedDeliveryTime"
                                        placeholder="30 minutes"
                                        className="form-control border border-opacity-30 border-black py-1.5 px-2 w-full rounded mt-3 focus:outline-none"
                                    value={formik.values?.estimatedDeliveryTime}
                                        {...formik.getFieldProps('estimatedDeliveryTime')}
                                    />
                                    {
                                        <p className="text-red-500 text-sm font-semibold mt-1 text-left w-full">{formik.errors?.estimatedDeliveryTime}</p>}
                                </div>
                            </div>
                        </div>
                        <Separator className="my-8"/>
                        {/* Cuisine Section */}
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
                        {/*Menu Section*/}
                        <Separator className="my-8"/>
                        <div className="flex flex-col gap-2">
                            <label className="text-gray-700 my-6 text-2xl font-bold">Menu</label>
                            {formik.values.menuItems.map((menuItem, index) => (
                                <div key={index} className="flex items-center gap-3">
                                    <input
                                        type="text"
                                        name={`menuItems[${index}].name`}
                                        placeholder="Add Item Name"
                                        value={menuItem.name}

                                        className="form-input py-1.5 px-2 focus:outline-none border border-opacity-30 border-black rounded"

                                    />
                                    <input
                                        type="number"
                                        name={`menuItems[${index}].price`}
                                        placeholder="$8.00"
                                        value={menuItem.price}
                                        onChange={formik.handleChange}
                                        className="form-input py-1.5 px-2 focus:outline-none border border-opacity-30 border-black rounded"
                                    />
                                    <Button type="button" onClick={() => handleRemoveMenuItem(index)}>
                                        Remove
                                    </Button>
                                </div>
                            ))}
                            <Button className="w-1/2 md:w-1/4 my-4 bg-orange-600" type="button" onClick={handleAddMenuItem}>
                                Add Menu Item
                            </Button>
                        </div>

                        {/*Image Upload Section*/}
                        <div className="md:w-[400px] w-full flex flex-col gap-2 h-auto my-6">
                            <img src={RestaurantFormValue['image']} alt=""/>
                        </div>

                        <div className="grid w-full max-w-sm items-center gap-1.5">
                            <Label htmlFor="picture" className="text-gray-700 text-2xl font-bold my-6">Upload Restaurant
                                Picture</Label>

                            <Input
                                id="picture"
                                type="file"
                                accept=".jpg, .jpeg, .png"
                                name="image"
                                onChange={(e) => {
                                    formik.setFieldValue("image", e.target.files[0]);
                                    handleInputChange(e);
                                }}
                            />
                        </div>


                        <Button   type="submit"  className="w-full mt-10"
                                variant={"default"}>
                            Update Restaurant
                        </Button>


                    </form>
                </div>
            </div>
        </div>
    );
};

export default RestaurantInfo;
