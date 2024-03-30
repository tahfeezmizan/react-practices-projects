
const SinglePrice = ({ option }) => {
    const { name, price, features } = option;
    return (
        <div className="bg-gray-200 p-6 rounded-lg flex flex-col justify-between">
            <h1 className="text-4xl text-center mb-4">{name}</h1>
            <div className="">
                <h2 className="mb-2">
                    <span className="text-6xl">{price}</span>
                    <span className="text-3xl">/mon</span>
                </h2>
                <div className=" mb-4">
                    <h3 className="text-4xl mb-3">Feature</h3>
                    {
                        features.map(feature => <li key={feature[0]}>{feature}</li>)
                    }
                </div>
            </div>
            <button className="btn btn-success">Buy Now</button>
        </div>
    );
};

export default SinglePrice;

