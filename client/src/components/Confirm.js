import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core/styles';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';
import NavBar from './NavBar';
import { postLocation } from "../services/profileService";

export class Confirm extends Component {
  continue = e => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { Name, email, postcode, city },
    } = this.props;
    const location={
      Name: Name,
      Email: email,
      Postcode: postcode
    }

    return (
      <><NavBar /><MuiThemeProvider>
        <>
          <Dialog
            open
            fullWidth
            maxWidth='sm'
          >
            <AppBar title="Confirm User Data" />
            <List>
              <ListItem>
                <ListItemText primary="First Name" secondary={Name} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Email" secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary="Postcode" secondary={postcode} />
              </ListItem>
              <ListItem>
                <ListItemText primary="City" secondary={city} />
              </ListItem>
              
            
            </List>
            <br />

            <Button
              color="secondary"
              variant="contained"
              onClick={this.back}
            >Back</Button>

<Button color="primary" variant="contained" onClick={()=> postLocation(location)  }>
  <Button onClick={this.continue}>

            Confirm & Continue
            </Button>
          </Button>
          </Dialog>
        </>
      </MuiThemeProvider></>
    );
  }
}

export default Confirm;
