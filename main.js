(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div style=\"height: 100%;\">\n  <mat-toolbar >\n    <span class=\"title-center\">Text Editor</span>\n  </mat-toolbar>\n  <div class=\"tilte-BottomCon\">\n     <div class=\"container-center\">\n       <p *ngFor=\"let para of totalPara;let i=index\">\n         <span *ngFor=\"let line of para.lines;let ii=index\">\n          <span *ngFor=\"let word of line.words;let iii=index\">\n              <span [innerText]=\"converTotext(word.c)\"></span>\n          </span>\n         </span>\n       </p>\n     </div>\n  </div>\n</div> -->\n\n<router-outlet></router-outlet>  \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"isDataLoaded\">\n  <mat-spinner></mat-spinner>\n</div>\n<div style=\"height: calc(100% - 51px);background-color: whitesmoke;\">\n\n  <div style=\"height: calc(100% - 50px);\">\n    <!-- <div >\n      <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div>\n    </div> (cdkDropListDropped)=\"dropTeacher($event)-->\n    <mat-card cdkDropList class=\"example-list\"\n      style=\"height: calc(100% - 50px);margin: 7px;overflow: auto;  background-color: #efefef;\">\n      <mat-card class=\"teacher-card\" *ngFor=\"let school of allSchools;let ind=index\" style=\"min-width: 180px;\">\n        <mat-card-content>\n          <div style=\"height: 30px;\">\n            <span> schoolName : {{school.payload.doc.data().schoolName}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span> country : {{school.payload.doc.data().country}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span> state : {{school.payload.doc.data().state}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span>district : {{school.payload.doc.data().district}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span>address : {{school.payload.doc.data().address}}</span>\n          </div>\n        </mat-card-content>\n        <mat-card-actions style=\"text-align: center;\">\n          <button mat-button [style.color]=\"school.payload.doc.data().isApproved?'white':''\"\n            [style.backgroundColor]=\"school.payload.doc.data().isApproved?'green':''\"\n            (click)=\"openConformDialog(school.payload.doc.data(),ind)\" mat-stroked-button color=\"warn\">Approve</button>\n\n        </mat-card-actions>\n      </mat-card>\n\n    </mat-card>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>\n  login works!\n  <button (click)=\"gotoHomePage()\">Home</button>\n</p> -->\n<mat-progress-bar *ngIf=\"isDataLoading\" mode=\"indeterminate\" style=\"position: absolute;top:0px\"></mat-progress-bar>\n<div class=\"loginMainCon\">\n  <mat-card style=\"width: 20%;max-width: 300px;min-width: 250px;border:1px solid #c8c4c4\">\n    <mat-tab-group md-stretch-tabs>\n      <!-- ********** FOR LOGIN ********  -->\n      <mat-tab label=\"Login\">\n        <!-- <form class=\"example-form\"> -->\n\n\n\n\n        <form [formGroup]=\"myLoginForm\" (ngSubmit)=\"loginUser()\" novalidate>\n          <div>\n            <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\n              <mat-label>username</mat-label>\n              <input matInput placeholder=\"username\" value=\"\" formControlName=\"username\" autocomplete=\"off\">\n            </mat-form-field>\n          </div>\n          <div>\n            <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\n              <mat-label>password</mat-label>\n              <input matInput placeholder=\"password\" formControlName=\"password\" value=\"\" autocomplete=\"off\">\n            </mat-form-field>\n          </div>\n\n\n\n          <!-- Submit -->\n          <div class=\"button-wrapper\" style=\"text-align: center;\">\n            <button mat-raised-button color=\"primary\">Login</button>\n          </div>\n\n        </form>\n\n\n\n\n\n        <!-- </form> -->\n      </mat-tab>\n    </mat-tab-group>\n  </mat-card>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainpage/mainpage.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainpage/mainpage.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 100%;\" class=\"mainPageContainer\">\n  <mat-toolbar style=\"height: 50px;border-bottom: 1px solid #dadada;\">\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\n      <!-- <img src=\"assets/images/icons_menu.png\"> -->\n      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">menu</mat-icon>\n    </button>\n    <span class=\"title-center\">Admin</span>\n  </mat-toolbar>\n  <mat-drawer-container class=\"example-container\" autosize>\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" opened>\n      <!-- opened -->\n      <div class=\"userIconCon\">\n        <span class=\"icon-User adminUserIcon\"></span>\n      </div>\n      <div style=\"margin-top: 20px;text-align: center;\">\n        <span style=\"font-weight: bold;\">username : </span>\n        <span>admin </span>\n      </div>\n\n      <div style=\"text-align: center;\">\n        <a routerLink=\"/main/home\" routerLinkActive=\"active\">\n          <button class=\"routeButtonLeft\" mat-raised-button>Home</button>\n        </a>\n      </div>\n      <!-- <div style=\"text-align: center;\">\n        <a routerLink=\"/main/principal\" routerLinkActive=\"active\">\n          <button class=\"routeButtonLeft\" mat-raised-button>Principal</button>\n        </a>\n      </div>\n      <div style=\"text-align: center;\">\n        <a routerLink=\"/main/teacher\" routerLinkActive=\"active\">\n          <button class=\"routeButtonLeft\" mat-raised-button>Teacher</button>\n        </a>\n      </div>\n      <div style=\"text-align: center;\">\n        <a routerLink=\"/main/permission\" routerLinkActive=\"active\">\n          <button class=\"routeButtonLeft\" mat-raised-button>permission</button>\n        </a>\n      </div> -->\n\n\n      <!-- For Showing The All Class List -->\n      <!-- <mat-accordion>\n        <mat-expansion-panel style=\"margin: 5px;\">\n          <mat-expansion-panel-header>\n            <mat-panel-title style=\"place-content: center;align-items: center;\">\n              Add Class\n            </mat-panel-title>\n            <mat-panel-description>\n              <div style=\"text-align: center;\">\n                <mat-icon (click)=\"addSchoolClass($event)\">add_circle</mat-icon>\n              </div>\n            </mat-panel-description>\n          </mat-expansion-panel-header>\n\n          <div style=\"text-align: center;\" *ngFor=\"let cls of allClassList;let i=index\">\n            <a [routerLink]=\"['/main/grade', cls.payload.doc.data().data.className]\">\n              <button class=\"routeButtonLeft\" mat-raised-button>\n                <span> {{cls.payload.doc.data().data.className}}</span>\n                <i class=\"material-icons\" (click)=\"deleteClass($event,cls.payload.doc.data().data.className)\"\n                  style=\"margin-left: 30px;color: gray;\">cancel\n                </i>\n              </button>\n            </a>\n          </div>\n\n\n        </mat-expansion-panel>\n\n      </mat-accordion> -->\n      <div style=\"text-align: center;\">\n        <button class=\"routeButtonLeft\" mat-raised-button (click)=\"logoutUser()\">logout</button>\n      </div>\n\n\n\n    </mat-drawer>\n\n    <router-outlet></router-outlet>\n    <!-- <div class=\"example-sidenav-content\">\n      <div class=\"tilte-BottomCon\">\n       <div class=\"container-center\">\n        <p *ngFor=\"let para of totalPara;let i=index\">\n          <span *ngFor=\"let line of para.lines;let ii=index\">\n           <span *ngFor=\"let word of line.words;let iii=index\">\n              <span [innerText]=\"converTotext(word.c)\"></span>\n           </span>\n          </span>\n        </p>\n      </div>\n     </div>\n    </div>\n   -->\n  </mat-drawer-container>\n\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\n  pagenotfound works!\n</p>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/deletebox/delete.dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/deletebox/delete.dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n\n    <!-- Submit -->\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\n        <div>\n            <span> Do you want to delete</span>\n        </div>\n        <div style=\"margin-top: 15px;\">\n            <button mat-flat-button (click)=\"onNoClick()\" style=\"margin: 10px;\">cancel</button>\n            <button *ngIf=\"!data.totalData.isApproved\" mat-flat-button color=\"primary\" (click)=\"onNoClick('ok')\"\n                style=\"margin: 10px;\">Approve</button>\n            <button *ngIf=\"data.totalData.isApproved\" mat-flat-button color=\"primary\" (click)=\"onNoClick('ok')\"\n                style=\"margin: 10px;\">Reject</button>\n        </div>\n\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/logoutconfirm/logout.dialog.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/logoutconfirm/logout.dialog.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\n\n    <!-- Submit -->\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\n        <div>\n            <span> Do you want to Logout</span>\n        </div>\n        <div style=\"margin-top: 15px;\">\n            <button mat-flat-button (click)=\"onNoClick()\" style=\"margin: 10px;\">cancel</button>\n            <button mat-flat-button color=\"primary\" (click)=\"onNoClick('ok')\" style=\"margin: 10px;\">Logout</button>\n        </div>\n\n    </div>\n</form>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
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
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");



var routes = [];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-fill-remaining-space {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n  }\n  .title-center {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    text-align: center;\n  }\n  .tilte-BottomCon{\n    height: calc(100% - 64px);\n    width: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    place-content: center;\n   \n  }\n  .container-center{\n    border: 1px solid #bdbdbd;\n    height: 100%;\n    width: 900px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG1CQUFjO1lBQWQsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUFxQjs7RUFFdkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbiAgLnRpdGxlLWNlbnRlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG4gIC50aWx0ZS1Cb3R0b21Db257XG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA2NHB4KTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgXG4gIH1cbiAgLmNvbnRhaW5lci1jZW50ZXJ7XG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDkwMHB4O1xuICB9Il19 */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");




var AppComponent = /** @class */ (function () {
    function AppComponent(http, router) {
        this.http = http;
        this.router = router;
        this.totalPara = [];
    }
    AppComponent.prototype.ngOnInit = function () {
        // this.http.get("assets/data/page1.json").subscribe(data =>{
        //  this.totalPara=data;
        //  console.log(this.totalPara);
        // })
        this.detectLoginChanges();
    };
    AppComponent.prototype.detectLoginChanges = function () {
        var _this = this;
        window.addEventListener('storage', function (event) {
            if (event.storageArea == localStorage) {
                var token = localStorage.getItem('useradmin_data');
                if (token == undefined || token == null) {
                    localStorage.removeItem("useradmin_data");
                    _this.router.navigate(['/login']);
                }
            }
        }, false);
    };
    AppComponent.prototype.converTotext = function (word) {
        word = this.replaceWord(word);
        var unicodePageChar = '';
        var sRes = word.split("x");
        for (var s = 1; s < sRes.length; s++) {
            unicodePageChar += String.fromCharCode(parseInt(sRes[s], 16));
        }
        return this.reverseString(unicodePageChar);
    };
    AppComponent.prototype.reverseString = function (str) {
        var splitString = str.split("");
        var reverseArray = splitString.reverse();
        var joinArray = reverseArray.join("");
        return joinArray + ' ';
    };
    AppComponent.prototype.replaceWord = function (unicodeString) {
        unicodeString = unicodeString.replace(/x623/g, "x627");
        unicodeString = unicodeString.replace(/x625/g, "x627");
        unicodeString = unicodeString.replace(/x622/g, "x627");
        unicodeString = unicodeString.replace(/x654/g, ""); //hamza above
        unicodeString = unicodeString.replace(/x655/g, ""); //hamza below
        unicodeString = unicodeString.replace(/x640/g, ""); //underscore
        unicodeString = unicodeString.replace(/x64a/g, "x626"); //yaa
        unicodeString = unicodeString.replace(/x649/g, "x626"); //yaa
        unicodeString = unicodeString.replace(/x624/g, "x648"); //wow
        unicodeString = unicodeString.replace(/x647/g, "x629"); //ta
        return unicodeString;
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }
    ]; };
    AppComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _router_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./router-module */ "./src/app/router-module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/__ivy_ngcc__/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/__ivy_ngcc__/database/index.js");
/* harmony import */ var _components_services_firebase_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/services/firebase.service */ "./src/app/components/services/firebase.service.ts");
/* harmony import */ var _components_services_login_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/services/login.service */ "./src/app/components/services/login.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_4__["AppRoutingModule"],
                _router_module__WEBPACK_IMPORTED_MODULE_6__["RouteModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_14__["FlexLayoutModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClientModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_9__["AngularFirestoreModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_10__["AngularFireDatabaseModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_13__["FormsModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_8__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].firebase),
            ],
            providers: [_components_services_firebase_service__WEBPACK_IMPORTED_MODULE_11__["FirebaseService"], _components_services_login_service__WEBPACK_IMPORTED_MODULE_12__["LoginService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".teacher-card {\n    max-width: 200px;\n    float: left;\n    margin: 5px;\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFjaGVyLWNhcmQge1xuICAgIG1heC13aWR0aDogMjAwcHg7XG4gICAgZmxvYXQ6IGxlZnQ7XG4gICAgbWFyZ2luOiA1cHg7XG4gIH0iXX0= */");

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(dialog, db) {
        this.dialog = dialog;
        this.db = db;
        this.allSchools = [];
        this.isDataLoaded = false;
        this.slideColor = 'primary';
    }
    HomeComponent.prototype.ngOnInit = function () {
        this.getAllSchool();
    };
    HomeComponent.prototype.getAllSchool = function () {
        var _this = this;
        var ref = this.db.collection('allschool').doc('admin').collection('school');
        ref.snapshotChanges().subscribe(function (res) {
            _this.isDataLoaded = false;
            if (res && res.length) {
                _this.allSchools = res;
                console.log(_this.allSchools);
            }
        });
    };
    HomeComponent.prototype.openConformDialog = function (value, index) {
        var _this = this;
        var dialogRef = this.dialog.open(_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogDeleteDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: value, ind: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'ok') {
                var isApprovedVal = !value.isApproved;
                var ref1 = _this.db.collection('allschool').doc('admin').collection('school').doc(value.schoolName);
                ref1.update({ isApproved: isApprovedVal }).then(function (res) {
                    console.log('added');
                });
                var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('info');
                ref.update({ isApproved: isApprovedVal }).then(function (res) {
                    console.log('added');
                });
                var ref3 = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection('school').doc(value.schoolName);
                ref3.update({ isApproved: isApprovedVal }).then(function (res) {
                    console.log('added');
                });
            }
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    HomeComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".loginMainCon{\n    height: 100%;\n    width: 100%;\n    display: -webkit-box;\n    display: flex;\n    place-content: center;\n    -webkit-box-align: center;\n            align-items: center;\n    background-image: url(https://firebasestorage.googleapis.com/v0/b/myschool-4c292.appspot.com/o/appImage%2Fschool3.png?alt=media&token=1c9a4762-d236-42b4-8fac-fe3973822960);\n    background-repeat: no-repeat;\n    background-size: cover;\n}\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiwyS0FBMks7SUFDM0ssNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbk1haW5Db257XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXlzY2hvb2wtNGMyOTIuYXBwc3BvdC5jb20vby9hcHBJbWFnZSUyRnNjaG9vbDMucG5nP2FsdD1tZWRpYSZ0b2tlbj0xYzlhNDc2Mi1kMjM2LTQyYjQtOGZhYy1mZTM5NzM4MjI5NjApO1xuICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgYmFja2dyb3VuZC1zaXplOiBjb3Zlcjtcbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _services_login_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/login.service */ "./src/app/components/services/login.service.ts");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, http, loginService, _snackBar, fb) {
        this.router = router;
        this.http = http;
        this.loginService = loginService;
        this._snackBar = _snackBar;
        this.fb = fb;
        this.isDataLoading = false;
        this.totalCountry = [];
        this.totalStates = [];
        this.totalDist = [];
        this.allSchool = [];
        this.currentSchool = {};
        this.registerObj = {
            country: '',
            state: '',
            district: '',
            schoolName: '',
            address: '',
            username: '',
            password: ''
        };
        this.loginObj = {
            country: '',
            state: '',
            district: '',
            schoolName: '',
            username: '',
            password: ''
        };
        this.allDistricSchool = [];
    }
    LoginComponent.prototype.ngOnInit = function () {
        if (localStorage && localStorage.useradmin_data && localStorage.useradmin_data.length) {
            this.router.navigate(['/main/home']);
        }
        this.reactiveForm();
    };
    LoginComponent.prototype.reactiveForm = function () {
        this.myLoginForm = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormGroup"]({
            username: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
            password: new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]),
        });
    };
    LoginComponent.prototype.loginUser = function () {
        if (this.myLoginForm.valid) {
            if (this.myLoginForm.value.username == 'admin') {
                if (this.myLoginForm.value.password == '123') {
                    localStorage.useradmin_data = 'adminLogin';
                    this.router.navigate(['/main']);
                }
                else {
                    this.openSnackBar('password invalid');
                }
            }
            else {
                this.openSnackBar('username invalid');
            }
        }
    };
    LoginComponent.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 1000,
        });
    };
    LoginComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] },
        { type: _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] }
    ]; };
    LoginComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _services_login_service__WEBPACK_IMPORTED_MODULE_4__["LoginService"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/mainpage/mainpage.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/mainpage/mainpage.component.css ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".example-fill-remaining-space {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n  }\n  .title-center {\n    -webkit-box-flex: 1;\n            flex: 1 1 auto;\n    text-align: center;\n  }\n  .tilte-BottomCon{\n    height: 100%;\n    width: 100%;\n    -webkit-box-align: center;\n            align-items: center;\n    display: -webkit-box;\n    display: flex;\n    place-content: center;\n   \n  }\n  .container-center{\n    border: 1px solid #bdbdbd;\n    height: 100%;\n    width: 900px;\n    margin-top: 1px;\n  }\n  .example-container {\n    width: 100%;\n    height: 100%;\n    background-color: white;\n  }\n  .example-sidenav-content {\n    display: -webkit-box;\n    display: flex;\n    height: calc(100% - 50px);\n    -webkit-box-align: center;\n            align-items: center;\n    -webkit-box-pack: center;\n            justify-content: center;\n  }\n  .example-sidenav {\n    padding: 10px;\n    width: 250px;\n    box-shadow: 1px 3px 0px 1px #dfdfdf;\n    background-color: #efefef;\n  }\n  .userIconCon{\n    text-align: center;\n    margin: 12px;\n  }\n  .adminUserIcon{\n    font-size: 80px;\n    padding: 10px;\n    border: 1px solid;\n    border-radius: 100px;\n    color: gray;\n  }\n  .routeButtonLeft{\n    width: 97%;\n    margin: 4px;\n    margin-bottom: 0px;\n  }\n  \n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxtQkFBYztZQUFkLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBcUI7O0VBRXZCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxuICAudGl0bGUtY2VudGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbiAgLnRpbHRlLUJvdHRvbUNvbntcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcbiAgIFxuICB9XG4gIC5jb250YWluZXItY2VudGVye1xuICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHdpZHRoOiA5MDBweDtcbiAgICBtYXJnaW4tdG9wOiAxcHg7XG4gIH1cblxuICAuZXhhbXBsZS1jb250YWluZXIge1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdi1jb250ZW50IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgfVxuICBcbiAgLmV4YW1wbGUtc2lkZW5hdiB7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICB3aWR0aDogMjUwcHg7XG4gICAgYm94LXNoYWRvdzogMXB4IDNweCAwcHggMXB4ICNkZmRmZGY7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcbiAgfVxuICAudXNlckljb25Db257XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIG1hcmdpbjogMTJweDtcbiAgfVxuICAuYWRtaW5Vc2VySWNvbntcbiAgICBmb250LXNpemU6IDgwcHg7XG4gICAgcGFkZGluZzogMTBweDtcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMDBweDtcbiAgICBjb2xvcjogZ3JheTtcbiAgfVxuICAucm91dGVCdXR0b25MZWZ0e1xuICAgIHdpZHRoOiA5NyU7XG4gICAgbWFyZ2luOiA0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMHB4O1xuICB9XG4gICJdfQ== */");

