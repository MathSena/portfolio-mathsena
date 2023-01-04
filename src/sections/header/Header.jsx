import HeaderImage from '../../assets/header.JPG'
import React from 'react'
import data from './data'
import './header.css'

const Header = () => {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">

          <img src={HeaderImage} alt="Header Portait" />
        </div>
        <h3>Matheus Sena</h3>
        <p>Hello! Welcome to my website! You are a click away from building your software today!
        </p>
        <div className="header__cta">
          <a href="#contact" className='btn primary'> Let's talk</a>
          <a href="#portfolio" className='btn light'>My work</a>
        </div>
        <div className="header__socials">
          {
            data.map(item => <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer">{item.icon}</a>)

          }
        </div>

      </div>
      
      
      </header>
  )
}

export default Header