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

let flatMap = require('flatmap');

const DIMENSION = Dimensions.get('window');
const WINDOW_WIDTH = DIMENSION.width;
// const WINDOW_HEIGHT = DIMENSION.height;

// minHeight:WINDOW_HEIGHT*0.18,

@observer
class DialogView extends Component {
    fadeAnim = new Animated.Value(0);
    scaleAnim = new Animated.Value(1.2);

    // flex-end
    render = () =>
        <Animated.View
            style={{
                backgroundColor:"#FFFFFF",
                alignSelf:"center",
                width:WINDOW_WIDTH*0.6,
                opacity: this.fadeAnim,
                borderRadius: 5,
                transform:[{
                    scale:this.scaleAnim,
                }]
            }}>
            <View style={{alignItems:"center",justifyContent:"center",padding:20}}>
                <Text>{this.props.dialogInfo.message}</Text>
            </View>
            <View style={{flexDirection:"row", borderTopWidth:1,borderTopColor:"#CCCCCC"}}>
                {this.renderButtons()}
            </View>
        </Animated.View>;


    renderButtons = () => {
        let buttonListSize = this.props.dialogInfo.buttonList.length;
        return flatMap(this.props.dialogInfo.buttonList, (it, index) => {
                let buttonItems = [];
                if (index > 0) {
                    buttonItems.push(
                        <View key={`${index}-split`}
                              style={{alignSelf:'stretch',width:1,backgroundColor:"#CCCCCC"}}/>
                    )
                }
                let borderBottomLeftRadius = 0;
                let borderBottomRightRadius = 0;
                if (index == 0) {
                    borderBottomLeftRadius = 5;
                }
                if (index == buttonListSize - 1) {
                    borderBottomRightRadius = 5;
                }
                buttonItems.push(
                    <TouchableHighlight
                        key={`${index}`}
                        style={{flex:1,alignItems:"center",justifyContent:"center",padding:10,
                        borderBottomLeftRadius: borderBottomLeftRadius,
                        borderBottomRightRadius:borderBottomRightRadius,
                        }}
                        onPress={()=>{
                            this.props.dismiss();
                            if(it.callBack){
                                it.callBack()
                            }
                        }}
                        underlayColor="#EEEEEE"
                    >
                        <Text>{`${it.text}`}</Text>
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
            this.scaleAnim,    // The value to drive
            {
                toValue: 1,
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
            this.scaleAnim,    // The value to drive
            {
                toValue: 0.8,
                duration: 200
            },           // Configuration
        ).start()
    };
}

export default DialogView