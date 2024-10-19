import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Libraytab from "./Libraytab";
export default function BookmarkScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.librayContainer}>
                <Text style={styles.libray}>Your Library</Text>
                <TouchableOpacity onPress={() => navigation.navigate('NewList')}>
                    <Text style={styles.list}>New List</Text>
                </TouchableOpacity>
            </View>
            <Libraytab />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },
    librayContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingTop: 80,
        marginBottom: 24,
    },
    libray: {
        fontSize: 24,
        color: "white",
        fontWeight: "bold",
    },
    list: {
        color: "white",
        backgroundColor: "green",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
});