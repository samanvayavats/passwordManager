import asyncHandler from "../utils/asyncHandler.js"
import {apiError} from "../utils/apiError.js"
import apiResponse from "../utils/apiResponse.js"
import {User} from "../models/user.modle.js"


// this is the controller to stroe the usernamr url and the passowrd of the user 
const userEntry = asyncHandler(async (req , res )=>{

    const {userName , url , password , userId }=req.body

    if(userName ==''){
        throw new apiError(401 , "userName is required")
    }

    if(url ==''){
        throw new apiError(401 , "url is required")
    }

    if(password ==''){
        throw new apiError(401 , "password is required")

    }
    if(userId == ''){
        throw new apiError(404 , "userID is required")

    }

    // we are checking that user is already exits or not
    const exitedUser = await User.find({userId})
   
    if(exitedUser.length>0){
        throw new apiError(409,"User already exits")
    }

    // if user does not exist
   const user =  await User.create({
        userName ,
        url , 
        password ,
        userId
    })

   // lets check if the values given by the users are stored in the backend or not 
   const createduser = User.findById(user._id)

   if(!createduser){
    throw new apiError(500 ,"There is some problem in storing the values provided by the user ")
   }

   return res
   .status(200)
   .json(new apiResponse(
    200 ,
    {
        userName ,
        url , 
        password,
        userId
    },
    "The values of the user are stored sucessfully"
   ))

})



// this is the controller to delete the username url and tha possword of the user 
const clearEntry = asyncHandler(async (req, res) => {
  const { userId } = req.body; // ✅ not req.body

  console.log("Received userId:", userId);

  if (!userId) {
    throw new apiError(401, "The userId is required");
  }

  const checkingUser = await User.findOne({ userId });

  if (!checkingUser) {
    throw new apiError(402, "The user does not exist or is invalid");
  }

  await User.findOneAndDelete({ userId });

  const deletedUser = await User.findOne({ userId });

  if (deletedUser) {
    throw new apiError(501, "Something went wrong in deleting the values");
  }

  return res
    .status(200)
    .json(new apiResponse(201, {}, "Successfully deleted the user"));
});


  
  

    export 
    {
    userEntry,
    clearEntry
    }