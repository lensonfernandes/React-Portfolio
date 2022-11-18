import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons';
import {useState, useEffect} from 'react'


export default function Banner() {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate =  [ "React Developer", "Frontend Engineer", "Citrix Expert"];
    const [text, setText] = useState('');
    const period = 2000;
    const [delta, setDelta] = useState(300 - Math.random()*100);

    useEffect(() => {
        let ticker = setInterval(()=>{
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
        };
    }, [text])

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updatedText = isDeleting? fullText.substring(0, text.length-1) : fullText.substring(0, text.length + 1 )
        setText(updatedText);

        if(isDeleting){
            setDelta(prevDelta => prevDelta /2)
        }
        if(!isDeleting && updatedText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        }
        else if(isDeleting && updatedText === '')
        {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
            setDelta(500);
        }
    }
  return (
    <div>
        
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Lenson"} <span className="wrap">{text}</span></h1>
                        <p> If the sentence is the essential soul to express oneself in their own way, then the paragraph is the virtual body of it. The Text Generator is an intelligent tool that creates random text incorporated with random thoughts
                        </p>
                        <button onClick={()=>console.log('connect')} >Let's Connect <ArrowRightCircle size={25}/> </button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={""} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
        
    </div>
  )
}
