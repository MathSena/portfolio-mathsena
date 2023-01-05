import AboutImage from '../../assets/about.jpg'
import CV from '../../assets/cv.pdf'
import {HiDownload} from 'react-icons/hi'
import data from './data'
import Card from '../../components/Card'
import './about.css'

const About = () => {
  return (
    <section id="about">
        <div className="container about__container">
            <div className="about__left">
                <div className="about__portrait">
                    <img src={AboutImage} alt="About Image" />
                </div>
            </div>
            <div className="about__right">
                <h2>About Me</h2>
                <div className="about__cards">
                    {
                        data.map(item => (
                            <Card key={item.id} className="about__card">
                                <span className='about__card-icon'>{item.icon}</span>
                                <h5>{item.title}</h5>
                                <small>{item.desc}</small>
                            </Card>
                        ))
                    }
                </div>
                <p>
                Hello welcome! I'm a systems developer currently working for a retail company. My role is to provide systems support services, in addition to developing personal projects for learning and improvement. In my work team, I deal with developers and analysts who seek to deliver business value and contribute to the delivery of products in store through the logistics system. My experience is with SQL, Database, systems analysis, Java development with Spring Framework, Agile Methodology. I am also a programming enthusiast, technology lover and always looking to open my mind to the modern world. – My main hobbies are books, geek universe and pop culture.
                </p>
                <p>
                Hi, my name is Matheus Sena from São Paulo, Brazil. I'm a full-stack back end developer with a Bachelors degree in analysis and systems development. My top priority is to get your business online the right way, giving you industry-standard design and all the functionality you need to operate smoothly online. Get in touch today with the details of your project let's get started! Check out my resume below!
                </p>
                <a href={CV} download className='btn primary'>Download CV <HiDownload/></a>
            </div>
        </div>
    </section>
  )
}

export default About