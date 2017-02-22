import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
} from 'react-native';

import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react/native'

class DialogDemo extends Component {

    render = () =>
        <View style={styles.container}>
            <AlertDemo1 alert={this.alert}/>
            <AlertDemo2 alert={this.alert}/>
            <AlertDemo3 alert={this.alert}/>
        </View>;
}

@observer
class AlertDemo1 extends Component {
    text = "alert1";

    @observable
    msg = '';

    @computed
    get info() {
        return `${this.text} ${this.msg}`
    }

    render = () =>
        <TouchableOpacity onPress={this.onPress}>
            <Text>{this.info}</Text>
        </TouchableOpacity>;

    onPress = () => {
        this.props.alert('title', 'msg', [{text: "foo"}], () => {
            this.msg = "canceled!"
        })
    }
}

@observer
class AlertDemo2 extends Component {
    text = "alert2";

    @observable
    msg = '';

    @computed
    get info() {
        return `${this.text} ${this.msg}`
    }

    render = () =>
        <TouchableOpacity onPress={this.onPress}>
            <Text>{this.info}</Text>
        </TouchableOpacity>;

    onPress = () => {
        this.props.alert('title', 'msg', [
            {
                text: "foo",
                callBack: () => {
                    this.msg = "foo clicked!"
                }
            },
            {
                text: "bar",
                callBack: () => {
                    this.msg = "bar clicked!"
                }
            }
        ])
    }
}

@observer
class AlertDemo3 extends Component {
    text = "alert3";

    @observable
    msg = '';

    @computed
    get info() {
        return `${this.text} ${this.msg}`
    }

    render = () =>
        <TouchableOpacity onPress={this.onPress}>
            <Text>{this.info}</Text>
        </TouchableOpacity>;

    onPress = () => {
        this.props.alert('title', 'msg', [
            {
                text: "foo",
                callBack: () => {
                    this.msg = "foo clicked!"
                }
            },
            {
                text: "bar",
                callBack: () => {
                    this.msg = "bar clicked!"
                }
            },
            {
                text: "baz",
                callBack: () => {
                    this.msg = "baz clicked!"
                }
            }
        ])
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
});

export default DialogDemo