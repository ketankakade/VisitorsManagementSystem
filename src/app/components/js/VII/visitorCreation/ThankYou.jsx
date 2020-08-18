import React from 'react';
import Grid from "@material-ui/core/Grid";

function ThankYou() {
    return(
     <Grid container justify='center' xs={11} md={9} lg={7} sm={10} className='thanks-container'>
     <Grid sm={12} className="img-parent">
          <img className="img-cross" alt="Thank you"  src={process.env.PUBLIC_URL + "/images/001-positive-vote.svg"} />
    </Grid>
    <Grid item sm={12} className="text-container">
    <h1> Thank you for applying for visitor pass.</h1>
    <p> Please wait till the time you get an approval mail to your registered email id - 
        rama@gmail.com </p>
    </Grid>
    </Grid>

    );
    
}

export default ThankYou;