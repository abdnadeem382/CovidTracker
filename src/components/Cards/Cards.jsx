import React from 'react'
import {Card, CardContent, Grid, Typography} from '@material-ui/core'
import CountUp from 'react-countup'
import styles from './cards.module.css'
import cx from 'classnames';

function Cards({data: {confirmed, recovered, deaths, lastUpdate}}) {
    if(!confirmed){
        return 'Loading'
    }
    return (
            <Grid container spacing={3} justify='center' className={styles.grid}>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Infected</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={confirmed.value}
                                duration={2.2}
                                separator=','    
                            />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of active cases</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Recovered</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={recovered.value}
                                duration={2.2}
                                separator=','    
                            />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of recoveries</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color='textSecondary' gutterBottom >Deaths</Typography>
                        <Typography variant='h5' >
                            <CountUp
                                start={0}
                                end={deaths.value}
                                duration={2.2}
                                separator=','    
                            />
                        </Typography>
                        <Typography color='textSecondary' >{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant='body2' >Number of deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
       
    )
}

export default Cards
