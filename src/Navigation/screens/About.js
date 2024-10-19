import { View, Text, Button, StyleSheet } from "react-native";
export default function AboutScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.heading}>About Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#000000",
    },
    heading: {
        color: "white",
    },
});