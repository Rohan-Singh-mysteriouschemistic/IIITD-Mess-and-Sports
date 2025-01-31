document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM fully loaded');

  // ====================== Mess Coupons Page ======================

  // Handle Buy Coupon
  const buyButtons = document.querySelectorAll('.btn-buy');
  if (buyButtons.length > 0) {
    buyButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        if (e.target.closest('.card')) {
          const sport = e.target.closest('.card').querySelector('.card-title').textContent;
          alert(`Slot booked for ${sport}`);
        }
      });
    });
  } else {
    console.warn('No .btn-buy buttons found for Buy Coupon functionality.');
  }

  // Handle Sell Coupon Form Submission
  const sellForm = document.getElementById('sellCouponForm');
  if (sellForm) {
    sellForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const couponType = document.getElementById('couponType').value;
      const price = document.getElementById('price').value;
      alert(`Coupon listed for sale: ${couponType} at ₹${price}`);
    });
  } else {
    console.warn('No form found for Sell Coupon functionality.');
  }



  // ====================== Order Online Page ======================

  let cart = [];
  let total = 0;

  // // Handle Sell Coupon Form Submission
  document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault();
    const couponType = document.getElementById('couponType').value;
    const price = document.getElementById('price').value;
    alert(`Coupon listed for sale: ${couponType} at ₹${price}`);
  });

  // Show Nescafe Menu
  document.getElementById('nescafeBtn').addEventListener('click', () => {
    document.getElementById('nescafeMenu').style.display = 'block';
    document.getElementById('canteenMenu').style.display = 'none';
  });

  // Show Canteen Menu
  document.getElementById('canteenBtn').addEventListener('click', () => {
    document.getElementById('canteenMenu').style.display = 'block';
    document.getElementById('nescafeMenu').style.display = 'none';
  });

  // Add item to cart
  function addToCart(itemName, price) {
    cart.push({ itemName, price });
    total += price;
    updateCart();
    alert(`${itemName} added to cart!`); // Corrected message
  }

  // Update cart display
  function updateCart() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    // Clear existing items
    // cartItems.innerHTML = '';

    // Add new items
    cart.forEach(item => {
      const li = document.createElement('li');
      li.className = 'list-group-item d-flex justify-content-between align-items-center';
      li.textContent = `${item.itemName} - ₹${item.price}`;
      cartItems.appendChild(li);
    });

    // Update total
    cartTotal.textContent = total;
  }

  // Checkout
  function checkout() {
    if (cart.length === 0) {
      alert('Your cart is empty!');
    } else {
      alert(`Order placed successfully! Total: ₹${total}`);
      cart = [];
      total = 0;
      updateCart();
    }
  }
  // ====================== Sports Slots Page ======================

  // Handle Book Slot
  const bookSlotButtons = document.querySelectorAll('.book-slot');
  if (bookSlotButtons.length > 0) {
    bookSlotButtons.forEach(button => {
      button.addEventListener('click', () => {
        const sport = button.getAttribute('data-sport');
        bookSlot(sport);
      });
    });
  } else {
    console.warn('No .book-slot buttons found.');
  }

  function bookSlot(sport) {
    const time = prompt(`Enter the time for ${sport} (e.g., 6:00 AM - 8:00 PM):`);
    if (time) {
      const tableBody = document.getElementById('bookedSlotsTable');
      if (tableBody) {
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
          <td>${sport}</td>
          <td>${time}</td>
          <td><span class="badge bg-success">Booked</span></td>
        `;
        tableBody.appendChild(newRow);
        alert(`Slot booked for ${sport} at ${time}`);
      } else {
        console.warn('Table body (bookedSlotsTable) not found.');
      }
    }
  }
});