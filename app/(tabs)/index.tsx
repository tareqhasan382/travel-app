import Container from '@/components/Container';
import { Ionicons } from '@expo/vector-icons';
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';

export default function HomeScreen() {
  const categories = ['Burger', 'Pizza', 'Sushi', 'Drinks', 'Desserts'];

  return (
    <Container className="mt-0">
      {/* ================= Header ================= */}
      <View style={tw`flex-row items-center justify-between mb-5`}>
        <Image
          source={{ uri: 'https://github.com/octocat.png' }}
          style={styles.avatar}
        />

        <View style={tw`bg-white rounded-md p-2 shadow-sm`}>
          <Ionicons name="notifications-outline" size={26} color="#555" />
        </View>
      </View>

      {/* ================= Search & Filter ================= */}
      <View style={tw`flex-row items-center mb-6`}>
        {/* Search */}
        <View style={tw`flex-row items-center bg-white flex-1 px-3 py-3 rounded-md shadow-sm`}>
          <Ionicons name="search-outline" size={22} color="#999" />
          <Text style={tw`ml-2 text-gray-400 text-base`}>
            Search food, places…
          </Text>
        </View>

        {/* Filter */}
        <View style={tw`bg-white p-3 rounded-md ml-3 shadow-sm`}>
          <Ionicons name="options-outline" size={22} color="#555" />
        </View>
      </View>

      {/* ================= Main Scrollable Content ================= */}
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={tw`pb-6`}
      >
        {/* ================= Categories ================= */}
        <View>
          <Text style={tw`text-lg font-semibold mb-3`}>Categories</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`pb-2`}
          >
            {categories.map((item, index) => (
              <View
                key={index}
                style={tw`bg-white px-5 py-3 rounded-full mr-3 shadow-sm`}
              >
                <Text style={tw`font-medium text-gray-700`}>{item}</Text>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ================= Popular Destinations ================= */}
        <View style={tw`mt-6`}>
          <Text style={tw`text-lg font-semibold mb-3`}>Popular Destinations</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`pb-4`}
          >
            {[1, 2, 3].map((_, index) => (
              <View
                key={index}
                style={tw`bg-white w-64 mr-4 rounded-2xl shadow-sm overflow-hidden`}
              >
                {/* Destination Image */}
                <View style={tw`relative`}>
                  <Image
                    source={{
                      uri: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e',
                    }}
                    style={tw`w-full h-40`}
                  />
                  {/* Bookmark */}
                  <View style={tw`absolute top-3 right-3 bg-white p-2 rounded-full`}>
                    <Ionicons name="bookmark-outline" size={20} color="#333" />
                  </View>
                </View>

                {/* Info */}
                <View style={tw`p-4`}>
                  <Text style={tw`text-base font-semibold mb-1`}>Maldives</Text>
                  <View style={tw`flex-row items-center mb-2`}>
                    <Ionicons name="location-outline" size={14} color="#777" />
                    <Text style={tw`ml-1 text-gray-500 text-sm`}>Indian Ocean</Text>
                  </View>
                  <View style={tw`flex-row items-center justify-between`}>
                    <Text style={tw`text-blue-600 font-semibold`}>$1,200 / trip</Text>
                    <View style={tw`flex-row items-center`}>
                      <Ionicons name="star" size={14} color="#FACC15" />
                      <Text style={tw`ml-1 font-medium`}>4.9</Text>
                    </View>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>

        {/* ================= Top Travel Groups ================= */}
        <View style={tw`mt-8`}>
          <Text style={tw`text-lg font-semibold mb-3`}>Top Travel Groups</Text>
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={tw`pb-4`}
          >
            {[1, 2, 3].map((_, index) => (
              <View
                key={index}
                style={tw`bg-white w-56 mr-4 rounded-2xl shadow-sm overflow-hidden`}
              >
                {/* Group Image */}
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee',
                  }}
                  style={tw`w-full h-36`}
                />
                {/* Group Info */}
                <View style={tw`p-4`}>
                  <Text style={tw`text-base font-semibold mb-2`}>Wanderlust Club</Text>
                  <View style={tw`flex-row items-center`}>
                    <Ionicons name="star" size={16} color="#FACC15" />
                    <Text style={tw`ml-1 font-medium`}>4.7</Text>
                    <Text style={tw`text-gray-500 ml-1`}> (1023) </Text>
                  </View>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>
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
