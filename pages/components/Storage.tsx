import * as React from 'react';
import Card from '@mui/joy/Card';
import LinearProgress from '@mui/joy/LinearProgress';
import Typography from '@mui/joy/Typography';

export default function Storage() {
  const test = 10
  return (
    <Card variant="outlined">
      <Typography sx={{ mb: 2 }} level="h4">Storage Used</Typography>
      <LinearProgress determinate value={5}/>
      <Typography sx={{ mt: 2, flex: 1 }}>
        {test} GB out of ∞ GB
      </Typography>
    </Card>
  );
}