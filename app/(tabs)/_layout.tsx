import { Tabs } from 'expo-router';
import React from 'react';

import { HapticTab } from '@/components/haptic-tab';
import { Colors } from '@/constants/theme';
import { useColorScheme } from '@/hooks/use-color-scheme';
import { FontAwesome, Ionicons, MaterialIcons } from "@expo/vector-icons";
export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
        tabBarButton: HapticTab,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="compass" color={color} />,
        }}
      />
      <Tabs.Screen
        name="category"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <MaterialIcons size={28} name='space-dashboard' color={color} />,
        }}
      />
       <Tabs.Screen
        name="search"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="search" color={color} />,
        }}
      />
       <Tabs.Screen
        name="bookmark"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <Ionicons size={28} name="bookmark" color={color} />,
        }}
      />
       <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color }) => <FontAwesome size={28} name='user' color={color} />,
        }}
      />
    </Tabs>
  );
}
