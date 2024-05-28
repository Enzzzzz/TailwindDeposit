import { useState } from "react";
import "./firstCard.css";
import korea from "/paralaxCards/seoul.jpg";
import russia from "/paralaxCards/Elbrus.jpeg";
import china from "/paralaxCards/shangai.jpeg";
import africa from "/paralaxCards/serengeti.jpeg";
import japan from "/paralaxCards/tokyo.jpg";

const items = [
    {
      header: "China",
      image: china,
      text: `Shanghai`,
    },
  {
    header: "Russia",
    image: russia,
    text: `Elbrus Mountain`,
  },

  {
    header: "South Korea",
    image: korea,
    text: `Seoul`,
  },

  {
    header: "South Africa",
    image: africa,
    text: `Serengeti`,
  },
  {
    header: "Japan",
    image: japan,
    text: `Tokyo`,
  },
];

export const FirstCard = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <div className="flex gap-1 sm:gap-3 md:gap-6 lg:gap-14 cursor-pointer font-poppins relative z-[2]">
        {items.map((item, index) => {
          const isActive = active === index ? "active" : "";
          return (
            <div
              key={item.image}
              className={`image-accordion-item ${isActive}`}
              onClick={() => handleToggle(index)}
            >
              <img src={item.image} />
              <div className="content">
            
                <div>
                  <h2 className="text-[18px] sm:text-[24px] m-0 text-white/95 ">{item.header}</h2>
                  <p className="text-[18px] sm:text-[24px] m-0 text-gray-300/65">{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
