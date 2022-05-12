import { useState } from "react";
import { StyleSheet, View, FlatList, Button } from 'react-native';
import { StatusBar } from "expo-status-bar";

import GoalItem from "./compnents/GoalItem";
import GoalInput from "./compnents/GoalInput";

export default function App() {
  const [ goalList, setGoalList ] = useState([]);
  const [ showModal, setShowModal ] = useState(false);

  function handleButton (enteredGoalText) {
    setGoalList([
        ...goalList,
      {text: enteredGoalText, id: Math.random().toString()}
    ]);
    endGoalHandler();
  }

  function visibleModalHandler () {
    setShowModal(true)
  }

  function endGoalHandler () {
    setShowModal(false)
  }

  function handleDeleteItem (id) {
    setGoalList( currentGoalList => currentGoalList.filter( goal => goal.id !== id));
  }

  return (
      <>
        <StatusBar style="light"/>
        <View style={styles.container}>
          <Button title="Add goal" color="#a065ec" onPress={visibleModalHandler}/>
          <GoalInput visible={showModal} onAddGoal={handleButton} onCancel={endGoalHandler}/>
          <View style={styles.goalsContainer}>
            <FlatList
                data={goalList}
                alwaysBounceVertical={false}
                keyExtractor={({ id }) => id}
                renderItem={({ item }) => <GoalItem
                    id={item.id}
                    text={item.text}
                    onDeleteItem={handleDeleteItem}
                />}
            />
          </View>
        </View>
      </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5
  }
});
