import React, { Component, Fragment } from 'react';
import { Table, Button, InputGroup, FormControl, Col, Pagination, ListGroup } from 'react-bootstrap';
import styled from 'styled-components';
import DataModal from './DataModal';
class PublicTable extends Component {
    state = {
        pages: [],
        dataTree: [],
        startActive: 1,
        countPage: '',
        showPage: 10,
        searchList: []
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
    searchInput = e => {
        const { value } = e.target;
        this.setState({
            searchList: Object.values(this.props.StaffRes).filter(el => el.ChineseName.indexOf(value) != "-1")
        })
    }
    render() {
        const { pages, dataTree, startActive, countPage, searchList } = this.state;
        const { open, handleOpen, StaffRes } = this.props;
        return (
            <Fragment>
                <TableBg>
                    <div className="d-flex mb-3">
                        <Col lg={2} md={12} className="p-0 mr-2">
                            <InputGroup>
                                <FormControl
                                    placeholder="Username"
                                    aria-label="Username"
                                    aria-describedby="basic-addon1"
                                    onChange={this.searchInput}
                                /> <InputGroup.Prepend>
                                    <InputGroup.Text id="basic-addon1">
                                        <i className="fa fa-search"></i>
                                        <span>搜尋</span>
                                    </InputGroup.Text>
                                </InputGroup.Prepend>
                            </InputGroup>
                            <SearchList>
                                {searchList.map(el =>
                                    <ListGroup.Item>{el.ChineseName}</ListGroup.Item>)}
                            </SearchList>
                        </Col>
                        <Button variant="primary" className="mr-2 d-flex align-items-center">
                            <i className="fas fa-download mr-2"></i>
                            <div>下載</div>
                        </Button>
                        <div className="d-flex ml-auto p-2 bd-highlight">
                            <div className="d-flex ml-auto justify-content-center align-items-center bd-highlight">
                                <div className="mr-2">每頁顯示</div>
                                <select className="mr-2" onChange={this.changePage} name="select">
                                    <option value="5">10</option>
                                    <option value="10">20</option>
                                    <option value="20">30</option>
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
                    <Pagination className="align-items-center">
                        <Pagination.Item onClick={this.changePage}>
                            <i className="fas fa-chevron-left"></i>
                        </Pagination.Item>
                        {pages.map(el => <Pagination.Item key={el} active={el == startActive} onClick={this.changePage} name="pagebtn">{el}</Pagination.Item>)}
                        <Pagination.Item onClick={this.changePage}>
                            <i className="fas fa-chevron-right"></i>
                        </Pagination.Item>
                        <span className="ml-auto">
                            <i className="fa fa-paste mr-2"></i>
                            <span>共 {this.props.StaffRes.length} 筆資料</span>
                        </span>
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
    marginBottom: '1rem',
    minHeight: '50vh'
})

const SearchList = styled.span({
    position: 'absolute',
    width: '100%',
    maxHeight: '30vh',
    overflowY: 'scroll'
})
export default PublicTable;
