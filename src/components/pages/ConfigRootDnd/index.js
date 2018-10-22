import React, { Component } from "react";
import { connect } from "react-redux";
import { compose, values, mapObjIndexed, path, isNil, map, head, keys } from "ramda";
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import actionCreators from "globalActions";
import ComposerDnd from "components/ComposerDnd";
import PermDrawer from "components/layout/PermDrawer";
import FlexColumn from "components/layout/FlexColumn";
import DndDragSource from "components/dnd/DndDragSource";
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
    document.removeEventListener("keydown", this._handleKeyDown);
  }

  _handleKeyDown = (event) => {
    switch( event.keyCode ) {
        case 27:
            this.props.rewindHistory()
            break;
        case 17:
            this.props.togglePreview()
            break;
        default: 
            break;
    }
  }

  render() {
    let { classes, configJson, features, layouts, data } = this.props;

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
        

    return (
      <div style={{ height: "100vh" }}>
        <div className={classes.toggle}>
          <Link to='/'>X</Link>
        </div>
        <PermDrawer>
          <div key="drawerContent">
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Layout</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ padding: 0 }}>
                <List style={{ padding: 0 }}>{layoutList}</List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Features</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ padding: 0 }}>
                <List style={{ padding: 0 }}>{featureList}</List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
            <ExpansionPanel>
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>Data</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails style={{ padding: 0 }}>
                <List style={{ padding: 0 }}>{dataList}</List>
              </ExpansionPanelDetails>
            </ExpansionPanel>
          </div>
          <ComposerDnd key='mainContent' opts={head(values(configJson.tree))} parentchain={['tree']} parentkey={head(keys(configJson.tree))}/>
        </PermDrawer>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    configJson: state.configJson,
    data: path(["editor", "keys", "data"], state),
    features: path(["editor", "keys", "features"], state),
    layouts: path(["editor", "keys", "layout"], state),
  };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    actionCreators,
  )
)(ConfigRootDnd);
