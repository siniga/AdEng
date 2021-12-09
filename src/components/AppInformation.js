import React from 'react'
import '../css/appInfo.css'
import { BsMegaphone } from "react-icons/bs";

function AppInformation({setRightSidebar}) {
    
    const openRightSidebar = () => {
        setRightSidebar(true);
    }

    return (
        <div className="app-info-content">
            <span className="img-container">
                <BsMegaphone className="info-icon" />
            </span>
            <p className="app-info-body">
                Campaigns are an integral part of your ad creation <br/> 
                process. On a campaign you can create a single or <br/>
                multiple ad(s) and configure them before publishing
            </p>
            <button onClick={openRightSidebar}>
                + create a campaign
            </button>
        </div>
    )
}

export default AppInformation
