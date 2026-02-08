import Container from '@/components/Container';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

export default function Bookmark() {
  // Dummy bookmarked destinations
  const bookmarks = [
    {
      id: '1',
      name: 'Maldives',
      location: 'Indian Ocean',
      price: 1200,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
    {
      id: '2',
      name: 'Paris',
      location: 'France',
      price: 1500,
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    },
    {
      id: '3',
      name: 'Bali',
      location: 'Indonesia',
      price: 900,
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
    },
  ];

  return (
    <Container className="bg-gray-100">
      <View style={tw`px-4`}>
        <Text style={tw`text-2xl font-bold text-gray-900 mb-4`}>
          Your Bookmarks
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          {bookmarks.map((item) => (
            <View
              key={item.id}
              style={tw`bg-white rounded-2xl shadow-md mb-4 overflow-hidden`}
            >
              {/* Image */}
              <Image
                source={{ uri: item.image }}
                style={tw`w-full h-40`}
                resizeMode="cover"
              />

              {/* Info */}
              <View style={tw`p-4`}>
                <Text style={tw`text-lg font-semibold text-gray-900 mb-1`}>
                  {item.name}
                </Text>
                <View style={tw`flex-row items-center mb-2`}>
                  <Ionicons name="location-outline" size={16} color="#777" />
                  <Text style={tw`ml-1 text-gray-500`}>{item.location}</Text>
                </View>
                <Text style={tw`text-blue-600 font-bold text-base`}>
                  ${item.price} / trip
                </Text>

                {/* Remove button */}
                <Pressable
                  style={tw`absolute top-3 right-3 bg-white p-2 rounded-full shadow`}
                >
                  <Ionicons name="trash-outline" size={20} color="#EF4444" />
                </Pressable>
              </View>
            </View>
          ))}

          {bookmarks.length === 0 && (
            <Text style={tw`text-gray-500 text-center mt-10`}>
              No bookmarks yet.
            </Text>
          )}
        </ScrollView>
      </View>
    </Container>
  );
}
