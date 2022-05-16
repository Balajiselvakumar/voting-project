import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';

export default function VotingCard(props) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          style={{maxWidth: '100%'}}
          image={props.party.img}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.party.title}
          </Typography>

        </CardContent>
      </CardActionArea>
    </Card>
  );
}
