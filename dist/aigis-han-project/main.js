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
		var e = new Error("Cannot find module '" + req + "'");
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
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _files_files_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./files/files.component */ "./src/app/files/files.component.ts");
/* harmony import */ var _editor_editor_editor_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./editor/editor/editor.component */ "./src/app/editor/editor/editor.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mypage_mypage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./mypage/mypage.component */ "./src/app/mypage/mypage.component.ts");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/reg/reg.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var routes = [
    { path: '', redirectTo: '/files', pathMatch: 'full' },
    { path: 'dashboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_2__["DashboardComponent"] },
    { path: 'files', component: _files_files_component__WEBPACK_IMPORTED_MODULE_3__["FilesComponent"] },
    { path: 'editor/:id', component: _editor_editor_editor_component__WEBPACK_IMPORTED_MODULE_4__["EditorComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'mypage', component: _mypage_mypage_component__WEBPACK_IMPORTED_MODULE_6__["MypageComponent"] },
    { path: 'reg', component: _reg_reg_component__WEBPACK_IMPORTED_MODULE_7__["RegComponent"] }
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

module.exports = ".main-container {\r\n  flex: 1;\r\n}\r\n\r\n:host {\r\n  display: flex;\r\n  flex-direction: column;\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 15%;\r\n}\r\n\r\n.content-container {\r\n  padding: 50px;\r\n}\r\n\r\n.spacer {\r\n  flex: 1 1 auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-toolbar color=\"primary\">\r\n  <span>{{title}}</span>\r\n</mat-toolbar>\r\n<mat-sidenav-container class=\"main-container\">\r\n  <mat-sidenav mode=\"side\" opened class=\"sidenav\">\r\n    <app-sidenav></app-sidenav>\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n    <div class=\"content-container\">\r\n      <router-outlet></router-outlet>\r\n    </div>\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>\r\n"

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
        this.title = '千年战争Aigis';
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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm5/sidenav.es5.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidenav/sidenav.component */ "./src/app/sidenav/sidenav.component.ts");
/* harmony import */ var _files_files_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./files/files.component */ "./src/app/files/files.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/esm5/card.es5.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/esm5/grid-list.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/esm5/expansion.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/esm5/checkbox.es5.js");
/* harmony import */ var _dash_info_dash_info_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dash-info/dash-info.component */ "./src/app/dash-info/dash-info.component.ts");
/* harmony import */ var _dash_progress_dash_progress_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dash-progress/dash-progress.component */ "./src/app/dash-progress/dash-progress.component.ts");
/* harmony import */ var _files_detail_files_detail_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./files-detail/files-detail.component */ "./src/app/files-detail/files-detail.component.ts");
/* harmony import */ var _processbar_processbar_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./processbar/processbar.component */ "./src/app/processbar/processbar.component.ts");
/* harmony import */ var _editor_editor_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./editor/editor.module */ "./src/app/editor/editor.module.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _mypage_mypage_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./mypage/mypage.component */ "./src/app/mypage/mypage.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _reg_reg_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./reg/reg.component */ "./src/app/reg/reg.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _files_detail_allocate_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./files-detail/allocate.component */ "./src/app/files-detail/allocate.component.ts");
/* harmony import */ var _files_detail_preview_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./files-detail/preview.component */ "./src/app/files-detail/preview.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_5__["DashboardComponent"],
                _sidenav_sidenav_component__WEBPACK_IMPORTED_MODULE_8__["SidenavComponent"],
                _files_files_component__WEBPACK_IMPORTED_MODULE_9__["FilesComponent"],
                _dash_info_dash_info_component__WEBPACK_IMPORTED_MODULE_17__["DashInfoComponent"],
                _dash_progress_dash_progress_component__WEBPACK_IMPORTED_MODULE_18__["DashProgressComponent"],
                _files_detail_files_detail_component__WEBPACK_IMPORTED_MODULE_19__["FilesDetailComponent"],
                _processbar_processbar_component__WEBPACK_IMPORTED_MODULE_20__["ProcessbarComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_22__["LoginComponent"],
                _mypage_mypage_component__WEBPACK_IMPORTED_MODULE_23__["MypageComponent"],
                _reg_reg_component__WEBPACK_IMPORTED_MODULE_26__["RegComponent"],
                _files_detail_allocate_component__WEBPACK_IMPORTED_MODULE_28__["AllocateDialogComponent"],
                _files_detail_preview_component__WEBPACK_IMPORTED_MODULE_29__["PreviewDialogComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_27__["HttpClientModule"],
                _editor_editor_module__WEBPACK_IMPORTED_MODULE_21__["EditorModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["FormsModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_6__["MatSidenavModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_10__["MatButtonModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_12__["MatGridListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_13__["MatMenuModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_14__["MatExpansionModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_15__["MatTabsModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_24__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatOptionModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_25__["MatSelectModule"],
            ],
            entryComponents: [
                _files_detail_allocate_component__WEBPACK_IMPORTED_MODULE_28__["AllocateDialogComponent"],
                _files_detail_preview_component__WEBPACK_IMPORTED_MODULE_29__["PreviewDialogComponent"],
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/constant.ts":
/*!*****************************!*\
  !*** ./src/app/constant.ts ***!
  \*****************************/
/*! exports provided: Constants */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Constants", function() { return Constants; });
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url */ "./node_modules/url/url.js");
/* harmony import */ var url__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(url__WEBPACK_IMPORTED_MODULE_0__);

var Constants = /** @class */ (function () {
    function Constants() {
    }
    Object.defineProperty(Constants, "BASEHOST", {
        get: function () { return '127.0.0.1'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Constants, "BASEPORT", {
        get: function () { return 19810; },
        enumerable: true,
        configurable: true
    });
    Constants.GenRequestURL = function (pathname, query) {
        return url__WEBPACK_IMPORTED_MODULE_0__["format"]({
            //            protocol: 'http',
            //            hostname: this.BASEHOST,
            //            port: this.BASEPORT,
            pathname: "/api" + pathname,
            query: query
        });
    };
    return Constants;
}());



/***/ }),

/***/ "./src/app/dash-info/dash-info.component.css":
/*!***************************************************!*\
  !*** ./src/app/dash-info/dash-info.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.info {\r\n  margin-left: 20px;\r\n}\r\n\r\np{\r\n    margin:5px 0 5px 0;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dash-info/dash-info.component.html":
/*!****************************************************!*\
  !*** ./src/app/dash-info/dash-info.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div style=\"background:black;width:100px;height:150px;\">\r\n  </div>\r\n  <div class=\"info\">\r\n    <h1>千年战争Aigis</h1>\r\n    <p>原文更新时间：</p>\r\n    <p>上次发布时间：</p>\r\n    <p>总文本：xx个</p>\r\n    <p>总条目：xx条</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/dash-info/dash-info.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dash-info/dash-info.component.ts ***!
  \**************************************************/
/*! exports provided: DashInfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashInfoComponent", function() { return DashInfoComponent; });
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

var DashInfoComponent = /** @class */ (function () {
    function DashInfoComponent() {
    }
    DashInfoComponent.prototype.ngOnInit = function () {
    };
    DashInfoComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash-info',
            template: __webpack_require__(/*! ./dash-info.component.html */ "./src/app/dash-info/dash-info.component.html"),
            styles: [__webpack_require__(/*! ./dash-info.component.css */ "./src/app/dash-info/dash-info.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashInfoComponent);
    return DashInfoComponent;
}());



/***/ }),

/***/ "./src/app/dash-progress/dash-progress.component.css":
/*!***********************************************************!*\
  !*** ./src/app/dash-progress/dash-progress.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/dash-progress/dash-progress.component.html":
/*!************************************************************!*\
  !*** ./src/app/dash-progress/dash-progress.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  dash-progress works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/dash-progress/dash-progress.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/dash-progress/dash-progress.component.ts ***!
  \**********************************************************/
/*! exports provided: DashProgressComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashProgressComponent", function() { return DashProgressComponent; });
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

var DashProgressComponent = /** @class */ (function () {
    function DashProgressComponent() {
    }
    DashProgressComponent.prototype.ngOnInit = function () {
    };
    DashProgressComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dash-progress',
            template: __webpack_require__(/*! ./dash-progress.component.html */ "./src/app/dash-progress/dash-progress.component.html"),
            styles: [__webpack_require__(/*! ./dash-progress.component.css */ "./src/app/dash-progress/dash-progress.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashProgressComponent);
    return DashProgressComponent;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-card {\r\n  width: 100%;\r\n  margin:0 20px 0 20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-grid-list cols=\"2\" rowHeight=\"200px\">\r\n  <mat-grid-tile colspan=\"1\" rowspan=\"2\">\r\n    <mat-card>\r\n      <app-dash-info></app-dash-info>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n  <mat-grid-tile colspan=\"1\" rowspan=\"2\">\r\n    <mat-card>\r\n      <app-dash-progress></app-dash-progress>\r\n    </mat-card>\r\n  </mat-grid-tile>\r\n</mat-grid-list>\r\n"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
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

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/editor/commit.ts":
/*!**********************************!*\
  !*** ./src/app/editor/commit.ts ***!
  \**********************************/
/*! exports provided: Commit */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Commit", function() { return Commit; });
var Commit = /** @class */ (function () {
    function Commit() {
    }
    Commit.id = function (commits, id) {
        return commits.find(function (commit) { return commit._id === id; });
    };
    Commit.findLatestTranslation = function (commits) {
        for (var i = commits.length - 1; i >= 0; i--) {
            if (commits[i].type === 1) {
                return commits[i];
            }
        }
        return null;
    };
    Commit.findLeaves = function (commits) {
        var leaves = [];
        var status = 0;
        var _loop_1 = function (i) {
            // 没有子节点或者所有子节点的状态都比自己高，说明这是一个叶子节点
            (function () {
                var commit = commits[i];
                if (commit.children.length !== 0) {
                    for (var j = 0; j < commit.children.length; j++) {
                        if (commit.children[j].type <= commit.type) {
                            return;
                        }
                    }
                }
                leaves.push(commit);
                status = Math.max(status, commit.type);
            })();
        };
        for (var i = 0; i < commits.length; i++) {
            _loop_1(i);
        }
        return [leaves, status];
    };
    return Commit;
}());



/***/ }),

/***/ "./src/app/editor/editor.module.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/editor.module.ts ***!
  \*****************************************/
/*! exports provided: EditorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorModule", function() { return EditorModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./editor/editor.component */ "./src/app/editor/editor/editor.component.ts");
/* harmony import */ var _newline_pipe__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./newline.pipe */ "./src/app/editor/newline.pipe.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./editor.service */ "./src/app/editor/editor.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var EditorModule = /** @class */ (function () {
    function EditorModule() {
    }
    EditorModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_4__["BrowserModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatButtonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["FormsModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_8__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
            ],
            declarations: [
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"],
                _newline_pipe__WEBPACK_IMPORTED_MODULE_3__["NewlinePipe"],
            ],
            providers: [_editor_service__WEBPACK_IMPORTED_MODULE_9__["EditorService"]],
            exports: [
                _editor_editor_component__WEBPACK_IMPORTED_MODULE_2__["EditorComponent"],
            ],
        })
    ], EditorModule);
    return EditorModule;
}());



/***/ }),

/***/ "./src/app/editor/editor.service.ts":
/*!******************************************!*\
  !*** ./src/app/editor/editor.service.ts ***!
  \******************************************/
/*! exports provided: EditorService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorService", function() { return EditorService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../constant */ "./src/app/constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var EditorService = /** @class */ (function () {
    function EditorService(http, usersService, router) {
        this.http = http;
        this.usersService = usersService;
        this.router = router;
        this.notCommited = [];
        try {
            this.notCommited = JSON.parse(localStorage.getItem('notCommited')) || [];
        }
        catch (err) { }
    }
    EditorService.prototype.getSectionsByUser = function (filter) {
        return __awaiter(this, void 0, void 0, function () {
            var requestURL, r, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.usersService.Token) {
                            this.router.navigateByUrl('/login');
                        }
                        requestURL = _constant__WEBPACK_IMPORTED_MODULE_3__["Constants"].GenRequestURL('/assets/sections', {
                            token: this.usersService.Token,
                            skip: 0,
                            limit: 0,
                            filter: filter,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(requestURL).toPromise()];
                    case 2:
                        r = _a.sent();
                        console.log(r);
                        return [2 /*return*/, r];
                    case 3:
                        err_1 = _a.sent();
                        console.error(err_1);
                        this.router.navigateByUrl('/login');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditorService.prototype.getSectionsByFile = function (fileId) {
        return __awaiter(this, void 0, void 0, function () {
            var requestURL, r, err_2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.usersService.Token) {
                            this.router.navigateByUrl('/login');
                        }
                        requestURL = _constant__WEBPACK_IMPORTED_MODULE_3__["Constants"].GenRequestURL('/assets/file/' + fileId + '/sections', {
                            token: this.usersService.Token,
                            skip: 0,
                            limit: 0,
                            contracted: 0
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(requestURL).toPromise()];
                    case 2:
                        r = _a.sent();
                        return [2 /*return*/, r];
                    case 3:
                        err_2 = _a.sent();
                        console.error(err_2);
                        this.router.navigateByUrl('/login');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditorService.prototype.addCommit = function (commitDto) {
        var exist = this.notCommited.findIndex(function (v) { return v.sectionId === commitDto.sectionId; });
        if (exist !== -1) {
            this.notCommited[exist] = commitDto;
        }
        else {
            this.notCommited.push(commitDto);
        }
        localStorage.setItem('notCommited', JSON.stringify(this.notCommited));
    };
    EditorService.prototype.deleteCommit = function (sectionId) {
        var exist = this.notCommited.findIndex(function (v) { return v.sectionId === sectionId; });
        console.log(exist);
        if (exist >= 0) {
            this.notCommited.splice(exist, 1);
        }
        localStorage.setItem('notCommited', JSON.stringify(this.notCommited));
    };
    EditorService.prototype.commit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var requestURL, jobs, result, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestURL = _constant__WEBPACK_IMPORTED_MODULE_3__["Constants"].GenRequestURL('/assets/sections', {
                            token: this.usersService.Token
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        jobs = this.notCommited.filter(function (v) { return v.text !== ''; });
                        return [4 /*yield*/, this.http.post(requestURL, {
                                submitedWork: {
                                    works: jobs
                                },
                            }).toPromise()];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        // Todo:冲突处理
                        this.notCommited = [];
                        localStorage.setItem('notCommited', '[]');
                        return [3 /*break*/, 4];
                    case 3:
                        err_3 = _a.sent();
                        console.log(err_3);
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    EditorService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"],
            _users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], EditorService);
    return EditorService;
}());



/***/ }),

/***/ "./src/app/editor/editor/editor.component.css":
/*!****************************************************!*\
  !*** ./src/app/editor/editor/editor.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".drag-area {\r\n  height: 100px;\r\n  display: flex;\r\n  align-items: center;\r\n  justify-content: space-around;\r\n}\r\n\r\n.table {\r\n  width: 100%;\r\n}\r\n\r\n.full-width {\r\n  width: 100%;\r\n}\r\n\r\n.card {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0px;\r\n\r\n}\r\n\r\n.flex-content{\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items:center;\r\n}\r\n\r\n.mat-column-raw{\r\n  width:30%;\r\n}\r\n\r\n.mat-column-origin {\r\n  width:30%;\r\n}\r\n\r\n.origin-panel{\r\n  height:100%;\r\n}"

/***/ }),

/***/ "./src/app/editor/editor/editor.component.html":
/*!*****************************************************!*\
  !*** ./src/app/editor/editor/editor.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <p style=\"font-size:10px;color:gray;\">{{typeText[type]}}模式</p>\r\n  <div class=\"flex-content\">\r\n    <div>\r\n      <mat-checkbox [checked]=\"showAll\" (change)=\"onShowAllClick($event.checked)\">显示已完成的</mat-checkbox>\r\n    </div>\r\n    <div>\r\n      <button mat-raised-button color=\"accent\" *ngIf=\"editorService.notCommited.length > 0\" (click)=\"commit()\">提交</button>\r\n    </div>\r\n  </div>\r\n\r\n</mat-card>\r\n\r\n<table mat-table [dataSource]=\"dataSource\" class=\"table\">\r\n  <ng-container matColumnDef=\"desc\">\r\n    <th mat-header-cell *matHeaderCellDef> 杂项 </th>\r\n    <td mat-cell *matCellDef=\"let text\">\r\n      <p style=\"margin:0\">{{ text.desc }} </p>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"raw\">\r\n    <th mat-header-cell *matHeaderCellDef> 原文 </th>\r\n    <td mat-cell *matCellDef=\"let text\">\r\n      <p style=\"margin:0\" *ngFor=\"let t of text.rawCommit.text.split('\\\\n')\">{{ t }} </p>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"origin\">\r\n    <th mat-header-cell *matHeaderCellDef> 基础 </th>\r\n    <td mat-cell *matCellDef=\"let text\">\r\n      <div style=\"display:flex; align-items: center\">\r\n        <mat-select placeholder=\"基础提交\" [(value)]=\"text.originCommit\">\r\n          <mat-select-trigger>\r\n            <p style=\"margin:0\" *ngFor=\"let t of getCommitInLeaves(text.leaves, text.originCommit).text.split('\\\\n')\">{{\r\n              t }} </p>\r\n          </mat-select-trigger>\r\n          <ng-container *ngFor=\"let leaf of text.leaves\">\r\n            <mat-option *ngIf=\"leaf.type <= type && ((type >= 2 && leaf.type >= 1) || type < 2)\" [value]=\"leaf._id\"\r\n              style=\"height:100%;\">\r\n              <p style=\"margin:0\" *ngFor=\"let t of leaf.text.split('\\\\n')\">{{ t }} </p>\r\n            </mat-option>\r\n          </ng-container>\r\n        </mat-select>\r\n        <button mat-icon-button (click)=\"onTextareaBlur(text, getCommitInLeaves(text.leaves, text.originCommit).text.replace('\\\\n','\\n'))\">\r\n          > </button>\r\n      </div>\r\n    </td>\r\n  </ng-container>\r\n  <ng-container matColumnDef=\"modify\">\r\n    <th mat-header-cell *matHeaderCellDef> 编辑 </th>\r\n    <td mat-cell *matCellDef=\"let text\">\r\n      <textarea class=\"full-width\" matInput [value]=\"text.notCommited?.originId === text.originCommit ? text.notCommited.text : ''\"\r\n        (blur)=\"onTextareaBlur(text,$event.target.value)\" cdkTextareaAutosize></textarea>\r\n    </td>\r\n  </ng-container>\r\n  <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n  <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\" [ngStyle]=\"{background:row.notCommited?.originId === row.originCommit ? '#FFCDD2' : (row.status >= type ? '#C8E6C9' : null)}\"></tr>\r\n</table>"

/***/ }),

