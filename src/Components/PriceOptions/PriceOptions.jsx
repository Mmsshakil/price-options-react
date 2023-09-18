import PriceOption from "../PriceOption/PriceOption";


const PriceOptions = () => {

    const priceOptions = [
        {
            "id": 1,
            "name": "Treadmill",
            "features": [
                "Adjustable incline",
                "Heart rate monitor",
                "Built-in programs",
                "Foldable design",
                "Bluetooth connectivity"
            ],
            "price": 999.99
        },
        {
            "id": 2,
            "name": "Barbell Set",
            "features": [
                "Weights included",
                "Bench press station",
                "Squat rack",
                "Dumbbell holders",
                "Heavy-duty steel construction"
            ],
            "price": 799.95
        },
        {
            "id": 3,
            "name": "Elliptical Trainer",
            "features": [
                "LCD display",
                "Variable resistance levels",
                "Handlebar grips",
                "Cup holder",
                "Built-in programs",
                "Dumbbell holders",
                "Heart rate monitor"
                
            ],
            "price": 699.00
        }
    ];



    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {
                    priceOptions.map(option => <PriceOption option={option} key={option.id}></PriceOption>)
                }
            </div>

        </div>
    );
};

export default PriceOptions;