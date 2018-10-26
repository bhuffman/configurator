import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose, values, map, head, pipe, isNil} from 'ramda';
import ChartistGraph from 'react-chartist';

const styles = theme => ({
  SimpleChart: {
    display: 'flex',
    width: '100%',
    height: '100%'
  },
});

class SimpleChart extends Component {
  render() {
    const {classes, style, chartType} = this.props;

    var data = !isNil(this.props.data) ? {
          series: [
            map(pipe(values, head),this.props.data)
          ]
        }
        :
        {};

    var options = {
      axisX: {
        labelInterpolationFnc: function(value, index) {
          return index % 2 === 0 ? value : null;
        }
      },
    };

    var type = chartType ? chartType : 'Line'

    return (
      <div className={classes.SimpleChart} style={style}>
        <ChartistGraph data={data} options={options} type={type} className={'ct-octave'}/>
      </div>
    );
  }
}

export default compose(withStyles(styles))(SimpleChart);
