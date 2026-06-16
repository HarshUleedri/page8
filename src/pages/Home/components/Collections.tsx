import { motion } from "motion/react";

const Collections = () => {
  const collection: {
    name: string;
    price: number;
    image: string;
    modelImage: string;
  }[] = [
    {
      name: "Pendant Diamond",
      price: 13000,
      image:
        "https://ik.imagekit.io/harshdev/image-to-url/collection1.png_YBqYUZ5li.png",
      modelImage:
        "https://ik.imagekit.io/harshdev/image-to-url/collection2.png_VXAw9Ac76.png",
    },
    {
      name: "Ring Diamond",
      price: 13000,
      image:
        "https://ik.imagekit.io/harshdev/image-to-url/collection3.png_jy7Dq-ya_.png",
      modelImage:
        "https://ik.imagekit.io/harshdev/image-to-url/collection4.png_J5ezeYxAPp.png",
    },
    {
      name: "Neckless Diamond",
      price: 13000,
      image:
        "https://ik.imagekit.io/harshdev/image-to-url/collection5.png_MK3SGvtly.png",
      modelImage:
        "https://ik.imagekit.io/harshdev/image-to-url/collection6.png_WViQ_cj1y.png",
    },
    {
      name: "Earing Diamond",
      price: 13000,
      image:
        "https://ik.imagekit.io/harshdev/image-to-url/collection7.png_VW1t3YrrC.png",
      modelImage:
        "https://ik.imagekit.io/harshdev/image-to-url/collection8.png_5GPzxr-hm.png",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8 }}
      className="mx-auto max-w-6xl px-4 lg:px-0 lg:py-0 my-40"
    >
      <h2 className="text-5xl font-semibold mb-4 text-accent">
        New Elegant Collection
      </h2>
      <p className="lg:w-3/5 mb-12">
        Discover the charm of modern elegance. Our latest collection blends
        timeless design with a touch of contemporary flair made to elevate your
        everyday sparkle.
      </p>
      <div className="grid grid-cols-1 gap-12 lg:gap-6 lg:grid-cols-4 ">
        {collection.map((item, idx) => (
          <div className="group relative space-y-4 " key={idx}>
            <div className="w-full">
              <img
                className=" object-cover absolute transition-all duration-700 ease-in-out group-hover:opacity-100 opacity-0"
                src={item.modelImage}
                alt={item.name}
              />
              <img
                className="group-hover:opacity-0  w-full object-cover transition-all duration-700 ease-in-out opacity-100 "
                src={item.image}
                alt={item.name}
              />
            </div>
            <div className="">
              <h3 className="font-semibold text-xl text-accent">{item.name}</h3>
              <div>
                <p className="text-sm font-semibold ">
                  Price: <span className="font-heading ">{item.price}</span>
                </p>
              </div>
            </div>
            <button className="w-full py-2 font-medium rounded-sm text-secondary text-sm  bg-accent">
              Buy now
            </button>
          </div>
        ))}
      </div>
    </motion.section>
  );
};

export default Collections;
