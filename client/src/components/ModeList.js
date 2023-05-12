import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import {Row} from "react-bootstrap";
import ModeItem from "./ModeItem";

const ModeList = observer(() => {
    const {mode} = useContext(Context)
    console.log(mode)

    return (
        <Row className="d-flex">
            {mode.modes.map(mode =>
                <ModeItem key={mode.id} mode={mode}/>
            )}
        </Row>
    );
});

export default ModeList;
