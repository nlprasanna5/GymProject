import React from 'react';
import messageStyle from '../../styles/loginSuccess.module.css';
import { useNavigate } from 'react-router-dom';

function LoginMessage() {

    const navigate = useNavigate();

    return (
        <>
            <div className={messageStyle.successMessage}>
                <div className={messageStyle.success}>
                    <h4 className={messageStyle.log}>Successfully logged</h4>

                </div>
                <div className={messageStyle.successButton}>
                    <button className={messageStyle.homeBtn} onClick={()=>navigate('/')}>Go To Home</button>
                </div>

            </div>

        </>
    )
}

export default LoginMessage;