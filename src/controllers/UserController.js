import {
    SaveUserService, ReadUserProfileService
}from "../services/UserServices.js"

export const SaveUserController = async (req, res) => {
    try {
        const result = await SaveUserService(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}
export const UpdateUserController = async (req, res) => {
    try {
        const result = await SaveUserService(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

export const ReadUserProfileController = async (req, res) => {
    try {
        const result = await ReadUserProfileService(req);
        res.status(200).json(result);
    } catch (error) {
        res.status(500).json(error);
    }
}

