import { PrismaClient } from '@prisma/client';
import Link from 'next/link';

import Price from '../common/Price';
import SearchForm from '../common/Search';

const getRestaurantByCity = async (city: string) => {
  const prisma = new PrismaClient();
  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase(),
        },
      },
    },
    select: {
      id: true,
      name: true,
      slug: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
    },
  });
};

const Search = async ({ searchParams }: any) => {
  const restaurants = await getRestaurantByCity(searchParams.city);

  return (
    <div>
      <SearchForm />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        {/* SEARCH SIDE BAR */}
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            <p className="font-light text-reg">Toronto</p>
            <p className="font-light text-reg">Ottawa</p>
            <p className="font-light text-reg">Montreal</p>
            <p className="font-light text-reg">Hamilton</p>
            <p className="font-light text-reg">Kingston</p>
            <p className="font-light text-reg">Niagara</p>
          </div>
          <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Cuisine</h1>
            <p className="font-light text-reg">Mexican</p>
            <p className="font-light text-reg">Italian</p>
            <p className="font-light text-reg">Chinese</p>
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              <button className="border w-full text-reg font-light rounded-l p-2">
                $
              </button>
              <button className="border-r border-t border-b w-full text-reg font-light p-2">
                $$
              </button>
              <button className="border-r border-t border-b w-full text-reg font-light p-2 rounded-r">
                $$$
              </button>
            </div>
          </div>
        </div>
        <div className="w-5/6 ml-8">
          {!restaurants.length && 'No restaurant found in this location.'}
          {restaurants.map(
            ({ name, main_image, price, location, cuisine, slug }) => (
              <div className="border-b flex pb-5">
                <img src={main_image} className="w-44 rounded" />
                <div className="pl-5">
                  <h2 className="text-3xl">{name}</h2>
                  <div className="flex items-start">
                    <div className="flex mb-2">*****</div>
                    <p className="ml-2 text-sm">Awesome</p>
                  </div>
                  <div className="mb-9">
                    <div className="font-light flex text-reg">
                      <Price price={price} />
                      <p className="mr-4">{cuisine.name}</p>
                      <p className="mr-4">{location.name}</p>
                    </div>
                  </div>
                  <div className="text-red-600">
                    <Link href={`/restaurant/${slug}`}>
                      View more information
                    </Link>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Search;
