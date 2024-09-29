import { useLocalSearchParams, useNavigation } from "expo-router";
import { Text, View, Image, StyleSheet, Pressable } from "react-native";
import userJson from '../../assets/data/user.json';
import { useLayoutEffect, useState } from "react";
import { User } from "../types";

export default function UserProfile() {
    const [user, setUser] = useState<User>(userJson);
    const { id } = useLocalSearchParams();
    const navigation=useNavigation();

    const onConnect = () =>{
        console.warn('Connected');
    };

    useLayoutEffect(()=>{
        navigation.setOptions({title:user.name});
    },[user?.name]);
    navigation.setOptions({title:user.name});
    
    return (
        <View style={styles.container}>
            {/* header */}
            <View style={styles.header}>
                {/* bg image */}
                <Image source={{ uri: user.backImage }} style={styles.backImage} />
                <View style={styles.headerContent}></View>
                {/* profile image */}
                <Image source={{ uri: user.image }} style={styles.image} />
                {/* name and position */}

                <Text style={styles.name}>{user.name}</Text>
                <Text>{user.position}</Text>
                {/* connect button */}
                <Pressable onPress={onConnect} style={styles.button}>
                    <Text style={styles.buttonText}>Follow</Text>
                </Pressable>
            </View>

            {/* about */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>About</Text>
                {/* <Text style={styles.paragraph}>{user.about}</Text> */}
            </View>

                {/* experience */}


        </View>
    )
    };
    const styles = StyleSheet.create({
        container: {},
        header: {
            backgroundColor:'white',
        },
        backImage: {
            width: '100%',
            aspectRatio: 5 / 2,
            marginBottom: -60,
        },
        headerContent: {
            padding: 10,
            paddingTop: 10,
        },
        image: {
            width: 120,
            aspectRatio: 1,
            borderRadius: 60,
            borderWidth: 3,
            borderColor: 'white',

        },
        name: {
            fontSize: 24,
            fontWeight: '500',
        },
        // button
        button: {
            backgroundColor: 'royalblue',
            padding: 10,
            alignItems: 'center',
            borderRadius: 50,
            marginVertical: 10,
        },
        buttonText: {
            color: 'white',
            fontWeight: '500',
        },
        section:{
            backgroundColor:'white',
            padding:10,
            marginVertical:10,
        },
        sectionTitle:{
            fontSize:18,
            fontWeight:'600',
            marginVertical:5,
        },
        paragraph:{
            lineHeight:20,
          
        },

    });