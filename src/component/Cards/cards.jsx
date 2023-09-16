import { useEffect } from "react";
import { useState } from "react";
import Carts from '../Carts/carts';

function Cards() {
    const [allCards, setAllCards] = useState([]);
    const [selectedCards, setSelectedCards] = useState([]);
    const [totalCredit, setTotalCredit] = useState(0);
    const [totalRemainingCredit, setTotalRemainingCredit] = useState(0);
    const [totalPrize, setTotalPrize] = useState(0);

    useEffect(() => {
        fetch('course-data.json')
            .then(res => res.json())
            .then(data => setAllCards(data));
    }, []);

    const handleSelectBtn = (card) => {
        // console.log(card)
        const isExist = selectedCards.find((item)=> item.id == card.id );

        let totalCredit = card.credit;
        let totalPrize = card.prize;
        if (isExist) {
            return alert ('Already added this course !!!');
        }
        else{
            selectedCards.forEach((item)=> {
                
                totalCredit = totalCredit + item.credit;
                totalPrize = totalPrize + item.prize;
            })
            // console.log(totalPrize);
            const totalRemainingCredit = 20 - totalCredit;
            if (totalCredit > 20) {
                return alert ("Oops !!! You haven't enough remaining hour !");
            }
            else {
                setTotalCredit(totalCredit);
                setTotalRemainingCredit(totalRemainingCredit);
                // console.log(totalCredit);
                setSelectedCards([...selectedCards, card]);
                setTotalPrize(totalPrize);
            }
           
        }
        // console.log(selectedCards)
    };
    // console.log(selectedCards);


    return (
        <div className="flex">
            <div className="cards-container w-9/12 grid grid-cols-3 gap-3 text-center items-center mt-4  rounded-lg">
                {allCards.map((card) => (

                    <div key={card.id} className="card h-80  border  gap-4 rounded-lg p-2 bg-slate-200 ">

                        <div className="cover-image w-full">
                            <img src={card.cover_img} alt="" />
                        </div>
                        <h2 className="course-tittle text-black font-semibold text-lg my-1">{card.course_name}</h2>
                        <p className="course-details text-sm text-slate-600 font-normal mb-1 ">{card.course_details}</p>
                        <div className="prize-credit flex justify-evenly text-base text-slate-950 font-semibold mb-2">
                            <h2>Prize: {card.prize}$ </h2>
                            <img src="" alt="" className="bookmark-icon" />
                            <h2 className="credit">Credit: {card.credit}hr</h2>
                        </div>
                        <button onClick={() => handleSelectBtn(card)} className="select-btn w-full bg-blue-600 text-white rounded-lg my-2">Select</button>

                    </div>
                ))}

            </div>
            <div className="carts-container w-3/12 ">
                <Carts 
                selectedCards={selectedCards}
                totalCredit={totalCredit}
                totalRemainingCredit={totalRemainingCredit}
                totalPrize={totalPrize}>                    
                </Carts>
            </div>
        </div>
    );
}

export default Cards;