/*import React, { Component } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import L from "leaflet";*/

/*type State = {
    lat: number,
    lng: number,
    zoom: number,
}*/
import React, { Component, createRef } from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'

/*type Position = { lat: number, lng: number }

type State = {
    center: Position,
    marker: Position,
    zoom: number,
    draggable: boolean,
}*/

class LeafMap extends Component {
    state = {
        center: {
            lat: 47.497913,
            lng: 19.040236,
        },
        marker: {
            lat: 51.505,
            lng: -0.09,
        },
        zoom: 13,
        draggable: true,
    }
    // $FlowFixMe: ref


    toggleDraggable = () => {
        this.setState({ draggable: !this.state.draggable })
    }

    updatePosition = () => {
        const marker = this.refmarker.current
        if (marker != null) {
            this.setState({
                marker: marker.leafletElement.getLatLng(),
            })
        }
    }

    render() {
        const position = [this.state.center.lat, this.state.center.lng]
        const markerPosition = [this.state.marker.lat, this.state.marker.lng]

        return (
            <Map center={position} zoom={this.state.zoom} style={{height: "100vh"}}>
                <TileLayer
                    attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker
                    draggable={this.state.draggable}
                    onDragend={this.updatePosition}
                    position={markerPosition}
                    ref={this.refmarker}>
                    <Popup minWidth={90}>
            <span onClick={this.toggleDraggable}>
              {this.state.draggable ? 'DRAG MARKER' : 'MARKER FIXED'}
            </span>
                    </Popup>
                </Marker>
            </Map>
        )
    }
}

export default LeafMap;