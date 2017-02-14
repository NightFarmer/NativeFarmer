import {
    Platform,
    ToastAndroid,
    BackAndroid,
} from 'react-native'

const AndroidBack = (ContentComponent) => class extends ContentComponent {

    componentWillMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
        super.componentWillMount && super.componentWillMount();
    }

    componentWillUnMount() {
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
        super.componentWillUnMount && super.componentWillUnMount();
    }

    handle = function (scene, onBackPress) {
        const routers = scene.props.navigator.getCurrentRoutes();
        routers[routers.length - 1].onBackPress = onBackPress
    };

    /**
     * 返回键监听
     * @returns {boolean}
     */
    onBackAndroid = () => {
        const navigator = this.refs.navigator;
        const routers = navigator.getCurrentRoutes();
        if (routers.length > 1) {
            let topRouter = routers[routers.length - 1];
            if (topRouter.onBackPress && topRouter.onBackPress()) {
                return true;
            }
            navigator.pop();
            return true;
        }
        if (this.lastBackPressed && this.lastBackPressed + 2000 >= Date.now()) {
            //最近2秒内按过back键，可以退出应用。
            return false;
        }
        this.lastBackPressed = Date.now();
        ToastAndroid.show('再按一次退出应用', ToastAndroid.SHORT);
        return true;
    }

};

export default AndroidBack