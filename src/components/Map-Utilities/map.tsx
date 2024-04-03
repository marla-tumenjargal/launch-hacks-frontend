import {
  APIProvider,
  AdvancedMarker,
  Map,
} from "@vis.gl/react-google-maps"

import haversine from "haversine-distance";
import { Connector } from "./Connector";
import React, { useState } from 'react';
import keys from "./keys"; //Just for development purposes, will rework for final product

import '../styles/MapPoint.css'; // Import CSS file

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
  const [correctMarker, setCorrectMarker] = useState<MarkerPosition>({lat : 0, lng : 0});
  const metersToMilesFactor : number = 0.00061504297;
  const [question,setQuestion] = useState<string>("");

  const getResult = () => {
    const distance : number = haversine(marker, correctMarker) * metersToMilesFactor;
    console.log("Distance in miles: " + distance);

    if (distance <= 100) {
      console.log("WITHIN 100 miles");
    } else {
      console.log("Womp womp");
    }
  }

  const getQuestion = async () => {
    let connector : Connector = new Connector();

    const response = connector.getMapQuestion();
    const data = await response;

    const coords = await connector.getCoordinates(data.correct);
    setCorrectMarker({lat : coords.lat, lng : coords.lng});
    console.log("DONE");
  }

  return (
    <div className="map-page-container">
      <header className="map-header">
        <h1 className = "subtitle">Map Page</h1>
        <p className = "description">Explore the map and find your location!</p>
      </header>

      <div className="map-container">
        <APIProvider apiKey={keys.apiKey}>
          <MapComponent marker={marker} setMarker={setMarker} correctMarker={correctMarker}/>
        </APIProvider>
      </div>

      <div className="button-container">
        <button onClick={getResult}>Submit!</button>
        <button onClick={getQuestion}>Get A Question</button>
      </div>
      {question}
    </div>
  );
}

/**
 * This is the functionality for the Map itself. It allows for the updating of the marker when user clicks on a different part of the map.
 * @param param0 - these are the marker and setMarker state variables to update marker position
 * @returns - returns functionality for Map Component
 */
function MapComponent({ marker, setMarker, correctMarker}: { marker: MarkerPosition, setMarker: React.Dispatch<React.SetStateAction<MarkerPosition>>, correctMarker : MarkerPosition}) {
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
      disableDefaultUI={true}
    >
      <AdvancedMarker position={{lat : marker.lat, lng : marker.lng}}></AdvancedMarker>
      <AdvancedMarker position={{lat : correctMarker.lat, lng : correctMarker.lng}}></AdvancedMarker>

    </Map>
  );
}
