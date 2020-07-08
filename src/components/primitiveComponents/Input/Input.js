import React from 'react';
import { TextInput } from 'react-native';

const Input = ({ viewType, ...props }) => {
   switch (viewType) {
      case 'mobileHorizontal':
         return <MobileHorizontal {...props} />;
      case 'mobileVertical':
         return <MobileVertical {...props} />;
      case 'tabletHorizontal':
         return <TabletHorizontal {...props} />;
      case 'tabletVertical':
         return <TabletVertical {...props} />;
      default:
         return <MobileHorizontal {...props} />;
   }
};

const MobileHorizontal = (props) => <TextInput {...props} />;
const MobileVertical = (props) => <TextInput {...props} />;
const TabletHorizontal = (props) => <TextInput {...props} />;
const TabletVertical = (props) => <TextInput {...props} />;
export default Input;
