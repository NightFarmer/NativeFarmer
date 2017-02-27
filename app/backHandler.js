import {
    Platform,
    BackAndroid
} from 'react-native';


function backHandler(handler = "handleBack") {

    return function (target) {
        let superMount = target.prototype.componentWillMount;
        let superUnmount = target.prototype.componentWillUnmount;

        let listenerHandler;

        target.prototype.componentWillMount = () => {
            if (Platform.OS === 'android') {
                listenerHandler = BackAndroid.addEventListener('hardwareBackPress', () => {
                    if (target.prototype[handler]) {
                        return target.prototype[handler]()
                    }
                    return true
                });
            }
            superMount && superMount.bind(target.prototype)()
        };

        target.prototype.componentWillUnmount = () => {
            if (Platform.OS === 'android' && listenerHandler) {
                // BackAndroid.removeEventListener('hardwareBackPress', target.prototype.handleBack);
                listenerHandler.remove()
            }
            superUnmount && superUnmount.bind(target.prototype)()
        };
    }
}

export default backHandler