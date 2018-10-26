import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles =
  theme => ({
    HeroImage: {
      width: '100%',
    },
    img: {
      width: '100%'
    }
});

class HeroImage extends Component {
  render() {
    const {classes } = this.props;

    return (<React.Fragment>
        <div key={'img-1'} className={classes.HeroImage}><img className={classes.img} alt='Hero' src="hero-green.jpeg"/></div>
    </React.Fragment>);
  }
}

export default withStyles(styles)(HeroImage);
