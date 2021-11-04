import React, { useState, useRef } from "react";
import ReactMapGL, { Popup, NavigationControl } from "react-map-gl";
import dotenv from "dotenv";
import VG from "../db/data.json";
import "mapbox-gl/dist/mapbox-gl.css";
import Pins from "./marker";
import StoreInfo from "./popUp";
import ColorPanel from "./colorCategory";
import Page from "./page";
import FoodCard from "../components/food";
import "./page.css";

if (process.env.NODE_ENV === "development") {
  dotenv.config();
}

const MAPBOX_TOKEN = process.env.REACT_APP_MAPBOX_TOKEN;
const data = VG.datas;
const navStyle = {
  top: 36,
  left: 0,
  padding: "10px",
};

function LactoOvo({ match }) {
  const lactoOvoData = Object.values(data).filter(
    (s) => s.food_menu.includes("락토오보") === true
  );

  const [viewport, setViewport] = useState({
    latitude: 37.55,
    longitude: 126.99,
    zoom: 9,
    bearing: 0,
    pitch: 0,
  });
  const mapRef = useRef(null);
  const [page, setPage] = useState(1);

  const [popupInfo, setPopupInfo] = useState(null);
  const indexOfLastData = page * 16;
  const indexOfFirstData = indexOfLastData - 16;
  const perPageData = lactoOvoData.slice(indexOfFirstData, indexOfLastData);
  return (
    <section className="food">
      <div className="food__content">
        <div className="food__map">
          <ReactMapGL
            {...viewport}
            width="70rem"
            height="25rem"
            onViewportChange={setViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            ref={mapRef}
            minZoom={7}
          >
            <Pins data={lactoOvoData} onClick={setPopupInfo} />
            {popupInfo && (
              <Popup
                tipSize={5}
                anchor="top"
                longitude={popupInfo.longitude}
                latitude={popupInfo.latitude}
                closeOnClick={false}
                onClose={setPopupInfo}
              >
                <StoreInfo info={popupInfo} path={match} />
              </Popup>
            )}
            <NavigationControl style={navStyle} />
            <ColorPanel />
          </ReactMapGL>
        </div>
        <FoodCard data={perPageData} path={match} />
      </div>
      <Page pageData={[page, setPage]} data={lactoOvoData} />
    </section>
  );
}

export default LactoOvo;
