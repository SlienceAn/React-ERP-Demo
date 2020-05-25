import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Row, Dropdown, Button, Breadcrumb } from 'react-bootstrap';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap';
import Navlogo from '../Imgs/logo192.png';
import { routerMap, routerComponent } from '../static/PageData';
import './Sidebar.css';
import styled from 'styled-components'
import PropTypes from 'prop-types';
import Animate from 'react-smooth';
class Layout extends Component {
    static childContextTypes = {
        isFull: PropTypes.bool
    }
    state = {
        routerMap: routerMap,
        open: false
    }
    getChildContext() {
        return { isFull: this.state.open }
    }
    handleOpen = () => {
        this.setState({
            open: !this.state.open
        })
    }
    render() {
        const { routerMap, open } = this.state;
        return (
            <Router>
                <div>
                    <Navbar bg="dark" className="position-fixed w-100 d-flex justify-content-between" style={{ zIndex: '99' }}>
                        <div className="d-flex">
                            <Button className="mr-2" onClick={this.handleOpen}>
                                <i className={open ? 'fas fa-arrows-alt-h' : 'fas fa-times'}></i>
                            </Button>
                            <Dropdown>
                                <Dropdown.Toggle variant="primary">
                                    <i className="fas fa-cogs"></i>
                                </Dropdown.Toggle>
                                <Dropdown.Menu>
                                    <Dropdown.Item href="#">actions</Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                        <Navbar.Brand href="/" className="d-flex text-white">
                            <img
                                src={Navlogo}
                                width="30"
                                height="30"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                            <div style={{ marginLeft: '.5rem' }}>React-ERP-Demo</div>
                        </Navbar.Brand>
                    </Navbar>
                    <Row style={{ margin: '0' }}>
                        <SidebarLeft style={{ padding: '0', zIndex: '99', marginTop: '56px', width: open ? '0px' : '250px' }} className="sidebar position-fixed ">
                            {!open && <Nav className="nav-box mt-0">
                                <div className="border-bottom d-flex align-items-center text-white" style={{ padding: '.75rem' }}>
                                    <i className="fa fa-user" style={{ fontSize: '2rem', marginRight: '2rem' }}></i>
                                    <div>Hi ! 使用者</div>
                                </div>
                                {routerMap.map(el => <LinkContainer key={el.id} className="nav-item" to={el.href}>
                                    <NavItem className="d-flex justify-content-between">
                                        <div className="d-flex align-items-center">
                                            <i className={el.icon} style={{ marginRight: '1rem' }}></i>
                                            <div>{el.title}</div>
                                        </div>
                                        <i className="fas fa-angle-right"></i>
                                    </NavItem>
                                </LinkContainer>)}
                            </Nav>}
                        </SidebarLeft>
                        <MainContent style={{ padding: '0', background: '#ddd', width: open ? '100%' : 'calc(100% - 250px)', marginLeft: open ? '0px' : '250px' }}>
                            {routerComponent.map(rel => <Route key={rel.rid} path={rel.path} exact={rel.exact} component={rel.component} />)}
                        </MainContent>
                    </Row>
                </div>
            </Router>
        );
    }
}

export const PublicNav = (props, context) => {
    return (
        <Navbar bg="light" className="mb-2 d-flex w-100 position-fixed justify-content-between" style={{ fontFamily: '微軟正黑體', fontWeight: 'bolder', borderBottom: '1px solid rgba(197, 197, 197, 0.486)', zIndex: '99', top: '56px' }}>
            <Animate steps={steps}>
                <Navbar.Brand className="d-flex align-items-center">
                    <i className="fas fa-cog" style={{ marginRight: '.5rem' }}></i>
                    <div>{props.RouteName}</div>
                </Navbar.Brand>
            </Animate>
            <Breadcrumb style={{ marginRight: context.isFull ? '0px' : '250px', transition: '.3s' }}>
                {props.Route && props.Route.map(el =>
                    <Breadcrumb.Item key={el.id} href={el.href}>
                        {el.id}
                    </Breadcrumb.Item>
                )}
            </Breadcrumb>
        </Navbar>
    )
}

PublicNav.contextTypes = {
    isFull: PropTypes.bool.isRequired
}
const steps = [{
    style: {
        opacity: '0',
        transform: 'translate(100px)'
    },
    duration: 100,
},
{
    style: {
        opacity: '1',
        transform: 'translate(0px)'
    },
    duration: 1000
}
];
const SidebarLeft = styled.div({
    transition: '.3s'
})
const MainContent = styled.div({
    transition: '.3s',
    marginTop: '56px'
})

export default Layout;
