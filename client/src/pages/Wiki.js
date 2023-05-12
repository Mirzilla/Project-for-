import React, {useContext, useEffect} from "react";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import TypeBar from "../components/TypeBar";
import RarityBar from "../components/RarityBar";
import HeroList from "../components/HeroList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchHeroes, fetchRarity, fetchTypes} from "../http/heroAPI";
import Pages from "../components/Pages";

const Wiki = observer(() => {
    const {hero} = useContext(Context)

    useEffect(() => {
        fetchTypes().then(data => hero.setTypes(data))
        fetchRarity().then(data => hero.setRarities(data))
        fetchHeroes(null, null, 1, 2).then(data => {
            hero.setHeroes(data.rows)
            hero.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchHeroes(hero.selectedType.id, hero.selectedRarity.id, hero.page, 2).then(data => {
            hero.setHeroes(data.rows)
            hero.setTotalCount(data.count)
        })
    }, [hero.page, hero.selectedType, hero.selectedRarity,])
    return (
        <Container>
            <Row className="mt-2">
                <Col md={3}>
                    <TypeBar/>
                </Col>
                <Col md={9}>
                    <RarityBar/>
                    <HeroList/>
                    <Pages/>
                </Col>
            </Row>
        </Container>
    );
})
export default Wiki;