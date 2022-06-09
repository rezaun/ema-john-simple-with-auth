import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Shipment = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [error, setError] = useState('');
    //const navigate = useNavigate();


    const handleNameBlur = event =>{
        setName(event.target.value);
    }

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handleAddressBlur = event =>{
        setAddress(event.target.value);
    }

    const handlePhoneblur = event =>{
        setPhone(event.target.value)
    }

  
    const handleCreateUser = event =>{
        event.preventDefault();        
    }

    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Shipping Information</h2>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="name">Your Name</label>
                    <input onBlur={handleNameBlur} type="text" name='name' required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="address">Address</label>
                    <input onBlur={handleAddressBlur} type="text" name='address' required />
                </div>
                <div className='input-group'>
                    <label htmlFor="phone">Phone Number</label>
                    <input onBlur={handlePhoneblur} type="text" name='phone' required />
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Add Shipping" />
            </form>
            
        </div>
    </div>
    );
};

export default Shipment;