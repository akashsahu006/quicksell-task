import React from 'react'
import Dropdown from './Dropdown'

import "./Navbar.css"

const Navbar = ({setLoading,orderingState, setOrderingState, groupingState, setGroupingState}) => {
  return (
    <div className='navbar'>
      <Dropdown setLoading={setLoading} orderingState={orderingState} setOrderingState={setOrderingState} groupingState={groupingState} setGroupingState={setGroupingState}/>
    </div>
  )
}

export default Navbar