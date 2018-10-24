import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

const styles =
  theme => ({
    SimpleForm: {

    },
    textField: {
      marginLeft: theme.spacing.unit,
      marginRight: theme.spacing.unit,
      width: 300,
    },
});

class SimpleForm extends Component {
  render() {
    const {classes, children, style} = this.props;

    return (<React.Fragment>
      <List>
        <ListItem>
          <TextField
            id="standard-name"
            label="Name"
            className={classes.textField}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-address"
            label="Address1"
            className={classes.textField}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-address2"
            label="Address2"
            className={classes.textField}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-address2"
            label="City"
            className={classes.textField}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-address2"
            label="State"
            className={classes.textField}
          />
        </ListItem>
        <ListItem>
          <TextField
            id="standard-address2"
            label="Zip"
            className={classes.textField}
          />
        </ListItem>
        <ListItem>
          <Button variant="contained" color="primary" className={classes.button}>
            Submit
          </Button>
        </ListItem>
      </List>
    </React.Fragment>);
  }
}

export default withStyles(styles)(SimpleForm);
