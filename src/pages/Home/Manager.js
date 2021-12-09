import React from 'react'
import Header from '../../components/Header'
import AppInformation from '../../components/AppInformation'


function Manager({setLeftSidebar}) {
    setLeftSidebar(true);
    return (
        <div className="page" >
        <Header title="Manager" />
        <div className="page-main-content">
           <AppInformation />
        </div>
     </div>
    )
}

export default Manager
