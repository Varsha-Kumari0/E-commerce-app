import React from 'react'
import './Card.css'

export const Card = ({imgURL, heading, text}) => {
  return (
        <div className="card">
            <img src={imgURL} height={240} alt=""/>
            <span className="heading">
               <p>{heading}</p> 
            </span>
            <div className="text">
            <p>
                {text}
            </p>
            <p className="price">
                ₹480.00 <span>
                ₹750.00
                </span>
            </p>
            </div>
    </div>
  )
}
