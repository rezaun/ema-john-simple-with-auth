import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const SignUp = () => {

    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePasswordBlur = event =>{
        setPassowrd(event.target.value);
    }

    const handleConfirmPassword = event =>{
        setConfirmPassword(event.target.value)
    }

    if(user){
        navigate('/inventory');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !==confirmPassword){
            setError('Your password did not match');
        }if(password.length < 6){
            setError('Password must be 6 character or grater then 6');
            return;
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div className='form-container'>
        <div>
            <h2 className='form-title'>Sign Up</h2>
            <form onSubmit={handleCreateUser}>
                <div className='input-group'>
                    <label htmlFor="email">Email</label>
                    <input onBlur={handleEmailBlur} type="email" name='email' required/>
                </div>
                <div className='input-group'>
                    <label htmlFor="password">Password</label>
                    <input onBlur={handlePasswordBlur} type="password" name='password' required />
                </div>
                <div className='input-group'>
                    <label htmlFor="confirmPassword">Password</label>
                    <input onBlur={handleConfirmPassword} type="password" name='confirmPassword' required />
                </div>
                <p style={{color:'red'}}>{error}</p>
                <input className='form-submit' type="submit" value="Sign Up" />
            </form>
            <p>Already have an Account? <Link className='form-link' to='/login'>Login</Link></p>
        </div>
    </div>
    );
};

export default SignUp;