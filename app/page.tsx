import { Cuisine, Location, PRICE, PrismaClient } from '@prisma/client';

import Search from './components/Search';
import Restaurant from './components/Restaurant';

export interface RestaurantType {
  id: number;
  name: string;
  slug: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  price: PRICE;
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
    },
  });
};

export default async () => {
  const restaurants = await getRestaurants();

  return (
    <div>
      <div className="h-64 bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
        <div className="text-center mt-10">
          <h1 className="text-white text-5xl font-bold mb-2">
            Find your table for any occasion
          </h1>
          <Search />
        </div>
      </div>
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {restaurants.map(restaurant => (
          <Restaurant key={restaurant.id} restaurant={restaurant} />
        ))}
      </div>
    </div>
  );
};
