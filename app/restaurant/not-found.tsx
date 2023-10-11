'use client';

import Image from 'next/image';
import errorIcon from './error.png';

export default () => {
  return (
    <div className="bg-gray-200 flex flex-col justify-center items-center py-9">
      <Image src={errorIcon} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">No restaurant found.</p>
        <p className="mt-6 text-sm font-light">Error Code: 404</p>
      </div>
    </div>
  );
};
