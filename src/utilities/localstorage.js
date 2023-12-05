const getStoredCart = () => {
  const storedCartString = localStorage.getItem("cart");
  if (storedCartString) {
    return JSON.parse(storedCartString);
  }
  return [];
};

const saveCartToLS = (cart) => {
  const cartStringified = JSON.stringify(cart);
  localStorage.setItem("cart", cartStringified);
};

const addToLS = (id) => {
  const cart = getStoredCart();
  cart.push(id);
  // save to local storage
  saveCartToLS(cart);
};

const removeFromLS = (id) => {
  const cart = getStoredCart();
  // removing every id
  const remaining = cart.filter((idx) => idx !== id);
  saveCartToLS(remaining);
};

function formatDate(date) {
  const currentMonth = date.getMonth();
  const monthString = currentMonth >= 10 ? currentMonth : `0${currentMonth}`;
  const currentDate = date.getDate();
  const dateString = currentDate >= 10 ? currentDate : `0${currentDate}`;
  return `${date.getFullYear()}-${monthString}-${currentDate}`;
}

export { addToLS, getStoredCart, removeFromLS, formatDate };
