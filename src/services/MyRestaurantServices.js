import RestaurantModel from "../models/RestaurantModel.js";
import UserModel from "../models/UserModel.js";
import {v2 as cloudinary} from 'cloudinary'
import mongoose from "mongoose";


const SaveMyRestaurantService = async (req) => {
    try{
        const image = req.file;

        if (image && image.buffer) {
            const base64Image = Buffer.from(image.buffer).toString('base64');
            const dataURL = `data:${image.mimetype};base64,${base64Image}`;
            const UploadResponse = await cloudinary.uploader.upload(dataURL);
            req.body.image = UploadResponse.secure_url;
        } else {
            // Handle the case where req.file is undefined or does not have a buffer property
            return {
                status: 'failed',
                message: 'Invalid image file',
            };
        }

         const ObjectId = mongoose.Types.ObjectId;


        let userId=new ObjectId(req.userId)
        req.body.user=userId



        const data=await RestaurantModel.findOneAndUpdate(
            {user:userId},
            {$set:req.body},
            {upsert: true}
        )
        return {
            status: 'success',
            message: "Updated Restaurant Database Successfully",
            data: data
        }


    }catch(error){
        console.error('Error saving restaurant:', error);
        return {
            status: 'failed',
            message: "Something went wrong",
            error: error.message,
        }
    }
}
const ReadMyRestaurantService = async (req) => {
    try{


        const data=await RestaurantModel.findOne(
            {user:req.userId}
        )

        return {
            status: 'success',
            message: "Read Restaurant Database Successfully",
            data: data
        }


    }catch{
        return {
            status: 'failed',
            message: "Something went wrong",
        }
    }
}

export {SaveMyRestaurantService, ReadMyRestaurantService}