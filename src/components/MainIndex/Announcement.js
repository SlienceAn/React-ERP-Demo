import React, { Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const openDatail = () => {

}

const Announcement = (props) => {
    return (
        <Fragment>
            <Card className="mb-3">
                <Card.Header>公告</Card.Header>
                <Card.Body>
                    <ListGroup>
                        {Object.keys(props).map(el =>
                            <ListGroup.Item key={props[el].content} className="d-flex justify-content-between">
                                <div>
                                    <i className="fas fa-volume-up"></i>
                                </div>
                                <div>{props[el].date}</div>
                                <div>{props[el].content.substring(0, 20) + "..."}</div>
                                <div className="text-primary" onClick={openDatail}>閱讀更多</div>
                            </ListGroup.Item>)}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Fragment>
    );
};
Announcement.propTypes = {

};


export default Announcement;
