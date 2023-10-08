'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Search = () => {
  const router = useRouter();
  const [term, setTerm] = useState('');

  const onFormSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();

    if (term) {
      router.push(`/search/${term}`);
    }
  };

  return (
    <form
      onSubmit={onFormSubmit}
      className="text-left text-lg py-3 m-auto flex justify-center"
    >
      <input
        className="rounded  mr-3 p-2 w-[450px]"
        type="text"
        placeholder="State, city or town"
        onChange={e => setTerm(e.target.value)}
        value={term}
      />
      <button className="rounded bg-red-600 px-9 py-2 text-white">
        Let's go
      </button>
    </form>
  );
};

export default Search;
