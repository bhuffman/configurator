import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {compose} from 'ramda';

const styles = theme => ({
  GridContainer: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing.unit * 2,
    paddingBottom: theme.spacing.unit * 2,
  },
});

class GridContainer extends Component {
  render() {
    const {classes, children, style} = this.props;

    return (
      <Grid className={classes.GridContainer} style={style}>
        {children}
      </Grid>
    );
  }
}

export default compose(withStyles(styles))(GridContainer);
