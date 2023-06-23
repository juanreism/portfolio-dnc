import styles from './Navbar.module.css'
import Nav from 'react-bootstrap/Nav';
import {FaGithub, FaInstagram, FaLinkedin} from 'react-icons/fa';

function Navbar (){
    return(
        <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li><Nav.Link className={styles.item} href="#Presentation">Apresentação</Nav.Link></li>
                    <li> <Nav.Link className={styles.item} href="#Skills">Habilidades</Nav.Link></li>
                    <li> <Nav.Link className={styles.item} href="#Projects">Projetos</Nav.Link></li>
                </ul> 
               <ul className={styles.list}>
                    <li><a className={styles.item} href='https://www.instagram.com/juanreism/'><FaInstagram size={30}/></a></li>
                    <li><a className={styles.item} href='https://github.com/juanreism'><FaGithub size={30}/></a></li>
                    <li><a className={styles.item} href='https://www.linkedin.com/in/jrmendes/'><FaLinkedin size={30}/></a></li>
               </ul>
        </nav>
    )}

export default Navbar


