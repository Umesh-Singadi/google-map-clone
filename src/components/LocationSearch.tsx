import type { Place } from "../api/Place";
import { useState } from "react";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTerm("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label className="font-bold" htmlFor="term">
          Search
        </label>
        <input
          className="border border-gray-300 rounded-md shadow-sm focus:border-indigo-500 px-4 py-2 w-full"
          type="text"
          id="term"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <button className="border py-1 px-3 m-3">Submit</button>
      </form>
    </div>
  );
}

export default LocationSearch;
