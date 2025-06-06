import React, { useState } from "react";
import { Link } from "react-router-dom";

function Signup(){
    const [ firstName, SetFirstName] = useState("")
    const [ lastName, SetLastName] = useState("")
    const [ email, SetEmail] = useState("")
    const [ password, SetPassword] = useState("")
    const [confirmPassword , SetConfirmPassword] =useState("")
    const [user, setUser]=useState({}) 

    const onSubmit=()=>{
        setUser({
            firstName, lastName, email, password
        })
    }

        const handelChangeFirstName=(e)=>{
            SetFirstName(e.target.value)
            console.log(e.target.value)
        }
        
        const handelChangeLastName=(e)=>{
            SetLastName(e.target.value)
        }
        const handelChangeEmail=(e)=>{
            SetEmail(e.target.value)
        }
        const handelChangePassword=(e)=>{
            SetPassword(e.target.value)
        }
        const handelConfirmPassword=(e)=>{
            SetConfirmPassword(e.target.value)
        }

        
        
   
        return(
            <div className="col-lg-6 d-flex justify-content-center align-items-center border-0 rounded-lg auth-h100">
                <div className="w-100 p-3 p-md-5 card border-0 bg-dark text-light" style={{maxWidth: "32rem"}}>
                    <form className="row g-1 p-3 p-md-4">
                        <div className="col-12 text-center mb-1 mb-lg-5">
                            <h1>Create your account</h1>
                            <span>Free access to our dashboard.</span>
                        </div>
                        <div className="col-6">
                            <div className="mb-2">
                                <label className="form-label">First name</label>
                                <input  onChange={handelChangeFirstName}   type="text" className="form-control form-control-lg" placeholder="John" />
                            </div>
                        </div>
                        <div className="col-6">
                            <div className="mb-2">
                                <label className="form-label">Last name </label>
                                <input  onChange={handelChangeLastName}type="email" className="form-control form-control-lg" placeholder="Parker" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <label className="form-label">Email address</label>
                                <input onChange={handelChangeEmail}  type="email" className="form-control form-control-lg" placeholder="name@example.com" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <label className="form-label">Password</label>
                                <input  onChange={handelChangePassword}  type="email" className="form-control form-control-lg" placeholder="8+ characters required" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="mb-2">
                                <label className="form-label">Confirm password</label>
                                <input onChange={handelConfirmPassword} type="email" className="form-control form-control-lg" placeholder="8+ characters required" />
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                                <label className="form-check-label" for="flexCheckDefault">
                                    I accept the <a href="#!" title="Terms and Conditions" className="text-secondary">Terms and Conditions</a>
                                </label>
                            </div>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <button onClick={onSubmit}  className="btn btn-lg btn-block btn-light lift text-uppercase" alt="SIGNUP">SIGN UP</button>
                        </div>
                        <div className="col-12 text-center mt-4">
                            <span className="text-muted">Already have an account? <Link to="sign-in" title="Sign in" className="text-secondary">Sign in here</Link></span>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

export default Signup;