import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Col, Button, Row } from 'react-bootstrap';
const icons = ["far fa-file-pdf", "far fa-file-word", "far fa-file-excel", "far fa-file-powerpoint", "fas fa-file", "fas fa-copy"];
const colors = ["bg-primary", "bg-success", "bg-danger", "bg-secondary", "bg-info", "bg-warning"]
const fileType = (fileType) => {
    switch (fileType) {
        case 'pdf':
            return "far fa-file-pdf"
            break;
        case 'word':
            return "far fa-file-word"
            break;
        case 'excel':
            return "far fa-file-excel"
            break;
        case 'ppt':
            return "far fa-file-powerpoint"
            break;
    }
}
const FilesGroup = (props) => {
    return (
        <Fragment>
            <Row style={{ margin: '0px' }}>
                {props.total.map((el, idx) => <Col lg={4} key={el.id} className="p-0">
                    <Card className="mr-2 mb-2">
                        <Card.Body className="d-flex p-0">
                            <div className={colors[idx] + " p-3"}>
                                <i className={icons[idx]} style={{ fontSize: '3rem', color: '#fff' }}></i>
                            </div>
                            <div className="w-100 d-flex flex-column justify-content-center align-items-center">
                                <div>{el.text}</div>
                                <div className="d-flex align-items-end">
                                    <div style={{ fontSize: '25px' }}>{el.total}</div>
                                    <span>/件</span>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>)}
            </Row>
            <Card>
                <Card.Header className="d-flex justify-content-between">
                    <div>文件</div>
                    <select>
                        {props.total.map(filename => <option key={filename.id}>
                            {filename.id}
                        </option>)}
                    </select>
                </Card.Header>
                <Card.Body className="p-0">
                    <ul className="p-0">
                        {props.files.map(el =>
                            <li key={el.name} className="d-flex justify-content-between align-items-center p-2 border-bottom">
                                <div className="d-flex align-items-center">
                                    <i className={fileType(el.type)} style={{ fontSize: '1.5rem' }}></i>
                                    <a href="#" className="ml-3">{el.name}</a>
                                </div>
                                <Button>
                                    <i className="fas fa-download"></i>
                                </Button>
                            </li>)}
                    </ul>
                </Card.Body>
            </Card>
        </Fragment>
    );
};

FilesGroup.propTypes = {

};


export default FilesGroup;
