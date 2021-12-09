import React from 'react'
import {useState} from 'react'
import { BsXLg } from "react-icons/bs";

function AddCampaign({cancel, setComponent}) {
    
    //select objectives from
    const [isObjectiveSellected, setObjective] = useState(
        {
            activeObject:  'Reach',
            objects: [
                {  id: 1,
                    name:'Reach',
                    info:'This will show your ad to maximum number of people'
                },
                {  id: 2,
                    name:'Awareness',
                    info:'This will show your ad  maximum times to a targeted audiance.'
                },
                {  id: 3,
                    name:'Trafic',
                    info:'This will show your ad  maximum times to a targeted audiance. '
                }
            ]
        }
    );


    let info = null;

    function toggleActiveObjctive(index){
        info =isObjectiveSellected.objects[index].info;
        
        setObjective({...isObjectiveSellected, activeObject: isObjectiveSellected.objects[index].name});
        console.log(isObjectiveSellected)
    }

    function toggleActiveStyle(index){
        if(isObjectiveSellected.objects[index].name ===  isObjectiveSellected.activeObject){
            info = isObjectiveSellected.objects[index].info;
        
            return "objective-selecttion-box form-input active";
        }else{
            return "objective-selecttion-box  form-input inactive"
        }
    }

    return (
        <div>
            <p className="right-sidebar-header">
                <span className="main-header">Create Campaign</span>
                <span className="cancel-popup" onClick={cancel}>
                    <BsXLg  className="cancel-icon"/>
                </span>
            </p>
            <p className="popup-info">
               Create campaign to start setting up your ads. A campaign can help you<br/>
               target a certain maximum number of audience with multiple ads. This can <br />
               inhance the ability to track their responses before deciding which ad <br/>
               you want to push More.
            </p><br/>
            <form className="add-campaig-form">
            <div className="form-controls">
                    <label htmlFor="title" className="form-label">
                        Campaign title
                    </label>
                    <input
                        id="title" 
                        className="form-input"
                        type="text"
                        name="title"
                        placeholder="Enter your campaign title"
                        />
                </div>
                <br/>
                <div className="form-controls">
                    <label htmlFor="title" className="form-label">
                        Campaign objective
                    </label>
                     <div className="objective-selection-wrapper">
                      {isObjectiveSellected.objects.map((val, key) => {
                          return(
                            <div key={key}
                                 className={toggleActiveStyle(key)}
                                 onClick={()=>toggleActiveObjctive(key)}>
                                 {val.name}
                            </div>
                          )
                       })
                      }
                     </div>
                </div>
                <br/>
                <div className="objective-info">
                    {info}
                </div>
                <br/>
                <div className="form-controls">
                    <label htmlFor="title" className="form-label">
                        Campaign image
                    </label>
                     <div className="campaign-img-uploader form-input">
                           Upload campaign image
                     </div>
                </div>
                <br/>
                
                <div className="form-btns">
                    <button 
                       onClick={cancel}
                       type="submit"
                       className="btn form-input-btn" id="cancel-btn">
                       Cancel
                    </button>
                    <button
                       type="button"
                       onClick={()=>setComponent('CampaignListComp')}
                       className="btn form-input-btn" id="save-btn">
                        Save 
                    </button>
                </div>

            </form>
        </div>
    )
}

export default AddCampaign
