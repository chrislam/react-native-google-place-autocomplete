import React, { Component } from 'react';
import {
    StyleSheet,
    View
} from 'react-native';
import {
    func,
    number,
    object,
    string,
} from 'prop-types';
import axios, { CancelToken } from 'axios';
import AutocompleteInput from './lib/AutocompleteInput';
import Predictions from './lib/Predictions';

class GooglePlaceAutocomplete extends Component {
    static propTypes = {
        googleAPIKey: string,
        value: string,
        debounce: number,
        style: object,
        placeholder: string,
        onChangeText: func,
        onPredictions: func,
        onResult: func
    }

    static defaultProps = {
        debounce: 250
    }

    _cancelTokenSource;

    constructor(props) {
        super(props);

        this.state = {
            value: ''
        };

        this._cancelTokenSource = CancelToken.source();
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
            <View style={[style.container, this.props.style]}>
                <AutocompleteInput
                    value={this.state.value}
                    placeholder={this.props.placeholder}
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
        this.setState({value});

        // Fire event
        if (this.props.onChangeText) {
            this.props.onChangeText(value);
        }
    }

    _handleChangeTextSettle = () => {
        if (this.state.value.length > 0) {
            // Get predictions
            this._request('/place/autocomplete', {
                input: this.state.value
            })
            .then(response => {
                if (response && response.data) {
                    switch (response.data.status) {
                        case 'OK':
                        case 'ZERO_RESULTS':
                            this._predictions(response.data.predictions);
                            break;

                        default:
                            console.error('Request Error:', response.data.error_message || response.data.status);
                            break;
                    }
                }
            })
            .catch(error => {
                console.log('error', error);
            });
        } else {
            if (this.state.predictions && this.state.predictions.length > 0) {
                this._predictions([]);
            }
        }
    }

    _predictions(predictions) {
        this.setState({predictions});

        // Fire event
        if (this.props.onPredictions) {
            this.props.onPredictions(predictions);
        }
    }

    _handlePressPrediction = (prediction) => {
        // Get more detail about the place
        this._request('/place/details', {
            placeid: prediction.place_id
        })
        .then(response => {
            if (response && response.data) {
                if (response.data.status === 'OK') {
                    const {result} = response.data;

                    // Fire event
                    if (this.props.onResult) {
                        this.props.onResult(result);
                    }
                } else {
                    console.error('Request Error:', response.data.error_message || response.data.status);
                }
            }
        })
        .catch(error => {
            console.log('error', error);
        });
    }

    _request = (url, params) => {
        // Cancel any other requests
        this._cancelTokenSource.cancel('The "clean slate" protocol');
        this._cancelTokenSource = CancelToken.source();

        params.key = this.props.googleAPIKey;

        return axios({
            url: `${url}/json`,
            method: 'get',
            baseURL: 'https://maps.googleapis.com/maps/api',
            params,
            cancelToken: this._cancelTokenSource.token
        })
        .catch(error => {
            if (axios.isCancel(error)) {
                console.log('Request Cancel:', error.message);
            } else {
                throw error;
            }
        });
    }
}

export const style = StyleSheet.create({
    container: {}
});

export default GooglePlaceAutocomplete;
