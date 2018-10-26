import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose, values, repeat, flatten, zip, tail, map, length, head, last, pluck} from 'ramda';
import ReactGridLayout from 'react-grid-layout';

import "./react-grid.css";
import "./react-resizable.css";

const layouts = {default: [
  {i: 'a', x: 0, y: 0, w: 1, h: 1},
  {i: 'b', x: 1, y: 0, w: 2, h: 1},
  {i: 'c', x: 0, y: 1, w: 3, h: 1}
],compact: [
  {i: 'a', x: 0, y: 0, w: 1, h: 1},
  {i: 'b', x: 1, y: 0, w: 1, h: 1},
  {i: 'c', x: 3, y: 0, w: 1, h: 1}
],tall: [
  {i: 'a', x: 0, y: 0, w: 3, h: 1},
  {i: 'b', x: 0, y: 1, w: 3, h: 1},
  {i: 'c', x: 0, y: 2, w: 3, h: 1}
]};

const buildLayout = (myLayout, tiles) => {
  const tileKeys = values(map((tile) => tail(tail(tile)), pluck('key', tiles)))
  return map((arr) => {
    return {...last(arr), i: head(arr)}
  }, zip(
    tileKeys, 
    flatten(repeat(layouts[myLayout], Math.ceil(length(tileKeys)/3)))))
}

const styles =
  theme => ({
    TileGrid: {
      display:'flex',
      'flex-direction':'row',
      width: '100%',
    },
});

class TileGrid extends Component {
  render() {
    const {children} = this.props;
    
    const childrenWithProps = React.Children.map(children, child =>{
      return (<div key={child.key}>{child}</div>);
    })

    
    return (
      <ReactGridLayout 
          layout={buildLayout('default', childrenWithProps)} 
          cols={3} 
          rowHeight={367} 
          width={1200} 
          draggableCancel="input,textarea" 
          margin={[18, 14]} 
        >
        {childrenWithProps}
      </ReactGridLayout>
    );
  }
}

export default compose(
  withStyles(styles),
)(TileGrid);
