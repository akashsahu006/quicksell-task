import React, { useState } from 'react'
import StateComponents from '../Components/StateComponents'
import Navbar from '../Components/Marginals/Navbar'
import "./OverallPage.css"

const OverallPage =  () => {
    const [groupingState, setGroupingState] = useState(localStorage.getItem("groupingState") !== null ? localStorage.getItem("groupingState") : 'Priority')
    const [orderingState, setOrderingState] = useState(localStorage.getItem("orderingState") !== null ? localStorage.getItem("orderingState") : 'Priority')
    const [loading,setLoading] = useState(false);
    return (
    <div className='overallPage-container'>
      
        <Navbar setLoading={setLoading} orderingState={orderingState} setOrderingState={setOrderingState} groupingState={groupingState} setGroupingState={setGroupingState}/>
     
        <div className='stateComponents-container'>
          <StateComponents setGroupingState={setGroupingState} loading={loading} setLoading={setLoading} orderingState={orderingState} groupingState={groupingState}/>
        </div>
    </div>
  )
}

export default OverallPage