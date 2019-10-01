import React from 'react';
import styles from './Map.module.css';
import mapStyle from './map-style';

class Map extends React.Component {
  mapDiv = React.createRef();

  setMap() {
    if (this.props.lat && this.props.lng) {
      const {lat, lng, zoom} = this.props;
      const map = new window.google.maps.Map(
        this.mapDiv.current, {
          zoom: zoom || 12,
          center: {lat, lng},
          disableDefaultUI: true,
          styles: mapStyle
        }
      );
      new window.google.maps.Marker({position: {lat, lng}, map: map});
    };
  };

  componentDidMount(){
    this.setMap();
  };

  componentDidUpdate(){
    this.setMap();
  };

  render() {
    return (
      <div ref={this.mapDiv} className={styles.Map}></div>
    );
  };
};

export default Map;