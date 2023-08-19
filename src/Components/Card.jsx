import React from 'react'

import "./Card.css"
import profilePic from "../Assets/images/profile.png"
import grayCirclePic from  "../Assets/images/greyCircle.png"

const Card = ({id,title,groupingState, tag,user}) => {
  // console.log(user[0].available);
  return (
    <div className='card-container'>
      <div className='top-section'>
        <p>{id}</p>
        {groupingState==="User" ? <div></div>:<div className='profile-container'>
          <img src={profilePic} alt="img" className='profile-pic' />
          <span className={`status ${user[0].available? 'available' : 'notAvailable'}`} ></span>
        </div>}
      </div>
      <div className='title-container'>
        <h1>{title}</h1>
      </div>
      <div>
        <div className='bottom-section'>
          {/* <div className='dot-icon'>
            <h4>...</h4>
          </div> */}
          <div className='tag-section'>
            <img src={grayCirclePic} alt="" />
            <p>{tag}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Card