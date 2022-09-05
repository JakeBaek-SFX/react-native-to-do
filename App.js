import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';

export default function App() {
  const [ enteredGoalText, setEnteredGoalText ] = useState('');
  const [ goals, setGoals ] = useState([]);

  const handleGoalInput = (text) => {
    setEnteredGoalText(text)
  }

  const addGoalHandler = () => {
    setEnteredGoalText('');
    setGoals(goals => [...goals, 
      { text: enteredGoalText, id: Math.random().toString()}
    ]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={enteredGoalText} placeholder='Your goals' onChangeText={handleGoalInput}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View  style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return <GoalItem text={itemData.item.text}/>
          }}
        keyExtractor={(item) => {
          return item.id;
        }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 2
  },
  textInput: {
    borderColor: '#cccccc',
    borderWidth: 1,
    width: '70%',
    marginRight: 8,
    padding: 8
  },
  goalsContainer: {
    flex: 5
  },

});