/***/ }),

/***/ "./src/app/components/mainpage/mainpage.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/mainpage/mainpage.component.ts ***!
  \***********************************************************/
/*! exports provided: MainpageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MainpageComponent", function() { return MainpageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");
/* harmony import */ var src_app_dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog/logoutconfirm/logout.dialog */ "./src/app/dialog/logoutconfirm/logout.dialog.ts");








var MainpageComponent = /** @class */ (function () {
    function MainpageComponent(http, router, dialog, db) {
        this.http = http;
        this.router = router;
        this.dialog = dialog;
        this.db = db;
        this.userData = {};
        this.allClassList = [];
        this.panelOpenState = false;
    }
    MainpageComponent.prototype.ngOnInit = function () {
        if (localStorage && localStorage.useradmin_data && localStorage.useradmin_data.length) {
            this.router.navigate(['/main/home']);
            // this.userData = JSON.parse(localStorage.useradmin_data);
        }
        else {
            this.router.navigate(['/login']);
        }
        // this.getAllClassList(this.userData);
    };
    MainpageComponent.prototype.getAllClassList = function (value) {
        var _this = this;
        var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes');
        ref.snapshotChanges().subscribe(function (res) {
            if (res && res.length) {
                // res[0].payload.doc.data()
                _this.allClassList = res;
                console.log(_this.allClassList);
            }
        });
    };
    MainpageComponent.prototype.logoutUser = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogLogoutConfirmDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: '', status: 'add' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'ok') {
                localStorage.removeItem("useradmin_data");
                _this.router.navigate(['/login']);
            }
        });
    };
    MainpageComponent.prototype.navigate = function (ind) {
        this.router.navigate(['grade'], { queryParams: { jwt: JSON.stringify(ind) } });
    };
    MainpageComponent.prototype.deleteClass = function (evt, className) {
        var _this = this;
        evt.stopPropagation();
        evt.preventDefault();
        var dialogRef = this.dialog.open(src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogDeleteDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: '', status: 'add' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'delete') {
                var value = JSON.parse(localStorage.useradmin_data);
                var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes').doc(className);
                ref.delete().then(function () {
                    console.log('deleted');
                });
            }
        });
    };
    MainpageComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
    ]; };
    MainpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mainpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainpage/mainpage.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mainpage.component.css */ "./src/app/components/mainpage/mainpage.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], MainpageComponent);
    return MainpageComponent;
}());



