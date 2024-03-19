import type { Place } from "../api/Place";
import { Fragment, useState } from "react";
import { search } from "../api/search";

interface LocationSearchProps {
  onPlaceClick: (place: Place) => void;
}
function LocationSearch({ onPlaceClick }: LocationSearchProps) {
  const [term, setTerm] = useState("");
  const [places, setPlaces] = useState<Place[]>([]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const results = await search(term);
    setPlaces(results);
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
      <h1 className="font-bold t-6">Found locations</h1>
      <div className="grid grid-cols-[1fr_40px] gap-2 mt-2 items-center ">
        {places.map((place) => {
          return (
            <Fragment key={place.id}>
              <p className="text-sm">{place.name}</p>
              <button
                onClick={() => onPlaceClick(place)}
                className="bg-blue-500 text-xs text-white font-bold p-1 rounded"
              >
                Go
              </button>
            </Fragment>
          );
        })}
      </div>
    </div>
  );
}

export default LocationSearch;
