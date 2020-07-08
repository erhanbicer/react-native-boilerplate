import * as Types from '../Types';

export const setDimensions = (viewType) => (dispatch) => {
   dispatch(dispatchDimensions(viewType));
};

const dispatchDimensions = (viewType) => ({ type: Types.DIMENSIONS, payload: viewType });