/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.css ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/pagenotfound/pagenotfound.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/pagenotfound/pagenotfound.component.ts ***!
  \*******************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./pagenotfound.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/components/pagenotfound/pagenotfound.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/components/services/firebase.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/services/firebase.service.ts ***!
  \*********************************************************/
/*! exports provided: FirebaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FirebaseService", function() { return FirebaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var FirebaseService = /** @class */ (function () {
    function FirebaseService() {
    }
    FirebaseService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], FirebaseService);
    return FirebaseService;
}());



/***/ }),

/***/ "./src/app/components/services/login.service.ts":
/*!******************************************************!*\
  !*** ./src/app/components/services/login.service.ts ***!
  \******************************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");



var LoginService = /** @class */ (function () {
    function LoginService(db) {
        this.db = db;
    }
    LoginService.prototype.registerUser = function (value) {
        var _this = this;
        var timeStamp = new Date().getTime();
        value.id = timeStamp.toString();
        value.isApproved = false;
        return new Promise(function (resolve, reject) {
            var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('info');
            ref.get().subscribe(function (res) {
                if (res && res.data()) {
                    resolve("registrated");
                }
                else {
                    ref.set(value).then(function (res) {
                        resolve(res);
                    });
                    _this.addSchoolToDistrict(value);
                }
            });
        });
    };
    LoginService.prototype.addSchoolToDistrict = function (value) {
        var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection('school').doc(value.schoolName).set(value);
        var ref1 = this.db.collection('allschool').doc('admin').collection('school').doc(value.schoolName);
        ref1.set(value).then(function (res) {
            console.log('added');
        });
    };
    LoginService.prototype.getAllDistrictSchool = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection('school');
            ref.get().subscribe(function (res) {
                if (res && res.docs.length) {
                    resolve(res.docs);
                }
                else {
                    resolve(res.docs);
                }
            });
        });
    };
    LoginService.prototype.getCurrentSchool = function (value) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('info');
            ref.get().subscribe(function (res) {
                if (res && res.data()) {
                    resolve(res.data());
                }
                else {
                    resolve('nodata');
                }
            });
        });
    };
    LoginService.ctorParameters = function () { return [
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"] }
    ]; };
    LoginService = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/dialog/deletebox/delete.dialog.ts":
