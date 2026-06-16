import { motion } from "motion/react";
const Hero = () => {
  return (
    <section className=" relative h-screen w-full overflow-hidden">
      <div className="flex items-center relative justify-center h-full overflow-hidden w-full ">
        <div className="flex gap-6 lg:gap-18  ">
          <div className="relative mt-54 shrink-0">
            <motion.h2
              style={{ transformOrigin: "center" }}
              initial={{
                opacity: 0,
                y: 50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeIn",
              }}
              className="absolute whitespace-nowrap font-semibold text-accent text-2xl lg:text-5xl -top-10 lg:-top-18 left-6 lg:left-1/2 -translate-x-1/2 mix-blend-plus-lighter z-20"
            >
              Every Moment
            </motion.h2>
            <motion.svg
              initial={{
                opacity: 0,
                y: 200,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeIn",
              }}
              width="24"
              height="410"
              viewBox="0 0 24 517"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line
                x1="11.5"
                y1="516.017"
                x2="11.5"
                y2="36.0001"
                stroke="#39472B"
              />
              <g clip-path="url(#clip0_367_53)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3801 8.64999L12.0001 0.985992L8.62012 8.64999L0.953125 12.03L8.62012 15.41L12.0001 23.078L15.3801 15.41L23.0471 12.03L15.3801 8.64999Z"
                  fill="#39472B"
                />
              </g>
              <defs>
                <clipPath id="clip0_367_53">
                  <rect width="24" height="24" fill="white" />
                </clipPath>
              </defs>
            </motion.svg>
          </div>
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              duration: 1,
            }}
            className="rounded-t-full overflow-hidden rounded-b-xl h-80 lg:h-96 w-44 lg:w-58  mt-20 shrink-0"
          >
            <motion.img
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                duration: 1.5,
              }}
              className="object-cover h-full w-full"
              src={
                "https://ik.imagekit.io/harshdev/image-to-url/heroImage.png_TkH1021uu.png"
              }
              alt="image"
            />
          </motion.div>
          <div className="relative h-fit shrink-0">
            <motion.svg
              initial={{
                opacity: 0,
                y: -200,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeIn",
              }}
              width="24"
              height="410"
              viewBox="0 0 24 516"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <line x1="11.5" y1="480.017" x2="11.5" stroke="#39472B" />
              <g clip-path="url(#clip0_370_56)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M15.3801 500.658L12.0001 492.994L8.62012 500.658L0.953125 504.038L8.62012 507.418L12.0001 515.086L15.3801 507.418L23.0471 504.038L15.3801 500.658Z"
                  fill="#39472B"
                />
              </g>
              <defs>
                <clipPath id="clip0_370_56">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0 492.008)"
                  />
                </clipPath>
              </defs>
            </motion.svg>
            <motion.h2
              style={{ transformOrigin: "center" }}
              initial={{
                opacity: 0,
                y: -50,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                ease: "easeIn",
              }}
              className="absolute whitespace-nowrap font-semibold text-accent text-2xl lg:text-5xl -bottom-10 lg:-bottom-28  lg:left-1/2 -translate-x-1/2 "
            >
              Deserves Sparkle
            </motion.h2>
          </div>
        </div>
        <div className="absolute  size-280 -z-10 rounded-full border border-primary/20 -top-160 -right-40  "></div>
      </div>

      {/* <div className="absolute size-96 rounded-full bg-primary/40 top-0 right-4 blur-[110px] "></div>

      <div className="absolute size-96 rounded-full bg-primary/40 -bottom-10 blur-[110px] left-4    "></div> */}
    </section>
  );
};

export default Hero;
