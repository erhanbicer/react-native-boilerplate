import * as Types from '../Types';

const initializeState = {
   viewType: 'mobileVertical'
};

export default (state = initializeState, action) => {
   switch (action.type) {
      case Types.DIMENSIONS:
         return { ...state, viewType: action.payload };
      default:
         return state;
   }
};
