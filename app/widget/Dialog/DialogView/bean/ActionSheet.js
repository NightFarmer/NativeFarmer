import {observable, computed, action} from 'mobx'

import BaseDialogBean from './BaseDialogBean'
import AcitionSheetView from '../view/AcitionSheetView'

class ActionSheet extends BaseDialogBean {
    constructor(id) {
        super(id, AcitionSheetView);
    }

    @observable
    title;

    @observable
    dataList;

    itemStrParser;

    callBack;
}

export default ActionSheet