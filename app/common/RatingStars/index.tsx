import Image from 'next/image';

import emptyStar from './empty-star.png';
import fullStart from './full-star.png';
import halfStart from './half-star.png';

export default ({ avgRating }: { avgRating: number }) => {
  const starts = [];

  for (let i: number = 0; i < Math.ceil(avgRating); i++) {
    if (avgRating - i >= 1) {
      starts.push(fullStart);
      continue;
    }

    starts.push(halfStart);
  }

  for (let i: number = Math.ceil(avgRating); i < 5; i++) {
    starts.push(emptyStar);
  }

  return (
    <div className="flex items-center">
      {starts.map(star => (
        <Image src={star} alt="" className="w-4 h-4 mr-1" />
      ))}
    </div>
  );
};
