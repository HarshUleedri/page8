import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const WhereNatureMeets = () => {
  const cardContainerRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: cardContainerRef,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [100, -50]);
  return (
    <motion.section
      ref={cardContainerRef}
      initial={{ opacity: 0, y: 100, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      // viewport={{ amount: 0.1 }}
      transition={{ duration: 1 }}
      className="mx-auto max-w-6xl py-20 lg:py-40 px-4 lg:px-0 overflow-hidden"
    >
      <h2 className="lg:w-1/2 mb-16 pr-8  text-3xl lg:text-6xl text-accent font-semibold">
        Where Nature Meets Brilliance
      </h2>
      <div className="flex flex-col lg:flex-row  gap-28   ">
        <motion.div className="lg:w-1/2 h-66 relative bg-secondary rounded-2xl ">
          <img
            className="absolute top-0 right-15 lg:right-35"
            src="https://ik.imagekit.io/harshdev/image-to-url/img2.png_P-pS6Ziru.png"
            alt="image"
          />
        </motion.div>
        <motion.div style={{ y }} className="lg:w-1/2  overflow-hidden">
          <p className="wrap-break-word ">
            Inspired by the beauty of nature, we craft fine jeweler that blends
            organic elegance with timeless sparkle. Every piece tells a story of
            purity, passion. Lorem ipsum dolor sit amet consectetur .Lorem ipsum
            dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
          </p>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default WhereNatureMeets;