/***/ "./src/app/editor/editor/editor.component.ts":
/*!***************************************************!*\
  !*** ./src/app/editor/editor/editor.component.ts ***!
  \***************************************************/
/*! exports provided: EditorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditorComponent", function() { return EditorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _editor_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor.service */ "./src/app/editor/editor.service.ts");
/* harmony import */ var _section_model__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../section.model */ "./src/app/editor/section.model.ts");
/* harmony import */ var _commit__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../commit */ "./src/app/editor/commit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var EditorComponent = /** @class */ (function () {
    function EditorComponent(snackBar, route, editorService) {
        var _this = this;
        this.snackBar = snackBar;
        this.route = route;
        this.editorService = editorService;
        this.typeText = ['生肉', '翻译', '校对', '润色'];
        this.type = _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Translated;
        this.fileId = '';
        this.showAll = false;
        this.dataSource = null;
        this.Commit = _commit__WEBPACK_IMPORTED_MODULE_5__["Commit"];
        this.textList = [];
        this.displayedColumns = ['desc', 'raw', 'origin', 'modify'];
        route.params.subscribe(function (params) {
            _this.fileId = params['id'];
            if (_this.fileId !== 'null') {
                _this.type = _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Corrected;
            }
        });
    }
    EditorComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var rawSections, rawSections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(this.type === _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Translated)) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.editorService.getSectionsByUser(4)];
                    case 1:
                        rawSections = _a.sent();
                        if (!rawSections) {
                            return [2 /*return*/];
                        }
                        this.textList = this.genList(rawSections);
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.editorService.getSectionsByFile(this.fileId)];
                    case 3:
                        rawSections = _a.sent();
                        if (!rawSections) {
                            return [2 /*return*/];
                        }
                        this.textList = this.genList(rawSections);
                        _a.label = 4;
                    case 4:
                        console.log(this.textList);
                        this.dataSource = new _angular_material__WEBPACK_IMPORTED_MODULE_1__["MatTableDataSource"](this.textList);
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorComponent.prototype.onTextareaBlur = function (section, text) {
        if (!text) {
            this.editorService.deleteCommit(section.sectionId);
            section.notCommited = undefined;
            return;
        }
        section.notCommited = {
            text: text,
            sectionId: section.sectionId,
            type: this.type,
            originId: section.originCommit,
            polished: false
        };
        this.editorService.addCommit(section.notCommited);
    };
    EditorComponent.prototype.commit = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.editorService.commit()];
                    case 1:
                        _a.sent();
                        this.snackBar.open('保存成功', '', {
                            duration: 3000,
                            verticalPosition: 'top',
                        });
                        this.ngOnInit();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorComponent.prototype.onShowAllClick = function (isShowAll) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.showAll = isShowAll;
                        return [4 /*yield*/, this.ngOnInit()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    EditorComponent.prototype.genList = function (rawSections) {
        var _this = this;
        var list = [];
        rawSections.forEach(function (section) {
            var row = {};
            row.sectionId = section._id;
            row.desc = section.desc;
            row.originCommit = '';
            // 原文
            var rawCommit = _commit__WEBPACK_IMPORTED_MODULE_5__["Commit"].id(section.commits, section.rawCommit);
            row.rawCommit = rawCommit;
            // 叶子
            var _a = _commit__WEBPACK_IMPORTED_MODULE_5__["Commit"].findLeaves(section.commits), leaves = _a[0], status = _a[1];
            // 设置默认基础提交
            if (_this.type === _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Translated) {
                row.originCommit = section.rawCommit;
            }
            if (_this.type === _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Corrected && status >= _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Translated) {
                row.originCommit = leaves.find(function (v) { return v.type === _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Translated; })._id;
            }
            if (_this.type === _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Polished && status >= _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Corrected) {
                row.originCommit = leaves.find(function (v) { return v.type === _section_model__WEBPACK_IMPORTED_MODULE_4__["SectionStatus"].Corrected; })._id;
            }
            if (row.originCommit === '') {
                return;
            }
            row.leaves = leaves;
            row.status = status;
            if (status >= _this.type && _this.showAll === false) {
                return;
            }
            // 缓存
            var notCommited = _this.editorService.notCommited.find(function (commit) {
                if (commit.sectionId !== section._id) {
                    return false;
                }
                // if (commit.type !== SectionStatus.Translated) { return false; }
                return true;
            });
            row.notCommited = notCommited;
            if (notCommited && leaves.findIndex(function (v) { return v._id === notCommited.originId; })) {
                row.originCommit = notCommited.originId;
            }
            list.push(row);
        });
        return list;
    };
    EditorComponent.prototype.getCommitInLeaves = function (leaves, id) {
        return leaves.find(function (v) { return v._id === id; });
    };
    EditorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-editor',
            template: __webpack_require__(/*! ./editor.component.html */ "./src/app/editor/editor/editor.component.html"),
            styles: [__webpack_require__(/*! ./editor.component.css */ "./src/app/editor/editor/editor.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _editor_service__WEBPACK_IMPORTED_MODULE_3__["EditorService"]])
    ], EditorComponent);
    return EditorComponent;
}());



