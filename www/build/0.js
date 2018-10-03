webpackJsonp([0],{

/***/ 273:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IntroSlidesPageModule", function() { return IntroSlidesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__intro_slides__ = __webpack_require__(274);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var IntroSlidesPageModule = /** @class */ (function () {
    function IntroSlidesPageModule() {
    }
    IntroSlidesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__intro_slides__["a" /* IntroSlidesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__intro_slides__["a" /* IntroSlidesPage */]),
            ],
        })
    ], IntroSlidesPageModule);
    return IntroSlidesPageModule;
}());

//# sourceMappingURL=intro-slides.module.js.map

/***/ }),

/***/ 274:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return IntroSlidesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(32);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the IntroSlidesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var IntroSlidesPage = /** @class */ (function () {
    function IntroSlidesPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    IntroSlidesPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad IntroSlidesPage');
    };
    IntroSlidesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-intro-slides',template:/*ion-inline-start:"/Users/softwareengineering/Documents/Bart's Project/TechBooksIonic/src/pages/intro-slides/intro-slides.html"*/'\n<ion-content padding>\n    <ion-slides pager>\n  \n      <ion-slide>\n        <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n          <ion-icon ios="ios-analytics" md="md-analytics" color="primary"></ion-icon>\n        </div>\n  \n        <div>\n          <h2> Track your Routine </h2>\n          <p> Whether it\'s sets, reps, weight used, you can track it all with our intuitive interface. </p>\n        </div>\n      </ion-slide>     \n  \n      <ion-slide>\n          <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n            <ion-icon ios="ios-trophy" md="md-trophy" color="primary"></ion-icon>\n          </div>\n          \n          <div>\n            <h2> Set Personal Goals</h2>\n            <p> We\'re all in the gym for a reason: goals. Set goals for diet and fitness. </p>\n          </div>\n      </ion-slide> \n  \n      <ion-slide>\n          <div class="diag" style="background: url(\'assets/imgs/whitebg.svg\') no-repeat">\n            <ion-icon ios="ios-chatboxes" md="md-chatboxes" color="primary"></ion-icon>\n          </div>\n          \n          <div>\n            <h2> Chat with Others </h2>\n            <p> Inspire and help each other reach fitness and diet goals.</p>\n          </div>\n      </ion-slide>   \n      <button (click)="skip()" id="skip"> {{ skipMsg }} </button>\n    </ion-slides>\n  \n  </ion-content>'/*ion-inline-end:"/Users/softwareengineering/Documents/Bart's Project/TechBooksIonic/src/pages/intro-slides/intro-slides.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* NavParams */]])
    ], IntroSlidesPage);
    return IntroSlidesPage;
}());

//# sourceMappingURL=intro-slides.js.map

/***/ })

});
//# sourceMappingURL=0.js.map