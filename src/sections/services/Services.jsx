import Card from '../../components/Card'
import data from './data'
import './services.css'

const Services = () => {
    return (
        <section id="services">
            <h2>My Skills</h2>
            <p>Hey there! 😄 I'm super into learning new stuff and staying on top of tech trends. I'm always ready to take on the next big tech challenge! 🌟 Let's make cool things happen together! 🛠️✨</p>
            <div className="container services__container">
                {
                    data.map(item => (
                        <Card key={item.id} className="service light">
                            <div className="service__icon">{item.icon}</div>
                            <div className="service__details">
                                <h4>{item.title}</h4>
                                <p>{item.desc}</p>
                            </div>
                        </Card>
                    ))
                }
            </div>
        </section>
    )
}

export default Services