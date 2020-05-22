import React, { Component } from 'react';
import { DepartmentData, DepartmentTree } from '../../static/PageData';
import { PublicNav } from '../Layout';
import DepartmentText from './DepartmentText';
import { Row, Col } from 'react-bootstrap';
import withOpen from '../../HOC/withOpen';
import { StaffDepartRes } from '../../static/TestDataFake';
import DepartmentContent from './DepartmentContent';
const WithOpenDepartmentText = withOpen(DepartmentText)
const WithOpenDepartmentContent = withOpen(DepartmentContent)
class DepartmentControl extends Component {
    state = {
        item: DepartmentData,
        StaffRes: StaffDepartRes
    }
    render() {
        const { item } = this.state;
        return (
            <div>
                <PublicNav RouteName="部門管理" />
                <div style={{ width: '98%', margin: '0 auto' }}>
                    <Row style={{ margin: '66px 0px 10px 0px' }}>
                        {Object.keys(item).map(el => {
                            return (
                                <Col key={item[el].id} lg={3} md={6} xs={12} className="pl-0">
                                    <WithOpenDepartmentText header={item[el].header} color={item[el].color} icon={item[el].icon}>
                                        <p>主管 : {item[el].manger}</p>
                                        <p>連絡電話 : {item[el].tel}</p>
                                    </WithOpenDepartmentText>
                                </Col>
                            )
                        })}
                    </Row>
                    <DepartmentContent {...DepartmentTree} />
                </div>
            </div>
        );
    }
}

export default DepartmentControl;

