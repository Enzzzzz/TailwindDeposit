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
      text: `Shangai`,
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
    text: `Seoul`,
  },
];

export const FirstCard = () => {
  const [active, setActive] = useState(0);

  const handleToggle = (index) => setActive(index);

  return (
    <>
      <div
        className="image-accordion-background"
        style={{ backgroundImage: `url(${items[active].image})` }}
      ></div>
      <div className="image-accordion">
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
                  <h2>{item.header}</h2>
                  <p>{item.text}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
