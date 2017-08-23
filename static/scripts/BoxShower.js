/**
 * Created by akenoq on 21.08.17.
 */

import ElementGetter from "./ElementGetter.js";

"use strict";

export default class BoxShower {
    constructor() {
        this.nameBoxArr = [];
        this.len = 0;
    }

    addToArr(s) {
        s = s.toString();

        this.nameBoxArr.push(s);

        this.len = this.nameBoxArr.length;
    }

    //пробегаемся по всем элементам и скрываем их
    hiddenAll() {
        let elByName = new ElementGetter();

        for (let i=0; i<this.len; ++i){
            let boxName = this.nameBoxArr[i];
            let myEl = elByName.takeElement(boxName);
            myEl.hidden = true;
        }
    }

    showBox(s) {
        s = s.toString();

        this.hiddenAll();

        let elByName = new ElementGetter();

        let myEl = elByName.takeElement(s);
        myEl.hidden = false;
    }
}
