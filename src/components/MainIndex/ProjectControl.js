import React, { Fragment, useState, useEffect } from 'react';
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import { PublicNav } from '../Layout'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
const ProjectControl = (props) => {
    const [text, setText] = useState({
        RouteName: '專案控管圖表',
    })
    const [options, setOptions] = useState({
        chart: {
            type: 'bar'
        },
        title: {
            text: props.match.params.Pjname
        },
        xAxis: {
            categories: ['UI/UX', '前端', '後端', '資料庫設計', '系統架構']
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Total fruit consumption'
            }
        },
        legend: {
            reversed: true
        },
        plotOptions: {
            series: {
                stacking: 'normal'
            }
        },
        series: [{
            name: '發想',
            data: [5, 3, 4, 7, 2]
        }, {
            name: '設計',
            data: [2, 2, 3, 2, 1]
        }, {
            name: '實作',
            data: [3, 4, 4, 2, 5]
        }]
    })
    return (
        <div style={{ marginTop: '56px' }}>
            <PublicNav {...text} />
            <div className="p-2" style={{minHeight:'calc(100vh - 56px)'}}>
                <Link to="/home">
                    <Button variant="primary" className="mb-2">返回</Button>
                </Link>
                <HighchartsReact highcharts={Highcharts} options={options} />
            </div>
        </div>
    );
}

export default ProjectControl;
