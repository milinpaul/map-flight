import React, { useState } from 'react'
import ReactMapGL from 'react-map-gl'
import DeckGL, { ArcLayer } from 'deck.gl'

import 'mapbox-gl/dist/mapbox-gl.css'

import flightData from '../../Data/flightArc.json'

const RenderMap = () => {
  const token = process.env.REACT_APP_MAP_BOX_TOKEN
  const { innerHeight: height, innerWidth: width } = window
  const [viewport, setViewport] = useState({
    width,
    height,
    latitude: 1.29027, // Base loc of Singapore
    longitude: 103.851959,
    zoom: 6
  })

  return (
    <ReactMapGL
      {...viewport}
      mapboxApiAccessToken={token}
      mapStyle='mapbox://styles/mapbox/light-v9'
      onViewportChange={setViewport}
    >
      <DeckGL
        viewState={viewport}
        layers={[
          new ArcLayer({
            data: flightData,
            getSourcePosition: (d) => d.source,
            getTargetPosition: (d) => d.target,
            getSourceColor: () => [255, 0, 0, 120],
            getTargetColor: () => [0, 255, 0, 120],
            // getStrokeWidth: () => 8
            getWidth: 5
          })
        ]}
      />
    </ReactMapGL>
  )
}

export default RenderMap
