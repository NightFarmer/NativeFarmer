import {observable, computed, action} from 'mobx'

import BaseDialogBean from './BaseDialogBean'
import AlertView from '../view/AlertView'

class AlertBean extends BaseDialogBean {
    constructor(id) {
        super(id, AlertView);
    }

    buttonList = [{
        text: "确认",
    }];

    title;

    message;

}

export default AlertBean