/***/ }),

/***/ "./src/app/editor/newline.pipe.ts":
/*!****************************************!*\
  !*** ./src/app/editor/newline.pipe.ts ***!
  \****************************************/
/*! exports provided: NewlinePipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewlinePipe", function() { return NewlinePipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

/*
 * Converts newlines into html breaks
*/
var NewlinePipe = /** @class */ (function () {
    function NewlinePipe() {
    }
    NewlinePipe.prototype.transform = function (value, args) {
        return value.replace(/(?:\r\n|\r|\n)/g, '<br />');
    };
    NewlinePipe = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"])({ name: 'newline' })
    ], NewlinePipe);
    return NewlinePipe;
}());



/***/ }),

/***/ "./src/app/editor/section.model.ts":
/*!*****************************************!*\
  !*** ./src/app/editor/section.model.ts ***!
  \*****************************************/
/*! exports provided: SectionStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionStatus", function() { return SectionStatus; });
var SectionStatus;
(function (SectionStatus) {
    SectionStatus[SectionStatus["Raw"] = 0] = "Raw";
    SectionStatus[SectionStatus["Translated"] = 1] = "Translated";
    SectionStatus[SectionStatus["Corrected"] = 2] = "Corrected";
    SectionStatus[SectionStatus["Polished"] = 3] = "Polished";
    SectionStatus[SectionStatus["Modified"] = 4] = "Modified";
})(SectionStatus || (SectionStatus = {}));


/***/ }),

