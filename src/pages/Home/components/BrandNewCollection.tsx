const BrandNewCollection = () => {
  return (
    <section className="mx-auto max-w-6xl py-10 lg:py-20 lg:px-0 px-4">
      <div className="flex rounded-2xl relative bg-primary items-center justify-center h-80 lg:h-106">
        <h2 className=" text-4xl lg:text-8xl text-white font-semibold">
          Brand New Collection
        </h2>
        <div className="absolute  top-0">
          <div className="absolute hover:text-accent hover:font-bold top-20 lg:top-32 animate-pulse right-14 lg:right-22 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            1
          </div>
          <div className="absolute hover:text-accent hover:font-bold top-36 lg:top-48 animate-pulse right-20 lg:right-28 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            2
          </div>
          <div className="absolute hover:text-accent hover:font-bold top-50 lg:top-70 animate-pulse right-30 lg:right-43 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            3
          </div>
          <div className="absolute hover:text-accent hover:font-bold bottom-2 animate-pulse left-10 lg:left-14 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            4
          </div>
          <img
            className="object-cover h-80 lg:h-106 "
            src="https://ik.imagekit.io/harshdev/image-to-url/model-image.png_iqnPQq7ag.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BrandNewCollection;
