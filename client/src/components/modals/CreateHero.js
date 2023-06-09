import React, {useContext, useEffect, useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Dropdown, Form, Row, Col} from "react-bootstrap";
import {Context} from "../../index";
import { createHero,  fetchRarity, fetchTypes} from "../../http/heroAPI";
import {observer} from "mobx-react-lite";

const CreateHero = observer(({show, onHide}) => {
    const {hero} = useContext(Context)
    const [name, setName] = useState('')
    const [file, setFile] = useState(null)
    const [info, setInfo] = useState([])

    useEffect(() => {
        fetchTypes().then(data => hero.setTypes(data))
        fetchRarity().then(data => hero.setRarities(data))
    }, [])

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

    const addHero = () => {
        const formData = new FormData()
        formData.append('name', name)
        formData.append('img', file)
        formData.append('rarityId', hero.selectedRarity.id)
        formData.append('typeId', hero.selectedType.id)
        formData.append('info', JSON.stringify(info))
        createHero(formData).then(data => onHide())
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
                    Добавити героя
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{hero.selectedType.name || "Виберіть тип"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {hero.types.map(type =>
                                <Dropdown.Item
                                    onClick={() => hero.setSelectedType(type)}
                                    key={type.id}
                                >
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-2 mb-2">
                        <Dropdown.Toggle>{hero.selectedRarity.name || "Виберіть рідкість"}</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {hero.rarities.map(rarity =>
                                <Dropdown.Item
                                    onClick={() => hero.setSelectedRarity(rarity)}
                                    key={rarity.id}
                                >
                                    {rarity.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)}
                        className="mt-3"
                        placeholder="Уведіть назву героя"
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
                <Button variant="outline-success" onClick={addHero}>Добавити</Button>
            </Modal.Footer>
        </Modal>
    );
});

export default CreateHero;
