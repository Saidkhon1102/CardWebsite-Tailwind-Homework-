let cart = [];
let cartCount = 0;
let cartTotal = 0;





const productCards = document.querySelectorAll('.product-card');

const buyButtons = document.querySelectorAll('.buy-btn');
buyButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        const product = e.target.getAttribute('data-product');
        const price = parseFloat(e.target.getAttribute('data-price'));


        cart.push({ product, price });
        cartCount++;
        cartTotal += price;


        document.getElementById('cart-count').textContent = cartCount;
        document.getElementById('cart-total').textContent = cartTotal.toFixed(2);


        button.classList.add('loading');
        setTimeout(() => {
            button.classList.remove('loading');
        }, 1000);
    });
});




const subscribeBtn = document.querySelector('.join button');
const emailInput = document.querySelector('.join input');

subscribeBtn.addEventListener('click', () => {
    const email = emailInput.value;
    if (email && email.includes('@')) {
        subscribeBtn.classList.add('loading');
        setTimeout(() => {
            subscribeBtn.classList.remove('loading');
            emailInput.value = '';
            alert('Thank you for subscribing!');
        }, 1500);
    } else {
        alert('Please enter a valid email address');
    }
});

function toggleTheme() {
    const html = document.documentElement;
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
}


