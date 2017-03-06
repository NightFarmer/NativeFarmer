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

import {Actions, Scene, Router} from 'react-native-router-flux';


const demoList = [
    {title: '代办事项示例', component: "TodoList"},
    {title: '定时器挂载示例', component: "IntervalUnmount"},
    {title: 'FlexBasis', component: "FlexBasis"},
    {title: 'AsyncAwaitTest', component: "AsyncAwaitTest"},
    {title: '模拟登陆', component: "LoginDemo"},
    {title: 'MobX不使用额外class', component: "MobXWithoutClass"},
    {title: 'ToastDemo示例', component: "ToastDemo"},
    {title: '不能返回的界面', component: "CantBackScene"},
    {title: 'DialogDemo', component: "DialogDemo"},
    {title: 'CalendarDemo', component: "CalendarDemo"},
];

import backHandler from '../../backHandler'

@backHandler("onBackAndroid")
class DemoListView extends Component {

    render() {
        this.renderCount++;
        return <View style={styles.mainContent}>
            {demoList.map((it) => this.renderItem(it))}
        </View>
    }

    renderItem = (itemData) => {
        return <TouchableOpacity onPress={()=>this.jump(itemData)}
                                 key={itemData.component}>
            <Text>{itemData.title}</Text>
        </TouchableOpacity>
    }

    jump = (itemData) => {
        // Actions.TodoList()
        // console.warn(itemData.component)
        Actions[itemData.component]()
    }

    onBackAndroid() {
        console.warn("back click")
        return true
    }
}

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#DDFFFF"
    }
});

export default DemoListView