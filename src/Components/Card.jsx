import React from 'react'

import "./Card.css"
import profilePic from "../Assets/images/profile.png"

const Card = ({id,title,tag,user}) => {
  console.log(user[0].available);
  return (
    <div className='card-container'>
      <div className='top-section'>
        <p>{id}</p>
        <div className='profile-container'>
          <img src={profilePic} className='profile-pic' />
          <span className={`status ${user[0].available? 'available' : 'notAvailable'}`} ></span>
        </div>
      </div>
      <div className='title-container'>
        <h1>{title}</h1>
      </div>
      <div>
        <div className='bottom-section'>
          <span className='circle'></span>
          <p>{tag}</p>
        </div>
      </div>
    </div>
  )
}

export default Card