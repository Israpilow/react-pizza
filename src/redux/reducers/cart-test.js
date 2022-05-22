import produce from 'immer';

const initialState = {
  items: {},
  totalPrice: 0,
  totalCount: 0,
};

console.log(produce);

const getTotalPrice = (arr) => arr.reduce((sum, obj) => obj.price + sum, 0);

const cart = (state = initialState, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'SET_ADD_PIZZA':
        if (!draft.items[action.payload.id]) {
          draft.items[action.payload.id] = [];
        }
        draft.items[action.payload.id].push(action.payload);
        break;

      default:
        return state;
    }
  });
  // switch (action.type) {
  //   case 'SET_ADD_PIZZA':
  //     const currentPizzaItems = !state.items[action.payload.id]
  //       ? [action.payload]
  //       : [...state.items[action.payload.id].items, action.payload];

  //     const totalObj = {
  //       ...state.items,
  //       [action.payload.id]: {
  //         items: currentPizzaItems,
  //         totalPrice: getTotalPrice(currentPizzaItems),
  //       },
  //     };

  //     const items = Object.values(totalObj).map((obj) => obj.items);
  //     const allPizza = [].concat.apply([], items);
  //     const totalPrice = getTotalPrice(allPizza);

  //     return {
  //       ...state,
  //       items: totalObj,
  //       totalCount: allPizza.length,
  //       totalPrice: totalPrice,
  //     };

  //   case 'CLEAR_CART':
  //     return { totalCount: 0, totalPrice: 0, items: {} };

  //   case 'REMOVE_CART_ITEM':
  //     const newItems = { ...state.items };
  //     const currentPrice = newItems[action.payload].totalPrice;
  //     const currentCount = newItems[action.payload].items.length;
  //     console.log(action.payload);
  //     delete newItems[action.payload].items.filter((obj) => obj.id === action.payload);

  //     return {
  //       ...state,
  //       items: newItems,
  //       totalPrice: state.totalPrice - currentPrice,
  //       totalCount: state.totalCount - currentCount,
  //     };

  //   case 'PLUS_CART_ITEM': {
  //     const newObjItems = [
  //       ...state.items[action.payload].items,
  //       state.items[action.payload].items[0],
  //     ];
  //     console.log(newObjItems);
  //     const newItem = {
  //       ...state.items,
  //       [action.payload]: {
  //         items: newObjItems,
  //         totalPrice: getTotalPrice(newObjItems),
  //       },
  //     };
  //     const totalPrice = state.totalPrice + newItem[action.payload].items[action.payload].price;
  //     const totalCount = state.totalCount + 1;

  //     return {
  //       ...state,
  //       items: newItem,
  //       totalPrice,
  //       totalCount,
  //     };
  //   }
  //   case 'MINUS_CART_ITEM': {
  //     const oldItems = state.items[action.payload].items;
  //     const newObjItems =
  //       oldItems.length > 1 ? state.items[action.payload].items.slice(1) : oldItems;
  //     console.log(newObjItems);
  //     const newItem = {
  //       ...state.items,
  //       [action.payload]: {
  //         items: newObjItems,
  //         totalPrice: getTotalPrice(newObjItems),
  //       },
  //     };

  //     const totalPrice = state.totalPrice - newItem[action.payload].items[action.payload].price;
  //     const totalCount = state.totalCount - 1;

  //     return {
  //       ...state,
  //       items: newItem,
  //       totalPrice,
  //       totalCount,
  //     };
  //   }

  //   default:
  //     return state;
  // }
};

export default cart;
