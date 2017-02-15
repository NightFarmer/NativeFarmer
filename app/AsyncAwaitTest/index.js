import React, {Component} from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'

import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react/native'


var sleep = function (time) {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve();
        }, time);
    })
};

var start = async function () {
    try {
        // 在这里使用起来就像同步代码那样直观
        console.log('start');
        await sleep(3000); // 这里得到了一个返回错误
        // 所以以下代码不会被执行了
        console.log('end');
    } catch (err) {
        console.log(err); // 这里捕捉到错误 `error`
    }
};

// start();

// async 表示这是一个async函数，await只能用在这个函数里面。
// await 表示在这里等待promise返回结果了，再继续执行。
// await 后面跟着的应该是一个promise对象（当然，其他返回值也没关系，只是会立即执行，不过那样就没有意义了…）
// await等待的虽然是promise对象，但不必写.then(..)，直接可以得到返回值。
// 既然.then(..)不用写了，那么.catch(..)也不用写，可以直接用标准的try catch语法捕捉错误。

class TestOutPut {

    @observable
    text;

    start = async function () {
        try {
            // 在这里使用起来就像同步代码那样直观
            console.log('start');
            this.text = "start";
            await sleep(3000); // 这里得到了一个返回错误
            // 所以以下代码不会被执行了
            console.log('end');
            this.text = "end"
            let hehe =''
            hehe()
        } catch (err) {
            console.warn(err); // 这里捕捉到错误 `error`
        }
    };
}

@observer
class AsyncAwaitTest extends Component {

    output = new TestOutPut();

    render() {
        return <View style={styles.content}>
            <Text>{this.output.text}</Text>
        </View>
    }

    componentDidMount() {
        this.output.start();
    }
}

const styles = StyleSheet.create({
    content: {
        flex: 1,
        backgroundColor: "#EFEF99"
    }
});

export default AsyncAwaitTest