import  React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useGetQuotesQuery } from '../../services/quotesApi.js';
import foodlogo from '../../images/healthy-food.png';
import trackApp from '../../images/tracking-app.png';
import weight from '../../images/weights.png'
import {Box, Grid, Container, Typography } from '@mui/material';


export const Home = () => {
    const classes = useStyles();
    const [offsetY, setoffsetY] = useState(0);
    const handleScroll = () => setoffsetY(window.pageYOffset);
    // const data = useGetQuotesQuery();

    useEffect (() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const renderContent = () => (
      <>
<<<<<<< HEAD
        <div className={classes.wrapper}>
          <h1 className={classes.title}> {/*[ {data?.data?.quote} ] {data?.data?.author ? "- "+data?.data?.author : ""}*/} Fitness Tracker</h1>
        </div>
=======
          {/* <h1 className={classes.title}> [ {data?.data?.quote} ] {data?.data?.author ? "- "+data?.data?.author : ""} </h1> */}
        
        <Typography className={classes.title} display="flex" variant="h1"> Fitness Tracker</Typography>
>>>>>>> 9691ae5 (Add Workouts page. Make Homepage responsive.)

        <Container >
          <Typography variant="h3"  gutterBottom className={classes.headers} style={{ transform: `translate(${offsetY * -.1}px)` }}>
            About this App
          </Typography>

          <Typography variant="body1" className={classes.section} sx={{fontSize:'1.25rem'}}>	
            I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it
            with dark chocolate chunks and I tried it with semi-sweet chocolate chips. It's better with both kinds. It comes out pretty bad with just the dark 
            chocolate. The best add-ins are crushed almonds and marshmallows -- what you get from that is Rocky Road. It takes about twenty minutes from start to 
            fridge, and then it takes about six months to work off the twenty pounds you gain from eating it. All things in moderation, friends. All things in 
            moderation. There were only two ways to get out of this mess if they all worked together. The problem was that neither was all that appealing. One 
            would likely cause everyone a huge amount of physical pain while the other would likely end up with everyone in jail. In Sam's mind, there was only
            one thing to do. He threw everyone else under the bus and he secretly sprinted away leaving the others to take the fall without him. The chair sat 
            in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since 
            someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.
          </Typography>
        </Container>

        <Typography variant="h3" sx={{paddingTop:'50px'}}>Tools to help you reach your goals</Typography>

        <Box sx={{ width: '100%'}}>
      <Grid container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

        <Grid>
          <Grid item xs={6}>
            <img className={classes.pics} src={foodlogo} alt="Food"/>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.text}>They had always called it the green river. It made sense. The river was green. The river likely had a different official</p>
          </Grid>
        </Grid>

        <Grid>
          <Grid item xs={6}>
            <img className={classes.pics} src={trackApp} alt="tracking app"/>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.text}>They had always called it the green river. It made sense. The river was green. The river likely had a different official</p>
          </Grid>
        </Grid>

        <Grid>
          <Grid item xs={6}>
            <img className={classes.pics} src={weight} alt="weights"/>
          </Grid>
          <Grid item xs={6}>
            <p className={classes.text}>They had always called it the green river. It made sense. The river was green. The river likely had a different official</p>
          </Grid>
        </Grid>
      </Grid>
    </Box>
        <footer className={classes.footer}>
          © Devsquad established in 2020
        </footer>
      </>
    )

  return (
    <section className={classes.parallex_content}>
      <div
        className={classes.background}
        style={{ transform: `translateY(-${offsetY * 0.5}px)` }}
      />
      <div
        className={classes.foreground}
        style={{ transform: `translateY(${offsetY * 0.8}px)` }}
        />
      <div className={classes.parallexdiv}>{renderContent()}</div>
    </section>
  );
};

export default Home;