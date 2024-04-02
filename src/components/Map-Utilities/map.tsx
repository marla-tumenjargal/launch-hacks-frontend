import {
  APIProvider,
  AdvancedMarker,
  Map,
} from "@vis.gl/react-google-maps"

import React, { useState } from 'react';

interface MarkerPosition {
  lat: number;
  lng: number;
}

const mapOptions = {
  key: "AIzaSyD1m11KV_jPejVhkj4WbPlgTaC9ibuo9F4",
  position: { lat: 43.6532, lng: -79.3832 },
  mapId: "7192a6e2243e7ffe",
}

export default function Pages() {
  const [markers, setMarkers] = useState<MarkerPosition>({lat : 0, lng : 0});

  return (
    <>
    <div style={{ height: "50vh", width: "40%", paddingLeft : "5rem"}}>
      <APIProvider apiKey={mapOptions.key}>
        <MapComponent markers={markers} setMarkers={setMarkers} />
      </APIProvider>
    </div>
    
    <button>hello</button>
    </>
  );
}

function MapComponent({ markers, setMarkers }: { markers: MarkerPosition, setMarkers: React.Dispatch<React.SetStateAction<MarkerPosition>> }) {
  const getBounds = (event) => {
    const lat = event.detail.latLng.lat;
    const lng = event.detail.latLng.lng;
    console.log(lat, lng);
    const newMarker = {
      lat: lat,
      lng: lng
    };
    // const updatedMarkers = [...markers, newMarker];
    setMarkers(newMarker);
  };

  return (
    <Map
      defaultZoom={5}
      defaultCenter={mapOptions.position}
      mapId={mapOptions.mapId}
      onClick={getBounds}
    >
      <AdvancedMarker position={{lat : markers.lat, lng : markers.lng}}></AdvancedMarker>

      
    </Map>
  );
}
