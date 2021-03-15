import React from "react";
import uuid from "react-uuid";

const Guarantee = () => {
  const elements = [
    {
      id: uuid(),
      img: "/images/f-delivery.png",
      title: "Free shipping",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum aliquam beatae eligendi ad qui magni mollitia quaerat omnis",
    },
    {
      id: uuid(),
      img: "/images/coin.png",
      title: "100% Mondey back",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum aliquam beatae eligendi ad qui magni mollitia quaerat omnis",
    },
    {
      id: uuid(),
      img: "/images/chat.png",
      title: "Online support 24/7",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit ipsum aliquam beatae eligendi ad qui magni mollitia quaerat omnis",
    },
  ];
  return (
    <div className="elementCover">
      {elements.map((element) => (
        <div className="element" key={element.id}>
          <img className="img" src={element.img} alt="" />
          <h2>{element.title}</h2>
          <p>{element.description}</p>
        </div>
      ))}
    </div>
  );
};
export default Guarantee;
