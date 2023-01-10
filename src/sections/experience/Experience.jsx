import Card from "../../components/Card"

const Experience = ({experience}) => {
  return (
    <Card className="light">
        <p>{experience.quote}</p>
        <div className="experience__client">
            <div className="experience__client-avatar">
                <img src={experience.avatar} alt="Experience Avatar" />
            </div>
            <div className="experience__client-details">
                <h6>{experience.name}</h6>
                <small>{experience.during}</small><br></br>
                <small>{experience.profession}</small>
            </div>
        </div>
    </Card>
  )
}

export default Experience