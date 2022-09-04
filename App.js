import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView } from 'react-native';

export default function App() {
  const [ enteredGoalText, setEnteredGoalText ] = useState('');
  const [ goals, setGoals ] = useState([]);

  const handleGoalInput = (text) => {
    setEnteredGoalText(text)
  }

  const addGoalHandler = () => {
    setEnteredGoalText('');
    setGoals(goals => [...goals, enteredGoalText]);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput style={styles.textInput} value={enteredGoalText} placeholder='Your goals' onChangeText={handleGoalInput}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>
      <View  style={styles.goalsContainer}>
        <ScrollView>
        {goals?.map((goal, index) => (
          <View key={index} style={styles.goalItemContainer}>
            <Text style={styles.goalText}>
              {goal}
            </Text>
          </View>
          )
        )}
        </ScrollView>
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
  goalItemContainer: {
    height: 35,
    margin: 8, 
    padding: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
    color: 'white'
  },
  goalText: {
    color: 'white'
  }
});
