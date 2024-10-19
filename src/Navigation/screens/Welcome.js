import { View, Text, Button, StyleSheet, StatusBar, ScrollView, TouchableOpacity } from "react-native";
import Ionicons from '@expo/vector-icons/Ionicons';
import { Link } from "@react-navigation/native";
export default function WelcomeScreen({ navigation }) {
    return (
        <View style={styles.container}>

            <ScrollView >
                <Text style={styles.appName}>Medium</Text>
                <Text style={styles.heading}>Human Stories and ideas.</Text>
                <Text style={styles.para}>Discover perspectives that deepen understanding.</Text>

                <TouchableOpacity >
                    <View style={styles.buttonContainer}>
                        <Ionicons name="logo-google" size={30} color="white" />
                        <Text style={styles.google}>Sign in with Google</Text>
                    </View>

                </TouchableOpacity>

                <TouchableOpacity >
                    <View style={styles.buttonContainer}>
                        <Ionicons name="logo-facebook" size={30} color="white" />
                        <Text style={styles.google}>Sign in with Facebook</Text>
                    </View>
                </TouchableOpacity>

                <View style={styles.para1}>
                    <Text style={styles.google}>Already have an account? </Text>
                    <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.google1}>Sign up</Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.para1}>
                    <Text style={styles.policy}>
                        <Text >By signing up, you agree to our </Text>
                        <Text style={styles.privacy}>Terms of Service </Text>
                        <Text >and acknowledge that you have read our </Text>
                        <Text style={styles.privacy}>Privacy Policy </Text>
                        <Text >applies to you.</Text>
                    </Text>

                </View>
            </ScrollView >

            <StatusBar style='light' />
        </View >
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#000000",
    },
    appName: {
        color: "white",
        textAlign: "center",
        fontSize: 26,
        fontWeight: "bold",
        marginTop: 32,
        fontFamily: "serif",
    },
    heading: {
        color: "white",
        textAlign: "center",
        fontSize: 60,
        marginTop: 42,
        fontFamily: "serif",
    },
    para: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
        marginTop: 20,
        marginBottom: 24,
        marginHorizontal: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        gap: 20,
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
        backgroundColor: 'transparent',
        paddingVertical: 12,
        marginTop: 20,
        marginHorizontal: 20,
        borderWidth: 0.5,
        borderColor: 'white',
        borderRadius: 100,
    },
    google: {
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
    para1: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginVertical: 26,
        marginHorizontal: 20,
        color: "white",
        textAlign: "center",
        fontSize: 16,
    },
    google1: {
        color: "green",
        textDecorationLine: 'underline',
        textAlign: "center",
        fontSize: 16,
    },
    policy: {
        color: "gray",
        textAlign: "center",
        fontSize: 14,
    },
    terms: {
        color: "white",
        textDecorationLine: 'underline',
        textAlign: "center",
        fontSize: 14,
    },
    privacy: {
        color: "white",
        textDecorationLine: 'underline',
        textAlign: "center",
        fontSize: 14,
    },
    safeAreaView: {
        flex: 1,
        width: "100%",
        paddingTop: 20,
        color: "white",
    }
});