import React, {useState} from 'react';
import Modal from "react-bootstrap/Modal";
import {Button, Form} from "react-bootstrap";
import {createRarity, createType} from "../../http/heroAPI";

const CreateRarity = ({show, onHide}) => {
    const [value, setValue] = useState('')

    const addRarity = () => {
        createRarity({name: value}).then(data => {
            setValue('')
            onHide()
        })
    }
    return (
        <Modal
            show={show}
            onHide={onHide}
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Добавити рідкість
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control
                        value={value}
                        onChange={e => setValue(e.target.value)}
                        placeholder={"Уведіть назву рідкісті"}
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Закрити</Button>
                <Button variant="outline-success" onClick={addRarity}>Добавити</Button>
            </Modal.Footer>
        </Modal>
    );
};

export default CreateRarity;
