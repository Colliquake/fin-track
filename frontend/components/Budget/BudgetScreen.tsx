import React, { useState } from "react";
import { FlatList, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import CategoriesList from './CategoriesList';

const MonthYear = () => {
    const date = new Date();
    const month = date.toLocaleString('default', {month: 'long'});
    const year = date.getFullYear();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 24}}>
                {month} {year}
            </Text>
        </View>
    )
}

const Balance = () => {
    return (
        <View style={{flex: 2, alignItems: 'center', marginTop: '1%'}}>
            <Text style={{fontSize: 24}}>
                Balance
            </Text>
            <Text style={{fontSize: 36, marginVertical: '2%'}}>
                $1234/$1337
            </Text>
        </View>
    )
}

const BudgetScreen = ({ navigation }) => {
    return (
        <>
            <MonthYear />
            <Balance />
            <CategoriesList />
        </>
    )
}



export default BudgetScreen;