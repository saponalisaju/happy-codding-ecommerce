import api from './axios'

export const addToCart = (productId, quantity = 1) => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
  return api.post(
    "/cart/add",
    {
      product_id: productId,
      quantity,
    },
    { headers }
  );
};

export const getCart = () => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
  return api.get('/cart', { headers });
}

export const removeFromCart = (itemId) => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
  return api.delete(`/cart/${itemId}`, { headers });
}

export const updateCartItemQuantity = (itemId, quantity) => {
  const token = localStorage.getItem("token");
  const headers = token ? { Authorization: `Bearer ${token}` } : {};
  
  return api.put(
    `/cart/${itemId}`,
    { quantity },
    { headers }
  );
}