/***/ "./src/app/files-detail/allocate.component.html":
/*!******************************************************!*\
  !*** ./src/app/files-detail/allocate.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>承包</h1>\r\n<div mat-dialog-content>\r\n  <p>你要承包多少\r\n    <button mat-raised-button (click)=\"allocateAll()\">\r\n      承包{{data.maxCount > 100 ? '100条' : '所有'}}\r\n    </button>\r\n  </p>\r\n  <div style=\"display:flex;\">\r\n    <mat-form-field>\r\n      <input matInput [(ngModel)]=\"allocateCount\" />\r\n    </mat-form-field>\r\n  </div>\r\n\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button (click)=\"onNoClick()\">卜了</button>\r\n  <button mat-button (click)=\"onAllocateClick()\" cdkFocusInitial>交给我吧！</button>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/files-detail/allocate.component.ts":
/*!****************************************************!*\
  !*** ./src/app/files-detail/allocate.component.ts ***!
  \****************************************************/
/*! exports provided: AllocateDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllocateDialogComponent", function() { return AllocateDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files.service */ "./src/app/files.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};



var AllocateDialogComponent = /** @class */ (function () {
    function AllocateDialogComponent(dialogRef, data, filesService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.filesService = filesService;
        this.allocateCount = 0;
    }
    AllocateDialogComponent.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    AllocateDialogComponent.prototype.onAllocateClick = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.filesService.allocateSection(this.data.index, this.allocateCount)];
                    case 1:
                        _a.sent();
                        this.dialogRef.close();
                        return [2 /*return*/];
                }
            });
        });
    };
    AllocateDialogComponent.prototype.allocateAll = function () {
        this.allocateCount = this.data.maxCount > 100 ? 100 : this.data.maxCount;
    };
    AllocateDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-files-detail-allocate-dialog',
            template: __webpack_require__(/*! ./allocate.component.html */ "./src/app/files-detail/allocate.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"]])
    ], AllocateDialogComponent);
    return AllocateDialogComponent;
}());



/***/ }),

/***/ "./src/app/files-detail/files-detail.component.css":
/*!*********************************************************!*\
  !*** ./src/app/files-detail/files-detail.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".job {\r\n  display: flex;\r\n  margin: 5px;\r\n  align-items: center;\r\n}\r\n.job *{\r\n  margin:5px;\r\n}\r\np {\r\n  margin: 0 5px 0 0;\r\n}\r\n.processbar {\r\n  width: 300px;\r\n}\r\n.job-processbar {\r\n  width: 30%;\r\n  margin-right:5px;\r\n}\r\n.tab-container {\r\n  margin-left: 10px;\r\n  margin-right:10px;\r\n  margin-top:20px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/files-detail/files-detail.component.html":
/*!**********************************************************!*\
  !*** ./src/app/files-detail/files-detail.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2>进度</h2>\r\n<app-processbar [max]=\"file.sectionCount\" [data]=\"data\" [desc]=\"true\"></app-processbar>\r\n<mat-tab-group>\r\n  <mat-tab label=\"承包\">\r\n    <div class=\"tab-container\">\r\n      <div class=\"job\">\r\n        <p>我承包了 {{myContractor}}</p>\r\n        <button mat-raised-button color=\"accent\" (click)=\"openAllocateDialog()\">承包</button>\r\n        <button mat-raised-button (click)=\"openPreviewDialog()\">预览</button>\r\n      </div>\r\n    </div>\r\n  </mat-tab>\r\n  <mat-tab label=\"校对/润色\">\r\n    <div class=\"tab-container\">\r\n      <button mat-raised-button color=\"accent\" (click)=\"openEditor()\">进入编辑器</button>\r\n    </div>\r\n  </mat-tab>\r\n</mat-tab-group>"

/***/ }),

