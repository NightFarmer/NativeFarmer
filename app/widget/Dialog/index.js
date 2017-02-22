import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Navigator,
} from 'react-native';

import {Actions} from 'react-native-router-flux';

import StaticContainer from 'react-native/Libraries/Components/StaticContainer';

import DialogContainer from './DialogContainer'

class DialogIniter {
    static oriFunc = Actions.iterate;

    static inited = false;

    static initWithRouterFlux = () => {
        if (!DialogIniter.inited)
            Actions.iterate = function (root: Scene, parentProps = {}, refsParam = {}, wrapBy) {
                const oriResult = DialogIniter.oriFunc(root, parentProps, refsParam, wrapBy);
                const OriComponent = oriResult.component;
                if (OriComponent) {
                    class WrapperComponent extends Component {

                        constructor(props) {
                            super(props);
                            OriComponent.prototype.alert = (...p) => {
                                this.refs.dialogs.alert(...p)
                            };
                            OriComponent.prototype.actionSheet = (...p) => {
                                this.refs.dialogs.actionSheet(...p)
                            }
                        }

                        render() {
                            return (
                                <View style={styles.container}>
                                    <StaticContainer shouldUpdate={false}>
                                        <OriComponent {...this.props} />
                                    </StaticContainer>
                                    {/*{elements}*/}
                                    <DialogContainer ref="dialogs"/>
                                </View>
                            );
                        }
                        ;

                    }
                    oriResult.component = WrapperComponent
                }
                return oriResult
            };
        DialogIniter.inited = true
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative'
    }
});

export default DialogIniter;