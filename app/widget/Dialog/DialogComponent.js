import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    StatusBar,
    Platform,
    ToastAndroid,
    BackAndroid,
    Animated,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'


// let styles = StyleSheet.create({
//     defaultStyle: {
//         position: 'absolute',
//         width: WINDOW_WIDTH,
//         justifyContent: 'center',
//         alignItems: 'center',
//         backgroundColor: '#000',
//     },
//     containerStyle: {
//         padding: 10,
//         backgroundColor: '#000',
//         opacity: 0.8,
//         borderRadius: 5,
//         marginHorizontal: WINDOW_WIDTH * ((1 - TOAST_MAX_WIDTH) / 2)
//     },
//     shadowStyle: {
//         shadowColor: '#000',
//         shadowOffset: {
//             width: 4,
//             height: 4
//         },
//         shadowOpacity: 0.8,
//         shadowRadius: 6,
//         elevation: 10
//     },
//     textStyle: {
//         fontSize: 16,
//         color: '#fff',
//         textAlign: 'center'
//     }
// });

@observer
class DialogComponent extends Component {

    fadeAnim = new Animated.Value(0);

    render = () => {
        let DialogView = this.props.dialogInfo.component;
        return <View
            style={styles.fillComponent}
        >
            <Animated.View
                style={[styles.fillComponent,{
                            backgroundColor: "#00000033",
                            opacity: this.fadeAnim
                }]}
            />
            <DialogView ref="dialogView" dialogInfo={this.props.dialogInfo} dismiss={this.dismiss}/>
        </View>
    };
    dismiss = () => {
        this.refs.dialogView.onDismissAnim && this.refs.dialogView.onDismissAnim();
        this.props.dialogInfo.cancelCallback && this.props.dialogInfo.cancelCallback();
        this.onMaskDismissAnim()
    };

    componentDidMount = () => {
        if (this.refs.dialogView && this.refs.dialogView.onShowAnim) {
            this.refs.dialogView.onShowAnim()
        }
        this.onMaskShowAnim();
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    };

    onMaskShowAnim = () => {
        Animated.timing(
            this.fadeAnim,
            {
                toValue: 1,
                duration: 200
            },
        ).start()
    };

    onMaskDismissAnim = () => {
        Animated.timing(
            this.fadeAnim,
            {
                toValue: 0,
                duration: 200
            },
        ).start(({finished}) => {
            if (finished) {
                this.props.destroySelf();
            }
        })
    };

    componentWillUnmount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    onBackAndroid = () => {
        this.dismiss();
        return true;
    }
}

const styles = StyleSheet.create({
    fillComponent: {
        position: "absolute",
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        justifyContent: "center",
        flexDirection: "row",
    }
});

export default DialogComponent

// {/*下面这个属性能让父容器布的点击事件可穿透*/}
// {/*pointerEvents="box-none"*/}