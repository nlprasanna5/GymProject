import React from 'react';
import style from './Pricing.module.css';
import { useNavigate } from 'react-router-dom';
import { getUsers } from '../../Utils/localStorage';

function GymPricing() {
  
  const navigate = useNavigate();
  const users = getUsers();
  const isLogin = JSON.parse(localStorage.getItem('login')) || false;
  const loginDetails = JSON.parse(localStorage.getItem('loginDetails')) || [];


  function handleSubscribeBasic() {
    alert("Thanks for subscribing");

    loginDetails.isSubscribed = true;
    localStorage.setItem('loginDetails', JSON.stringify(loginDetails));

    const updatedUsers = users.map((item) => {
      if (item.email === loginDetails.email) {
        return {
          ...item, // Copy all properties of the original item
          isSubscribed: true // Update the isSubscribed property
        };
      }
      return item;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/basic');
  }


  function handleSubscribePremium() {
    alert("Thanks for subscribing");

    loginDetails.isSubscribed = true;
    localStorage.setItem('loginDetails', JSON.stringify(loginDetails));

    const updatedUsers = users.map((item) => {
      if (item.email === loginDetails.email) {
        return {
          ...item, // Copy all properties of the original item
          isSubscribed: true // Update the isSubscribed property
        };
      }
      return item;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/premium');
  }

  function handleSubscribeElite() {
    alert("Thanks for subscribing");

    loginDetails.isSubscribed = true;
    localStorage.setItem('loginDetails', JSON.stringify(loginDetails));

    const updatedUsers = users.map((item) => {
      if (item.email === loginDetails.email) {
        return {
          ...item, // Copy all properties of the original item
          isSubscribed: true // Update the isSubscribed property
        };
      }
      return item;
    });

    localStorage.setItem('users', JSON.stringify(updatedUsers));
    navigate('/elite');
  }

  function handleStart() {
    if (!isLogin) {
      alert('Register, login, and then subscribe');
      navigate('/login');
    }

  }

  return (
    <div id='pricing' className={style.mainContainer}>
      <div className={style.price}>
        <div className={style.pricingHeading}>
          <h1 className={style.plan}>Our Plans</h1>
          <h6>"Get Fit and Save Big with</h6>
          <h6>Our Gym Membership Plans -</h6>
          <h6>Choose the Best Option for You!"</h6>
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

            <button >
              {
                isLogin ? (
                  <>
                    {
                      loginDetails.isSubscribed ? (
                        <>
                          <p style={{ margin: '0' }}>Subscribed</p>
                        </>
                      ) : (
                        <>
                          <p onClick={handleSubscribeBasic} style={{ margin: '0' }}>Subscribe</p>
                        </>
                      )
                    }
                  </>
                ) : (
                  <>
                    <p onClick={handleStart} style={{ margin: '0' }}>Get Started</p>
                  </>
                )
              }
            </button>
          </div>
          <div className={style.pricingPlan}>
            <h2>Premium</h2>
            <h3>$49.99/month</h3>
            <ul>
              <li>24/7 gym access</li>
              <li>Full range of workout equipment</li>
              <li>1 personal training session/month</li>
            </ul>

            <button >
              {
                isLogin ? (
                  <>
                    {
                      loginDetails.isSubscribed ? (
                        <>
                          <p style={{ margin: '0' }}>Subscribed</p>
                        </>
                      ) : (
                        <>
                          <p onClick={handleSubscribePremium} style={{ margin: '0' }}>Subscribe</p>
                        </>
                      )
                    }
                  </>
                ) : (
                  <>
                    <p onClick={handleStart} style={{ margin: '0' }}>Get Started</p>
                  </>
                )
              }
            </button>
          </div>
          <div className={style.pricingPlan}>
            <h2>Elite</h2>
            <h3>$99.99/month</h3>
            <ul>
              <li>24/7 gym access</li>
              <li>Full range of workout equipment</li>
              <li>2 personal training sessions/month</li>
            </ul>

            <button >
              {
                isLogin ? (
                  <>
                    {
                      loginDetails.isSubscribed ? (
                        <>
                          <p style={{ margin: '0' }}>Subscribed</p>
                        </>
                      ) : (
                        <>
                          <p onClick={handleSubscribeElite} style={{ margin: '0' }}>Subscribe</p>
                        </>
                      )
                    }
                  </>
                ) : (
                  <>
                    <p onClick={handleStart} style={{ margin: '0' }}>Get Started</p>
                  </>
                )
              }
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GymPricing;