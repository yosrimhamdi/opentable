import { Cuisine, Location, PRICE, PrismaClient, Review } from '@prisma/client';

import Search from './common/Search';
import Link from 'next/link';
import Price from './common/Price';
import RatingStars from './common/RatingStars';
import getAvgReviewRating from '@/utils/getAvgReviewRating';

export interface RestaurantType {
  id: number;
  name: string;
  slug: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
  description: string;
  images: string[];
  reviews: Review[];
}

const getRestaurants = async (): Promise<RestaurantType[]> => {
  const prisma = new PrismaClient();
  return await prisma.restaurant.findMany({
    select: {
      id: true,
      name: true,
      slug: true,
      main_image: true,
      cuisine: true,
      location: true,
      price: true,
      description: true,
      images: true,
      reviews: true,
    },
  });
};

export default async () => {
  const restaurants = await getRestaurants();

  return (
    <div>
      <Search />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map(
          ({ name, slug, main_image, price, location, cuisine, reviews }) => (
            <Link href={`/restaurant/${slug}`}>
              <div className="w-64 h-72 m-3 rounded overflow-hidden border cursor-pointer">
                <img src={main_image} alt="" className="w-full h-36" />
                <div className="p-1">
                  <h3 className="font-bold text-2xl mb-2">{name}</h3>
                  <div className="flex items-start">
                    <div className="flex mb-2">
                      <RatingStars avgRating={getAvgReviewRating(reviews)} />
                    </div>
                    <p className="ml-2">
                      {reviews.length} review{reviews.length > 1 && 's'}
                    </p>
                  </div>
                  <div className="flex text-reg font-light capitalize">
                    <p className=" mr-3">{location.name}</p>
                    <Price price={price} />
                    <p>{cuisine.name}</p>
                  </div>
                  <p className="text-sm mt-1 font-bold">Booked 3 times today</p>
                </div>
              </div>
            </Link>
          )
        )}
      </div>
    </div>
  );
};
