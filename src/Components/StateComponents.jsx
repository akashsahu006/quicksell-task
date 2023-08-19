import React from 'react'
import { useState, useEffect } from 'react';
import "./StateComponents.css"
import Card from './Card';
import HeaderCard from './HeaderCard';

import lowPic from "../Assets/images/low.png"
import mediumPic from "../Assets/images/medium.png" 
import highPic from "../Assets/images/high.png"
import noPriorityPic from "../Assets/images/noPriority.png"
import urgentPic from "../Assets/images/urgent.png"

import cancelledPic from "../Assets/images/cancelled.png"
import donePic from "../Assets/images/done.png"
import todoPic from "../Assets/images/todo.png"
import backlogPic from "../Assets/images/backlog.png"
import inProgressPic from "../Assets/images/inProgress.png"

const StateComponents = ({loading, setLoading, orderingState, groupingState}) => {
    const [globalData, setGlobalData] = useState([]);
    const [userData,setUserData] = useState([]);

    const statusArray = [
        {
            id:0,
            name:'Todo',
            src: todoPic
        },
        {
            id:1,
            name:'In progress',
            src: inProgressPic
        },
        {
            id:2,
            name:'Backlog',
            src: backlogPic
        },
        {
            id:3,
            name:'Done',
            src: donePic
        },
        {
            id:4,
            name:'Cancelled',
            src: cancelledPic
        }
        ];
    const priorityArray = [
        {
            id: 0,
            name:"No priority",
            src: noPriorityPic,
        },
        {
            id: 4,
            name:"Urgent",
            src: urgentPic,
        },
        
        {
            id: 3,
            name:"High",
            src: highPic,
        },
        {
            id: 2,
            name:"Medium",
            src: mediumPic,
        },
        {
            id: 1,
            name:"Low",
            src: lowPic,
        }
        
        
    ]

    useEffect( () => {

        const orderingFunction = (orderState,data) => {
            if(orderState === 'Priority'){
                data.sort((a,b) => {
                    return b.priority- a.priority;
                })
            }
            else{
                data.sort((a,b) => {
                    let fa = a.title;
                    let fb = b.title;
                    if (fa < fb) {
                        return -1;
                    }
                    if (fa > fb) {
                        return 1;
                    }
                    return 0;
                })
            }
        }
        
        const filterFunction = (array,jsonData) => {
            const filteredData = array.map((arrayElement) => {
                const data = jsonData.tickets.filter((curData) => {
                    if(groupingState === 'Priority'){
                        return curData.priority === arrayElement.id;
                    }
                    else if(groupingState === 'Status'){
                        return curData.status === arrayElement.name;
                    }
                    else{
                        return curData.userId === arrayElement.id;
                    }
                    
                });
                orderingFunction(orderingState,data);

                const res = {name: arrayElement.name, childData: data, len: data.length};
                return res;
        
                
                
            })
            setGlobalData(filteredData);
        }

        const fetchData = async () => {
            const apiData = await fetch('https://api.quicksell.co/v1/internal/frontend-assignment');
            const jsonData = await apiData.json();
            
            setUserData(jsonData.users);

            if(groupingState === 'Priority'){
                filterFunction(priorityArray,jsonData);
                setLoading(false);
            }
            else if(groupingState === 'Status'){
                filterFunction(statusArray,jsonData)
                setLoading(false);

            }
            else{
                filterFunction(userData,jsonData);
                setLoading(false);
            }
        }
        fetchData();
    },[groupingState, orderingState])
  return (
        !loading ? <div className='columnContainer'>
                {globalData.map((curStatus) => {                
                    return (
                        <div className='eachContainer'>
                            {groupingState==="User" && <HeaderCard title={curStatus.name} count={curStatus.len} groupingState={groupingState} user={userData.filter((curData) => {
                                        return curData.id === curStatus.childData[0].userId
                                })}/> }                            
                            {groupingState==="Status" && <HeaderCard src={(statusArray.find((data)=> {return data.name === curStatus.name })).src} title={curStatus.name} count={curStatus.len} groupingState={groupingState} user={{available:false}}/>
                            }
                            {groupingState==="Priority" && <HeaderCard src={(priorityArray.find((data)=> {return data.name === curStatus.name })).src} title={curStatus.name} count={curStatus.len} groupingState={groupingState} user={{available:false}}/>
                            }
                        {curStatus.childData.map(data => {
                            return (
                                <Card id={data.id} title={data.title} tag={data.tag[0]} groupingState={groupingState}  user={userData.filter((curData) => {
                                    return curData.id === data.userId
                                })}/>
                            )
                        })}
                        </div>
                    )
                })}
        </div> : <div className='loading'><div class="loader"></div></div>
  )
}

export default StateComponents