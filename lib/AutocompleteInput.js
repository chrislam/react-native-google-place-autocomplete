import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import {
    func,
    number,
    object,
} from 'prop-types';
import debounce from 'lodash.debounce';

class AutocompleteInput extends Component {
    static propTypes = {
        customStyle: object,
        inputStyle: object,
        debounce: number,
        onChangeText: func.isRequired,
        onChangeTextSettle: func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {containerStyle, inputStyle} = this.props;
        return (
            <View style={{...style.container, ...containerStyle}}>
                <TextInput
                    onChangeText={this._handleChangeText}
                    style={{...style.input, ...inputStyle}} />
            </View>
        );
    }

    _handleChangeText = (value) => {
        this.props.onChangeText(value);
        this._settle();
    }

    _settle = debounce(() => {
        this.props.onChangeTextSettle();
    }, this.props.debounce);
}

export const style = {
    container: {
        backgroundColor: 'white',
        padding: 10,
        height: 44,
    },

    input: {
        height: '100%',
    }
};

export default AutocompleteInput;
