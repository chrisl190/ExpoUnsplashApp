import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

const Profile = ({ name }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>Taken by {name}</Text>
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

export default Profile;