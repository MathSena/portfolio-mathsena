import { SiAdobexd } from 'react-icons/si'
import { RiReactjsLine } from 'react-icons/ri'
import { FaServer } from 'react-icons/fa'
import { AiFillAppstore } from 'react-icons/ai'

const data = [
  {
    id: 1,
    icon: <SiAdobexd />,
    title: 'Data Stores',
    desc: 'SQL, DB2, Oracle, MySQL, PostgreSQL, MongoDB'
  },
  {
    id: 2,
    icon: <RiReactjsLine />,
    title: 'Frontend Development',
    desc: 'HTML, CSS, Javascript, React, SASS, Boostrap, Material-UI'
  },
  {
    id: 3,
    icon: <FaServer />,
    title: 'Backend Development',
    desc: 'Java, Spring, NodeJS, COBOL, Dart '
  },
  {
    id: 4,
    icon: <AiFillAppstore />,
    title: 'Tools',
    desc: 'Git, Jira, Agile(Scrum), Azure Devops, Docker'
  }
]

export default data
