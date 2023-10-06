'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Home = () => {
  const router = useRouter();
  const [term, setTerm] = useState('');

  const onFormSubmit = (e: any) => {
    e.preventDefault();

    if (term) {
      router.push(`/search/${term}`);
    }
  };

  return (
    <div>
      {/* HEADER */}
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="text-center mt-10">
          <h1 className="text-white text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>
          {/* SEARCH BAR */}
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
          {/* SEARCH BAR */}
        </div>
      </div>
      {/* HEADER */} {/* CARDS */}
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {/* CARD */}
        <Link href="/restaurant/test">
          <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
            <img
              src="https://resizer.otstatic.com/v2/photos/wide-huge/2/31852905.jpg"
              alt=""
              className="w-full h-36"
            />
            <div className="p-1">
              <h3 className="font-bold text-2xl mb-2">Milestones Grill</h3>
              <div className="flex items-start">
                <div className="flex mb-2">*****</div>
                <p className="ml-2">77 reviews</p>
              </div>
              <div className="flex text-reg font-light capitalize">
                <p className=" mr-3">Mexican</p>
                <p className="mr-3">$$$$</p>
                <p>Toronto</p>
              </div>
              <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
            </div>
          </div>
        </Link>
        {/* CARD */}
      </div>
      {/* CARDS */}
    </div>
  );
};

export default Home;
