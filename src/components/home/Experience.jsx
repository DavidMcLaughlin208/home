import React from 'react';
import ExperienceCard from "./ExperienceCard";
import ProgressBar from "react-bootstrap/ProgressBar";
import {
    Container,
    Row,
    Jumbotron,
    Col
} from "react-bootstrap";

const Experience = ({experiences}) => {
    return (  
        <section className="section">
            <Container>
                <Jumbotron fluid className="bg-white">
                    <h2 className="display-4 mb-5 text-center">
                        {experiences.heading}
                    </h2>
                    <Row>
                        {
                            experiences.data.map(data => {
                                return <ExperienceCard key={data.company} data={data} />
                            })
                        }
                    </Row>
                    <Row>
                        <Col md={12} style={{ width: "95%" }}>
                            <Col className="text-left d-inline-block" md={3}>
                                <p className="lead mb-1 mt-2">June 2017</p>
                            </Col>
                            <Col className="text-center d-inline-block" md={3}>
                                <p className="lead mb-1 mt-2">November 2018</p>
                            </Col>
                            <Col className="text-center d-inline-block" md={3}>
                                <p className="lead mb-1 mt-2">December 2020</p>
                            </Col>
                            <Col className="text-right d-inline-block" md={3}>
                                <p className="lead mb-1 mt-2">April 2021</p>
                            </Col>
                            <ProgressBar
                                className="progress-bar-animation progress-bar-striped"
                                now={100}
                            />
                            <Col className="text-center d-inline-block" md={4}>
                                <p className="font-weight-bold lead mb-1 mt-2">Support Engineer III</p>
                            </Col>
                            <Col className="text-center d-inline-block" md={4}>
                                <p className="font-weight-bold lead mb-1 mt-2">Software Developer I</p>
                            </Col>
                            <Col className="text-center d-inline-block" md={4}>
                                <p className="font-weight-bold lead mb-1 mt-2">Software Developer II</p>
                            </Col>
                        </Col>
                    </Row>
                </Jumbotron>
            </Container>
        </section>
    );
}
 
export default Experience;