import { useState } from "react";
import MapGL, {
    Marker,
    NavigationControl,
    FullscreenControl
} from "react-map-gl";
import CityPin from "./CityPin";
import * as CONSTANTS from "../../services/constants/mapConstants";

const fullscreenControlStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    padding: "10px"
};

const navStyle = {
    position: "absolute",
    top: 36,
    left: 0,
    padding: "10px"
};

const Map = () => {
    const [viewport, setViewport] = useState({
        latitude: CONSTANTS.latitude,
        longitude: CONSTANTS.longitude,
        zoom: 12,
        bearing: 0,
        pitch: 0
    });

    const updateViewport = newViewport => setViewport(newViewport);

    return (
        <MapGL
            {...viewport}
            width="50vw"
            height="50vh"
            mapStyle="mapbox://styles/mapbox/dark-v9"
            onViewportChange={updateViewport}
            mapboxApiAccessToken={CONSTANTS.apiTOKEN}
        >
            <Marker latitude={CONSTANTS.latitude} longitude={CONSTANTS.longitude}>
                <CityPin size={20} onClick={() => { }} />
            </Marker>

            <div className="fullscreen" style={fullscreenControlStyle}>
                <FullscreenControl />
            </div>
            <div className="nav" style={navStyle}>
                <NavigationControl />
            </div>
        </MapGL>
    );
}

export default Map;