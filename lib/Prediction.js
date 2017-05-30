import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import {
    any,
    func,
    string,
} from 'prop-types';

class Prediction extends Component {
    static propTypes = {
        prediction: any,
        title: string,
        description: string,
        onPress: func.isRequired
    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <TouchableOpacity onPress={this._handlePress}>
                <View style={style.item}>
                    <Text style={style.title}>{this.props.title}</Text>
                    <Text style={style.description}>{this.props.description}</Text>
                </View>
            </TouchableOpacity>
        );
    }

    _handlePress = () => {
        this.props.onPress(this.props.prediction);
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

    description: {
        color: 'grey'
    },
});

export default Prediction;
