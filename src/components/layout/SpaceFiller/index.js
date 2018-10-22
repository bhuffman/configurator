import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {compose} from 'ramda';

const styles = theme => ({
  SpaceFiller: {
    display: 'flex',
    height: '100%',
    width: '100%',
  },
});

class SpaceFiller extends Component {
  render() {
    const {classes, children, style} = this.props;

    return (
      <div className={classes.SpaceFiller} style={style}>
        {this.props.children}
      </div>
    );
  }
}

export default compose(withStyles(styles))(SpaceFiller);
