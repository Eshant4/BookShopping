export const initialState = {
    basket: [],
  };
  
  //selector
  export const getBasketTotal = (basket) =>
    basket?.reduce((amount, item) => {
    const priceWithoutCommas = item.price.replace(/,/g, '');
    return parseInt(priceWithoutCommas) + amount;
  }, 0);
  
  const reducer = (state, action) => {
    switch (action.type) {
      case "ADD_TO_BASKET":
        return {
          ...state,
          basket: [...state.basket, action.item],
        };
  
        case "EMPTY_BASKET":
          return{
            ...state,
            basket: []
          }
        case "REMOVE_FROM_CART":
          const index = state.basket.findIndex(
              (basketItem) => basketItem.id === action.id
          );
          let newBasket = [...state.basket];
  
          if(index >= 0){
              newBasket.splice(index, 1);
          } else{
              console.warn(
                  `Cant remove product (id: ${action.id}) as its not in basket!`
              )
          }
  
          return{
              ...state,
              basket: newBasket
          }
      default:
        return state;
    }
  };
  
  export default reducer;
  