import Features from "../Features/Features";


const PriceOption = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-slate-600 rounded-lg text-white p-3">
            <h2 className="text-center">
                <span className="text-5xl font-extrabold">{price}</span>
                <span className="text-2xl">/mon</span>
            </h2>

            <h2 className="text-4xl text-center">{name}</h2>
            {
                // here idx and key is optional just use for an error as like proptype
                features.map( (feature , idx) => <Features key={idx} feature={feature}></Features>)
            }

        </div>
    );
};

export default PriceOption;