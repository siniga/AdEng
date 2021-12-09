import React from 'react'
import '../css/campaignCard.css'


function CampaignCard({img, name}) {
    
    return (
        <div>
            <div className="campaign-img">
                <img src={img} alt={name}  />
            </div>
            <div className="campaign-details">
               <span className="campaign-name">{name}</span>
            </div>
        </div>
    )
}

export default CampaignCard
