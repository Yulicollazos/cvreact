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
                Mis animales favoritos en el mundo.
            </h1>

            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://static.nationalgeographic.es/files/styles/image_3200/public/01-lion-populations-nationalgeographic_1777804.jpg?w=1900&h=1267"
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>Leon</h3>
                    <p>El mayor significado para mi es liderazgo y luchar por su familia.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src="https://www.infobae.com/new-resizer/zrFk46opL6ETyF8a7q4CKywhAP4=/1200x628/filters:format(webp):quality(85)//cloudfront-us-east-1.images.arcpublishing.com/infobae/RZ4H2BEABFENNEHB7ED4YZV5RY.jpg"
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Elefante</h3>
                    <p>Lo más representativo para mi es la estabilidad y fuerza.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={buho}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>buho</h3>
                    <p>
                        Para mi significa inteligencia.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={golden}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Golden Retriever</h3>
                    <p>
                        Para mi es el significado de humildad y cuidado hacia los demas.
                    </p>
                    </Carousel.Caption>
                </Carousel.Item>
                </Carousel>
                <h1 className="tituloempresas">Lista de empresas donde he trabajado</h1>
                <ListGroup>
                    <ListGroup.Item>Colombianet</ListGroup.Item>
                    <ListGroup.Item>Unisser</ListGroup.Item>
                    <ListGroup.Item>Digitex</ListGroup.Item>
                    <ListGroup.Item>Emergia</ListGroup.Item>
                </ListGroup>


                <h1 className="tituloacordion">Mis Estudios</h1>
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