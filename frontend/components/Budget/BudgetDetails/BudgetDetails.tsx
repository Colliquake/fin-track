import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";

const BudgetDetails = ({ route }) => {
    const { categoryTitle } = route.params;
    var items = require('./DetailItems')

    console.log(items[categoryTitle])

    const renderItem = ({ item }: { item: { title: string; amountSpent: number, max: number } }) => {
        const backgroundColor = (item.amountSpent > item.max) ? '#e35252' : '#f9c2ff' ;
        const color = 'black';

        return (
            <TouchableOpacity onPress={() => { }} style={{
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                backgroundColor: backgroundColor
            }}>
                <Text style={{ fontSize: 32, color: color }}>{item.title}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 36, fontWeight: 'bold' }}>
                    {categoryTitle}
                </Text>
            </View>
            <SafeAreaView style={{ flex: 6 }}>
                <FlatList
                    data={items[categoryTitle]}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </>
    )
}

export default BudgetDetails;