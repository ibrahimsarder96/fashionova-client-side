import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Investment = () => {
  const data = [
    {
        "month": "Jan",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Feb",
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
    },
    {
        "month": "Mar",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "Apr",
        "investment": 200000,
        "sell": 423,
        "revenue": 24500
    },
    {
        "month": "May",
        "investment": 500000,
        "sell": 726,
        "revenue": 67010
    },
    {
        "month": "Jun",
        "investment": 500000,
        "sell": 529,
        "revenue": 40405
    },
    {
        "month": "Jul",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Aug",
        "investment": 600000,
        "sell": 601,
        "revenue": 50900
    },
    {
        "month": "Sep",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
    {
        "month": "Oct",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
    {
        "month": "Nov",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    },
    {
        "month": "Dec",
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
    }
]
  return (
    <LineChart width={900} height={600} data={data} >
    <Line dataKey={'investment'} stroke="#808000"></Line>
    <Line dataKey={'revenue'} stroke="#FF00FF"></Line>
    <XAxis dataKey='month' stroke="#008000"></XAxis>
    <YAxis></YAxis>
    <Tooltip></Tooltip>
  </LineChart>
  );
};

export default Investment;