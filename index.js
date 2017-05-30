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

        this.state = {
            value: ''
        };
    }

    componentDidMount() {
        this.setState({
            value: this.props.value
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.value !== this.props.value) {
            this.setState({
                value: nextProps.value
            });
        }
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
