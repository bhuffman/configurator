import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'ramda';

const styles = theme => ({
  FlexRow: {
    display: 'flex',
    'flex-direction': 'row',
    width: '100%,'
  },
  row: {
    flex: 1,
    width: '10px'
  }
});

class FlexRow extends Component {
  render() {
    const {classes, children, style} = this.props;

    let newChildren = React.Children.map(children, child =>{
        return (<div className={classes.row}>{React.cloneElement(child, {data: this.props.data})}</div>)
      });

    return (
      <div className={classes.FlexRow} style={style}>
        {newChildren}
      </div>
    );
  }
}

export default compose(withStyles(styles))(FlexRow);
