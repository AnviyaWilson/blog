import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Card, CardMedia, Grid } from '@mui/material';

import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


const Home = () => {
    var [pro,setPro]=useState([])
    useEffect(()=> {
        axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((res)=> {
            console.log(res.data);
            setPro(res.data)
        })
        .catch((err)=> console.log(err));
    },[]); 
    return (
        <div>
            <Grid container spacing={2}>
                {pro.map((val,i)=>{
                    return(
                        <Grid size={{xs:12,sm:6,md:4}}>
                            <Card sx={{ maxWidth:345}}>
      <CardMedia
        sx={{ height: 140 }}
        image={val.image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {val.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {val.description}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          {val.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
    </Grid>
                    )
 } )}

  </Grid>
        </div>
   )
};

export default Home