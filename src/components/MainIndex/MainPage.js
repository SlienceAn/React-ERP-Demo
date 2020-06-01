import React, { Component, Fragment } from 'react';
import { Col, Row } from 'react-bootstrap';
import { PublicNav } from '../Layout';
import { MainPageRoute, FilesExample, AnnouncementData, ProjectList } from '../../static/PageData'
import { YearCalendar } from '../../static/TestDataFake';
import FullCalendar from './FullCalendar';
import FilesGroup from './FilesGroup';
import Project from './Project';
class MainPage extends Component {
    render() {
        return (
            <Fragment>
                <PublicNav {...MainPageRoute} />
                <Row style={{ margin: '75px 0px 0px 0px' }}>
                    <Col lg={6} md={12} className="h-100">
                        <Project {...ProjectList} />
                    </Col>
                    <Col lg={6} md={12} className="h-100">
                        <FilesGroup {...FilesExample} />
                    </Col>
                </Row>
                <Row style={{ margin: '10px 0 20px 0px' }}>
                    <Col lg={12}>
                        <FullCalendar {...YearCalendar} />
                    </Col>
                </Row>
            </Fragment>
        );
    }
}
export default MainPage;