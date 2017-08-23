/**
 * Created by akenoq on 23.08.17.
 */

import ElementGetter from "./ElementGetter.js"

"use strict";

export default class Sum {
    constructor() {
        let elem = new ElementGetter();

        this.operand1 = elem.takeElement("box-sum__input-operand-1");
        this.operand2 = elem.takeElement("box-sum__input-operand-2");
    }

    getSum() {
        let sum = parseInt(this.operand1.value) + parseInt(this.operand2.value);
        return sum;
    }
}