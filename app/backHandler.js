import {
    Platform,
    BackAndroid
} from 'react-native';


function backHandler(handler = "handleBack") {

    return function (target) {
        let superMount = target.prototype.componentWillMount;
        let superUnmount = target.prototype.componentWillUnmount;

        function handleBack() {
            if (target.prototype[handler]) {
                return target.prototype[handler]()
            }
            return true
        }

        target.prototype.componentWillMount = () => {
            if (Platform.OS === 'android') {
                BackAndroid.addEventListener('hardwareBackPress', handleBack);
            }
            superMount && superMount.bind(target.prototype)()
        };

        target.prototype.componentWillUnmount = () => {
            if (Platform.OS === 'android') {
                BackAndroid.removeEventListener('hardwareBackPress', handleBack);
            }
            superUnmount && superUnmount.bind(target.prototype)()
        };
    }
}

export default backHandler