
import { Link } from 'expo-router';
import { useForm, Controller } from "react-hook-form"
import React from 'react';
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

const SignInScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topWave}></View>
      <View style={styles.bottomWave}></View>
      <View style={styles.formContainer}>
        <Text style={styles.title}>Hello, Sign in!</Text>

        <TextInput
          placeholder="Enter Your Email"
          placeholderTextColor="#ccc"
          style={styles.input}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          placeholderTextColor="#ccc"
          style={styles.input}
          secureTextEntry={true}
        />

        <TouchableOpacity style={styles.forgotPassword}>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signInButton}>
          <Text style={styles.signInButtonText}>Sign in</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.signUpLink}>
        <Link href="/RegisterScreen" style={styles.registerText}>
          New User? Register Now
      </Link>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e1f5fe', // Light blue background
  },
  registerText: {
    color: '#fff',
    marginTop: 20,
    textAlign: 'center',
    fontWeight: 'bold',
    textDecorationLine: 'underline', 
    // underline the text to make it clickable
  },
  topWave: {
    position: 'absolute',
    width: '100%',
    height: 300,
    backgroundColor: '#03a9f4', // Blue wave
    borderBottomRightRadius: 300,
  },
  bottomWave: {
    position: 'absolute',
    width: '100%',
    height: 300,
    backgroundColor: '#0288d1', // Darker blue wave
    bottom: 0,
    borderTopLeftRadius: 600,
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 20,
    zIndex: 1, // Elevate above the wave background
  },
  title: {
    fontSize: 28,
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 40,
  },
  input: {
    backgroundColor: '#fff',
    borderRadius: 30,
    padding: 15,
    marginBottom: 20,
    fontSize: 16,
    color: '#333',
    elevation: 2, // Light shadow effect
  },
  forgotPassword: {
    alignItems: 'flex-end',
    marginBottom: 20,
  },
  forgotPasswordText: {
    color: '#fff',
  },
  signInButton: {
    backgroundColor: '#03a9f4',
    paddingVertical: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginBottom: 30,
  },
  signInButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  signUpLink: {
    alignItems: 'center',
  },
  signUpLinkText: {
    color: '#fff',
  },
});

export default SignInScreen;