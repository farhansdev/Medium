import { View, Text, Button, StyleSheet } from "react-native";
export default function StoryScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>Stries Screen</Text>
        {/* <Button title="Go to Details" onPress={() => navigation.navigate('CreatePost')} /> */}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
    },
});