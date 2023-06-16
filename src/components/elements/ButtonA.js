import styles from './ButtonA.module.css'

function ButtonA({text}){
    return(
        <div>
            <button  className={styles.button}> <strong>{text}</strong> </button>
        </div>
    )
}

export default ButtonA