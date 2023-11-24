import { ORDEROPTION_TYPE } from "../action/_types";

const initialState = {
  id: "",
  itemPrice: 0,
  menu: 1,
  shot: 0,
  syrups: {
    vanilla: 0,
    hazelnut: 0,
    caramel: 0,
  },
  ice: "없음",
  whipping: "없음",
  drizzle: "없음",
  milk: "없음",
  totalPrice: 0,
};

export const calculatePrice = (state) => (state.itemPrice * state.menu)
+ (state.shot + state.syrups.vanilla + state.syrups.hazelnut + state.syrups.caramel) * 600
+ (state.whipping !== "없음" ? 600 : 0)
+ (state.drizzle !== "없음" ? 600 : 0)
+ (state.milk !== "없음" ? 600 : 0)

const orderOption = (state = initialState, action) => {
  let newState = JSON.parse(JSON.stringify(state));

  switch (action.type) {
    case ORDEROPTION_TYPE.ADD_MENU_ORDEROPTION:
        newState.itemPrice = action.payload.itemPrice;
        newState.menu = action.payload.menu;
        break;
      
    case ORDEROPTION_TYPE.ADD_SHOT_ORDEROPTION: 
    newState.shot = action.payload;
      break;
      
    
    case ORDEROPTION_TYPE.ADD_SYRUPS_ORDEROPTION: 
        newState.syrups = action.payload
        break;
        
    
    case ORDEROPTION_TYPE.ADD_ICE_ORDEROPTION:
        newState.ice = action.payload
        break;
      

    case ORDEROPTION_TYPE.ADD_WHIPPING_ORDEROPTION: 
        newState.whipping = action.payload;
        break;
    
      
    case ORDEROPTION_TYPE.ADD_DRIZZLE_ORDEROPTION:
        newState.drizzle = action.payload;
        break;
      
    case ORDEROPTION_TYPE.ADD_MILK_ORDEROPTION:
        newState.milk = action.payload;
        break;
      
    case ORDEROPTION_TYPE.RESET_OPTION:
      return initialState;

    default:
      return state;
  }

  newState.totalPrice = calculatePrice(newState);

  return newState;
};
export default orderOption;