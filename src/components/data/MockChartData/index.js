import React, {Component} from 'react';

const mockData = [
	{
		series: 7,
	},
	{
		series: 3,
	},
	{
		series: 4,
	},
	{
		series: 4,
	},
	{
		series: 5,
	},
	{
		series: 0,
	},
	{
		series: 6,
	},
	{
		series: 7,
	},
	{
		series: 6,
	},
	{
		series: 2,
	},
	{
		series: 6,
	},
	{
		series: 3,
	},
	{
		series: 9,
	},
	{
		series: 7,
	},
	{
		series: 5,
	},
	{
		series: 3,
	},
	{
		series: 9,
	},
	{
		series: 4,
	},
	{
		series: 4,
	},
	{
		series: 2,
	},
	{
		series: 5,
	},
	{
		series: 4,
	},
	{
		series: 3,
	},
	{
		series: 7,
	},
	{
		series: 4,
	},
	{
		series: 11,
	},
	{
		series: 5,
	},
	{
		series: 7,
	},
	{
		series: 3,
	},
	{
		series: 5,
	},
	{
		series: 3,
	},
	{
		series: 3,
	},
	{
		series: 7,
	},
	{
		series: 6,
	},
	{
		series: 7,
	},
	{
		series: 4,
	},
	{
		series: 5,
	},
	{
		series: 5,
	},
	{
		series: 10,
	},
	{
		series: 4,
	},
	{
		series: 5,
	},
	{
		series: 1,
	},
	{
		series: 7,
	},
	{
		series: 4,
	},
	{
		series: 2,
	},
	{
		series: 3,
	},
	{
		series: 7,
	},
	{
		series: 3,
	},
	{
		series: 5,
	},
	{
		series: 8,
	},
	{
		series: 7,
	},
	{
		series: 5,
	},
	{
		series: 4,
	},
	{
		series: 1,
	},
	{
		series: 2,
	},
	{
		series: 5,
	},
	{
		series: 3,
	},
	{
		series: 3,
	},
	{
		series: 2,
	},
	{
		series: 5,
	},
	{
		series: 4,
	},
	{
		series: 4,
	},
	{
		series: 3,
	},
	{
		series: 4,
	},
	{
		series: 6,
	},
	{
		series: 7,
	},
	{
		series: 3,
	},
	{
		series: 5,
	},
	{
		series: 8,
	},
	{
		series: 7,
	},
	{
		series: 3,
	},
	{
		series: 5,
	},
	{
		series: 2,
	},
	{
		series: 7,
	},
	{
		series: 4,
	},
	{
		series: 4,
	},
	{
		series: 5,
	},
	{
		series: 6,
	},
	{
		series: 3,
	},
	{
		series: 4,
	},
	{
		series: 7,
	},
	{
		series: 3,
	},
	{
		series: 5,
	},
	{
		series: 6,
	},
	{
		series: 9,
	},
	{
		series: 9,
	},
	{
		series: 4,
	},
	{
		series: 4,
	},
	{
		series: 6,
	},
	{
		series: 2,
	},
	{
		series: 6,
	},
	{
		series: 12,
	},
	{
		series: 4,
	},
	{
		series: 8,
	},
	{
		series: 3,
	},
	{
		series: 5,
	},
	{
		series: 7,
	},
	{
		series: 7,
	},
	{
		series: 7,
	},
	{
		series: 8,
	},
];

class MockChartData extends Component {
  render() {
    const {classes, children, style} = this.props;
    
    let newChildren = React.Children.map(children, child =>
        React.cloneElement(child, {data: mockData})
      );

    return (
        <React.Fragment>
        	{newChildren}
        </React.Fragment>
    );
  }
}

export default MockChartData;
