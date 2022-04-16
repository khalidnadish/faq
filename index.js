import { config } from "dotenv";
import express from "express";
 
import faqRoutes from "./routes/faq.js";
import userRoutes from "./routes/user.js";
import bodyParser from "body-parser";
 


const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
  

 
const port = process.env.PORT || 3000;
app.use('/faq',faqRoutes)
app.use('/user',userRoutes)
app.use(express.json());




// let create_table =
//   "CREATE TABLE faq ( faqID  int AUTO_INCREMENT NOT NULL primary key, faq varchar(255),    creatormail varchar(255),    datestamp varchar(255)   )";
//   conectionDb.query(create_table, (err, results) => {
//     if (err) throw err
    
//  console.log("row create");
//  console.log(results)
// });
  

  

 

   

const server = 
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});


server.timeout = 1000 * 60 * 10; // 10 minutes


 