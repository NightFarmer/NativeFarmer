import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Dimensions,
    StatusBar,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

import DialogView from './DialogView'


const TOAST_MAX_WIDTH = 0.8;
const TOAST_ANIMATION_DURATION = 200;
const DIMENSION = Dimensions.get('window');
const WINDOW_WIDTH = DIMENSION.width;
const WINDOW_HEIGHT = DIMENSION.height;

let styles = StyleSheet.create({
    defaultStyle: {
        position: 'absolute',
        width: WINDOW_WIDTH,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000',
    },
    containerStyle: {
        padding: 10,
        backgroundColor: '#000',
        opacity: 0.8,
        borderRadius: 5,
        marginHorizontal: WINDOW_WIDTH * ((1 - TOAST_MAX_WIDTH) / 2)
    },
    shadowStyle: {
        shadowColor: '#000',
        shadowOffset: {
            width: 4,
            height: 4
        },
        shadowOpacity: 0.8,
        shadowRadius: 6,
        elevation: 10
    },
    textStyle: {
        fontSize: 16,
        color: '#fff',
        textAlign: 'center'
    }
});

@observer
class DialogComponent extends Component {

    render = () =>
        <View
            style={{position:"absolute",width: WINDOW_WIDTH, height:WINDOW_HEIGHT-StatusBar.currentHeight, justifyContent:"center",flexDirection: "row"}}
            {/*下面这个属性能让父容器布的点击事件可穿透*/}
            {/*pointerEvents="box-none"*/}
        >
            <DialogView dialogInfo={this.props.dialogInfo}/>
        </View>
}

export default DialogComponent