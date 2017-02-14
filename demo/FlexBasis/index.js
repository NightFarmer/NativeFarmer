import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react/native'

/**
 * 还没明白flexBasis的用处
 */

class FlexBasis extends Component {

    render() {
        return <View style={{ flex: 1, backgroundColor: '#EEEEEE' }}>
            <View style={{ flex: 1, backgroundColor: "#99ffff" ,flexBasis:100}}>
            </View>
            <View style={{ flex: 1, backgroundColor: "#ffff99" }}/>
        </View>
    }
}

export default FlexBasis