import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Likes = ({ likes }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>{likes} Likes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row'
  },
  icon: {
    marginRight: 10,
  },
  description: {
  },
});

export default Likes;