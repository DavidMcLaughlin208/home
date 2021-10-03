import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import ProjectCard from "./ProjectCard";
import axios from "axios";

import { 
    Col,
    Card
 } from "react-bootstrap";

const TechExperienceCard = ({value}) => {
    const {
        heading,
        subHeading,
        content
    } = value;
    return (
        <Col md={4}>
            <Card className="card shadow-lg p-3 mb-5 bg-white rounded">
                <Col md={12}>                    
                    <h3 className="text-center">{value.heading}</h3>
                    <img className="mx-auto d-block" src={value.img} width="30%" />
                    <br />
                    <h5 className="text-center">{value.subHeading}</h5>
                    <div className="pb-5" text-center>
                        <p>{value.content}</p>
                    </div>
                </Col>
            </Card>
        </Col>
    );
}

export default TechExperienceCard;