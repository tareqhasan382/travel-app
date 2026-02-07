import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import tw from 'twrnc';

interface Props {
  children: React.ReactNode;
  className?: string;
}

export default function Container({ children, className }: Props) {
  //bg-green-500
  return (
    <SafeAreaView
      style={[
        tw`flex-1 px-2 `,
        Platform.OS === 'android' ? tw`mt-10` : null,
        className ? tw`${className}` : null,
      ]}
    >
      <StatusBar barStyle="dark-content" backgroundColor="transparent" translucent />
      <View style={tw`flex-1`}>
        {children}
      </View>
    </SafeAreaView>
  );
}
