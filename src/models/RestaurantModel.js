import mongoose from "mongoose";
import UserModel from "./UserModel.js";

const MenuItemSchema = new mongoose.Schema({

   _id:{type:mongoose.Schema.Types.ObjectId,
       required:true,
       default:()=>new mongoose.Types.ObjectId(),

   },
    name:{type:String,},
    price:{type:Number}
})


const RestaurantModelSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"UserModel",},
    restaurantName:{type:String},
    city:{type:String},
    country:{type:String},
    deliveryPrice:{type:Number},
    estemetedDeliveryTime:{type:Number},
    cuisines:[{type:String,required:true}],
    menuItems:[MenuItemSchema],
    image:{
        type:String,
    },
    lastUpdated:{
        type:Date,
        default:Date.now
    }
},{
    timestamps:true,
    versionKey:false
})

const RestaurantModel = mongoose.model("Restaurant",RestaurantModelSchema);

export default RestaurantModel