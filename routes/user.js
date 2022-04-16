import express from "express";
 

 
import { newRow, getAll ,row1000} from "../controller/faqControl.js";

const router = express.Router();

router.post("/", newRow);

// router.get("/getall",(err,data)=>{
//  if(err){
//      console.log(err)
//      return;
//  }
//  getAll

// });


router.get("/",getAll);   
router.post("/1000",row1000);  

export default router;
