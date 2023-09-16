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
        <div className="">
            <div className="cards-container">
                <div className="card">
                    <div className="cover-image">
                        <img src={cards.cover_img} alt="" />
                    </div>
                    <h2 className="course-tittle">{cards.course_name}</h2>
                    <p className="course-details">{cards.course_details}</p>
                    <div className="prize-credit flex justify-evenly">
                        <h2>Prize: {cards.prize} $ </h2>
                        <img src="" alt="" className="bookmark-icon" />
                        <h2 className="credit">Credit:{cards.credit}hr</h2>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default Cards;