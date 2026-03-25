import { Link } from "react-router";

const Footer = () => {
  const usefullLinks: {
    heading: string;
    children: { link: string; name: string }[];
  }[] = [
    {
      heading: "Support ",
      children: [
        {
          link: "shipping-and-return-policy",
          name: "Shipping & Return Policy",
        },
        {
          link: "track-your-order",
          name: "Track Your Order",
        },
        {
          link: " store-information",
          name: "Store Information",
        },
        {
          link: "gift-card",
          name: "Gift Card",
        },
      ],
    },

    {
      heading: "Service ",
      children: [
        {
          link: "faq",
          name: "Frequently  Asked Question",
        },
        {
          link: "request-repair",
          name: "Request Repair",
        },
        {
          link: "personalization",
          name: "Personalization",
        },
        {
          link: "business-account",
          name: "Business Account",
        },
      ],
    },
    {
      heading: "About",
      children: [
        {
          link: "sustaninability",
          name: "Sustaninability",
        },
        {
          link: "co-foundation",
          name: "Co Foundation",
        },
        {
          link: "contact-us",
          name: "Contact Us",
        },
        {
          link: "careers",
          name: "Careers",
        },
        {
          link: "privacy-policy",
          name: "Privacy Policy",
        },
        {
          link: "terms-and-conditions",
          name: "Terms & Conditions",
        },
      ],
    },
  ];

  return (
    <footer className="  bg-secondary">
      <div className="mx-auto  max-w-7xl py-20">
        <div className="flex justify-between">
          <div className="lg:w-1/4">
            <div className="text-3xl text-accent font-bold font-heading">
              Diamond Forest
            </div>
            <p className="text-base">
              Lorem ipsum dolor sit amet consectetur .Lorem ipsum dolor sit amet
              consectetur. Lorem ipsum dolor sit amet consectetur.
            </p>
          </div>
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {usefullLinks.map((item, idx) => (
              <div key={idx}>
                <h4 className="mb-4 text-accent font-heading font-bold text-2xl">
                  {item.heading}
                </h4>
                <div className="flex flex-col gap-2">
                  {item.children.map((el, idx) => (
                    <Link className="text-lg " to={el.link} key={idx}>
                      {el.name}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <hr className="mt-8  mb-2" />
        <p className="text-center text-base">
          © 2025 Forest Diamand. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
