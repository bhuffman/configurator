import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import {compose, isNil, filter} from 'ramda';

const styles = theme => ({
  FlexLayout1: {
    display: 'flex',
    'flex-direction': 'column'
  },
  flexContainer: {
      display: 'flex',
  },
  flexItem: {
      flex: '1',
  },
  flexColumn: {
      'flex-direction': 'column',
  },
  fullHeight: {
      height: '100vh',
  },
  whiteBackground: {
      background: 'white',
  },
  blueBackground: {
      background: '#3f51b5',
  },
  main:{
      order: '2',
      padding: '20px',
      'border-left': '1px solid #777777',
      'border-right': '1px solid #777777',
  },
  sidebar: {
      width: '20%',
      background: 'white',
      padding: '20px',
  },
  sidebarLeft:{
      order: '1',
  },
  sidebarRight:{
      order: '3',
  }
});

class FlexLayout1 extends Component {
  render() {
    const {classes, children, style} = this.props;

    const childrenWithProps = React.Children.map(children, child =>{
      return isNil(child) ? null : React.cloneElement(child);
    })

    const lookup = key => filter(c => c.key.indexOf(key) >= 0, React.Children.toArray(childrenWithProps));

    return (
      <div className={classes.FlexLayout1} style={style}>
        <div className={classes.flexContainer + ' ' +  classes.flexColumn + ' ' +  classes.fullHeight + ' ' +  classes.whiteBackground}>
          <nav className={classes.flexContainer + ' ' +  classes.blueBackground}>
            {lookup('nav')}
          </nav>
          <div className={classes.flexContainer + ' ' +  classes.flexItem}>
            <main className={classes.flexItem + ' ' +  classes.whiteBackground + ' ' +  classes.main}>
              {lookup('mainContent')}
            </main>
            <aside className={classes.sidebar + ' ' +  classes.sidebarLeft}>
              {lookup('leftSidebar')}
            </aside>
            <aside className={classes.sidebar + ' ' +  classes.sidebarRight}>
              {lookup('rightSidebar')}
            </aside>
          </div>
          <footer className={classes.flexContainer + ' ' +  classes.lexCenter + ' ' +  classes.blueBackground + ' ' +  classes.whiteText + ' ' +  classes.height50}>
            {lookup('footer')}
          </footer>
        </div>
      </div>
    );
  }
}

export default compose(withStyles(styles))(FlexLayout1);
