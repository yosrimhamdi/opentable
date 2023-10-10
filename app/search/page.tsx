import { PRICE, PrismaClient } from '@prisma/client';
import Link from 'next/link';

import Price from '../common/Price';
import SearchForm from '../common/Search';
import CustomLink from './components/CustomLink';
import prices from './prices';
import RatingStars from '../common/RatingStars';
import getAvgReviewRating from '@/utils/getAvgReviewRating';
import RatingText from './components/RatingText';

interface SearchParamsType {
  location: string | undefined;
  cuisine: string | undefined;
  price: PRICE | undefined;
}

const prisma = new PrismaClient();

const getRestaurantByQuery = async ({
  location,
  cuisine,
  price,
}: SearchParamsType) => {
  const getWhereClause = () => {
    const where: any = {
      location: {
        name: {
          equals: location,
        },
      },
    };

    if (cuisine) {
      where.cuisine = {
        name: {
          equals: cuisine,
        },
      };
    }

    if (price) {
      where.price = {
        equals: price,
      };
    }

    return where;
  };

  return await prisma.restaurant.findMany({
    where: getWhereClause(),
    select: {
      id: true,
      name: true,
      slug: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      reviews: true,
    },
  });
};

const Search = async ({ searchParams }: { searchParams: SearchParamsType }) => {
  const { location, cuisine, price } = searchParams;

  const restaurants = await getRestaurantByQuery({ location, cuisine, price });
  const locations = await prisma.location.findMany();
  const cuisines = await prisma.cuisine.findMany();

  return (
    <div>
      <SearchForm />
      <div className="flex py-4 m-auto w-2/3 justify-between items-start">
        <div className="w-1/5">
          <div className="border-b pb-4">
            <h1 className="mb-2">Region</h1>
            {locations.map(({ name, id }) => (
              <CustomLink
                key={id}
                name={name}
                searchParams={{ ...searchParams, location: name }}
                className="font-light text-reg capitalize block"
                focus={location === name}
              />
            ))}
          </div>
          <div className="border-b pb-4 mt-3">
            <h1 className="mb-2">Cuisine</h1>
            {cuisines.map(({ name, id }) => (
              <CustomLink
                key={id}
                name={name}
                searchParams={{ ...searchParams, cuisine: name }}
                className="font-light text-reg capitalize block"
                focus={cuisine === name}
              />
            ))}
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex">
              {prices.map(({ label, price, id }) => (
                <CustomLink
                  key={id}
                  name={label}
                  searchParams={{ ...searchParams, price }}
                  className="border w-full text-reg font-light p-2 rounded-r"
                  focus={price === searchParams.price}
                />
              ))}
            </div>
            <Link href={`/search?location=${location}`} className="block mt-3">
              Reset
            </Link>
          </div>
        </div>
        <div className="w-5/6 ml-8">
          {!restaurants.length && 'No restaurant found in this location.'}
          {restaurants.map(
            ({ name, main_image, price, location, cuisine, slug, reviews }) => (
              <div className="border-b flex pb-5">
                <img src={main_image} className="w-44 rounded" />
                <div className="pl-5">
                  <h2 className="text-3xl">{name}</h2>
                  <div className="flex items-start">
                    <div className="flex mb-2">
                      <RatingStars avgRating={getAvgReviewRating(reviews)} />
                    </div>
                    <RatingText avgRating={getAvgReviewRating(reviews)} />
                  </div>
                  <div className="mb-9">
                    <div className="font-light flex text-reg">
                      <Price price={price} />
                      <p className="mr-4 capitalize">{cuisine.name}</p>
                      <p className="mr-4 capitalize">{location.name}</p>
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
