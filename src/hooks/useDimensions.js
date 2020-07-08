import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Dimensions } from 'react-native';
import { setDimensions } from '../store/actions';

export function useDimensions() {
   const dispatch = useDispatch();

   const _updateDimensions = ({ screen: { width } }) => {
      let nextViewType = 'mobileVertical';

      if (width > 414) {
         nextViewType = 'mobileHorizontal';
      }

      dispatch(setDimensions(nextViewType));
   };

   useEffect(() => {
      Dimensions.addEventListener('change', _updateDimensions);
      return () => {
         Dimensions.removeEventListener('change', _updateDimensions);
      };
   }, []);
}