/***/ "./src/app/files-detail/files-detail.component.ts":
/*!********************************************************!*\
  !*** ./src/app/files-detail/files-detail.component.ts ***!
  \********************************************************/
/*! exports provided: FilesDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesDetailComponent", function() { return FilesDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files.service */ "./src/app/files.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _allocate_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./allocate.component */ "./src/app/files-detail/allocate.component.ts");
/* harmony import */ var _preview_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./preview.component */ "./src/app/files-detail/preview.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};







var FilesDetailComponent = /** @class */ (function () {
    function FilesDetailComponent(usersService, filesService, dialog, router) {
        this.usersService = usersService;
        this.filesService = filesService;
        this.dialog = dialog;
        this.router = router;
    }
    Object.defineProperty(FilesDetailComponent.prototype, "file", {
        get: function () {
            return this._file;
        },
        set: function (file) {
            var _this = this;
            this._file = file;
            var r = file.contractors.find(function (v) {
                return v.user === _this.usersService.user._id;
            });
            this.myContractor = r ? r.count : 0;
        },
        enumerable: true,
        configurable: true
    });
    FilesDetailComponent.prototype.ngOnInit = function () {
        this.data = [
            { value: this.file.translated, color: '#20A0FF', desc: '已翻译' },
            { value: this.file.corrected, color: '#F7BA2A', desc: '已校对' },
            { value: this.file.polished, color: '#13CE66', desc: '已润色' },
        ];
    };
    FilesDetailComponent.prototype.openAllocateDialog = function () {
        this.dialog.open(_allocate_component__WEBPACK_IMPORTED_MODULE_4__["AllocateDialogComponent"], {
            width: '250px',
            data: { index: this.index, maxCount: this.file.sectionCount },
        });
    };
    FilesDetailComponent.prototype.openPreviewDialog = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                this.dialog.open(_preview_component__WEBPACK_IMPORTED_MODULE_5__["PreviewDialogComponent"], {
                    width: '70%',
                    data: {
                        fileID: this.file._id,
                    },
                });
                return [2 /*return*/];
            });
        });
    };
    FilesDetailComponent.prototype.openEditor = function () {
        this.router.navigate(['/editor', this.file._id]);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], FilesDetailComponent.prototype, "index", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object),
        __metadata("design:paramtypes", [Object])
    ], FilesDetailComponent.prototype, "file", null);
    FilesDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-files-detail',
            template: __webpack_require__(/*! ./files-detail.component.html */ "./src/app/files-detail/files-detail.component.html"),
            styles: [__webpack_require__(/*! ./files-detail.component.css */ "./src/app/files-detail/files-detail.component.css")],
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"],
            _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]])
    ], FilesDetailComponent);
    return FilesDetailComponent;
}());



/***/ }),

/***/ "./src/app/files-detail/preview.component.html":
/*!*****************************************************!*\
  !*** ./src/app/files-detail/preview.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-dialog-content>\r\n  <p *ngFor=\"let text of textList\">\r\n    {{text}}\r\n  </p>\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/files-detail/preview.component.ts":
/*!***************************************************!*\
  !*** ./src/app/files-detail/preview.component.ts ***!
  \***************************************************/
/*! exports provided: PreviewDialogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PreviewDialogComponent", function() { return PreviewDialogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../files.service */ "./src/app/files.service.ts");
/* harmony import */ var _editor_commit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../editor/commit */ "./src/app/editor/commit.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var PreviewDialogComponent = /** @class */ (function () {
    function PreviewDialogComponent(dialogRef, data, filesService) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.filesService = filesService;
        this.textList = [];
        this.allocateCount = 0;
    }
    PreviewDialogComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.filesService.getSectionsByFiles(this.data.fileID)];
                    case 1:
                        sections = _a.sent();
                        this.getRawTexts(sections);
                        return [2 /*return*/];
                }
            });
        });
    };
    PreviewDialogComponent.prototype.getRawTexts = function (sections) {
        var list = sections.map(function (section) {
            return section.desc + '  ' + _editor_commit__WEBPACK_IMPORTED_MODULE_3__["Commit"].id(section.commits, section.rawCommit).text.replace('\\n', '\n');
        });
        this.textList = list;
    };
    PreviewDialogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-files-detail-preview-dialog',
            template: __webpack_require__(/*! ./preview.component.html */ "./src/app/files-detail/preview.component.html"),
        }),
        __param(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_1__["MAT_DIALOG_DATA"])),
        __metadata("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_1__["MatDialogRef"], Object, _files_service__WEBPACK_IMPORTED_MODULE_2__["FilesService"]])
    ], PreviewDialogComponent);
    return PreviewDialogComponent;
}());



/***/ }),

/***/ "./src/app/files.service.ts":
/*!**********************************!*\
  !*** ./src/app/files.service.ts ***!
  \**********************************/
/*! exports provided: FilesService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesService", function() { return FilesService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./constant */ "./src/app/constant.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};






