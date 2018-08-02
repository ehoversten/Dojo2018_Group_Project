(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _sell_product_sell_product_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./sell-product/sell-product.component */ "./src/app/sell-product/sell-product.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_landing_user_landing_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./user-landing/user-landing.component */ "./src/app/user-landing/user-landing.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


// add-on components






var routes = [
    // if root is empty then we're redirecting them to registration.
    { path: '', pathMatch: 'full', component: _registration_registration_component__WEBPACK_IMPORTED_MODULE_4__["RegistrationComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: 'main', component: _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_2__["LandingPageComponent"] },
    { path: 'dashboard/user/:id', component: _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_6__["UserDashboardComponent"] },
    { path: 'main/user/:id', component: _user_landing_user_landing_component__WEBPACK_IMPORTED_MODULE_7__["UserLandingComponent"] },
    { path: 'sell', component: _sell_product_sell_product_component__WEBPACK_IMPORTED_MODULE_5__["SellProductComponent"] },
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n\n<!-- <app-login></app-login> -->\n<!-- <app-registration></app-registration> -->\n<!-- <app-landing-page></app-landing-page> -->\n<!-- <app-sell-product></app-sell-product> -->\n<!-- <app-user-landing></app-user-landing> -->\n<!-- <app-user-dashboard></app-user-dashboard> -->\n\n<app-footer></app-footer>\n\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./header/header.component */ "./src/app/header/header.component.ts");
/* harmony import */ var _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./landing-page/landing-page.component */ "./src/app/landing-page/landing-page.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./registration/registration.component */ "./src/app/registration/registration.component.ts");
/* harmony import */ var _sell_product_sell_product_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./sell-product/sell-product.component */ "./src/app/sell-product/sell-product.component.ts");
/* harmony import */ var _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./user-dashboard/user-dashboard.component */ "./src/app/user-dashboard/user-dashboard.component.ts");
/* harmony import */ var _user_landing_user_landing_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./user-landing/user-landing.component */ "./src/app/user-landing/user-landing.component.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// add on components








// services

var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
                _header_header_component__WEBPACK_IMPORTED_MODULE_7__["HeaderComponent"],
                _footer_footer_component__WEBPACK_IMPORTED_MODULE_6__["FooterComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
                _registration_registration_component__WEBPACK_IMPORTED_MODULE_10__["RegistrationComponent"],
                _landing_page_landing_page_component__WEBPACK_IMPORTED_MODULE_8__["LandingPageComponent"],
                _sell_product_sell_product_component__WEBPACK_IMPORTED_MODULE_11__["SellProductComponent"],
                _user_dashboard_user_dashboard_component__WEBPACK_IMPORTED_MODULE_12__["UserDashboardComponent"],
                _user_landing_user_landing_component__WEBPACK_IMPORTED_MODULE_13__["UserLandingComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_0__["HttpClientModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["BrowserModule"]
            ],
            providers: [_user_service__WEBPACK_IMPORTED_MODULE_14__["UserService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/footer/footer.component.css":
/*!*********************************************!*\
  !*** ./src/app/footer/footer.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    /* outline: 1px dashed red; */\n    margin: auto;\n    font-size: 12px;\n  }\n  \n  .container{\n    width: 90%;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n  }\n  \n  .banner{\n  background-color: rgba(20, 20, 20, 0.89);\n  color: white;\n  padding: 6px;\n  font-style: italic;\n  text-align: center;\n  font-size: 14px;\n  }\n  \n  .box{\n    width: 20%;\n    float: left;\n    margin-left: 4%;\n    margin-top: 10px;\n    text-align: center;\n  }\n  \n  .img{\n    margin-left: 4px;\n    margin-top: 1px;\n  }\n  "

/***/ }),

/***/ "./src/app/footer/footer.component.html":
/*!**********************************************!*\
  !*** ./src/app/footer/footer.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <h4 class=\"banner\">Shop The Dojo</h4>\n\n  <div class=\"box\">\n    <h4>CONTACT CUSTOMER CARE</h4>\n    <p>Email us 24/7 at:\n      <br> support@shopthedojo.com\n    </p>\n  </div>\n\n  <div class=\"box\">\n    <h4>@SHOPTHEDOJO</h4>\n    <img width=\"20\" alt=\"Facebook Logo\" src=\"http://www.stickpng.com/assets/images/584ac2d03ac3a570f94a666d.png\">\n    <img width=\"20\" alt=\"Instagram Logo\" class=\"img\" src=\"https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png\">\n    <img width=\"20\" alt=\"Google+ Logo\" class=\"img\" src=\"https://vignette.wikia.nocookie.net/markiplier/images/7/7e/Google%2B_Icon.png/revision/latest?cb=20150104105518\">\n    <img width=\"20\" alt=\"Twitter Logo\" class=\"img\" src=\"https://www.freeiconspng.com/uploads/twitter-icon-11.png\">\n    <img width=\"20\" alt=\"Twitter Logo\" class=\"img\" src=\"https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Mail_iOS.svg/2000px-Mail_iOS.svg.png\">\n  </div>\n\n  <div class=\"box\">\n    <h4>CATEGORIES</h4>\n    <a href=\"#\">New Arrivals</a>\n    <br>\n    <a href=\"#\">Nike</a>\n    <br>\n    <a href=\"#\">Balenciaga</a>\n    <br>\n    <a href=\"#\">Adidas</a>\n  </div>\n\n  <div class=\"box\">\n    <h4>FIND US!</h4>\n    <p>Shop The Dojo\n      <br> 12435 Main Street\n      <br> Potomac, MD 20854</p>\n  </div>\n\n\n</div>\n"

/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/header/header.component.css":
/*!*********************************************!*\
  !*** ./src/app/header/header.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n    /* outline: 1px dashed red; */\n    margin: auto;\n  }\n  \n  .container{\n    width: 90%;\n    margin-top: 5%;\n    -ms-flex-pack: justify;\n        justify-content: space-between;\n  }\n  "

