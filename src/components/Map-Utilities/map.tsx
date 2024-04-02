import {
  APIProvider,
  AdvancedMarker,
  Map,
} from "@vis.gl/react-google-maps"

import haversine from "haversine-distance";
import React, { useState } from 'react';
import keys from "./keys"; //Just for development purposes, will rework for final product


/**
 * This interface is to store the position of the marker
 */
interface MarkerPosition {
  lat: number;
  lng: number;
}

/**
 * Default map options for the Map Component;
 */
const mapOptions = {
  position: { lat: 43.6532, lng: -79.3832 },
}

/**
 * This is the code that will be exported to display the Map Page
 * @returns returns tsx for map page
 */
export default function MapPage() {
  const [marker, setMarker] = useState<MarkerPosition>({lat : 0, lng : 0}); //initializes state for marker
  const yerevan : MarkerPosition = {lat : 40.1872, lng : 44.5152};
  const metersToMilesFactor : number = 0.00061504297;

  const destinationCalculator = () => {
    console.log(marker);
    console.log(haversine(marker, yerevan) * metersToMilesFactor);


  }

  return (
    <>
    <div style={{ height: "50vh", width: "40%", paddingLeft : "5rem"}}>
      <APIProvider apiKey={keys.apiKey}>
        <MapComponent marker={marker} setMarker={setMarker} />
      </APIProvider>
    </div>

    <button onClick={destinationCalculator}>Submit!</button>
    </>
  );
}

/**
 * This is the functionality for the Map itself. It allows for the updating of the marker when user clicks on a differnt part of the map.
 * @param param0 - these are the marker and setMarker state variables to update marker position
 * @returns - returns functionality for Map Component
 */
function MapComponent({ marker, setMarker }: { marker: MarkerPosition, setMarker: React.Dispatch<React.SetStateAction<MarkerPosition>> }) {
  const setMarkerPosition = (event) => {
    const lat = event.detail.latLng.lat;
    const lng = event.detail.latLng.lng;
    console.log(lat, lng);
    const newMarker = {
      lat: lat,
      lng: lng
    };
    setMarker(newMarker);
  };

  return (
    <Map
      defaultZoom={5}
      defaultCenter={mapOptions.position}
      mapId={keys.mapId}
      onClick={setMarkerPosition}
    >
      <AdvancedMarker position={{lat : marker.lat, lng : marker.lng}}></AdvancedMarker>

    </Map>
  );
}
