import React, { useState } from "react";
import Select from "react-select/creatable";
import details from "../../config/details";
import { Container, Row, Col, Tab, Nav, Form } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import "./Projects.scss";

const Projects = () => {
  const allProjects = details.projects;
  const selectTechOptions = details.selectTechOptions;
  console.log(selectTechOptions);

  const [keyword, setKeyword] = useState("");
  const [selectedTechs, setSelectedTechs] = useState([]);

  // Filter logic
  const filteredProjects = allProjects.filter((project) => {
    // Match if the keyword is in the title or description
    const keywordMatch =
      keyword === "" ||
      project.title.toLowerCase().includes(keyword.toLowerCase()) ||
      project.description.toLowerCase().includes(keyword.toLowerCase());

    // Match if ANY selected technology is found in project.technologies[]
    const techMatch =
      selectedTechs.length === 0 ||
      selectedTechs.some((tech) =>
        project.technologies?.some((t) =>
          t.toLowerCase().includes(tech.value.toLowerCase())
        )
      );

    // ✅ Require BOTH: keyword AND (any of the selected techs)
    if (keyword && selectedTechs.length > 0) {
      return keywordMatch || techMatch;
    }

    // ✅ If only keyword is entered
    if (keyword && selectedTechs.length === 0) {
      return keywordMatch;
    }

    // ✅ If only technologies are selected
    if (!keyword && selectedTechs.length > 0) {
      return techMatch;
    }

    // ✅ No filters: show all
    return true;
  });

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Project Archive</h2>
              <p>
                These are the projects Nitish has deployed into the digital
                universe. Want details? Just hover or launch one.
              </p>

              {/* Filter Inputs */}
              <div className="filters">
                <Form.Group className="filter-item" controlId="keywordSearch">
                  <Form.Control
                    type="text"
                    placeholder="Search by keyword..."
                    value={keyword}
                    onChange={(e) => setKeyword(e.target.value)}
                  />
                </Form.Group>

                <Form.Group className="filter-item" controlId="techFilter">
                  <Select
                    isMulti
                    isClearable
                    placeholder="Filter by technologies..."
                    value={selectedTechs}
                    onChange={(value) => setSelectedTechs(value || [])}
                    options={selectTechOptions}
                    className="tech-select"
                    classNamePrefix="select"
                  />
                </Form.Group>
              </div>

              {/* Tabs */}
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                  id="pills-tab"
                >
                  <Nav.Item>
                    <Nav.Link eventKey="first">All Projects</Nav.Link>
                  </Nav.Item>
                </Nav>

                <Tab.Content id="slideInUp">
                  <Tab.Pane eventKey="first">
                    <div className="project-scroll-container">
                      <Row>
                        {filteredProjects.map((project, index) => (
                          <ProjectCard {...project} />
                        ))}
                        {filteredProjects.length === 0 && (
                          <p className="text-center mt-4">No projects found.</p>
                        )}
                      </Row>
                    </div>
                  </Tab.Pane>
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
