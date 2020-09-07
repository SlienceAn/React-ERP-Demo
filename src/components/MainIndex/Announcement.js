import React, { Fragment, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Card, ListGroup } from 'react-bootstrap';
const Announcement = (props) => {
    useEffect(() => {
    }, [props]);
    return (
        <Fragment>
            <Card className="mb-3">
                <Card.Header>行事曆事件總覽</Card.Header>
                <Card.Body>
                    <ListGroup className="p-0">
                        {Object.values(props).length === 0 && <ListGroup.Item  className="d-flex justify-content-between">
                            <div>
                                <i className="fas fa-volume-up"></i>
                            </div>
                            <div>無活動</div>
                            <div className="text-primary"></div>
                        </ListGroup.Item>
                        }
                        {Object.values(props).map(el =>
                            <ListGroup.Item key={el} className="d-flex justify-content-between">
                                <div>
                                    <i className="fas fa-volume-up"></i>
                                </div>
                                <div>{el.length < 20 ? el : el.substring(0, 20) + "..."}</div>
                                <div className="text-primary"></div>
                            </ListGroup.Item>)}
                    </ListGroup>
                </Card.Body>
            </Card>
        </Fragment>
    );
};
Announcement.defaultProps = {

};

export default Announcement;
