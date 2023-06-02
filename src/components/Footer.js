import React from 'react'
import logo from "../assets/logo.svg"
import facebookIcon from "../assets/icon-facebook.svg"
import instagramIcon from "../assets/icon-instagram.svg"
import twitterIcon from "../assets/icon-twitter.svg"

import "./Footer.css"

export default function Footer() {
  return (
    <section className='footer'>
        <div className='container-footer'>
            <div className='footer-content'>
                <div className='text-wrapper'>
                    <div className='logo-footer'>
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className='text-content-footer'>
                        <p>All rights reserved &copy; Equalizer 2021 
                            <br/>
                            Have any problems? Contact us via social media or email us at 
                            <br/>
                            <b>equalizer@example.com</b>
                        </p>
                    </div>
                </div>
                <div className='socials-icon'>
                    <img src={facebookIcon} alt="facebook-icon"/>
                    <img src={instagramIcon} alt="instagram-icon"/>
                    <img src={twitterIcon} alt="twitter-icon"/>
                </div>
            </div>
        </div>
    </section>
  )
}
