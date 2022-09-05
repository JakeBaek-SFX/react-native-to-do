import { View, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
  const { text } = props;

  return (
    <View style={styles.goalItemContainer}>
      <Text style={styles.goalText}>
        {text}
      </Text>
  </View>
  )
}

const styles = StyleSheet.create({
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
})

export default GoalItem;