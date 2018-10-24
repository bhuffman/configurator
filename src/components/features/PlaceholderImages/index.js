import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';

const styles =
  theme => ({
    PlaceholderImages: {

    },
});

class PlaceholderImages extends Component {
  render() {
    const {classes, children, style} = this.props;

    return (<React.Fragment>
        <div key={'img-1'}><img style={{maxHeight: '400px'}} src="https://www.gstatic.com/webp/gallery/1.webp"/></div>
        {/* <div key={'img-2'}><img style={{maxHeight: '400px'}} src="https://www.gstatic.com/webp/gallery/2.webp"/></div>
        <div key={'img-4'}><img style={{maxHeight: '400px'}} src="https://www.gstatic.com/webp/gallery/4.webp"/></div>
        <div key={'img-5'}><img style={{maxHeight: '400px'}} src="https://www.gstatic.com/webp/gallery/5.webp"/></div> */}
    </React.Fragment>);
  }
}

export default withStyles(styles)(PlaceholderImages);
