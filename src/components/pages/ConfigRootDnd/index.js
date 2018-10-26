import React, { Component } from "react";
import { connect } from "react-redux";
import { compose, values, mapObjIndexed, path, isNil, map, head, keys } from "ramda";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import actionCreators from "globalActions";
import ComposerDnd from "components/ComposerDnd";
import PermDrawer from "components/layout/PermDrawer";
import DndDragSource from "components/dnd/DndDragSource";
import SubModule from "components/dnd/SubModule";
import JsonPreview from "components/dnd/JsonPreview";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import Divider from "@material-ui/core/Divider";

const styles = theme => ({
  EmptyChild: {
    display: 'flex',
    width: '100%',
    'min-height': '25px',
    'background-color': 'blue',
    opacity: '.2',
  },
  toggle:{
    position: 'absolute',
    top: 0,
    right: 0,
    'z-index': '10000',
    'border': '1px solid #ddd',
    'background-color': 'white',
    'text-decoration': 'none',
    'font-size': '10px',
    opacity: '0.5'
  }
});


class ConfigRootDnd extends Component {
  constructor(props) {
    super(props);
    this._handleKeyDown = this._handleKeyDown.bind(this);
  }

  componentDidMount() {
    document.addEventListener("keydown", this._handleKeyDown);
  }
  
  componentWillUnmount() {
    // Remove so we don't remount the listener and double fire events
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown = (event) => {
    switch( event.keyCode ) {
        case 90: // Z
          if(event.ctrlKey && event.shiftKey){
            this.props.forwardHistory();
          }else if (event.ctrlKey){
            this.props.rewindHistory();
          }
          break;
        case 88: // X
          event.ctrlKey && this.props.togglePreview();
          break;
        default: 
            break;
    }
  }

  render() {
    let { classes, configJson, features, layouts, data , subModules, preview} = this.props;

    const featureList =
      !isNil(features) &&
      values(
        map(feature => {
          return (
            <React.Fragment key={feature}>
              <DndDragSource comp={feature}>
                <ListItem>
                  <ListItemText>{feature}</ListItemText>
                </ListItem>
                <Divider />
              </DndDragSource>
            </React.Fragment>
          );
        }, features)
      );

    const layoutList =
      !isNil(layouts) &&
      values(
        map(layout => {
          return (
            <React.Fragment key={layout}>
              <DndDragSource comp={layout}>
                <ListItem>
                  <ListItemText>{layout}</ListItemText>
                </ListItem>
                <Divider />
              </DndDragSource>
            </React.Fragment>
          );
        }, layouts)
      );

    const dataList =
      !isNil(data) &&
      values(
        map(datum => {
          return (
            <React.Fragment key={datum}>
              <DndDragSource comp={datum}>
                <ListItem>
                  <ListItemText>{datum}</ListItemText>
                </ListItem>
                <Divider />
              </DndDragSource>
            </React.Fragment>
          );
        }, data)
      );
        
    const SubModuleList =
      !isNil(subModules) && !this.props.preview &&
      values(
        map(subModule => {
          return (
            <React.Fragment key={subModule}>
              <DndDragSource comp={subModule} submodule>
                <SubModule comp={subModule}>
                  <ListItem>
                    <div>{subModule}</div>
                  </ListItem>
                  <Divider />
                </SubModule>
              </DndDragSource>
            </React.Fragment>
          );
        }, subModules)
      );
        

    return (
      <div style={{ height: "100vh" }}>
        <div className={classes.toggle}>
          <Link to='/'>X</Link>
        </div>
        <PermDrawer preview={preview}>
          <div key="drawerContent">
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Data</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ padding: 0 }}>
                <List style={{ padding: 0 }}><Divider />{dataList}</List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Layout</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ padding: 0 }}>
                <List style={{ padding: 0 }}><Divider />{layoutList}</List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Features</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ padding: 0 }}>
                <List style={{ padding: 0 }}><Divider />{featureList}</List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Sub Modules</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ padding: 0 }}>
                <List style={{ padding: 0 }}><Divider />{SubModuleList}</List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <ComposerDnd key='mainContent' opts={head(values(configJson.tree))} parentchain={['tree']} parentkey={head(keys(configJson.tree))}/>
        </PermDrawer>
        <JsonPreview />
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    configJson: state.configJson,
    preview: state.editor.preview,
    data: path(["editor", "keys", "data"], state),
    features: path(["editor", "keys", "features"], state),
    layouts: path(["editor", "keys", "layout"], state),
    subModules: path(["configJson", "subModules"], state),
  };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    actionCreators,
  )
)(ConfigRootDnd);
