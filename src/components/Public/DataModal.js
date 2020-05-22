import React, { Fragment } from 'react';
import { Modal } from 'react-bootstrap';
const DataModal = (props) => {
    return (
        <Fragment>
            <Modal size="lg" show={true} onHide={props.handleOpen}>
                <Modal.Header closeButton>
                    <Modal.Title style={{ fontFamily: '微軟正黑體' }}>個人資訊區</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.children}
                </Modal.Body>
            </Modal>
        </Fragment>
    )

}

export default DataModal;
