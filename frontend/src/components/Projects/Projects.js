import React from "react";
import details from "../../config/details";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  const projects = details.projects;

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            {/* <TrackVisibility> */}
            <div
            // className={isVisible ? "animate__animated animate__fadeIn" : ""}
            >
              <h2>Projects</h2>
              <p>
                Here you'll find a collection of my web development projects,
                showcasing a diverse range of technologies including PHP, HTML,
                CSS, JavaScript, ReactJS, Angular, and more.
              </p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">Tab 1</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="second">Tab 2</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                    <Nav.Link eventKey="third">Tab 3</Nav.Link>
                  </Nav.Item>
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  // className={
                  //   isVisible ? "animate__animated animate__slideInUp" : ""
                  // }
                >
                  <Tab.Pane eventKey="first">
                    <Row>
                      {projects.map((project, index) => {
                        return <ProjectCard key={index} {...project} />;
                      })}
                    </Row>
                  </Tab.Pane>
                  {/* <Tab.Pane eventKey="section">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane>
                  <Tab.Pane eventKey="third">
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cumque quam, quod neque provident velit, rem explicabo
                      excepturi id illo molestiae blanditiis, eligendi dicta
                      officiis asperiores delectus quasi inventore debitis quo.
                    </p>
                  </Tab.Pane> */}
                </Tab.Content>
              </Tab.Container>
            </div>
            {/* </TrackVisibility> */}
          </Col>
        </Row>
      </Container>
      {/* <img className="background-image-right" src={colorSharp2}></img> */}
    </section>
  );
};

export default Projects;
