import React from 'react'
import {Container, Row, Col} from "react-bootstrap"

export default function Banner() {
  return (
    <div>
        
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline"> Welcome to my Portfolio</span>
                        <h1>{"Hi I'm Lenson"} <span className="wrap">React Engineer</span></h1>
                        <p> If the sentence is the essential soul to express oneself in their own way, then the paragraph is the virtual body of it. The Text Generator is an intelligent tool that creates random text incorporated with random thoughts
                        </p>
                        <button onClick={()=>console.log('connect')} >Let's Connect</button>
                    </Col>
                </Row>
            </Container>
        </section>
        
    </div>
  )
}
