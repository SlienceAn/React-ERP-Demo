import React, { Component, Fragment } from 'react';
import { Row, Col, Form, InputGroup, Button } from 'react-bootstrap';
import styled from 'styled-components';
import logo from '../../Imgs/logo192.png'
class StaffListForm extends Component {
    state = {
        defaultImg: logo
    }
    uploadImg = e => {
        const file = e.target.files.item(0);
        const fr = new FileReader();
        fr.addEventListener('load', this.fileload);
        fr.readAsDataURL(file);
    }
    fileload = e => {
        this.setState({
            defaultImg: e.target.result
        })
    }
    render() {
        return (
            <Fragment>
                <Row>
                    <Col lg={4}>
                        <ImgBox>
                            <img className="img-thumbnail w-100" src={this.state.defaultImg} alt="missing" />
                            <label htmlFor="UploadImg" className="btn btn-secondary w-100">上傳/修改圖片</label>
                            <input onChange={this.uploadImg} style={{ display: 'none' }} id="UploadImg" type="file"></input>
                        </ImgBox>
                    </Col>
                    <Col lg={8}>
                        <Row className="mb-3">
                            <Col lg={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fab fa-centercode mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>員工代碼</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                            <Col lg={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fas fa-user-circle mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>中文姓名</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="far fa-user-circle mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>英文姓名</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                            <Col lg={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fas fa-store-alt mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>部門</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col lg={6}>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fas fa-code-branch mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>部門代碼</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                            <Col lg={6} >
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fa fa-user mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>連絡電話</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fas fa-mail-bulk mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>信箱</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                        </Row>
                        <Row className="mb-3">
                            <Col>
                                <InputGroup>
                                    <InputGroup.Prepend>
                                        <InputGroup.Text id="basic-addon1">
                                            <i className="fas fa-home mr-2"></i>
                                            <div style={{ fontFamily: '微軟正黑體' }}>聯絡地址</div>
                                        </InputGroup.Text>
                                    </InputGroup.Prepend>
                                    <Form.Control></Form.Control>
                                </InputGroup>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <div className="d-flex flex-row-reverse">
                    <Button className="ml-2" style={{ fontFamily: '微軟正黑體' }} variant="primary">修改</Button>
                    <Button style={{ fontFamily: '微軟正黑體' }} variant="danger">確認</Button>
                </div>
            </Fragment>
        );
    }
}

const ImgBox = styled.div({
    width: '100%',
})

export default StaffListForm;
