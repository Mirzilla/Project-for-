import React, {useContext, useEffect} from "react";
import {Col, Container} from "react-bootstrap";
import Row from "react-bootstrap/Row";
import ModeList from "../components/ModeList";
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {fetchModes} from "../http/modeApi";
import Pages from "../components/Pages";

const Mode = observer(() => {
    const {mode} = useContext(Context)

    useEffect(() => {
        fetchModes(null, null, 1, 2).then(data => {
            mode.setModes(data.rows)
            mode.setTotalCount(data.count)
        })
    }, [])

    useEffect(() => {
        fetchModes( mode.page, 2).then(data => {
            mode.setModes(data.rows)
            mode.setTotalCount(data.count)
        })
    }, [mode.page,])
    return (
        <Container>
            <Row className="mt-2">
                <Col md={9}>
                    <ModeList/>
                   <Pages/>
                </Col>
            </Row>
        </Container>
    );
})
export default Mode;