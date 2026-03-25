const Hero = () => {
  return (
    <section className=" relative h-screen">
      <div className="flex items-center relative justify-center h-full overflow-x-hidden w-full">
        <div className="flex gap-18 ">
          <div className="relative mt-54">
            <h2 className="absolute whitespace-nowrap font-semibold text-accent text-5xl -top-18 left-1/2 -translate-x-1/2 mix-blend-plus-lighter ">
              Every Moment
            </h2>
            <svg
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
            </svg>
          </div>
          <div className="rounded-t-full overflow-hidden rounded-b-xl  h-96 w-58  mt-20 ">
            <img
              className="object-cover h-full w-full"
              src={
                "https://ik.imagekit.io/harshdev/image-to-url/heroImage.png_TkH1021uu.png"
              }
              alt="image"
            />
          </div>
          <div className="relative h-fit">
            <svg
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
            </svg>
            <h2 className="absolute whitespace-nowrap font-semibold text-accent text-5xl -bottom-28 left-1/2 -translate-x-1/2 ">
              Deserves Sparkle
            </h2>
          </div>
        </div>
        <div className="absolute size-280 -z-10 rounded-full border border-primary/20 -top-160 -right-40  "></div>
      </div>

      <div className="absolute size-96 rounded-full bg-primary/40 top-0 right-4 blur-[110px] "></div>

      <div className="absolute size-96 rounded-full bg-primary/40 -bottom-10 blur-[110px] left-4    "></div>
    </section>
  );
};

export default Hero;
