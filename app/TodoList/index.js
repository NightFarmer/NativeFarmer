import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';

import {observable, computed, action} from 'mobx'
import {observer} from 'mobx-react/native'

import TodoListView from './TodoListView'
import TodoSumView from './TodoSumView'

class TodoListItem {
    @observable
    title;

    @observable
    finished = false;

    @action
    toggleFinish() {
        this.finished = !this.finished;
    }
}

class TodoListHolder {
    @observable
    dataList = [];

    @computed
    get taskLeft() {
        return this.dataList.filter((it) => !it.finished).length
    }
}

class TodoList extends Component {

    todoList = new TodoListHolder();

    constructor(props) {
        super(props);
        for (let i = 1; i < 30; i++) {
            let listItem = new TodoListItem();
            listItem.title = `待办事项${i}`;
            this.todoList.dataList.push(listItem)
        }
        // let jsobj = this.todoList.dataList.toJSON()
        // console.warn(typeof jsobj)
        // console.warn(jsobj.length)
        // console.error(this.todoList.dataList)

    }

    render() {
        return <View style={{flex:1, backgroundColor:"#fbfbfb"}}>
            <TodoListView todoListHolder={this.todoList}/>
            <TodoSumView todoListHolder={this.todoList}/>
        </View>
    }
}

export default TodoList