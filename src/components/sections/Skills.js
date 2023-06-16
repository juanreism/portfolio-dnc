import styles from './Skills.module.css'
import Container from './Container'
import javascript from '../../image/javascript.svg'
import html from '../../image/html.svg'
import css from '../../image/css.svg'
import react from '../../image/react.svg'
import typescript from '../../image/typescript.svg'

function Skills(){
    return(
        <div className={styles.skill}>
            <h1> Habilidades </h1>
            <p>Conheça um pouco das minhas principais habilidades e conhecimentos.</p>
            <Container>
                <ul className={styles.list}>
                    <li><img src={javascript}  alt='ERROR'/></li>
                    <li><img src={html}  alt='ERROR'/></li>
                    <li><img src={css}  alt='ERROR'/></li>
                    <li><img src={react}  alt='ERROR'/></li>
                    <li><img src={typescript}  alt='ERROR'/></li>
                </ul> 
            </Container>
        </div>
    )
}

export default Skills