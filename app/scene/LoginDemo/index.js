import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
} from 'react-native';

import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react/native'

import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux';


const delay = (time) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(), time)
    })
};

class LoginData {
    @observable
    username;

    @observable
    password;

    @observable
    result;

    @computed
    get resultStr() {
        if (this.result) {
            return `结果：${JSON.stringify(this.result)}`
        }
        return null
    }
}

let loginUrl = 'http://120.27.107.170/yuerduo-front/loginapi/login';

@observer
class LoginPage extends Component {

    loginData = new LoginData();

    render() {
        return <View style={{flex:1,backgroundColor:"#EFEFEF"}}>
            <TextInput onChangeText={(text)=>this.loginData.username=text}/>
            <TextInput onChangeText={(text)=>this.loginData.password=text}/>
            <Text>{this.loginData.resultStr}</Text>
            <TouchableHighlight underlayColor='#ddd' onPress={this.onLogin}>
                <Text>login</Text>
            </TouchableHighlight>
        </View>
    }

    onLogin = async() => {
        let username = this.loginData.username;
        let password = this.loginData.password;
        console.log(username, password);
        this.loginData.result = "登录中。。。"
        let formData = new FormData();
        formData.append("username", username);
        formData.append("password", password);
        let response = await fetch(loginUrl, {
            method: 'POST',
            body: formData
        });
        console.warn(response.status);
        let resultObj = await response.json();
        console.log(resultObj);
        this.loginData.result = resultObj

        await delay(2000)
        // this.loginData.result = "hehe"
        // this.props.navigator.pop();
        // this.props.navigator.resetTo({component: MainPage})//登陆完成重置整个路由栈
        Actions.main()
    }
}

export default LoginPage