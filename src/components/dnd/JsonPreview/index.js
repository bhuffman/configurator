import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { compose } from 'ramda';
import actionCreators from 'globalActions';
import JSONPretty from 'react-json-pretty';

const styles = theme => ({
  JsonPreview: {
    display: 'flex',
  }
});

class JsonPreview extends Component {
  render() {
    const {classes, style } = this.props;

    return (
      <div className={classes.JsonPreview} style={style}>
        <JSONPretty id="json-pretty" json={this.props.tree}></JSONPretty>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    tree: state.configJson.tree
  };
}

export default compose(
  connect(mapStateToProps, actionCreators),
  withStyles(styles)
)(JsonPreview);
