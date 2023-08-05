
import React from 'react'
import'./Rightside.css'

// import Home from '../../img/home.png'
import Home from '../../img/homenew.png'
import Noti from '../../img/noti.png'
import Commnent from '../../img/comment.png'
import { UilSetting } from '@iconscout/react-unicons'
import Trendcard from '../trendcard/Trendcard'
import Sharemodel from '../sharemodel/Sharemodel'
import { useState } from 'react'
import { Link } from 'react-router-dom'
const Rightside = () => {
    const [modalOpened,setModalOpened]= useState(false)
  return (
    <div className="Rightside">
        
         <div className="navIcons">
          <Link to='../home'>
          <img  src={Home} alt="" />
          </Link>
            
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={Commnent} alt="" />
         </div>

         <Trendcard/>
         <button className="button r-button" onClick={()=>setModalOpened(true)}>

              Share
         </button>
        
         <Sharemodel
        modalOpened={modalOpened}
        setModalOpened={setModalOpened}/>
    </div>
  )
}

export default Rightside
