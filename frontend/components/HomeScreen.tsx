import React from "react";
import { useCallback, useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";
import { PlaidLink, LinkSuccess, LinkExit } from "react-native-plaid-link-sdk";

var styles = require('./style');

const HomeScreen = ({navigation}) => {
    const [linkToken, setLinkToken] = useState(null);
    const address = Platform.OS === 'ios' ? 'localhost' : '10.0.2.2';

    const createLinkToken = useCallback(async () => {
        await fetch(`http://${address}:8080/api/create_link_token`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ address: address })
        })
            .then((response) => response.json())
            .then((data) => {
                setLinkToken(data.link_token);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [setLinkToken]);

    useEffect(() => {
        if (linkToken == null) {
            createLinkToken();
        }
    }, [linkToken]);

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.heading}>
                <Text style={styles.titleText}>Plaid Quickstart - React Native</Text>
            </View>
            <View style={styles.bottom}>
                <PlaidLink
                    tokenConfig={{
                        token: linkToken,
                        noLoadingState: false,
                    }}
                    onSuccess={async (success: LinkSuccess) => {
                        await fetch(`http://${address}:8080/api/exchange_public_token`, {
                            method: "POST",
                            headers: {
                                "Content-Type": "application/json",
                            },
                            body: JSON.stringify({ public_token: success.publicToken }),
                        })
                            .catch((err) => {
                                console.log(err);
                            });
                        // navigation.navigate('Success', success);
                        navigation.navigate('Success');
                    }}
                    onExit={(response: LinkExit) => {
                        console.log(response);
                    }}>
                    <View style={styles.buttonContainer}>
                        <Text style={styles.buttonText}>Open Link</Text>
                    </View>
                </PlaidLink>
            </View>
        </View>
    )
}

export default HomeScreen;