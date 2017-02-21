import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
    Dimensions,
} from 'react-native';

import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react/native'

import DialogComponent from './DialogComponent'

import {
    Alert,
    ActionSheet
} from './DialogView'

let uid = 1;

@observer
class DialogContainer extends Component {

    @observable
    dialogList = [];

    render = () =>
        <View style={{position:"absolute",left:0,right:0,top:0,bottom:0}}>
            {this.dialogList.map((it) =>
                <DialogComponent dialogInfo={it} key={it.id} destroySelf={()=>this.destroyDialog(it)}/>
            )}
        </View>;

    @action
    destroyDialog = (dialogView) => {
        this.dialogList && this.dialogList.remove(dialogView)
    };

    alert = (message, title, buttonList) => {
        const alert = new Alert(uid++);
        alert.title = title;
        alert.message = message;
        if (buttonList) {
            alert.buttonList = buttonList;
        }
        this.dialogList.push(alert);
        return alert
    };

    actionSheet = (title, dataList, itemStrParser, callBack) => {
        const actionSheet = new ActionSheet(uid++);
        actionSheet.title = title;
        actionSheet.dataList = dataList;
        actionSheet.itemStrParser = itemStrParser;
        actionSheet.callBack = callBack;
        this.dialogList.push(actionSheet);
        return actionSheet
    };
}

export default DialogContainer