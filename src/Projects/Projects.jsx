import ToDoList from '../assets/agenda.png'
import ProjectsCard from '../common/ProjectsCard'
import Unknown from '../assets/unknown.png'
import styles from './ProjectsStyles.module.css'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">My Projects</h1>
        <div className={styles.projectsContainer}>
            <ProjectsCard 
            src={ToDoList}
            link="https://github.com/"
            h3="To-Do List"
            p="Website Platform" />

            <ProjectsCard 
            src={Unknown}
            link="https://github.com/"
            h3="Project 2"
            p="Description" />

            <ProjectsCard 
            src={Unknown}
            link="https://github.com/"
            h3="Project 3"
            p="Description" />

            <ProjectsCard 
            src={Unknown}
            link="https://github.com/"
            h3="Project 4"
            p="Description" />

           
        </div>

    </section>
  )
}

export default Projects