import React from 'react'
import "./HeaderCard.css"

const HeaderCard = ({title, count}) => {
  return (
    <div className='container'>
        <div className='header-card-container'>
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