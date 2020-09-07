import React, { Component } from 'react';
import PublicTable from '../Public/PublicTable';
import styled from 'styled-components';
import { ListNotice, ListRoute } from '../../static/PageData';
import { PublicNav } from '../Layout'
import PublicNotice from '../Public/PublicNotice';
import { StaffListRes ,StatusListAll} from '../../static/TestDataFake';
import withOpen from '../../HOC/withOpen';
import StaffListForm from './StaffListForm'
const WithOpenPublicNotice = withOpen(PublicNotice);
const WithOpenPublicTable = withOpen(PublicTable);
class StaffList extends Component {
    state = {
        NoticeContent: ListNotice,
        StaffRes: StaffListRes,
        DriverDetail: ''
    }
    componentDidMount() {
     
    }
    getDetail = (e) => {
        this.setState({ DriverDetail: e })
    }
    render() {
        return (
            <div>
                <PublicNav {...ListRoute} />
                <ContentBox>
                    <WithOpenPublicNotice data={this.state.NoticeContent} getDetail={this.getDetail} total={StatusListAll}>
                        <StaffListForm />
                    </WithOpenPublicNotice>
                    <WithOpenPublicTable {...this.state}>
                        <StaffListForm />
                    </WithOpenPublicTable>
                </ContentBox>
            </div>
        );
    }
}

const ContentBox = styled.div({
    width: '98%',
    margin: '0 auto'
})
export default StaffList;
