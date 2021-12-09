import React from 'react'
import Header from '../../components/Header'
import AppInformation from '../../components/AppInformation'


function Publisher({setLeftSidebar}) {
    setLeftSidebar(true);

    return (
        <div className="page" >
        <Header title="Publisher" />
        <div className="page-main-content">
           <AppInformation />
        </div>
     </div>
    )
}

export default Publisher
