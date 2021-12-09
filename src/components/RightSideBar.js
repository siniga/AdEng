import React from 'react';
import  '../css/rightSidebar.css';
import AddCampaign from '../components/AddCampaign';
import CampaignList from '../components/CampaignList';
import {useState} from 'react';
import { BsXLg } from "react-icons/bs";

function RightSideBar({setRightSidebar, rightSidebar}) {

    const [component, setComponent] = useState('AddCampaignComp');
    const [header, setHeader] = useState('')
   /*  function setHeader(){
        setSidebarHdr();
    } */

    function cancelSidebar(){
        setRightSidebar(false);
        setComponent('AddCampaignComp');
    }

    function switchComponents(comp){
        if(component == 'CampaignListComp'){
            console.log('here')
         // setHeader('Create Campaign')
           return <CampaignList cancel={cancelSidebar}/>
         }else if(component == 'AddCampaignComp'){
            return <AddCampaign 
                    cancel={cancelSidebar}
                    setComponent={setComponent}
                />
        }
      
    }
    
    return (
        <div className={rightSidebar ? 'right-sidebar show' : 'right-sidebar hide'}>
             <div className="pop-up-backdrop" >
                <div className="empty-area" onClick={cancelSidebar}>
                </div>
                <div className="right-sidebar-content">
                     {switchComponents('AddCampaignComp')}
                </div>
            </div>
        </div>
        
    )
}

export default RightSideBar
