import { View, Text, Button, StyleSheet } from "react-native";
export default function SaveListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>Saved List Screen</Text>
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