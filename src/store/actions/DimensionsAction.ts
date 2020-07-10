import { Dispatch } from 'redux';
import { ViewType } from '../../resources/types/viewType';
import * as Types from '../Types';

const dispatchDimensions = (viewType: ViewType) => ({
  type: Types.DIMENSIONS,
  payload: viewType,
});

const setDimensions = (viewType: ViewType) => (dispatch: Dispatch): void => {
  dispatch(dispatchDimensions(viewType));
};

export default setDimensions;
