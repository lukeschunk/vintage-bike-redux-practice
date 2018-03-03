const initialState = {
  products: [],
  total: 0
};

export const Cart = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      let updatedState = { ...state };
      updatedState.products.push(action.payload);
      return updatedState;
    default:
      return state;
  }
};
