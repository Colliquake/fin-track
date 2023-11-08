import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CategoriesList from './CategoriesList';

const MonthYear = () => {
    const date = new Date();
    const month = date.toLocaleString('default', { month: 'long' });
    const year = date.getFullYear();

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 24, color: 'black' }}>
                {month} {year}
            </Text>
        </View>
    )
}

const Balance = () => {
    return (
        <View style={{ flex: 2, alignItems: 'center', marginTop: '1%' }}>
            <Text style={{ fontSize: 24, color: 'black' }}>
                Balance
            </Text>
            <Text style={{ fontSize: 36, fontWeight: 'bold', color: 'black', marginVertical: '2%' }}>
                $1234/$1337
            </Text>
        </View>
    )
}

const BudgetScreen = ({ navigation }) => {
    return (
        <View style={{flex: 1, backgroundColor: 'lightcyan'}}>
            <MonthYear />
            <Balance />
            <CategoriesList navigation={navigation} />
        </View>
    )
}



export default BudgetScreen;