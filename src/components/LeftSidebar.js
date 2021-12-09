import React from 'react';
import '../css/leftSidebar.css';
import { SidebarData } from './SidebarData';
import {Link} from 'react-router-dom';


function LeftSidebar({leftSidebar}) {

 
    return (
        <div className={leftSidebar ? 'sidebar-container left-sidebar .show': 'left-sidebar hide'} >
            <h1 className="logo">
               adEng
            </h1>
            <div className="list-container">
                <ul>
                    {SidebarData.map((val, key) => {
                        return(
                            <li key={key} className="row"> 
                                <span>{val.icon}</span>
                                <Link to={val.link}> 
                                  {val.title}
                                </Link>

                            </li>
                        )
                          
                      })
                    }
                 
                      
                </ul>
            </div>
        </div>
    )
}

export default LeftSidebar
