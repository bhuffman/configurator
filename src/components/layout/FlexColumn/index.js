import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose} from 'ramda';

const styles = theme => ({
  FlexColumn: {
    display: 'flex',
    'flex-direction': 'column'
  },
});

class FlexColumn extends Component {
  render() {
    const {classes, children, style} = this.props;

    let newChildren = React.Children.map(children, child =>{
        return (<div>{React.cloneElement(child, {data: this.props.data})}</div>)
      });

    return (
      <div className={classes.FlexColumn} style={style}>
        {newChildren}
      </div>
    );
  }
}

export default compose(withStyles(styles))(FlexColumn);
