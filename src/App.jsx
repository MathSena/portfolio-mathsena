import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Experiences from './sections/experience/Experiences';
import Modal from './components/Modal';
import Theme from './theme/Theme';
import { useThemeContext } from './context/theme-context';

const App = () => {
  const {themeState} = useThemeContext();
  return (
    <main className={`${themeState.primary} ${themeState.background}`}>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Experiences />
        <FAQs />
        <Contact />
        <Footer />
        <Modal /> 
        <Theme />
        {/* <FloatingNav /> */}
    </main>
  )
}

export default App