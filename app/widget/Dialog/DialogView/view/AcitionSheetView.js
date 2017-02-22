import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Dimensions,
    Navigator,
    Animated,
    TouchableHighlight,
} from 'react-native';

import {observable, computed} from 'mobx'
import {observer} from 'mobx-react/native'

const DIMENSION = Dimensions.get('window');
const WINDOW_WIDTH = DIMENSION.width;
// const WINDOW_HEIGHT = DIMENSION.height;

// minHeight:WINDOW_HEIGHT*0.18,

@observer
class AcitionSheetView extends Component {
    fadeAnim = new Animated.Value(0);
    translateYAnim = new Animated.Value(100);

    // flex-end
    render = () =>
        <Animated.View
            style={{
                alignSelf:"flex-end",
                width:WINDOW_WIDTH*0.9,
                opacity: this.fadeAnim,
                transform:[{
                    translateY:this.translateYAnim
                }]
            }}>
            <View style={{backgroundColor:"#FFFFFF", borderRadius: 5,}}>
                <View style={{alignItems:"center",justifyContent:"center",padding:20}}>
                    <Text>{this.props.dialogInfo.title}</Text>
                </View>
                <View style={{borderTopWidth:1,borderTopColor:"#CCCCCC"}}>
                    {this.renderButtons()}
                </View>
            </View>
            <TouchableHighlight
                style={{
                        backgroundColor:"#FFFFFF", borderRadius: 5, marginTop:10, marginBottom:10,
                            alignItems:"center",justifyContent:"center",padding:10
                        }}
                onPress={()=>{
                            this.props.dismiss();
                        }}
                underlayColor="#EEEEEE"
            >
                <Text> 取消 </Text>
            </TouchableHighlight>
        </Animated.View>;


    renderButtons = () => {
        let buttonListSize = this.props.dialogInfo.dataList.length;
        return this.props.dialogInfo.dataList.flatMap((it, index) => {
                let buttonItems = [];
                if (index > 0) {
                    buttonItems.push(
                        <View key={`${index}-split`}
                              style={{alignSelf:'stretch',height:1,backgroundColor:"#CCCCCC"}}/>
                    )
                }
                let borderBottomLeftRadius = 0;
                let borderBottomRightRadius = 0;
                if (index == buttonListSize - 1) {
                    borderBottomLeftRadius = 5;
                    borderBottomRightRadius = 5;
                }
                buttonItems.push(
                    <TouchableHighlight
                        key={`${index}`}
                        style={{
                            alignItems:"center",justifyContent:"center",padding:10,
                            borderBottomLeftRadius: borderBottomLeftRadius,
                            borderBottomRightRadius:borderBottomRightRadius,
                        }}
                        onPress={()=>{
                            this.props.dismiss();
                            if(this.props.dialogInfo.callBack){
                                this.props.dialogInfo.callBack(it,index,this.props.dialogInfo.dataList)
                            }
                        }}
                        underlayColor="#EEEEEE"
                    >
                        <Text>{this.props.dialogInfo.itemStrParser(it)}</Text>
                    </TouchableHighlight>
                );
                return buttonItems
            }
        )
    };

    onShowAnim = () => {
        Animated.timing(          // Uses easing functions
            this.fadeAnim,    // The value to drive
            {
                toValue: 1,
                duration: 200
            },           // Configuration
        ).start();
        Animated.spring(          // Uses easing functions
            this.translateYAnim,    // The value to drive
            {
                toValue: 0,
                duration: 200
            },           // Configuration
        ).start()
    };

    onDismissAnim = () => {
        Animated.timing(          // Uses easing functions
            this.fadeAnim,    // The value to drive
            {
                toValue: 0,
                duration: 200
            },           // Configuration
        ).start();
        Animated.timing(          // Uses easing functions
            this.translateYAnim,    // The value to drive
            {
                toValue: 100,
                duration: 200
            },           // Configuration
        ).start()
    };
}

export default AcitionSheetView