import React from 'react'
import { useState } from 'react';
import "./Dropdown.css"
import downArrow from "../../Assets/images/down_arrow.png"
import adjustmentPic from "../../Assets/images/adjustment.png"

const DropdownItem = ({setLoading, state,setDropdownOptionState,setOtherDropdownState, options, title,dropDownState,setDropdownState}) => {
    return (
        <div className='dropdown-item'>
            <p >{title}</p>
            <div>
                <div className='inner-option-container' onClick={() => {
                        setDropdownState(!dropDownState);
                        setOtherDropdownState(false);
                    }}>
                    <p>{state}</p>
                    <img src={downArrow} alt='img' className='inner-down-arrow '/>
                </div>
                <div className={`inner-dropdown-menu ${dropDownState? 'active' : 'inactive'}`}>
                    <ul className='inner-dropdown-menu-container'>
                        {options.map((option) => {
                            return (
                                <h1 key={option.id} onClick={() => {
                                    setDropdownOptionState(option.name);
                                    if(state !== option.name){
                                        setLoading(true);
                                    }
                                }}>{option.name}</h1>
                            )
                        })}
                    </ul>
                </div>
            </div>
        </div>
    );
}

const Dropdown = ({setLoading,orderingState, setOrderingState, groupingState, setGroupingState}) => {
const [dropDownState, setDropdownState] = useState(false);
const [dropDownGroupingState, setDropdownGroupingState] = useState(false);
const [dropDownOrderingState, setDropdownOrderingState] = useState(false);

const groupingOptions = [
    {
        id:0,
        name:'Status'
    },
    {
        id:1,
        name:'Priority'
    },
    {
        id:2,
        name:'User'
    }
];
const orderingOptions = [
    {
        id:0,
        name:'Priority'
    },
    { 
        id:1,
        name:'Title'
    }]
return (
    <div className='menu-container'>
        <div className='menu-trigger' onClick={() => {
            setDropdownState(!dropDownState);
            setDropdownGroupingState(false);
            setDropdownOrderingState(false);
            }}>
            <img src={adjustmentPic} alt="img" className='adjustment' />
            <p>Display</p>
            <img src={downArrow} alt="img" className='down-arrow' />
        </div>
        <div className={`dropdown-menu ${dropDownState? 'active' : 'inactive'}`}>
            <ul className='dropdown-menu-container'>
                <DropdownItem setLoading={setLoading} state={groupingState} setDropdownOptionState={setGroupingState} setOtherDropdownState={setDropdownOrderingState} options={groupingOptions} title={"Grouping"} dropDownState={dropDownGroupingState} setDropdownState={setDropdownGroupingState}/>
                <DropdownItem setLoading={setLoading} state={orderingState} setDropdownOptionState={setOrderingState} setOtherDropdownState={setDropdownGroupingState} options={orderingOptions} title={"Ordering"} dropDownState={dropDownOrderingState} setDropdownState={setDropdownOrderingState}/>
            </ul>
        </div>
    </div>
  )
}

export default Dropdown