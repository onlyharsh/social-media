import React from 'react'
import Logosearch from '../logosearch/Logosearch'
import './Profileside.css'
import Profilecard from '../profilecard/Profilecard'
import Followerscard from '../followerscard/Followerscard'
const Profileside = () => {
  return (
    <div className='Profileside'>
      <Logosearch/>
      <Profilecard location="homepage"/>
      <Followerscard/>
    </div>
  )
}

export default Profileside
