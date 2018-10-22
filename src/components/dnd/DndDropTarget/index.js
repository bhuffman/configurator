import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {map, omit, compose,  equals, T, filter, has, isNil, init, path, last} from 'ramda';
import {connect} from 'react-redux';
import actionCreators from 'globalActions';
import { DropTarget } from 'react-dnd';

const styles = (vars) => ({
  DndDropTarget:{
    'width':'100%',
    'height':'inherit',
    'box-shadow': 'inset 0px 0px 3px 2px rgb(211, 6, 50,.61)',
    'box-shadow': '0px 0px 3px 2px rgba(211, 6, 50,0.61)',
  },
  isOver:{
    'box-shadow': 'inset 0px 0px 3px 2px rgba(129, 45, 211,0.61)',
    'box-shadow': '0px 0px 3px 2px rgba(129, 45, 211,0.61)',
  }
});

const sourceTarget = {
  drop(props, monitor, component) {
    if(!monitor.didDrop()){
      const comp = monitor.getItem().comp;
      const customProps = omit(['stub', 'slots'], path(['editor','customProps', comp], component.store.getState()))
      const parentPath = component.props.parentchain;

      if(props.replace){
        component.store.dispatch(actionCreators.replaceTreeNode({path: parentPath, parentkey: last(parentPath), value: comp, customProps: customProps}))
      }else{
        component.store.dispatch(actionCreators.addTreeNode({path: parentPath, parentkey: component.props.parentkey, value: comp, customProps: customProps}))
      }
    }
  },

  hover(props, monitor, component) {


  }
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver()
  };
}

class DndDropTarget extends Component {
  render() {
    let {classes, connectDropTarget,isOver} = this.props;
    let hoverClass = this.props.isOver ? 'isOver' : '';

    return connectDropTarget(
      <div className={classes.DndDropTarget + ' ' + classes[hoverClass]} style={{height:(this.props.rowHeight + 1) + 'px'}}>
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


export default compose(
  DropTarget(["NEW_COMPONENT"], sourceTarget, collect),
  connect(mapStateToProps, actionCreators),
  withStyles(styles)
)(DndDropTarget);
