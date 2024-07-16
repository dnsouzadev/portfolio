import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import im from "../../Assets/Projects/im.png";
import image from "../../Assets/Projects/image.png";
import image2 from "../../Assets/Projects/image2.png";
import image4 from "../../Assets/Projects/image4.png";
import image5 from "../../Assets/Projects/image5.png";
import image6 from "../../Assets/Projects/image6.png";
import Particle from "../Particle";
import ProjectCard from "./ProjectCards";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Meus projetos <strong className="purple">recentes </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Batch CNAB"
              description="Projeto utilizando Spring Batch para o processamento de um arquivo CNAB e exibe os seus lançamentos importados em uma interface SPA com React."
              ghLink="https://github.com/dnsouzadev/batch-cnab"
              demoLink="https://frontend-pagnet-lclb.onrender.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={im}
              isBlog={false}
              title="API Restful de estacionamento"
              description="API RESTful para gerenciamento de estacionamento, desenvolvida em
Java utilizando Spring Boot. A segurança é garantida pelo Spring Security
com autenticação JWT, e a documentação é realizada com Swagger."
              ghLink="https://github.com/dnsouzadev/api-park"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image4}
              isBlog={false}
              title="Gestao RH"
              description="Este projeto é uma aplicação web desenvolvida com Django, focada na gestão de recursos humanos. Ele inclui funcionalidades como gerenciamento de funcionários, administração de departamentos e controle de documentos."
              ghLink="https://github.com/soumyajit4419/Editor.io"
              demoLink="http://3.141.127.37:8000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image2}
              isBlog={false}
              title="Escola REST API"
              description="A Escola REST API é uma aplicação que oferece funcionalidades através de uma API RESTful. Ela permite a comunicação entre plataformas e a reutilização de funcionalidades. Aqui estão algumas informações relevantes."
              ghLink="https://github.com/dnsouzadev/escola-rest-api"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image5}
              isBlog={false}
              title="Clientes"
              description="Este é um sistema de gerenciamento de clientes, desenvolvido para organizar e facilitar a administração de informações de clientes. O aplicativo permite o cadastro, visualização, edição e exclusão de dados de clientes de forma eficiente."
              ghLink="https://github.com/dnsouzadev/projeto-clientes"
              demoLink="http://3.137.166.211:8000/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image6}
              isBlog={false}
              title="Encurtador de URL"
              description="Este é um serviço simples de encurtamento de URL desenvolvido para criar URLs curtas a partir de URLs longas."
              ghLink="https://github.com/dnsouzadev/encurtador-url"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
