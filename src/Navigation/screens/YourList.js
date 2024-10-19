import { View, Text, Button, StyleSheet } from "react-native";
export default function YourListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>Your List Screen</Text>
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