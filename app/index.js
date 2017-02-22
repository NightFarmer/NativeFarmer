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

import AndroidBack from './AndroidBack'

import {Actions, Scene, Router, ActionConst} from 'react-native-router-flux';


// class App extends Component {
//
//     initRoute = {
//         component: MainPage,
//         params: {}
//     };
//
//     render() {
//         return <Navigator
//             ref="navigator"
//             style={{flex:1}}
//             initialRoute={this.initRoute}
//             renderScene={(route,navigator)=>{
//                 const NextComponent = route.component;
//                 return <NextComponent navigator={navigator} {...route.params}/>
//             }}
//
//         />
//     }
// }

// export default AndroidBack(App)


// import Dialog from './widget/Dialog'
import {init as ListUtilInit} from './util/ListUtil'

// Dialog.initWithRouterFlux();
ListUtilInit();

import scenes from './scene'

class App extends React.Component {
    render() {
        return <Router scenes={scenes}/>
    }
}

export default App