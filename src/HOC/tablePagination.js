import React, { Component } from 'react';

const tablePagination = (WrapperComponent, tableData) => {
    return class extends Component {
        state = {
            pages: [],
            dataTree: '',
            startActive: 1,
            countPage: ''
        }
        componentDidMount() {
            let pagebtn = [];
            let startTree = tableData.slice(0, 10)
            let pageTotal = Math.ceil(tableData.length / 10)
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
            let filtereKeys = Object.keys(tableData).slice(0 + 10 * (startPage - 1), 10 + 10 * (startPage - 1));
            let newTree = {};
            filtereKeys.map(key => newTree[key] = this.state.dataTree[key])
            this.setState({
                dataTree: newTree,
                startActive: e.target.text
            })
        }
        render() {
            const { pages, dataTree, startActive, countPage } = this.state;
            return (
                <WrapperComponent
                    pages={pages}
                    dataTree={dataTree}
                    startActive={startActive}
                    countPage={countPage}
                    changePage={this.changePage}
                    {...this.props}
                />)
        }
    }
}
export default tablePagination;
