function addToCartAndGo(name, image, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  const existingIndex = cart.findIndex(item => item.name === name);
  if (existingIndex !== -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ name, image, price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));

  window.location.href = 'cart.html';
}
function addToCart(name, image, price) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists
  const existingIndex = cart.findIndex(p => p.name === name);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({ name, image, price, quantity: 1 });
  }

  localStorage.setItem('cart', JSON.stringify(cart));
  alert(name + " added to cart!");
  updateCartIcon();
}
function updateCartIcon() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let totalCount = cart.reduce((acc, p) => acc + p.quantity, 0);
  const cartIcon = document.getElementById('cart-count');
  if (cartIcon) {
    cartIcon.textContent = totalCount > 0 ? totalCount : '';
  }
}
function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-container');

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  container.innerHTML = '';
  cart.forEach(item => {
    const box = document.createElement('div');
    box.className = 'cart-item';
    box.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <h3>${item.name}</h3>
        <p>Price: ${item.price} TK</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: ${item.price * item.quantity} TK</p>
      </div>
    `;
    container.appendChild(box);
  });
}

window.onload = loadCart;


function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-container');

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  container.innerHTML = '';
  cart.forEach((item, index) => {
    const box = document.createElement('div');
    box.className = 'cart-item';
    box.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <h3>${index + 1}. ${item.name}</h3>
        <p>Price: ${item.price} TK</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: ${item.price * item.quantity} TK</p>
      </div>
    `;
    container.appendChild(box);
  });
}

window.onload = loadCart;


function loadCart() {
  const cart = JSON.parse(localStorage.getItem('cart')) || [];
  const container = document.getElementById('cart-container');

  if (cart.length === 0) {
    container.innerHTML = '<p>Your cart is empty.</p>';
    return;
  }

  container.innerHTML = '';
  cart.forEach((item, index) => {
    const box = document.createElement('div');
    box.className = 'cart-item';
    box.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <div class="cart-details">
        <h3>${index + 1}. ${item.name}</h3>
        <p>Price: ${item.price} TK</p>
        <p>Quantity: ${item.quantity}</p>
        <p>Total: ${item.price * item.quantity} TK</p>
      </div>
    `;
    container.appendChild(box);
  });
}

window.onload = loadCart;

function toggleMenu() {
  const navUl = document.querySelector('nav ul');
  navUl.classList.toggle('active');
}
function toggleMenu() {
  const nav = document.getElementById('navMenu');
  nav.classList.toggle('show');
}

function toggleMenu() {
  document.getElementById("menu").classList.toggle("show");
}

