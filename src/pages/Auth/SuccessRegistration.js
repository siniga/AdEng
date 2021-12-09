import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Form.css'
import { BsCheck2 } from "react-icons/bs";

 
function CompleteRegistration({setLeftSidebar}) {
    setLeftSidebar(false);
    return (
       <div className="main-reg-content" style={{paddingTop:'12%'}}>
            <div className="success-img-wrapper" style={{display:'flex', justifyContent:'center',height:'120px'}}>
                 <div style={{ background:'#f2f2f2', width:'90px', height:'90px', borderRadius:'50%', padding:'2x'}}>
                    <BsCheck2 style={{fontSize:'50px',position:'relative',top:'24%', color:'#DDDADA'}}/>
                 </div>
            </div>
            <span style={{fontSize:'20px', fontWeight:'bold',position:'relative', top:'0%'}}>
                Congratulations, you have managed to signup <br/>
                with our ad management platform.
            </span>
            <p style={{position:'relative', top:'0%'}}>
                Please check your email address <span style={{color:'#666'}}>john@mail.com</span> <br /> 
                to verify your account and complete <br/> 
                registration. or <span style={{color: '#3862EE',cursor:'pointer'}} id="resend-email-link">resend email</span>
            </p>
         
        </div>
    )
}

export default CompleteRegistration
