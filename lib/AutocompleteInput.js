import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

class AutocompleteInput extends Component {
    render() {
        return (
            <View style={style.container}>
                <TextInput style={style.input} />
            </View>
        );
    }
}

export const style = StyleSheet.create({
    container: {
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

export default AutocompleteInput;
