import Card from '@mui/joy/Card';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import Typography from '@mui/joy/Typography';
import axios from 'axios';
import { useState }from 'react';

async function GrabData() {
  try { 
    const RequestJson = []
    const logId = await axios.get('http://3.144.156.33/log/').then(res => res.data.channel_id)
    const messageIdArray = await axios.get('http://3.144.156.33/query/', {
      data: {
        channel_id: logId,
        attributes: {}
      }
    }).then(res => res.data.message_ids);
    for (let i = 0; i < messageIdArray.length; i++) {
      await axios.get('http://3.144.156.33/messages/', {
        data: {
          channel_id: logId,
          message_id: messageIdArray[i]
        }
      }).then(res => RequestJson.push(res.data))
      await new Promise(r => setTimeout(r, 500));
    }
    console.log(RequestJson[0].type)
    } catch(err) {
        console.log(err)
    }
}

export default function RequestTypeFrequencies() {
  GrabData()
  const data02 = [
    {
      "name": "POST",
      "value": 2400
    },
    {
      "name": "GET",
      "value": 4567
    },
    {
      "name": "PUT",
      "value": 1398
    },
    {
      "name": "DELETE",
      "value": 9800
    },
  ];
      
  return (
    <Card variant="outlined">         
      <Typography level="h4">Request Type Frequencies</Typography>
      <ResponsiveContainer width={"100%"} aspect={1.5}>           
        <PieChart>
          <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}