/***/ }),

/***/ "./src/app/header/header.component.html":
/*!**********************************************!*\
  !*** ./src/app/header/header.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n\n  <h1> Shop The Dojo </h1>\n\n</div>\n"

/***/ }),

/***/ "./src/app/header/header.component.ts":
/*!********************************************!*\
  !*** ./src/app/header/header.component.ts ***!
  \********************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = /** @class */ (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/landing-page/landing-page.component.css":
/*!*********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  /* outline: 1px dashed red; */\n  margin: auto;\n  font-size: 12px;\n  text-decoration: none;\n}\n\n.container{\n  width: 90%;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin-bottom: 20px;\n}\n\na{\n  font-size: 10px;\n  color: rgb(65, 65, 156);\n}\n\ntable{\n  width: 70%;\n  padding: 10px;\n}\n\nh1{\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.otherProducts{\n  margin-top: 20px;\n  width: 70%;\n  text-align: center;\n}\n\ntd{\n  width: 20%;\n  font-size: 10px;\n}\n\n.navbar a{\n  font-size: 14px;\n  float: right;\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\ninput{\n  width: 100%;\n  border-radius: 10px;\n  border-color: rgb(136, 138, 138);\n  height: 20px;\n  display: block;\n  padding-left: 10px;\n}\n\n.products{\n  margin-top: 20px;\n}\n\n.productLink{\n  margin-left: 15px;\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.html":
/*!**********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n\n  <div class=\"navbar\">\n    <a href=\"#\">Registration</a>\n    <a href=\"#\">Login</a>\n    <a href=\"#\">Admin</a>\n  </div>\n  <div class=\"searchBar\">\n    <input type=text placeholder=\"Product Search\">\n  </div>\n  <div class=\"products\">\n    <a href=\"#\">\n      <h3 class=\"productLink\">All Products</h3>\n    </a>\n    <table class=\"mainProduct\">\n      <tr>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <a href=\"#\">\n            <h1>NIKE</h1>\n          </a>\n          <a href=\"#\">\n            <h3>AIR VAPORMAX PLUS</h3>\n          </a>\n          <h4>$225</h4>\n          <p>US SIZE 9</p>\n          <br>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit deleniti totam odit officia labore delectus,\n            voluptate ut nam repellat?</p>\n\n        </td>\n      </tr>\n    </table>\n\n    <table class=\"otherProducts\">\n      <tr>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <a href=\"#\">\n            <h2>BALENCIAGA</h2>\n          </a>\n        </td>\n        <td>\n          <a href=\"#\">\n            <h2>ADIDAS</h2>\n          </a>\n        </td>\n        <td>\n          <a href=\"#\">\n            <h2>NIKE</h2>\n          </a>\n        </td>\n        <td>\n          <a href=\"#\">\n            <h2>ADIDAS</h2>\n          </a>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <a href=\"#\">KIDS SPEED TRAINERS</a>\n        </td>\n        <td>\n          <a href=\"#\">YEEZY BOOST 350 \"BLUE TINT\"</a>\n        </td>\n        <td>\n          <a href=\"#\">NMD R1 W</a>\n        </td>\n        <td>\n          <a href=\"#\">AIRMAX 97 OG \"2017 RELEASE\"</a>\n        </td>\n      </tr>\n      <tr>\n        <td>$305</td>\n        <td>$305</td>\n        <td>$305</td>\n        <td>$305</td>\n      </tr>\n    </table>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/landing-page/landing-page.component.ts":
/*!********************************************************!*\
  !*** ./src/app/landing-page/landing-page.component.ts ***!
  \********************************************************/
/*! exports provided: LandingPageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LandingPageComponent", function() { return LandingPageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LandingPageComponent = /** @class */ (function () {
    function LandingPageComponent() {
    }
    LandingPageComponent.prototype.ngOnInit = function () {
    };
    LandingPageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-landing-page',
            template: __webpack_require__(/*! ./landing-page.component.html */ "./src/app/landing-page/landing-page.component.html"),
            styles: [__webpack_require__(/*! ./landing-page.component.css */ "./src/app/landing-page/landing-page.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LandingPageComponent);
    return LandingPageComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "{{ login| json }}\n\n\n<div *ngFor=\"let error of errors\">\n  <h1>{{error}}</h1>\n</div>\n<div class=\"reg-form\">\n  <h1>Sign-in</h1>\n    <div class=\"form-group\">\n      <form (submit)=\"Login()\">\n        Email:\n        <input type=\"text\" name=\"logUser.email\" [(ngModel)]=\"logUser.email\"> \n        Password:\n        <input type=\"text\" name=\"logUser.password\" [(ngModel)]=\"logUser.password\"> \n        Confirm:\n        <input type=\"text\" name=\"logUser.confirm\" [(ngModel)]=\"logUser.confirm\">\n        <input type=\"submit\" class=\"btn-success\" value=\"Sign-in\">\n      </form>\n    </div>\n</div>"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../user.service */ "./src/app/user.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var LoginComponent = /** @class */ (function () {
    function LoginComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.init();
    }
    LoginComponent.prototype.init = function () {
        this.logUser = {
            email: '',
            password: ''
        };
        this.errors = [];
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.logUser, function (data) {
            if (data.errors || data.message) {
                _this.errors.push(data.message);
            }
            else {
                localStorage.setItem("uid", data._id);
                _this.router.navigateByUrl("/browse");
            }
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
        this.userService.logout(function (data) { });
        localStorage.setItem('uid', undefined);
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/registration/registration.component.css":
/*!*********************************************************!*\
  !*** ./src/app/registration/registration.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "* {\n  /* outline: 1px dashed red; */\n  margin: auto;\n}\n\n.container {\n  width: 90%;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n}\n"

/***/ }),

/***/ "./src/app/registration/registration.component.html":
/*!**********************************************************!*\
  !*** ./src/app/registration/registration.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Create an account</h1>\n\n{{ registrant | json }}\n<div *ngFor=\"let error of errors\">\n  <h1>{{error}}</h1>\n</div>\n<div class=\"form-group\">\n\n  <form (submit)=\"register()\">\n    <p>First Name\n      <input type=\"text\" name=\"registrant.fName\" [(ngModel)]=\"registrant.fName\">\n    </p>\n    <p>Last Name:\n      <input type=\"text\" name=\"registrant.lName\" [(ngModel)]=\"registrant.lName\">\n    </p>\n    <p>Email:\n      <input type=\"text\" name=\"registrant.email\" [(ngModel)]=\"registrant.email\">\n    </p>\n    <p>Password:\n      <input type=\"text\" name=\"registrant.password\" [(ngModel)]=\"registrant.password\">\n    </p>\n    <p>Confirm Password:\n      <input type=\"text\" name=\"registrant.confirm\" [(ngModel)]=\"registrant.confirm\">\n    </p>\n\n    <input type=\"submit\" class=\"btn-primary\" value=\"Register\">\n\n  </form>\n</div>\n<div  class=\"register-message\">\n  <h3>Checkout Quickly</h3>\n  <p>You'll be able to save you addresses, shipping preferences and more.</p>\n  <h3>More Features</h3>\n  <p>In the coming months, we're launching lots of special functionality for registered users.<br>\n    Sign up to get access first!\n  </p>\n</div>\n"

/***/ }),

/***/ "./src/app/registration/registration.component.ts":
/*!********************************************************!*\
  !*** ./src/app/registration/registration.component.ts ***!
  \********************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../user.service */ "./src/app/user.service.ts");
/* harmony import */ var _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/@angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(userService, router) {
        this.userService = userService;
        this.router = router;
        this.init();
    }
    // when start the component we set up the object for registrant.
    RegistrationComponent.prototype.init = function () {
        this.registrant = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            confirm: ''
        };
        this.errors = [];
    };
    RegistrationComponent.prototype.register = function () {
        var _this = this;
        this.userService.register(this.registrant, function (data) {
            if (data.errors || data.message) {
                _this.errors.push(data.message);
            }
            else {
                localStorage.setItem('uid', data._id);
                _this.router.navigateByUrl('/browse');
            }
        });
    };
    // This is when this route is hit.
    // When initializing the component we are resetting the user. "Logging them out"
    RegistrationComponent.prototype.ngOnInit = function () {
        this.userService.logout(function (data) { });
        localStorage.setItem('uid', undefined);
    };
    RegistrationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-registration',
            template: __webpack_require__(/*! ./registration.component.html */ "./src/app/registration/registration.component.html"),
            styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/registration/registration.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"], _node_modules_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], RegistrationComponent);
    return RegistrationComponent;
}());



