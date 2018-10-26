import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'ramda';

const styles = theme => ({
  SpaceFiller: {
    display: 'flex',
    height: '100%',
    width: '100%',
    'overflow-y': 'scroll',
  },
});

class SpaceFiller extends Component {
  render() {
    const {classes, children, style} = this.props;

    return (
      <div className={classes.SpaceFiller} style={style}>
        {children}
      </div>
    );
  }
}

export default compose(withStyles(styles))(SpaceFiller);
