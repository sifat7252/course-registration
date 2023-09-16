

const carts = ({selectedCards, totalCredit, totalRemainingCredit, totalPrize}) => {
    // console.log(selectedCards)
    

     
    return (
        <div className="p-6 bg-slate-200  gap-4 rounded-lg mt-4 mx-2">
            <div className="">
            <h3 className="remaining-time font-bold text-lg text-blue-600">Credit Hour Remaining {totalRemainingCredit} hr</h3>
            <hr className=" border-1 border-gray-400 m-2"/>
            </div>
            <div className="">
            <h2 className="course-name font-bold text-lg mb-3">Course Name</h2>
            <ul className="list-decimal list-inside">
            {
                selectedCards.map((card, idx) => (
                   <div key={idx} >
                    <li className="text-sm text-gray-500 font-semibold ">{card.course_name}</li>
                   </div>                    
                ))
            }
            </ul>
            <hr className=" border-1 border-gray-400 m-3" />
            </div>
            <div className="">
            <h2 className="total-credit-hour font-medium text-base">Total Credit Hour : {totalCredit} hr</h2>
            <hr className=" border-1 border-gray-400 m-2" />
            </div>
            <div className="">
            <h3 className="total-price font-semibold text-">Total Price : {totalPrize} $</h3>
            </div>
        </div>
    );
};

export default carts;