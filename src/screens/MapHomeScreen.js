import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function MapHomeScreen() {
  // We will integrate react-native-maps here later to show Labo.
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Welcome to Labo!</Text>
      <View style={styles.mapPlaceholder}>
        <Text style={styles.placeholderText}>Map rendering CNSC, Public Market, etc. will go here.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingTop: 50,
    paddingBottom: 20,
    backgroundColor: '#FFD700', // Trike Yellow header
  },
  mapPlaceholder: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    alignItems: 'center',
    justifyContent: 'center',
    margin: 10,
    borderRadius: 10,
  },
  placeholderText: {
    color: '#555555',
  }
});