import React, { useState } from 'react';
import { Text, View } from 'react-native';
import Input from '../primitiveComponents/Input';
import Button from '../primitiveComponents/Button';

export default function SearchCard(props) {
   const [text, setText] = useState('');

   return (
      <View>
         <Text children={text} />
         <Input onChangeText={setText} value={text} viewType={props.viewType} />
         <Button title={'BUTTON'} onPress={() => console.log('clicked')} viewType={props.viewType} />
      </View>
   );
}
