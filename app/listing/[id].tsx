import { Ionicons } from '@expo/vector-icons';
import { router, useLocalSearchParams } from 'expo-router';
import { Image, Pressable, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

// Hide default header
export const options = {
  headerShown: false,
};

const DESTINATIONS = [
  {
    id: '1',
    name: 'Maldives',
    location: 'Indian Ocean',
    price: 1200,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    description: 'Crystal clear water, white sandy beaches, and luxury resorts.',
  },
  {
    id: '2',
    name: 'Paris',
    location: 'France',
    price: 1500,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    description: 'The city of love, art, fashion, and iconic landmarks.',
  },
  {
    id: '3',
    name: 'Bali',
    location: 'Indonesia',
    price: 900,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
    description: 'Tropical paradise with temples, beaches, and culture.',
  },
];

export default function ListingDetails() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const item = DESTINATIONS.find((d) => d.id === id);

  if (!item) {
    return (
      <View style={tw`flex-1 items-center justify-center bg-white`}>
        <Text style={tw`text-gray-500`}>Destination not found</Text>

        <Pressable
          onPress={() => router.back()}
          style={tw`mt-4 px-5 py-2 bg-blue-600 rounded-lg`}
        >
          <Text style={tw`text-white font-semibold`}>Go Back</Text>
        </Pressable>
      </View>
    );
  }

  return (
    <ScrollView
      style={tw`bg-white`}
      showsVerticalScrollIndicator={false}
    >
      {/* Image Section */}
      <View style={tw`relative`}>
        <Image
          source={{ uri: item.image }}
          style={tw`h-80 w-full`}
          resizeMode="cover"
        />

        <Pressable
          onPress={() => router.back()}
          style={tw`absolute top-14 left-4 bg-white/90 p-2 rounded-full`}
        >
          <Ionicons name="arrow-back" size={22} color="#111" />
        </Pressable>
      </View>

      {/* Content Section */}
      <View style={tw`p-6`}>
        <Text style={tw`text-2xl font-bold text-gray-900`}>
          {item.name}
        </Text>

        <Text style={tw`text-gray-500 mt-1`}>
          {item.location}
        </Text>

        <View style={tw`flex-row items-center mt-2`}>
          <Ionicons name="star" size={16} color="#FACC15" />
          <Text style={tw`ml-1 font-medium text-gray-800`}>
            {item.rating}
          </Text>
        </View>

        <Text style={tw`mt-4 text-gray-700 leading-6`}>
          {item.description}
        </Text>

        <View style={tw`flex-row justify-between items-center mt-8`}>
          <Text style={tw`text-xl font-bold text-blue-600`}>
            ${item.price} / trip
          </Text>

          <Pressable
            style={tw`bg-blue-600 px-6 py-3 rounded-xl`}
          >
            <Text style={tw`text-white font-semibold`}>
              Book Now
            </Text>
          </Pressable>
        </View>
      </View>
    </ScrollView>
  );
}
