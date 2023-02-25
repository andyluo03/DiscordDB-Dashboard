import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

export default function Counter() {
  return (
    <Card variant="outlined" sx={{ maxWidth: 400 }}>
      <Typography level="h4">Recent Deposits</Typography>
      <Typography component="p">
        $3,024.00
      </Typography>
      <Typography sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
    </Card>
  );
}