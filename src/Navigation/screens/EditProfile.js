import { View, Text, StyleSheet, StatusBar, ScrollView, TouchableOpacity, Image, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function EditProfile({ navigation }) {
    return (
        <View style={styles.container}>
            <ScrollView>
                    <View style={styles.headerContainer}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Ionicons name="close" size={26} color="gray" />
                        </TouchableOpacity>
                        <Text style={styles.editProfile}>Edit Profile</Text>

                        <TouchableOpacity onPress={() => navigation.navigate('Profile')}>
                            <Text style={styles.save}>Save</Text>
                        </TouchableOpacity>
                </View>

                <View style={styles.uploadImage}>
                    <View>
                        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' }} style={styles.profileImage} />
                    </View>
                    <TouchableOpacity>
                        <Text style={styles.image}>choose an image</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.userInputs}>
                    <Text style={styles.name}>Name</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Enter your name'
                        sourceTextEntry={true}
                        placeholderTextColor={'grey'} />
                </View>

                <View style={styles.userInputs}>
                    <Text style={styles.name}>Pronouns</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Add...'
                        sourceTextEntry={true}
                        placeholderTextColor={'grey'} />
                </View>

                <View style={styles.userInputs}>
                    <Text style={styles.name}>Short Bio</Text>
                    <TextInput
                        style={styles.input}
                        placeholder='Add a description'
                        sourceTextEntry={true}
                        placeholderTextColor={'grey'} />
                </View>

                <View style={styles.aboutPage}>
                    <Text style={styles.about}>About page</Text>
                    <Text style={styles.aboutPara}>
                        Edit your about page to tell readers more about yourself, your work, and your interests. Be sure to include your name, pronouns, and a brief bio.
                        The more information you provide, the more readers will know about you.
                    </Text>

                </View>
            </ScrollView>

            <StatusBar style="light" />

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#000000",
    },
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingTop: 20,
        marginBottom: 20,
    },
    editProfile: {
        color: "white",
        fontSize: 18,
        marginRight: 130,
    },
    save: {
        color: "white",
        fontSize: 18,
        textDecorationLine: 'underline',
    },
    uploadImage: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: 'flex-start',
        paddingLeft: 20,
        paddingTop: 30,
        gap: 20,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
    },
    image: {
        color: "white",
        fontSize: 14,
        paddingTop: 28,
        textDecorationLine: 'underline',
    },
    userInputs: {
        paddingTop: 20,
        paddingHorizontal: 10,
    },
    name: {
        color: "white",
        fontSize: 14,
        paddingTop: 20,
        marginBottom: 8,
        marginLeft: 6,
    },
    input: {
        color: "white",
        fontSize: 16,
        padding: 8,
        borderColor: "white",
        borderWidth: 0.3,
        borderRadius: 8,
    },
    aboutPage: {
        paddingTop: 80,
        paddingHorizontal: 10,
    },
    about: {
        color: "white",
        fontSize: 14,
        paddingTop: 14,
        marginLeft: 6,
    },
    aboutPara: {
        color: "grey",
        fontSize: 12,
        paddingTop: 4,
        marginLeft: 6,
        marginBottom: 18,
    },

});