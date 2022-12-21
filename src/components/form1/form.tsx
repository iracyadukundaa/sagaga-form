import react from 'react';
import './form.css'


import React from 'react'

function Form() {
  return (
    <div className='page'>
      
        <div className="ui header">
            <h2>Create Account</h2>
        </div>
            <div className="ui pragaph">
                <p>Create great platform with client and get benefits</p>
            </div>
            
                <form className="form container">
                  
                    <input type="text" name="full name" id="fullname" placeholder='full name'/>
            
                    <input type="email" name="email" id="email" placeholder='email' required/> 
                  
                    
                    <input type="text" name="Origanization name" placeholder='origanization name' />
                    
                    
                    <input type="password" name="password" id="password" placeholder='password' />
                    <div className='phone'>
                    <input type="number" name="phone number" id="phone_number" placeholder='phone number' />
                    </div>
                    
                    <button className="sign-btn">Sign Up</button>

                </form>
            
           
        </div>
      
    
  )
}

export default Form
