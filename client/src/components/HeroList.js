import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import HeroItem from "./HeroItem";

const HeroList = observer(() => {
    const {hero} = useContext(Context)

    return (
        <Row className="d-flex">
            {hero.heroes.map(hero =>
                <HeroItem key={hero.id} hero={hero}/>
            )}
        </Row>
    );
});

export default HeroList;
