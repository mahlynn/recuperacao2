import React from 'react';
import { InputGeral } from './styles';

export const MeuInput = (props) => {
  return (
    <InputGeral
      placeholder={props.placeholder}
      placeholderTextColor={props.placeholderTextColor}
      value={props.value}
      onChangeText={props.onChange}
      secureTextEntry={props.secureTextEntry}
    />
  )
}
