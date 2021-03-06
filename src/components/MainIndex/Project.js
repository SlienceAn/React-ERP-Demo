import React, { Fragment } from 'react';
import { Card, ProgressBar, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import styled from 'styled-components';
const typeCheck = (types) => {
    switch (types) {
        case 'web':
            return "fab fa-html5"
            break;
        case 'system':
            return "fab fa-windows"
            break;
        case 'app':
            return "fab fa-app-store"
            break;
    }
}
const progressColor = (pg) => {
    if (pg < 30) {
        return "danger";
    } else if (pg < 75) {
        return "warning";
    } else if (pg > 76) {
        return "success";
    }
}
const Project = (props) => {
    return (
        <Fragment>
            <Card>
                <Card.Header className="d-flex">
                    <div>執行專案進度</div>
                </Card.Header>
                <Card.Body className="p-0">
                    {Object.keys(props).map(el =>
                        <ListGroup key={props[el].name}>
                            <ListGroup.Item>
                                <div className="d-flex align-items-center p-2">
                                    <i style={{ fontSize: '1.5rem' }} className={typeCheck(props[el].type) + " mr-2"}></i>
                                    <div>{props[el].name}</div>
                                    <Link to={`/ProjectControl/${props[el].name}`} className="ml-auto">
                                        <Button  style={{ fontSize: '.75rem' }}>專案詳細
                                    </Button>
                                    </Link>
                                </div>
                                <div className="d-flex">
                                    <div style={{ width: '90%' }}>
                                        <ProgressBar className="border" variant={progressColor(props[el].loading)} animated now={props[el].loading} label={`${props[el].loading}%`} />
                                    </div>
                                    <div className="d-flex justify-content-center align-items-center" style={{ width: '10%' }}>
                                        {props[el].loading + "%"}
                                    </div>
                                </div>
                            </ListGroup.Item>
                        </ListGroup>)}
                </Card.Body>
            </Card>
        </Fragment>
    );
};
Project.propTypes = {

};
const ProjectColor = styled.div({
    width: '80%',
    height: '20px',
    background: ' linear-gradient(90deg,rgba(85, 160, 90, 1)15%,rgba(85,160,90,1)50%, rgba(235, 220, 70, 0.8)70%)'
})
export default Project;
