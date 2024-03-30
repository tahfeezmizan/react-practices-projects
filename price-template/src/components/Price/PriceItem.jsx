import SinglePrice from "./SinglePrice";

const PriceItem = () => {
    const priceOptions = [{
        "id": 1,
        "name": "Basic",
        "price": 9.99,
        "features": [
            "Access to basic features",
            "Limited support"
        ]
    },
    {
        "id": 2,
        "name": "Standard",
        "price": 19.99,
        "features": [
            "Access to standard features",
            "Email support",
            "File storage up to 5GB"
        ]
    },
    {
        "id": 3,
        "name": "Premium",
        "price": 29.99,
        "features": [
            "Access to premium features",
            "24/7 support",
            "Unlimited file storage",
            "Advanced analytics"
        ],
    }]


    return (
        <div className="w-full md:w-8/12 mx-auto py-12">
            <div className="grid md:grid-cols-3 gap-6">
            {
                priceOptions.map(options => <SinglePrice
                    option={options}
                    key={options.id}></SinglePrice>)
            }
            </div>
        </div>
    );
};

export default PriceItem;