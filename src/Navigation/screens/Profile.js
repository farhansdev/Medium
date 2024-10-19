import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView, StatusBar } from 'react-native';
import TopTab from './ProfileTab';
export default function ProfileScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.profileContainer}>
                <Image source={{ uri: 'https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small_2x/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png' }} style={styles.profileImage} />

                <View>
                    <Text style={styles.username}>Farhan Aziz</Text>
                    <Text style={styles.follower}>4 followers • 22 following</Text>
                </View>
            </View>

            <View style={styles.editContainer}>
                <TouchableOpacity onPress={() => navigation.navigate('EditProfile')}>
                    <Text style={styles.post1}>Edit profile</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Bookmark')}>
                    <Text style={styles.post}>Create posts</Text>
                </TouchableOpacity>
            </View>
            <StatusBar barStyle="light" />
            <TopTab />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 50,
        backgroundColor: '#000000',
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 26,
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
    profileContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'start',
        paddingHorizontal: 20,
        gap: 12,
    },
    username: {
        fontSize: 24,
        fontWeight: 'semi-bold',
        color: 'white',
        marginBottom: 12,
    },
    profileImage: {
        width: 90,
        height: 90,
        borderRadius: 70,
    },
    follower: {
        color: 'gray',
        fontSize: 16,
    },
    editContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 24,
        marginVertical: 32,
    },
    post: {
        color: 'white',
        fontSize: 14,
        paddingHorizontal: 28,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 100,
    },
    post1: {
        color: 'white',
        fontSize: 14,
        paddingHorizontal: 28,
        paddingVertical: 10,
        borderWidth: 0.5,
        borderColor: 'gray',
        borderRadius: 100,
    },
    postContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        paddingHorizontal: 24,
        borderColor: 'gray',
        borderBottomWidth: 0.3,

    },
    posts: {
        color: 'white',
        paddingBottom: 18,
    },
    postSection: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    noPost: {
        fontSize: 16,
        color: 'gray',
        paddingTop: 80,
    },

});