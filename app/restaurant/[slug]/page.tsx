import { PrismaClient, User } from '@prisma/client';
import { notFound } from 'next/navigation';

import NavBar from './components/NavBar';
import Review from './components/Review';
import getAvgReviewRating from '@/utils/getAvgReviewRating';
import RatingStars from '@/app/common/RatingStars';
import ReservationCard from './components/ReservationCard';

export interface ReviewType {
  id: number;
  text: string;
  rating: number;
  user: User;
}

interface Restaurant {
  id: number;
  name: string;
  description: string;
  images: string[];
  reviews: ReviewType[];
}

const getRestaurantBySlug = async (slug: string): Promise<Restaurant> => {
  const prisma = new PrismaClient();
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      id: true,
      name: true,
      description: true,
      images: true,
      open_time: true,
      close_time: true,
      reviews: {
        select: {
          id: true,
          text: true,
          rating: true,
          user: true,
        },
      },
    },
  });

  if (!restaurant) {
    notFound();
  }

  return restaurant;
};

export default async ({ params }: { params: { slug: string } }) => {
  const { name, description, images, reviews, open_time, close_time } =
    await getRestaurantBySlug(params.slug);

  return (
    <>
      <div className="bg-white w-[70%] rounded p-3 shadow">
        <NavBar slug={params.slug} />
        <div className="mt-4 border-b pb-6">
          <h1 className="font-bold text-6xl">{name}</h1>
        </div>
        <div className="flex items-end">
          <div className="ratings mt-2 flex items-center">
            <RatingStars avgRating={getAvgReviewRating(reviews)} />
            <p className="text-reg ml-3">{getAvgReviewRating(reviews)}</p>
          </div>
          <div>
            <p className="text-reg ml-4">{reviews.length} Reviews</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-lg font-light">{description}</p>
        </div>
        <div>
          <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
            {images.length} photos
          </h1>
          <div className="flex flex-wrap">
            {images.map(image => (
              <img className="w-56 h-44 mr-1 mb-1" src={image} />
            ))}
          </div>
        </div>
        {reviews.length && (
          <div>
            <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">
              What {reviews.length} people are saying
            </h1>
            <div>
              {reviews.map(review => (
                <Review key={review.id} review={review} />
              ))}
            </div>
          </div>
        )}
      </div>
      <ReservationCard openTime={open_time} closeTime={close_time} />
    </>
  );
};
