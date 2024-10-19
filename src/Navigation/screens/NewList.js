import { View, Text, StyleSheet, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function BookmarkScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="close" size={26} color="gray" />
                </TouchableOpacity>
                <Text style={styles.heading}>Create new list</Text>
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>List name</Text>
                <TextInput style={styles.input} placeholder="Add a name" placeholderTextColor={'gray'} />
            </View>

            <View style={styles.inputContainer}>
                <Text style={styles.inputLabel}>Description (optional)</Text>
                <TextInput style={styles.input} placeholder="Add a description" placeholderTextColor={'gray'} />
            </View>

            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Bookmark')}>
                <Text onPress={() => alert('created!')} style={styles.create}>Create</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 42,
        paddingHorizontal: 20,
        backgroundColor: '#000',
        gap: 14,
    },
    backButton: {
        marginRight: 10,
    },
    heading: {
        color: 'white',
        fontSize: 20,
    },
    inputContainer: {
        paddingTop: 44,
        paddingHorizontal: 20,
        marginBottom: 20,
    },
    input: {
        height: 46,
        borderColor: 'white',
        borderWidth: 0.5,
        borderRadius: 6,
        paddingHorizontal: 24,
        color: 'white',
    },
    inputLabel: {
        color: 'white',
        marginBottom: 10,
        marginLeft: 4,
    },
    button: {
        backgroundColor: 'green',
        alignItems: 'center',
        paddingVertical: 12,
        paddingHorizontal: 20,
        borderRadius: 18,
        marginTop: 60,
        marginHorizontal: 32,
    },
    create: {
        color: 'white',
        fontSize: 14,
    }
});