'use client';

import Image from 'next/image';
import errorIcon from './error.png';

export default () => {
  return (
    <div className="py-9 bg-gray-200 flex flex-col justify-center items-center">
      <Image src={errorIcon} alt="error" className="w-56 mb-8" />
      <div className="bg-white px-9 py-14 shadow rounded">
        <h3 className="text-3xl font-bold">Well, this is embarrassing</h3>
        <p className="text-reg font-bold">
          Something went wrong. Try again later.
        </p>
        <p className="mt-6 text-sm font-light">Error Code: 500</p>
      </div>
    </div>
  );
};
