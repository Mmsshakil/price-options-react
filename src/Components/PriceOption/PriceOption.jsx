import Features from "../Features/Features";


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-slate-600 rounded-lg text-white p-3 flex flex-col">
            <h2 className="text-center">
                <span className="text-5xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>

            <h2 className="text-4xl text-center">{name}</h2>

            {/* here i use flex grow to fix the button position */}
            <div className="flex-grow">
                {
                    // here idx and key is optional just use for an error as like proptype
                    features.map((feature, idx) => <Features key={idx} feature={feature}></Features>)
                }
            </div>

            <button className="bg-sky-400 w-full py-2 font-bold text-lg mt-3 rounded-lg hover:bg-sky-800">Buy Now</button>

        </div>
    );
};

export default PriceOption;