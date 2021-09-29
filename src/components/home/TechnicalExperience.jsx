import React, { useState, useEffect, useCallback } from "react";
import Container from "react-bootstrap/Container";
import Jumbotron from "react-bootstrap/Jumbotron";
import Row from "react-bootstrap/Row";
import TechExperienceCard from "./TechExperienceCard";

const TechnicalExperience = ({techExperiences}) => {

    return (
        <Jumbotron fluid id="technical-experience" className="bg-light m-0">
            <Container className="">
                <h2 className="display-4 pb-5 text-center">{techExperiences.heading}</h2>
                <Row>
                    {techExperiences.data.length ? techExperiences.data.map(data => {
                        return <TechExperienceCard value={data} />
                    })
                : <span></span>}
                </Row>
            </Container>
        </Jumbotron>
    );
}

export default TechnicalExperience;