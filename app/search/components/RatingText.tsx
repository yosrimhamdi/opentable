export default ({ avgRating }: { avgRating: number }) => {
  const renderedText = () => {
    if (avgRating < 1) {
      return 'fair';
    }

    if (avgRating < 3) {
      return 'good';
    }

    return 'awesome';
  };
  return <p className="ml-2 text-sm">{renderedText()}</p>;
};
