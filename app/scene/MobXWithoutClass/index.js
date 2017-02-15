import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    TouchableOpacity
} from 'react-native';

import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react/native'

@observer
class MobXWithoutClass extends Component {

    renderNum = 0;

    @observable
    text1 = "文本1";

    @observable
    text2 = "文本2";

    @action
    changeText1() {
        this.text1 = `${this.text1}A`
    }

    @action
    changeText2() {
        this.text2 = `${this.text2}B`
    }

    @action
    changeText() {
        this.text1 = `${this.text1}A`;
        this.text2 = `${this.text2}B`
    }

    constructor(props) {
        super(props);
        this.text1 = "点击修改文本1";
        this.text2 = "点击修改文本2"
    }

    render() {
        this.renderNum++;
        return <View>
            <TouchableOpacity onPress={()=>this.changeText1()}>
                <Text>{this.text1}</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>this.changeText2()}>
                <Text>{this.text2}</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={()=>this.changeText()}>
                <Text>一起修改</Text>
            </TouchableOpacity>
            <Text>渲染次数：{this.renderNum}</Text>
        </View>
    }
}

export default MobXWithoutClass