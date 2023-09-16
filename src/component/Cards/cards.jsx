import { useEffect } from "react";
import { useState } from "react";

const Cards = () => {
    const [cards, setCards] = useState([]);

    useEffect( () => {
        fetch('course-data.json')
        .then (res => res.json())
        .then (data => setCards(data))
    }, [])


    return (
        <div className="flex">
            <div className="cards-container w-9/12 grid grid-cols-3 gap-3 items-center">
                {
                    cards.map((card) => (
                        <div key={card.id} className="card h-80  border border-blue-700">
                    <div className="cover-image w-full">
                        <img src={card.cover_img} alt="" />
                    </div>
                    <h2 className="course-tittle">{card.course_name}</h2>
                    <p className="course-details">{card.course_details}</p>
                    <div className="prize-credit flex justify-evenly">
                        <h2>Prize: {card.prize}$ </h2>
                        <img src="" alt="" className="bookmark-icon" />
                        <h2 className="credit">Credit: {card.credit}hr</h2>
                    </div>
                    <button className="select-btn w-full bg-blue-600 text-white">Select</button>

                </div>
                    ))
                }

            </div>
            <div className="carts-container w-3/12">
                <h1>this is cart area</h1>
            </div>
        </div>
    );
};

export default Cards;