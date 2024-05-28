import {
    SaveMyRestaurantService, ReadMyRestaurantService
} from "../services/MyRestaurantServices.js"

export const SaveMyRestaurantController = async (req, res) => {
    try{
        let result = await SaveMyRestaurantService(req)
        if (result.status === 'success') {
            res.status(200).json(result)
        } else {
            res.status(400).json(result)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const UpdateMyRestaurantController = async (req, res) => {
    try{
        let result = await SaveMyRestaurantService(req)
        if (result.status === 'success') {
            res.status(200).json(result)
        } else {
            res.status(400).json(result)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const ReadMyRestaurantController = async (req, res) => {
    try{
        let result = await ReadMyRestaurantService(req)
        if (result.status === 'success') {
            res.status(200).json(result)
        } else {
            res.status(400).json(result)
        }
    } catch (error) {
        return res.status(500).json(error)
    }
}