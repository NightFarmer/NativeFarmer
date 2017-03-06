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

class CalendarControler extends React.Component {

    render() {
        return <View
            style={{flexDirection: "row", width: this.props.width, justifyContent: "space-between"}}>
            <TouchableOpacity onPress={this.reduceMonth.bind(this)}><Text>-</Text></TouchableOpacity>
            <Text>
                {`${this.props.date.getFullYear()}-${this.props.date.getMonth() + 1}`}
            </Text>
            <TouchableOpacity onPress={this.addMonth.bind(this)}><Text>+</Text></TouchableOpacity>
        </View>
    }

    addMonth() {
        let newYear = this.props.date.getFullYear();
        let newMonth = this.props.date.getMonth() + 1;
        if (newMonth > 11) {
            newMonth = 0;
            newYear++;
        }
        this.props.onChangeDate(new Date(newYear, newMonth))
    }

    reduceMonth() {
        let newYear = this.props.date.getFullYear();
        let newMonth = this.props.date.getMonth() - 1;
        if (newMonth < 0) {
            newMonth = 11;
            newYear--;
        }
        this.props.onChangeDate(new Date(newYear, newMonth))
    }
}
class CalendarWeekBar extends React.Component {

    constructor(props) {
        super(props);
        this.weekDayList = ["日", "一", "二", "三", "四", "五", "六"]
    }

    render() {
        return <View
            style={{
                height: 30,
                backgroundColor: "#f7ffd6",
                flexDirection: "row",
                alignItems: "stretch",
            }}>
            {this.weekDayList.map(function (it) {
                return <Text style={{flex: 1, backgroundColor: "#d1d9ff"}} key={it}>{it}</Text>
            })}
        </View>
    }
}

class CalendarDayItem extends React.Component {

    render() {
        return <TouchableOpacity style={{
            width: this.props.size,
            height: this.props.size,
            marginLeft: this.props.data.leftIndent
        }} onPress={this.onClick.bind(this)}>
            <Text>{this.props.data.text}</Text>
        </TouchableOpacity>
    }

    onClick() {
        let date = this.props.data.date;
        alert(`${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`)
    }
}

class CalendarContent extends React.Component {
    constructor(props) {
        super(props);
        this.itemWidth = Math.floor(this.props.width / 7)
    }

    render() {
        return <View style={{ flexWrap: "wrap",flexDirection:"row"}}>
            {this.renderCalendarItem()}
        </View>
    }

    renderCalendarItem() {
        let itemList = [];
        let now = this.props.date;
        let dayNumOfMount = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
        for (let i = 1; i <= dayNumOfMount; i++) {
            let date = new Date(now.getFullYear(), now.getMonth(), i);
            let leftIndent = 0;
            if (i == 1) {
                leftIndent = this.itemWidth * date.getDay();
            }
            itemList.push({
                date: date,
                leftIndent: leftIndent,
                text: i
            })
        }
        return itemList.map(function (it, index) {
            return <CalendarDayItem size={this.itemWidth} data={it} key={index}/>
        }.bind(this))
    }
}

class CalendarView extends React.Component {

    constructor(props) {
        super(props);
        let date = new Date(parseInt(this.props.year), parseInt(this.props.month - 1));
        this.state = {
            date: date
        }
    }

    render() {
        return <View style={this.props.style}>
            <CalendarControler width={this.props.style.width} date={this.state.date}
                               onChangeDate={this.onChangeDate.bind(this)}/>
            <CalendarWeekBar/>
            <CalendarContent width={this.props.style.width} date={this.state.date}/>
        </View>
    }

    onChangeDate(date) {
        this.setState({date: date})
    }

}

class CalendarDemo extends Component {

    render() {
        return <View>
            <CalendarView style={{width:300,backgroundColor:"#eefff6"}} year="2017" month="3"/>
        </View>
    }
}

export default CalendarDemo