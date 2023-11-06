import { DiFirebase } from "react-icons/di";
import { DiJava } from "react-icons/di";
import { DiReact } from "react-icons/di";
import { DiAtlassian  } from 'react-icons/di'

const data = [
  {
    id: 1,
    icon: <DiFirebase />,
    title: 'Database',
    desc: 'DB2, Oracle, MySQL, PostgresSQL, MongoDB'
  },
  {
    id: 2,
    icon: <DiReact />,
    title: 'Frontend Development',
    desc: 'HTML, CSS, Javascript, React, Boostrap, Material-UI, AngulaJS'
  },
  {
    id: 3,
    icon: <DiJava />,
    title: 'Backend Development',
    desc: 'Java, Spring, NodeJS, COBOL, Dart, Python'
  },
  {
    id: 4,
    icon: <DiAtlassian />,
    title: 'Tools',
    desc: 'Git, Jira, Agile, Docker, Kubernetes, SonarQube, Nexus, AWS, Azure'
  }
]

export default data
