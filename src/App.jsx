import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import FloatingNav from './sections/floating-nav/FloatingNav';
import Modal from './components/Modal';

import { useThemeContext } from './context/theme-context';

const App = () => {
  const {themeState} = useThemeContext();
  
  return (
    <main className={`${themeState.primary} ${themeState.background}`} >
        <Navbar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Contact />
        <Footer />
        <Modal /> 
        <FloatingNav />
  
  
    </main>
  )
}

export default App