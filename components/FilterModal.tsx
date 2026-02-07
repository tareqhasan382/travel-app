import { Ionicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { useEffect, useRef, useState } from 'react';
import { Animated, Modal, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

interface FilterModalProps {
  visible: boolean;
  onClose: () => void;
}

export default function FilterModal({ visible, onClose }: FilterModalProps) {
  const filters = ['Beaches', 'Mountains', 'Cities', 'Adventure', 'Cruises'];
  const [selected, setSelected] = useState<string | null>(null);

  const slideAnim = useRef(new Animated.Value(300)).current;

  useEffect(() => {
    Animated.timing(slideAnim, {
      toValue: visible ? 0 : 300,
      duration: 300,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Modal transparent visible={visible} animationType="none">
      {/* Backdrop */}
      <Pressable style={tw`flex-1`} onPress={onClose}>
        <BlurView intensity={30} tint="dark" style={tw`flex-1`} />
      </Pressable>

      {/* Bottom Sheet */}
      <Animated.View
        style={[
          tw`absolute bottom-0 w-full bg-white rounded-t-3xl`,
          { transform: [{ translateY: slideAnim }] },
        ]}
      >
        <View style={tw`p-6 pb-10`}>
          {/* Header */}
          <View style={tw`flex-row items-center justify-between mb-6`}>
            <Text style={tw`text-xl font-bold`}>Filter Destinations</Text>
            <Pressable onPress={onClose} hitSlop={10}>
              <Ionicons name="close" size={26} color="#333" />
            </Pressable>
          </View>

          <Text style={tw`text-base font-medium mb-3 text-gray-600`}>
            Type
          </Text>

          {/* Filter Chips */}
          <View style={tw`flex-row flex-wrap`}>
            {filters.map(item => {
              const active = selected === item;
              return (
                <Pressable
                  key={item}
                  onPress={() => setSelected(item)}
                  style={tw`
                    px-4 py-2 mr-3 mb-3 rounded-full
                    ${active ? 'bg-blue-600' : 'bg-gray-100'}
                  `}
                >
                  <Text
                    style={tw`
                      font-medium
                      ${active ? 'text-white' : 'text-gray-700'}
                    `}
                  >
                    {item}
                  </Text>
                </Pressable>
              );
            })}
          </View>

          {/* Apply Button */}
          <Pressable
            onPress={onClose}
            style={tw`mt-8 bg-blue-600 py-4 rounded-xl items-center`}
          >
            <Text style={tw`text-white font-semibold text-base`}>
              Apply Filters
            </Text>
          </Pressable>
        </View>
      </Animated.View>
    </Modal>
  );
}
