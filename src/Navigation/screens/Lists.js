import { View, Text, Button, StyleSheet } from "react-native";
export default function ListScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>List Screen</Text>
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
});