var FilesService = /** @class */ (function () {
    function FilesService(http, router, usersService) {
        this.http = http;
        this.router = router;
        this.usersService = usersService;
        this.files = [];
        this.keyword = '';
        this.sort = '';
        this.page = 0;
        this.limit = 10;
        this.noMoreSubject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.keyword = localStorage.getItem('keyword') || '';
    }
    Object.defineProperty(FilesService.prototype, "Keyword", {
        get: function () { return this.keyword; },
        set: function (value) {
            if (this.keyword === value) {
                return;
            }
            this.keyword = value;
            localStorage.setItem('keyword', value);
            this.getFiles(false, true);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FilesService.prototype, "Sort", {
        get: function () { return this.sort; },
        set: function (value) {
            if (this.sort === value) {
                return;
            }
            this.sort = value;
            this.getFiles(false, true);
        },
        enumerable: true,
        configurable: true
    });
    FilesService.prototype.getFiles = function (update, force) {
        if (update === void 0) { update = false; }
        if (force === void 0) { force = false; }
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.usersService.Token) {
                            this.router.navigateByUrl('/login');
                            return [2 /*return*/];
                        }
                        if (this.files.length !== 0 && !update && !force) {
                            return [2 /*return*/];
                        }
                        if (!update) {
                            this.page = 0;
                            this.files = [];
                        }
                        requestUrl = _constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].GenRequestURL('/assets/files', {
                            token: this.usersService.Token,
                            reg: this.keyword,
                            skip: this.page * this.limit,
                            limit: this.limit,
                            sort: this.sort,
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(requestUrl).toPromise()];
                    case 2:
                        result = _a.sent();
                        console.log(result);
                        if (result.length !== 0) {
                            this.page++;
                            this.files = this.files.concat(result);
                        }
                        else {
                            return [2 /*return*/, false];
                        }
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _a.sent();
                        this.router.navigateByUrl('/login');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/, true];
                }
            });
        });
    };
    FilesService.prototype.getSectionsByFiles = function (fileId) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, sections;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = _constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].GenRequestURL("/assets/file/" + fileId + "/sections", {
                            token: this.usersService.Token,
                            contracted: 0,
                            skip: 0,
                            limit: 0,
                        });
                        return [4 /*yield*/, this.http.get(requestUrl).toPromise()];
                    case 1:
                        sections = _a.sent();
                        return [2 /*return*/, sections];
                }
            });
        });
    };
    FilesService.prototype.allocateSection = function (index, count) {
        return __awaiter(this, void 0, void 0, function () {
            var file, requestUrl, r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        file = this.files[index];
                        if (!file) {
                            throw new Error('no such file');
                        }
                        requestUrl = _constant__WEBPACK_IMPORTED_MODULE_2__["Constants"].GenRequestURL("/assets/file/" + file._id + "/contract", {
                            token: this.usersService.Token
                        });
                        return [4 /*yield*/, this.http.post(requestUrl, {
                                count: count
                            }).toPromise()];
                    case 1:
                        r = _a.sent();
                        this.files[index] = r;
                        console.log(r);
                        return [2 /*return*/];
                }
            });
        });
    };
    FilesService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _users_service__WEBPACK_IMPORTED_MODULE_4__["UsersService"]])
    ], FilesService);
    return FilesService;
}());



/***/ }),

/***/ "./src/app/files/files.component.css":
/*!*******************************************!*\
  !*** ./src/app/files/files.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".panel-title {\r\n  width: 30%;\r\n}\r\n\r\n.more-btn {\r\n  margin-top: 5px;\r\n  width: 100%;\r\n}\r\n\r\n.cond {\r\n  display: flex;\r\n  align-items:center;\r\n}\r\n\r\n.cond-item {\r\n  margin-left: 10px;\r\n  margin-right: 10px;\r\n}\r\n\r\nmat-card{\r\n  margin-top:5px;\r\n  margin-bottom:5px;\r\n}"

/***/ }),

/***/ "./src/app/files/files.component.html":
/*!********************************************!*\
  !*** ./src/app/files/files.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card>\r\n  <mat-card-header>\r\n    <mat-card-title>我的翻译进度</mat-card-title>\r\n  </mat-card-header>\r\n  <mat-card-content>\r\n    <app-processbar [data]=\"[{value:myTranslated,color:'#20A0FF'}]\" [max]=\"myTotal\"></app-processbar>\r\n  </mat-card-content>\r\n  <mat-card-actions>\r\n    <button mat-button routerLink=\"/editor/null\">进入编辑器</button>\r\n  </mat-card-actions>\r\n</mat-card>\r\n\r\n<mat-card class=\"cond\">\r\n  <div class=\"cond-item\">\r\n    <p>筛选</p>\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"文件名\" (keyup)=\"searchKeyword$.next($event.target.value)\" [value]=\"keyword\">\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"cond-item\">\r\n    <p>排序</p>\r\n    <mat-form-field>\r\n      <mat-select [(value)]=\"sort\" (selectionChange)=\"onSortSelectionChanged($event)\">\r\n        <mat-option value=\"\">默认</mat-option>\r\n        <mat-option value=\"update\">更新时间</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n  </div>\r\n  <button mat-button (click)=\"reloadFileList()\">刷新</button>\r\n</mat-card>\r\n\r\n<mat-accordion>\r\n  <mat-expansion-panel *ngFor=\"let file of filesService.files;index as i\">\r\n    <mat-expansion-panel-header>\r\n      <mat-panel-title>\r\n        <div style=\"width:30%\">\r\n          {{file.name}}\r\n        </div>\r\n        <app-processbar [data]=\"[{value:file.translated,color:'#20A0FF'}]\" [max]=\"file.sectionCount\"></app-processbar>\r\n      </mat-panel-title>\r\n    </mat-expansion-panel-header>\r\n\r\n    <app-files-detail [file]='file' [index]='i'></app-files-detail>\r\n\r\n  </mat-expansion-panel>\r\n</mat-accordion>\r\n\r\n<button mat-raised-button class=\"more-btn\" (click)=\"loadMore()\" [attr.disabled]=\"disable ? '' : null\">{{nomore ?\r\n  '没有更多了' : '更多'}}</button>\r\n"

/***/ }),

/***/ "./src/app/files/files.component.ts":
/*!******************************************!*\
  !*** ./src/app/files/files.component.ts ***!
  \******************************************/
