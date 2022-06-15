import React from 'react';
import NavTabs from './tabs/NavTabs';
import NavBar from '../navBar/NavBar';
import Login from './Login'
import Advert from './advert/Advert';
import useWindowSize from '../hooks/useWindowSize';
import { Grid, Box } from '@mui/material';

export default function LoginPage () {
  const windowWidth = !(useWindowSize().width < 1120)
  return (
    <Grid container >
      <Grid item xs={12}>
        <Box sx={{background : 'white'}}>
          <Grid container>
            <Grid item xs={12}>
              <NavBar windowWidth={windowWidth} />
            </Grid>
            {
              windowWidth &&
                (
                  <Grid item xs={12}>
                    <Grid container columnSpacing={4} sx={{justifyContent: 'center'}}>
                      <NavTabs />
                    </Grid>
                  </Grid>
                )
            }
          </Grid>
        </Box>
      </Grid>
      {
        windowWidth ?
          (
            <>
              <Grid item xs={1} />

              <Grid item xs={3} sx={{padding: '1em'}}>
                <Login />
              </Grid>

              <Grid item xs={7} sx={{padding: '1em'}}>
                <Advert />
              </Grid>

              <Grid item xs={1} />
            </>
          ) : (
            <>
              <Grid item xs={3} />
              <Grid item xs={6} sx={{padding: '1em'}}>
                <Login />
              </Grid>
              <Grid item xs={3} />

              <Grid item xs={3} />
              <Grid item xs={6} sx={{padding: '1em'}}>
                <Advert />
              </Grid>
              <Grid item xs={3} />
            </>
          )
      }
    </Grid>
  )
}