import React, { useState, ReactElement } from 'react';
import { Text, View } from 'react-native';
import Input from '../primitiveComponents/Input';
import Button from '../primitiveComponents/Button';
import { ViewType } from '../../resources/types/viewType';

interface SearchCardProps {
  viewType: ViewType;
}

export default function SearchCard({
  viewType,
}: SearchCardProps): ReactElement {
  const [text, setText] = useState('');

  return (
    <View>
      <Text>{text}</Text>
      <Input onChangeText={setText} value={text} viewType={viewType} />
      <Button
        title="BUTTON"
        onPress={() => setText('Butona basildi')}
        viewType={viewType}
      />
    </View>
  );
}
