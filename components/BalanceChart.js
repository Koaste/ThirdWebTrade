import styled from "styled-components";
import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto';

const data = {
    labels: [
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Jul',
        'Aug',
        'Sep',
        'Oct'
    ],
    datasets: [
        {
            fill: false,
            lineTension: 0.1,
            backgroundColor: '#3773f5',
            borderColor: '#3773f5',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: '#3773f5',
            pointBackgroundColor: '#3773f5',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: '#3773f5',
            pointHoverBorderColor: '#3773f5',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [25, 32, 44, 56, 80, 52, 71, 85, 92, 96],
        },
    ],
}

const options = {
    plugins: {
        legend: {
            display: false,
        },
    },
}


const BalanceChart = ({ data, options }) => {
  return (
    <Wrapper>
        <Line data={data} options={options} width={400} height={400}/>
    </Wrapper>
  )
};

export default BalanceChart;

const Wrapper =styled.div``
