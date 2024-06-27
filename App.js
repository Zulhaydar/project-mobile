import * as React from 'react';
import { View, Text, Button, FlatList, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const friends = [
  { id: '1', name: 'Zulhaydar', phone: '0878-7885-2421', description: 'Zulhaydar is a computer science student.', image: require('./assets/zulhaydar.jpeg') },
  { id: '2', name: 'Ripal', phone: '0813-2063-3531', description: 'Ripal is a software engineering student.', image: require('./assets/ripal.jpeg') },
  { id: '3', name: 'Reyhan', phone: '0858-4649-3948', description: 'Reyhan is a data science enthusiast.', image: require('./assets/reyhan.jpeg') },
  { id: '4', name: 'Rafi', phone: '0895-8098-8050', description: 'Rafi is a machine learning specialist.', image: require('./assets/rafi.jpeg') },
  { id: '5', name: 'Zildan', phone: '0895-2367-7603', description: 'Zildan is a front-end developer.', image: require('./assets/zildan.jpeg') },
];

const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={friends}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => navigation.navigate('Detail', { friend: item })}
          >
            <View style={styles.imageContainer}>
              <Image source={item.image} style={styles.image} />
            </View>
            <View style={styles.infoContainer}>
              <View style={styles.textContainer}>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.phone}>{item.phone}</Text>
              </View>
              <TouchableOpacity style={styles.detailButton} onPress={() => navigation.navigate('Detail', { friend: item })}>
                <Text style={styles.detailButtonText}>Detail</Text>
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const DetailScreen = ({ route, navigation }) => {
  const { friend } = route.params;
  return (
    <View style={styles.container}>
      <Image source={friend.image} style={styles.imageLarge} />
      <Text style={styles.name}>{friend.name}</Text>
      <Text style={styles.phone}>{friend.phone}</Text>
      <Text style={styles.description}>{friend.description}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Daftar Teman' }} />
        <Stack.Screen name="Detail" component={DetailScreen} options={{ title: 'Detail Teman' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  imageContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 5,
    borderRadius: 30,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  infoContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 15,
  },
  textContainer: {
    flex: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  phone: {
    fontSize: 16,
    color: 'gray',
  },
  detailButton: {
    backgroundColor: '#007BFF',
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  detailButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imageLarge: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginVertical: 20,
  },
});
