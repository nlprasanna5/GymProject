import React from 'react';
import messageStyle from '../../styles/loginSuccess.module.css';
import { useNavigate } from 'react-router-dom';

function RegisterMessage() {
    const navigate = useNavigate();

    return (
        <>
            <div className={messageStyle.successMessage}>
                <div className={messageStyle.success}>
                    <h4 className={messageStyle.log}>Successfully Registered</h4>
                    <h4>Please subscribe in pricing section</h4>

                </div>
                <div className={messageStyle.successButton}>
                    <button className={messageStyle.homeBtn} onClick={() =>navigate('/')}>Go To Home</button>
                </div>

            </div>

        </>
    )
}

export default RegisterMessage;