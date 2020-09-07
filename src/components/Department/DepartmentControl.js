import React, { Component } from 'react';
import { DepartmentData } from '../../static/PageData';
import { PublicNav } from '../Layout';
import DepartmentText from './DepartmentText';
import { Row, Col } from 'react-bootstrap';
import withOpen from '../../HOC/withOpen';
import { StaffDepartRes, PartyTree } from '../../static/TestDataFake';
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
                                <Col style={{ width: '19%' }} key={item[el].id} className="pl-0">
                                    <WithOpenDepartmentText header={item[el].header} color={item[el].color} icon={item[el].icon}>
                                        <p>主管 : {item[el].manger}</p>
                                        <p>連絡電話 : {item[el].tel}</p>
                                    </WithOpenDepartmentText>
                                </Col>
                            )
                        })}
                    </Row>
                    <div className="pt-2 pb-2 mb-3 mt-3 d-flex align-items-center" style={{borderBottom:'1px solid #AAA'}}>
                        <i className="fas fa-tags mr-2" style={{fontSize:'1.5rem'}}></i>
                        <div style={{fontSize:'1.5rem'}}>部門組織職位編排</div>
                    </div>
                    <Row className="m-0 justify-content-between">
                        {PartyTree.map(el => <DepartmentContent {...el} />)}
                    </Row>
                </div>
            </div>
        );
    }
}

export default DepartmentControl;

