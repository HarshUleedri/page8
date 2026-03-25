const BrandNewCollection = () => {
  return (
    <section className="mx-auto max-w-6xl py-20">
      <div className="flex rounded-2xl relative bg-primary items-center justify-center h-106">
        <h2 className="text-8xl text-white font-semibold">
          Brand New Collection
        </h2>
        <div className="absolute  top-0">
          <div className="absolute hover:text-accent hover:font-bold top-32 animate-pulse right-22 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            1
          </div>
          <div className="absolute hover:text-accent hover:font-bold top-48 animate-pulse right-28 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            2
          </div>
          <div className="absolute hover:text-accent hover:font-bold top-70 animate-pulse right-43 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            3
          </div>
          <div className="absolute hover:text-accent hover:font-bold bottom-2 animate-pulse left-14 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            4
          </div>
          <img
            className="object-cover h-106 "
            src="https://ik.imagekit.io/harshdev/image-to-url/model-image.png_iqnPQq7ag.png"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default BrandNewCollection;
