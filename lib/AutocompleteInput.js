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
        custom: object,
        debounce: number,
        onChangeText: func.isRequired,
        onChangeTextSettle: func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        const {custom = {}, ...props} = this.props;

        return (
            <View style={[style.container, custom.container]}>
                <TextInput
                    {...props}
                    onChangeText={this._handleChangeText}
                    style={[style.input, custom.input]} />
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

export const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 10,
        height: 44,
    },

    input: {
        height: '100%',
    }
});

export default AutocompleteInput;
