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

// import TodoList from './TodoList'
// import AsyncAwaitTest from './AsyncAwaitTest'
// import FlexBasis from './FlexBasis'
// import IntervalUnmount from './IntervalUnmount'
// import LoginDemo from './LoginDemo'
// import MobXWithoutClass from './MobXWithoutClass'
// import timerUnmount from './timerUnmount'

// import {
//     TodoList,
//     AsyncAwaitTest,
//     FlexBasis,
//     IntervalUnmount,
//     LoginDemo,
//     MobXWithoutClass,
//     timerUnmount,
//     ToastDemo,
//     CantBackScene,
//     DialogDemo
// } from "./scene"

// import Dialog from './widget/Dialog'
import {init as ListUtilInit} from './util/ListUtil'

// Dialog.initWithRouterFlux();
ListUtilInit();

import scenes from './scene'

// const scenes = Actions.create(
//     <Scene key="root">
//         {/*<Scene key="login" component={Login} title="Login"/>*/}
//         {/*<Scene key="register" component={Register} title="Register"/>*/}
//         {/*<Scene key="home" component={Home}/>*/}
//         <Scene key="main" component={MainPage} hideNavBar={true} type={ActionConst.RESET}/>
//         <Scene key="AsyncAwaitTest" component={AsyncAwaitTest} hideNavBar={true}/>
//         <Scene key="LoginDemo" component={LoginDemo} hideNavBar={true}/>
//         <Scene key="FlexBasis" component={FlexBasis} hideNavBar={true}/>
//         <Scene key="IntervalUnmount" component={IntervalUnmount} hideNavBar={true}/>
//         <Scene key="LoginDemo" component={LoginDemo} hideNavBar={true}/>
//         <Scene key="MobXWithoutClass" component={MobXWithoutClass} hideNavBar={true}/>
//         <Scene key="timerUnmount" component={timerUnmount} hideNavBar={true}/>
//         <Scene key="TodoList" component={TodoList} hideNavBar={true}/>
//         <Scene key="ToastDemo" component={ToastDemo} hideNavBar={true}/>
//         <Scene key="CantBackScene" component={CantBackScene} hideNavBar={true} panHandlers={null}/>
//     </Scene>
// );

class App extends React.Component {
    render() {
        return <Router scenes={scenes}/>
    }
}

export default App