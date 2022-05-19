export const setCategory = (index) => ({
  type: 'SET_CATEGORY',
  payload: index,
});

export const setSortBy = (name) => ({
  type: 'SET_SORT_BY',
  payload: name,
});
