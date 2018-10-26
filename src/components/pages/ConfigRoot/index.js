import React, {Component} from 'react';
import { connect } from 'react-redux';
import { compose, values, keys, head } from 'ramda';
import actionCreators from 'globalActions';
import Composer from 'components/Composer';

class ConfigRoot extends Component {
  render() {
    let {configJson} = this.props;

    return (
      <div style={{height: '100vh'}}>
        <Composer opts={head(values(configJson.tree))} key={head(keys(configJson.tree))} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    configJson: state.configJson,
  };
}

export default compose(
  connect(mapStateToProps,actionCreators),
)(ConfigRoot);

