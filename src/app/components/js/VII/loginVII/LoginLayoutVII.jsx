import React, { Fragment } from 'react';
import Grid from '@material-ui/core/Grid';
import StartupScreen from '../loginVII/StartupScreen';

let LoginLayoutVII = (props) => {
  
  return (
    <Grid container  className='user-sign-in-container'>
      <Grid item xs={12} sm={12} md={8} lg={8} xl={8} className='signin-left-container'>
        <Fragment>
            <div className='signin-image'>
              <img alt="" src={process.env.PUBLIC_URL + "/images/pexels-photo-3183150 (1).png"}/>
            </div>
        </Fragment>
      </Grid>
      <Grid item xs={12} sm={12} md={4} lg={4} xl={4} className='signin-right-container'>
        <StartupScreen/>
      </Grid>
    </Grid>
  );
};

export default LoginLayoutVII;