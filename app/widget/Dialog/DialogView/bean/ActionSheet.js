import {observable, computed, action} from 'mobx'

import BaseDialogBean from './BaseDialogBean'
import AcitionSheetView from '../view/AcitionSheetView'

class ActionSheet extends BaseDialogBean {
    constructor(id) {
        super(id, AcitionSheetView);
    }

    title;

    dataList;

    itemStrParser;

    callBack;
}

export default ActionSheet