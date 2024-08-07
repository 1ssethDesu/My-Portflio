import styles from './SkillsStyles.module.css'
import checkMarkLight from '../../assets/checkmark-light.png'
import checkMarkDark from '../../assets/checkmark-dark.svg'
import SkillLists from '../../common/SkillLists'
import {useTheme} from '../../common/ThemeContext'

function Skills() { const { theme } = useTheme();
const CheckMark = theme === 'light' ? checkMarkLight : checkMarkDark;

  return (
    <section id="skills" className={styles.container}>
        <h1 className="sectionTitle">Skills</h1>
        <div className={styles.skillLists}>
           <SkillLists src={CheckMark} skill="HTML" />
           <SkillLists src={CheckMark} skill="CSS" />
           <SkillLists src={CheckMark} skill="JavaScript" />
           <SkillLists src={CheckMark} skill="React" />
           <SkillLists src={CheckMark} skill="Tailwind" />
        </div>
    </section>
  )
}

export default Skills