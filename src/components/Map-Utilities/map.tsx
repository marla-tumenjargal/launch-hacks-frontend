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
  key: "API_KEY",
  position: { lat: 43.6532, lng: -79.3832 },
  mapId: "MAP_ID",
}

export default function Pages() {
  const [markers, setMarkers] = useState<MarkerPosition[]>([]);

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <APIProvider apiKey={mapOptions.key}>
        <MapComponent markers={markers} setMarkers={setMarkers} />
      </APIProvider>
    </div>
  );
}

function MapComponent({ markers, setMarkers }: { markers: MarkerPosition[], setMarkers: React.Dispatch<React.SetStateAction<MarkerPosition[]>> }) {
  const getBounds = (event) => {
    const lat = event.detail.latLng.lat;
    const lng = event.detail.latLng.lng;
    console.log(lat, lng);
    const newMarker = {
      lat: lat,
      lng: lng
    };
    const updatedMarkers = [...markers, newMarker];
    setMarkers(updatedMarkers);
  };

  return (
    <Map
      defaultZoom={5}
      defaultCenter={mapOptions.position}
      mapId={mapOptions.mapId}
      onClick={getBounds}
    >
      <AdvancedMarker position={{ lat: 50, lng: 50 }}></AdvancedMarker>

      {markers.map((marker, idx) => (
        <AdvancedMarker key={idx} position={marker}></AdvancedMarker>
      ))}
    </Map>
  );
}
