import styles from './Presentation.module.css'
import ButtonA from '../elements/ButtonA'
import {useState, useEffect} from 'react'

function Presentation (){
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ["Juan Reis!", 'Desenvolvedor FrontEnd!', 'Product Manager!'];
    const [text, setText] = useState('');
    const period = 1000;
    const [delta, setDelta] = useState(100);

    useEffect(()=>{
        let ticker = setInterval(()=>{
            tick();

        }, delta)
        return()=> {clearInterval(ticker)};
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1)

        setText(updatedText);

        if (isDeleting){
            setDelta (prevDelta => prevDelta/2)
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }else if (isDeleting && updatedText === ''){
            setIsDeleting(false);
            setLoopNum (loopNum + 1);
            setDelta(100);
        }
    }
    

    return (
        <div className={styles.presentation} id='Presentation'>
            <h4><strong>Bem-vindo ao meu Portfólio</strong></h4>
            <h1>Olá, eu sou {text}</h1>
            <p>
                Sou um apaixonado por tecnologia e soluções inovadoras. <br/>
                Como Product Manager, eu tenho o compromisso de resolver problemas<br/>
                complexos e trazer resultados excepcionais para os negócios.<br/>
                Meus projetos já geraram milhões de reais em receita anual<br/>
                estou sempre em busca de novos desafios para superar.
            </p>
            <ButtonA link='https://github.com/juanreism' text='Conecte-se comigo!'/>

        </div>
    )
}

export default Presentation 