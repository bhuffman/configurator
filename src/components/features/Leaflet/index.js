import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { compose } from 'ramda';
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'

const styles = theme => ({
  Leaflet: {
    width: '100%',
    height: '100%',
    'min-height': '300px',
  },
});

class Leaflet extends Component {
  render() {
    const {classes, style, mapPosition, popupText} = this.props;

    const position = mapPosition ? mapPosition : [51.505, -0.09]
    const text = popupText ? popupText : "This is my marker text"

    return (
      <div className={classes.Leaflet} style={style}>
        <Map center={position} zoom={13} style={{width: '100%', height: '100%'}}>
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution="&copy; <a href=&quot;http://osm.org/copyright&quot;>OpenStreetMap</a> contributors"
          />
          <Marker position={position}>
            <Popup>{text}</Popup>
          </Marker>
        </Map>
      </div>
    );
  }
}

export default compose(withStyles(styles))(Leaflet);
