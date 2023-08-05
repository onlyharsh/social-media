import React from 'react'
import Cover from '../../img/cover.jpg'
import profile from '../../img/dp.jpg'
import './Profilecard.css'
import { useSelector } from 'react-redux'
import {Link} from 'react-router-dom'
const Profilecard = ({location}) => {

    const user=useSelector((state)=>state.authReducer.authData)

    const posts = useSelector((state)=>state.postReducer.posts)
    const serverPublic= process.env.REACT_APP_PUBLIC_FOLDER
   
  return (
    <div className='Profilecard'>
        <div className="Profileimg">
            <img src={user.coverPicture? serverPublic+user.coverPicture:serverPublic+"defaultCover.jpeg"} alt="" />
            <img src={user.profilePicture? serverPublic+user.profilePicture:serverPublic+"defaultProfile.jpeg"} alt="" />

        </div>
        <div className="Profilename">
            <span>{user.firstname} {user.lastname}</span>
            <span>{user.about? user.about:"write about yourself"}</span>
        </div>
        <div className="followstatus">
            <hr />
            <div>
                <div className="follow">
                    <span>{user.following.length}</span>
                    <span>Following</span>
                </div>
                <div className="vl"></div>
                <div className="follow">
                    <span>{user.followers.length}</span>
                    <span>Followers</span>
                </div>

                {location=='profilePage' && (
                 <>
                 <div className="vl">

                 </div>
                 <div className="follow">
                <span>{
                posts.filter((post)=>post.userId === user._id).length
                }</span>
                <span>Posts</span>
                 </div>
                 </>
                )}
            </div>
            <hr />
        </div>
        {location=='profilePage'? '': <span>
            <Link style={{textDecoration:"none",color:"inherit"}} to={`/profile/${user._id}`}>
            My profile</Link></span>}

    </div>
  )
}

export default Profilecard


