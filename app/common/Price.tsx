import { PRICE } from '@prisma/client';

export default ({ price }: { price: PRICE }) => {
  const renderedPrice = () => {
    if (price === 'CHEAP') {
      return (
        <>
          <span>$</span>
          <span className="text-gray-400">$$$</span>
        </>
      );
    }

    if (price === 'REGULAR') {
      return (
        <>
          <span>$$</span>
          <span className="text-gray-400">$$</span>
        </>
      );
    }

    return <span>$$$$</span>;
  };

  return <p className="mr-3">{renderedPrice()}</p>;
};
