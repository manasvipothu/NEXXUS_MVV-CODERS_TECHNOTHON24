// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
// // import { Text, View } from '../../components/Themed';
// import { FlatList } from 'react-native';
// import PostListItem from '../../components/PostListItem';
// import posts from'../../assets/data/posts.json';


// // const firstPost=posts[0];

// export default function HomeScreen() {
//   return(
//     <FlatList 
//     data={posts}
//     renderItem={({item}) =><PostListItem post={item}/>}
    
//     showsHorizontalScrollIndicator={false}
//     contentContainerStyle={{gap:10}}
//     >

//     </FlatList>
//   )
// }

// const styles = StyleSheet.create({
 
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });







// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';
// import PostListItem from '../../components/PostListItem';
// import posts from'../../assets/data/posts.json';

// const firstPost=posts[0];

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
      
//      <PostListItem post={firstPost} />
      
//     </View>
//   );
// }
// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
   
//   },
//   title: {
//     fontSize: 20,
//     fontWeight: 'bold',
//   },
//   separator: {
//     marginVertical: 30,
//     height: 1,
//     width: '80%',
//   },
// });






import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5, Entypo } from '@expo/vector-icons'; // Icon imports

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Top Navigation Bar */}
      <View style={styles.navBar}>
        <TouchableOpacity>
          {/* <Entypo name="menu" size={24} color="black" /> */}
        </TouchableOpacity>
        {/* <Text style={styles.navTitle}>Home</Text> */}
        {/* <View style={styles.rightIcons}>
          <TouchableOpacity>
            <FontAwesome5 name="bookmark" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="bell" size={24} color="black" />
          </TouchableOpacity>
          <TouchableOpacity>
            <FontAwesome5 name="inbox" size={24} color="black" />
          </TouchableOpacity>
        </View> */}
      </View>

      {/* Greeting Section */}
      <View style={styles.greeting}>
        <Text style={styles.greetingText}>Hi, Manasvi! 👋</Text>
        <Text style={styles.subGreetingText}>We wish you a great day</Text>
      </View>

      {/* Trending Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Trending on Nexxus 🔥</Text>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.trendingSection}>
        {/* Card 1 */}
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Certification courses</Text>
          <Text style={styles.cardTitle}>Master the in-demand skills!</Text>
          <Text style={styles.cardSubtitle}>Get govt.-accredited certification and level-up your resume.</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.buttonText}>Know more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Certification courses</Text>
          <Text style={styles.cardTitle}>Master the in-demand skills!</Text>
          <Text style={styles.cardSubtitle}>Get govt.-accredited certification and level-up your resume.</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.buttonText}>Know more</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Certification courses</Text>
          <Text style={styles.cardTitle}>Master the in-demand skills!</Text>
          <Text style={styles.cardSubtitle}>Get govt.-accredited certification and level-up your resume.</Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.buttonText}>Know more</Text>
          </TouchableOpacity>
        </View>

        {/* Additional cards can be added here similarly */}
      </ScrollView>

      {/* Recommendation Section */}
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionTitle}>Recommended for you</Text>
        <Text style={styles.subTitle}>as per your <Text style={styles.link}>preferences</Text></Text>
      </View>
      <View style={styles.recommendationSection}>
        <View style={styles.recommendationCard}>
          <Text style={styles.activeHiringText}>Actively hiring</Text>
          <Text style={styles.recommendationText}>Social Media Marketing</Text>
        </View>
        <View style={styles.recommendationCard}>
          <Text style={styles.activeHiringText}>Actively hiring</Text>
          <Text style={styles.recommendationText}>Creative Design</Text>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '1f5f',
    paddingHorizontal: 16,
  },
  navBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
  },
  navTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  rightIcons: {
    flexDirection: 'row',
    width: 100,
    justifyContent: 'space-between',
  },
  greeting: {
    marginTop: 20,
  },
  greetingText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  subGreetingText: {
    fontSize: 14,
    color: '#777',
    marginTop: 4,
  },
  sectionHeader: {
    marginTop: 20,
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  subTitle: {
    fontSize: 14,
    color: '#777',
  },
  link: {
    color: '#007bff',
  },
  trendingSection: {
    flexDirection: 'row',
  },
  card: {
    width: 250,
    borderRadius: 8,
    backgroundColor: '#1E90FF',
    padding: 15,
    marginRight: 15,
  },
  cardLabel: {
    color: '#ffffff',
    fontSize: 12,
    marginBottom: 5,
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardSubtitle: {
    color: '#ffffff',
    fontSize: 14,
    marginTop: 5,
  },
  cardButton: {
    marginTop: 10,
    backgroundColor: '#ffdb4d',
    paddingVertical: 8,
    borderRadius: 5,
    alignItems: 'center',
  },
  buttonText: {
    color: '#333',
    fontWeight: 'bold',
  },
  recommendationSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  recommendationCard: {
    width: '48%',
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  activeHiringText: {
    color: '#1E90FF',
    fontSize: 12,
    marginBottom: 5,
  },
  recommendationText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;












