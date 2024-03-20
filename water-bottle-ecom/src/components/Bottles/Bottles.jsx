import { useEffect } from "react";
import { useState } from "react";
import Bottle from "../Bottle/Bottle";
import './Bottles.css'
import { addToLocalStorage, getStoredCart } from "../Utilities/localStorage";

const Bottles = () => {
    const [bottles, setBottles] = useState([]);
    const [cart, setCart] = useState([])

    // data load 
    useEffect(() => {
        fetch('bottles.json')
            .then(res => res.json())
            .then(data => setBottles(data))
    }, []);

    useEffect(() => {
        console.log('click use Effects',bottles.length)
        if(bottles.length > 0){
            const storedCart = getStoredCart()
            console.log('Total Stored Cart', storedCart);
            const savedCart = [];

            for(const id of storedCart){
                console.log(id)
                const bottle = bottles.find(bottle => bottle.id === id);
                
                if(bottle){
                    savedCart.push(bottle)
                }
            }
            setCart(savedCart)
        }
        const storedCart = getStoredCart();
        console.log(storedCart)
    }, [bottles])

    // purchess button handler 
    const handleAddToCart = bottles => {
        const newCard = [...cart, bottles];
        setCart(newCard);
        addToLocalStorage(bottles.id)
    }

    return (
        <div>
            {/* bottles item pass to Bottle Component Display */}
            <h2>Bottles Avaibale: {bottles.length}</h2>
            <h2>Bottles Add: {cart.length}</h2>
            <div className="bottles-container">
                {
                    bottles.map(bottle => <Bottle 
                        key={bottles.id} 
                        bottle={bottle} 
                        handleAddToCart={handleAddToCart}></Bottle>)
                }
            </div>
        </div>
    );
};

export default Bottles;