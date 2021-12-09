import React from 'react'
import Header from '../../components/Header'
import AppInformation from '../../components/AppInformation'
function Campaign({setLeftSidebar}) {
    setLeftSidebar(true);
    return (
        <div className="page" >
        <Header title="Campaigns" />
        <div className="page-main-content">
           <AppInformation />
        </div>
     </div>
    )
}

export default Campaign
