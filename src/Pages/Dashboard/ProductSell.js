import React from 'react';
import { Bar, BarChart, Tooltip, XAxis, YAxis } from 'recharts';

const ProductSell = () => {
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
        "investment": 100000,
        "sell": 241,
        "revenue": 10401
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
        "investment": 700000,
        "sell": 670,
        "revenue": 61000
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
        "sell": 870,
        "revenue": 61000
    },
    {
        "month": "Nov",
        "investment": 700000,
        "sell": 1200,
        "revenue": 61000
    },
    {
        "month": "Dec",
        "investment": 700000,
        "sell": 1770,
        "revenue": 61000
    },
]
  return (
    <BarChart width={900} height={600} data={data}>
    <Bar dataKey={'sell'} stroke="#00FF00"></Bar>
   <XAxis dataKey="month" stroke='#008000'></XAxis>
   <Tooltip></Tooltip>
   <YAxis></YAxis>
  </BarChart>
  );
};

export default ProductSell;