import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ProgressBar = (props) => {
    const { bgcolor, completed } = props;
    return (
        <View style={styles.container}>
            <View style={[styles.filler, { width: `${completed}%`, backgroundColor: bgcolor }]}>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        height: 5,
        width: '100%',
        backgroundColor: '#e0e0de',
        borderRadius: 50,
        margin: 10,
        marginStart: 0,
    },
    filler: {
        height: '100%',
        borderRadius: 50,
        textAlign: 'right'
    },
});

export default ProgressBar;