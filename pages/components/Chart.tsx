import * as React from 'react';
import Card from '@mui/joy/Card';
import { useTheme } from '@mui/material/styles';
import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';
import Typography from '@mui/joy/Typography';

// Generate Sales Data
const data = [
    {
      "name": "Page A",
      "uv": 4000,
      "pv": 2400
    },
    {
      "name": "Page B",
      "uv": 3000,
      "pv": 1398
    },
    {
      "name": "Page C",
      "uv": 2000,
      "pv": 9800
    },
    {
      "name": "Page D",
      "uv": 2780,
      "pv": 3908
    },
    {
      "name": "Page E",
      "uv": 1890,
      "pv": 4800
    },
    {
      "name": "Page F",
      "uv": 2390,
      "pv": 3800
    },
    {
      "name": "Page G",
      "uv": 3490,
      "pv": 4300
    }
  ]

export default function Chart() {
  const theme = useTheme();

  return (
    <Card variant="outlined" sx={{ width: 1,  my: '5' }}>
    <Typography sx={{ mb: 2 }} level="h4">Total Requests and Errors</Typography>
      <ResponsiveContainer width={"100%"} aspect={4} >
      <BarChart data={data}>
  <CartesianGrid strokeDasharray="3 3" />
  <XAxis dataKey="name" />
  <YAxis />
  <Tooltip />
  <Legend />
  <Bar dataKey="pv" fill="#8884d8" />
  <Bar dataKey="uv" fill="#82ca9d" />
</BarChart>
      </ResponsiveContainer>
      </Card>
  );
}