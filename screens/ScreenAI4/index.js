import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

const SportAppDashboard = () => {
  return <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Sport App Dashboard</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.card}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Football</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, sapien vel bibendum bibendum, elit sapien bibendum
              sapien, vel bibendum sapien sapien vel bibendum bibendum.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Basketball</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, sapien vel bibendum bibendum, elit sapien bibendum
              sapien, vel bibendum sapien sapien vel bibendum bibendum.
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <Image source={{
          uri: 'https://tinyurl.com/42evm3m3'
        }} style={styles.cardImage} />
          <View style={styles.cardContent}>
            <Text style={styles.cardTitle}>Tennis</Text>
            <Text style={styles.cardDescription}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              malesuada, sapien vel bibendum bibendum, elit sapien bibendum
              sapien, vel bibendum sapien sapien vel bibendum bibendum.
            </Text>
          </View>
        </View>
      </View>
    </View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    height: 80,
    backgroundColor: '#1E90FF',
    justifyContent: 'center',
    alignItems: 'center'
  },
  headerText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center'
  },
  card: {
    width: '100%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  cardImage: {
    width: '100%',
    height: '70%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10
  },
  cardContent: {
    padding: 10
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10
  },
  cardDescription: {
    fontSize: 16,
    color: '#666'
  }
});
export default SportAppDashboard;