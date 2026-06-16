import { useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { motion } from "motion/react";

const Newletter = () => {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start end", "end start"],
  });
  const topX = useTransform(scrollYProgress, [0, 1], [-500, 150]);
  const bottomX = useTransform(scrollYProgress, [0, 1], [500, -150]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ amount: 0.1 }}
      transition={{ duration: 0.8 }}
      ref={cardContainerRef}
      className="mx-auto max-w-6xl  lg:py-40 flex flex-col gap-8 items-center"
    >
      <motion.svg
        width="799"
        height="24"
        viewBox="0 0 799 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block"
        style={{
          x: topX,
        }}
      >
        <g clip-path="url(#clip0_389_69)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M790.38 8.65008L787 0.986084L783.62 8.65008L775.953 12.0301L783.62 15.4101L787 23.0781L790.38 15.4101L798.047 12.0301L790.38 8.65008Z"
            fill="#39472B"
          />
        </g>
        <line y1="12.5" x2="756.001" y2="12.5" stroke="#39472B" />
        <defs>
          <clipPath id="clip0_389_69">
            <rect
              width="24"
              height="24"
              fill="white"
              transform="translate(775)"
            />
          </clipPath>
        </defs>
      </motion.svg>
      <div className="bg-secondary overflow-hidden relative w-full lg:rounded-full ">
        <img
          className="absolute left-0 hidden lg:block "
          src="https://ik.imagekit.io/harshdev/image-to-url/hand_jew.png_OQKc3RXQC.png"
          alt=""
        />

        <div className="flex items-center justify-center py-30    flex-col">
          <h2 className="lg:text-3xl font-heading font-semibold mb-8 text-accent">
            Newsletter
          </h2>
          <div className="flex gap-4 items-center">
            <input
              className="bg-white w-44 lg:w-full  px-6  py-1 rounded placeholder:font-heading placeholder:font-bold focus:outline-none "
              placeholder="Email"
            />
            <button className="bg-accent  px-6 text-base rounded text-secondary py-2">
              Subscribe
            </button>
          </div>
        </div>
        <img
          className="absolute bottom-0 right-16  hidden lg:block h-80"
          src="https://ik.imagekit.io/harshdev/image-to-url/model1.png_gx2pYNC8_.png"
          alt=""
        />
      </div>

      <motion.svg
        width="800"
        height="24"
        viewBox="0 0 800 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="hidden lg:block"
        style={{
          x: bottomX,
        }}
      >
        <g clip-path="url(#clip0_389_70)">
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.3801 8.65008L12.0001 0.986084L8.62012 8.65008L0.953125 12.0301L8.62012 15.4101L12.0001 23.0781L15.3801 15.4101L23.0471 12.0301L15.3801 8.65008Z"
            fill="#39472B"
          />
        </g>
        <line x1="44" y1="12.5" x2="800.001" y2="12.5" stroke="#39472B" />
        <defs>
          <clipPath id="clip0_389_70">
            <rect width="24" height="24" fill="white" />
          </clipPath>
        </defs>
      </motion.svg>
    </motion.section>
  );
};

export default Newletter;
