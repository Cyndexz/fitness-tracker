import  React, { useEffect, useState } from 'react';
import useStyles from './styles';
import { useGetQuoteQuery } from '../../services/quoteAPI.js';


export const Home = () => {
    const classes = useStyles();
    const [offsetY, setoffsetY] = useState(0);
    const handleScroll = () => setoffsetY(window.pageYOffset);

    //const {data} = useGetQuoteQuery();
    // const quoteDetails = data?.quote;
    
    
    
    useEffect (() => {
      window.addEventListener('scroll', handleScroll);
      
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    
    
    const renderContent = () => (
      <>
        <div className={classes.wrapper}>
          <h1 className={classes.title}> Fitness Tracker </h1>
        </div>
        <section className={classes.section}>	
          Beginning
          opwejfpeowff eropfkerpe rperoe repore feldfmdfmsmfds sdf ds;flds,f'sd, sd;lsdfkmsd
          wepokrewpokrew weproewokrwepokrwepokrw werkfepwokfpodkfs pwkfdpokwepok fepwokfpowen
          qoweijfpowekpfokqf qefpomwpeof wefwemfpewf ewfpwef ewfew flwef welfkewflekwfewlfm 
          wefpkoewfkew ewpofemwepof dslksl;kdsfpmsdpoewm dfopfpwoefk we;ofreopewrpq peoqrkper
          pqweofkpowkefopwefpowe mwepowekewpokfrm vepevrpoerfoperfpokfe wepodefwkopewkdmew 
          I recently discovered I could make fudge with just chocolate chips, sweetened condensed milk, vanilla extract, and a thick pot on slow heat. I tried it with dark chocolate chunks and I tried it with semi-sweet chocolate chips. It's better with both kinds. It comes out pretty bad with just the dark chocolate. The best add-ins are crushed almonds and marshmallows -- what you get from that is Rocky Road. It takes about twenty minutes from start to fridge, and then it takes about six months to work off the twenty pounds you gain from eating it. All things in moderation, friends. All things in moderation.
There were only two ways to get out of this mess if they all worked together. The problem was that neither was all that appealing. One would likely cause everyone a huge amount of physical pain while the other would likely end up with everyone in jail. In Sam's mind, there was only one thing to do. He threw everyone else under the bus and he secretly sprinted away leaving the others to take the fall without him.
The chair sat in the corner where it had been for over 25 years. The only difference was there was someone actually sitting in it. How long had it been since someone had done that? Ten years or more he imagined. Yet there was no denying the presence in the chair now.

      </section>
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