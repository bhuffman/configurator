import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import actionCreators from 'globalActions';
import DndDropTarget from 'components/dnd/DndDropTarget';

const styles = theme => ({
  FullChild: {
    display: 'flex',
    width: '100%',
    padding: '10px',
    'padding-top': '12px',
    height: '100%'
  },
  label: {
    position: 'absolute',
    height: '12px',
    'font-size': '10px',
    'margin-top': '-14px',
    'margin-left': '-2px',
    opacity: '.65',
    cursor: 'crosshair',
    '&:hover': {
      color: 'red'
    },
  }
});

class FullChild extends Component {
  constructor(props) {
    super(props);
    this._handleClick = this._handleClick.bind(this);
  }

  _handleClick(e) {
    this.props.deleteTreeNode({path: this.props.parentchain})
  }

  render() {
    const {classes, children, style, preview} = this.props;

    let newChildren = React.Children.map(children, child =>
      React.cloneElement(child, {data: this.props.data})
    );

    if(preview){
      return (
        <React.Fragment>
          {newChildren}
        </React.Fragment>
      );
    }else{
      return (
        <div className={classes.FullChild} style={style}>
          <DndDropTarget parentchain={this.props.parentchain} replace>
            <div className={classes.label} onClick={this._handleClick}>{this.props.opts.type}</div>
            {newChildren}
          </DndDropTarget>
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
)(FullChild);
