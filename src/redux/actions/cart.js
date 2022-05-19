export const setAddPizza = (obj) => ({
  type: 'SET_ADD_PIZZA',
  payload: obj,
});

export const clearCart = (obj) => ({
  type: 'CLEAR_CART',
  payload: obj,
});

export const removeCartItem = (id) => ({
  type: 'REMOVE_CART_ITEM',
  payload: id,
});

export const plusCartItem = (id) => ({
  type: 'PLUS_CART_ITEM',
  payload: id,
});

export const minusCartItem = (id) => ({
  type: 'MINUS_CART_ITEM',
  payload: id,
});
