// App.tsx
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {

  return (
    <View style={styles.container}>
      <LottieView source={require('./src/img/Animation3.json')}
      autoPlay loop
      style={styles.img1}/>
      <Text style={styles.text}>منصة البلدية الرقمية <Text style={styles.boldText}>(Municipalité El Alia)</Text> هي منصة الكترونية أسست من أجل تسهيل التواصل الرقمي بين البلدية و المواطنين</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.output}>Suivant</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#f5f5f5',
  },
  output: {
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#f5f5f5',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  text: {
    fontSize: 18,
    fontFamily: 'arial',
    color: 'black',
    textAlign: 'center',
    marginBottom: 100,
  },
  img1: {
     width: 350,
     height: 350,
     marginTop: -50,
     marginBottom: 50,
  },
  boldText: {
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#10B982',
    borderRadius: 20,
    width: 300,
    height: 55,
    marginTop: 50,
    alignItems: 'center',
  },
});
