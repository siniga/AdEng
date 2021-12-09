import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import '../../css/Form.css'

 
function CompleteRegistration({setLeftSidebar}) {

    setLeftSidebar(false);
    const navigate = useNavigate();
    
    const [values, setValues] = useState({
        fullname:'',
        url:''
    })

    const [errors, setErrors] = useState({})

    const handleChange = (e) => {
        const {name, value} = e.target
        setValues({
            ...values,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        setErrors(validate(values))

        if(Object.keys(errors).length == 0){
            navigate('/registration/success');
        }
    }

    //form validation
    function validate(values){
        let errors = {}

        if(!values.fullname.trim()){
            errors.fullname = "Fullname is required"
        }

        //need regex to filter valid url
        if(!values.url.trim()){
            errors.url = "Url is required"
        }

   
        return errors;
    }

    return (
        <div className="main-reg-content">
            <h1>Welcome to <span style={{color: '#3862EE'}}>adEng</span></h1>
            <span>Enter your information to complete registration <br/> to your ad manager
            </span>
            <form method="post" onSubmit={handleSubmit}>   
                <div className="form-inputs">
                   <div className="form-controls">
                    <label htmlFor="Fullname" className="form-label">
                            Fullname
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            name="fullname"
                            className="form-input"
                            placeholder="Enter your fullname"
                            value={values.fullname}
                            onChange={handleChange}
                            />
                        {errors.fullname && <p>{errors.fullname}</p>}
                   </div>
                        <div className="form-controls">
                        <label htmlFor="password" className="form-label">
                        Website Url
                        </label>
            
                        <input
                            id="url"
                            type="text"
                            name="url"
                            className="form-input"
                            placeholder="www.domain.com"
                            value={values.url}
                            onChange={handleChange}
                            />
                            {errors.url && <p>{errors.url}</p>}
                    </div>
                    <span className="terms-conditions-link">I accept &nbsp;
                        <a href="#">terms & conditions</a>
                    </span>
                    <button 
                        type="submit"
                        className="btn form-input-btn">
                            Complete Registration
                        </button>
                </div>
            </form>
        </div>
    )
}

export default CompleteRegistration
