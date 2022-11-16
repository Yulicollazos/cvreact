import React from "react";
import { Alert } from 'react-bootstrap';

function Aux(){
    return(
        <div>
            <h1>
                Karen Yulieth Collazos Castillo
            </h1>
            <Alert variant="warning">
                <Alert.Heading>SOBRE MI</Alert.Heading>
                <p aling="center">
                Soy el tipo de persona que le gusta tomar riesgos
                </p>
                <hr />
                <Alert.Heading>PERFIL</Alert.Heading>
                <p className="mb-0">
                Técnico en sistemas, estudiante de séptimo semestre de ingeniería en sistemas
                y telecomunicaciones, Conocimientos ofimáticos en programas office, sistemas
                operativos, sistema contable Visión. Conocimientos avanzados en ventas, planeación 
                y cumplimiento de metas y capacidad de liderazgo. Persona con orientación a 
                desarrollar la labor con calidad, innovadora, con iniciativa y colaboradora. 
                Dispuesta a cumplir con las distintas funciones, obligaciones y normas laborales 
                para así, formar parte del cumplimiento de metas planteadas por la organización.
                </p>
            </Alert>
        </div>
    );
};

export default Aux;