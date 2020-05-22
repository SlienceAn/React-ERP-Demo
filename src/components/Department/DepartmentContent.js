import React, { Component, Fragment } from 'react';
import { Button, Row } from 'react-bootstrap';
import styled from 'styled-components';

class DepartmentContent extends Component {
    state = {
        open: true
    }
    toggle = () => {
        this.setState({
            open: !this.state.open
        })
    }
    componentDidMount() {
        console.log(this.props);
        console.log(Object.keys(this.props.departments).map(el => this.props.departments[el].group));
    }
    render() {
        const { name, departments } = this.props
        const { open } = this.state
        if (departments) {
            return (
                <Fragment>
                    <div onClick={this.toggle}>{name}</div>
                    <Row>
                        <ContentBox></ContentBox>
                    </Row>
                </Fragment>
            )
        }
        return <li>{name}</li>
    }
}

const ContentBox = styled.div({
    width: '20%'
})

export default DepartmentContent;
