import { Menu, PrismaClient } from '@prisma/client';

import NavBar from '../components/NavBar';

const getRestaurantMenu = async (slug: string): Promise<Menu[]> => {
  const prisma = new PrismaClient();
  const restaurant = await prisma.restaurant.findUnique({
    where: { slug },
    select: { Menu: true },
  });

  if (!restaurant) {
    throw new Error('404 page');
  }

  return restaurant.Menu;
};

const RestaurantMenu = async ({ params }: { params: { slug: string } }) => {
  const menu = await getRestaurantMenu(params.slug);

  return (
    <>
      <div className="bg-white w-[100%] rounded p-3 shadow">
        <NavBar slug={params.slug} />
        <main className="bg-white mt-5">
          <div>
            <div className="mt-4 pb-1 mb-1">
              <h1 className="font-bold text-4xl">Menu</h1>
            </div>
            <div className="flex flex-wrap justify-between">
              {!menu.length && 'No menu.'}
              {menu.map(({ name, description, price }) => (
                <div className=" border rounded p-3 w-[49%] mb-3">
                  <h3 className="font-bold text-lg">{name}</h3>
                  <p className="font-light mt-1 text-sm">{description}</p>
                  <p className="mt-7">{price}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
        {/* MENU */}
      </div>
    </>
  );
};

export default RestaurantMenu;
