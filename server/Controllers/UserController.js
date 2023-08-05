import UserModel from "../Models/userModel.js";
import bcrypt from 'bcrypt'

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
export const updateUser=async(req,res)=>{
    const id=req.params.id
    const {currenUserId, currentUserAdminStatus, password}= req.body

    if (id===currenUserId || currentUserAdminStatus){
        try {

            if (password){
                const salt=await bcrypt.genSalt(10)
                req.body.password=await bcrypt.hash(password,salt)
            }
            const user= await UserModel.findByIdAndUpdate(id,req.body,{new: true})
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    }
    else{
        res.status(403).json("Access Denied! you can only update your own profile")
    }
}


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

    const{currenUserId}=req.body

    if (currenUserId===id){
          res.status(403).json('You cannot follow yourself')
    }
    else{
        try {
            const followUser=await UserModel.findById(id)
            const followingUser=await UserModel.findById(currenUserId)

            if (!followUser.followers.includes(currenUserId))
            {
                await followUser.updateOne({$push: {followers:currenUserId}})
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

    const{currenUserId}=req.body

    if (currenUserId===id){
          res.status(403).json('Action Forbidden')
    }
    else{
        try {
            const followUser=await UserModel.findById(id)
            const followingUser=await UserModel.findById(currenUserId)

            if (followUser.followers.includes(currenUserId))
            {
                await followUser.updateOne({$pull: {followers:currenUserId}})
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
