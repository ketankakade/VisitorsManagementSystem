import React, { Component, useState }  from 'react';
import '../../css/VisitorRegistration.css';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import Input from '@material-ui/core/Input';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';


function VisitorRegistration() {
    const [idType, setIdType] = React.useState('');
    const [file, setFile] = React.useState('');

    const handleChange = (event) => {
        setIdType(event.target.value);
    };

    const fileChange = (file) => {
        setFile = file;
    }
 return(
    <div className="registrationForm">
        <h1>Registration Form</h1>
        <Grid container spacing={5}>
         <Grid item xs={12} sm={6}>
          <TextField
            required
            id="firstName"
            name="firstName"
            label="First name"
            fullWidth
            autoComplete="given-name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="mobileNo"
            name="mobileNo"
            label="Mobile Number"
            fullWidth
            autoComplete="mobile number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">ID Type</InputLabel>
            <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={idType}
            onChange={handleChange}
            >
            <MenuItem value={'Aadhar Card'}>Aadhar Card</MenuItem>
            <MenuItem value={'PAN Card'}>PAN Card</MenuItem>
            <MenuItem value={'Driving License'}>Driving License</MenuItem>
            </Select>
        </FormControl>
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="idProofNumber"
            name="idProofNumber"
            label="ID Proof Number"
            fullWidth
            autoComplete="id proof number"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactName"
            name="contactName"
            label="Contact Person Name"
            fullWidth
            autoComplete="contact-person-name"
          />
        </Grid>
        <Grid item xs={12} sm={6}>
            <TextField
                required
                fullWidth
                id="contactEmail"
                label="Contact Person Email Address"
                name="contactEmail"
                autoComplete="contact email address"
            />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="contactMobileNum"
            name="contactMobileNum"
            label="Contact Person Mobile Number"
            fullWidth
            autoComplete="contact-mobile-number"
          />
        </Grid>
        {/* <Grid item xs={12} sm={12}>
        <DropzoneArea
        onChange={this.fileChange({file})}
        />
        </Grid> */}

        <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
            <InputLabel id="select-image">Choose File</InputLabel>
            <Input accept="image/*" type="file"
                id="icon-button-file" />
        </FormControl>
        </Grid>
      </Grid>
    </div>

 )
};

export default VisitorRegistration;