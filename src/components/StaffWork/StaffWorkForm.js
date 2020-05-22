import React, { Component, Fragment } from 'react';
import { Form, InputGroup, Col, Row, Table, Button } from 'react-bootstrap';
import { WorksFakeDays } from '../../static/PageData';
class StaffWorkForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ItemCate: WorksFakeDays,
            hasDay: [],
            edit: false,
        }
    }
    isEdit = () => {
        this.setState({
            edit: !this.state.edit
        })
    }
    componentDidMount() {
        this.setState({
            hasDay: this.state.ItemCate.filter(val => val.value !== 0)
        })
    }
    render() {
        const { ItemCate, hasDay, edit } = this.state
        return (
            <Fragment>
                <h5 className="mb-3" style={{ fontFamily: '微軟正黑體' }}>王大槌</h5>
                <Row>
                    {ItemCate.map(el =>
                        <Col className="mb-3" key={el.id} lg={3}>
                            <InputGroup>
                                <InputGroup.Prepend>
                                    <InputGroup.Text>
                                        <i className={el.icon} />
                                        <div style={{ fontFamily: '微軟正黑體' }}>{el.text}</div>
                                    </InputGroup.Text>
                                    <Form.Control type="text" defaultValue={el.value + " / 天"} readOnly={edit} />
                                </InputGroup.Prepend>
                            </InputGroup>
                        </Col>
                    )}
                </Row>
                <Table striped bordered style={{ fontFamily: '微軟正黑體' }}>
                    <thead>
                        <tr>
                            <th>假別</th>
                            <th>日期</th>
                            <th>事由</th>
                        </tr>
                    </thead>
                    <tbody>
                        {hasDay.map(el => <tr key={el.id}>
                            <td>{el.text}</td>
                            <td>{el.date + ","}</td>
                            <td>{el.reason}</td>
                        </tr>)}
                    </tbody>
                </Table>
                <div className="d-flex justify-content-end" style={{ fontFamily: '微軟正黑體' }}>
                    <Button variant={edit ? "danger" : "primary"} onClick={this.isEdit}>{edit ? '修改' : '確認'}{}</Button>
                </div>
            </Fragment >
        );
    }
}
export default StaffWorkForm;
