const addProduct = () =>{
    const productField = document.getElementById('product-name');

    const quantityField = document.getElementById('product-quantity');

    const product = productField.value;
    const quantity = quantityField.value;
    productField.value = '';
    quantityField.value = '';

    console.log(product, quantity);
    displayProduct(product, quantity);
    saveProductToLocalstorage(product, quantity);
}


const displayProduct = (product, quantity) => {
    const ul = document.getElementById('product-container');
    const li = document.createElement('li');
    li.innerText = `${product}: ${quantity}`;
    ul.appendChild(li);
}

const getStoredShoppingCart = () =>{
    const storedCart = localStorage.getItem('cart');

    let cart = {};

    if(storedCart){
        cart = JSON.parse(storedCart)
    }

    return cart;

}

const saveProductToLocalstorage = (product, quantity) =>{
    const cart = getStoredShoppingCart();
    cart[product] = quantity;

    const cartStringified = JSON.stringify(cart);

    localStorage.setItem('cart', cartStringified);   
}

const displayProductFromLocalStorage = () =>{
    const savedCart = getStoredShoppingCart();
    console.log(savedCart)



// bujhi nai

    for(const key in savedCart){
        

        const value = savedCart[key]
        console.log(key, value);

        displayProduct(key, value);
    }
}




displayProductFromLocalStorage()