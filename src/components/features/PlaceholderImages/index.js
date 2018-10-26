import React, {Component} from 'react';

class PlaceholderImages extends Component {
  render() {
    return (<React.Fragment>
        <div key={'img-1'}><img style={{maxHeight: '400px'}} alt='Placeholder' src="https://www.gstatic.com/webp/gallery/1.webp"/></div>
        {/* <div key={'img-2'}><img style={{maxHeight: '400px'}} src="https://www.gstatic.com/webp/gallery/2.webp"/></div>
        <div key={'img-4'}><img style={{maxHeight: '400px'}} src="https://www.gstatic.com/webp/gallery/4.webp"/></div>
        <div key={'img-5'}><img style={{maxHeight: '400px'}} src="https://www.gstatic.com/webp/gallery/5.webp"/></div> */}
    </React.Fragment>);
  }
}

export default PlaceholderImages;
