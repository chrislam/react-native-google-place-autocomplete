import React, { Component } from 'react';
import {
    StyleSheet,
    FlatList,
    View
} from 'react-native';
import Prediction from './Prediction';

class Predictions extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={style.container}>
                <FlatList
                    data={this.props.predictions}
                    keyExtractor={this._keyExtractor}
                    renderItem={this._renderItem} />
            </View>
        );
    }

    _keyExtractor = (prediction) => {
        return prediction.place_id;
    }

    _renderItem = (data) => {
        return (
            <Prediction
                prediction={data.item}
                title={data.item.structured_formatting.main_text}
                description={data.item.structured_formatting.secondary_text}
                onPress={this.props.onPressPrediction} />
        );
    }
}

export const style = StyleSheet.create({
    container: {
        backgroundColor: 'white',
    },
});

export default Predictions;
