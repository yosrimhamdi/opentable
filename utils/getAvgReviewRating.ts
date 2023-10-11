import { ReviewType } from '@/app/restaurant/[slug]/page';

export default (reviews: ReviewType[]): number => {
  if (!reviews.length) {
    return 0;
  }

  const avg: number =
    reviews.reduce((sum: number, review: ReviewType) => {
      return sum + review.rating;
    }, 0) / reviews.length;

  return Number(avg.toFixed(1));
};
