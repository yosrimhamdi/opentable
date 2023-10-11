import Search from './common/Search';

export default () => {
  return (
    <div>
      <Search />
      <div className="py-3 px-36 mt-10 flex flex-wrap justify-center">
        {[...Array(15)].map((_, id) => (
          <div
            key={id}
            className="animate-pulse bg-slate-200 w-64 h-72 rounded overflow-hidden border cursor-pointer m-3"
          ></div>
        ))}
      </div>
    </div>
  );
};
