import React from 'react'
import bgPattern from "../assets/bg-pattern-2.svg"
import appleIcon from "../assets/icon-apple.svg"
import androidIcon from "../assets/icon-android.svg"
import phoneIllustration from "../assets/illustration-app.png"

import "./Product.css"


export default function Product() {
  return (
    <section className='product'> 
        <div className='container-product'>
            <div className='product-content'>
                <div className='background-section'>
                    <img src={bgPattern} alt=""/>
                </div>
                <div className='card-section-wrapper'>
                    <div className='card-section'>
                        <div className='text-section'>
                            <h4>Premium EQ</h4>
                            <p>Get expert-level control with a robust equalizer, volume mixer, and spatial audio. Take your listening experience to a whole new level and access all our incredible features!</p>
                        </div>
                        <div className='price-section'>
                            <h3>$4</h3>
                            <p>/ month</p>
                        </div>
                        <div className='buttons-section'>
                            <button className='ios'>
                                <img src={appleIcon} alt="apple icon"/>
                                iOS Download
                            </button>
                            <button className='android'>
                                <img src={androidIcon} alt="apple icon"/>
                                Android Download
                            </button>
                        </div>
                    </div>
                </div>
                <div className='phone-illustration'>
                    <img src={phoneIllustration} alt="Phone illustration"/>
                </div>
            </div>
        </div>
    </section>
  )
}
