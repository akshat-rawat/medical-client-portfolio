import { useState } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import MapGL, {
  Marker,
  NavigationControl,
  FullscreenControl,
} from "react-map-gl";
import CityPin from "./CityPin";
import * as CONSTANTS from "../../services/constants/mapConstants";

const fullscreenControlStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  padding: "10px",
};

const navStyle = {
  position: "absolute",
  top: 36,
  left: 0,
  padding: "10px",
};

const theme = createTheme({
  typography: {
    fontFamily: ["EB Garamond", "serif"].join(","),
  },
});

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: CONSTANTS.latitude,
    longitude: CONSTANTS.longitude,
    zoom: 12,
    bearing: 0,
    pitch: 0,
  });

  const updateViewport = (newViewport) => setViewport(newViewport);

  return (
    <>
      <ThemeProvider theme={theme}>
        {/* <div className='Map'> */}
        {/* <div className='Map2'> */}

                <div style={{ display: "flex", justifyContent: "center", marginTop: "34px", maxWidth: "90vw", paddingRight: "20px", paddingLeft: "20px" }}>
                  <MapGL
                    {...viewport}
                    width="90vw"
                    height="50vh"
                    mapStyle="mapbox://styles/mapbox/dark-v9"
                    onViewportChange={updateViewport}
                    mapboxApiAccessToken={CONSTANTS.apiTOKEN}
                  >
                    <Marker
                      latitude={CONSTANTS.latitude}
                      longitude={CONSTANTS.longitude}
                    >
                      <CityPin size={20} onClick={() => {}} />
                    </Marker>

                    <div className="fullscreen" style={fullscreenControlStyle}>
                      <FullscreenControl />
                    </div>
                    <div className="nav" style={navStyle}>
                      <NavigationControl />
                    </div>
                  </MapGL>
                </div>
              

        {/* </div> */}
        {/* </div> */}
      </ThemeProvider>
    </>
  );
};

export default Map;
