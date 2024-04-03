import {
  APIProvider,
  AdvancedMarker,
  Map,
  Pin,
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
 * position is the default area that the map looks at
 * maximumDistance is how far away the user's guess can be before it is wrong
 */
const mapOptions = {
  position: { lat: 43.6532, lng: -79.3832 },
  maximumDistance: 200,
}

/**
 * Contains background colors for red, white, and green
 * White is the default
 * Green is if user's guess is within specified distance
 * Red is if user's guess isn't within specified distance
 */
const backgroundColors = {
  red : "#F73C5E",
  white : "#FFFFFF",
  green : "#008E83",
}

/**
 * This is the code that will be exported to display the Map Page
 * @returns returns tsx for map page
 */
export default function MapPage() {
  const metersToMilesFactor : number = 0.00061504297; 

  const [marker, setMarker] = useState<MarkerPosition>({lat : 0, lng : 0}); //initializes state for marker
  const [correctMarker, setCorrectMarker] = useState<MarkerPosition>({lat : 0, lng : 0});
  const [question,setQuestion] = useState<string>("");
  const [correctAnswer, setCorrectAnswer] = useState<string>("");
  const [color,setColor] = useState<string>(backgroundColors.white);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>(false);
  const [distance, setDistance] = useState<number>();

  const getResult = () => {
    console.log(correctMarker.lat + "" + correctMarker.lng);
    console.log("CORRECT ANSWER: " + correctAnswer)
    console.log(correctMarker.lat + correctMarker.lng)
    setHasSubmitted(true);
    console.log(hasSubmitted);
    const calculatedDistance : number = haversine(marker, correctMarker) * metersToMilesFactor;
    setDistance(calculatedDistance);

    if (calculatedDistance <= mapOptions.maximumDistance) {
      setColor(backgroundColors.green);
    } else {
      setColor(backgroundColors.red);
    }
  }

  const getQuestion = async () => {
    console.log("clicked");
    let connector : Connector = new Connector();

    const response = connector.getMapQuestion();
    const data = await response;

    setHasSubmitted(false);
    setQuestion(data.question);
    setCorrectAnswer(data.correct);
    setColor(backgroundColors.white);

    const coords = await connector.getCoordinates(data.correct);
    console.log(coords)
    setCorrectMarker({lat : coords.lat, lng : coords.lng});
    console.log("DONE");
  }

  return (
    <div className="map-page-container" style={{backgroundColor : color}}>
      <header className="map-header">
        <h1 className = "subtitle">Map Page</h1>
        <p className = "description">Place a pin on where you think the correct answer is!</p>
        <div className="button-container">
          {question}
          <button className="btn btn-outline-primary" onClick={getResult}>Submit!</button>
          <button className="btn btn-outline-secondary" onClick={getQuestion}>Get A Question</button>
          {hasSubmitted && (
            <>
            <p>{correctAnswer}</p>
            <p> You were {distance} miles away!</p>
            </>
          )}
        </div>
      </header>

      <div className="map-container">
        <APIProvider apiKey={keys.apiKey}>
          <MapComponent marker={marker} setMarker={setMarker} correctMarker={correctMarker} hasSubmitted={hasSubmitted}/>
        </APIProvider>
      </div>



    </div>
  );
}

/**
 * This is the functionality for the Map itself. It allows for the updating of the marker when user clicks on a different part of the map.
 * @param param0 - these are the marker and setMarker state variables to update marker position
 * @returns - returns functionality for Map Component
 */
function MapComponent({ marker, setMarker, correctMarker, hasSubmitted}: { marker: MarkerPosition, setMarker: React.Dispatch<React.SetStateAction<MarkerPosition>>, correctMarker : MarkerPosition, hasSubmitted : boolean}) {
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

      <AdvancedMarker position={{lat : correctMarker.lat, lng : correctMarker.lng}}>
          <Pin
          background={"blue"}
          borderColor={"blue"}
          glyphColor={"white"}
          />
        </AdvancedMarker>
        
      {/* {hasSubmitted && (
        <AdvancedMarker position={{lat : correctMarker.lat, lng : correctMarker.lng}}>
          <Pin
          background={"blue"}
          borderColor={"blue"}
          glyphColor={"white"}
          />
        </AdvancedMarker>
      )} */}

    </Map>
  );
}