/***/ }),

/***/ "./src/app/sell-product/sell-product.component.css":
/*!*********************************************************!*\
  !*** ./src/app/sell-product/sell-product.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  /* outline: 1px dashed red; */\n  margin: auto;\n  text-decoration: none;\n}\n\n.container{\n  width: 90%;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin-top: 5%;\n  margin-bottom: 20px;\n}\n\n.form-group{\n  outline: 1px solid red;\n}\n\n.one{\n  outline: 1px solid pink;\n  width: 30%;\n  float: left;\n}\n\n.imgUpload{\n  width: 30%;\n}\n\n\n"

/***/ }),

/***/ "./src/app/sell-product/sell-product.component.html":
/*!**********************************************************!*\
  !*** ./src/app/sell-product/sell-product.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/sell-product/sell-product.component.ts":
/*!********************************************************!*\
  !*** ./src/app/sell-product/sell-product.component.ts ***!
  \********************************************************/
/*! exports provided: SellProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SellProductComponent", function() { return SellProductComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var SellProductComponent = /** @class */ (function () {
    function SellProductComponent() {
    }
    SellProductComponent.prototype.ngOnInit = function () {
    };
    SellProductComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sell-product',
            template: __webpack_require__(/*! ./sell-product.component.html */ "./src/app/sell-product/sell-product.component.html"),
            styles: [__webpack_require__(/*! ./sell-product.component.css */ "./src/app/sell-product/sell-product.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], SellProductComponent);
    return SellProductComponent;
}());



/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.css":
/*!*************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  /* outline: 1px dashed red; */\n  margin: auto;\n  text-decoration: none;\n}\n\n.container{\n  width: 90%;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin-bottom: 20px;\n  margin-top: 20px;\n}\n\n.header{\n  display: -ms-inline-flexbox;\n  display: inline-flex;\n}\n\n#nav{\nfloat: right;\n}\n\n.link{\n  margin-left: 20px;\n}\n\ntable {\n  outline: 1px solid red;\n}\n\nth, td{\n  padding: 5px;\n}\n\n.orderHistory{\n  height: 200px;\n  outline: 1px solid red;\n  overflow: auto;\n}\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.html":
/*!**************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <div class=\"navbar\">\n    <div class=\"header\">\n      <h3>Welcome Back!</h3>\n      <br>\n    </div>\n    <div class=\"header\" id=\"nav\">\n      <a href=\"#\">Logout</a>\n      <a href=\"#\" class=\"link\">Account</a>\n    </div>\n  </div>\n  <h4>ORDER HISTORY</h4><br>\n  <div class=\"orderHistory\">\n    <table width=\"100%\" class=\"table table-hover\">\n      <tr class=\"info\">\n        <th width=\"15%\">PURCHASED</th>\n        <th width=\"15%\">ORDER NO.</th>\n        <th width=\"15%\">NO. OF ITEM(S)</th>\n        <th width=\"30%\">ORDER STATUS</th>\n        <th width=\"15%\">ORDER TOTAL</th>\n      </tr>\n      <tr>\n        <td width=\"15%\">07/15/2018</td>\n        <td width=\"15%\">STD0494929</td>\n        <td width=\"15%\">6 Items</td>\n        <td width=\"30%\">Order Shipped</td>\n        <td width=\"15%\">$808</td>\n      </tr>\n    </table>\n  </div>\n  <br>\n  <br>\n  <h4>REVIEWS</h4><br>\n  <div class=\"orderHistory\">\n    <table width=\"100%\" class=\"table table-hover\">\n      <tr class=\"info\">\n        <th width=\"10%\"></th>\n        <th width=\"10%\">BRAND</th>\n        <th width=\"20%\">ITEM NAME</th>\n        <th width=\"10%\">PRICE</th>\n        <th width=\"15%\">PURCHASED</th>\n        <th width=\"15%\">ACTION</th>\n      </tr>\n      <tr>\n        <td width=\"10%\"><img width=\"40%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\"></td>\n        <td width=\"10%\">ADIDAS</td>\n        <td width=\"20%\">AIR MAX 97 OG QS</td>\n        <td width=\"10%\">$250</td>\n        <td width=\"15%\">April 25, 2017</td>\n        <td width=\"15%\"><a href=\"#\"><button>ADD REVIEW</button></a></td>\n      </tr>\n    </table>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/user-dashboard/user-dashboard.component.ts":
/*!************************************************************!*\
  !*** ./src/app/user-dashboard/user-dashboard.component.ts ***!
  \************************************************************/
/*! exports provided: UserDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserDashboardComponent", function() { return UserDashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserDashboardComponent = /** @class */ (function () {
    function UserDashboardComponent() {
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
    };
    UserDashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-dashboard',
            template: __webpack_require__(/*! ./user-dashboard.component.html */ "./src/app/user-dashboard/user-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./user-dashboard.component.css */ "./src/app/user-dashboard/user-dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDashboardComponent);
    return UserDashboardComponent;
}());



/***/ }),

