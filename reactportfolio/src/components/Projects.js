import React from "react";
import {Col, Container, Tab, Nav, Row} from "react-bootstrap"
import ProjectCard from './ProjectCard'
import TrackVisibility from 'react-on-screen'

export default function Projects() {
  const projects = [
    {
      title: "Project 1",
      description: "Description 1",
      imgUrl: "Image1",
    },
    {
      title: "Project 2",
      description: "Description 2",
      imgUrl: "Image2",
    },
    {
      title: "Project 3",
      description: "Description 3",
      imgUrl: "Image3",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
          <TrackVisibility >
                        {({ isVisible}) => 
                                          <div className={isVisible ? "animate__animated animate__slideInUp" : ""}>
            <h2>Projects</h2>
            <p>This is random text.</p>
            </div>}
            </TrackVisibility>
            <Tab.Container>
            <Nav variant="pills" defaultActiveKey="first" className="nav-pills mb-5 justify-content-center align-items-cengter" id="pills-tab">
              <Nav.Item>
                <Nav.Link eventKey="first">Tab 1</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Tab 2</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">
                  Tab 3
                </Nav.Link>
              </Nav.Item>
            </Nav>
            <Tab.Content>
              <Tab.Pane eventKey='first'>
                  <Row>
                    {
                      projects.map((project, index)=>{
                        return (
                          <ProjectCard 
                          key={index}
                          {...project}
                          />
                        )
                      })
                    }
                  </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second">
                    Random text
              </Tab.Pane>
              <Tab.Pane eventKey="third">
                   Random text
              </Tab.Pane>
              
            </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={""}></img>
    </section>
  );
}
