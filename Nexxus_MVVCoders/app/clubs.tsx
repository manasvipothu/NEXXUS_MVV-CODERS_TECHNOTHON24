import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList } from 'react-native';

const clubs = [
  { id: '1', name: 'CESA' },
  { id: '2', name: 'CSI' },
  { id: '3', name: 'NSS' },
  { id: '4', name: 'STUDENT COUNCIL' },
];

const CommunityPage = () => {
  const [joinedClubs, setJoinedClubs] = useState<string[]>([]); // Explicitly typing as string array

  const toggleJoinClub = (club: string) => { // Change 'any' to 'string'
    if (joinedClubs.includes(club)) {
      setJoinedClubs(joinedClubs.filter((item) => item !== club));
    } else {
      setJoinedClubs([...joinedClubs, club]);
    }
  };

  const renderClub = ({ item }: { item: { id: string; name: string } }) => { // Provide type for 'item'
    const isJoined = joinedClubs.includes(item.name);
    return (
      <TouchableOpacity
        style={[styles.clubButton, isJoined && styles.clubButtonJoined]}
        onPress={() => toggleJoinClub(item.name)}
      >
        <Text style={styles.clubText}>{item.name}</Text>
        <Text style={styles.joinStatus}>{isJoined ? 'Joined' : 'Join'}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Community Clubs</Text>
      <FlatList
        data={clubs}
        keyExtractor={(item) => item.id}
        renderItem={renderClub}
      />
      <View style={styles.joinedClubsContainer}>
        <Text style={styles.joinedClubsTitle}>Joined Clubs:</Text>
        {joinedClubs.length === 0 ? (
          <Text style={styles.noClubsText}>You haven't joined any clubs yet.</Text>
        ) : (
          joinedClubs.map((club) => (
            <Text key={club} style={styles.joinedClub}>{club}</Text>
          ))
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  clubButton: {
    padding: 15,
    backgroundColor: '#ffffff',
    borderRadius: 10,
    marginVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },
  clubButtonJoined: {
    backgroundColor: '#c6f6d5',
  },
  clubText: {
    fontSize: 18,
  },
  joinStatus: {
    fontSize: 16,
    color: '#007BFF',
  },
  joinedClubsContainer: {
    marginTop: 30,
  },
  joinedClubsTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  noClubsText: {
    marginTop: 10,
    fontSize: 16,
    color: '#999',
  },
  joinedClub: {
    marginTop: 5,
    fontSize: 16,
    color: '#333',
  },
});

export default CommunityPage;

