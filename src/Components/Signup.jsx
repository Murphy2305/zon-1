import React from 'react'
import '../Styles/Signup.css'

const Signup = () => {
  return (
    <>
      <div className="signupNow">
        <div className="signup-outer-box">
          <div className="signup-inner-box">
            <div className="sign">
              <h1 className='start-journey'>
                Start your Amazon Journey
              </h1>
              <p className='sign-desc'>
                First time seller or need help making more sales on <br />
                Amazon? Get started today for free! We have a suite of Tools <br /> 
                available for Amazon Sellers.
              </p>
              <button className="signNow">
                Sign up Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
