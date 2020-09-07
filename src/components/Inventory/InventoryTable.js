import React, { Component, Fragment } from 'react';
import { Table, InputGroup, Col, Button, FormControl, FormCheck, Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import style from '../../scroll.module.css';
class InventoryTable extends Component {
    state = {
        pages: [],
        dataTree: '',
        startActive: 1,
        countPage: ''
    }
    componentDidMount() {
        let pagebtn = [];
        let startTree = Object.keys(this.props).slice(0, 10)
        let pageTotal = Math.ceil(Object.keys(this.props).length / 10);
        for (let i = 0; i < pageTotal; i++) {
            pagebtn.push(i + 1)
        }
        this.setState({
            dataTree: startTree,
            pages: pagebtn,
            countPage: pageTotal
        })
    }
    changePage = (e) => {
        let startPage = e.target.text;
        let filtereKeys = Object.keys(this.props).slice(0 + 10 * (startPage - 1), 10 + 10 * (startPage - 1));
        let newTree = {};
        filtereKeys.map(key => newTree[key] = this.state.dataTree[key])
        this.setState({
            dataTree: newTree,
            startActive: e.target.text
        })
    }
    searchColumn = (e) => {

    }

    render() {
        const { dataTree, pages, startActive, countPage } = this.state;
        return (
            <Fragment>
                <div className="d-flex p-2">
                    <Col lg={2} md={12} className="p-0 mr-2">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <i className="fa fa-search"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Col lg={2} md={12} className="p-0 mr-2">
                        <InputGroup>
                            <InputGroup.Prepend>
                                <InputGroup.Text id="basic-addon1">
                                    <i className="fas fa-clock"></i>
                                </InputGroup.Text>
                            </InputGroup.Prepend>
                            <FormControl
                                placeholder="Username"
                                aria-label="Username"
                                aria-describedby="basic-addon1"
                            />
                        </InputGroup>
                    </Col>
                    <Button variant="primary" className="mr-2 d-flex align-items-center">
                        <i className="fas fa-exchange-alt mr-2"></i>
                        <div>分類</div>
                    </Button>
                    <Button variant="primary" className="mr-2 d-flex align-items-center">
                        <i className="fas fa-download mr-2"></i>
                        <div>下載</div>
                    </Button>
                    <div className="ml-auto p-2 bd-highlight">
                        目前在第 {startActive} 頁,共 {countPage} 頁
                    </div>
                </div>
                <Content className={style.overTable}>
                    <Table striped bordered hover >
                        <thead>
                            <tr>
                                <th>#</th>
                                <th style={{ whiteSpace: 'nowrap' }}>刪除</th>
                                <th>功能</th>
                                {Object.keys(this.props[0]).map(el => <th key={el}>{el}</th>)}
                            </tr>
                        </thead>
                        <tbody>
                            {Object.keys(dataTree).map((con, idx) => <tr key={idx}>
                                <td>{idx + 1}</td>
                                <td className="text-center">
                                    <input style={{ zoom: '2' }} type="checkbox"></input>
                                </td>
                                <td className="d-flex">
                                    <Button className="mr-2" variant="outline-primary">
                                        <i className="fas fa-pencil-alt"></i>
                                    </Button>
                                    <Button className="mr-2" variant="outline-success">
                                        <i className="fas fa-eye"></i>
                                    </Button>
                                </td>
                                {Object.values(this.props[con]).map(val => <td key={val}>{val}</td>)}
                            </tr>)}
                        </tbody>
                    </Table>
                </Content>
                <Pagination className="p-3">
                    {pages.map(key => <Pagination.Item active={key == startActive} className="mr-2 border" onClick={this.changePage} key={key} >{key}</Pagination.Item>)}
                </Pagination>
            </Fragment>
        );
    }
}
const Content = styled.div({
    width: '100%',
    overflowX: 'scroll',
})


export default InventoryTable;
