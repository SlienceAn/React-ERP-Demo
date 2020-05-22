import React, { Component } from 'react';
import { PublicNav } from '../Layout';
import PublicTable from '../Public/PublicTable';
import PublicNotice from '../Public/PublicNotice';
import { WorksNotice, WorksRoute } from '../../static/PageData'
import { StaffWorkRes } from '../../static/TestDataFake'
import withOpen from '../../HOC/withOpen';
import StaffWorkForm from './StaffWorkForm'
const WithOpenPublicNotice = withOpen(PublicNotice)
const WithOpenPublicTable = withOpen(PublicTable)
class StaffWork extends Component {
    state = {
        NoticeContent: WorksNotice,
        StaffRes: StaffWorkRes,
        DriverDetail: ''
    }
    getDetail = e => {
        this.setState({ DriverDetail: e })
    }
    render() {
        return (
            <div>
                <PublicNav {...WorksRoute} />
                <div style={{ width: '98%', margin: '0 auto' }}>
                    <WithOpenPublicNotice data={this.state.NoticeContent} getDetail={this.getDetail}>
                        <StaffWorkForm />
                    </WithOpenPublicNotice>
                    <WithOpenPublicTable {...this.state}>
                        <StaffWorkForm />
                    </WithOpenPublicTable>
                </div>
            </div>
        );
    }
}

export default StaffWork;
