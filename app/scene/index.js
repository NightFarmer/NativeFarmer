import TodoList from './TodoList'
import AsyncAwaitTest from './AsyncAwaitTest'
import FlexBasis from './FlexBasis'
import IntervalUnmount from './IntervalUnmount'
import LoginDemo from './LoginDemo'
import MobXWithoutClass from './MobXWithoutClass'
import timerUnmount from './timerUnmount'
import ToastDemo from './ToastDemo'
import CantBackScene from './CantBackScene'
import DialogDemo from './DialogDemo'
import MainPage from './MainPage'
import CalendarDemo from './CalendarDemo'

import React, {Component} from 'react';
import {Actions, Scene, ActionConst} from 'react-native-router-flux';

export {
    TodoList,
    AsyncAwaitTest,
    FlexBasis,
    IntervalUnmount,
    LoginDemo,
    MobXWithoutClass,
    timerUnmount,
    ToastDemo,
    CantBackScene,
    DialogDemo,
    CalendarDemo,
}

import Dialog from '../widget/Dialog'
Dialog.initWithRouterFlux();

const scenes = Actions.create(
    <Scene key="root">
        {/*<Scene key="login" component={Login} title="Login"/>*/}
        {/*<Scene key="register" component={Register} title="Register"/>*/}
        {/*<Scene key="home" component={Home}/>*/}
        <Scene key="main" component={MainPage} hideNavBar={true} type={ActionConst.RESET}/>
        <Scene key="AsyncAwaitTest" component={AsyncAwaitTest} hideNavBar={true}/>
        <Scene key="LoginDemo" component={LoginDemo} hideNavBar={true}/>
        <Scene key="FlexBasis" component={FlexBasis} hideNavBar={true}/>
        <Scene key="IntervalUnmount" component={IntervalUnmount} hideNavBar={true}/>
        <Scene key="LoginDemo" component={LoginDemo} hideNavBar={true}/>
        <Scene key="MobXWithoutClass" component={MobXWithoutClass} hideNavBar={true}/>
        <Scene key="timerUnmount" component={timerUnmount} hideNavBar={true}/>
        <Scene key="TodoList" component={TodoList} hideNavBar={true}/>
        <Scene key="ToastDemo" component={ToastDemo} hideNavBar={true}/>
        <Scene key="CantBackScene" component={CantBackScene} hideNavBar={true} panHandlers={null}/>
        <Scene key="DialogDemo" component={DialogDemo} hideNavBar={true} panHandlers={null}/>
        <Scene key="CalendarDemo" component={CalendarDemo} hideNavBar={true}/>
    </Scene>
);

export default scenes