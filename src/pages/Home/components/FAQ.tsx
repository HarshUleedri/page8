import { useState } from "react";

const FAQ = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const faqItems: { question: string; answer: string }[] = [
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
    {
      question: "What types of businesses do you work with ?",
      answer:
        " Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias officiis voluptatem nesciunt facilis iusto earum est facere, repellendus harum totam.",
    },
  ];

  return (
    <section className="mx-auto max-w-6xl px-4 py-40 lg:py-0 lg:px-0">
      <h2 className="text-5xl mb-16 text-accent font-semibold">
        Frequently Asked Question
      </h2>
      <div className="flex flex-col gap-12 lg:gap-0 lg:flex-row">
        <div className="lg:w-1/2 flex gap-8">
          <img
            className="rounded-md rounded-tr-[200px] h-fit "
            src="https://ik.imagekit.io/harshdev/image-to-url/model4.png_RUYlSDylP.png"
            alt="image"
          />

          <svg
            width="24"
            height="517"
            viewBox="0 0 24 517"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" hidden lg:block lg:mt-44 "
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
        <div className="lg:w-1/2">
          <div className="space-y-4 w-full">
            {faqItems.map((item, idx) => (
              <div
                className={`${currentIndex === idx ? "bg-primary text-secondary " : "bg-secondary"} rounded-md p-4 font-medium w-full`}
                onClick={() => setCurrentIndex(currentIndex === idx ? -1 : idx)}
                key={idx}
              >
                <div className="flex items-center justify-between w-full">
                  <h6 className="text-xl  font-semibold">{item.question}</h6>
                  {currentIndex === idx ? (
                    <button
                      className=""
                      onClick={(e) => {
                        e.stopPropagation();
                        setCurrentIndex(-1);
                      }}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className=" size-4 cursor-pointer lucide lucide-minus-icon lucide-minus"
                      >
                        <path d="M5 12h14" />
                      </svg>
                    </button>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className=" cursor-pointer size-4 lucide lucide-plus-icon lucide-plus"
                    >
                      <path d="M5 12h14" />
                      <path d="M12 5v14" />
                    </svg>
                  )}
                </div>

                {currentIndex === idx && (
                  <p className="text-sm text-secondary/50  font-light wrap-break-word">
                    {item.answer}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
