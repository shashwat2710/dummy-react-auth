/* eslint-disable */
import { Fragment } from 'react';
import Button from '../UI/Button';
import './LoginForm.css';

const LoginForm = ()=>{
    const onSubmitHandler = (event)=>{
        event.preventDefault();
        console.log('Form Submitted');
    }
    return (<Fragment>
        <div className="form-input-header">Login</div>
            <form onSubmit={onSubmitHandler}>
        <div className="form-input-controls">
                <label htmlFor="email">Your Email</label>
                <input type='email' name='email' id='email'></input>
                <label htmlFor="password">Your Password</label>
                <input type='password' name='password' id='password'></input>
            </div>
            <div className='form-submit-controls'>
                <Button  value='Login'/>
            </div>
            </form>
        </Fragment>
    )
}

export default LoginForm