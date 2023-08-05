import React from 'react'
import './Profile.css'
import Profileleft from '../../components/profileleft/Profileleft'
import Profilecard from '../../components/profilecard/Profilecard'
import Postside from '../../components/postside/Postside'
import Rightside from '../../components/rightside/Rightside'
const Profile = () => {
  return (
   <div className="Profile">
    <Profileleft/>

    <div className="Profile-center">
        <Profilecard location={"profilePage"}/>
        <Postside/>
    </div>
    <Rightside/>
   </div>
  )
}

export default Profile
