import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Card, Row} from "react-bootstrap";

const RarityBar = observer(() => {
    const {hero} = useContext(Context)

    return (
            <Row className="d-flex">
                {hero.rarities.map(rarity =>
                    <Card
                        style={{cursor:'pointer'}}
                        key={rarity.id}
                        className="p-3"
                        onClick={() => hero.setSelectedRarity(rarity)}
                        border={rarity.id === hero.selectedRarity.id ? 'danger' : 'light'}
                    >
                        {rarity.name}
                </Card>
                )}
            </Row>
    );
});

export default RarityBar;
