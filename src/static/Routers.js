import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import StaffList from '../components/StaffList/StaffList';
import DepartmentControl from '../components/Department/DepartmentControl';
import StaffWork from '../components/StaffWork/StaffWork';
import Inventory from '../components/Inventory/Inventory';
import ProjectManger from '../components/ProjectManger/ProjectManger';
import LeaveApply from '../components/StaffWork/LeaveApply';
import StatusApply from '../components/StaffWork/StatusApply';
import Money from '../components/StaffWork/Money';
import MainPage from '../components/MainIndex/MainPage';
const Routers = () => {
    return (
        <Fragment>
            <Route exact path="/" component={MainPage}></Route>
            <Route exact path="/StaffList" component={StaffList}></Route>
            <Route exact path="/DepartmentControl" component={DepartmentControl}></Route>
            <Route exact path="/StaffWork" component={StaffWork}></Route>
            <Route exact path="/Inventory" component={Inventory}></Route>
            <Route exact path="/LeaveApply" component={LeaveApply}></Route>
            <Route exact path="/StatusApply" component={StatusApply}></Route>
            <Route exact path="/Money" component={Money}></Route>
            <Route exact path="/ProjectManger" component={ProjectManger}></Route>
        </Fragment>
    );
};

export default Routers;