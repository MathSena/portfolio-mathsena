import { useEffect } from 'react'
import HeaderImage from '../../assets/math.JPG'
import data from './data'
import AOS from 'aos'
import 'aos/dist/aos.css'
import './header.css'

const Header = () => {
  useEffect(() => {
    AOS.init({duration: 2000})
  }, [])

  return (
    <header id="header" className="bg-gray-100">
      <div className="container mx-auto px-4 header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="Header Portrait" className="rounded-full w-32 h-32 object-cover" />
        </div>
        <h3 data-aos="fade-up" className="text-xl text-gray-800 font-semibold">Matheus Sena</h3>
        <p data-aos="fade-up" className="text-gray-600">
          Hi there! May the code be with you! 👋🚀✨
        </p>
        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className='btn bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>
            Let's Talk
          </a>
          <a href="#portfolio" className='btn bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded'>
            My Work
          </a>
        </div>
        <div className="header__socials">
          {
            data.map(item => (
              <a key={item.id} href={item.link} target="_blank" rel="noopener noreferrer" className="inline-block px-2">
                {item.icon}
              </a>
            ))
          }
        </div>
      </div>
    </header>
  )
}

export default Header
