import React from 'react'
import gradiantBgMobile from "../assets/bg-main-mobile.png"
import gradiantBgTablet from "../assets/bg-main-tablet.png"
import gradiantBgLaptop from "../assets/bg-main-desktop.png"
import "./Intro.css"

export default function Intro() {
  return (
    <section className='intro'>
        <div className='container-intro'>
           <div className='intro-content'>
              <div className='intro-title'>
                <h1>We make your music sound extraordinary.</h1>
              </div>
              <div className='intro-desc'>
                  <p>A system audio equalizer specifically designed for Andriod and iOS. Freely tune the way your music sounds with a professional grade parametric EQ & volume mixer. Control bass, mids, treble, gain control,reverb, and more!</p>
              </div>
              <div className='gradiant-background-mobile'>
                <img src={gradiantBgMobile} alt="color gradiant background"/>
              </div>
              <div className='gradiant-background-tablet'>
                  <img src={gradiantBgTablet} alt="color gradiant background"/>
              </div>
              <div className='gradiant-background-desktop'>
                  <img src={gradiantBgLaptop} alt="color gradiant background"/>
              </div>
           </div>
        </div>
    </section>
  )
}
