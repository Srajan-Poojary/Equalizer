import React from 'react'
import logo from "../assets/logo.svg"


import bgPatternTop from "../assets/bg-pattern-1.svg"
import "./Header.css"

export default function Header() {
  return (
    <header>
        <div className='container-header'>
            <div className='logo'>
                <img src={logo} alt="Logo"/>
            </div>
            <div className='bg-pattern-top'>
                <img src={bgPatternTop} alt=""/>
            </div>
        </div>
    </header>
  )
}
