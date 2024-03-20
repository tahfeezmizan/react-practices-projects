const getStoredCart = () => {
    const storedCartString = localStorage.getItem('cart');
    if (storedCartString) {
        return JSON.parse(storedCartString)
    }
    return [];
}

//save to local Storage
const saveCartToLocalStorage = cart => {
    const cartStringified = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringified)
}

//add to local Storage
const addToLocalStorage = id => {
    const cart = getStoredCart();
    cart.push(id);
    saveCartToLocalStorage(cart);
}

export {addToLocalStorage, getStoredCart}