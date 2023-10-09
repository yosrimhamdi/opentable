import Link from 'next/link';

export default ({
  name,
  searchParams,
  className,
  focus,
}: {
  name: string;
  searchParams: any;
  className: string;
  focus: boolean;
}) => {
  return (
    <Link
      href={{
        pathname: '/search',
        query: {
          ...searchParams,
        },
      }}
      className={`${className} ${focus ? 'text-red-600' : ''}`}
    >
      {name}
    </Link>
  );
};
