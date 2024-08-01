import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Skills.scss";
import details from "../../config/details";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  const description = details.skillsDescription;
  const skills = details.skills;

  return (
    <section className="skill">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Skills & Technologies</h2>
              <p>{description}</p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                {skills.map((skill, index) => (
                  // key attribute is important for performance and to avoid potential issues
                  <div key={index} className="item">
                    <div className="circular-progress-bar">
                      <CircularProgressbar
                        value={skill.percentage}
                        text={`${skill.percentage}`}
                        styles={buildStyles({
                          rotation: 0.25,
                          strokeLinecap: "round",
                          textSize: "16px",
                          pathTransitionDuration: 0.5,
                          pathColor: `#2f40ac`,
                          textColor: "#fff",
                          trailColor: "#151515",
                          backgroundColor: "#3e98c7",
                        })}
                      />
                    </div>
                    <h5 class="skill-name">{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
