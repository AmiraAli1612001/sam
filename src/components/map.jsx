import { Box } from '@mui/material';
import React from 'react';

import GoogleMapReact from 'google-map-react';
const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = () => {
    const defaultProps = {
        center: {
          lat: 10.99835602,
          lng: 77.01502627
        },
        zoom: 11
      };
      const handleApiLoaded = (map, maps) => {
        // use map and maps objects
      };
    return (

      <Box className="map">
{/* 
<GoogleMapReact
  bootstrapURLKeys={{ key:  }}
  defaultCenter={this.props.center}
  defaultZoom={this.props.zoom}
  yesIWantToUseGoogleMapApiInternals
  onGoogleApiLoaded={({ map, maps }) => handleApiLoaded(map, maps)}
>
  <AnyReactComponent
    lat={59.955413}
    lng={30.337844}
    text="My Marker"
  />
</GoogleMapReact> */}


      </Box>
    );
}

export default Map;
