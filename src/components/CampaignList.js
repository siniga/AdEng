import React from 'react'
import CampaignCard from './CampaignCard';
import cp1 from '../img/cp1.jpg'
import cp2 from '../img/cp2.jpg'
import cp3 from '../img/cp3.jpg'
import cp4 from '../img/cp4.jpg'
import { BsXLg } from "react-icons/bs";
import {Link} from 'react-router-dom';

function CampaignList({cancel}) {
    const cpImgs = [
        {  
            id: 1,
            img: cp1,
            name:"Fun with cocacola"
        },
        {  
            id: 2,
            img: cp2,
            name:"Mtaa kwa mtaa"
        },
        {  
            id: 3,
            img: cp3,
            name:"Share the feeling"
        },
        {  
            id:4,
            img: cp4,
            name:"Create together with coke"
        }
    ];
    return (
        <div>
            <p className="right-sidebar-header">
                <span className="campaign-list-hdr main-header">Campaign list</span>
                <span className="cancel-popup" onClick={cancel}>
                    <BsXLg  className="cancel-icon"/>
                </span>
            </p>
            <span className="campaign-list-subhdr">Latest campaigns</span>
         
            <div className="campaign-list-container">
                <ul>
                    {cpImgs.map((val, key)=>{
                        return (
                            <li>
                                <CampaignCard img={val.img} name={val.name}/>
                            </li>
                        )
                    })}
                </ul>
                <Link to={'/campaigns'} style={{float: 'right'}} onClick={cancel}>
                    View All
                </Link>
            </div>
           
          

        </div>
    )
}

export default CampaignList
