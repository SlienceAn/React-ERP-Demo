import React, { Component, Fragment } from 'react';
import { Table, Button, InputGroup, FormControl, Col, Pagination } from 'react-bootstrap';
import styled from 'styled-components';
import DataModal from './DataModal';
class PublicTable extends Component {
    state = {
        pages: [],
        dataTree: [],
        startActive: 1,
        countPage: '',
        showPage: 5
    }
    componentDidMount() {
        let btns = [];
        let pageTotal = Math.ceil(this.props.StaffRes.length / this.state.showPage)
        for (let i = 0; i < pageTotal; i++) {
            btns = [...btns, i + 1]
        }
        this.setState({
            dataTree: this.props.StaffRes.slice(0, this.state.showPage),
            pages: btns,
            countPage: Math.ceil(this.props.StaffRes.length / this.state.showPage)
        })
    }
    changePage = (e) => {
        switch (e.target.name) {
            case 'pagebtn':
                this.setState({
                    dataTree: this.props.StaffRes.slice(0 + parseInt(this.state.showPage) * (e.target.text - 1), parseInt(this.state.showPage) + parseInt(this.state.showPage) * (e.target.text - 1)),
                    startActive: e.target.text,
                })
                break;
            case 'select':
                let btns = [];
                let pageTotal = Math.ceil(this.props.StaffRes.length / e.target.value)
                for (let i = 0; i < pageTotal; i++) {
                    btns = [...btns, i + 1]
                }
                this.setState({
                    showPage: e.target.value,
                    pages: btns,
                    dataTree: this.props.StaffRes.slice(0, e.target.value),
                    countPage: Math.ceil(this.props.StaffRes.length / e.target.value),
                    startActive: 1
                })
                break;
        }
    }
    render() {
        const { pages, dataTree, startActive, countPage } = this.state;
        const { open, handleOpen, StaffRes } = this.props;
        return (
            <Fragment>
                <TableBg>
                    <div className="d-flex mb-3">
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
                            <div>排序</div>
                        </Button>
                        <Button variant="primary" className="mr-2 d-flex align-items-center">
                            <i className="fas fa-download mr-2"></i>
                            <div>下載</div>
                        </Button>
                        <div className="d-flex ml-auto p-2 bd-highlight">
                            <div className="d-flex ml-auto justify-content-center align-items-center bd-highlight">
                                <div className="mr-2">每頁顯示</div>
                                <select className="mr-2" onChange={this.changePage} name="select">
                                    <option value="5">5</option>
                                    <option value="10">10</option>
                                    <option value="20">20</option>
                                </select>
                                <div>個 ,</div>
                            </div>
                            目前在第 {startActive} 頁,共 {countPage} 頁
                        </div>
                    </div>
                    <Table striped bordered hover style={{ fontFamily: '微軟正黑體' }}>
                        <thead>
                            <tr>
                                <th>#</th>
                                {Object.keys(StaffRes[0]).map(el => <th key={el}>{el}</th>)}
                                <th>功能</th>
                            </tr>
                        </thead>
                        <tbody>
                            {dataTree.map((el, idx) =>
                                < tr key={idx}>
                                    <td>{idx + 1}</td>
                                    {Object.values(el).map((res, idx) => <td key={idx}>{res}</td>)}
                                    < td >
                                        <Button className="mr-2" variant="outline-success" onClick={handleOpen}>
                                            <i className="fas fa-pen"></i>
                                        </Button>
                                        <Button variant="outline-danger">
                                            <i className="fas fa-trash-alt"></i>
                                        </Button>
                                    </td>
                                </tr>)}
                        </tbody>
                    </Table>
                    <Pagination>
                        <Pagination.Item onClick={this.changePage}>
                            <i className="fas fa-chevron-left"></i>
                        </Pagination.Item>
                        {pages.map(el => <Pagination.Item key={el} active={el == startActive} onClick={this.changePage} name="pagebtn">{el}</Pagination.Item>)}
                        <Pagination.Item onClick={this.changePage}>
                            <i className="fas fa-chevron-right"></i>
                        </Pagination.Item>
                    </Pagination>
                </TableBg >
                {open && <DataModal handleOpen={handleOpen} >
                    {this.props.children}
                </DataModal>}
            </Fragment>
        );
    }
}


const TableBg = styled.div({
    border: '1px solid rgba(0,0,0,.125)',
    padding: '20px',
    borderRadius: '.5rem',
    background: '#fff',
    marginBottom: '1rem'
})

export default PublicTable;
