import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
    TouchableOpacity,
    Platform,
    BackAndroid
} from 'react-native';

import {Actions} from 'react-native-router-flux';
import Toast from 'react-native-root-toast'

import backHandler from '../../backHandler'

@backHandler("onBackAndroid")
class CantBackScene extends Component {

    render = () =>
        <View style={styles.container}>
            <Text>不能返回的页面</Text>
            <TouchableOpacity onPress={Actions.pop}>
                <Text>点击返回</Text>
            </TouchableOpacity>
        </View>

    // componentWillMount() {
    //     if (Platform.OS === 'android') {
    //         BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
    //     }
    // }
    //
    // componentWillUnmount() {
    //     if (Platform.OS === 'android') {
    //         BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
    //     }
    // }
    //
    onBackAndroid() {
        Toast.show("返回键被拦截");
        return true
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#ffffDD",
        justifyContent: "center",
        alignItems: "center"
    }
});

export default CantBackScene