/*! exports provided: FilesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FilesComponent", function() { return FilesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _files_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../files.service */ "./src/app/files.service.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _sections_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../sections.service */ "./src/app/sections.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var FilesComponent = /** @class */ (function () {
    function FilesComponent(filesService, sectionsService) {
        var _this = this;
        this.filesService = filesService;
        this.sectionsService = sectionsService;
        this.keyword = '';
        this.nomore = false;
        this.disable = false;
        this.sort = '';
        this.myTranslated = 0;
        this.myTotal = 0;
        this.searchKeyword$ = new rxjs__WEBPACK_IMPORTED_MODULE_2__["Subject"]();
        this.searchKeyword$.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["debounceTime"])(400), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["distinctUntilChanged"])()).subscribe(function (v) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                filesService.Keyword = v;
                this.nomore = false;
                this.disable = false;
                return [2 /*return*/];
            });
        }); });
        this.keyword = filesService.Keyword;
        this.sort = filesService.Sort;
    }
    FilesComponent.prototype.ngOnInit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.filesService.getFiles();
                        return [4 /*yield*/, this.sectionsService.getAllocatedSectionsCount()];
                    case 1:
                        r = _a.sent();
                        r.forEach(function (v) {
                            _this.myTotal += v.count;
                            if (v._id === 1) {
                                _this.myTranslated = v.count;
                            }
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    FilesComponent.prototype.reloadFileList = function () {
        this.filesService.getFiles(false, true);
    };
    FilesComponent.prototype.onSortSelectionChanged = function (event) {
        this.filesService.Sort = event.value;
        this.nomore = false;
        this.disable = false;
    };
    FilesComponent.prototype.loadMore = function () {
        return __awaiter(this, void 0, void 0, function () {
            var r;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.disable = true;
                        return [4 /*yield*/, this.filesService.getFiles(true)];
                    case 1:
                        r = _a.sent();
                        if (r) {
                            this.disable = false;
                        }
                        else {
                            this.disable = true;
                            this.nomore = true;
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    FilesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-files',
            template: __webpack_require__(/*! ./files.component.html */ "./src/app/files/files.component.html"),
            styles: [__webpack_require__(/*! ./files.component.css */ "./src/app/files/files.component.css")]
        }),
        __metadata("design:paramtypes", [_files_service__WEBPACK_IMPORTED_MODULE_1__["FilesService"],
            _sections_service__WEBPACK_IMPORTED_MODULE_4__["SectionsService"]])
    ], FilesComponent);
    return FilesComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  padding: 50px;\r\n  flex-flow: column;\r\n}\r\n\r\nbutton {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-title style=\"text-align:center\">\r\n    お前はもう死んでいる\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <form class=\"container\" [formGroup]=\"loginForm\" (ngSubmit)=\"onSubmit()\">\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Username\" formControlName=\"username\">\r\n        <mat-error *ngIf=\"username.invalid\">请输入用户名</mat-error>\r\n      </mat-form-field>\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n        <mat-error *ngIf=\"password.invalid\">请输入密码</mat-error>\r\n      </mat-form-field>\r\n      <button type=\"submit\" [disabled]=\"!loginForm.valid\" mat-raised-button color=\"primary\">登入</button>\r\n      <button mat-raised-button color=\"accent\" routerLink=\"/reg\">注册</button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

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
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var LoginComponent = /** @class */ (function () {
    function LoginComponent(usersService, snackBar, router) {
        this.usersService = usersService;
        this.snackBar = snackBar;
        this.router = router;
        this.loginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    Object.defineProperty(LoginComponent.prototype, "username", {
        get: function () {
            return this.loginForm.get('username');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoginComponent.prototype, "password", {
        get: function () {
            return this.loginForm.get('password');
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var result, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usersService.login(this.loginForm.value)];
                    case 1:
                        result = _a.sent();
                        this.snackBar.open('登入成功', '', {
                            duration: 3000,
                        });
                        this.router.navigateByUrl('/files');
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        this.snackBar.open('用户名或密码错误', '', {
                            duration: 3000,
                        });
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    LoginComponent.prototype.ngOnInit = function () {
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/mypage/mypage.component.css":
/*!*********************************************!*\
  !*** ./src/app/mypage/mypage.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/mypage/mypage.component.html":
/*!**********************************************!*\
  !*** ./src/app/mypage/mypage.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  欢迎回来，{{usersService.user && usersService.user.nickname}}\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/mypage/mypage.component.ts":
/*!********************************************!*\
  !*** ./src/app/mypage/mypage.component.ts ***!
  \********************************************/
/*! exports provided: MypageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MypageComponent", function() { return MypageComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var MypageComponent = /** @class */ (function () {
    function MypageComponent(usersService) {
        this.usersService = usersService;
    }
    MypageComponent.prototype.ngOnInit = function () {
    };
    MypageComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-mypage',
            template: __webpack_require__(/*! ./mypage.component.html */ "./src/app/mypage/mypage.component.html"),
            styles: [__webpack_require__(/*! ./mypage.component.css */ "./src/app/mypage/mypage.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"]])
    ], MypageComponent);
    return MypageComponent;
}());



/***/ }),

/***/ "./src/app/processbar/processbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/processbar/processbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pipe {\r\n  height: 15px;\r\n  flex: 1;\r\n  border:1px solid black;\r\n}\r\n\r\n.content {\r\n  height: 100%;\r\n  color: white;\r\n  text-align: center;\r\n}\r\n\r\n.legend-color {\r\n  height: 20px;\r\n  width: 20px;\r\n  margin-right: 2px;\r\n}\r\n\r\n:host {\r\n  height: 17px;\r\n  width: 100%;\r\n}\r\n\r\n.legend {\r\n  display: flex;\r\n  margin: 0 10px 0 10px;\r\n}\r\n\r\n.legend-content {\r\n  display: flex;\r\n  margin: 10px;\r\n}\r\n\r\n.cond {\r\n  display: flex;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  height: 100%;\r\n  width:50%;\r\n}\r\n\r\np {\r\n  margin-top: 0;\r\n  margin-bottom: 0;\r\n  margin-left:10px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/processbar/processbar.component.html":
/*!******************************************************!*\
  !*** ./src/app/processbar/processbar.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngFor=\"let obj of data\" class=\"container\">\r\n  <div class=\"pipe\">\r\n    <div class=\"content\" [ngStyle]=\"{'width':(obj.value/max*100).toString()+'%','background-color':obj.color}\">\r\n    </div>\r\n  </div>\r\n  <p>{{obj.value}}/{{max}}</p>\r\n</div>\r\n\r\n<div *ngIf=\"desc\" class=\"legend-content\">\r\n  <div *ngFor=\"let obj of data\" class=\"legend\">\r\n    <div class=\"legend-color\" [ngStyle]=\"{'background-color':obj.color}\"></div>\r\n    <div class=\"legend-desc\">\r\n      {{obj.desc}}\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/processbar/processbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/processbar/processbar.component.ts ***!
  \****************************************************/
/*! exports provided: ProcessbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProcessbarComponent", function() { return ProcessbarComponent; });
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

var ProcessbarComponent = /** @class */ (function () {
    function ProcessbarComponent() {
    }
    ProcessbarComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Array)
    ], ProcessbarComponent.prototype, "data", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Number)
    ], ProcessbarComponent.prototype, "max", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ProcessbarComponent.prototype, "desc", void 0);
    ProcessbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-processbar',
            template: __webpack_require__(/*! ./processbar.component.html */ "./src/app/processbar/processbar.component.html"),
            styles: [__webpack_require__(/*! ./processbar.component.css */ "./src/app/processbar/processbar.component.css")],
        }),
        __metadata("design:paramtypes", [])
    ], ProcessbarComponent);
    return ProcessbarComponent;
}());



/***/ }),

/***/ "./src/app/reg/reg.component.css":
/*!***************************************!*\
  !*** ./src/app/reg/reg.component.css ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  justify-content: space-around;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  padding: 50px;\r\n  flex-flow: column;\r\n}\r\n\r\nbutton {\r\n  margin-top: 10px;\r\n  margin-bottom: 10px;\r\n}"

/***/ }),

/***/ "./src/app/reg/reg.component.html":
/*!****************************************!*\
  !*** ./src/app/reg/reg.component.html ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<mat-card class=\"card\">\r\n  <mat-card-title>\r\n    和我签订契约，成为魔法少女吧！\r\n  </mat-card-title>\r\n  <mat-card-content>\r\n    <form class=\"container\" [formGroup]=\"regForm\" (ngSubmit)=\"onSubmit()\">\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Username\" formControlName=\"username\">\r\n        <mat-error *ngIf=\"regForm.get('username').invalid\">请输入用户名</mat-error>\r\n        \r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Password\" type=\"password\" formControlName=\"password\">\r\n        <mat-error *ngIf=\"regForm.get('password').invalid\">请输入密码</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"E-mail\" type=\"email\" formControlName=\"mail\">\r\n        <mat-error *ngIf=\"regForm.get('mail').invalid\">请输入正确的邮箱</mat-error>\r\n      </mat-form-field>\r\n\r\n      <mat-form-field>\r\n        <input matInput placeholder=\"Nickname\" formControlName=\"nickname\">\r\n        <mat-error *ngIf=\"regForm.get('nickname').invalid\">请输入昵称</mat-error>\r\n      </mat-form-field>\r\n\r\n      <button type=\"submit\" [disabled]=\"!regForm.valid\" mat-raised-button color=\"primary\">注册</button>\r\n    </form>\r\n  </mat-card-content>\r\n</mat-card>\r\n"

/***/ }),

