import React, { useEffect, useState } from 'react';
import { validate } from './validate';





const Signin = () => {

    const [errors , setErrors] = useState([])
    const [data , setData] = useState({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        isAccepted: false
    })




    useEffect(() => {
        setErrors(validate(data));
    } , [data])


    const changeHandler = event => {
        if(event.target.value === "isAccepted"){
            setData({...data , [event.target.value]: event.target.checked})
        }
        else{
            setData({...data, [event.target.name]: event.target.value})
        }
    }






    return (
        <div>
            <form>
                <h3>Signin</h3>
                <div>
                    <label>Name: </label>
                    <input type="text" value={data.name} name="name" placeholder="Enter a Name" onChange={changeHandler}/>
                    {errors.name && <span>{errors.name}</span>}
                </div>
                <div>
                    <label>Email: </label>
                    <input type="Email" value={data.email} name="email" placeholder="Enter a Email" onChange={changeHandler}/>
                    {errors.email && <span>{errors.email}</span>}
                </div>
                <div>
                    <label>Password: </label>
                    <input type="password" value={data.password} name="password" placeholder="Enter a Password" onChange={changeHandler}/>
                    {errors.password && <span>{errors.password}</span>}
                </div>
                <div>
                    <label>confirm Passwrd: </label>
                    <input type="password" value={data.confirmPassword} name="confirmPassword" placeholder="Enter a confirm Password" onChange={changeHandler}/>
                    {errors.confirmPassword && <span>{errors.confirmPassword}</span>}
                </div>
                <div>
                    <label>I Accept the privacy policy</label>
                    <input type="checkbox" value={data.isAccepted} name="isAccepted" onChange={changeHandler}/>
                    {errors.isAccepted && <span>{errors.isAccepted}</span>}
                </div>
                <div>
                    <button>Sign in</button>
                    <button>Login</button>
                </div>
            </form>
        </div>
    );
};

export default Signin;