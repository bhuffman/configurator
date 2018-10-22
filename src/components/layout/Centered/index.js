import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
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
        {this.props.children}
      </div>
    );
  }
}

export default compose(withStyles(styles))(Centered);