/***/ "./src/app/user-landing/user-landing.component.css":
/*!*********************************************************!*\
  !*** ./src/app/user-landing/user-landing.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "*{\n  /* outline: 1px dashed red; */\n  margin: auto;\n  font-size: 12px;\n  text-decoration: none;\n}\n\n.container{\n  width: 90%;\n  -ms-flex-pack: justify;\n      justify-content: space-between;\n  margin-bottom: 20px;\n}\n\na{\n  font-size: 10px;\n  color: rgb(65, 65, 156);\n}\n\ntable{\n  width: 70%;\n  padding: 10px;\n}\n\nh1{\n  font-size: 20px;\n  font-weight: bold;\n}\n\n.otherProducts{\n  margin-top: 20px;\n  width: 70%;\n  text-align: center;\n}\n\ntd{\n  width: 20%;\n  font-size: 10px;\n}\n\n.navbar a{\n  font-size: 14px;\n  float: right;\n  margin-right: 10px;\n  margin-bottom: 20px;\n}\n\ninput{\n  width: 100%;\n  border-radius: 10px;\n  border-color: rgb(136, 138, 138);\n  height: 20px;\n  display: block;\n  padding-left: 10px;\n}\n\n.products{\n  margin-top: 20px;\n}\n\n.productLink{\n  margin-left: 15px;\n  font-size: 12px;\n}\n"

