import dotenv from "dotenv"
import connectDB from "./db/index.js";
import {app} from "./app.js"

dotenv.config(
    {
       path:'./.env' 
    }
)

connectDB().then(()=>{
app.listen(process.env.PORT || 8000 , ()=>{
    console.log(` The database is running at the port ${process.env.PORT}`)
})
}).catch((error)=>{
      console.log("There is some Error in connecting the database please wait for sometime ",error)
})