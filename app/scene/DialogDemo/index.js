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
            <ActionSheet1 actionSheet={this.actionSheet}/>
        </View>;
}

@observer
class DialogDemoRow extends Component {
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
}

class AlertDemo1 extends DialogDemoRow {
    text = "alert1";

    onPress = () => {
        this.props.alert('title', 'msg', [{text: "foo"}], () => {
            this.msg = "canceled!"
        })
    }
}

class AlertDemo2 extends DialogDemoRow {
    text = "alert2";

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

class AlertDemo3 extends DialogDemoRow {
    text = "alert3";

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

class ActionSheet1 extends DialogDemoRow {
    text = "actionSheet1";

    onPress = () => {
        this.props.actionSheet('title', [
                {
                    text: "foo",
                },
                {
                    text: "bar",
                },
                {
                    text: "baz",
                }
            ],
            (item) => item.text,
            (it, index, dataList) => {
                this.msg = `${it.text} selected!`
            },
            () => {
                this.msg = `canceled!`
            }
        )
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