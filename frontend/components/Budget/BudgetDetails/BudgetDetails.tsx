import React from "react";
import { View, Text, SafeAreaView, FlatList, TouchableOpacity } from "react-native";
import ProgressBar from "./ProgressBar";

const BudgetDetails = ({ route }) => {
    const { categoryTitle } = route.params;
    var items = require('./DetailItems')

    // console.log(items[categoryTitle])

    const renderItem = ({ item }: { item: { title: string; amountSpent: number, max: number } }) => {
        const backgroundColor = (item.amountSpent > item.max) ? '#e35252' : '#f9c2ff';

        let percent = 0;

        if (item.max == 0) {
            if (item.amountSpent > 0) percent = 100;
            else percent = 0;
        }
        else {
            percent = Math.min((item.amountSpent / item.max) * 100, 100);
        }

        const barColor = percent == 100 ? 'red' : 'green';

        // let percent = (item.amountSpent / item.max) * 100;
        // if(percent >= 100) percent = 100;
        // if(item.max == 0 && item.amountSpent == 0) percent = 0;

        return (
            <TouchableOpacity onPress={() => { }} style={{
                padding: 20,
                marginVertical: 8,
                marginHorizontal: 16,
                // backgroundColor: backgroundColor,
                backgroundColor: 'white',
                flexDirection: 'column',
            }}>
                <View style={{ flexDirection: 'row' }}>
                    <Text style={{ flex: 7, fontSize: 24, color: 'black', }}>{item.title}</Text>
                    <Text style={{ fontSize: 24, color: 'black' }}>${item.amountSpent}/${item.max}</Text>
                </View>
                <View>
                    <ProgressBar bgcolor={barColor} completed={percent} />
                </View>
            </TouchableOpacity>
        )
    }

    return (
        <View style={{ flex: 1, backgroundColor: 'lightcyan' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ fontSize: 36, fontWeight: 'bold', color: 'black' }}>
                    {categoryTitle}
                </Text>
            </View>
            <SafeAreaView style={{ flex: 6 }}>
                <FlatList
                    data={items[categoryTitle]}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </View>
    )
}

export default BudgetDetails;