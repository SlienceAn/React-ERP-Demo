import React, { Component } from 'react';
import { PublicNav } from '../Layout';
import { Row, Col, Card, Button } from 'react-bootstrap';
import { InventoryRes } from '../../static/TestDataFake';
import InventoryTable from './InventoryTable';
import { CateChioce } from '../../static/PageData';
import styled from 'styled-components';
class Inventory extends Component {
    state = {
        TableData: InventoryRes,
        Cate: CateChioce
    }
    render() {
        const { TableData, Cate } = this.state;
        return (
            <div style={{ marginTop: '66px', fontFamily: '微軟正黑體' }}>
                <PublicNav RouteName="庫存管理" />
                <CardBox>
                    <Col className="pl-0">
                        <Card className="h-100">
                            <Card.Header>本月進退換貨數量</Card.Header>
                            <Card.Body className="d-flex flex-column justify-content-center" >
                                <Row>
                                    <Col lg={3} className="text-center border-right">
                                        <div className="d-flex  align-items-center justify-content-center">
                                            <i className="fas fa-dolly-flatbed mr-2"></i>
                                            <div style={{ fontSize: '1.5rem' }}>進貨</div>
                                        </div>
                                        <div style={{ fontSize: '3rem', whiteSpace: 'nowrap' }}>
                                            850
                                        </div>
                                    </Col>
                                    <Col lg={3} className="text-center border-right">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <i className="fas fa-cart-arrow-down mr-2"></i>
                                            <div style={{ fontSize: '1.5rem' }}>退貨</div>
                                        </div>
                                        <div style={{ fontSize: '3rem', whiteSpace: 'nowrap' }}>
                                            12
                                        </div>
                                    </Col>
                                    <Col lg={3} className="text-center border-right">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <i className="fas fa-luggage-cart mr-2"></i>
                                            <div style={{ fontSize: '1.5rem' }}>換貨</div>
                                        </div>
                                        <div style={{ fontSize: '3rem', whiteSpace: 'nowrap' }}>
                                            103
                                        </div>
                                    </Col>
                                    <Col lg={3} className="text-center">
                                        <div className="d-flex align-items-center justify-content-center">
                                            <i className="fas fa-dolly-flatbed mr-2"></i>
                                            <div style={{ fontSize: '1.5rem' }}>損壞</div>
                                        </div>
                                        <div style={{ fontSize: '3rem', whiteSpace: 'nowrap' }}>
                                            5
                                        </div>
                                    </Col>

                                </Row>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="pr-0">
                        <Card className="h-100">
                            <Card.Header>庫存種類查詢</Card.Header>
                            <Card.Body className="pl-0 pr-0 pt-0">
                                <Row style={{ margin: '0px' }}>
                                    {Cate.map(el =>
                                        <Col key={el.id} lg={3} className="p-0 text-center mt-3">
                                            <Button variant="secondary" style={{ width: '90%', padding: '.75rem' }} key={el.id}>
                                                <i className={el.icon} style={{ fontSize: '2rem' }}></i>
                                                <div>{el.cate}</div>
                                            </Button>
                                        </Col>
                                    )}</Row>
                            </Card.Body>
                        </Card>
                    </Col>
                </CardBox>
                <TableBox>
                    <InventoryTable {...TableData} />
                </TableBox>
            </div>
        );
    }
}
const TableBox = styled.div({
    width: '98%',
    minHeight: '100px',
    margin: '0 auto 10px auto',
    background: '#fff',
})

const CardBox = styled.div({
    width: '98%',
    margin: '0 auto 10px auto',
    display: 'flex',

})
export default Inventory;
