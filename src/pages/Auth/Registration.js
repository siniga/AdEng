import React from 'react'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '../../css/Form.css'
import {Redirect} from 'react'

 
function Registration({setLeftSidebar}) {
    setLeftSidebar(false);
    
    const navigate = useNavigate();

    const [values, setValues] = useState({
        email:'',
        password:'',
        password2:''
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
            navigate('/registration/complete');
        }
       
        console.log( Object.keys(errors).length == 0)
    }

    //form validation
    function validate(values){
        let errors = {}

        if(!values.email.trim()){
            errors.email = "email is required"
        }else if(!/\S+@\S+\.\S+/.test(values.email)){
            errors.email = "email is invalid"
        }

        if (!values.password) {
            errors.password = 'Password is required';
        } else if (values.password.length < 6) {
            errors.password = 'Password needs to be 6 characters or more';
        }
        
        if (!values.password2) {
            errors.password2 = 'Password is required';
        } else if (values.password2 !== values.password) {
            errors.password2 = 'Passwords do not match';
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
                        <label htmlFor="email" className="form-label">
                            Email
                        </label>
                        <input
                        id="email" className="form-input"
                            type="text"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                            value={values.email}
                            onChange={handleChange}
                            />
                            {errors.email && <p>{errors.email}</p>}
                    </div>
                    <div className="form-controls">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            name="password"
                            className="form-input"
                            placeholder="Enter your password"
                            value={values.password}
                            onChange={handleChange}
                            />
                            {errors.password && <p>{errors.password}</p>}
                    </div>
                        <div className="form-controls">
                        <label htmlFor="password" className="form-label">
                        Confirm Password
                        </label>
            
                        <input
                            id="password2"
                            type="password"
                            name="password2"
                            className="form-input"
                            placeholder="Re enter your password"
                            value={values.password2}
                            onChange={handleChange}
                            />
                            {errors.password2 && <p>{errors.password2}</p>}
                    </div>
                    <button 
                        type="submit"
                        className="btn form-input-btn">
                            Register Account
                        </button>
                        <span className="form-input-login-link">
                            Already have an account? login<Link to="/"> here</Link>
                        </span>
                </div>
            </form>
        </div>
    )
}

export default Registration