/***/ }),

/***/ "./src/app/user-landing/user-landing.component.html":
/*!**********************************************************!*\
  !*** ./src/app/user-landing/user-landing.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n  <br>\n  <h1>Welcome Back!</h1>\n  <h4><i>Thank you for being a member since September 2, 2018!</i></h4>\n  <div class=\"navbar\">\n    <a href=\"#\">Logout</a>\n    <a href=\"#\">Account</a>\n  </div>\n  <div class=\"searchBar\">\n    <input type=text placeholder=\"Product Search\">\n  </div>\n  <div class=\"products\">\n    <a href=\"#\">\n      <h3 class=\"productLink\">All Products</h3>\n    </a>\n    <table class=\"mainProduct\">\n      <tr>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <a href=\"#\">\n            <h1>NIKE</h1>\n          </a>\n          <a href=\"#\">\n            <h3>AIR VAPORMAX PLUS</h3>\n          </a>\n          <h4>$225</h4>\n          <p>US SIZE 9</p>\n          <br>\n          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reprehenderit deleniti totam odit officia labore delectus,\n            voluptate ut nam repellat?</p>\n\n        </td>\n      </tr>\n    </table>\n\n    <table class=\"otherProducts\">\n      <tr>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n        <td>\n          <img width=\"70%\" alt=\"Product Img\" src=\"https://www.freeiconspng.com/uploads/no-image-icon-13.png\">\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <a href=\"#\">\n            <h2>BALENCIAGA</h2>\n          </a>\n        </td>\n        <td>\n          <a href=\"#\">\n            <h2>ADIDAS</h2>\n          </a>\n        </td>\n        <td>\n          <a href=\"#\">\n            <h2>NIKE</h2>\n          </a>\n        </td>\n        <td>\n          <a href=\"#\">\n            <h2>ADIDAS</h2>\n          </a>\n        </td>\n      </tr>\n      <tr>\n        <td>\n          <a href=\"#\">KIDS SPEED TRAINERS</a>\n        </td>\n        <td>\n          <a href=\"#\">YEEZY BOOST 350 \"BLUE TINT\"</a>\n        </td>\n        <td>\n          <a href=\"#\">NMD R1 W</a>\n        </td>\n        <td>\n          <a href=\"#\">AIRMAX 97 OG \"2017 RELEASE\"</a>\n        </td>\n      </tr>\n      <tr>\n        <td>$305</td>\n        <td>$305</td>\n        <td>$305</td>\n        <td>$305</td>\n      </tr>\n    </table>\n\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/user-landing/user-landing.component.ts":
/*!********************************************************!*\
  !*** ./src/app/user-landing/user-landing.component.ts ***!
  \********************************************************/
