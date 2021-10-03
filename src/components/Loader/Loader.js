const Loader = () => {
  const circleCommonClasses = 'h-10 w-10 bg-red-500   rounded-full';

  return (
    <div className="flex fixed left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <div className={`${circleCommonClasses} mr-1 animate-bounce`} />
      <div className={`${circleCommonClasses} mr-1 animate-bounce200`} />
      <div className={`${circleCommonClasses} animate-bounce400`} />
    </div>
  );
};

export default Loader;
