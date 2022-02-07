import  React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useGetQuotesQuery } from '../../services/quotesApi.js';
import foodlogo from '../../images/healthy-food.png';
import trackApp from '../../images/tracking-app.png';
import weight from '../../images/weights.png'


export const Home = () => {
    const classes = useStyles();
    const [offsetY, setoffsetY] = useState(0);
    const handleScroll = () => setoffsetY(window.pageYOffset);
    const data = useGetQuotesQuery();
    
    useEffect (() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    const renderContent = () => (
      <>
        <div className={classes.wrapper}>
          <h1 className={classes.title}> [ {data?.data?.quote} ] {data?.data?.author ? "- "+data?.data?.author : ""} </h1>
        </div>

        <section className={classes.section}>	
        <h4 className={classes.headers}>About this App</h4>
           I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it
           with dark chocolate chunks and I tried it with semi-sweet chocolate chips. It's better with both kinds. It comes out pretty bad with just the dark 
           chocolate. The best add-ins are crushed almonds and marshmallows -- what you get from that is Rocky Road. It takes about twenty minutes from start to 
           fridge, and then it takes about six months to work off the twenty pounds you gain from eating it. All things in moderation, friends. All things in 
           moderation. There were only two ways to get out of this mess if they all worked together. The problem was that neither was all that appealing. One 
           would likely cause everyone a huge amount of physical pain while the other would likely end up with everyone in jail. In Sam's mind, there was only
            one thing to do. He threw everyone else under the bus and he secretly sprinted away leaving the others to take the fall without him. The chair sat 
            in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since 
            someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.
        </section>
        <h3 className={classes.headers}>Tools to help you reach your goals</h3>
        <div className={classes.imageDiv}>
          <img className={classes.pics} src={foodlogo} alt="Food"/>
          <img className={classes.pics} src={trackApp} alt="tracking app"/>
          <img className={classes.pics} src={weight} alt="weights"/>
          <p className={classes.text}>They had always called it the green river. It made sense. The river was green. The river likely had a different official 
          name, but to everyone in town, it was and had always been the green river. So it was with great surprise that on this day the green river was a </p>
          <p className={classes.text}>The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually 
          sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence</p>
          <p className={classes.text}>"Can I get you anything else?" David asked. It was a question he asked a hundred times a day and he always received the
           same answer. It had become such an ingrained part of his daily routine that he had to step back and actively think when he heard the little girl's</p>
        </div>
        <footer>
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