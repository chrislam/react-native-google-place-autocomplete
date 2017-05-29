import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import AutocompleteInput from './lib/AutocompleteInput';
import Predictions from './lib/Predictions';

class GooglePlaceAutocomplete extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <AutocompleteInput />
                <Predictions />
            </View>
        );
    }
}

export const style = StyleSheet.create({
    container: {}
});

export default GooglePlaceAutocomplete;
