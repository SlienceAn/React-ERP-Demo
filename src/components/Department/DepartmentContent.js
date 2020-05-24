import React, { Component, Fragment } from 'react';
import { Button, Row, Card, ListGroup, Nav } from 'react-bootstrap';
import styled from 'styled-components';

class DepartmentContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true,
            leaderList: props.leader,
            leaderChecked: [],
            memberList: props.member,
            memberChecked: []
        }
    }
    changeCheck = e => {
        const { checked, value, name } = e.target;
        let { leaderChecked, memberChecked } = this.state;
        switch (name) {
            case 'leader':
                if (checked && leaderChecked.indexOf(value) === -1) {
                    leaderChecked = [...leaderChecked, value];
                } else {
                    leaderChecked = leaderChecked.filter(el => el !== value)
                }
                this.setState({
                    leaderChecked,
                })
                break;
            case 'member':
                if (checked && memberChecked.indexOf(value) === -1) {
                    memberChecked = [...memberChecked, value];
                } else {
                    memberChecked = memberChecked.filter(el => el !== value)
                }
                this.setState({
                    memberChecked,
                })
                break;
        }

    }
    switchPosition = e => {
        let { memberChecked, leaderChecked, leaderList, memberList } = this.state;
        switch (e.target.id) {
            case 'promotion':
                this.setState({
                    leaderList: [...leaderList, ...memberChecked],
                    memberList: memberList.filter(value => !memberChecked.includes(value)),
                    memberChecked: []
                })
                break;
            case 'demote':
                this.setState({
                    memberList: [...memberList, ...leaderChecked],
                    leaderList: leaderList.filter(value => !leaderChecked.includes(value)),
                    leaderChecked: []
                })
                break;
        }

    }
    render() {
        const { name, departments } = this.props
        const { open, leaderList, memberList, leaderChecked, memberChecked } = this.state
        return (
            <Fragment>
                <ContentBox>
                    <Card className="h-100">
                        <Card.Header>{name}</Card.Header>
                        <Card.Body>
                            <fieldset style={{border:'1px solid',padding:'.5rem'} }>
                                <legend className="w-auto">主管/組長</legend>
                                <ListGroup>
                                    {leaderList.map(leader => 
                                    <ListGroup.Item className="d-flex align-items-center justify-content-between" style={{border:'0px'}}>
                                        <input id={leader} type="checkbox" style={{ zoom: '2' }} value={leader} onChange={this.changeCheck} checked={leaderChecked.indexOf(leader) !== -1} name="leader" />
                                        <label style={{ width: '85%', fontSize: '1.5rem' }} className="m-0" htmlFor={leader}>{leader}</label>
                                    </ListGroup.Item>)}
                                </ListGroup>
                            </fieldset>
                            <div className="d-flex justify-content-around mt-2 mb-2">
                                <i style={{ fontSize: '2.5rem' }} id="promotion" className="fas fa-angle-double-up" onClick={this.switchPosition}></i>
                                <i style={{ fontSize: '2.5rem' }} id="demote" className="fas fa-angle-double-down" onClick={this.switchPosition}></i>
                            </div>
                            <fieldset  style={{border:'1px solid',padding:'.5rem'} }>
                                <legend  className="w-auto">組員/助理</legend>
                                <ListGroup>
                                    {memberList.map(member => 
                                    <ListGroup.Item className="d-flex align-items-center justify-content-between" style={{border:'0px'}}>
                                        <input id={member} type="checkbox" style={{ zoom: '2' }} value={member} onChange={this.changeCheck} checked={memberChecked.indexOf(member) !== -1} name="member" />
                                        <label style={{ width: '85%', fontSize: '1.5rem' }} className="m-0" htmlFor={member}>{member}</label>
                                    </ListGroup.Item>)}
                                </ListGroup>
                            </fieldset>

                        </Card.Body>
                        <Card.Footer className="d-flex justify-content-between">
                            <div>經理 : {leaderList.length}位 </div>
                            <div>組員 : {memberList.length}位</div>
                        </Card.Footer>
                    </Card>
                </ContentBox>
            </Fragment>
        )
    }
}
const ContentBox = styled.div({
    width: '19%',

})

export default DepartmentContent;
