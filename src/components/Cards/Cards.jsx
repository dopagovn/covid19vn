import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import CardComponent from './Card/Card';
import styles from './Cards.module.css';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
  }

  return (
    <div className={styles.container}>
        <Typography gutterBottom variant="h4" component="h2">Thế giới</Typography>
      <Grid container spacing={3} justify="center">
        <CardComponent
          className={styles.infected}
          cardTitle="Số người nhiễm"
          value={confirmed.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Số người nhiễm COVID-19."
        />
        <CardComponent
          className={styles.recovered}
          cardTitle="Số ca chữa khỏi"
          value={recovered.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Số người được chữa khỏi COVID-19."
        />
        <CardComponent
          className={styles.deaths}
          cardTitle="Số người chết"
          value={deaths.value}
          lastUpdate={lastUpdate}
          cardSubtitle="Số người tử vong vì COVID-19."
        />
      </Grid>
    </div>
  );
};

export default Info;
