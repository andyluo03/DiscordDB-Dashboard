import * as React from 'react';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';

export default function MoneySaved() {
  const test = 10
  return (
    <Card variant="outlined">
      <Typography level="h4">Money Saved</Typography>
      <Typography>
        vs. MongoDB Atlas
      </Typography>
      <Typography level="h1" sx={{mt:7, textAlign: 'center'}}>${test}</Typography>
    </Card>
  );
}