import type { Place } from "../api/Place";
interface MapProps {
  place: Place | null;
}
function Map({ place }: MapProps) {
  return <div>Map</div>;
}

export default Map;
