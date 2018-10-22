import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose, isNil, filter} from 'ramda';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';

function TabContainer(props) {
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {props.children}
    </Typography>
  );
}

const styles = theme => ({
  SimpleTabs: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
});

class SimpleTabs extends React.Component {
  state = {
    value: 0,
  };

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes, children } = this.props;
    const { value } = this.state;

    const childrenWithProps = React.Children.map(children, child =>{
      return isNil(child) ? null : React.cloneElement(child);
    })

    const lookup = key => filter(c => c.key.indexOf(key) >= 0, React.Children.toArray(childrenWithProps));

    return (
      <div className={classes.SimpleTabs}>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange}>
            <Tab label="One" />
            <Tab label="Two" />
            <Tab label="Three" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer>{lookup('tabOne')}</TabContainer>}
        {value === 1 && <TabContainer>{lookup('tabTwo')}</TabContainer>}
        {value === 2 && <TabContainer>{lookup('tabThree')}</TabContainer>}
      </div>
    );
  }
}
export default compose(withStyles(styles))(SimpleTabs);
