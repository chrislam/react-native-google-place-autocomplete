import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

class GooglePlaceAutocomplete extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <View style={style.inputContainer}>
                    <TextInput style={style.input} />
                </View>
            </View>
        );
    }
}

export const style = StyleSheet.create({
    container: {},

    inputContainer: {
        backgroundColor: '#C9C9CE',
        height: 44,
    },

    input: {
        backgroundColor: '#FFFFFF',
        borderRadius: 5,
        fontSize: 15,
        height: 28,
        marginLeft: 8,
        marginRight: 8,
        marginTop: 7.5,
        paddingBottom: 4.5,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 4.5,
    }
});

export default GooglePlaceAutocomplete;
