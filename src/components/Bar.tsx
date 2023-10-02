import React from 'react';
import { View } from 'react-native';

interface BarProps {
    style: 'first' | 'second' | 'third'; 
}

const Bar = ({ style }: BarProps) => {
  return (
    <View style={{ flexDirection: 'row', gap: 4 }}>
      <View
        style={{
          height: 6,
          backgroundColor: style === 'second' ? '#CAEAFF' : style === 'third' ? '#CAEAFF' : '#0D6EFD',
          width: style === 'second' ? 16 : style === 'third' ? 16 : 30, 
          borderRadius: 10,
        }}
      ></View>
      <View
        style={{
          height: 6,
          backgroundColor: style === 'second' ? '#0D6EFD' : style === 'third' ? '#CAEAFF' : '#CAEAFF',
          width: style === 'second' ? 30 : style === 'third' ? 8 : 16, 
          borderRadius: 10,
        }}
      ></View>
      <View  
      style={{
          height: 6,
          backgroundColor: style === 'second' ? '#CAEAFF' : style === 'third' ? '#0D6EFD' : '#CAEAFF',
          width: style === 'second' ? 8 : style === 'third' ? 30 : 8, 
          borderRadius: 10,
        }}></View>
    </View>
  );
};

export default Bar;
