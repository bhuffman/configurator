import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {compose} from 'ramda';
import { DragSource } from 'react-dnd';
import actionCreators from 'globalActions';

const styles = (vars) => ({
  DndDragSource:{
  }
});

const cardSource = {
  beginDrag(props, monitor, component) {
    return { 
      comp: props.comp,
      parentkey: props.parentkey,
      submodule: props.submodule,
     };
  },
};

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
  };
}

class DndDragSource extends Component {
  render() {
    const { connectDragSource, classes } = this.props;

    return connectDragSource(
      <div className={classes.DndDragSource} >
        {this.props.children}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    customProps: state.editor.customProps
  };
}

export default  compose(
  DragSource("NEW_COMPONENT", cardSource, collect),
  connect(mapStateToProps, actionCreators),
  withStyles(styles)
)(DndDragSource);

