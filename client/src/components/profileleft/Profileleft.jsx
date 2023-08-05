import React from 'react'
import './Profileleft.css'
import Logosearch from '../logosearch/Logosearch'
import Infocard from '../infocard/Infocard'
import Followerscard from '../followerscard/Followerscard'
const Profileleft = () => {
  return (
    <div className="Profileleft">
        <Logosearch/>
        <Infocard/>
        <Followerscard/>
    </div>
  )
}

export default Profileleft
