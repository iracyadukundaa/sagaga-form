
import React from 'react'
import img from'../../assets/img.png'
import './right.css';
function Right() {
  return (
    <div className="image-container">
        <div className='header'>
        <p>Already A member?</p>
            <button className='button1'>Login</button>
            </div>
    <img src={img} alt=""className='img' />
        
      
    </div>
  )
}

export default Right;