/***/ "./src/app/reg/reg.component.ts":
/*!**************************************!*\
  !*** ./src/app/reg/reg.component.ts ***!
  \**************************************/
/*! exports provided: RegComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegComponent", function() { return RegComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var RegComponent = /** @class */ (function () {
    function RegComponent(usersService, router, snackBar) {
        this.usersService = usersService;
        this.router = router;
        this.snackBar = snackBar;
        this.regForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormGroup"]({
            'username': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'password': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
            'mail': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].email]),
            'nickname': new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required]),
        });
    }
    RegComponent.prototype.onSubmit = function () {
        return __awaiter(this, void 0, void 0, function () {
            var err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.usersService.reg(this.regForm.value)];
                    case 1:
                        _a.sent();
                        this.snackBar.open('注册成功', '', {
                            duration: 3000,
                        });
                        this.router.navigateByUrl('/files');
                        return [3 /*break*/, 3];
                    case 2:
                        err_1 = _a.sent();
                        if (err_1.error.code === 201) {
                            alert('用户名已存在');
                        }
                        if (err_1.error.code === 202) {
                            alert('邮箱已存在');
                        }
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegComponent.prototype.ngOnInit = function () {
    };
    RegComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-reg',
            template: __webpack_require__(/*! ./reg.component.html */ "./src/app/reg/reg.component.html"),
            styles: [__webpack_require__(/*! ./reg.component.css */ "./src/app/reg/reg.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatSnackBar"]])
    ], RegComponent);
    return RegComponent;
}());



/***/ }),

/***/ "./src/app/sections.service.ts":
/*!*************************************!*\
  !*** ./src/app/sections.service.ts ***!
  \*************************************/
/*! exports provided: SectionsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsService", function() { return SectionsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./constant */ "./src/app/constant.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};





var SectionsService = /** @class */ (function () {
    function SectionsService(http, usersService, router) {
        this.http = http;
        this.usersService = usersService;
        this.router = router;
    }
    SectionsService.prototype.getAllocatedSectionsCount = function () {
        return __awaiter(this, void 0, void 0, function () {
            var requestURL, r, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.usersService.Token) {
                            this.router.navigateByUrl('/login');
                        }
                        requestURL = _constant__WEBPACK_IMPORTED_MODULE_4__["Constants"].GenRequestURL('/assets/sections/count', {
                            token: this.usersService.Token
                        });
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 3, , 4]);
                        return [4 /*yield*/, this.http.get(requestURL).toPromise()];
                    case 2:
                        r = _a.sent();
                        return [2 /*return*/, r];
                    case 3:
                        err_1 = _a.sent();
                        console.log(err_1);
                        this.router.navigateByUrl('/login');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    SectionsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _users_service__WEBPACK_IMPORTED_MODULE_2__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], SectionsService);
    return SectionsService;
}());



/***/ }),

/***/ "./src/app/sidenav/sidenav.component.css":
/*!***********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.css ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\r\n  display: flex;\r\n  flex-flow: column;\r\n  width: 100%;\r\n}\r\n\r\na {\r\n  padding: 10px 0 10px 0;\r\n}"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.html":
/*!************************************************!*\
  !*** ./src/app/sidenav/sidenav.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<a mat-button (click)=\"mypage()\">我</a>\r\n<a mat-button routerLink=\"/dashboard\">总览</a>\r\n<a mat-button routerLink=\"/files\">文本</a>\r\n"

/***/ }),

/***/ "./src/app/sidenav/sidenav.component.ts":
/*!**********************************************!*\
  !*** ./src/app/sidenav/sidenav.component.ts ***!
  \**********************************************/
/*! exports provided: SidenavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SidenavComponent", function() { return SidenavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _users_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../users.service */ "./src/app/users.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SidenavComponent = /** @class */ (function () {
    function SidenavComponent(usersService, router) {
        this.usersService = usersService;
        this.router = router;
    }
    SidenavComponent.prototype.ngOnInit = function () {
    };
    SidenavComponent.prototype.mypage = function () {
        if (this.usersService.Token) {
            this.router.navigateByUrl('/mypage');
        }
        else {
            this.router.navigateByUrl('/login');
        }
    };
    SidenavComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sidenav',
            template: __webpack_require__(/*! ./sidenav.component.html */ "./src/app/sidenav/sidenav.component.html"),
            styles: [__webpack_require__(/*! ./sidenav.component.css */ "./src/app/sidenav/sidenav.component.css")]
        }),
        __metadata("design:paramtypes", [_users_service__WEBPACK_IMPORTED_MODULE_1__["UsersService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], SidenavComponent);
    return SidenavComponent;
}());



/***/ }),

/***/ "./src/app/users.service.ts":
/*!**********************************!*\
  !*** ./src/app/users.service.ts ***!
  \**********************************/
/*! exports provided: UsersService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UsersService", function() { return UsersService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _constant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant */ "./src/app/constant.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};




var UsersService = /** @class */ (function () {
    function UsersService(http, router) {
        this.http = http;
        this.router = router;
        this.token = null;
        this.user = null;
        this.token = localStorage.getItem('token');
        if (this.token) {
            this.getUserInfo();
        }
    }
    Object.defineProperty(UsersService.prototype, "Token", {
        get: function () {
            return this.token;
        },
        set: function (value) {
            this.token = value;
            localStorage.setItem('token', value);
        },
        enumerable: true,
        configurable: true
    });
    UsersService.prototype.reg = function (regDto) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = _constant__WEBPACK_IMPORTED_MODULE_1__["Constants"].GenRequestURL('/users');
                        return [4 /*yield*/, this.http.post(requestUrl, regDto).toPromise()];
                    case 1:
                        result = _a.sent();
                        this.Token = result['message'];
                        return [4 /*yield*/, this.getUserInfo()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result['message']];
                }
            });
        });
    };
    UsersService.prototype.login = function (loginDto) {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        requestUrl = _constant__WEBPACK_IMPORTED_MODULE_1__["Constants"].GenRequestURL('/users/token');
                        return [4 /*yield*/, this.http.post(requestUrl, loginDto).toPromise()];
                    case 1:
                        result = _a.sent();
                        this.Token = result['message'];
                        return [4 /*yield*/, this.getUserInfo()];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, result['message']];
                }
            });
        });
    };
    UsersService.prototype.getUserInfo = function () {
        return __awaiter(this, void 0, void 0, function () {
            var requestUrl, _a, err_1;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        requestUrl = _constant__WEBPACK_IMPORTED_MODULE_1__["Constants"].GenRequestURL('/user', {
                            'token': this.token
                        });
                        _b.label = 1;
                    case 1:
                        _b.trys.push([1, 3, , 4]);
                        _a = this;
                        return [4 /*yield*/, this.http.get(requestUrl).toPromise()];
                    case 2:
                        _a.user = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        err_1 = _b.sent();
                        console.log(err_1);
                        this.router.navigateByUrl('/login');
                        return [3 /*break*/, 4];
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    UsersService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], UsersService);
    return UsersService;
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
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Pro\Documents\GitHub\aigis-han-project\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map