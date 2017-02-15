import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

@observer
class TodoSumView extends Component {

    render() {
        return <View style={{height:30,backgroundColor:'#e4d3ff'}}>
            <Text>待办事项总数量：{this.props.todoListHolder.taskLeft}</Text>
        </View>
    }
}

export default TodoSumView