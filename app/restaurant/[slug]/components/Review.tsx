import { User } from '@prisma/client';

import RatingStars from '@/app/common/RatingStars';
import getAvgReviewRating from '@/utils/getAvgReviewRating';

export default ({ review }: { review: { text: string; user: User } }) => {
  const {
    user: { first_name, last_name },
    text,
  } = review;

  return (
    <div className="border-b pb-7 mb-7">
      <div className="flex">
        <div className="w-1/6 flex flex-col items-center">
          <div className="rounded-full bg-blue-400 w-16 h-16 flex items-center justify-center">
            <h2 className="text-white text-2xl capitalize">
              {first_name.charAt(0)}
              {last_name.charAt(0)}
            </h2>
          </div>
          <p className="text-center">
            {first_name} {last_name}
          </p>
        </div>
        <div className="ml-10 w-5/6">
          <div className="flex items-center">
            <div className="flex mr-5">
              <RatingStars avgRating={getAvgReviewRating([review])} />
            </div>
          </div>
          <div className="mt-5">
            <p className="text-lg font-light">{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
