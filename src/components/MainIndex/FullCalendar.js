import React, { Component, Fragment } from 'react';
import { Card, Row } from 'react-bootstrap';
import styled from 'styled-components';
const to = new Date();
class FullCalendar extends Component {
  state = {
    writeContent: '',
    CalendarData: this.props,
    defaultMonth: (to.getMonth()) + 1
  }
  componentDidMount() {
    console.log(this.props);
    console.log(this.props.needMonths[1]['date']);
  }
  writeTag = (e) => {
    const content = prompt('輸入當日進行活動');
    let CopyCal = Object.assign({}, this.state.CalendarData);
    CopyCal.needMonths[this.state.defaultMonth].date[e].content = content
    this.setState({
      CalendarData: CopyCal
    })
  }
  selectMonth = (e) => {
    this.setState({
      defaultMonth: e.target.value,
    })
  }
  render() {
    const { defaultMonth, CalendarData } = this.state;
    return (
      <Fragment>
        <Card>
          <Card.Header className="d-flex justify-content-between">
            <div>{this.props.year}年度行事曆</div>
            <div className="d-flex">
              選擇月份:
              <select onChange={this.selectMonth}>
                {CalendarData.needMonths.map((el, idx) => <option key={idx} value={el}>{idx + 1}</option>)}
              </select>
              <div>月</div>
            </div>
          </Card.Header>
          <Card.Body className="p-0">
            <Row className="m-0">
              {this.props.needMonths[1]['date'].map((el, idx) =>
                <CalendarDiv className="border" key={idx} onClick={() => { this.writeTag(idx) }}>
                  <div>
                    {idx + 1}
                  </div>
                  <div className={el.content ? " bg-dark text-white mt-5" : ""}>{el.content}</div>
                </CalendarDiv>
              )}
            </Row>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

const CalendarDiv = styled.div({
  width: 'calc(100%/ 7)',
  height: '20vh',
  display: 'flex',
  flexDirection: 'column'

})

export default FullCalendar;
