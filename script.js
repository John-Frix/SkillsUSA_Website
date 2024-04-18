const cartItemsElement = document.getElementById('cart-items');
const cartTotalElement = document.getElementById('cart-total');
let cart = [];

// Function to add item to cart
function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    renderCart();
}

// Function to render cart
function renderCart() {
    cartItemsElement.innerHTML = '';
    let total = 0;
    cart.forEach(item => {
        const listItem = document.createElement('li');
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartItemsElement.appendChild(listItem);
        total += item.price;
    });
    cartTotalElement.textContent = total.toFixed(2);
}

// Function to checkout
function checkout() {
    // Implement your checkout logic here
    <a href="cart.html"></a>
}