/*!***************************************************!*\
  !*** ./src/app/dialog/deletebox/delete.dialog.ts ***!
  \***************************************************/
/*! exports provided: DialogDeleteDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogDeleteDialog", function() { return DialogDeleteDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");



var DialogDeleteDialog = /** @class */ (function () {
    function DialogDeleteDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogDeleteDialog.prototype.ngOnInit = function () {
        debugger;
        this.data;
    };
    DialogDeleteDialog.prototype.onNoClick = function (state) {
        this.dialogRef.close(state);
    };
    DialogDeleteDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogDeleteDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-delete',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./delete.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/deletebox/delete.dialog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogDeleteDialog);
    return DialogDeleteDialog;
}());



/***/ }),

/***/ "./src/app/dialog/logoutconfirm/logout.dialog.ts":
/*!*******************************************************!*\
  !*** ./src/app/dialog/logoutconfirm/logout.dialog.ts ***!
  \*******************************************************/
/*! exports provided: DialogLogoutConfirmDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogLogoutConfirmDialog", function() { return DialogLogoutConfirmDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");



var DialogLogoutConfirmDialog = /** @class */ (function () {
    function DialogLogoutConfirmDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogLogoutConfirmDialog.prototype.ngOnInit = function () {
    };
    DialogLogoutConfirmDialog.prototype.onNoClick = function (state) {
        this.dialogRef.close(state);
    };
    DialogLogoutConfirmDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogLogoutConfirmDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-logoutconfirm',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./logout.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/logoutconfirm/logout.dialog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogLogoutConfirmDialog);
    return DialogLogoutConfirmDialog;
}());



