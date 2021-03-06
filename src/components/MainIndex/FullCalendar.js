import React, { Component, Fragment } from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
import Announcement from './Announcement';
const to = new Date();
const week = ["星期一", "星期二", "星期三", "星期四", "星期五", "星期六", "星期日"]
class FullCalendar extends Component {
  state = {
    writeContent: '',
    CalendarData: this.props,
    defaultMonth: (to.getMonth()) + 1,
    EventList: []
  }
  writeTag = (e) => {
    const content = prompt('輸入當日進行活動');
    if (content) {
      let CopyCal = Object.assign({}, this.state.CalendarData);
      CopyCal.needMonths[this.state.defaultMonth].date[e].content = content
      this.setState({
        CalendarData: CopyCal,
        EventList: [...this.state.EventList, content]
      })
    }

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
            <div>{this.props.year}-本月年度行事曆</div>
          </Card.Header>
          <Card.Body className="p-0">
            <Row>
              <Col lg={8}>
                <Row className="m-0">
                  {week.map(el =>
                    <div key={el} className="text-center text-white d-flex justify-content-center align-items-center" style={{ width: 'calc(100%/ 7)', height: '5vh', backgroundColor: 'rgb(3, 54, 56)' }}>{el}</div>
                  )}
                </Row>
                <Row className="m-0">
                  {this.props.needMonths[1]['date'].map((el, idx) =>
                    <CalendarDiv key={idx} onClick={() => { this.writeTag(idx) }}>
                      <div className="d-flex justify-content-end">
                        <CalenderDate>
                          {idx + 1}
                        </CalenderDate>
                      </div>
                      <div className={el.content ? " bg-dark text-white mt-2" : ""}>
                        {el.content.length < 20 ? el.content : el.content.substring(0, 20) + "..."}
                      </div>
                    </CalendarDiv>
                  )}
                </Row>
              </Col>
              <Col lg={4}>
                <Announcement {...this.state.EventList} />
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Fragment>
    );
  }
}

const CalendarDiv = styled.div`
  width: calc(100%/ 7);
  height: 15vh;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid rgba(3, 54, 56,.5);
  border-right: 1px solid rgba(3, 54, 56,.5);
  &:hover{
    cursor:pointer;
    background:rgba(3, 54, 56,.5);

  }
`

const CalenderDate = styled.div({
  fontSize: '1rem',
  fontWeight: 'bolder',
  padding: '.5rem .5rem .5rem 1.5rem',
  borderBottom: '.5px solid rgba(3, 54, 56,.5)',
  borderLeft: '.5px solid rgba(3, 54, 56,.5)'
})

export default FullCalendar;
