"use client";

import {
    APIProvider,
    AdvancedMarker,
    InfoWindow,
    Map,
    Pin,
    useMap
} from "@vis.gl/react-google-maps"

import React from 'react';

export default function Pages() {
    const mapOptions = {
        key : "API_STRING",
        position : {lat : 43.6532, lng:-79.3832},
        mapId : "MAP_ID",
    }

    return (
        <div style={{ height: "100vh", width: "100%" }}>
          <APIProvider apiKey={mapOptions.key}>
            <Map
            defaultZoom={9}
            defaultCenter={mapOptions.position}
            mapId={mapOptions.mapId}
            />
          </APIProvider>
        </div>
      );
}