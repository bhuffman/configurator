import React, {Component} from 'react';
import {connect} from 'react-redux';
import {compose, values, mapObjIndexed, repeat, flatten, zip, keys, map, length, head, last, unnest} from 'ramda';
import actionCreators from 'globalActions';
import Composer from 'components/Composer';

class ConfigRoot extends Component {
  render() {
    let {classes, configJson} = this.props;

    return (
      <div style={{height: '100vh'}}>
        <Composer opts={head(values(configJson.tree))} key={head(keys(configJson.tree))} />
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
)(ConfigRoot);

