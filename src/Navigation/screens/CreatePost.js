import { View, Text, Button, StyleSheet } from "react-native";
export default function PostScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text style={{color: "white"}}>Post Screen</Text>
        <Button title="Go to Profile" onPress={() => navigation.navigate('Profile')} />
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