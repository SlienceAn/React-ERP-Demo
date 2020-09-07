import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Card, Row, Col, FormControl } from 'react-bootstrap';
import imglogo from '../../Imgs/user-logo.png'
import styled from 'styled-components';
import DataModal from './DataModal';
class PublicNotice extends Component {
    getSelectText = e => {
        this.props.getDetail(e.target.value)
    }
    render() {
        const { open, handleOpen, data, total } = this.props
        return (
            <Fragment>
                <Row style={{ margin: '75px 0px 10px 0px', fontFamily: '微軟正黑體' }}>
                    <Col className="p-0" lg={2}>
                        <Card className="h-100">
                            <Card.Body className="p-0 d-flex align-items-center">
                                <div className="text-center">
                                    <img src={imglogo} style={{width:'100%'}}/>
                                    <OwnBtn className="btn btn-secondary" onClick={handleOpen} >個人資訊</OwnBtn>
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="pr-0" lg={10}>
                        <Card style={{ height: '100%' }}>
                            <Card.Body className="d-flex p-0 align-items-center">
                                {Object.keys(data).map((el, idx) => {
                                    return (
                                        <Col key={data[el].id}>
                                            <Card>
                                                <Card.Header>{data[el].icontext}</Card.Header>
                                                <Card.Body className="d-flex justify-content-between align-items-center">
                                                    <i className={data[el].icon} style={{ fontSize: '2rem' }}></i>
                                                    <div className="d-flex align-items-baseline">
                                                        <div style={{ fontSize: '2rem' }}>{total[idx]}</div>
                                                        <div>/人</div>
                                                    </div>
                                                </Card.Body>
                                                <Card.Footer className="d-flex p-1">
                                                    <FormControl as="select" onChange={this.getSelectText}>
                                                        <option>下拉查看詳細內容</option>
                                                        <option value="網頁開發部">網頁開發部</option>
                                                        <option value="行動應用部">行動應用部</option>
                                                    </FormControl>
                                                </Card.Footer>
                                            </Card>
                                        </Col>
                                    )
                                })}
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
                {open && <DataModal handleOpen={handleOpen}>
                    {this.props.children}
                </DataModal>}
            </Fragment>
        );
    }
}
PublicNotice.propTypes = {
    props: PropTypes.string
};
const OwnBtn = styled.button({
    position: 'absolute',
    right: '0',
    bottom: '0'
})

const ModalPos = styled.div({
    position: 'absolute',
    top: 0,
    left: 0
})
export default PublicNotice;