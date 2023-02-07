import React from "react";
import { Card, Col, Container, Input, Label, Row } from "reactstrap";
import NavBar from "../components/NavBar";

import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend 
}from 'chart.js';

import {Bar} from 'react-chartjs-2'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend 
)

const Estaditicas = () => {
  const data = {
    labels:['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'],
    datasets:[
      {
        label:369,
        data:[250.0,290.0,210.0,310.0,240.0,400.0,460.0],
        backgroundColor:'aqua',
        borderColor:'black',
        borderWidth:1,
      }
    ]
  }

  const options=[

  ]
  return (
    <>
      <NavBar />
      <Container className="pt-4 p-2">
        <Card className="p-4">
          <h5 className="text-center">Estadisticas</h5>
          <Row className="pt-4 d-flex text-center align-items-center justify-content-center" >
            <Label for="exampleSelect">
              <h6>Seleccion opción</h6>
            </Label>
            <Col sm='8'>
              <Input id="exampleSelect" name="select" type="select">
                <option>Diario</option>
                <option>Anuel</option>
                <option>Mensual</option>
                <option>Semanal</option>
              </Input>
            </Col>
          </Row>
          <Row className="pt-4">
            <Bar data={data} options={options} />
          </Row>
        </Card>
      </Container>
    </>
  );
};

export default Estaditicas;
