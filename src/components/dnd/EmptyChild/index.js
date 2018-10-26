import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import actionCreators from 'globalActions';
import DndDropTarget from 'components/dnd/DndDropTarget';

const styles = theme => ({
  EmptyChild: {
    display: 'inline-grid',
    width: '100%',
    height: 'auto',
    'min-height': '25px',
    'min-width': '25px',
    opacity: '1',
    'z-index': '1000',
    'border-radius': '10px',
    'box-shadow': 'inset 0px 0px 3px 2px rgba(0,0,0,0.61)',
    'background-image': "url('add.png')",
    'background-repeat': 'no-repeat',
    'background-position': 'center', 
    'background-color': '#ddd',
    'background-size': '24px',
  },
  icon: {
    width: '100%',
    height: '100%',
    color: '#ddd',
  }
});

class EmptyChild extends Component {
  render() {
    const {classes, children, style, preview} = this.props;

    if(preview){
      return (
        null
      );
    }else{
      return (
        <div className={classes.EmptyChild} style={style}>
          <DndDropTarget parentchain={this.props.parentchain} parentkey={this.props.parentkey} ></DndDropTarget>
        </div>
      );
    }
  }
}

function mapStateToProps(state) {
  return {
    preview: state.editor.preview
  };
}

export default compose(
  connect(mapStateToProps, actionCreators),
  withStyles(styles)
)(EmptyChild);
