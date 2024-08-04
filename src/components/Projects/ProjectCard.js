import { Col } from "react-bootstrap";
import "./Projects.scss";
import { ArrowRightCircle } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, links }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} />
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
          <div className="links-container">
            {links.github && (
              <a href={links.github} target="_blank">
                Github <ArrowRightCircle />
              </a>
            )}
            {links.active && (
              <a href={links.active} target="_blank">
                Live <ArrowRightCircle />
              </a>
            )}
          </div>
        </div>
      </div>
    </Col>
  );
};
