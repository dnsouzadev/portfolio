import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Ola, meu nome e <span className="purple">Daniel Souza </span>
            de <span className="purple"> Canavieiras, Bahia.</span>
            <br />
            Sou um estudante de Analise e Desenvolvimento de Sistema.
            <br />
            Sou um estudante de Java e Python. Com conhecimento em frameworks como Spring e Django.
            <br />
            No momento atuo como freelancer em desenvolvimento web e em sistemas Python.
            <br />

          </p>


          <p style={{ color: "rgb(155 126 172)" }}>
            "Falar é fácil, me mostre o código."{" "}
          </p>
          <footer className="blockquote-footer">Linus Torvald</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
