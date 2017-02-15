import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

@observer
class TodoListView extends Component {

    ds = new ListView.DataSource({
        rowHasChanged: (r1, r2) => {
            return r1 !== r2
        }
    });

    render() {
        return <ListView style={{flex:1}}
                         enableEmptySections={true}
                         dataSource={this.ds.cloneWithRows(this.props.todoListHolder.dataList.slice())}
                         renderRow={this.renderRow}
        />
    }

    renderRow = (rowData) => {
        return <TodoListItemView rowData={rowData}/>
    }
}

@observer
class TodoListItemView extends Component {

    renderCount = 0;

    render() {
        this.renderCount++;
        return <TouchableOpacity style={{height:50,flexDirection:'row'}}
                                 onPress={()=>this.props.rowData.toggleFinish()}>
            <Text style={{flex: 1}}> {this.props.rowData.title} {this.props.rowData.finished && '√'}</Text>
            <Text> {this.renderCount}次渲染</Text>
        </TouchableOpacity>
    }
}


export default TodoListView