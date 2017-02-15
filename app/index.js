import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

import MainPage from './Main'

import AndroidBack from './AndroidBack'


class App extends Component {

    initRoute = {
        component: MainPage,
        params: {}
    };

    render() {
        return <Navigator
            ref="navigator"
            style={{flex:1}}
            initialRoute={this.initRoute}
            renderScene={(route,navigator)=>{
                const NextComponent = route.component;
                return <NextComponent navigator={navigator} {...route.params}/>
            }}

        />
    }
}

export default AndroidBack(App)