import { ViewType } from '../../resources/types/viewType';
import * as Types from '../Types';

const initializeState = <ViewType>'mobileVertical';
declare type DimensionsType = {
  payload: ViewType;
  type: string;
};

export default (
  state: ViewType = initializeState,
  action: DimensionsType,
): ViewType => {
  switch (action.type) {
    case Types.DIMENSIONS:
      return action.payload;
    default:
      return state;
  }
};
