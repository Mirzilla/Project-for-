import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {HERO_ROUTE} from "../utils/consts";

const HeroItem = ({hero}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-4 d-flex" onClick={() => history.push(HERO_ROUTE + '/' + hero.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + hero.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Персонажі</div>
                    <div className="d-flex align-items-center">
                        <div>{hero.rating}</div>
                        {/*//<Image width={18} height={18} src={star}/>//*/}
                    </div>
                </div>
                <div>{hero.name}</div>
            </Card>
        </Col>
    );
};

export default HeroItem;
