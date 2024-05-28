import express from 'express';
import multer from "multer";

const router = express.Router();

//User ApI
import {
    SaveUserController,
    UpdateUserController,
    ReadUserProfileController
}from "../controllers/UserController.js"
import {
    jwtCheck,
    jwtParse
}from "../middlewares/Auth0Middleware.js"

router.post('/user',jwtCheck, SaveUserController);
router.post('/user/update', UpdateUserController);
router.get('/user/profile',jwtCheck,jwtParse, ReadUserProfileController);


//MyRestaurant ApI
const storage=multer.memoryStorage();
const upload=multer({
    storage:storage,
    limits:{
        fileSize: 5 * 1024 * 1024 // 5 MB
    }
})
import {
    SaveMyRestaurantController,
    ReadMyRestaurantController,
    UpdateMyRestaurantController

} from "../controllers/MyRestaurantController.js";

router.post('/create-restaurant',

    upload.single("image"),
    jwtCheck, SaveMyRestaurantController);



router.post('/update-restaurant',

    upload.single("image")
    ,jwtCheck,jwtParse, UpdateMyRestaurantController);
router.get('/my-restaurant',jwtCheck,jwtParse, ReadMyRestaurantController);


//Restaurant ApI
import {
    RestaurantBySearchKeywordController,
   GetRestaurantController
} from "../controllers/RestaurantController.js";

router.get('/restaurant/search/:city',
    RestaurantBySearchKeywordController);

router.get('/restaurant/:RestaurantId',GetRestaurantController);




export default router;
