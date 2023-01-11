import React, {useState} from "react";
import Card from "./Card";
import img1 from "../../../assets/card/img1.png"
import img2 from "../../../assets/card/img2.png"
import img3 from "../../../assets/card/img3.png"
import img4 from "../../../assets/card/img4.png"
import img5 from "../../../assets/card/img5.png"
import img6 from "../../../assets/card/img6.png"
import markFire from "../../../assets/fire.png"
import markLike from "../../../assets/like1.png"
import markStar from "../../../assets/star.png"

const data = [
    {
        id: 1,
        img: img1,
        mark: markFire,
        markBg: "#FFD1D1",
        path: "/burger",
        title: "Burger Wanted",
        description: "Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade",
        price: "35"
    },
    {
        id: 2,
        img: img2,
        mark: markLike,
        markBg: "#FFC10729",
        path: "/salads",
        title: "Butter Chciken",
        description: "Reis, Sous-vide Chicken, Penaut Satay, Babyspian",
        price: "55"
    },
    {
        id: 3,
        img: img3,
        mark: null,
        markBg: null,
        path: "/salads",
        title: "Hi, Salmon",
        description: "Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.",
        price: "70"
    },
    {
        id: 4,
        img: img4,
        mark: null,
        markBg: null,
        path: "/burger",
        title: "Burger",
        description: "Rels, Zoodies, Garnein Sesasam Dessigns, Redeshchein, Avocade",
        price: "20"
    },
    {
        id: 5,
        img: img5,
        mark: null,
        markBg: null,
        path: "/salads",
        title: "Butter",
        description: "Reis, Sous-vide Chicken, Penaut Satay, Babyspian",
        price: "15"
    },
    {
        id: 6,
        img: img6,
        mark: markStar,
        markBg: "#FFC10729",
        path: "/salads",
        title: "Salmon",
        description: "Rels, Zoodies, Garnein Dressings, Avacode Edanmame, Maris.",
        price: "50"
    },
]

const Cards = ({path}) => {
    const renderCards = (card) => {
      switch (path) {
          case "/home/all":
              return(<Card key={card.id} {...card}/>)
          case "/home"+card.path:
              return(<Card key={card.id} {...card}/>)
          default:
              break;
      }
    }
    return (
        <div className="cards">
            {data.map((card) => renderCards(card))}
        </div>
    )
}
export default Cards