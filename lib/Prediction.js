import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

class Prediction extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._handlePress}>
                <View style={style.item}>
                    <Text style={style.hed}>Prediction</Text>
                    <Text style={style.dek}>Prediction description</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _handlePress = () => {
        console.log('Prediction pressed');
    }
}

export const style = StyleSheet.create({
    item: {
        borderTopColor: 'rgba(0, 0, 0, 0.2)',
        borderTopWidth: StyleSheet.hairlineWidth,
        paddingBottom: 10,
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 10,
    },

    dek: {
        color: 'grey'
    },
});

export default Prediction;
