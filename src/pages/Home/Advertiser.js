import React from 'react'
import Header from '../../components/Header'
import AppInformation from '../../components/AppInformation'


function Advertiser({setLeftSidebar}) {
    setLeftSidebar(true);

    return (
        <div className="page" >
        <Header title="Advertisers" />
        <div className="page-main-content">
           <AppInformation />
        </div>
     </div>
    )
}

export default Advertiser
