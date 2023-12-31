import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

// get all user

export const getAllusers=async(req,res)=>{
    try {
        let users = await UserModel.find();
        users = users.map((user)=>{
          const {password, ...otherDetails} = user._doc
          return otherDetails
        })
        res.status(200).json(users);
      } catch (error) {
        res.status(500).json(error);
      }
}
// get a User

export const getUser=async(req,res)=>{
    const id=req.params.id;

    try {
        const user=await UserModel.findById(id);

        if (user){

            const {password, ...otherDetails}=user._doc
            res.status(200).json(otherDetails)
        }
        else {
            res.status(404).json("No such user exists")
        }
    } catch (error) {
        res.status(500).json(error)
    }
};


// update a user
// export const updateUser=async(req,res)=>{
//     const id=req.params.id
//     const {currenUserId, currentUserAdminStatus, password}= req.body

//     if (id===currenUserId || currentUserAdminStatus){
//         try {

//             if (password){
//                 const salt=await bcrypt.genSalt(10)
//                 req.body.password=await bcrypt.hash(password,salt)
//             }
//             const user= await UserModel.findByIdAndUpdate(id,req.body,{new: true})
//             res.status(200).json(user)
//         } catch (error) {
//             res.status(500).json(error)
//         }
//     }
//     else{
//         res.status(403).json("Access Denied! you can only update your own profile")
//     }
// }


export const updateUser = async (req, res) => {
    const id = req.params.id;
    //console.log("Data Received", req.body)
    const { _id, password } = req.body;
    
    if (id === _id) {
      try {
        // if we also have to update password then password will be bcrypted again
        if (password) {
          const salt = await bcrypt.genSalt(10);
          req.body.password = await bcrypt.hash(password, salt);
        }
        // have to change this
        
        const user = await UserModel.findByIdAndUpdate(id, req.body, {
          new: true,
        });
        
        const token = jwt.sign(
          { username: user.username, id: user._id },
          process.env.JWTKEY,
          { expiresIn: "1h" }
        );
        
       // console.log({user, token})
        res.status(200).json(user);
      } catch (error) {
        console.log("Error agya hy")
        res.status(500).json(error);
      }
    } else {
      res
        .status(403)
        .json("Access Denied! You can update only your own Account.");
    }
  };


// Delete user

export const deleteUser=async(req,res)=>{
    const id=req.params.id

    const {currenUserId, currentUserAdminStatus}=req.body

    if (currenUserId===id || currentUserAdminStatus){
        try {
            await UserModel.findByIdAndDelete(id)
            res.status(200).json("user delted successfully")
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("Acess Denied!")
    }
}



// Follow a user
export const followUser = async (req, res)=> {
    const id=req.params.id

    const{_id}=req.body

    if (_id===id){
          res.status(403).json('You cannot follow yourself')
    }
    else{
        try {
            const followUser=await UserModel.findById(id)
            const followingUser=await UserModel.findById(_id)

            if (!followUser.followers.includes(_id))
            {
                await followUser.updateOne({$push: {followers:_id}})
                await followingUser.updateOne({$push: {following: id}})
                res.status(200).json("User followed");
            }
            else {
                res.status(403).json("User is Already followed by you")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}


// Unfollow a user



export const UnfollowUser = async (req, res)=> {
    const id=req.params.id

    const{_id}=req.body

    if (_id===id){
          res.status(403).json('Action Forbidden')
    }
    else{
        try {
            const followUser=await UserModel.findById(id)
            const followingUser=await UserModel.findById(_id)

            if (followUser.followers.includes(_id))
            {
                await followUser.updateOne({$pull: {followers:_id}})
                await followingUser.updateOne({$pull: {following: id}})
                res.status(200).json("User unfollowed");
            }
            else {
                res.status(403).json("User is not followed by you")
            }
        } catch (error) {
            res.status(500).json(error)
        }
    }
}
