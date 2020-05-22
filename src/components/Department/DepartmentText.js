import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card } from 'react-bootstrap';
import Animate from 'react-smooth';
import styled from 'styled-components';
class DepartmentText extends Component {
    componentDidMount() {
        this.props.handleOpen();
    }
    render() {
        const { open, handleOpen } = this.props;
        return (
            <Card style={{ border: '0' }}>
                <Card.Header style={{ color: '#fff', fontFamily: '微軟正黑體', borderRadius: '.1rem' }} className={this.props.color} onClick={handleOpen}>
                    <div className="d-flex justify-content-between align-items-baseline">
                        {this.props.header}
                        <i className={this.props.icon}></i>
                    </div>
                </Card.Header>
                {open && <Animate>
                    <Card.Body style={{ color: '#fff', padding: '0' }} className={this.props.color}>
                        <BodyIcon className="fas fa-users" />
                        <div className="p-3" style={{ marginLeft: '4rem' }}>
                            {this.props.children}
                        </div>
                    </Card.Body>
                </Animate>}
            </Card>
        );
    }
}

DepartmentText.propTypes = {
    header: PropTypes.string.isRequired
};

const BodyIcon = styled.i({
    position: 'absolute',
    fontSize: '4.5rem',
    top: '40%',
    left: '-44px',
    opacity: '.75',
    clipPath: 'polygon(100% 0, 50% 1%, 50% 99%, 100% 100%)'
})

export default DepartmentText;