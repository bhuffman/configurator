import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose, values, mapObjIndexed, repeat, flatten, zip, keys, map, length, head, last} from 'ramda';
import { withRouter } from 'react-router';
import injectSheet from 'react-jss';
import actionCreators from 'globalActions';
import ConfiguMaker from 'components/ConfiguMaker';

const styles = (vars) => ({
  ConfigRoot:{

  }
});

class ConfigRoot extends Component {
  componentWillMount() {
    // this.props.initBootup();
  }

  render() {
    let {classes, configJson} = this.props;

    const kids = values(mapObjIndexed((node, index) => {
      return (<ConfiguMaker opts={node} key={index}/>)
    }, configJson.tree))

    return (
      <div className={classes.ConfigRoot}>
        {kids}
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  return {
    configJson: state.configJson,
  };
}

export default compose(
  connect(mapStateToProps,actionCreators),
  injectSheet(styles)
)(ConfigRoot);

