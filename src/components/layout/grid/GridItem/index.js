import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles =
  theme => ({
    GridContainer: {

    },
});

class GridContainer extends Component {
  render() {
    const {classes, children, style} = this.props;

    return (
      <Grid className={classes.GridContainer} style={style}>
        {this.props.children}
      </Grid>
    );
  }
}

export default withStyles(styles)(GridContainer);
