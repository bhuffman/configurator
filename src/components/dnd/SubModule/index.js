import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import actionCreators from 'globalActions';
import DndDragSource from 'components/dnd/DndDragSource';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

const styles = theme => ({
  SubModule: {
    display: 'flex',
    width: '100%',
    padding: '10px',
    'padding-top': '12px',
    height: '100%'
  },
  button: {
    width: '100%'
  }
});

class SubModule extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
    this._handleDelete = this._handleDelete.bind(this);
    this._handleOpen = this._handleOpen.bind(this);
    this._handleClose = this._handleClose.bind(this);
    this._handleMakeSubmodule = this._handleMakeSubmodule.bind(this);
  }

  _handleDelete(e) {
    this.props.deleteTreeNode({path: this.props.parentchain})
  }

  _handleOpen(e) {
    this.setState({open: true})
  }

  _handleClose(e) {
    e.stopPropagation()
    this.setState({open: false})
  }

  _handleMakeSubmodule(e) {
    e.stopPropagation()
    this.setState({open: false})
    
    this.props.makeSubmodule({path: this.props.parentchain})
  }

  render() {
    const {classes, children, style, preview} = this.props;

    if(preview){
      return (
        <React.Fragment>
          {this.props.children}
        </React.Fragment>
      );
    }else{
      return (
        <div className={classes.SubModule} style={style}>
          <div className={classes.label} onClick={this._handleOpen}>
            <Dialog onBackdropClick={this._handleClose} aria-labelledby="simple-dialog-title" open={this.state.open}>
              <DialogTitle id="simple-dialog-title">{this.props.comp.type} Options</DialogTitle>
              <DialogContent>
                <List>
                  <ListItem >
                    <Button onClick={this._handleDelete} variant="outlined" className={classes.button}>
                      Delete
                    </Button>
                  </ListItem>
                  <ListItem >
                    <Button onClick={this._handleMakeSubmodule} variant="outlined" className={classes.button}>
                      Make Submodule
                    </Button>
                  </ListItem>
                </List>
              </DialogContent>
            </Dialog>
          </div>
          {this.props.comp.name}
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
)(SubModule);
