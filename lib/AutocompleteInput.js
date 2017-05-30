import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';
import debounce from 'lodash.debounce';

class AutocompleteInput extends Component {
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