/*! exports provided: UserLandingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserLandingComponent", function() { return UserLandingComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var UserLandingComponent = /** @class */ (function () {
    function UserLandingComponent() {
    }
    UserLandingComponent.prototype.ngOnInit = function () {
    };
    UserLandingComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-user-landing',
            template: __webpack_require__(/*! ./user-landing.component.html */ "./src/app/user-landing/user-landing.component.html"),
            styles: [__webpack_require__(/*! ./user-landing.component.css */ "./src/app/user-landing/user-landing.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserLandingComponent);
    return UserLandingComponent;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
    }
    UserService.prototype.session = function (cb) {
        this.http.get('/api/users/session').subscribe(function (id) { return cb(id); });
    };
    UserService.prototype.register = function (user, cb) {
        this.http.post('/api/users/register', user).subscribe(function (data) { return cb(data); });
    };
    UserService.prototype.login = function (user, cb) {
        this.http.post('/api/users/login', user).subscribe(function (data) { return cb(data); });
    };
    UserService.prototype.logout = function (cb) {
        this.http.get('/api/users/logout').subscribe(function (data) { return cb(data); });
    };
    UserService.prototype.findById = function (id, cb) {
        this.http.get('/api/users/' + id).subscribe(function (data) { return cb(data); });
    };
    // 7.30.2018 - per Jose. Need update, findAll, delete routes.
    //find all
    UserService.prototype.all = function (cb) {
        this.http.get("/api/users/all")
            .subscribe(function (data) { return cb(data); });
    };
    //delete user
    UserService.prototype.destroy = function (user, cb) {
        this.http.delete("/api/user/delete" + user._id)
            .subscribe(function (data) { return cb(data); });
    };
    //update user
    UserService.prototype.update = function (user, cb) {
        this.http.put("/api/listings/update" + user._id, user)
            .subscribe(function (data) { return cb(data); });
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/paulinosantos/Documents/GitHub/Dojo2018_Group_Project/AngularApp/shopthedojo/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map