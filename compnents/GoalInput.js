import { useState } from "react";
import { Button, StyleSheet, TextInput, View, Modal, Image } from "react-native";

function GoalInput(props) {
    const [ enteredGoalText, setEnteredGoalText ] = useState('');

    function handleInputText (enteredText) {
        setEnteredGoalText(enteredText)
    }

    function handleButton () {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText('')
    }

    return <Modal visible={props.visible} animationType="slide">
        <View style={styles.inputContainer}>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput
                value={enteredGoalText}
                style={styles.textInput}
                onChangeText={handleInputText}
                placeholder="Your course goal!"
            />
            <View style={styles.buttonContainer}>
                <View style={styles.button}>
                    <Button title="Add goal!" onPress={handleButton} color="#b180f0"/>
                </View>
                <View style={styles.button}>
                    <Button title="Cancel" onPress={props.onCancel} color="#f31282"/>
                </View>
            </View>
        </View>
    </Modal>
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
        backgroundColor: '#311b6b',
    },
    textInput: {
        width: '100%',
        padding: 16,
        borderWidth: 1,
        borderRadius: 6,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438'
    },
    image: {
      width: 100,
      height: 100,
      margin: 40
    },
    buttonContainer: {
        marginTop: 16,
        flexDirection: 'row'
    },
    button: {
        width: '30%',
        marginHorizontal: 8
    }
})
