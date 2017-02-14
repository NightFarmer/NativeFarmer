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
 * MobX会在组件销毁时自动取消订阅
 * */

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

@observer
class IntervalUnmount extends Component {
    renderCount = 0;

    constructor(props) {
        super(props);
        this.demoListDataHolder.dataList.push(new Yoo());
        setInterval(() => {
            this.demoListDataHolder.dataList.push(new Yoo())
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