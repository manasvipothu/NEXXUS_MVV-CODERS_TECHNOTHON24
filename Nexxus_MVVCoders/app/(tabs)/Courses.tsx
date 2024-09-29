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





// CourseSection.tsx

import React from 'react';
import { View, Text, FlatList, Image, StyleSheet } from 'react-native';

type Course = {
  id: string;
  title: string;
  description: string;
  image: string;
};

const courses: Course[] = [
  {
    id: '1',
    title: 'Introduction to React Native',
    description: 'Learn the basics of React Native development.',
    image: 'https://reactnative.dev/img/logo-og.png',
  },
  {
    id: '2',
    title: 'Advanced JavaScript',
    description: 'Dive deep into advanced JavaScript concepts.',
    image: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png',
  },
  {
    id: '3',
    title: 'UI/UX Design',
    description: 'Master the fundamentals of UI/UX design.',
    image: 'https://javatpoint-images.s3.eu-north-1.amazonaws.com/core/images/java-logo3.png',
  },
  {
    id: '4',
    title: 'Advanced JavaScript',
    description: 'Dive deep into advanced JavaScript concepts.',
    image: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png',
  },
  {
    id: '5',
    title: 'Advanced JavaScript',
    description: 'Dive deep into advanced JavaScript concepts.',
    image: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png',
  },
  {
    id: '6',
    title: 'Advanced JavaScript',
    description: 'Dive deep into advanced JavaScript concepts.',
    image: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png',
  },
  {
    id: '7',
    title: 'Advanced JavaScript',
    description: 'Dive deep into advanced JavaScript concepts.',
    image: 'https://seeklogo.com/images/J/javascript-logo-8892AEFCAC-seeklogo.com.png',
  },
];

const CourseSection: React.FC = () => {
  const renderCourse = ({ item }: { item: Course }) => (
    <View style={styles.courseContainer}>
      <Image source={{ uri: item.image }} style={styles.courseImage} />
      <View style={styles.courseInfo}>
        <Text style={styles.courseTitle}>{item.title}</Text>
        <Text style={styles.courseDescription}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Courses</Text>
      <FlatList
        data={courses}
        renderItem={renderCourse}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.courseList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
    backgroundColor: '#12a0dd',
    
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  courseList: {
    paddingBottom: 16,
  },
  courseContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    backgroundColor: '#f9f9f9',
    padding: 10,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  courseImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 12,
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'center',
  },
  courseTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
});

export default CourseSection;










