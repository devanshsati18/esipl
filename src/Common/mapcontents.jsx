import React, { useEffect, useRef } from 'react';

const MapComponent = () => {
  const mapRef = useRef(null);
  const kmlLayerSrc = 'https://developers.google.com/maps/tutorials/kml/westcampus.kml';

  useEffect(() => {
    const initializeMap = () => {
      const map = new window.google.maps.Map(mapRef.current, {
        center: { lat: -19.257753, lng: 146.823688 },
        zoom: 2,
        mapTypeId: window.google.maps.MapTypeId.TERRAIN,
      });
      loadKmlLayer(kmlLayerSrc, map);
    };

    const loadKmlLayer = (src, map) => {
      const kmlLayer = new window.google.maps.KmlLayer(src, {
        suppressInfoWindows: true,
        preserveViewport: false,
        map: map,
      });
      window.google.maps.event.addListener(kmlLayer, 'click', (event) => {
        const content = event.featureData.infoWindowHtml;
        const testimonial = document.getElementById('capture');
        testimonial.innerHTML = content;
      });
    };

    const loadScript = () => {
      const script = document.createElement('script');
      script.src = `https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY`; // Replace with your API key
      script.onload = initializeMap;
      document.body.appendChild(script);
    };

    loadScript();
  }, []);

  return (
    <div>
      <div id="map-canvas" ref={mapRef} style={{ width: '500px', height: '400px' }}></div>
      <div id="capture"></div>
    </div>
  );
};

export default MapComponent;
