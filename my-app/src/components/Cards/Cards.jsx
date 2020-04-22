import React from 'react';
import {Card, CardContent, Typography, Grid} from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';

 const Cards = ({ data , country, theme}) => {
    const { confirmed, recovered, deaths, lastUpdate } = data;

    return (
        <div className={cx(styles.container)}>
          {  (confirmed && recovered && deaths && lastUpdate) ?
          (<Grid container spacing={3} justify="center">
              <Grid item component={Card} xs={12} md={3} className={theme ? cx(styles.card, styles.infected, styles.light):cx(styles.card, styles.infected, styles.dark) }>
                  <CardContent>
                      {country && (<Typography>{country}</Typography>)}
          
                      <Typography color={theme ? "textSecondary": styles.dark} gutterBottom>Infected</Typography>
                    <Typography variant="h5">
                        <CountUp 
                        start={0}
                        end={confirmed.value}
                        duration={2.5}
                        separator=","
                        />
                    </Typography>
                    
                      <Typography color={theme ? "textSecondary": styles.dark}>{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of active cases of COVID-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card}  xs={12} md={3} className={theme ? cx(styles.card, styles.recoveries, styles.light):cx(styles.card, styles.recoveries, styles.dark) }>
                  <CardContent>
                  {country && (<Typography>{country}</Typography>)}
                      <Typography color={theme ? "textSecondary": styles.dark} gutterBottom>Recoveries</Typography>
                      <Typography variant="h5">
                      <CountUp 
                        start={0}
                        end={recovered.value}
                        duration={2.5}
                        separator=","
                        />
                          
                      </Typography>
                      <Typography color={theme ? "textSecondary": styles.dark}>{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of recoveries cases of COVID-19</Typography>
                  </CardContent>
              </Grid>
              <Grid item component={Card}  xs={12} md={3} className={theme ? cx(styles.card, styles.deaths, styles.light):cx(styles.card, styles.deaths, styles.dark) }>
                  <CardContent>
                  {country && (<Typography>{country}</Typography>)}
                      <Typography color={theme ? "textSecondary": styles.dark} gutterBottom>Deaths</Typography>
                      <Typography variant="h5">
                      <CountUp 
                        start={0}
                        end={deaths.value}
                        duration={2.5}
                        separator=","
                        />
                      
                        </Typography>
                      <Typography color={theme ? "textSecondary": styles.dark}>{new Date(lastUpdate).toDateString()}</Typography>
                      <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                  </CardContent>
              </Grid>
         </Grid>) : (<h1>Loading...</h1>) }
        </div>
    )
}

export default Cards;