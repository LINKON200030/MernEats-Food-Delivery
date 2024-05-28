import * as Yup from 'yup';


export const RestaurantProfileSchema = Yup.object().shape({
    restaurantName: Yup.string().required('Restaurant name is required'),
    city: Yup.string().required('City is required'),
    country: Yup.string().required('Country is required'),
    deliveryPrice: Yup.number().required('Delivery price is required in USD ($)').typeError('Delivery price must be a number'),
    estimatedDeliveryTime: Yup.number().required('Estimated delivery time is required in minutes').typeError('Estimated delivery time must be a number'),
    cuisines: Yup.array().required('Select at least one cuisine'),
    menuItems: Yup.array().required('Add at least one item'),
})

