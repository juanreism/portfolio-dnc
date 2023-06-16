import styles from './Projects.module.css'
import Card from '../elements/Card'
import ButtonB from '../elements/ButtonB'
import projectA from '../../image/cases/projectA.svg'
import projectB from '../../image/cases/projectB.svg'

function Projects(){

    const img1 = projectA
    const img2 = projectB
    const repositorio = 'https://github.com/juanreism'
    const rep1 = 'https://github.com/juanreism/lp-dnc'
    const hosp1='https://stupendous-sable-3c4746.netlify.app/'

    return(
        <div className={styles.projects}>
            <h1>Projetos </h1>
            
            <Card hosp={hosp1} image={img1} link={rep1} title="LP-DNC" description="blablablablablablabalblablablablablablabalblablab lablablablabalblablablablablablabal" tech="HTML, CSS e JS"/>            
            <Card image={img2} title="Portfólio React" description="blablablablablablabalblablablablablablabalblablab lablablablabalblablablablablablabal" tech="React"/>     
            <div className={styles.btn}>
                <ButtonB link={repositorio} text='Ver repositóriocompleto'/>      
            </div>
        </div>
    )
}

export default Projects