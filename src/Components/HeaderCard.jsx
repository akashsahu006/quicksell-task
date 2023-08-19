import React from 'react'
import "./HeaderCard.css"
import profilePic from "../Assets/images/profile.png"

const HeaderCard = ({src,title, count,groupingState,user}) => {
  return (
    <div className='container'>
        <div className='header-card-container'>
        
          {groupingState==="User" ? <div className='profile-container'>
            <img src={profilePic} alt='img' className='profile-pic' />
            <span className={`status  ${user[0].available ? 'available' : 'notAvailable'}`} ></span>
          </div>:<div><img src={src} alt='img' style={{width:"20px", transform: "translateY(3px)"}} /></div>}
            <h3>{title}</h3>
            <p>{count}</p>
        </div>
        <div className='header-card-container' style={{justifyContent:"end"}}>
            <h4 style={{transform: 'translateY(-1.5px)', paddingRight:'5px'}}>+</h4>
            <h4 style={{transform: 'translateY(-4.5px)'}}>...</h4>
        </div>
    </div>
  )
}

export default HeaderCard