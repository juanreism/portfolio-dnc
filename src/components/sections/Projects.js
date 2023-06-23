import styles from './Projects.module.css'
import Card from '../elements/Card'
import ButtonB from '../elements/ButtonB'
import projectA from '../../image/cases/projectA.svg'
import projectB from '../../image/cases/projectB.svg'

function Projects(){

    const img1 = projectA
    const img2 = projectB
    return(
            <div className={styles.projects} id='Projects'>
                <h1> Projetos </h1>
                <Card
                    img={img1} 
                    title=" LP - DNC" 
                    tech="HTML, CSS e JS" 
                    description="Desenvolvimento de uma Landing Page para o lançamento da formação em tecnologia" 
                    repo="https://github.com/juanreism/lp-dnc" 
                    site="https://stupendous-sable-3c4746.netlify.app/"
                    />
                <Card
                    img={img2} 
                    title="Portfolio React" 
                    tech="React" 
                    description="..." 
                    repo="https://github.com/juanreism/lp-dnc" 
                    site="https://stupendous-sable-3c4746.netlify.app/"
                    />
                <ButtonB text='Acesse meu repositório' link='https://github.com/juanreism?tab=repositories'/>
            </div>
        )
}

export default Projects