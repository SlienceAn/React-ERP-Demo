import React, { Fragment,useState,useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
const Announcement = (props) => {
    return (
        <Fragment>
            <Card className="mb-3">
                <Card.Header>行事曆事件總覽</Card.Header>
                <Card.Body>
                    <ListGroup className="p-0">
                        {Object.keys(props).map(el =>
                            <ListGroup.Item key={props[el].content} className="d-flex justify-content-between">
                                <div>
                                    <i className="fas fa-volume-up"></i>
                                </div>
                                <div>{props[el].date}</div>
                                <div className="text-primary">閱讀更多</div>
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
