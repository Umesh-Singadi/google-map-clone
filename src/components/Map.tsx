import type { Place } from "../api/Place";
import "leaflet/dist/leaflet.css";
import { Map as LeafletMap } from "leaflet";
import { useEffect, useRef } from "react";
import { Marker, MapContainer, TileLayer } from "react-leaflet";

interface MapProps {
  place: Place | null;
}

function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[12.971599, 77.594566]}
      zoom={12}
      className="h-full"
    >
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"></TileLayer>
      {place && <Marker position={[place.latitude, place.longitude]}></Marker>}
    </MapContainer>
  );
}

export default Map;
