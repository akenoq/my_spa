/**
 * Created by akenoq on 21.08.17.
 */

import BoxShower from "./BoxShower.js";
import ElementGetter from "./ElementGetter.js";
import Sum from "./Sum.js";
import Residual from "./Residual.js";

"use strict";

class MainClass {
    constructor() {
        this.boxShower = new BoxShower();
        this.adderToArr();
        this.boxShower.showBox("main-menu_blue-color");

        this.adderEventsToNaviButtons();
        this.adderEventsToResultButtons();

        console.log("Main Object was created");
    }

    adderToArr() {
        this.boxShower.addToArr("main-menu_blue-color");
        this.boxShower.addToArr("box-sum_grey-color");
        this.boxShower.addToArr("box-residual_grey-color");
    }

    // можно любой метод вывести в отдельный класс
    adderEventsToNaviButtons() {
        let elementGetter = new ElementGetter();

        // t обьявлена вне кнопки - область видимости класса
        let t = this; // создаем указатель на this, чтобы видеть внутри функции кнопки

        let butSum = elementGetter.takeElement("main-menu__button-sum_grey-color");
        butSum.addEventListener("click", function () {
            t.boxShower.showBox("box-sum_grey-color");
        });

        let butRes = elementGetter.takeElement("main-menu__button-residual_grey-color");
        butRes.addEventListener("click", function () {
            t.boxShower.showBox("box-residual_grey-color");
        });

        let boxSumButBack = elementGetter.takeElement("box-sum__button-back");
        boxSumButBack.addEventListener("click", function () {
            t.boxShower.showBox("main-menu_blue-color");
        });

        let boxResButBack = elementGetter.takeElement("box-residual__button-back");
        boxResButBack.addEventListener("click", function () {
            t.boxShower.showBox("main-menu_blue-color");
        });
    }

    adderEventsToResultButtons() {
        let elementGetter = new ElementGetter();

        // t обьявлена вне кнопки - область видимости класса
        let t = this; // создаем указатель на this, чтобы видеть внутри функции кнопки

        let boxSumButResult = elementGetter.takeElement("box-sum__button-sum");
        boxSumButResult.addEventListener("click", function () {
           let objSum = new Sum();
           let sum = objSum.getSum();

           alert("summa = " + sum);
        });

        let boxResButResult = elementGetter.takeElement("box-residual__button-residual");
        boxResButResult.addEventListener("click", function () {
            let objResidual = new Residual();
            let residual = objResidual.getResidual();

            alert("residual = " + residual);
        });
    }
}

// новый способ добавления события загрузки страницы
window.addEventListener("load",function () {
    let mainObject = new MainClass();
});