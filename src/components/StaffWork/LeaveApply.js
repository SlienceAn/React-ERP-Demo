import React, { Component, Fragment } from 'react';
import { PublicNav } from '../Layout';
import { Form } from 'react-bootstrap';
class LeaveApply extends Component {
    render() {
        return (
            <Fragment>
                <PublicNav RouteName="請假申請" />
                <Form></Form>
            </Fragment>
        );
    }
}

export default LeaveApply;
