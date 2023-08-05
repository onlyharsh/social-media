import React from 'react'
import './Trendcard.css'
import { TrendData } from '../../data/TrendData'

const Trendcard = () => {
   
  return (
    <div className="Trendcard">
         <h3>Trends for you</h3>
         {TrendData.map((trend)=>{
            return(
                <div className="trend">
                    <span>#{trend.name}</span>
                    <span>#{trend.shares}</span>

                </div>
            )
         
         })}
    </div>
  )
}

export default Trendcard
