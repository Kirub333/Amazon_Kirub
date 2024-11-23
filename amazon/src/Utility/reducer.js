export const initialState = {
  basket: [],
  user: null,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET": {
      const existingItemIndex = state.basket.findIndex(
        (item) => item.id === action.item.id
      );

      if (existingItemIndex >= 0) {
        const updatedBasket = [...state.basket];
        updatedBasket[existingItemIndex].amount += 1; // Increment by 1
        return { ...state, basket: updatedBasket };
      }

      return {
        ...state,
        basket: [...state.basket, { ...action.item, amount: 1 }],
      };
    }

    case "REMOVE_FROM_BASKET": {
      const updatedBasket = state.basket
        .map((item) =>
          item.id === action.id ? { ...item, amount: item.amount - 1 } : item
        )
        .filter((item) => item.amount > 0);

      return { ...state, basket: updatedBasket };
    }

    case "REMOVE_ITEM_IMMEDIATELY": {
      return {
        ...state,
        basket: state.basket.filter((item) => item.id !== action.id),
      };
    }

    case "EMPTY_BASKET":
      return { ...state, basket: [] };

    default:
      return state;
  }
};
