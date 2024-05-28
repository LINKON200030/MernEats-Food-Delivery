import UserModel from "../models/UserModel.js";
import userModel from "../models/UserModel.js";



export const SaveUserService = async (req) => {
    try{
        let reqbody=req.body;

        await UserModel.findOneAndUpdate(
            {Auth0Id: reqbody.Auth0Id},
            {$set: reqbody},
            {upsert: true}
        )
        return {
            status: 'success',
            message: "Updated User Database Successfully",
        }


    }catch {
        return {
            status: 'failed',
            message: "Something went wrong",
        }

    }
}

 const ReadUserProfileService = async (req) => {

    try {
        const result=await userModel.findOne(
            {
                _id: req.userId
            }
        )
        return {
            status: 'success',
            message: "User Profile",
            data: result
        }

    } catch (error) {
        return {
            status: 'failed',
            message: "Something went wrong",
        }
    }
}

export {ReadUserProfileService}