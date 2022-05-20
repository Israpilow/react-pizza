import axios from 'axios';

export const setPizzas = (items) => ({
  type: 'SET_PIZZAS',
  payload: items,
});

export const fetchPizzas = (category, sortBy) => (dispatch) => {
  axios
    .get(
      `/pizzas?${category !== null ? `category=${category}` : ''}&_sort=${sortBy.type}&_order=asc`,
    )
    .then(({ data }) => {
      dispatch(setPizzas(data));
    });
};

export default fetchPizzas;
