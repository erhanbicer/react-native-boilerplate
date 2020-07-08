import React from 'react';
import { Button } from 'react-native';

const ButtonView = ({ viewType, ...props }) => {
   switch (viewType) {
      case 'mobileHorizontal':
         return <MobileHorizontal {...props} />;
      case 'tabletHorizontal':
         return <TabletHorizontal {...props} />;
      case 'tabletVertical':
         return <TabletVertical {...props} />;
      default:
         return <MobileVertical {...props} />;
   }
};

const MobileHorizontal = (props) => <Button {...props} />;
const MobileVertical = (props) => <Button {...props} />;
const TabletHorizontal = (props) => <Button {...props} />;
const TabletVertical = (props) => <Button {...props} />;
export default ButtonView;
