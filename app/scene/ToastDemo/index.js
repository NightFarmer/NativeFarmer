import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import Toast from 'react-native-root-toast';


class ToastDemo extends Component {

    render = () =>
        <View style={styles.container}>
            <TouchableOpacity onPress={()=>this.toast()}>
                <Text>toast</Text>
            </TouchableOpacity>
        </View>;

    toast = () => {
        //简单的tost
        Toast.show("一个简单的toast");

        // Add a Toast on screen.
        // let toast = Toast.show('This is a message', {
        //     duration: Toast.durations.LONG,
        //     position: Toast.positions.BOTTOM,
        //     shadow: true,
        //     animation: true,
        //     hideOnPress: true,
        //     delay: 0,
        //     onShow: () => {
        //         // calls on toast\`s appear animation start
        //     },
        //     onShown: () => {
        //         // calls on toast\`s appear animation end.
        //     },
        //     onHide: () => {
        //         // calls on toast\`s hide animation start.
        //     },
        //     onHidden: () => {
        //         // calls on toast\`s hide animation end.
        //     }
        // });

        // You can manually hide the Toast, or it will automatically disappear after a `duration` ms timeout.
        // setTimeout(function () {
        //     Toast.hide(toast);
        // }, 500);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FFFFDD",
        alignItems: "center",
        justifyContent: "center"
    }
});

export default ToastDemo