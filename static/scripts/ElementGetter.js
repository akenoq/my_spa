/**
 * Created by akenoq on 21.08.17.
 */

"use strict";

export default class ElementGetter {
    takeElement(s) {

        s = s.toString();

        let elArr = document.getElementsByClassName(s);
        let myEl = elArr[0];

        return myEl;

    }
}