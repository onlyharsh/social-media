import React from 'react'
import './Postside.css'
import Postshare from '../postshare/Postshare'
import Posts from '../posts/Posts'


const postside = () => {
  return (
   <div className="Postside">
    <Postshare/>
    <Posts/>
   </div>
  )
}

export default postside
