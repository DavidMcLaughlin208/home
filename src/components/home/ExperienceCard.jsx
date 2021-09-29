import React from 'react';

import { 
    Col,
    Card
 } from "react-bootstrap";
const ExperienceCard = ({data}) => {
    return ( 
        <Col lg="4">
            <div className="pb-5 text-center">
                <img width="10%" className=" bg-white mb-3" src={data.companylogo} alt=""/>
                <p className="lead">
                    {data.role}
                    <br/>
                    {data.date}
                    <br />
                    {data.time}
                </p>
                
            </div>
        </Col>
     );
}
 
export default ExperienceCard;