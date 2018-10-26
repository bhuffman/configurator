import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {mapObjIndexed, values, dissoc} from 'ramda';

const styles =
  theme => ({
    Test: {

    },
  });

class Test extends Component {
  render() {
    const { classes, style } = this.props;
    const kids = values(mapObjIndexed((val, key) => {
      return <div key={key}>{key} : {JSON.stringify(val)}</div>
    }, dissoc('children', this.props)))

    return (
      <Grid className={classes.Test} style={style}>
        {kids}
        {this.props.children}
      </Grid>
    );
  }
}

export default withStyles(styles)(Test);
