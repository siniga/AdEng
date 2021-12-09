import React from 'react'
import Header from '../../components/Header'
import AppInformation from '../../components/AppInformation'


function Payment({setLeftSidebar}) {
    setLeftSidebar(true);
    return (
        <div className="page" >
        <Header title="Payment" />
        <div className="page-main-content">
           <AppInformation />
        </div>
     </div>
    )
}

export default Payment
