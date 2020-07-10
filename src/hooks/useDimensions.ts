import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';
import { setDimensions } from '../store/actions';

export default function useDimensions(): void {
  const dispatch = useDispatch();

  const updateDimensions = useCallback(
    ({ screen: { width } }) => {
      let nextViewType = 'mobileVertical';

      if (width > 414) {
        nextViewType = 'mobileHorizontal';
      }

      dispatch(setDimensions(nextViewType));
    },
    [dispatch],
  );

  useEffect(() => {
    Dimensions.addEventListener('change', updateDimensions);
    return () => {
      Dimensions.removeEventListener('change', updateDimensions);
    };
  }, [updateDimensions]);
}
