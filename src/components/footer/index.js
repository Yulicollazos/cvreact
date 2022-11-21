import React from "react";
import { Carousel } from 'react-bootstrap';
import buho from './imagenes/buho.jpg'
import golden from './imagenes/golden.jpg'
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';



function Footer(){
    return(
        <div>
            <h1 className="tituloanimales">
                Empresas donde he trabajado
            </h1>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://pbs.twimg.com/profile_images/1305868800479432704/n1Lw7igE_400x400.jpg"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Colombianet.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://conectamostuempresa.com/wp-content/uploads/2019/09/logoUnissubir.png"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Unniser</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={buho}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Comdata</h3>
                    
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={golden}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Emergia</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <h1 className="tituloempresas">Lista de empresas donde he trabajado.</h1>
                <ListGroup>
                    <ListGroup.Item>Colombianet</ListGroup.Item>
                    <ListGroup.Item>Unisser</ListGroup.Item>
                    <ListGroup.Item>Digitex</ListGroup.Item>
                    <ListGroup.Item>Emergia</ListGroup.Item>
                </ListGroup>


                <h1 className="tituloacordion">Mis Estudios.</h1>
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Bachiller</Accordion.Header>
                        <Accordion.Body>
                        <p>Colegio San Pio X</p>
                        <p>Dirección: Cl 105 # 34 35 Manizales</p>
                        <p>2008-2013</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item segundoestudio="1">
                        <Accordion.Header> Técnico en sistemas</Accordion.Header>
                        <Accordion.Body>
                        <p>Servicio Nacional de Aprendizaje SENA</p>
                        <p>Dirección: Km vía, cl. 10, Magdalena</p>
                        <p>2014-2014</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item tercerestudio="2">
                        <Accordion.Header>Auditores Internos</Accordion.Header>
                        <Accordion.Body>
                        <p>El ABC de la contratacion Internacional</p>
                        <p>Colombianet Solutions 2015</p>
                        </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item cuartoestudio="4">
                        <Accordion.Header>Ingenieria en sistemas y telecomunicaciones</Accordion.Header>
                        <Accordion.Body>
                        <p>Universidad de Manizales</p>
                        <p>Dirección: Cra 8 # 8 3, MAnizales</p>
                        <p>2017- Actualmente</p>
                        </Accordion.Body>
                    </Accordion.Item>
    </Accordion>
                
        </div>
    );
};

export default Footer;