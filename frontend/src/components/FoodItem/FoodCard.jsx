import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import './FoodCard.css'
const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);

export default function FoodCard({icon,Foodcardheading,FoodContent}) {
  return (
    <Card sx={{ minWidth: 275 ,height:300,width:33}} className='Foodcard'>
      <CardContent className='foodContent'>
       <div className='FoodIcon'>
        {icon}
       </div>
       <Typography variant="h5" component="div">
       {Foodcardheading}
        </Typography>
        <Typography variant="body2">
{FoodContent}
        </Typography>
      </CardContent>
    </Card>
  );
}