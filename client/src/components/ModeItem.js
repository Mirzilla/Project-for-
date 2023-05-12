import React from 'react';
import {Card, Col} from "react-bootstrap";
import Image from "react-bootstrap/Image";
import {useHistory} from "react-router-dom"
import {MODE_ROUTE} from "../utils/consts";

const ModeItem = ({mode}) => {
    const history = useHistory()
    return (
        <Col md={3} className="mt-4 d-flex" onClick={() => history.push(MODE_ROUTE + '/' + mode.id)}>
            <Card style={{width: 150, cursor: 'pointer'}} border={"light"}>
                <Image width={150} height={150} src={process.env.REACT_APP_API_URL + mode.img}/>
                <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
                    <div>Режими</div>
                    <div className="d-flex align-items-center">
                    </div>
                </div>
                <div>{mode.name}</div>
            </Card>
        </Col>
    );
};

export default ModeItem;
