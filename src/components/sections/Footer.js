import styles from './Footer.module.css'
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Footer(){
    return(
        <div className={styles.footer}>
            <ul className={styles.list}>
                <li><a className={styles.item} href='https://www.instagram.com/juanreism/'><FaInstagram size={30}/></a></li>
                <li><a className={styles.item} href='https://github.com/juanreism'><FaGithub size={30}/></a></li>
                <li><a className={styles.item} href='https://www.linkedin.com/in/jrmendes/'><FaLinkedin size={30}/></a></li>
                <li className={styles.item}> juan.reis@escoladnc.com.br</li>
                <li className={styles.item}> Juan Reis © 2023</li>
            </ul>
            
        </div>
    )
}

export default Footer