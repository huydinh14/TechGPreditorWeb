import React, { useCallback, useEffect } from 'react'
import "./chart.scss"
import { DatePicker, Space, AutoComplete, Button } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import { animated } from '@react-spring/web'
import axios from 'axios'
import Header from '../../component/Header/Header';
import StatisticTable from '../../component/StatisticTable/StatisticTable';

export default function Chart() {

    const [value, setValue] = React.useState('');

    const handleChange = (newValue) => {
        setValue(newValue);
    };

    // const options = {
    //     chart: {
    //         zoomType: 'xy',
    //         height: "40%",
    //         style: {
    //             plotBackgroundImage: "/image/logo.png",
    //             opacity: "0.99",
    //         }
    //         // plotBackgroundImage: "/image/logo.png"
    //     },
    //     title: {
    //         text: 'GPredictor Chart'
    //     },
    //     xAxis: [{
    //         categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    //     }],
    //     yAxis: [{ // Primary yAxis
    //         labels: {
    //             format: '{value}',
    //             range: [0, 1],
    //             style: {
    //                 color: Highcharts.getOptions().colors[1]
    //             }
    //         },
    //         title: {
    //             text: 'Temperature',
    //             style: {
    //                 color: Highcharts.getOptions().colors[1]
    //             }
    //         }
    //     }, { // Secondary yAxis
    //         title: {
    //             text: 'Rainfall',
    //             style: {
    //                 color: Highcharts.getOptions().colors[0]
    //             }
    //         },
    //         labels: {
    //             format: '{value} mm',
    //             style: {
    //                 color: Highcharts.getOptions().colors[0]
    //             }
    //         },
    //         opposite: true
    //     }],

    //     tooltip: {
    //         shared: true
    //     },

    //     series: [
    //         //      {
    //         //     name: 'Rainfall error',
    //         //     type: 'errorbar',
    //         //     yAxis: 1,
    //         //     data: [[48, 51], [68, 73], [92, 110], [128, 136], [140, 150], [171, 179], [135, 143], [142, 149], [204, 220], [189, 199], [95, 110], [52, 56]],
    //         //     tooltip: {
    //         //         pointFormat: '(error range: {point.low}-{point.high} mm)<br/>'
    //         //     }
    //         // },
    //         {
    //             name: 'AVG',
    //             type: 'spline',
    //             data: [0.6, 0.8, 0.7, 0.795, 0.4, 0.5, 0.6, 0.7, 0.9, 0.25, 0.65, 0.15],
    //             tooltip: {
    //                 pointFormat: '<span style="font-weight: bold; color: {series.color}">{series.name}</span>: <b>{point.y:.3f}</b> '
    //             },
    //             dashStyle: 'ShortDash',
    //             marker: {
    //                 enable: true,
    //                 radius: 7,
    //             }
    //         }
    //         , {
    //             name: 'Temperature error',
    //             type: 'errorbar',
    //             data: [[0.3, 0.9], [0.7, 0.9], [0.55, 0.85], [0.6, 0.99], [0.3, 0.5], [0.4, 0.6], [0.5, 0.7], [0.6, 0.8], [0.8, 1], [0.2, 0.3], [0.5, 0.8], [0.1, 0.2]],
    //             tooltip: {
    //                 pointFormat: '(Min-Max: {point.low}-{point.high})<br/>'
    //             },
    //             color: Highcharts.getOptions().colors[3],
    //             lineWidth: 2,
    //         }
    //     ]
    // }

    return (
        <div className="containerChart">
            <Header />
            <div className="main">
                <div className="chart">
                    <StatisticTable />
                </div>
            </div>
        </div>
    )
}
