// import { StyleSheet } from 'react-native';

// import EditScreenInfo from '../../components/EditScreenInfo';
// import { Text, View } from '../../components/Themed';

// export default function TabOneScreen() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Tab One</Text>
//       <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
//       <EditScreenInfo path="app/(tabs)/index.tsx" />
//     </View>
//   );
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















import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';

const LinkedInProfile = () => {
  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Image
          source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTizPVODquL9YnaosfI-jL8A8atNiky00_Maw&s' }} // Replace with your profile image URI
          style={styles.profileImage}
        />
        <Text style={styles.profileText}>#OPENTOWORK</Text>
      </View>

      {/* Profile Info */}
      <View style={styles.infoContainer}>
        <Text style={styles.name}>Manasvi Pothu</Text>
        <Text style={styles.subText}>Developer|| Eager to Grow and Contribute to Innovative Projects</Text>
        <Text style={styles.subText}>PVPPCOE | Padmabhushan Vasantdada Patil College of Engineering</Text>
        <Text style={styles.location}>Mumbai, Maharashtra, India</Text>
        <Text style={styles.connectionText}>Member of CESA-CSI,NSS</Text>
      </View>

      {/* Dashboard Section */}
      <View style={styles.dashboardSection}>
        <Text style={styles.sectionTitle}>Dashboard</Text>
        <View style={styles.dashboardContent}>
          {/* <Text style={styles.dashboardText}>Private to you</Text>
          <Text style={styles.dashboardItem}>26 connections</Text>
          <Text style={styles.dashboardItem}>7 messages</Text> */}
        </View>
      </View>

      {/* Experience Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Experience</Text>
          <TouchableOpacity>
            <Text style={styles.addLink}>+ Add experience</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.experienceItem}>
          <Image
            source={{ uri: 'https://path-to-cesa-image.jpg' }} // Replace with CESA image URI
            style={styles.experienceImage}
          />
          <View>
            <Text style={styles.experienceTitle}>CESA VPPCOE VA</Text>
            <Text style={styles.experienceDuration}>2 mos</Text>
            <Text style={styles.jobTitle}>Technical Committee Member</Text>
            <Text style={styles.jobDuration}>Aug 2024 - Present · 2 mos</Text>
            <Text style={styles.jobTitle}>Documentation Committee Member</Text>
            <Text style={styles.jobDuration}>Aug 2024 - Present · 2 mos</Text>
            <Text style={styles.location}>Mumbai, Maharashtra, India</Text>
          </View>
        </View>
      </View>

    

      {/* Volunteer Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Volunteer Experience</Text>
          <TouchableOpacity>
            <Text style={styles.addLink}>+ Add volunteering</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Skills Section */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Skills</Text>
          <TouchableOpacity>
            <Text style={styles.addLink}>+ Add skills</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
  },
  header: {
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    padding: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  profileText: {
    color: 'green',
    fontWeight: 'bold',
    marginTop: 10,
  },
  infoContainer: {
    padding: 15,
    backgroundColor: '#ffff',
    marginTop: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 14,
    marginTop: 5,
  },
  location: {
    fontSize: 14,
    color: '#555',
    marginTop: 10,
  },
  connectionText: {
    fontSize: 14,
    color: '#0073b1',
    marginTop: 10,
  },
  dashboardSection: {
    padding: 15,
    backgroundColor: '#ffff',
    marginTop: 10,
  },
  dashboardContent: {
    marginTop: 10,
  },
  dashboardText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  dashboardItem: {
    fontSize: 14,
    color: '#0073b1',
    marginTop: 5,
  },
  section: {
    padding: 15,
    backgroundColor: '#fff',
    marginTop: 10,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  addLink: {
    color: '#0073b1',
  },
  experienceItem: {
    flexDirection: 'row',
    marginTop: 15,
  },
  experienceImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  experienceTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  experienceDuration: {
    fontSize: 14,
    color: '#555',
  },
  jobTitle: {
    fontSize: 14,
    marginTop: 5,
  },
  jobDuration: {
    fontSize: 14,
    color: '#555',
  },
  educationItem: {
    flexDirection: 'row',
    marginTop: 15,
  },
  educationImage: {
    width: 50,
    height: 50,
    marginRight: 10,
  },
  educationTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  educationDetails: {
    fontSize: 14,
    marginTop: 5,
  },
  educationDuration: {
    fontSize: 14,
    color: '#555',
  },
});

export default LinkedInProfile;















