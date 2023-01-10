import Navbar from './sections/navbar/Navbar';
import Header from './sections/header/Header';
import About from './sections/about/About';
import Services from './sections/services/Services';
import Portfolio from './sections/portfolio/Portfolio';
import FAQs from './sections/faqs/FAQs';
import Contact from './sections/contact/Contact';
import Footer from './sections/footer/Footer';
import Experiences from './sections/experience/Experiences';

const App = () => {
  return (
    <main>
        <Navbar />
        <Header />
        <About />
        <Services />
        <Portfolio />
        <Experiences />
        <FAQs />
        <Contact />
        <Footer />
        {/* <FloatingNav /> */}
    </main>
  )
}

export default App