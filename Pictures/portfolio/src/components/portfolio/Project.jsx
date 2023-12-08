import React from "react";
import { useState } from "react";
import { Container, Wrapper, Title, CardContainer } from "./ProjectStyles";
import ProjectCards from "./ProjectCards";
import { projects } from "./constants";
import ProjectDetail from "./ProjectDetail";

const Projects = () => {
  const [openModal, setOpenModal] = useState(false);

  return (
    <Container id="projects">
      <Wrapper>
        <Title>Projects</Title>

        <CardContainer>
          {projects.map((project) =>
            openModal ? (
              <ProjectDetail
                key={project.id} // Don't forget to add a unique key
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            ) : (
              <ProjectCards
                key={project.id} // Don't forget to add a unique key
                project={project}
                openModal={openModal}
                setOpenModal={setOpenModal}
              />
            )
          )}
        </CardContainer>
      </Wrapper>
    </Container>
  );
};

export default Projects;
