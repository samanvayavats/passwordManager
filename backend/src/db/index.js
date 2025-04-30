import mongoose from "mongoose";

const connectDB = async () => {
     try {
        await mongoose.connect("mongodb://localhost:27017/PasswordManagerBackend")
        console.log(" The database is connected ")
     } catch (error) {
       console.error("Facing error in connecting the database ", error)  
       process.exit(1) 
    }
}

export default connectDB