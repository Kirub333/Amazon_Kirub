export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, { ...action.item }],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.map((item) =>
          item.id === action.id && item.amount > 1
            ? { ...item, amount: item.amount - 1 }
            : item
        ),
      };
    case "REMOVE_ITEM_IMMEDIATELY":
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
