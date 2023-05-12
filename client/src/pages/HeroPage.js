import React, {useContext, useEffect, useState} from 'react';
import {Container, Col, Image, Row} from "react-bootstrap";
import bigStar from '../assets/bigStar.png'
import {useParams} from "react-router-dom";
import {fetchOneHero} from "../http/heroAPI";

const HeroPage = () => {
    const [hero, setHero] = useState({info: []})
    const {id} = useParams()
    useEffect(() => {
        fetchOneHero(id).then(data => setHero(data))
    }, [])
    return (
        <Container className={"mt-3"}>
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + hero.img}/>
                </Col>
                <Col md={4} >
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{hero.name}</h2>
                    </Row>
                    <div
                        className={"d-flex align-items-center justify-content-center "}
                        style={{background: `url(${bigStar}) no-repeat center center`, width:240, height:240, backgroundSize: 'cover', fontSize:64 }}

                    >
                        {hero.rating}
                    </div>
                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Опис</h1>
                {hero.info.map((info, index) =>
                    <Row key={info.id} style={{background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10}}>
                        {info.title}: {info.desc}
                    </Row>
                )}
            </Row>
            
        </Container>
    );
};

export default HeroPage;