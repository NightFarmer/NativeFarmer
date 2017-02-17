import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

@observer
class DialogView extends Component {
    // flex-end
    render = () =>
        <View style={{height:100, width:100,backgroundColor:"#FF000022", alignSelf:"center"}}>
            <Text>{this.props.dialogInfo.message}</Text>
        </View>
}

export default DialogView