import React from 'react'
import {Container, Row, Col} from "react-bootstrap"
import {ArrowRightCircle} from 'react-bootstrap-icons';
import {useState, useEffect} from 'react'
import 'animate.css'
import TrackVisibility from 'react-on-screen'
import reactBannerImg from '../assets/img/reactBanner.svg'


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

                        <TrackVisibility className="trackvisibility">
                        {({ isVisible}) => 
                 <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <br/>
                        <br/>
                        <br/>
                        <h1>{"Hi, I'm Lenson! "}<br></br> <span className="wrap">{text}</span></h1>
                        <br/>
                        <br/>
                        <br/>
                        <p> A Critical thinker with 3+ years of experience
in the Virtualization and Cloud industry as a
Support Expert.
Currently performing a switch from Support
to Frontend Engineering, to express my
innovative creative skills for company growth
and self.

                        </p>
                        <button onClick={()=>console.log('connect')}  className="bg-dark p-2"><a href="https://www.linkedin.com/in/lenson-fernandes-6237091a2" className="text-white" style={{textDecoration: "none"}}>Let's Connect on LinkedIn</a><ArrowRightCircle size={25}/> </button>
                        </div> }
                        </TrackVisibility>
                    
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={reactBannerImg} alt="Header Img" />
                    </Col>
                </Row>
            </Container>
        </section>
        
    </div>
  )
}
