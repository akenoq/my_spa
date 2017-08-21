/**
 * Created by akenoq on 21.08.17.
 */

import BoxShower from "./BoxShower.js";

"use strict";

class MainClass {
    constructor() {
        this.boxShower = new BoxShower();
        this.boxShower.addToArr("main-menu_blue-color");
        this.boxShower.addToArr("box-sum_grey-color");
        this.boxShower.addToArr("box-residual_grey-color");

        this.boxShower.showBox("main-menu_blue-color");

        console.log("Main Object was created");
    }
}

// новый способ добавления события загрузки страницы
window.addEventListener("load",function () {
    let mainObject = new MainClass();
});