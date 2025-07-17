import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from 'react-native';

const App = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (text.trim() !== '') {
      setItems([...items, text]);
      setText('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>📋 My Scrollable List</Text>

      {/* Input Field */}
      <TextInput
        style={styles.input}
        placeholder="Type something..."
        value={text}
        onChangeText={setText}
      />

      {/* Add Button */}
      <Button title="Add Item" onPress={addItem} />

      {/* Scrollable List */}
      <ScrollView style={styles.scrollBox}>
        {items.map((item, index) => (
          <View key={index} style={styles.itemBox}>
            <Text style={styles.itemText}>{index + 1}. {item}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#f0f4f8',
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: '#aaa',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  scrollBox: {
    marginTop: 20,
  },
  itemBox: {
    padding: 12,
    marginVertical: 6,
    backgroundColor: '#dfe6e9',
    borderRadius: 6,
  },
  itemText: {
    fontSize: 16,
  },
});

export default App;
