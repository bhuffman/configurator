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
    'min-height': '10px',
    'box-shadow': '0px 0px 1px 1px rgba(69, 135, 173, 0.61)',
  },
  isOver:{
    'box-shadow': '0px 0px 1px 1px rgba(243, 6, 6, 0.61)',
  }
});

const sourceTarget = {
  drop(props, monitor, component) {
    if(!monitor.didDrop()){
      const comp = monitor.getItem().comp;
      const isSubmodule = monitor.getItem().submodule;
      const customProps = omit(['stub', 'slots'], path(['editor','customProps', comp], component.store.getState()))
      const parentPath = component.props.parentchain;


      if(isSubmodule){
        if(props.replace){
          component.store.dispatch(actionCreators.replaceSubmodule({path: parentPath, parentkey: last(parentPath), value: comp, customProps: customProps}))
        }else{
          component.store.dispatch(actionCreators.addSubmodule({path: parentPath, parentkey: component.props.parentkey, value: comp, customProps: customProps}))
        }
      }else if (props.replace){
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
