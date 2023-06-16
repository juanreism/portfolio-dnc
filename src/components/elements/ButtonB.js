import styles from './ButtonB.module.css'

function ButtonB({text, link}){
    return(
        <div >
            <a href={link}>
                <button className={styles.btn}> <strong>{text}</strong> </button>
            </a>
        </div>
    )
}

export default ButtonB