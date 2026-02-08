import Container from '@/components/Container';
import FilterModal from '@/components/FilterModal';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import { useState } from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import tw from 'twrnc';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function HomeScreen() {
  const [filterVisible, setFilterVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = [
    'All',
    'Beaches',
    'Mountains',
    'Cities',
    'Adventure',
    'Cruises',
  ];

 const allDestinations = [
    {
      id: '1',
      name: 'Maldives',
      location: 'Indian Ocean',
      price: 1200,
      rating: 4.9,
      type: 'Beaches',
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
      description: 'Crystal clear water, white sandy beaches, and luxury resorts.',
    },
    {
      id: '2',
      name: 'Paris',
      location: 'France',
      price: 1500,
      rating: 4.8,
      type: 'Cities',
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
      description: 'The city of love, art, fashion, and iconic landmarks.',
    },
    {
      id: '3',
      name: 'Bali',
      location: 'Indonesia',
      price: 900,
      rating: 4.7,
      type: 'Beaches',
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
      description: 'Tropical paradise with temples, beaches, and culture.',
    },
  ];


  const filteredDestinations = allDestinations.filter(
    (dest) =>
      dest.name.toLowerCase().includes(searchQuery.toLowerCase()) &&
      (activeCategory === 'All' || dest.type === activeCategory)
  );

  const topTravelGroups = [
    {
      name: 'Wanderlust Club',
      rating: 4.7,
      reviews: 1023,
      image: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
    },
    {
      name: 'Adventure Seekers',
      rating: 4.8,
      reviews: 870,
      image: 'https://images.unsplash.com/photo-1526772662000-3f88f10405ff',
    },
    {
      name: 'Globe Trotters',
      rating: 4.6,
      reviews: 650,
      image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
    },
  ];

  return (
    <Container className="bg-gray-100">
      {/* ================= Header ================= */}
      <View style={tw`flex-row items-center justify-between mb-6`}>
        <Image
          source={{ uri: 'https://github.com/octocat.png' }}
          style={styles.avatar}
        />
        <Pressable style={tw`bg-white p-3 rounded-full shadow-sm`}>
          <Ionicons name="notifications-outline" size={24} color="#555" />
        </Pressable>
      </View>

      {/* ================= Hero Text ================= */}
      <View style={tw`mb-6`}>
        <Text style={tw`text-3xl font-extrabold text-gray-900 leading-tight`}>
          Explore the
        </Text>
        <Text style={tw`text-3xl font-extrabold text-blue-600 leading-tight`}>
          Beautiful World 🌍
        </Text>
      </View>

      {/* ================= Search & Filter ================= */}
      <View style={tw`flex-row items-center mb-6`}>
        <View
          style={tw`flex-row items-center bg-white flex-1 px-4 py-2 rounded-2xl shadow-sm`}
        >
          <Ionicons name="search-outline" size={20} color="#999" />
          <TextInput
            style={tw`ml-3 text-gray-700 flex-1 text-base`}
            placeholder="Search destinations, food…"
            placeholderTextColor="#999"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>

        <Pressable
          style={tw`bg-blue-600 p-3 rounded-2xl ml-3 shadow-sm`}
          onPress={() => setFilterVisible(true)}
        >
          <Ionicons name="options-outline" size={22} color="#fff" />
        </Pressable>
      </View>

      {/* ================= Main Scroll ================= */}
    <View style={{height:"70%"}}>
        <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-24 px-4`}
      >
        {/* ================= Categories ================= */}
        <View>
          <Text style={tw`text-lg font-bold mb-3 text-gray-900`}>
            Categories
          </Text>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {categories.map((item, index) => {
              const active = item === activeCategory;
              return (
                <Pressable
                  key={index}
                  onPress={() => setActiveCategory(item)}
                  style={tw`
                    px-5 py-3 mr-3 rounded-full shadow-sm
                    ${active ? 'bg-blue-600' : 'bg-white'}
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
          </ScrollView>
        </View>

        {/* ================= Popular Destinations ================= */}
        <View style={tw`mt-8`}>
          <View style={tw`flex-row items-center justify-between mb-3`}>
            <Text style={tw`text-lg font-bold text-gray-900`}>
              Popular Destinations
            </Text>
            <Text style={tw`text-blue-600 font-medium`}>View all</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {filteredDestinations.length > 0 ? (
              filteredDestinations.map((dest, index) => (
                <Pressable
                  key={dest.id}
                    onPress={() =>
    router.push({
      pathname: '/(tabs)/listing/[id]',
      params: { id: dest.id },
    })
  }
                  style={[
                    tw`bg-white mr-4 rounded-3xl shadow-md overflow-hidden`,
                    { width: SCREEN_WIDTH * 0.6 },
                  ]}
                >
                  <View style={tw`relative`}>
                    <Image
                      source={{ uri: dest.image }}
                      style={tw`w-full h-44`}
                      resizeMode="cover"
                    />
                    <Pressable
                      style={tw`absolute top-3 right-3 bg-white/90 p-2 rounded-full`}
                    >
                      <Ionicons
                        name="bookmark-outline"
                        size={20}
                        color="#333"
                      />
                    </Pressable>
                  </View>

                  <View style={tw`p-4`}>
                    <Text style={tw`text-base font-semibold mb-1`}>
                      {dest.name}
                    </Text>

                    <View style={tw`flex-row items-center mb-2`}>
                      <Ionicons
                        name="location-outline"
                        size={14}
                        color="#777"
                      />
                      <Text style={tw`ml-1 text-gray-500 text-sm`}>
                        {dest.location}
                      </Text>
                    </View>

                    <View style={tw`flex-row items-center justify-between`}>
                      <Text style={tw`text-blue-600 font-semibold`}>
                        ${dest.price} / trip
                      </Text>
                      <View style={tw`flex-row items-center`}>
                        <Ionicons name="star" size={14} color="#FACC15" />
                        <Text style={tw`ml-1 font-medium`}>{dest.rating}</Text>
                      </View>
                    </View>
                  </View>
                </Pressable>
              ))
            ) : (
              <Text style={tw`text-gray-500 ml-4 mt-2`}>
                No destinations found.
              </Text>
            )}
          </ScrollView>
        </View>

        {/* ================= Top Travel Groups ================= */}
        <View style={tw`mt-10`}>
          <View style={tw`flex-row items-center justify-between mb-3`}>
            <Text style={tw`text-lg font-bold text-gray-900`}>
              Top Travel Groups
            </Text>
            <Text style={tw`text-blue-600 font-medium`}>View all</Text>
          </View>

          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {topTravelGroups.map((group, index) => (
              <View
                key={index}
                style={[
                  tw`bg-white mr-4 rounded-3xl shadow-md overflow-hidden`,
                  { width: SCREEN_WIDTH * 0.55 },
                ]}
              >
                <Image
                  source={{ uri: group.image }}
                  style={tw`w-full h-36`}
                  resizeMode="cover"
                />
                <View style={tw`p-4`}>
                  <Text style={tw`text-base font-semibold mb-2`}>
                    {group.name}
                  </Text>
                  <View style={tw`flex-row items-center`}>
                    <Ionicons name="star" size={16} color="#FACC15" />
                    <Text style={tw`ml-1 font-medium`}>{group.rating}</Text>
                    <Text style={tw`text-gray-500 ml-1`}>({group.reviews})</Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
    </View>

      {/* ================= Filter Modal ================= */}
      <FilterModal
        visible={filterVisible}
        onClose={() => setFilterVisible(false)}
      />
    </Container>
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});
