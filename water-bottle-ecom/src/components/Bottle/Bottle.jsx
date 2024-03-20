import './Bottle.css'

const Bottle = ({ bottle, handleAddToCart }) => {
    const { name, price, img } = bottle;
    return (
        <div>
            <div className="bottle">
                <img src={img} alt="" />
                <h3>Bottle Name: {name}</h3>
                <h4>Price: {price}</h4>
                <button onClick={() => handleAddToCart(bottle)}>Purchess</button>
            </div>
        </div>
    ); 
};

export default Bottle;