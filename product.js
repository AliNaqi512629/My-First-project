// product-detail.js

// Function to get query parameters from the URL
function getQueryParam(name) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(name);
}

// Product data (You can replace this with actual data fetched from a database or API)
const products = [
    {
        id: 1,
        name: "Car Shampoo",
        price: "$19.99",
        description: "Perfect for a deep clean, leaving your car spotless. Easy to apply, provides a professional finish.",
        image: "Images/product1WWP.jpg"
    },
    {
        id: 2,
        name: "Tire Cleaner",
        price: "$15.99",
        description: "Restores your tires to a shiny, like-new finish, UV protection.",
        image: "Images/product2TG.jpg"
    },
    {
        id: 3,
        name: "Interior Cleaner",
        price: "$10.99",
        description: "Keep your car's interior looking pristine and fresh.",
        image: "Images/product3CIC.jpg"
    },
    {
        id: 4,
        name: "Wind sheild washer",
        price: "$8.99",
        description: "Elevate Your Ride: 3M Wash-Wax-Protect – Shine Brighter, Last Longer.",
        image: "Images/product4WSW.jpg"
    },
    {
        id: 5,
        name: "Headlight cleaner & Restorer",
        price: "$12.99",
        description: "Brighten Your Vision, Safeguard Your Drive.",
        image: "Images/product5HCR.jpg"
    },
    {
        id: 6,
        name: "Quick Car Body Polish",
        price: "$10.99",
        description: "Trusted Shine with Carnauba Wax Protection – Your Car's Ultimate Glow.",
        image: "Images/product6CBP.jpg"
    },
    // Add more products here
];

// Get the product ID from the URL
const productId = getQueryParam('id');

// Find the product based on the ID
const product = products.find(p => p.id == productId);

if (product) {
    // Update the product details in the HTML
    document.getElementById('product-name').innerText = product.name;
    document.getElementById('product-price').innerText = product.price;
    document.getElementById('product-description').innerText = product.description;
    document.getElementById('product-image').src = product.image;
} else {
    // Handle the case where the product is not found
    alert('Product not found!');
}

// Add to cart functionality
document.getElementById('add-to-cart').addEventListener('click', function () {
    const quantity = document.getElementById('quantity').value;

    // Assuming you're using localStorage for cart management
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const existingProduct = cart.find(item => item.productId === product.id);
    if (existingProduct) {
        existingProduct.quantity += parseInt(quantity);
    } else {
        cart.push({ productId: product.id, quantity: parseInt(quantity) });
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
});

// Buy now functionality
document.getElementById('buy-now').addEventListener('click', function () {
    const quantity = document.getElementById('quantity').value;

    // Add the product to the cart and redirect to checkout
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.push({ productId: product.id, quantity: parseInt(quantity) });
    localStorage.setItem('cart', JSON.stringify(cart));

    // Redirect to the checkout page
    window.location.href = '/checkout.html';  // Update the URL as needed
});
