import React from 'react';
import { Platform, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  return (
    <SafeAreaView
      style={[
        tw`flex-1 px-2 bg-green-500`,
        Platform.OS === 'android' ? tw`mt-10` : null,
        className ? tw`${className}` : null,
      ]}
    >
      <View style={tw`flex-1`}>
        {children}
      </View>
    </SafeAreaView>
  );
}
