import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'ramda';

const styles = theme => ({
  Centered: {
    display: 'flex',
    flex: 1,
    'align-items': 'center',
    'justify-content': 'center',
  },
});

class Centered extends Component {
  render() {
    const {classes, children, style} = this.props;

    return (
      <div className={classes.Centered} style={style}>
        {children}
      </div>
    );
  }
}

export default compose(withStyles(styles))(Centered);
