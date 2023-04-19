import React from 'react';
import style from './Pricing.module.css'

function GymPricing() {
    return (
    <div className={style.mainContainer}>
      <div className={style.pricingHeading}>
        <h1 className={style.pricingHeading}>Our Plans
            <h6>"Get Fit and Save Big with </h6>
            <h6>Our Gym Membership Plans -  </h6>
         <h6>Choose the Best Option for You!"</h6>
        </h1>
    </div>
    <div className={style.pricingContainer}>
    
    <div className={style.pricingPlan}>
      <h2>Basic</h2>
      <h3>$19.99/month</h3>
      <ul>
        <li>Access to gym during regular hours</li>
        <li>Basic workout equipment</li>
        <li>No personal training sessions</li>
      </ul>
      <button>Register</button>
    </div>
    <div className={style.pricingPlan}>
      <h2>Premium</h2>     
      <h3>$49.99/month</h3>
      <ul>
        <li>24/7 gym access</li>
        <li>Full range of workout equipment</li>
        <li>1 personal training session/month</li>
      </ul>
      <button>Register</button>
    </div>
    <div className={style.pricingPlan}>
      <h2>Elite</h2>
      <h3>$99.99/month</h3>
      <ul>
        <li>24/7 gym access</li>
        <li>Full range of workout equipment</li>
        <li>2 personal training sessions/month</li>
      </ul>
      <button>Register</button>
    </div>
  </div>

    </div>

    
    
    );
}

export default GymPricing;
