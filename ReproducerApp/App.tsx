import {SafeAreaView, StyleSheet, View, Button, TextInput} from 'react-native';
import {useState} from 'react';

const initialString = 'An aple mobile which is nothing like aple';

export default function App() {
  const [description1, setDescription1] = useState(initialString);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.input}>
        <Button
          onPress={() =>
            setDescription1(
              'In the Shadow of Young Girls in Flowers, published in 1913, second volume of In Search of Lost Time, won the Goncourt Prize in 1919. For Marcel Proust (1871-1922), it was the rebirth of a work',
            )
          }
          title="Change text"
        />
        <TextInput
          multiline={true}
          maxLength={200}
          value={description1}
          onChangeText={text => {
            console.log(text);
            setDescription1(text);
          }}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  input: {
    marginBottom: 20,
    padding: 10,
  },
});
