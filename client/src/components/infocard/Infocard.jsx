import React, { useEffect } from 'react'
import './Infocard.css'
import {UilPen} from '@iconscout/react-unicons'
import { useState } from 'react'
import Profilemodel from '../profilemodel/Profilemodel'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import * as UserApi from '../../api/UserRequest'
const Infocard = () => {
    const [modalOpened,setModalOpened]=useState(false)

    const dispatch=useDispatch()
    const params=useParams()

    const profileUserId=params.id
    const [profileUser,setProfileUser]=useState({})

    const {user}=useSelector((state)=>state.authReducer.authData)

   
  useEffect(() => {
    const fetchProfileUser = async () => {
      if (profileUserId === user._id) {
        setProfileUser(user);
       
      } else {
        console.log("fetching")
        const profileUser = await UserApi.getUser(profileUserId);
        setProfileUser(profileUser);
       
      }
    };
    fetchProfileUser();
  }, [user]);
  return (
    <div className="Infocard">
      <div className="Infohead">
        <h4>Your info</h4>
        <div>
        <UilPen width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
        <Profilemodel
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}
        />
        </div>
       
      </div>
      <div className="info">
        <span>
            <b>Studying in</b>
        </span>
        <span> NIT Jamshedpur</span>
      </div>
      <div className="info">
        <span>
            <b>Lives in</b>
        </span>
        <span> Patna</span>
      </div>
      <div className="info">
        <span>
            <b>Status</b>
        </span>
        <span> in Relationship</span>
      </div>

      <button className='button logout-button'>Logout</button>
    </div>
  )
}

export default Infocard
