import React from 'react'
import Header from '../../components/Header'
import AppInformation from '../../components/AppInformation'

function Dashboard({setRightSidebar, setLeftSidebar}) {
    setLeftSidebar(true);
    return (
        <div className="page" >
           <Header title="Dashboard" />
           <div className="page-main-content">
              <AppInformation  setRightSidebar={setRightSidebar}/>
           </div>
        </div>
    )
}

export default Dashboard
