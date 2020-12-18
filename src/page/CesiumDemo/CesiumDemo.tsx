import React, { useEffect, useState } from 'react';
import "./CesiumDemo.css";
// import * as CesiumApi from "./CesiumApi/CesiumApi";


function CesiumDemo(): JSX.Element {

    const [orgView, setOrgView] = useState<any>(null);

    useEffect(() => {
        // const tmpView = CesiumApi.initMap("cesiumContainer", true);
        // CesiumApi.addBuilding(tmpView, "");
        const tmpView = "123";
        setOrgView(tmpView);
    }, [])

    useEffect(() => {
        if (!orgView) return

    }, [orgView])

    return (
        <div className="main-map-container">
            {/* 初始化一个框来放置场景 */}
            <div id='cesiumContainer' />
            <button id="toggle-building" style={{ position: "fixed", zIndex: 1, top: 5, left: 5 }}>TOGGLE NEW BUILDINGS</button>
        </div>
    )
}

export default CesiumDemo;
