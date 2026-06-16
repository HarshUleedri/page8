import { motion } from "motion/react";
const BrandNewCollection = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-6xl py-10 lg:my-20 lg:px-0 px-4"
    >
      <div className="flex rounded-2xl relative bg-primary items-center justify-center h-80 lg:h-106">
        <h2 className=" text-4xl lg:text-8xl text-white font-semibold">
          Brand New Collection
        </h2>
        <div className="absolute  top-0">
          <div className="absolute hover:text-accent hover:font-bold top-20 lg:top-32  right-14 lg:right-22 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex font-bold items-center border group border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            1
            <div className="absolute -top-30 font-normal -right-20 bg-neutral-100 rounded shadow text-xs p-4 opacity-0 group-hover:opacity-100 duration-700 ease-in-out transition-opacity">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ratione!
            </div>
          </div>
          <div className="absolute hover:text-accent hover:font-bold top-36 lg:top-48  right-20 lg:right-28 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center font-bold border border-white/20 bg-white/10 backdrop-blur-xs justify-center group ">
            2
            <div className="absolute -top-1 font-normal -right-10 bg-neutral-100  rounded shadow text-xs p-2 opacity-0 group-hover:opacity-100 duration-700 ease-in-out transition-opacity">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ratione!
            </div>
          </div>
          <div className="absolute hover:text-accent hover:font-bold top-50 lg:top-70  right-30 lg:right-43 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm  flex items-center font-bold border border-white/20 bg-white/10 group backdrop-blur-xs justify-center ">
            3
            <div className="absolute -top-1 -right-10 bg-neutral-100  rounded shadow text-xs p-2 opacity-0 group-hover:opacity-100 duration-700 ease-in-out transition-opacity font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ratione!
            </div>
          </div>
          <div className="absolute hover:text-accent hover:font-bold bottom-2  left-10 lg:left-14 text-white hover:bg-white rounded-full min-w-8 h-8 text-sm flex items-center border group font-bold border-white/20 bg-white/10 backdrop-blur-xs justify-center ">
            4
            <div className="absolute -top-30 -right-10 bg-neutral-100  rounded shadow text-xs p-2 opacity-0 group-hover:opacity-100 duration-700 ease-in-out transition-opacity font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas,
              ratione!
            </div>
          </div>
          <img
            className="object-cover h-80 lg:h-106 "
            src="https://ik.imagekit.io/harshdev/image-to-url/model-image.png_iqnPQq7ag.png"
            alt=""
          />
        </div>
      </div>
    </motion.section>
  );
};

export default BrandNewCollection;
