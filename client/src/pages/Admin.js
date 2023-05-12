import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import CreateRarity from "../components/modals/CreateRarity";
import CreateHero from "../components/modals/CreateHero";
import CreateType from "../components/modals/CreateType";
import CreateMode from "../components/modals/CreateMode";

const Admin = () => {
    const [rarityVisible, setRarityVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [heroVisible, setHeroVisible] = useState(false)
    const [modeVisible, setModeVisible] = useState(false)
    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setTypeVisible(true)}
            >
                Добавити тип
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setRarityVisible(true)}
            >
                Добавити рідкість
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setHeroVisible(true)}
            >
                Добавити героя
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 p-2"
                onClick={() => setModeVisible(true)}
            >
                Добавити режим
            </Button>
            <CreateRarity show={rarityVisible} onHide={() => setRarityVisible(false)}/>
            <CreateHero show={heroVisible} onHide={() => setHeroVisible(false)}/>
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)}/>
            <CreateMode show={modeVisible} onHide={() => setModeVisible(false)}/>
        </Container>
    );
};

export default Admin;