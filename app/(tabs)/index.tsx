import React, { useState, useEffect } from "react";
import { View, Text, Image, Button, ActivityIndicator, StyleSheet } from "react-native";

const API_URL = "https://random-data-api.com/api/users/random_user?size=80";

type User = {
    id: number;
    uid: string;
    username: string;
    email: string;
    first_name: string;
    last_name: string;
    avatar: string;
};

export default function HomeScreen() {
    const [users, setUsers] = useState<User[]>([]);
    const [currentIndex, setCurrentIndex] = useState(0);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((err) => console.error(err));
    }, []);

    if (loading) {
        return <ActivityIndicator size="large" style={styles.loader} />;
    }

    const user = users[currentIndex];

    return (
        <View style={styles.container}>
            <Image source={{ uri: user.avatar }} style={styles.avatar} />
            <Text style={styles.text}>ID: {user.id}</Text>
            <Text style={styles.text}>UID: {user.uid}</Text>
            <Text style={styles.text}>Username: {user.username}</Text>
            <Text style={styles.text}>Email: {user.email}</Text>
            <Text style={styles.text}>Name: {user.first_name} {user.last_name}</Text>

            <View style={styles.buttonContainer}>
                <Button
                    title="Previous"
                    onPress={() => setCurrentIndex((prev) => Math.max(0, prev - 1))}
                    disabled={currentIndex === 0}
                />
                <Button
                    title="Next"
                    onPress={() => setCurrentIndex((prev) => Math.min(users.length - 1, prev + 1))}
                    disabled={currentIndex === users.length - 1}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: "center", alignItems: "center", padding: 20 },
    avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
    text: { fontSize: 16, marginBottom: 5 },
    buttonContainer: { flexDirection: "row", gap: 10, marginTop: 10 },
    loader: { flex: 1, justifyContent: "center" }
});
