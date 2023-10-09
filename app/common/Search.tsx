'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const [location, setLocation] = useState('');

  const onFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (location) {
      router.push(`/search?location=${location}`);
    }
  };

  return (
    <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="text-center mt-10">
        <h1 className="text-white text-5xl font-bold mb-7">
          Find your table for any occasion
        </h1>
        <form
          onSubmit={onFormSubmit}
          className="text-left text-lg py-3 m-auto flex justify-center"
        >
          <input
            className="rounded  mr-3 p-2 w-[450px]"
            type="text"
            placeholder="State, city or town"
            onChange={e => setLocation(e.target.value)}
            value={location}
          />
          <button className="rounded bg-red-600 px-9 py-2 text-white">
            Let's go
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
