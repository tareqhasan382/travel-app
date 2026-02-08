import Container from '@/components/Container';
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { Image, Pressable, Text, View } from 'react-native';
import tw from 'twrnc';

export default function Profile() {
  // Dummy user data
  const user = {
    name: 'Tareq Hasan',
    email: 'tareqhasan382@gmail.com',
    avatar: 'https://scontent.fzyl2-2.fna.fbcdn.net/v/t39.30808-6/485138076_2411710329168843_4851374899649136825_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHe-ErQ1ReN9Fe2WbDB-NjxfcVTtrxZ_kN9xVO2vFn-Q5jtqiR7EQabwCuRcovhekh_oci3fRy-VlEqMi7kSgvX&_nc_ohc=JmMVrWSZNjwQ7kNvwEhTmSu&_nc_oc=Adn3N2rVI06ei0NyywXvw0VzrtlT-LUJ8QsMJch3xRo8rm4SDj-pqg71eSCdB1S_ReI&_nc_zt=23&_nc_ht=scontent.fzyl2-2.fna&_nc_gid=scVKyGkN54dWxVas1vTlYg&oh=00_AfsOUCPbEOWXmwZRIDoHdumg_yhUZiMhH9v4xBvZbCh9BQ&oe=698E8000',
    trips: 12,
    followers: 340,
    following: 180,
  };

  const options = [
    { title: 'My Bookings', icon: 'book' },
    { title: 'Payment Methods', icon: 'credit-card' },
    { title: 'Settings', icon: 'settings' },
    { title: 'Help & Support', icon: 'help-circle' },
    { title: 'Logout', icon: 'log-out' },
  ];

  return (
    <Container className="bg-gray-100">
      {/* Header */}
      <View style={tw`items-center mt-6 mb-6`}>
        <Image
          //source={{ uri: user.avatar }}
          source={require('../../assets/images/tareq-hasan.jpg')}
          style={tw`w-24 h-24 rounded-full`}
        />
        <Text style={tw`text-2xl font-bold mt-3 text-gray-900`}>
          {user.name}
        </Text>
        <Text style={tw`text-gray-500`}>{user.email}</Text>

        {/* Stats */}
        <View style={tw`flex-row mt-4`}>
          <View style={tw`mx-4 items-center`}>
            <Text style={tw`font-bold text-gray-900 text-lg`}>{user.trips}</Text>
            <Text style={tw`text-gray-500`}>Trips</Text>
          </View>
          <View style={tw`mx-4 items-center`}>
            <Text style={tw`font-bold text-gray-900 text-lg`}>{user.followers}</Text>
            <Text style={tw`text-gray-500`}>Followers</Text>
          </View>
          <View style={tw`mx-4 items-center`}>
            <Text style={tw`font-bold text-gray-900 text-lg`}>{user.following}</Text>
            <Text style={tw`text-gray-500`}>Following</Text>
          </View>
        </View>
      </View>

      {/* Options */}
      <View style={tw`mt-6`}>
        {options.map((item, index) => (
          <Pressable
            key={index}
            style={tw`flex-row items-center bg-white p-4 mb-2 rounded-xl shadow-sm`}
          >
            <Ionicons name={item.icon as any} size={24} color="#1E40AF" />
            <Text style={tw`ml-4 text-gray-900 text-base font-medium`}>
              {item.title}
            </Text>
          </Pressable>
        ))}
      </View>
    </Container>
  );
}
