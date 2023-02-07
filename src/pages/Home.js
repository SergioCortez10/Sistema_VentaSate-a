import React from "react";
import { Card, Container, Row } from "reactstrap";
import NavBar from "../components/NavBar";

const Home = () => {
  return (
    <>
      <NavBar />
      <Container>
        <Row className="pt-4 p-2">
          <Card className="p-4">
            <h1>Bievenido a la pagina de la Sateñeria La Laz</h1>
          </Card>
        </Row>
      </Container>
    </>
  );
};

export default Home;
