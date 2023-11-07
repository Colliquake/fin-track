import React, { useState } from "react";
import { SafeAreaView, FlatList, StatusBar, StyleSheet, Text, TouchableOpacity } from "react-native";

type ItemData = {
    id: string;
    title: string;
}

const DATA: ItemData[] = [
    {
        id: '0',
        title: 'Housing',
    },
    {
        id: '1',
        title: 'Food',
    },
    {
        id: '2',
        title: 'Transport',
    },
    {
        id: '3',
        title: 'Entertainment',
    },
    {
        id: '4',
        title: 'Personal',
    },
    {
        id: '5',
        title: 'Finances',
    },
    {
        id: '6',
        title: 'Children',
    },
    {
        id: '7',
        title: 'Credits',
    },
]

type ItemProps = {
    item: ItemData;
    onPress: () => void;
    backgroundColor: string;
    textColor: string;
};

const Item = ({ item, onPress, backgroundColor, textColor }: ItemProps) => (
    <TouchableOpacity onPress={onPress} style={[styles.item, { backgroundColor }]}>
        <Text style={[styles.title, { color: textColor }]}>{item.title}</Text>
    </TouchableOpacity>
);

const CategoriesList = () => {
    const [selectedId, setSelectedId] = useState<string>();

    const renderItem = ({ item }: {item: ItemData}) => {
        const backgroundColor = item.id === selectedId ? '#6e3b6e' : '#f9c2ff';
        const color = item.id === selectedId ? 'white' : 'black';

        return (
            <Item
                item={item}
                onPress={() => setSelectedId(item.id)}
                backgroundColor={backgroundColor}
                textColor={color}
            />
        )
    }
    return (
        <>
            <SafeAreaView style={{ flex: 10 }}>
                <FlatList
                    data={DATA}
                    renderItem={renderItem}
                />
            </SafeAreaView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
});

export default CategoriesList;