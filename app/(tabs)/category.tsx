import Container from '@/components/Container';
import React from 'react';
import { Dimensions, ImageBackground, Pressable, ScrollView, Text, View } from 'react-native';
import tw from 'twrnc';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

export default function Category() {
  // Dummy categories with images
  const categories = [
    { id: '1', name: 'Beaches', image: require('../../assets/images/cities.jpg') },
    { id: '2', name: 'Mountains', image: require('../../assets/images/mountains.jpg') },
    { id: '3', name: 'Cities', image: require('../../assets/images/beaches.jpg') },
    { id: '4', name: 'Adventure', image: require('../../assets/images/adventure.jpg') },
    { id: '5', name: 'Cruises', image: require('../../assets/images/cruises-2.png') },
    { id: '6', name: 'Historical', image: require('../../assets/images/historical.jpg') },
    { id: '7', name: 'Safari', image: require('../../assets/images/safari.png') },
    { id: '8', name: 'Cultural', image: require('../../assets/images/cultural.png') },
  ];

  return (
    <Container className="bg-gray-100">
      <View style={tw`px-0`}>
        <Text style={tw`text-3xl font-bold text-gray-900 mb-6`}>
          Explore Categories
        </Text>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={tw`px-1 flex-row flex-wrap justify-between pb-6`}>
            {categories.map((item) => (
              <Pressable
                key={item.id}
                style={[
                  tw`mb-4 rounded-3xl overflow-hidden shadow-lg`,
                  { width: (SCREEN_WIDTH / 2)-20, height: 200 },
                ]}
              >
                <ImageBackground
                  //source={{ uri: item.image }}
                  source={item.image}
                  style={tw`w-full h-full justify-end`}
                  imageStyle={{ borderRadius: 24 }}
                >
                  {/* Gradient overlay */}
                  <View
                    style={{
                      backgroundColor: 'rgba(0,0,0,0.35)',
                      padding: 12,
                      borderBottomLeftRadius: 24,
                      borderBottomRightRadius: 24,
                    }}
                  >
                    <Text style={tw`text-white text-lg font-bold`}>
                      {item.name}
                    </Text>
                    <Text style={tw`text-white text-sm mt-1`}>
                      {Math.floor(Math.random() * 300) + 50}+ places
                    </Text>
                  </View>
                </ImageBackground>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </Container>
  );
}
