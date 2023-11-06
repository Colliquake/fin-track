import { createTestScheduler } from "jest";
import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Platform, Text, View } from 'react-native';

var styles = require('./style');

let content = new Array();

const SuccessScreen = () => {
    const address = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';
    const [data, setData] = useState(null);
    const [content, setContent] = useState([]);

    const getBalance = async () => {
        await fetch(`http://${address}:8080/api/balance`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
        })
            .then((response) => response.json())
            .then((data) => {
                setData(data);

                const accDetails = data.Balance.accounts.map(acc => ({
                    official_name: acc.official_name,
                    available_balance: acc.balances.available
                }));
                setContent(accDetails);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    useEffect(() => {
        if (data == null) {
            getBalance();
        }
    }, [data])

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.heading}>
                <Text style={styles.titleText}>Balance Response</Text>
            </View>
            <View style={styles.body}>
                {content.map((acc, index) => (
                    <Text style={styles.baseText} key={index}>
                        Official name: {acc.official_name}
                        {"\n"}
                        Available balance: {acc.available_balance}
                    </Text>
                ))}
            </View>
        </View>
    )
}

export default SuccessScreen;