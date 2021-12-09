import React from 'react'
import '../css/header.css'
import avatar from '../img/avatar.jpg'

function Header({title}) {
    return (
        <div className="header-container">
            <h2>
              {title}
            </h2>
            <div className="avatar-wrapper">
                <span className="avatar">
                <img src={avatar} alt="avatar" />
               </span> 
               <span className="hdr-fullname">
                 <span className="name">Khamis Peter</span>
                 <span  className="role">Project Manager</span>
               </span>
            </div>
        </div>
    )
}

export default Header
