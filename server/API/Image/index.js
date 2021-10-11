// Libraries
import express from "express";
import passport  from "passport";
import multer from "multer";

// Database model
import { ImageModel } from "../../database/allModels";

// Utilities
import { s3Upload } from "../../Utils/AWS/s3";

const Router = express.Router();

// Multer config
const storage = multer.memoryStorage();
const upload = multer({storage});


/*
Route       /
Des         Uploads given image to S3 bucket,and saves return file link to mongoDB
Params      none
Access      Public
Method      POST
*/
Router.post("/", upload.array("file", 4), async(req,res) =>{
    try {
        const file = req.file;

       //  S3 bucket options 
        const bucketOptions = {
            Bucket : "zomato-clone-project",
            Key: file.originalname,
            Body: file.buffer,
            ContentType: file.mimetype,
            ACL: "public-read", //Access Control List
        };
        
        const uploadImage = await s3Upload(bucketOptions);
         return res.status(200).json({file});
    } catch (error) {
        return res.status(500).json({error: error.message});    
    }
});

export default Router;