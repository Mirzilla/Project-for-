import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import { createMode,  fetchModes} from "../../http/modeApi";
import {observer} from "mobx-react-lite";

const CreateMode = observer(({show, onHide}) => {
    const {mode} = useContext(Context)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    const addInfo = () => {
        setInfo([...info, {title: '', desc: '', number: Date.now()}])
    }
    const removeInfo = (number) => {
        setInfo(info.filter(i => i.number !== number))
    }
    const changeInfo = (key, value, number) => {
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }

    const selectFile = e => {
        setFile(e.target.files[0])
    }

    const addMode = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file)
        formData.append('info', JSON.stringify(info))
        createMode(formData).then(data => onHide())
    }

    return (
        <Modal
            show={show}
            onHide={onHide}
            size ="lg"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавити режим
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Уведіть назву режима"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
                    />
                    <hr/>
                    <Button
                        variant={"outline-dark"}
                        onClick={addInfo}
                    >
                        Добавити новий опис
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    value={i.title}
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Уведіть опис"
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.desc}
                                    onChange={(e) => changeInfo('desc', e.target.value, i.number)}
                                    placeholder="Уведіть опис"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)}
                                    variant={"outline-danger"}
                                >
                                    Видалити
                                </Button>
                            </Col>
                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addMode}>Добавити</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateMode;
