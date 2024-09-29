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









// import React from 'react';
// import { View, Text, FlatList, StyleSheet } from 'react-native';

// // Define the structure for the internship data
// interface Internship {
//   id: string;
//   title: string;
//   company: string;
//   location: string;
//   description: string;
// }

// // Sample internship data
// const internships: Internship[] = [
//   {
//     id: '1',
//     title: 'Frontend Developer',
//     company: 'TechCorp',
//     location: 'Remote',
//     description: 'Work with the frontend team to build amazing UI/UX experiences.',
//   },
//   {
//     id: '2',
//     title: 'Backend Developer',
//     company: 'Innovate Ltd',
//     location: 'New York, NY',
//     description: 'Develop and maintain backend services for large-scale applications.',
//   },
//   {
//     id: '3',
//     title: 'Data Science Intern',
//     company: 'DataGurus',
//     location: 'San Francisco, CA',
//     description: 'Analyze datasets and build machine learning models for predictive analysis.',
//   },
// ];

// // Component to display each internship item
// const InternshipItem: React.FC<{ internship: Internship }> = ({ internship }) => (
//   <View style={styles.internshipItem}>
//     <Text style={styles.title}>{internship.title}</Text>
//     <Text style={styles.company}>{internship.company}</Text>
//     <Text style={styles.location}>{internship.location}</Text>
//     <Text style={styles.description}>{internship.description}</Text>
//   </View>
// );

// // Main Internship Section component
// const InternshipSection: React.FC = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Available Internships</Text>
//       <FlatList
//         data={internships}
//         keyExtractor={(item) => item.id}
//         renderItem={({ item }) => <InternshipItem internship={item} />}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     padding: 20,
//     backgroundColor: '#f5f5f5',
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: 'bold',
//     marginBottom: 20,
//     textAlign: 'center',
//   },
//   internshipItem: {
//     backgroundColor: '#fff',
//     padding: 15,
//     marginBottom: 15,
//     borderRadius: 10,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 5,
//     elevation: 3,
//   },
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//   },
//   company: {
//     fontSize: 16,
//     color: '#666',
//   },
//   location: {
//     fontSize: 14,
//     color: '#999',
//     marginBottom: 10,
//   },
//   description: {
//     fontSize: 14,
//     color: '#333',
//   },
// });

// export default InternshipSection;









import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons, MaterialIcons, FontAwesome } from '@expo/vector-icons';

const internshipData = [
  {
    id: '1',
    title: 'Assistant (Female)',
    company: 'Balaji Enterprises',
    location: 'Delhi',
    duration: '2 Months',
    stipend: '₹ 8,000-10,000/month',
    type: 'Part time',
    datePosted: '2 weeks ago',
    isHiring: true,
  },
  {
    id: '2',
    title: 'Business Development (Sales)',
    company: 'Indusmile Industries',
    location: 'Noida',
    duration: '3 Months',
    stipend: '₹ 10,000-15,000/month',
    type: 'Full time',
    datePosted: '1 week ago',
    isHiring: true,
  },
  {
    id: '3',
    title: 'Marketing Intern',
    company: 'Global Marketing Ltd',
    location: 'Bangalore',
    duration: '1 Month',
    stipend: '₹ 5,000-7,000/month',
    type: 'Internship',
    datePosted: '5 days ago',
    isHiring: false,
  },
  {
    id: '4',
    title: 'Software Developer Intern',
    company: 'Tech Innovators',
    location: 'Pune',
    duration: '6 Months',
    stipend: '₹ 15,000/month',
    type: 'Full time',
    datePosted: '3 weeks ago',
    isHiring: true,
  },
  {
    id: '5',
    title: 'Graphic Designer',
    company: 'Creative Labs',
    location: 'Mumbai',
    duration: '3 Months',
    stipend: '₹ 7,000-10,000/month',
    type: 'Part time',
    datePosted: '2 days ago',
    isHiring: false,
  },
  {
    id: '6',
    title: 'Data Analyst Intern',
    company: 'DataInsights',
    location: 'Hyderabad',
    duration: '4 Months',
    stipend: '₹ 12,000/month',
    type: 'Full time',
    datePosted: '1 month ago',
    isHiring: true,
  },
];

const InternshipApp = () => {
  const renderInternship = ({ item }) => (
    <View style={styles.internshipCard}>
      {item.isHiring && (
        <View style={styles.hiringBadge}>
          <Text style={styles.hiringText}>Actively hiring</Text>
        </View>
      )}
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.company}>{item.company}</Text>
      <View style={styles.detailRow}>
        <Ionicons name="location-outline" size={16} color="gray" />
        <Text style={styles.detailText}>{item.location}</Text>
      </View>
      <View style={styles.detailRow}>
        <Ionicons name="calendar-outline" size={16} color="gray" />
        <Text style={styles.detailText}>Starts Immediately • {item.duration}</Text>
      </View>
      <View style={styles.detailRow}>
        <MaterialIcons name="attach-money" size={16} color="gray" />
        <Text style={styles.detailText}>{item.stipend}</Text>
      </View>
      <View style={styles.tags}>
        <Text style={styles.tag}>{item.type}</Text>
        <Text style={styles.tag}>{item.datePosted}</Text>
      </View>
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.detailsButton}>
          <Text style={styles.buttonText}>View details</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.buttonText}>Apply now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* <Ionicons name="menu" size={24} color="black" /> */}
        {/* <Text style={styles.headerTitle}>Internships</Text> */}
        {/* <View style={styles.headerIcons}>
          <FontAwesome name="search" size={24} color="black" />
          <Ionicons name="notifications-outline" size={24} color="black" />
        </View> */}
      </View>
      {/* <View style={styles.filterSection}>
        <TouchableOpacity style={styles.filterButton}>
          <Text style={styles.filterText}>Filters</Text>
        </TouchableOpacity>
        <Text style={styles.totalInternships}>9630 total internships</Text>
      </View> */}
      <ScrollView style={styles.content}>
        <FlatList
          data={internshipData}
          renderItem={renderInternship}
          keyExtractor={(item) => item.id}
        />
      </ScrollView>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  headerIcons: {
    flexDirection: 'row',
    gap: 20,
  },
  filterSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  filterButton: {
    backgroundColor: '#e6f7ff',
    paddingVertical: 5,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  filterText: {
    color: '#007bff',
  },
  totalInternships: {
    color: '#666',
  },
  content: {
    flex: 1,
  },
  internshipCard: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  hiringBadge: {
    backgroundColor: '#e6f7ff',
    padding: 5,
    borderRadius: 5,
    marginBottom: 5,
  },
  hiringText: {
    color: '#007bff',
    fontSize: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  company: {
    color: '#666',
    marginBottom: 5,
  },
  detailRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 2,
  },
  detailText: {
    marginLeft: 5,
    color: '#666',
  },
  tags: {
    flexDirection: 'row',
    marginVertical: 5,
    gap: 10,
  },
  tag: {
    backgroundColor: '#f0f0f0',
    padding: 5,
    borderRadius: 5,
    fontSize: 12,
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  detailsButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#f0f0f0',
    borderRadius: 20,
  },
  applyButton: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    backgroundColor: '#007bff',
    borderRadius: 20,
  },
  buttonText: {
    color: '#fff',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
  },
});

export default InternshipApp;