import { Review } from '@prisma/client';

export default (reviews: Review[]): number => {
  if (!reviews.length) {
    return 0;
  }

  const avg: number =
    reviews.reduce((sum: number, review: Review) => {
      return sum + review.rating;
    }, 0) / reviews.length;

  return Number(avg.toFixed(1));
};
