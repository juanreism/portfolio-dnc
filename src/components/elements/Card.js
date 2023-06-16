import styles from './Card.module.css'
import ButtonB from './ButtonB'

function Card({title,tech, description, image, link, hosp}){
    return(
        <div>
            <div className={styles.card}>
                <div>
                    <a href={hosp}>
                        <img src={image} />  
                    </a>
                    <section>
                        <h2>{title}</h2>
                        <p>
                            <strong>Tecnologias:</strong> {tech} <br/>
                            {description}
                        </p>
                        <ButtonB text="Repositório" link={link}/>
                    </section>
                    
                </div>
            </div>
           
        </div>
    )
}

export default Card