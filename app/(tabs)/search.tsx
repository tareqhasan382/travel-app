import Container from '@/components/Container';
import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { FlatList, Image, Pressable, Text, TextInput, View } from 'react-native';
import tw from 'twrnc';

export default function Search() {
  // Dummy search data
  const DATA = [
    {
      id: '1',
      name: 'Maldives',
      location: 'Indian Ocean',
      price: 1200,
      rating: 4.9,
      image: require('../../assets/images/cities.jpg'),
    },
    {
      id: '2',
      name: 'Paris',
      location: 'France',
      price: 1500,
      rating: 4.8,
      image: require('../../assets/images/cities.jpg'),
    },
    {
      id: '3',
      name: 'Bali',
      location: 'Indonesia',
      price: 900,
      rating: 4.7,
      image: require('../../assets/images/cities.jpg'),
    },
    {
      id: '4',
      name: 'New York',
      location: 'USA',
      price: 1400,
      rating: 4.6,
      image: require('../../assets/images/cities.jpg'),
    },
    {
      id: '5',
      name: 'Safari Kenya',
      location: 'Kenya',
      price: 1800,
      rating: 4.9,
      image: require('../../assets/images/cities.jpg'),
    },
  ];

  const [query, setQuery] = useState('');
  const filteredData = DATA.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase())
  );

  const renderItem = ({ item }: any) => (
    <Pressable style={tw`flex-row bg-white rounded-xl mb-4 shadow-sm overflow-hidden`}>
      <Image source={item.image} style={tw`w-24 h-24`} resizeMode="cover" />
      <View style={tw`flex-1 p-3 justify-between`}>
        <View>
          <Text style={tw`text-lg font-bold text-gray-900`}>{item.name}</Text>
          <Text style={tw`text-gray-500`}>{item.location}</Text>
        </View>
        <View style={tw`flex-row justify-between items-center`}>
          <View style={tw`flex-row items-center`}>
            <Ionicons name="star" size={16} color="#FACC15" />
            <Text style={tw`ml-1 text-gray-800`}>{item.rating}</Text>
          </View>
          <Text style={tw`text-blue-600 font-bold`}>${item.price}</Text>
        </View>
      </View>
    </Pressable>
  );

  return (
    <Container className="bg-gray-100">
      {/* Search input */}
      <View style={tw`px-1 mb-4`}>
        <View style={tw`flex-row items-center bg-white rounded-xl px-4 py-2 shadow-sm`}>
          <Ionicons name="search" size={20} color="gray" />
          <TextInput
            placeholder="Search destinations..."
            value={query}
            onChangeText={setQuery}
            style={tw`ml-2 flex-1 text-gray-900`}
          />
        </View>
      </View>

      {/* Search results */}
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={tw`px-4 pb-6`}
        showsVerticalScrollIndicator={false}
      />

      {/* No results */}
      {filteredData.length === 0 && (
        <View style={tw`items-center mt-10`}>
          <Text style={tw`text-gray-500 text-lg`}>No destinations found</Text>
        </View>
      )}
    </Container>
  );
}
