import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Dimensions,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

import DialogComponent from './DialogComponent'

class Alert {
    type = 1;
    id = uid++;

    @observable
    title;

    @observable
    message
}

let uid = 1;

@observer
class DialogContainer extends Component {

    @observable
    dialogList = [];

    render = () =>
        <View style={{position:"absolute"}}>
            {this.dialogList.map((it) =>
                <DialogComponent dialogInfo={it} key={it.id}/>
            )}
        </View>;

    alert = (message, title, hhe) => {
        const newAlert = new Alert();
        newAlert.message = message;
        newAlert.title = title;
        this.dialogList.push(newAlert)
    }
}

export default DialogContainer