/***/ }),

/***/ "./src/app/material-module.ts":
/*!************************************!*\
  !*** ./src/app/material-module.ts ***!
  \************************************/
/*! exports provided: DemoMaterialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DemoMaterialModule", function() { return DemoMaterialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/a11y */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/a11y.js");
/* harmony import */ var _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/cdk/clipboard */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/clipboard.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js");
/* harmony import */ var _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/portal */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/portal.js");
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/scrolling.js");
/* harmony import */ var _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/cdk/stepper */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/stepper.js");
/* harmony import */ var _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/cdk/table */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/cdk/tree */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/tree.js");
/* harmony import */ var _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/autocomplete */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/autocomplete.js");
/* harmony import */ var _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/badge */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/badge.js");
/* harmony import */ var _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material/bottom-sheet */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/bottom-sheet.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/button-toggle.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/card.js");
/* harmony import */ var _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/checkbox */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/checkbox.js");
/* harmony import */ var _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/chips */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/chips.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/stepper.js");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/datepicker */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/datepicker.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/divider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/divider.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/expansion.js");
/* harmony import */ var _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/grid-list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/grid-list.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/icon.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/input.js");
/* harmony import */ var _angular_material_list__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/material/list */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/list.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/menu.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/material/core */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/material/progress-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-bar.js");
/* harmony import */ var _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/material/progress-spinner */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/progress-spinner.js");
/* harmony import */ var _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @angular/material/radio */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/radio.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/select.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sidenav.js");
/* harmony import */ var _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! @angular/material/slider */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slider.js");
/* harmony import */ var _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/material/slide-toggle */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/slide-toggle.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/sort.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tabs.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/toolbar.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tooltip.js");
/* harmony import */ var _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(/*! @angular/material/tree */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/tree.js");












































var DemoMaterialModule = /** @class */ (function () {
    function DemoMaterialModule() {
    }
    DemoMaterialModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            exports: [
                _angular_cdk_a11y__WEBPACK_IMPORTED_MODULE_2__["A11yModule"],
                _angular_cdk_clipboard__WEBPACK_IMPORTED_MODULE_3__["ClipboardModule"],
                _angular_cdk_stepper__WEBPACK_IMPORTED_MODULE_7__["CdkStepperModule"],
                _angular_cdk_table__WEBPACK_IMPORTED_MODULE_8__["CdkTableModule"],
                _angular_cdk_tree__WEBPACK_IMPORTED_MODULE_9__["CdkTreeModule"],
                _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_4__["DragDropModule"],
                _angular_material_autocomplete__WEBPACK_IMPORTED_MODULE_10__["MatAutocompleteModule"],
                _angular_material_badge__WEBPACK_IMPORTED_MODULE_11__["MatBadgeModule"],
                _angular_material_bottom_sheet__WEBPACK_IMPORTED_MODULE_12__["MatBottomSheetModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_13__["MatButtonModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_14__["MatButtonToggleModule"],
                _angular_material_card__WEBPACK_IMPORTED_MODULE_15__["MatCardModule"],
                _angular_material_checkbox__WEBPACK_IMPORTED_MODULE_16__["MatCheckboxModule"],
                _angular_material_chips__WEBPACK_IMPORTED_MODULE_17__["MatChipsModule"],
                _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_19__["MatDatepickerModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_20__["MatDialogModule"],
                _angular_material_divider__WEBPACK_IMPORTED_MODULE_21__["MatDividerModule"],
                _angular_material_expansion__WEBPACK_IMPORTED_MODULE_22__["MatExpansionModule"],
                _angular_material_grid_list__WEBPACK_IMPORTED_MODULE_23__["MatGridListModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_24__["MatIconModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_25__["MatInputModule"],
                _angular_material_list__WEBPACK_IMPORTED_MODULE_26__["MatListModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_27__["MatMenuModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatNativeDateModule"],
                _angular_material_paginator__WEBPACK_IMPORTED_MODULE_29__["MatPaginatorModule"],
                _angular_material_progress_bar__WEBPACK_IMPORTED_MODULE_30__["MatProgressBarModule"],
                _angular_material_progress_spinner__WEBPACK_IMPORTED_MODULE_31__["MatProgressSpinnerModule"],
                _angular_material_radio__WEBPACK_IMPORTED_MODULE_32__["MatRadioModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_28__["MatRippleModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_33__["MatSelectModule"],
                _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_34__["MatSidenavModule"],
                _angular_material_slider__WEBPACK_IMPORTED_MODULE_35__["MatSliderModule"],
                _angular_material_slide_toggle__WEBPACK_IMPORTED_MODULE_36__["MatSlideToggleModule"],
                _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_37__["MatSnackBarModule"],
                _angular_material_sort__WEBPACK_IMPORTED_MODULE_38__["MatSortModule"],
                _angular_material_table__WEBPACK_IMPORTED_MODULE_39__["MatTableModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_40__["MatTabsModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_41__["MatToolbarModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_42__["MatTooltipModule"],
                _angular_material_tree__WEBPACK_IMPORTED_MODULE_43__["MatTreeModule"],
                _angular_cdk_portal__WEBPACK_IMPORTED_MODULE_5__["PortalModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_6__["ScrollingModule"],
            ]
        })
    ], DemoMaterialModule);
    return DemoMaterialModule;
}());

/**  Copyright 2019 Google LLC. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */ 


/***/ }),

/***/ "./src/app/router-module.ts":
/*!**********************************!*\
  !*** ./src/app/router-module.ts ***!
  \**********************************/
/*! exports provided: RouteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteModule", function() { return RouteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _app_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../app/components/mainpage/mainpage.component */ "./src/app/components/mainpage/mainpage.component.ts");
/* harmony import */ var _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../app/components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _app_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app/components/pagenotfound/pagenotfound.component */ "./src/app/components/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app/components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/logoutconfirm/logout.dialog */ "./src/app/dialog/logoutconfirm/logout.dialog.ts");
















var appRoutes = [
    { path: 'login', component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    {
        path: 'main', component: _app_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"], children: [
            { path: 'home', component: _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
        ]
    },
    { path: '', redirectTo: '/login', pathMatch: 'full' },
    { path: '**', component: _app_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__["PagenotfoundComponent"] },
];
var RouteModule = /** @class */ (function () {
    function RouteModule() {
    }
    RouteModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_app_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"],
                _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                _app_components_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_8__["PagenotfoundComponent"],
                _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_12__["DialogDeleteDialog"],
                _dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogLogoutConfirmDialog"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_10__["DemoMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_13__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forRoot(appRoutes, { enableTracing: false })
            ],
            providers: [],
            bootstrap: []
        })
    ], RouteModule);
    return RouteModule;
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyCIsOesYYcQc5p6QudyYyjqE6oD8HUETWg",
        authDomain: "myschool-4c292.firebaseapp.com",
        databaseURL: "https://myschool-4c292.firebaseio.com",
        projectId: "myschool-4c292",
        storageBucket: "myschool-4c292.appspot.com",
        messagingSenderId: "159503281543",
        appId: "1:159503281543:web:1b2120eb16d5a4b6c97722"
    }
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/krishnakant/Desktop/adminpage/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map