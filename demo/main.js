import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

import TodoList from './TodoList'
import IntervalUnMount from './IntervalUnmount'
import FlexBasis from './FlexBasis'
import AsyncAwaitTest from './AsyncAwaitTest'
import LoginDemo from './LoginDemo'


const demoList = [
    {title: '代办事项示例', component: TodoList},
    {title: '定时器挂载示例', component: IntervalUnMount},
    {title: 'FlexBasis', component: FlexBasis},
    {title: 'AsyncAwaitTest', component: AsyncAwaitTest},
    {title: '模拟登陆', component: LoginDemo},
];

class DemoListView extends Component {

    render() {
        this.renderCount++;
        return <View style={styles.mainContent}>
            {demoList.map((it) => this.renderItem(it))}
        </View>
    }

    renderItem = (itemData) => {
        return <TouchableOpacity onPress={() => this.props.navigator.push({ component: itemData.component })}
                                 key={itemData.component}>
            <Text>{itemData.title}</Text>
        </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default DemoListView