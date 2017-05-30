import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import AutocompleteInput from './lib/AutocompleteInput';
import Predictions from './lib/Predictions';

class GooglePlaceAutocomplete extends Component {
    static defaultProps = {
        debounce: 250
    }

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
                <AutocompleteInput
                    value={this.state.value}
                    onChangeText={this._handleChangeText}
                    debounce={this.props.debounce}
                    onChangeTextSettle={this._handleChangeTextSettle} />
                <Predictions
                    predictions={this.state.predictions}
                    onPressPrediction={this._handlePressPrediction} />
            </View>
        );
    }

    _handleChangeText = (value) => {
        this.props.onChangeText(value);
        this.setState({
            value
        });
    }

    _handleChangeTextSettle = () => {
        // Get predictions
        this.props.onPredictions();
    }

    _handlePressPrediction = (prediction) => {
        this.props.onPress(prediction);
    }
}

export const style = StyleSheet.create({
    container: {}
});

export default GooglePlaceAutocomplete;
