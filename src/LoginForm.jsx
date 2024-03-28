import { useState } from 'react'
import './Login.css'

const LoginForm = ()=>{

    const [formData, SetFormData] = useState({
        firstName: ``,
        lastName: ``,
        email: ``,
        password: ``,
        confirmPassword: ``
    })

    const handleFormdata = (e)=>{
        const name = e.target.name
        const value = e.target.value

        SetFormData((prevstate)=>(
            {
                ...prevstate,
                [name]:value
            }
        ))
    }

  


    const handleSubmit = (e)=>{
        e.preventDefault()
    }


    const authenticate = ()=>{
        if(
            formData.firstName === `` ||
            formData.lastName === `` ||
            formData.email === `` ||
            formData.password === `` ||
            formData.confirmPassword === `` 
        ){
            alert(`Please fill out all fields`)
        }else if(
            formData.password < 5
        ){
            alert(`Password weak`)
        }else if(
            formData.password !== formData.confirmPassword
        ){
            alert(`Passwords does not match`)
        }else{
            alert(`Welcome my G`)
        }
    }

    return(
        <div className="mainContainer">
            <h3>Login Form</h3>

            <form onSubmit={handleSubmit} className='form'>
                <div className="inputContainer">
                    <label htmlFor="firstName"> Enter First Name</label>
                    <input type="text" id="firstName" name="firstName" placeholder="Enter First Name" value={formData.firstName} onChange={handleFormdata}/>
                </div>

                <div className="inputContainer">
                    <label htmlFor="lastName"> Enter Last Name</label>
                    <input type="text" id="lastName" name="lastName" placeholder="Enter Last Name" value={formData.lastName} onChange={handleFormdata} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="email"> Enter Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter Email" value={formData.email} onChange={handleFormdata} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="password"> Enter Password</label>
                    <input type="password" id="password" name="password" placeholder="Enter Password" value={formData.password} onChange={handleFormdata} />
                </div>

                <div className="inputContainer">
                    <label htmlFor="confirmPassword"> Confirm Password</label>
                    <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleFormdata} />
                </div>

                <button type='submit' onClick={authenticate}> Submit</button>
            </form>
        </div>
    )
}



export default LoginForm