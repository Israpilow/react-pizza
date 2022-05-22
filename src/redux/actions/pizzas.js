import axios from 'axios';

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  dispatch(setLoaded(false));
  axios
    .get(
      `https://62877047e9494df61b38ebfa.mockapi.io/pizzas?${
        category !== null ? `category=${category}` : ''
      }&sortBy=${sortBy.type}&_order=asc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export const setLoaded = (payload) => ({
  type: 'SET_LOADED',
  payload,
});

export default fetchPizzas;
