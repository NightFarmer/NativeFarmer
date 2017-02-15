import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

/**
 * MobX会在组件销毁时自动取消订阅,但是定时器并不会取消, 自定义装饰器来实现定时器自动注销
 * */
import timerUnmount from '../timerUnmount'

class Yoo {
    @observable
    hehe
}

class DemoListDataHolder {

    @observable
    dataList = [];

    @computed
    get halfSize() {
        return Math.floor(this.dataList.length / 2);
    }
}

@timerUnmount
@observer
class IntervalUnmount extends Component {
    renderCount = 0;

    componentWillUnmount() {
        console.warn("取消挂载")
    }

    constructor(props) {
        super(props);
        this.demoListDataHolder.dataList.push(new Yoo());
        this.setInterval(() => {
            this.demoListDataHolder.dataList.push(new Yoo())
            console.warn('定时器触发')
        }, 1000)
    }

    demoListDataHolder = new DemoListDataHolder();

    render() {
        this.renderCount++;
        return <View style={{flex:1,backgroundColor:'#EEE'}}>
            <Text>{this.demoListDataHolder.halfSize}</Text>
            <Text>{this.renderCount}</Text>
        </View>
    }
}

export default  IntervalUnmount