import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Dialog from "@material-ui/core/Dialog";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";
import "../visitorCreation/CancelRegistrationModal.scss";

function CancelRegistrationModal(props) {
  const history = useHistory();
  const [open, setOpen] = React.useState(true);

  const handleClose = () => {
    props.setCancelOrderModalValue(false);
  };
  const keepRegistration = () => {
    props.setCancelOrderModalValue(false);
  };

  const cancelRegistration = () => {
    history.push("/StartupScreen");
  };

  return (
    <Dialog onClose={handleClose} open={open}>
      <Grid
        container
        justify="center"
        className="cancel-registration-container"
      >
        <Grid item sm={12} className="img-parent">
          <img
            className="img-cross"
            alt=""
            onClick={() => handleClose()}
            src="/public/assets/close.svg"
          />
        </Grid>
        <Grid
          item
          xs={12}
          md={12}
          lg={12}
          sm={12}
          className="modal-content-height"
        >
          <p className="headingText">cancel</p>
         <Grid item className='description-grid' xs={12} sm={10} md={10} lg={10} xl={10} >
            <p className="description">Are you sure you want to cancel the registration process ? </p>
            <p>
              Once cancelled, you will get logout from the system and need to
              restart the process of registration again
            </p>
          </Grid>
          <Grid item className="button-group">
            <Button
              className="cancel-button"
              type="button"
              variant="contained"
              color="primary"
              onClick={() => cancelRegistration()}
            >
              YES,CANCEL
            </Button>
            <Button
              className="keep-button"
              variant="contained"
              color="primary"
              onClick={() => keepRegistration()}
            >
              NO
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Dialog>
  );
}

export default CancelRegistrationModal;
