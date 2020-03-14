(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <div style=\"height: 100%;\">\r\n  <mat-toolbar >\r\n    <span class=\"title-center\">Text Editor</span>\r\n  </mat-toolbar>\r\n  <div class=\"tilte-BottomCon\">\r\n     <div class=\"container-center\">\r\n       <p *ngFor=\"let para of totalPara;let i=index\">\r\n         <span *ngFor=\"let line of para.lines;let ii=index\">\r\n          <span *ngFor=\"let word of line.words;let iii=index\">\r\n              <span [innerText]=\"converTotext(word.c)\"></span>\r\n          </span>\r\n         </span>\r\n       </p>\r\n     </div>\r\n  </div>\r\n</div> -->\r\n\r\n<router-outlet></router-outlet>  \r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/grades.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/grades.component.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"gradeMainContainer\">\r\n    <mat-card class=\"gradeHeader\">\r\n        <span>{{id}}</span>\r\n    </mat-card>\r\n    <mat-tab-group md-stretch-tabs>\r\n        <mat-tab label=\"Student\">\r\n            <app-studentlist></app-studentlist>\r\n        </mat-tab>\r\n        <mat-tab label=\"TimeTable\">\r\n            <div class=\"gradeTabCon\">\r\n                <app-timetable></app-timetable>\r\n            </div>\r\n        </mat-tab>\r\n    </mat-tab-group>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentfees/studentfees.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentfees/studentfees.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  studentfees works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentlist/studentlist.component.html":
/*!****************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentlist/studentlist.component.html ***!
  \****************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"studentListMainCon\">\r\n    <mat-card class=\"studentCardHeader\">\r\n        <mat-icon (click)=\"openTeacherDialog('add')\" matTooltip=\"add Student\" style=\"cursor: pointer;\">add_circle\r\n        </mat-icon>\r\n    </mat-card>\r\n    <mat-card class=\"studentListCon\">\r\n        <div>\r\n\r\n            <table mat-table [dataSource]=\"dataSource\" class=\"mat-elevation-z8\" style=\"width: 100%;\">\r\n\r\n\r\n                <ng-container matColumnDef=\"id\">\r\n                    <th mat-header-cell *matHeaderCellDef> No </th>\r\n                    <td mat-cell *matCellDef=\"let element;let i = index\"> {{i+1}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"name\">\r\n                    <th mat-header-cell *matHeaderCellDef> Name </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.payload.doc.data().info.studentName}} </td>\r\n\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"mobileNumber\">\r\n                    <th mat-header-cell *matHeaderCellDef> phone No. </th>\r\n                    <td mat-cell *matCellDef=\"let element\"> {{element.payload.doc.data().info.phoneNumber}} </td>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container matColumnDef=\"edit\">\r\n                    <th mat-header-cell *matHeaderCellDef>Edit</th>\r\n                    <td mat-cell *matCellDef=\"let element;let ei=index\">\r\n                        <mat-icon (click)=\"editStudentDetails(ei)\" aria-hidden=\"false\" aria-label=\"Example home icon\"\r\n                            style=\"cursor: pointer;\">more_vert\r\n                        </mat-icon>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"delete\">\r\n                    <th mat-header-cell *matHeaderCellDef>Delete</th>\r\n                    <td mat-cell *matCellDef=\"let element;let di=index\">\r\n                        <mat-icon (click)=\"deleteConform(di)\" aria-hidden=\"false\" aria-label=\"Example home icon\"\r\n                            style=\"cursor: pointer;\">delete\r\n                        </mat-icon>\r\n                    </td>\r\n                </ng-container>\r\n\r\n                <ng-container matColumnDef=\"Info\">\r\n                    <th mat-header-cell *matHeaderCellDef>Info</th>\r\n                    <td mat-cell *matCellDef=\"let element;let ind=index\">\r\n                        <mat-icon (click)=\"openStudentDetailsDialog(ind)\" aria-hidden=\"false\"\r\n                            aria-label=\"Example home icon\" style=\"cursor: pointer;\">info\r\n                        </mat-icon>\r\n                    </td>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n            </table>\r\n            <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons></mat-paginator>\r\n        </div>\r\n    </mat-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentresult/studentresult.component.html":
/*!********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentresult/studentresult.component.html ***!
  \********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-card class=\"resultCardHeader\">\r\n  <mat-icon (click)=\"openResultDialog('add')\" matTooltip=\"add Result\" style=\"cursor: pointer;\">add_circle\r\n  </mat-icon>\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/timetable/timetable.component.html":
/*!************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/timetable/timetable.component.html ***!
  \************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"timetableMainCon\">\r\n  <mat-card class=\"timelineCardHeader\">\r\n    <mat-icon (click)=\"openTimeLineDialog('add')\" matTooltip=\"add Student\" style=\"cursor: pointer;\">add_circle\r\n    </mat-icon>\r\n  </mat-card>\r\n  <div class=\"timetable-container mat-elevation-z8\">\r\n\r\n    <table mat-table [dataSource]=\"dataSource\">\r\n\r\n      <!-- Name Column -->\r\n      <ng-container matColumnDef=\"name\" sticky>\r\n        <th mat-header-cell *matHeaderCellDef> Name </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Position Column -->\r\n      <ng-container matColumnDef=\"position\">\r\n        <th mat-header-cell *matHeaderCellDef> No. </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.position}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Weight Column -->\r\n      <ng-container matColumnDef=\"weight\">\r\n        <th mat-header-cell *matHeaderCellDef> Weight </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.weight}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Symbol Column -->\r\n      <ng-container matColumnDef=\"symbol\">\r\n        <th mat-header-cell *matHeaderCellDef> Symbol </th>\r\n        <td mat-cell *matCellDef=\"let element\"> {{element.symbol}} </td>\r\n      </ng-container>\r\n\r\n      <!-- Star Column -->\r\n      <ng-container matColumnDef=\"star\" stickyEnd>\r\n        <th mat-header-cell *matHeaderCellDef></th>\r\n        <td mat-cell *matCellDef=\"let element\">\r\n          <mat-icon>more_vert</mat-icon>\r\n        </td>\r\n      </ng-container>\r\n\r\n      <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n      <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n    </table>\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/home/home.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"isDataLoaded\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n<div style=\"height: calc(100% - 51px);background-color: whitesmoke;\">\r\n\r\n  <div style=\"height: calc(100% - 50px);\">\r\n    <!-- <div >\r\n      <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div>\r\n    </div> (cdkDropListDropped)=\"dropTeacher($event)-->\r\n    <mat-card cdkDropList class=\"example-list\"\r\n      style=\"height: calc(100% - 50px);margin: 7px;overflow: auto;  background-color: #efefef;\">\r\n      <mat-card class=\"teacher-card\" *ngFor=\"let school of allSchools;let ind=index\">\r\n        <mat-card-content>\r\n          <div style=\"height: 30px;\">\r\n            <span> schoolName : {{school.payload.doc.data().schoolName}}</span>\r\n          </div>\r\n          <div style=\"height: 30px;\">\r\n            <span> country : {{school.payload.doc.data().country}}</span>\r\n          </div>\r\n          <div style=\"height: 30px;\">\r\n            <span> state : {{school.payload.doc.data().state}}</span>\r\n          </div>\r\n          <div style=\"height: 30px;\">\r\n            <span>district : {{school.payload.doc.data().district}}</span>\r\n          </div>\r\n          <div style=\"height: 30px;\">\r\n            <span>address : {{school.payload.doc.data().address}}</span>\r\n          </div>\r\n        </mat-card-content>\r\n        <mat-card-actions style=\"text-align: center;\">\r\n          <button mat-button [style.color]=\"school.payload.doc.data().isApproved?'white':''\"\r\n            [style.backgroundColor]=\"school.payload.doc.data().isApproved?'green':''\"\r\n            (click)=\"openConformDialog(school.payload.doc.data(),ind)\" mat-stroked-button color=\"warn\">Approve</button>\r\n\r\n        </mat-card-actions>\r\n      </mat-card>\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <p>\r\n  login works!\r\n  <button (click)=\"gotoHomePage()\">Home</button>\r\n</p> -->\r\n<mat-progress-bar *ngIf=\"isDataLoading\" mode=\"indeterminate\" style=\"position: absolute;top:0px\"></mat-progress-bar>\r\n<div class=\"loginMainCon\">\r\n  <mat-card style=\"width: 20%;max-width: 300px;min-width: 250px;\">\r\n    <mat-tab-group md-stretch-tabs>\r\n      <!-- ********** FOR LOGIN ********  -->\r\n      <mat-tab label=\"Login\">\r\n        <!-- <form class=\"example-form\"> -->\r\n\r\n\r\n\r\n\r\n        <form [formGroup]=\"myLoginForm\" (ngSubmit)=\"loginUser()\" novalidate>\r\n          <div>\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n              <mat-label>username</mat-label>\r\n              <input matInput placeholder=\"username\" value=\"\" formControlName=\"username\" autocomplete=\"off\">\r\n            </mat-form-field>\r\n          </div>\r\n          <div>\r\n            <mat-form-field class=\"example-full-width\" style=\"width: 100%;\">\r\n              <mat-label>password</mat-label>\r\n              <input matInput placeholder=\"password\" formControlName=\"password\" value=\"\" autocomplete=\"off\">\r\n            </mat-form-field>\r\n          </div>\r\n\r\n\r\n\r\n          <!-- Submit -->\r\n          <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n            <button mat-raised-button color=\"primary\">Login</button>\r\n          </div>\r\n\r\n        </form>\r\n\r\n\r\n\r\n\r\n\r\n        <!-- </form> -->\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </mat-card>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainpage/mainpage.component.html":
/*!***************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainpage/mainpage.component.html ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div style=\"height: 100%;\" class=\"mainPageContainer\">\r\n  <mat-toolbar style=\"height: 50px;border-bottom: 1px solid #dadada;\">\r\n    <button type=\"button\" mat-button (click)=\"drawer.toggle()\">\r\n      <!-- <img src=\"assets/images/icons_menu.png\"> -->\r\n      <mat-icon aria-hidden=\"false\" aria-label=\"Example home icon\">menu</mat-icon>\r\n    </button>\r\n    <span class=\"title-center\">Admin</span>\r\n  </mat-toolbar>\r\n  <mat-drawer-container class=\"example-container\" autosize>\r\n    <mat-drawer #drawer class=\"example-sidenav\" mode=\"side\" opened>\r\n      <!-- opened -->\r\n      <div class=\"userIconCon\">\r\n        <span class=\"icon-User adminUserIcon\"></span>\r\n      </div>\r\n      <div style=\"margin-top: 20px;text-align: center;\">\r\n        <span style=\"font-weight: bold;\">username : </span>\r\n        <span>admin </span>\r\n      </div>\r\n\r\n      <div style=\"text-align: center;\">\r\n        <a routerLink=\"/main/home\" routerLinkActive=\"active\">\r\n          <button class=\"routeButtonLeft\" mat-raised-button>Home</button>\r\n        </a>\r\n      </div>\r\n      <!-- <div style=\"text-align: center;\">\r\n        <a routerLink=\"/main/principal\" routerLinkActive=\"active\">\r\n          <button class=\"routeButtonLeft\" mat-raised-button>Principal</button>\r\n        </a>\r\n      </div>\r\n      <div style=\"text-align: center;\">\r\n        <a routerLink=\"/main/teacher\" routerLinkActive=\"active\">\r\n          <button class=\"routeButtonLeft\" mat-raised-button>Teacher</button>\r\n        </a>\r\n      </div>\r\n      <div style=\"text-align: center;\">\r\n        <a routerLink=\"/main/permission\" routerLinkActive=\"active\">\r\n          <button class=\"routeButtonLeft\" mat-raised-button>permission</button>\r\n        </a>\r\n      </div> -->\r\n\r\n\r\n      <!-- For Showing The All Class List -->\r\n      <!-- <mat-accordion>\r\n        <mat-expansion-panel style=\"margin: 5px;\">\r\n          <mat-expansion-panel-header>\r\n            <mat-panel-title style=\"place-content: center;align-items: center;\">\r\n              Add Class\r\n            </mat-panel-title>\r\n            <mat-panel-description>\r\n              <div style=\"text-align: center;\">\r\n                <mat-icon (click)=\"addSchoolClass($event)\">add_circle</mat-icon>\r\n              </div>\r\n            </mat-panel-description>\r\n          </mat-expansion-panel-header>\r\n\r\n          <div style=\"text-align: center;\" *ngFor=\"let cls of allClassList;let i=index\">\r\n            <a [routerLink]=\"['/main/grade', cls.payload.doc.data().data.className]\">\r\n              <button class=\"routeButtonLeft\" mat-raised-button>\r\n                <span> {{cls.payload.doc.data().data.className}}</span>\r\n                <i class=\"material-icons\" (click)=\"deleteClass($event,cls.payload.doc.data().data.className)\"\r\n                  style=\"margin-left: 30px;color: gray;\">cancel\r\n                </i>\r\n              </button>\r\n            </a>\r\n          </div>\r\n\r\n\r\n        </mat-expansion-panel>\r\n\r\n      </mat-accordion> -->\r\n      <div style=\"text-align: center;\">\r\n        <button class=\"routeButtonLeft\" mat-raised-button (click)=\"logoutUser()\">logout</button>\r\n      </div>\r\n\r\n\r\n\r\n    </mat-drawer>\r\n\r\n    <router-outlet></router-outlet>\r\n    <!-- <div class=\"example-sidenav-content\">\r\n      <div class=\"tilte-BottomCon\">\r\n       <div class=\"container-center\">\r\n        <p *ngFor=\"let para of totalPara;let i=index\">\r\n          <span *ngFor=\"let line of para.lines;let ii=index\">\r\n           <span *ngFor=\"let word of line.words;let iii=index\">\r\n              <span [innerText]=\"converTotext(word.c)\"></span>\r\n           </span>\r\n          </span>\r\n        </p>\r\n      </div>\r\n     </div>\r\n    </div>\r\n   -->\r\n  </mat-drawer-container>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/pagenotfound/pagenotfound.component.html ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<p>\r\n  pagenotfound works!\r\n</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/permission/permission.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/permission/permission.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"isDataLoaded\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n<mat-card class=\"userPermission\">\r\n  <mat-card class=\"addFilterCard\">\r\n    <span class=\"icon-Add-Line\" (click)=\"openPermissionDialog('add')\" matTooltip=\"add permission\"\r\n      style=\"font-size: 22px;cursor: pointer;margin-left: 7px;\"></span>\r\n    <mat-form-field style=\"margin-left: 20px;\">\r\n      <mat-label>Filter</mat-label>\r\n      <input matInput (keyup)=\"applyFilter($event)\" placeholder=\"user\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n  </mat-card>\r\n\r\n  <mat-card class=\"permissionListCon\">\r\n    <div style=\"border: 1px solid gray;\">\r\n\r\n      <table mat-table [dataSource]=\"dataSource\" style=\"width: 100%;\">\r\n\r\n        <!-- Position Column -->\r\n        <ng-container matColumnDef=\"id\">\r\n          <th mat-header-cell *matHeaderCellDef> No </th>\r\n          <td mat-cell *matCellDef=\"let element;let i = index\"> {{i+1}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Name Column -->\r\n        <ng-container matColumnDef=\"name\">\r\n          <th mat-header-cell *matHeaderCellDef> Name </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.name}} </td>\r\n\r\n        </ng-container>\r\n\r\n        <!-- Weight Column -->\r\n        <ng-container matColumnDef=\"mobileNumber\">\r\n          <th mat-header-cell *matHeaderCellDef> phone No. </th>\r\n          <td mat-cell *matCellDef=\"let element\"> {{element.mobileNumber}} </td>\r\n        </ng-container>\r\n\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"edit\">\r\n          <th mat-header-cell *matHeaderCellDef>Edit</th>\r\n          <td mat-cell *matCellDef=\"let element;let ind=index\">\r\n            <mat-icon (click)=\"openPermissionDialog('update',ind)\" aria-hidden=\"false\" aria-label=\"Example home icon\"\r\n              style=\"cursor: pointer;\">more_vert</mat-icon>\r\n          </td>\r\n        </ng-container>\r\n        <!-- Symbol Column -->\r\n        <ng-container matColumnDef=\"delete\">\r\n          <th mat-header-cell *matHeaderCellDef>Delete</th>\r\n          <td mat-cell *matCellDef=\"let element;let i=index\">\r\n            <mat-icon (click)=\"deleteConform(i)\" aria-hidden=\"false\" aria-label=\"Example home icon\"\r\n              style=\"cursor: pointer;\">delete</mat-icon>\r\n          </td>\r\n        </ng-container>\r\n\r\n        <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\r\n        <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\r\n      </table>\r\n      <mat-paginator [pageSizeOptions]=\"[10, 20]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n\r\n  </mat-card>\r\n\r\n</mat-card>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/principal/principal.component.html":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/principal/principal.component.html ***!
  \*****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"isDataLoaded\">\n  <mat-spinner></mat-spinner>\n</div>\n\n<div style=\"height: calc(100% - 51px);background-color: whitesmoke;\">\n  <div style=\"height: 50px;\">\n    <mat-card style=\"padding: 8px;margin: 0px 9px 10px 9px;  background-color: #efefef;\">\n      <span class=\"icon-Add-Line\" (click)=\"addPricipalDetails('add')\" style=\"font-size: 30px;cursor: pointer;\"></span>\n      <!-- <span class=\"icon-Add-Line addTecherIcon\"></span> -->\n    </mat-card>\n  </div>\n  <div style=\"height: calc(100% - 50px);\">\n\n    <mat-card class=\"example-card\" *ngIf=\"principalData\">\n      <div class=\"principalDetailsCard\" fxLayout='row'>\n        <div fxFlex='33'>\n          <div style=\"height: 30px;\">\n            <span> Pricipal Name : {{principalData?.name}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span> DOB : {{principalData?.dob}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span> Gender : {{principalData?.gender}}</span>\n          </div>\n          <div>\n            absent <mat-slide-toggle (change)=\"principalAttendence($event)\" [checked]=\"principalData?.isPresent\"\n              [color]=\"slideColor\">present</mat-slide-toggle>\n          </div>\n        </div>\n        <div fxFlex='33'>\n          <span class=\"icon-User\" style=\"font-size: 100px;\"></span>\n        </div>\n        <div fxFlex='33'>\n          <div style=\"height: 30px;\">\n            <span>Phone No. : {{principalData?.mobileNumber}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span>email : {{principalData?.email}}</span>\n          </div>\n          <div style=\"height: 30px;\">\n            <span>exprience : {{principalData?.exprience}}</span>\n          </div>\n        </div>\n      </div>\n\n\n      <p>{{principalData?.thought}} </p>\n\n      <mat-card-actions>\n        <button mat-button (click)=\"addPricipalDetails('update')\" mat-raised-button color=\"primary\">Update</button>\n        <button mat-button (click)=\"deletePricipalDetails()\" mat-raised-button color=\"warn\">Delete</button>\n      </mat-card-actions>\n    </mat-card>\n\n  </div>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"loader\" *ngIf=\"isDataLoaded\">\r\n  <mat-spinner></mat-spinner>\r\n</div>\r\n<div style=\"height: calc(100% - 51px);background-color: whitesmoke;\">\r\n  <div style=\"height: 50px;\">\r\n    <mat-card style=\"padding: 8px;margin: 0px 9px 10px 9px;  background-color: #efefef;\">\r\n      <button class=\"addTecherIcon\" mat-raised-button (click)=\"openTeacherDialog('add')\">\r\n        <span class=\"icon-Add-Line\" style=\"font-size: 30px;\"></span>\r\n      </button>\r\n      <!-- <span class=\"icon-Add-Line addTecherIcon\"></span> -->\r\n    </mat-card>\r\n  </div>\r\n  <div style=\"height: calc(100% - 50px);\">\r\n    <!-- <div >\r\n      <div class=\"example-box\" *ngFor=\"let movie of movies\" cdkDrag>{{movie}}</div>\r\n    </div> (cdkDropListDropped)=\"dropTeacher($event)-->\r\n    <mat-card cdkDropList class=\"example-list\"\r\n      style=\"height: calc(100% - 50px);margin: 7px;overflow: auto;  background-color: #efefef;\">\r\n      <mat-card class=\"teacher-card\" *ngFor=\"let teacher of allTeacherData;let ind=index\">\r\n        <mat-card-header>\r\n          <div mat-card-avatar class=\"example-header-image\">\r\n            <span class=\"icon-User\" style=\"font-size: 45px;\"></span>\r\n          </div>\r\n          <mat-card-title>\r\n            <div>{{teacher.name}}</div>\r\n          </mat-card-title>\r\n          <mat-card-subtitle>DOB : {{teacher?.dob}}</mat-card-subtitle>\r\n        </mat-card-header>\r\n        <mat-card-content>\r\n          <div style=\"height: 30px;\">\r\n            <span> Gender : {{teacher.gender}}</span>\r\n          </div>\r\n          <div style=\"height: 30px;\">\r\n            <span>Phone No. : {{teacher.mobileNumber}}</span>\r\n          </div>\r\n          <div style=\"height: 30px;\">\r\n            <span>Date : {{ currentData}}</span>\r\n          </div>\r\n          <div>\r\n            absent <mat-slide-toggle (change)=\"teacherAttendence($event,ind)\" [checked]=\"teacher.isPresent\"\r\n              [color]=\"slideColor\">present</mat-slide-toggle>\r\n          </div>\r\n\r\n        </mat-card-content>\r\n        <mat-card-actions>\r\n          <button mat-button (click)=\"updateCurrentTeacher(ind)\" mat-stroked-button color='primary'>UPDATE</button>\r\n          <button mat-button (click)=\"deleteCurrentTeacher(ind)\" mat-stroked-button color=\"warn\">DELETE</button>\r\n        </mat-card-actions>\r\n      </mat-card>\r\n\r\n    </mat-card>\r\n\r\n  </div>\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addclass/addclass.dialog.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addclass/addclass.dialog.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myClassForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n    <!-- Name -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"className\" formControlName=\"className\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- Submit -->\r\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n        <button *ngIf=\"data.status == 'add'\" mat-flat-button color=\"primary\">Add</button>\r\n        <button *ngIf=\"data.status == 'delete'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Delete</button>\r\n        <button *ngIf=\"data.status == 'update'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Update</button>\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addpermission/addpermission.dialog.html":
/*!******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addpermission/addpermission.dialog.html ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <!-- Name -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- MobileNumber -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"mobileNumber\" pattern=\"[5-9]{1}[0-9]{9}\" formControlName=\"mobileNumber\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n\r\n    <!-- Submit -->\r\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n        <button *ngIf=\"data.status == 'add'\" mat-flat-button color=\"primary\">Add</button>\r\n        <button *ngIf=\"data.status == 'delete'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Delete</button>\r\n        <button *ngIf=\"data.status == 'update'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Update</button>\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addprincipal/addprincipal.dialog.html":
/*!****************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addprincipal/addprincipal.dialog.html ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"principalForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n    <!-- Name -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n\r\n    <!-- Email -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Email\" pattern=\"^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" formControlName=\"email\"\r\n            autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- MobileNumber -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"mobileNumber\" pattern=\"[5-9]{1}[0-9]{9}\" formControlName=\"mobileNumber\"\r\n            autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- Gender -->\r\n    <div class=\"misc-bottom-padding\">\r\n        <mat-label>Gender:</mat-label>\r\n        <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\" style=\"margin-left: 10px;\">\r\n            <mat-radio-button value=\"Male\" style=\"width: 30%;\">Male</mat-radio-button>\r\n            <mat-radio-button value=\"Female\">Female</mat-radio-button>\r\n        </mat-radio-group>\r\n    </div>\r\n\r\n    <!-- Date picker -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\r\n            (dateChange)=\"date($event)\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <!-- Class -->\r\n    <!-- <mat-form-field style=\"width: 100%;\">\r\n          <mat-label>Grade</mat-label>\r\n          <mat-select [(value)]=\"selected\" formControlName=\"grade\">\r\n            <mat-option [value]=\"gradeArray\" *ngFor=\"let gradeArray of GradeArray\">{{gradeArray}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field> -->\r\n\r\n    <!-- Add Subjects -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"exprience\" formControlName=\"exprience\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Thought\" formControlName=\"thought\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n\r\n\r\n    <!-- Submit -->\r\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n        <button *ngIf=\"data.status == 'add'\" mat-flat-button color=\"primary\">Add</button>\r\n        <button *ngIf=\"data.status == 'delete'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Delete</button>\r\n        <button *ngIf=\"data.status == 'update'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Update</button>\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addresult/result.dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addresult/result.dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\r\n    <mat-step [stepControl]=\"firstFormGroup\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n        <ng-template matStepLabel>Add Subjects</ng-template>\r\n        <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"secondFormGroup\" >\r\n      <form [formGroup]=\"secondFormGroup\">\r\n        <ng-template matStepLabel>Fill out Marks</ng-template>\r\n        <mat-form-field>\r\n          <mat-label>Address</mat-label>\r\n          <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\r\n                 required>\r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      <p>You are now done.</p>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addstudent/addstudent.dialog.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addstudent/addstudent.dialog.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myClassForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n    <!-- Roll No -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Roll Number\" formControlName=\"rollNumber\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- Name -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Student Name\" formControlName=\"studentName\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- Phone Number -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Phone Number\" pattern=\"[5-9]{1}[0-9]{9}\" formControlName=\"phoneNumber\"\r\n            autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- parent Name -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Parent Name\" formControlName=\"parentName\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- Address -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Address\" formControlName=\"address\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- Submit -->\r\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n        <button *ngIf=\"data.status == 'add'\" mat-flat-button color=\"primary\">Add</button>\r\n        <button *ngIf=\"data.status == 'delete'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Delete</button>\r\n        <button *ngIf=\"data.status == 'update'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Update</button>\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addteacher/addteacher.dialog.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addteacher/addteacher.dialog.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form [formGroup]=\"myForm\" (ngSubmit)=\"submitForm()\" novalidate>\r\n\r\n    <!-- Name -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Name\" formControlName=\"name\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n\r\n    <!-- Email -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"Email\" formControlName=\"email\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- MobileNumber -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput placeholder=\"mobileNumber\" formControlName=\"mobileNumber\" autocomplete=\"off\">\r\n    </mat-form-field>\r\n    <!-- Gender -->\r\n    <div class=\"misc-bottom-padding\">\r\n        <mat-label>Gender:</mat-label>\r\n        <mat-radio-group aria-label=\"Select an option\" formControlName=\"gender\" style=\"margin-left: 10px;\">\r\n            <mat-radio-button value=\"Male\" style=\"width: 30%;\">Male</mat-radio-button>\r\n            <mat-radio-button value=\"Female\">Female</mat-radio-button>\r\n        </mat-radio-group>\r\n    </div>\r\n\r\n    <!-- Date picker -->\r\n    <mat-form-field style=\"width: 100%;\">\r\n        <input matInput readonly [matDatepicker]=\"picker\" placeholder=\"Date of birth\" formControlName=\"dob\"\r\n            (dateChange)=\"date($event)\">\r\n        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n        <mat-datepicker #picker></mat-datepicker>\r\n    </mat-form-field>\r\n\r\n    <!-- Class -->\r\n    <!-- <mat-form-field style=\"width: 100%;\">\r\n          <mat-label>Grade</mat-label>\r\n          <mat-select [(value)]=\"selected\" formControlName=\"grade\">\r\n            <mat-option [value]=\"gradeArray\" *ngFor=\"let gradeArray of GradeArray\">{{gradeArray}}\r\n            </mat-option>\r\n          </mat-select>\r\n        </mat-form-field> -->\r\n\r\n    <!-- Add Subjects -->\r\n    <mat-form-field class=\"multiple-items\" style=\"width: 100%;\">\r\n        <mat-chip-list #chipList>\r\n            <mat-chip *ngFor=\"let subjectsArray of SubjectsArray\" [selectable]=\"selectable\" [removable]=\"removable\"\r\n                (removed)=\"remove(subjectsArray)\">\r\n                {{subjectsArray.name}}\r\n                <span class=\"icon-Close\" matChipRemove *ngIf=\"removable\"></span>\r\n            </mat-chip>\r\n            <input placeholder=\"Add subjects\" [matChipInputFor]=\"chipList\"\r\n                [matChipInputSeparatorKeyCodes]=\"separatorKeysCodes\" [matChipInputAddOnBlur]=\"addOnBlur\"\r\n                (matChipInputTokenEnd)=\"add($event)\">\r\n        </mat-chip-list>\r\n    </mat-form-field>\r\n\r\n    <!-- Submit -->\r\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n        <button *ngIf=\"data.status == 'add'\" mat-flat-button color=\"primary\">Add</button>\r\n        <button *ngIf=\"data.status == 'delete'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Delete</button>\r\n        <button *ngIf=\"data.status == 'update'\" mat-flat-button color=\"primary\"\r\n            (click)=\"deleteUpdateCurrentTeacher($event)\">Update</button>\r\n    </div>\r\n\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addtimetable/timetable.dialog.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addtimetable/timetable.dialog.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<mat-horizontal-stepper labelPosition=\"bottom\" #stepper>\r\n    <mat-step [stepControl]=\"firstFormGroup\">\r\n      <form [formGroup]=\"firstFormGroup\">\r\n        <ng-template matStepLabel>Add Time</ng-template>\r\n        <mat-form-field>\r\n          <mat-label>Name</mat-label>\r\n          <input matInput placeholder=\"Last name, First name\" formControlName=\"firstCtrl\" required>\r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step [stepControl]=\"secondFormGroup\" >\r\n      <form [formGroup]=\"secondFormGroup\">\r\n        <ng-template matStepLabel>Fill out Subject</ng-template>\r\n        <mat-form-field>\r\n          <mat-label>Address</mat-label>\r\n          <input matInput formControlName=\"secondCtrl\" placeholder=\"Ex. 1 Main St, New York, NY\"\r\n                 required>\r\n        </mat-form-field>\r\n        <div>\r\n          <button mat-button matStepperPrevious>Back</button>\r\n          <button mat-button matStepperNext>Next</button>\r\n        </div>\r\n      </form>\r\n    </mat-step>\r\n    <mat-step>\r\n      <ng-template matStepLabel>Done</ng-template>\r\n      <p>You are now done.</p>\r\n      <div>\r\n        <button mat-button matStepperPrevious>Back</button>\r\n        <button mat-button (click)=\"stepper.reset()\">Reset</button>\r\n      </div>\r\n    </mat-step>\r\n  </mat-horizontal-stepper>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/deletebox/delete.dialog.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/deletebox/delete.dialog.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n\r\n    <!-- Submit -->\r\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n        <div>\r\n            <span> Do you want to delete</span>\r\n        </div>\r\n        <div style=\"margin-top: 15px;\">\r\n            <button mat-flat-button (click)=\"onNoClick()\" style=\"margin: 10px;\">cancel</button>\r\n            <button *ngIf=\"!data.totalData.isApproved\" mat-flat-button color=\"primary\" (click)=\"onNoClick('ok')\"\r\n                style=\"margin: 10px;\">Approve</button>\r\n            <button *ngIf=\"data.totalData.isApproved\" mat-flat-button color=\"primary\" (click)=\"onNoClick('ok')\"\r\n                style=\"margin: 10px;\">Reject</button>\r\n        </div>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/logoutconfirm/logout.dialog.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/logoutconfirm/logout.dialog.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<form>\r\n\r\n    <!-- Submit -->\r\n    <div class=\"button-wrapper\" style=\"text-align: center;\">\r\n        <div>\r\n            <span> Do you want to Logout</span>\r\n        </div>\r\n        <div style=\"margin-top: 15px;\">\r\n            <button mat-flat-button (click)=\"onNoClick()\" style=\"margin: 10px;\">cancel</button>\r\n            <button mat-flat-button color=\"primary\" (click)=\"onNoClick('ok')\" style=\"margin: 10px;\">Logout</button>\r\n        </div>\r\n\r\n    </div>\r\n</form>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/studentDetails/studentdetails.dialog.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/studentDetails/studentdetails.dialog.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"studentDetailsPopupCon\">\r\n        <mat-card class=\"studentDetailsHeader\">\r\n            <div class=\"studentHeaderDetails\">\r\n                <span>STUDENT DETAILS</span>\r\n           </div>\r\n            <div fxLayout=\"row\">\r\n              <div fxFlex=\"50\" fxLayout=\"column\">\r\n                <span>Name : {{data.student.studentName}}</span>\r\n                <span>rollNumber : {{data.student.rollNumber}}</span>\r\n                <span>phoneNumber : {{data.student.phoneNumber}}</span>\r\n              </div>\r\n              <div fxFlex=\"50\" fxLayout=\"column\">\r\n                     \r\n            <span>parentName : {{data.student.parentName}}</span>\r\n            <span>address : {{data.student.address}}</span>\r\n              </div>\r\n            </div>\r\n        \r\n        </mat-card>\r\n        <mat-tab-group md-stretch-tabs>\r\n            <mat-tab label=\"Result\"> \r\n              <app-studentresult></app-studentresult>\r\n            </mat-tab>\r\n            <mat-tab label=\"Fees\"> \r\n            <app-studentfees></app-studentfees>\r\n            </mat-tab>\r\n    </mat-tab-group>\r\n</div>");

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
/* harmony default export */ __webpack_exports__["default"] = (".example-fill-remaining-space {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n  .title-center {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n    text-align: center;\r\n  }\r\n  .tilte-BottomCon{\r\n    height: calc(100% - 64px);\r\n    width: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    place-content: center;\r\n   \r\n  }\r\n  .container-center{\r\n    border: 1px solid #bdbdbd;\r\n    height: 100%;\r\n    width: 900px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxtQkFBYztZQUFkLGNBQWM7RUFDaEI7RUFDQTtJQUNFLG1CQUFjO1lBQWQsY0FBYztJQUNkLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCx5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtJQUNiLHFCQUFxQjs7RUFFdkI7RUFDQTtJQUNFLHlCQUF5QjtJQUN6QixZQUFZO0lBQ1osWUFBWTtFQUNkIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZXhhbXBsZS1maWxsLXJlbWFpbmluZy1zcGFjZSB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICB9XHJcbiAgLnRpdGxlLWNlbnRlciB7XHJcbiAgICBmbGV4OiAxIDEgYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgLnRpbHRlLUJvdHRvbUNvbntcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNjRweCk7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgcGxhY2UtY29udGVudDogY2VudGVyO1xyXG4gICBcclxuICB9XHJcbiAgLmNvbnRhaW5lci1jZW50ZXJ7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDkwMHB4O1xyXG4gIH0iXX0= */");

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
                var token = localStorage.getItem('user_data');
                if (token == undefined || token == null) {
                    localStorage.removeItem("user_data");
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

/***/ "./src/app/components/grades/grades.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/grades/grades.component.css ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".gradeMainContainer{\r\n    width: 100%;\r\n    height: calc(100% - 50px);\r\n    background-color: #efefef;\r\n    overflow: hidden;\r\n    \r\n}\r\n\r\n.gradeMainContainer .mat-elevation-z8{\r\n    box-shadow: unset;\r\n}\r\n\r\n.gradeHeader{\r\n    text-align: center;\r\n    font-size: 20px;\r\n    padding: 10px;\r\n    box-shadow: unset;\r\n    border:1px solid #c9c9c9;\r\n}\r\n\r\n.gradeTabCon{\r\n    height: 100%;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFkZXMvZ3JhZGVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gseUJBQXlCO0lBQ3pCLHlCQUF5QjtJQUN6QixnQkFBZ0I7O0FBRXBCOztBQUVBO0lBQ0ksaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHdCQUF3QjtBQUM1Qjs7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYWRlcy9ncmFkZXMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmFkZU1haW5Db250YWluZXJ7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWZlZmVmO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIFxyXG59XHJcblxyXG4uZ3JhZGVNYWluQ29udGFpbmVyIC5tYXQtZWxldmF0aW9uLXo4e1xyXG4gICAgYm94LXNoYWRvdzogdW5zZXQ7XHJcbn1cclxuXHJcbi5ncmFkZUhlYWRlcntcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3gtc2hhZG93OiB1bnNldDtcclxuICAgIGJvcmRlcjoxcHggc29saWQgI2M5YzljOTtcclxufVxyXG4uZ3JhZGVUYWJDb257XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbiJdfQ== */");

/***/ }),

/***/ "./src/app/components/grades/grades.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/grades/grades.component.ts ***!
  \*******************************************************/
/*! exports provided: GradesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GradesComponent", function() { return GradesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");





var GradesComponent = /** @class */ (function () {
    function GradesComponent(route, dialog, db) {
        this.route = route;
        this.dialog = dialog;
        this.db = db;
    }
    GradesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
        });
    };
    GradesComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    GradesComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    GradesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-grades',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./grades.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/grades.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./grades.component.css */ "./src/app/components/grades/grades.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], GradesComponent);
    return GradesComponent;
}());



/***/ }),

/***/ "./src/app/components/grades/studentfees/studentfees.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/grades/studentfees/studentfees.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhZGVzL3N0dWRlbnRmZWVzL3N0dWRlbnRmZWVzLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/components/grades/studentfees/studentfees.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/grades/studentfees/studentfees.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentfeesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentfeesComponent", function() { return StudentfeesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");


var StudentfeesComponent = /** @class */ (function () {
    function StudentfeesComponent() {
    }
    StudentfeesComponent.prototype.ngOnInit = function () {
    };
    StudentfeesComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentfees',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./studentfees.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentfees/studentfees.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./studentfees.component.css */ "./src/app/components/grades/studentfees/studentfees.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [])
    ], StudentfeesComponent);
    return StudentfeesComponent;
}());



/***/ }),

/***/ "./src/app/components/grades/studentlist/studentlist.component.css":
/*!*************************************************************************!*\
  !*** ./src/app/components/grades/studentlist/studentlist.component.css ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".studentListCon{\r\n    height: calc(100% - 85px);\r\n    background-color: #efefef;\r\n}\r\n.studentCardHeader{\r\n    padding: 10px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n/* .gradeMainContainer{\r\n    width: 100%;\r\n    height: calc(100% - 50px);\r\n    background-color: #efefef;\r\n} */\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFkZXMvc3R1ZGVudGxpc3Qvc3R1ZGVudGxpc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjtBQUVBOzs7O0dBSUciLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYWRlcy9zdHVkZW50bGlzdC9zdHVkZW50bGlzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnN0dWRlbnRMaXN0Q29ue1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA4NXB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbn1cclxuLnN0dWRlbnRDYXJkSGVhZGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcblxyXG4vKiAuZ3JhZGVNYWluQ29udGFpbmVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDUwcHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxufSAqL1xyXG4iXX0= */");

/***/ }),

/***/ "./src/app/components/grades/studentlist/studentlist.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/components/grades/studentlist/studentlist.component.ts ***!
  \************************************************************************/
/*! exports provided: StudentlistComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentlistComponent", function() { return StudentlistComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var src_app_dialog_addstudent_addstudent_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog/addstudent/addstudent.dialog */ "./src/app/dialog/addstudent/addstudent.dialog.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");
/* harmony import */ var src_app_dialog_studentDetails_studentdetails_dialog__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialog/studentDetails/studentdetails.dialog */ "./src/app/dialog/studentDetails/studentdetails.dialog.ts");










var allStudentData;
var StudentlistComponent = /** @class */ (function () {
    function StudentlistComponent(route, dialog, db) {
        this.route = route;
        this.dialog = dialog;
        this.db = db;
        this.displayedColumns = ['id', 'name', 'mobileNumber', 'edit', 'delete', 'Info'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](allStudentData);
        this.isDataLoaded = false;
    }
    StudentlistComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.subscribe = this.route.params.subscribe(function (params) {
            _this.id = params['id'];
            _this.getstudentData();
        });
    };
    StudentlistComponent.prototype.ngOnDestroy = function () {
        this.subscribe.unsubscribe();
    };
    StudentlistComponent.prototype.getstudentData = function () {
        var _this = this;
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            this.isDataLoaded = true;
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).
                doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes').
                doc(this.id).collection('students');
            ref.snapshotChanges().subscribe(function (res) {
                _this.isDataLoaded = false;
                if (res) {
                    allStudentData = res;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_6__["MatTableDataSource"](allStudentData);
                    console.log(allStudentData);
                }
            });
        }
    };
    StudentlistComponent.prototype.deleteConform = function (index) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogDeleteDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { data: allStudentData, index: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                var cIndex = allStudentData[index];
                var value = JSON.parse(localStorage.user_data);
                var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).
                    doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes').
                    doc(_this.id).collection('students').doc(cIndex.payload.doc.id);
                ref.delete().then(function (res) {
                    console.log('delete');
                });
            }
        });
    };
    StudentlistComponent.prototype.editStudentDetails = function (index) {
        this.openTeacherDialog('update', index);
    };
    StudentlistComponent.prototype.openTeacherDialog = function (status, index) {
        var dialogRef = this.dialog.open(src_app_dialog_addstudent_addstudent_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogAddStudentDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: allStudentData, id: this.id, status: status, ind: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    StudentlistComponent.prototype.openStudentDetailsDialog = function (index) {
        var cData = allStudentData[index].payload.doc.data().info;
        console.log(cData);
        var dialogRef = this.dialog.open(src_app_dialog_studentDetails_studentdetails_dialog__WEBPACK_IMPORTED_MODULE_9__["DialogStudentDetailsDialog"], {
            width: '90%',
            minWidth: '250px',
            data: { id: this.id, student: cData }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    StudentlistComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_7__["MatPaginator"])
    ], StudentlistComponent.prototype, "paginator", void 0);
    StudentlistComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentlist',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./studentlist.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentlist/studentlist.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./studentlist.component.css */ "./src/app/components/grades/studentlist/studentlist.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], StudentlistComponent);
    return StudentlistComponent;
}());



/***/ }),

/***/ "./src/app/components/grades/studentresult/studentresult.component.css":
/*!*****************************************************************************!*\
  !*** ./src/app/components/grades/studentresult/studentresult.component.css ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ3JhZGVzL3N0dWRlbnRyZXN1bHQvc3R1ZGVudHJlc3VsdC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/grades/studentresult/studentresult.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/components/grades/studentresult/studentresult.component.ts ***!
  \****************************************************************************/
/*! exports provided: StudentresultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StudentresultComponent", function() { return StudentresultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_dialog_addresult_result_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog/addresult/result.dialog */ "./src/app/dialog/addresult/result.dialog.ts");




var StudentresultComponent = /** @class */ (function () {
    function StudentresultComponent(dialog) {
        this.dialog = dialog;
    }
    StudentresultComponent.prototype.ngOnInit = function () {
    };
    StudentresultComponent.prototype.openResultDialog = function (status, index) {
        var dialogRef = this.dialog.open(src_app_dialog_addresult_result_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogResultDialog"], {
            width: '90%',
            minWidth: '250px',
            data: { status: status }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    StudentresultComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    StudentresultComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-studentresult',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./studentresult.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/studentresult/studentresult.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./studentresult.component.css */ "./src/app/components/grades/studentresult/studentresult.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], StudentresultComponent);
    return StudentresultComponent;
}());



/***/ }),

/***/ "./src/app/components/grades/timetable/timetable.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/components/grades/timetable/timetable.component.css ***!
  \*********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".timetable-container {\r\n    height: calc(100% - 350px);\r\n    width: 100%;\r\n    overflow: auto;\r\n    place-content: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    margin-top: 3px;\r\n  }\r\n  .timelineCardHeader{\r\n    padding: 10px;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n}\r\n  table {\r\n    width: 800px;\r\n  }\r\n  td.mat-column-star {\r\n    width: 20px;\r\n    padding-right: 8px;\r\n  }\r\n  th.mat-column-position, td.mat-column-position {\r\n    padding-left: 8px;\r\n  }\r\n  .mat-table-sticky:first-child {\r\n    border-right: 1px solid #e0e0e0;\r\n  }\r\n  .mat-table-sticky:last-child {\r\n    border-left: 1px solid #e0e0e0;\r\n  }\r\n  .timetableMainCon{\r\n    height: 100%;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ncmFkZXMvdGltZXRhYmxlL3RpbWV0YWJsZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksMEJBQTBCO0lBQzFCLFdBQVc7SUFDWCxjQUFjO0lBQ2QscUJBQXFCO0lBQ3JCLG9CQUFhO0lBQWIsYUFBYTtJQUNiLGVBQWU7RUFDakI7RUFDQTtJQUNFLGFBQWE7SUFDYix5QkFBbUI7WUFBbkIsbUJBQW1CO0lBQ25CLG9CQUFhO0lBQWIsYUFBYTtBQUNqQjtFQUVFO0lBQ0UsWUFBWTtFQUNkO0VBRUE7SUFDRSxXQUFXO0lBQ1gsa0JBQWtCO0VBQ3BCO0VBRUE7SUFDRSxpQkFBaUI7RUFDbkI7RUFFQTtJQUNFLCtCQUErQjtFQUNqQztFQUVBO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxZQUFZO0VBQ2QiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2dyYWRlcy90aW1ldGFibGUvdGltZXRhYmxlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudGltZXRhYmxlLWNvbnRhaW5lciB7XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDM1MHB4KTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgb3ZlcmZsb3c6IGF1dG87XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgbWFyZ2luLXRvcDogM3B4O1xyXG4gIH1cclxuICAudGltZWxpbmVDYXJkSGVhZGVye1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG59XHJcbiAgXHJcbiAgdGFibGUge1xyXG4gICAgd2lkdGg6IDgwMHB4O1xyXG4gIH1cclxuICBcclxuICB0ZC5tYXQtY29sdW1uLXN0YXIge1xyXG4gICAgd2lkdGg6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIHRoLm1hdC1jb2x1bW4tcG9zaXRpb24sIHRkLm1hdC1jb2x1bW4tcG9zaXRpb24ge1xyXG4gICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdGFibGUtc3RpY2t5OmZpcnN0LWNoaWxkIHtcclxuICAgIGJvcmRlci1yaWdodDogMXB4IHNvbGlkICNlMGUwZTA7XHJcbiAgfVxyXG4gIFxyXG4gIC5tYXQtdGFibGUtc3RpY2t5Omxhc3QtY2hpbGQge1xyXG4gICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjZTBlMGUwO1xyXG4gIH1cclxuICAudGltZXRhYmxlTWFpbkNvbntcclxuICAgIGhlaWdodDogMTAwJTtcclxuICB9Il19 */");

/***/ }),

/***/ "./src/app/components/grades/timetable/timetable.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/components/grades/timetable/timetable.component.ts ***!
  \********************************************************************/
/*! exports provided: TimetableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TimetableComponent", function() { return TimetableComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_dialog_addtimetable_timetable_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog/addtimetable/timetable.dialog */ "./src/app/dialog/addtimetable/timetable.dialog.ts");




var TimetableComponent = /** @class */ (function () {
    function TimetableComponent(dialog) {
        this.dialog = dialog;
        this.displayedColumns = ['name', 'position', 'weight', 'symbol', 'position', 'weight', 'symbol', 'star'];
        this.dataSource = ELEMENT_DATA;
    }
    TimetableComponent.prototype.ngOnInit = function () {
    };
    TimetableComponent.prototype.openTimeLineDialog = function (status, index) {
        var dialogRef = this.dialog.open(src_app_dialog_addtimetable_timetable_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogTimeTableDialog"], {
            width: '90%',
            minWidth: '250px',
            data: { status: status }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    TimetableComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] }
    ]; };
    TimetableComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-timetable',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./timetable.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/grades/timetable/timetable.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./timetable.component.css */ "./src/app/components/grades/timetable/timetable.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], TimetableComponent);
    return TimetableComponent;
}());

var ELEMENT_DATA = [
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
    { position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H' },
    { position: 2, name: 'Helium', weight: 4.0026, symbol: 'He' },
    { position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li' },
    { position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be' },
    { position: 5, name: 'Boron', weight: 10.811, symbol: 'B' },
    { position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C' },
    { position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N' },
    { position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O' },
    { position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F' },
    { position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne' },
];


/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".teacher-card {\r\n    max-width: 200px;\r\n    float: left;\r\n    margin: 5px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsV0FBVztFQUNiIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi50ZWFjaGVyLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfSJdfQ== */");

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
/* harmony default export */ __webpack_exports__["default"] = (".loginMainCon{\r\n    height: 100%;\r\n    width: 100%;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    place-content: center;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    background-image: url(https://firebasestorage.googleapis.com/v0/b/myschool-4c292.appspot.com/o/appImage%2Fschool3.png?alt=media&token=1c9a4762-d236-42b4-8fac-fe3973822960);\r\n    background-repeat: no-repeat;\r\n    background-size: cover;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksWUFBWTtJQUNaLFdBQVc7SUFDWCxvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBcUI7SUFDckIseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQiwyS0FBMks7SUFDM0ssNEJBQTRCO0lBQzVCLHNCQUFzQjtBQUMxQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5sb2dpbk1haW5Db257XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBwbGFjZS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vZmlyZWJhc2VzdG9yYWdlLmdvb2dsZWFwaXMuY29tL3YwL2IvbXlzY2hvb2wtNGMyOTIuYXBwc3BvdC5jb20vby9hcHBJbWFnZSUyRnNjaG9vbDMucG5nP2FsdD1tZWRpYSZ0b2tlbj0xYzlhNDc2Mi1kMjM2LTQyYjQtOGZhYy1mZTM5NzM4MjI5NjApO1xyXG4gICAgYmFja2dyb3VuZC1yZXBlYXQ6IG5vLXJlcGVhdDtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XHJcbn1cclxuIl19 */");

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
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
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
                    localStorage.user_data = 'adminLogin';
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
/* harmony default export */ __webpack_exports__["default"] = (".example-fill-remaining-space {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n  }\r\n  .title-center {\r\n    -webkit-box-flex: 1;\r\n            flex: 1 1 auto;\r\n    text-align: center;\r\n  }\r\n  .tilte-BottomCon{\r\n    height: 100%;\r\n    width: 100%;\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    display: -webkit-box;\r\n    display: flex;\r\n    place-content: center;\r\n   \r\n  }\r\n  .container-center{\r\n    border: 1px solid #bdbdbd;\r\n    height: 100%;\r\n    width: 900px;\r\n    margin-top: 1px;\r\n  }\r\n  .example-container {\r\n    width: 100%;\r\n    height: 100%;\r\n    background-color: white;\r\n  }\r\n  .example-sidenav-content {\r\n    display: -webkit-box;\r\n    display: flex;\r\n    height: calc(100% - 50px);\r\n    -webkit-box-align: center;\r\n            align-items: center;\r\n    -webkit-box-pack: center;\r\n            justify-content: center;\r\n  }\r\n  .example-sidenav {\r\n    padding: 10px;\r\n    width: 250px;\r\n    box-shadow: 1px 3px 0px 1px #dfdfdf;\r\n    background-color: #efefef;\r\n  }\r\n  .userIconCon{\r\n    text-align: center;\r\n    margin: 12px;\r\n  }\r\n  .adminUserIcon{\r\n    font-size: 80px;\r\n    padding: 10px;\r\n    border: 1px solid;\r\n    border-radius: 100px;\r\n    color: gray;\r\n  }\r\n  .routeButtonLeft{\r\n    width: 97%;\r\n    margin: 4px;\r\n    margin-bottom: 0px;\r\n  }\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYWlucGFnZS9tYWlucGFnZS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQWM7WUFBZCxjQUFjO0VBQ2hCO0VBQ0E7SUFDRSxtQkFBYztZQUFkLGNBQWM7SUFDZCxrQkFBa0I7RUFDcEI7RUFDQTtJQUNFLFlBQVk7SUFDWixXQUFXO0lBQ1gseUJBQW1CO1lBQW5CLG1CQUFtQjtJQUNuQixvQkFBYTtJQUFiLGFBQWE7SUFDYixxQkFBcUI7O0VBRXZCO0VBQ0E7SUFDRSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaLFlBQVk7SUFDWixlQUFlO0VBQ2pCO0VBRUE7SUFDRSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0Usb0JBQWE7SUFBYixhQUFhO0lBQ2IseUJBQXlCO0lBQ3pCLHlCQUFtQjtZQUFuQixtQkFBbUI7SUFDbkIsd0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUVBO0lBQ0UsYUFBYTtJQUNiLFlBQVk7SUFDWixtQ0FBbUM7SUFDbkMseUJBQXlCO0VBQzNCO0VBQ0E7SUFDRSxrQkFBa0I7SUFDbEIsWUFBWTtFQUNkO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsYUFBYTtJQUNiLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsV0FBVztFQUNiO0VBQ0E7SUFDRSxVQUFVO0lBQ1YsV0FBVztJQUNYLGtCQUFrQjtFQUNwQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbWFpbnBhZ2UvbWFpbnBhZ2UuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5leGFtcGxlLWZpbGwtcmVtYWluaW5nLXNwYWNlIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gIH1cclxuICAudGl0bGUtY2VudGVyIHtcclxuICAgIGZsZXg6IDEgMSBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudGlsdGUtQm90dG9tQ29ue1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHBsYWNlLWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgXHJcbiAgfVxyXG4gIC5jb250YWluZXItY2VudGVye1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHdpZHRoOiA5MDBweDtcclxuICAgIG1hcmdpbi10b3A6IDFweDtcclxuICB9XHJcblxyXG4gIC5leGFtcGxlLWNvbnRhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIH1cclxuICBcclxuICAuZXhhbXBsZS1zaWRlbmF2LWNvbnRlbnQge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gNTBweCk7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLXNpZGVuYXYge1xyXG4gICAgcGFkZGluZzogMTBweDtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIGJveC1zaGFkb3c6IDFweCAzcHggMHB4IDFweCAjZGZkZmRmO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2VmZWZlZjtcclxuICB9XHJcbiAgLnVzZXJJY29uQ29ue1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMnB4O1xyXG4gIH1cclxuICAuYWRtaW5Vc2VySWNvbntcclxuICAgIGZvbnQtc2l6ZTogODBweDtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBib3JkZXI6IDFweCBzb2xpZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwMHB4O1xyXG4gICAgY29sb3I6IGdyYXk7XHJcbiAgfVxyXG4gIC5yb3V0ZUJ1dHRvbkxlZnR7XHJcbiAgICB3aWR0aDogOTclO1xyXG4gICAgbWFyZ2luOiA0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAwcHg7XHJcbiAgfVxyXG4gICJdfQ== */");

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
/* harmony import */ var src_app_dialog_addclass_addclass_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog/addclass/addclass.dialog */ "./src/app/dialog/addclass/addclass.dialog.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");
/* harmony import */ var src_app_dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog/logoutconfirm/logout.dialog */ "./src/app/dialog/logoutconfirm/logout.dialog.ts");









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
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            this.router.navigate(['/main/home']);
            // this.userData = JSON.parse(localStorage.user_data);
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
        var dialogRef = this.dialog.open(src_app_dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_8__["DialogLogoutConfirmDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: '', status: 'add' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'ok') {
                localStorage.removeItem("user_data");
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
        var dialogRef = this.dialog.open(src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: '', status: 'add' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result === 'delete') {
                var value = JSON.parse(localStorage.user_data);
                var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes').doc(className);
                ref.delete().then(function () {
                    console.log('deleted');
                });
            }
        });
    };
    MainpageComponent.prototype.addSchoolClass = function (evt) {
        evt.stopPropagation();
        evt.preventDefault();
        var dialogRef = this.dialog.open(src_app_dialog_addclass_addclass_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogAddClassDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: '', status: 'add' }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    MainpageComponent.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] },
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"] }
    ]; };
    MainpageComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-mainpage',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./mainpage.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mainpage/mainpage.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./mainpage.component.css */ "./src/app/components/mainpage/mainpage.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_6__["AngularFirestore"]])
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

/***/ "./src/app/components/permission/permission.component.css":
/*!****************************************************************!*\
  !*** ./src/app/components/permission/permission.component.css ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".userPermission{\r\n    height: calc(100% - 50px);\r\n    background-color: #efefef;\r\n    margin: 5px;\r\n}\r\n.permissionListCon{\r\n    height: calc(100% - 110px);\r\n    background-color: #efefef;\r\n    overflow: auto;\r\n}\r\n.addFilterCard{\r\n    padding: 0px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wZXJtaXNzaW9uL3Blcm1pc3Npb24uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtJQUN6Qix5QkFBeUI7SUFDekIsV0FBVztBQUNmO0FBQ0E7SUFDSSwwQkFBMEI7SUFDMUIseUJBQXlCO0lBQ3pCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Blcm1pc3Npb24vcGVybWlzc2lvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnVzZXJQZXJtaXNzaW9ue1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSA1MHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4ucGVybWlzc2lvbkxpc3RDb257XHJcbiAgICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDExMHB4KTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZmVmZWY7XHJcbiAgICBvdmVyZmxvdzogYXV0bztcclxufVxyXG4uYWRkRmlsdGVyQ2FyZHtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/permission/permission.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/components/permission/permission.component.ts ***!
  \***************************************************************/
/*! exports provided: PermissionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PermissionComponent", function() { return PermissionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/table.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/paginator.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var src_app_dialog_addpermission_addpremission_dialog__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog/addpermission/addpremission.dialog */ "./src/app/dialog/addpermission/addpremission.dialog.ts");
/* harmony import */ var src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");








var allPermissionData = [];
var PermissionComponent = /** @class */ (function () {
    function PermissionComponent(dialog, db) {
        this.dialog = dialog;
        this.db = db;
        this.displayedColumns = ['id', 'name', 'mobileNumber', 'edit', 'delete'];
        this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](allPermissionData);
        this.isDataLoaded = false;
    }
    PermissionComponent.prototype.ngOnInit = function () {
        this.dataSource.paginator = this.paginator;
        this.getpermissionUserData();
    };
    PermissionComponent.prototype.getpermissionUserData = function () {
        var _this = this;
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            this.isDataLoaded = true;
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('permission');
            ref.snapshotChanges().subscribe(function (res) {
                _this.isDataLoaded = false;
                if (res && res.payload && res.payload.data()) {
                    allPermissionData = res.payload.data().permission;
                    _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_2__["MatTableDataSource"](allPermissionData);
                    console.log(allPermissionData);
                }
            });
        }
    };
    PermissionComponent.prototype.openPermissionDialog = function (status, index) {
        var dialogRef = this.dialog.open(src_app_dialog_addpermission_addpremission_dialog__WEBPACK_IMPORTED_MODULE_6__["DialogAddPermissionDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: allPermissionData, ind: index, status: status }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    PermissionComponent.prototype.deleteConform = function (index) {
        var dialogRef = this.dialog.open(src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_7__["DialogDeleteDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { data: allPermissionData, index: index }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
            }
        });
    };
    PermissionComponent.prototype.applyFilter = function (event) {
        var filterValue = event.target.value;
        this.dataSource.filter = filterValue.trim().toLowerCase();
    };
    PermissionComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"])
    ], PermissionComponent.prototype, "paginator", void 0);
    PermissionComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-permission',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./permission.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/permission/permission.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./permission.component.css */ "./src/app/components/permission/permission.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]])
    ], PermissionComponent);
    return PermissionComponent;
}());



/***/ }),

/***/ "./src/app/components/principal/principal.component.css":
/*!**************************************************************!*\
  !*** ./src/app/components/principal/principal.component.css ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcHJpbmNpcGFsL3ByaW5jaXBhbC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/components/principal/principal.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/components/principal/principal.component.ts ***!
  \*************************************************************/
/*! exports provided: PrincipalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrincipalComponent", function() { return PrincipalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var src_app_dialog_addprincipal_addprincipal_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog/addprincipal/addprincipal.dialog */ "./src/app/dialog/addprincipal/addprincipal.dialog.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");






var PrincipalComponent = /** @class */ (function () {
    function PrincipalComponent(dialog, db) {
        this.dialog = dialog;
        this.db = db;
    }
    PrincipalComponent.prototype.ngOnInit = function () {
        this.getPricipalData();
    };
    PrincipalComponent.prototype.getPricipalData = function () {
        var _this = this;
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('principal');
            ref.snapshotChanges().subscribe(function (res) {
                if (res && res.payload && res.payload.data()) {
                    _this.principalData = res.payload.data();
                    console.log("principal", _this.principalData);
                }
            });
        }
    };
    PrincipalComponent.prototype.addPricipalDetails = function (status, index) {
        var dialogRef = this.dialog.open(src_app_dialog_addprincipal_addprincipal_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogAddPricipalDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: this.principalData, ind: index, status: status }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    PrincipalComponent.prototype.deletePricipalDetails = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_5__["DialogDeleteDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: this.principalData, }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == 'delete') {
                if (localStorage && localStorage.user_data && localStorage.user_data.length) {
                    var value = JSON.parse(localStorage.user_data);
                    var ref = _this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('principal');
                    ref.delete().then(function (res) {
                        console.log("principal");
                    });
                }
            }
        });
    };
    PrincipalComponent.prototype.principalAttendence = function (event) {
        console.log('toggle', event.checked);
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('principal');
            this.principalData.isPresent = event.checked;
            ref.update(this.principalData).then(function (res) {
                //  this.openSnackBar("status updated");
                console.log("Updated");
            });
        }
    };
    PrincipalComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    PrincipalComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-principal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./principal.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/principal/principal.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./principal.component.css */ "./src/app/components/principal/principal.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], PrincipalComponent);
    return PrincipalComponent;
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

/***/ "./src/app/components/teacher/teacher.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/teacher/teacher.component.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".addTecherIcon{\r\n    padding: 0px !important;\r\n    min-width: 40px !important;\r\n    border-radius: 40px !important;\r\n    height: 39px !important;\r\n}\r\n.teacher-card {\r\n    max-width: 200px;\r\n    float: left;\r\n    margin: 5px;\r\n  }\r\n.example-header-image {\r\n    background-size: cover;\r\n    text-align: center;\r\n  }\r\n.cdk-drag-preview {\r\n  /* box-sizing: border-box; */\r\n  border-radius: 4px;\r\n  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),\r\n              0 8px 10px 1px rgba(0, 0, 0, 0.14),\r\n              0 3px 14px 2px rgba(0, 0, 0, 0.12);\r\n}\r\n.cdk-drag-placeholder {\r\n  opacity: 0;\r\n}\r\n.cdk-drag-animating {\r\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n.example-box:last-child {\r\n  border: none;\r\n}\r\n.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {\r\n  -webkit-transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1), -webkit-transform 250ms cubic-bezier(0, 0, 0.2, 1);\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL3RlYWNoZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHVCQUF1QjtJQUN2QiwwQkFBMEI7SUFDMUIsOEJBQThCO0lBQzlCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksZ0JBQWdCO0lBQ2hCLFdBQVc7SUFDWCxXQUFXO0VBQ2I7QUFFQTtJQUNFLHNCQUFzQjtJQUN0QixrQkFBa0I7RUFDcEI7QUFDQTtFQUNBLDRCQUE0QjtFQUM1QixrQkFBa0I7RUFDbEI7O2dEQUU4QztBQUNoRDtBQUVBO0VBQ0UsVUFBVTtBQUNaO0FBRUE7RUFDRSxzRUFBc0Q7RUFBdEQsOERBQXNEO0VBQXRELHNEQUFzRDtFQUF0RCwwR0FBc0Q7QUFDeEQ7QUFFQTtFQUNFLFlBQVk7QUFDZDtBQUVBO0VBQ0Usc0VBQXNEO0VBQXRELDhEQUFzRDtFQUF0RCxzREFBc0Q7RUFBdEQsMEdBQXNEO0FBQ3hEIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy90ZWFjaGVyL3RlYWNoZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5hZGRUZWNoZXJJY29ue1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtaW4td2lkdGg6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDQwcHggIWltcG9ydGFudDtcclxuICAgIGhlaWdodDogMzlweCAhaW1wb3J0YW50O1xyXG59XHJcbi50ZWFjaGVyLWNhcmQge1xyXG4gICAgbWF4LXdpZHRoOiAyMDBweDtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5leGFtcGxlLWhlYWRlci1pbWFnZSB7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAuY2RrLWRyYWctcHJldmlldyB7XHJcbiAgLyogYm94LXNpemluZzogYm9yZGVyLWJveDsgKi9cclxuICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgYm94LXNoYWRvdzogMCA1cHggNXB4IC0zcHggcmdiYSgwLCAwLCAwLCAwLjIpLFxyXG4gICAgICAgICAgICAgIDAgOHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC4xNCksXHJcbiAgICAgICAgICAgICAgMCAzcHggMTRweCAycHggcmdiYSgwLCAwLCAwLCAwLjEyKTtcclxufVxyXG5cclxuLmNkay1kcmFnLXBsYWNlaG9sZGVyIHtcclxuICBvcGFjaXR5OiAwO1xyXG59XHJcblxyXG4uY2RrLWRyYWctYW5pbWF0aW5nIHtcclxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gMjUwbXMgY3ViaWMtYmV6aWVyKDAsIDAsIDAuMiwgMSk7XHJcbn1cclxuXHJcbi5leGFtcGxlLWJveDpsYXN0LWNoaWxkIHtcclxuICBib3JkZXI6IG5vbmU7XHJcbn1cclxuXHJcbi5leGFtcGxlLWxpc3QuY2RrLWRyb3AtbGlzdC1kcmFnZ2luZyAuZXhhbXBsZS1ib3g6bm90KC5jZGstZHJhZy1wbGFjZWhvbGRlcikge1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAyNTBtcyBjdWJpYy1iZXppZXIoMCwgMCwgMC4yLCAxKTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/components/teacher/teacher.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/teacher/teacher.component.ts ***!
  \*********************************************************/
/*! exports provided: TeacherComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TeacherComponent", function() { return TeacherComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _dialog_addteacher_addteacher_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../dialog/addteacher/addteacher.dialog */ "./src/app/dialog/addteacher/addteacher.dialog.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/cdk/drag-drop */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/drag-drop.js");






var TeacherComponent = /** @class */ (function () {
    function TeacherComponent(dialog, db) {
        this.dialog = dialog;
        this.db = db;
        this.allTeacherData = [];
        this.isDataLoaded = false;
        this.slideColor = 'primary';
    }
    TeacherComponent.prototype.ngOnInit = function () {
        this.getTeacherData();
        this.currentData = new Date().toDateString();
    };
    TeacherComponent.prototype.getTeacherData = function () {
        var _this = this;
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            this.isDataLoaded = true;
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allteachers');
            ref.snapshotChanges().subscribe(function (res) {
                _this.isDataLoaded = false;
                if (res && res.payload && res.payload.data()) {
                    _this.allTeacherData = res.payload.data().teachers;
                    console.log(_this.allTeacherData);
                }
            });
        }
    };
    TeacherComponent.prototype.teacherAttendence = function (event, ind) {
        console.log('toggle', event.checked);
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allteachers');
            this.allTeacherData[ind].isPresent = event.checked;
            ref.update({ 'teachers': this.allTeacherData }).then(function (res) {
                //  this.openSnackBar("status updated");
                console.log("Updated");
            });
        }
    };
    TeacherComponent.prototype.dropTeacher = function (event) {
        Object(_angular_cdk_drag_drop__WEBPACK_IMPORTED_MODULE_5__["moveItemInArray"])(this.allTeacherData, event.previousIndex, event.currentIndex);
    };
    TeacherComponent.prototype.deleteCurrentTeacher = function (ind) {
        this.openTeacherDialog('delete', ind);
    };
    TeacherComponent.prototype.updateCurrentTeacher = function (ind) {
        this.openTeacherDialog('update', ind);
    };
    TeacherComponent.prototype.openTeacherDialog = function (status, index) {
        var dialogRef = this.dialog.open(_dialog_addteacher_addteacher_dialog__WEBPACK_IMPORTED_MODULE_3__["DialogAddTeacherDialog"], {
            width: '300px',
            minWidth: '250px',
            data: { totalData: this.allTeacherData, ind: index, status: status }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log('The dialog was closed');
        });
    };
    TeacherComponent.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] }
    ]; };
    TeacherComponent = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-teacher',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./teacher.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/teacher/teacher.component.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./teacher.component.css */ "./src/app/components/teacher/teacher.component.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"]])
    ], TeacherComponent);
    return TeacherComponent;
}());



/***/ }),

/***/ "./src/app/dialog/addclass/addclass.dialog.ts":
/*!****************************************************!*\
  !*** ./src/app/dialog/addclass/addclass.dialog.ts ***!
  \****************************************************/
/*! exports provided: DialogAddClassDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddClassDialog", function() { return DialogAddClassDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/keycodes.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");







var DialogAddClassDialog = /** @class */ (function () {
    function DialogAddClassDialog(dialogRef, data, fb, db, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.db = db;
        this._snackBar = _snackBar;
        this.isDisable = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
    }
    DialogAddClassDialog.prototype.ngOnInit = function () {
        this.isDisable = true;
        this.reactiveForm();
        if (this.data && this.data.totalData && this.data.ind >= 0) {
            var cData = this.data.totalData[this.data.ind];
            if (this.data.status == 'delete') {
                this.isDisable = false;
                this.myClassForm = this.fb.group({
                    className: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: cData.className, disabled: true }),
                });
            }
            if (this.data.status == 'update') {
                this.myClassForm = this.fb.group({
                    className: [cData.className, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                });
            }
        }
    };
    DialogAddClassDialog.prototype.ngAfterViewInit = function () {
    };
    DialogAddClassDialog.prototype.reactiveForm = function () {
        this.myClassForm = this.fb.group({
            className: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    DialogAddClassDialog.prototype.submitForm = function () {
        var _this = this;
        debugger;
        if (localStorage && localStorage.user_data && localStorage.user_data.length && this.myClassForm.valid) {
            var value = JSON.parse(localStorage.user_data);
            var classData = this.myClassForm.value;
            var timeStamp = new Date().getTime();
            classData.id = timeStamp.toString();
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes').doc(classData.className);
            var allData = { 'data': classData };
            ref.set(allData).then(function (res) {
                _this.openSnackBar("Class Added");
                _this.onNoClick();
            });
        }
    };
    DialogAddClassDialog.prototype.deleteUpdateCurrentTeacher = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allteachers');
            if (this.data && this.data.totalData && this.data.ind >= 0 && this.data.status == 'delete') {
                this.data.totalData.splice(this.data.ind, 1);
            }
            if (this.data && this.data.totalData && this.data.ind >= 0 && this.data.status == 'update') {
                var pData = this.data.totalData[this.data.ind];
                var uData = this.myClassForm.value;
                uData.id = pData.id;
                uData.isPresent = pData.isPresent;
                this.data.totalData[this.data.ind] = uData;
            }
            this.onNoClick();
            ref.update({ 'teachers': this.data.totalData }).then(function (res) {
                if (_this.data.status == 'delete') {
                    _this.openSnackBar("Teacher Deleted");
                }
                else if (_this.data.status == 'update') {
                    _this.openSnackBar("Teacher updated");
                }
            });
        }
    };
    DialogAddClassDialog.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 1000,
        });
    };
    DialogAddClassDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAddClassDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    DialogAddClassDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-class',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addclass.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addclass/addclass.dialog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], DialogAddClassDialog);
    return DialogAddClassDialog;
}());



/***/ }),

/***/ "./src/app/dialog/addpermission/addpremission.dialog.ts":
/*!**************************************************************!*\
  !*** ./src/app/dialog/addpermission/addpremission.dialog.ts ***!
  \**************************************************************/
/*! exports provided: DialogAddPermissionDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddPermissionDialog", function() { return DialogAddPermissionDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");






var DialogAddPermissionDialog = /** @class */ (function () {
    function DialogAddPermissionDialog(dialogRef, data, fb, db, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.db = db;
        this._snackBar = _snackBar;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isDisable = false;
    }
    DialogAddPermissionDialog.prototype.ngOnInit = function () {
        this.isDisable = true;
        this.reactiveForm();
        if (this.data.status == 'update') {
            var cData = this.data.totalData[this.data.ind];
            this.myForm = this.fb.group({
                name: [cData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
                mobileNumber: [cData.mobileNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            });
        }
    };
    DialogAddPermissionDialog.prototype.ngAfterViewInit = function () {
    };
    DialogAddPermissionDialog.prototype.reactiveForm = function () {
        this.myForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(10),
                    _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(13)]],
        });
    };
    DialogAddPermissionDialog.prototype.submitForm = function () {
        var _this = this;
        debugger;
        if (localStorage && localStorage.user_data && localStorage.user_data.length && this.myForm.valid) {
            var value = JSON.parse(localStorage.user_data);
            var permissionData_1 = this.myForm.value;
            if (permissionData_1 && permissionData_1.name != '' && permissionData_1.mobileNumber != '') {
                var timeStamp = new Date().getTime();
                permissionData_1.id = timeStamp.toString();
                var ref_1 = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('permission');
                ref_1.get().subscribe(function (res) {
                    var allData = { 'permission': [] };
                    if (res && res.data()) {
                        allData = res.data();
                    }
                    allData.permission.push(permissionData_1);
                    ref_1.set(allData).then(function (res) {
                        _this.openSnackBar("permission Added");
                        _this.onNoClick();
                    });
                });
            }
        }
    };
    DialogAddPermissionDialog.prototype.deleteUpdateCurrentTeacher = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allteachers');
            if (this.data && this.data.totalData && this.data.ind >= 0 && this.data.status == 'delete') {
                this.data.totalData.splice(this.data.ind, 1);
            }
            if (this.data && this.data.totalData && this.data.ind >= 0 && this.data.status == 'update') {
                var pData = this.data.totalData[this.data.ind];
                var uData = this.myForm.value;
                uData.id = pData.id;
                uData.isPresent = pData.isPresent;
                this.data.totalData[this.data.ind] = uData;
            }
            this.onNoClick();
            ref.update({ 'teachers': this.data.totalData }).then(function (res) {
                if (_this.data.status == 'delete') {
                    _this.openSnackBar("Teacher Deleted");
                }
                else if (_this.data.status == 'update') {
                    _this.openSnackBar("Teacher updated");
                }
            });
        }
    };
    DialogAddPermissionDialog.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 1000,
        });
    };
    DialogAddPermissionDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAddPermissionDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"] }
    ]; };
    DialogAddPermissionDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-permission',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addpermission.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addpermission/addpermission.dialog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]])
    ], DialogAddPermissionDialog);
    return DialogAddPermissionDialog;
}());



/***/ }),

/***/ "./src/app/dialog/addprincipal/addprincipal.dialog.css":
/*!*************************************************************!*\
  !*** ./src/app/dialog/addprincipal/addprincipal.dialog.css ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9hZGRwcmluY2lwYWwvYWRkcHJpbmNpcGFsLmRpYWxvZy5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dialog/addprincipal/addprincipal.dialog.ts":
/*!************************************************************!*\
  !*** ./src/app/dialog/addprincipal/addprincipal.dialog.ts ***!
  \************************************************************/
/*! exports provided: DialogAddPricipalDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddPricipalDialog", function() { return DialogAddPricipalDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/keycodes.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");







var DialogAddPricipalDialog = /** @class */ (function () {
    function DialogAddPricipalDialog(dialogRef, data, fb, db, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.db = db;
        this._snackBar = _snackBar;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isDisable = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
    }
    DialogAddPricipalDialog.prototype.ngOnInit = function () {
        this.isDisable = true;
        this.reactiveForm();
        if (this.data && this.data.totalData) {
            var cData = this.data.totalData;
            if (this.data.status == 'update') {
                this.principalForm = this.fb.group({
                    name: [cData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    email: [cData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    mobileNumber: [cData.mobileNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    gender: [cData.gender],
                    dob: [cData.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    exprience: [cData.exprience, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    thought: [cData.thought, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                });
            }
        }
    };
    DialogAddPricipalDialog.prototype.ngAfterViewInit = function () {
    };
    /* Reactive form */
    DialogAddPricipalDialog.prototype.reactiveForm = function () {
        this.principalForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            exprience: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            thought: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
        });
    };
    /* Date */
    DialogAddPricipalDialog.prototype.date = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.principalForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    };
    DialogAddPricipalDialog.prototype.submitForm = function () {
        var _this = this;
        debugger;
        if (localStorage && localStorage.user_data && localStorage.user_data.length && this.principalForm.valid) {
            var value = JSON.parse(localStorage.user_data);
            var principalData_1 = this.principalForm.value;
            var timeStamp = new Date().getTime();
            principalData_1.id = timeStamp.toString();
            principalData_1.isPresent = false;
            var ref_1 = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('principal');
            ref_1.get().subscribe(function (res) {
                ref_1.set(principalData_1).then(function (res) {
                    _this.openSnackBar("principal Added");
                    _this.onNoClick();
                });
            });
        }
    };
    DialogAddPricipalDialog.prototype.deleteUpdateCurrentTeacher = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        if (localStorage && localStorage.user_data && localStorage.user_data.length && this.principalForm.valid) {
            var value = JSON.parse(localStorage.user_data);
            var principalData = this.principalForm.value;
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('principal');
            this.onNoClick();
            ref.set(principalData).then(function (res) {
                if (_this.data.status == 'update') {
                    _this.openSnackBar("Principal updated");
                }
            });
        }
    };
    DialogAddPricipalDialog.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 1000,
        });
    };
    DialogAddPricipalDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAddPricipalDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chipList', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DialogAddPricipalDialog.prototype, "chipList", void 0);
    DialogAddPricipalDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-principal',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addprincipal.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addprincipal/addprincipal.dialog.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./addprincipal.dialog.css */ "./src/app/dialog/addprincipal/addprincipal.dialog.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], DialogAddPricipalDialog);
    return DialogAddPricipalDialog;
}());



/***/ }),

/***/ "./src/app/dialog/addresult/result.dialog.css":
/*!****************************************************!*\
  !*** ./src/app/dialog/addresult/result.dialog.css ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2RpYWxvZy9hZGRyZXN1bHQvcmVzdWx0LmRpYWxvZy5jc3MifQ== */");

/***/ }),

/***/ "./src/app/dialog/addresult/result.dialog.ts":
/*!***************************************************!*\
  !*** ./src/app/dialog/addresult/result.dialog.ts ***!
  \***************************************************/
/*! exports provided: DialogResultDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogResultDialog", function() { return DialogResultDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var DialogResultDialog = /** @class */ (function () {
    function DialogResultDialog(dialogRef, data, _formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
    }
    DialogResultDialog.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    DialogResultDialog.prototype.onNoClick = function (state) {
        this.dialogRef.close(state);
    };
    DialogResultDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    DialogResultDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-result',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./result.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addresult/result.dialog.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./result.dialog.css */ "./src/app/dialog/addresult/result.dialog.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DialogResultDialog);
    return DialogResultDialog;
}());



/***/ }),

/***/ "./src/app/dialog/addstudent/addstudent.dialog.ts":
/*!********************************************************!*\
  !*** ./src/app/dialog/addstudent/addstudent.dialog.ts ***!
  \********************************************************/
/*! exports provided: DialogAddStudentDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddStudentDialog", function() { return DialogAddStudentDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/keycodes.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");







var DialogAddStudentDialog = /** @class */ (function () {
    function DialogAddStudentDialog(dialogRef, data, fb, db, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.db = db;
        this._snackBar = _snackBar;
        this.isDisable = false;
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
    }
    DialogAddStudentDialog.prototype.ngOnInit = function () {
        this.isDisable = true;
        this.reactiveForm();
        if (this.data && this.data.totalData && this.data.ind >= 0) {
            var cData = this.data.totalData[this.data.ind];
            if (this.data.status == 'delete') {
                this.isDisable = false;
                this.myClassForm = this.fb.group({
                    studentName: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: cData.className, disabled: true }),
                });
            }
            if (this.data.status == 'update') {
                var newData = cData.payload.doc.data().info;
                this.myClassForm = this.fb.group({
                    studentName: [newData.studentName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    rollNumber: [newData.rollNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    phoneNumber: [newData.phoneNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    parentName: [newData.parentName, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    address: [newData.address, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
                });
            }
        }
    };
    DialogAddStudentDialog.prototype.ngAfterViewInit = function () {
    };
    DialogAddStudentDialog.prototype.reactiveForm = function () {
        this.myClassForm = this.fb.group({
            studentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            rollNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            phoneNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            parentName: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            address: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]]
        });
    };
    DialogAddStudentDialog.prototype.submitForm = function () {
        var _this = this;
        debugger;
        if (localStorage && localStorage.user_data && localStorage.user_data.length && this.myClassForm.valid) {
            var value = JSON.parse(localStorage.user_data);
            var studentData = this.myClassForm.value;
            var timeStamp = new Date().getTime();
            studentData.id = timeStamp.toString();
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).
                doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes').
                doc(this.data.id).collection('students').doc(studentData.id);
            var studentInfo = { info: studentData };
            ref.set(studentInfo).then(function (res) {
                _this.openSnackBar("Student Added");
                _this.onNoClick();
            });
        }
    };
    DialogAddStudentDialog.prototype.deleteUpdateCurrentTeacher = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            var value = JSON.parse(localStorage.user_data);
            var cData = this.data.totalData[this.data.ind];
            var newData = cData.payload.doc.data().info;
            var studentData = this.myClassForm.value;
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).
                doc(value.district).collection(value.schoolName).doc('allClass').collection('Classes').
                doc(this.data.id).collection('students').doc(newData.id);
            this.onNoClick();
            ref.update({ 'info': studentData }).then(function (res) {
                _this.openSnackBar("Student updated");
            });
        }
    };
    DialogAddStudentDialog.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 1000,
        });
    };
    DialogAddStudentDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAddStudentDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    DialogAddStudentDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-student',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addstudent.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addstudent/addstudent.dialog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], DialogAddStudentDialog);
    return DialogAddStudentDialog;
}());



/***/ }),

/***/ "./src/app/dialog/addteacher/addteacher.dialog.ts":
/*!********************************************************!*\
  !*** ./src/app/dialog/addteacher/addteacher.dialog.ts ***!
  \********************************************************/
/*! exports provided: DialogAddTeacherDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogAddTeacherDialog", function() { return DialogAddTeacherDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/keycodes */ "./node_modules/@angular/cdk/__ivy_ngcc__/fesm5/keycodes.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/__ivy_ngcc__/firestore/index.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/snack-bar.js");







var DialogAddTeacherDialog = /** @class */ (function () {
    function DialogAddTeacherDialog(dialogRef, data, fb, db, _snackBar) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.fb = fb;
        this.db = db;
        this._snackBar = _snackBar;
        this.visible = true;
        this.selectable = true;
        this.removable = true;
        this.addOnBlur = true;
        this.isDisable = false;
        this.GradeArray = ['8th Grade', '9th Grade', '10th Grade', '11th Grade', '12th Grade'];
        this.SubjectsArray = [];
        this.separatorKeysCodes = [_angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["ENTER"], _angular_cdk_keycodes__WEBPACK_IMPORTED_MODULE_2__["COMMA"]];
    }
    DialogAddTeacherDialog.prototype.ngOnInit = function () {
        this.isDisable = true;
        this.reactiveForm();
        if (this.data && this.data.totalData && this.data.ind >= 0) {
            var cData = this.data.totalData[this.data.ind];
            this.SubjectsArray = cData.subjects;
            if (this.data.status == 'delete') {
                this.removable = false;
                this.isDisable = false;
                this.myForm = this.fb.group({
                    name: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: cData.name, disabled: true }),
                    email: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: cData.email, disabled: true }),
                    mobileNumber: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: cData.mobileNumber, disabled: true }),
                    gender: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: cData.gender, disabled: true }),
                    dob: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: cData.dob, disabled: true }),
                    //   grade: [''],
                    subjects: new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]({ value: this.SubjectsArray, disabled: true }),
                });
            }
            if (this.data.status == 'update') {
                this.myForm = this.fb.group({
                    name: [cData.name, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    email: [cData.email, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    mobileNumber: [cData.mobileNumber, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    gender: [cData.gender],
                    dob: [cData.dob, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
                    //   grade: [''],
                    subjects: [this.SubjectsArray]
                });
            }
        }
    };
    DialogAddTeacherDialog.prototype.ngAfterViewInit = function () {
    };
    /* Reactive form */
    DialogAddTeacherDialog.prototype.reactiveForm = function () {
        this.myForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            mobileNumber: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            gender: ['Male'],
            dob: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]],
            //   grade: [''],
            subjects: [this.SubjectsArray]
        });
    };
    /* Date */
    DialogAddTeacherDialog.prototype.date = function (e) {
        var convertDate = new Date(e.target.value).toISOString().substring(0, 10);
        this.myForm.get('dob').setValue(convertDate, {
            onlyself: true
        });
    };
    /* Add dynamic languages */
    DialogAddTeacherDialog.prototype.add = function (event) {
        if (this.data.status == 'add') {
            var input = event.input;
            var value = event.value;
            if ((value || '').trim() && this.SubjectsArray.length < 5) {
                this.SubjectsArray.push({ name: value.trim() });
            }
            // Reset the input value
            if (input) {
                input.value = '';
            }
        }
    };
    /* Remove dynamic languages */
    DialogAddTeacherDialog.prototype.remove = function (subject) {
        var index = this.SubjectsArray.indexOf(subject);
        if (index >= 0) {
            this.SubjectsArray.splice(index, 1);
        }
    };
    DialogAddTeacherDialog.prototype.submitForm = function () {
        var _this = this;
        debugger;
        if (localStorage && localStorage.user_data && localStorage.user_data.length && this.myForm.valid) {
            var value = JSON.parse(localStorage.user_data);
            var teacherData_1 = this.myForm.value;
            var timeStamp = new Date().getTime();
            teacherData_1.id = timeStamp.toString();
            teacherData_1.isPresent = false;
            var ref_1 = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allteachers');
            ref_1.get().subscribe(function (res) {
                var allData = { 'teachers': [] };
                if (res && res.data()) {
                    allData = res.data();
                }
                allData.teachers.push(teacherData_1);
                ref_1.set(allData).then(function (res) {
                    _this.openSnackBar("Teacher Added");
                    _this.onNoClick();
                });
            });
        }
    };
    DialogAddTeacherDialog.prototype.deleteUpdateCurrentTeacher = function (event) {
        var _this = this;
        event.stopPropagation();
        event.preventDefault();
        if (localStorage && localStorage.user_data && localStorage.user_data.length) {
            var value = JSON.parse(localStorage.user_data);
            var ref = this.db.collection('allschool').doc(value.country).collection(value.state).doc(value.district).collection(value.schoolName).doc('allteachers');
            if (this.data && this.data.totalData && this.data.ind >= 0 && this.data.status == 'delete') {
                this.data.totalData.splice(this.data.ind, 1);
            }
            if (this.data && this.data.totalData && this.data.ind >= 0 && this.data.status == 'update') {
                var pData = this.data.totalData[this.data.ind];
                var uData = this.myForm.value;
                uData.id = pData.id;
                uData.isPresent = pData.isPresent;
                this.data.totalData[this.data.ind] = uData;
            }
            this.onNoClick();
            ref.update({ 'teachers': this.data.totalData }).then(function (res) {
                if (_this.data.status == 'delete') {
                    _this.openSnackBar("Teacher Deleted");
                }
                else if (_this.data.status == 'update') {
                    _this.openSnackBar("Teacher updated");
                }
            });
        }
    };
    DialogAddTeacherDialog.prototype.openSnackBar = function (message, action) {
        this._snackBar.open(message, action, {
            duration: 1000,
        });
    };
    DialogAddTeacherDialog.prototype.onNoClick = function () {
        this.dialogRef.close();
    };
    DialogAddTeacherDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
        { type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"] },
        { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"] }
    ]; };
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('chipList', { static: true }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)
    ], DialogAddTeacherDialog.prototype, "chipList", void 0);
    DialogAddTeacherDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-teacher',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./addteacher.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addteacher/addteacher.dialog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"], _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]])
    ], DialogAddTeacherDialog);
    return DialogAddTeacherDialog;
}());



/***/ }),

/***/ "./src/app/dialog/addtimetable/timetable.dialog.ts":
/*!*********************************************************!*\
  !*** ./src/app/dialog/addtimetable/timetable.dialog.ts ***!
  \*********************************************************/
/*! exports provided: DialogTimeTableDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogTimeTableDialog", function() { return DialogTimeTableDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");




var DialogTimeTableDialog = /** @class */ (function () {
    function DialogTimeTableDialog(dialogRef, data, _formBuilder) {
        this.dialogRef = dialogRef;
        this.data = data;
        this._formBuilder = _formBuilder;
    }
    DialogTimeTableDialog.prototype.ngOnInit = function () {
        this.firstFormGroup = this._formBuilder.group({
            firstCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
        this.secondFormGroup = this._formBuilder.group({
            secondCtrl: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
        });
    };
    DialogTimeTableDialog.prototype.onNoClick = function (state) {
        this.dialogRef.close(state);
    };
    DialogTimeTableDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] }
    ]; };
    DialogTimeTableDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-timetable',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./timetable.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/addtimetable/timetable.dialog.html")).default,
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]])
    ], DialogTimeTableDialog);
    return DialogTimeTableDialog;
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

/***/ "./src/app/dialog/studentDetails/studentdetails.css":
/*!**********************************************************!*\
  !*** ./src/app/dialog/studentDetails/studentdetails.css ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".studentDetailsPopupCon{\r\n    border: 1px solid #c3c3c3;\r\n}\r\n.studentHeaderDetails{\r\n    text-align: center;\r\n    font-weight: bold;\r\n    font-size: 25px;\r\n    color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZGlhbG9nL3N0dWRlbnREZXRhaWxzL3N0dWRlbnRkZXRhaWxzLmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2YsV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvZGlhbG9nL3N0dWRlbnREZXRhaWxzL3N0dWRlbnRkZXRhaWxzLmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zdHVkZW50RGV0YWlsc1BvcHVwQ29ue1xyXG4gICAgYm9yZGVyOiAxcHggc29saWQgI2MzYzNjMztcclxufVxyXG4uc3R1ZGVudEhlYWRlckRldGFpbHN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIGZvbnQtc2l6ZTogMjVweDtcclxuICAgIGNvbG9yOiBncmF5O1xyXG59Il19 */");

/***/ }),

/***/ "./src/app/dialog/studentDetails/studentdetails.dialog.ts":
/*!****************************************************************!*\
  !*** ./src/app/dialog/studentDetails/studentdetails.dialog.ts ***!
  \****************************************************************/
/*! exports provided: DialogStudentDetailsDialog */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DialogStudentDetailsDialog", function() { return DialogStudentDetailsDialog; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/__ivy_ngcc__/fesm5/dialog.js");



var DialogStudentDetailsDialog = /** @class */ (function () {
    function DialogStudentDetailsDialog(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    DialogStudentDetailsDialog.prototype.ngOnInit = function () {
    };
    DialogStudentDetailsDialog.prototype.onNoClick = function (state) {
        this.dialogRef.close(state);
    };
    DialogStudentDetailsDialog.ctorParameters = function () { return [
        { type: _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] }
    ]; };
    DialogStudentDetailsDialog = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'add-studentdetails',
            template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./studentdetails.dialog.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dialog/studentDetails/studentdetails.dialog.html")).default,
            styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./studentdetails.css */ "./src/app/dialog/studentDetails/studentdetails.css")).default]
        }),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__param"])(1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], DialogStudentDetailsDialog);
    return DialogStudentDetailsDialog;
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
/* harmony import */ var _app_components_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app/components/teacher/teacher.component */ "./src/app/components/teacher/teacher.component.ts");
/* harmony import */ var _material_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./material-module */ "./src/app/material-module.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/permission/permission.component */ "./src/app/components/permission/permission.component.ts");
/* harmony import */ var _dialog_addpermission_addpremission_dialog__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./dialog/addpermission/addpremission.dialog */ "./src/app/dialog/addpermission/addpremission.dialog.ts");
/* harmony import */ var _components_grades_grades_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/grades/grades.component */ "./src/app/components/grades/grades.component.ts");
/* harmony import */ var _dialog_addclass_addclass_dialog__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./dialog/addclass/addclass.dialog */ "./src/app/dialog/addclass/addclass.dialog.ts");
/* harmony import */ var _dialog_addteacher_addteacher_dialog__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./dialog/addteacher/addteacher.dialog */ "./src/app/dialog/addteacher/addteacher.dialog.ts");
/* harmony import */ var _dialog_addstudent_addstudent_dialog__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./dialog/addstudent/addstudent.dialog */ "./src/app/dialog/addstudent/addstudent.dialog.ts");
/* harmony import */ var _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/principal/principal.component */ "./src/app/components/principal/principal.component.ts");
/* harmony import */ var _dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./dialog/deletebox/delete.dialog */ "./src/app/dialog/deletebox/delete.dialog.ts");
/* harmony import */ var _components_grades_studentlist_studentlist_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/grades/studentlist/studentlist.component */ "./src/app/components/grades/studentlist/studentlist.component.ts");
/* harmony import */ var _components_grades_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/grades/timetable/timetable.component */ "./src/app/components/grades/timetable/timetable.component.ts");
/* harmony import */ var _dialog_studentDetails_studentdetails_dialog__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./dialog/studentDetails/studentdetails.dialog */ "./src/app/dialog/studentDetails/studentdetails.dialog.ts");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/__ivy_ngcc__/esm5/flex-layout.es5.js");
/* harmony import */ var _components_grades_studentresult_studentresult_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./components/grades/studentresult/studentresult.component */ "./src/app/components/grades/studentresult/studentresult.component.ts");
/* harmony import */ var _components_grades_studentfees_studentfees_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./components/grades/studentfees/studentfees.component */ "./src/app/components/grades/studentfees/studentfees.component.ts");
/* harmony import */ var _dialog_addtimetable_timetable_dialog__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./dialog/addtimetable/timetable.dialog */ "./src/app/dialog/addtimetable/timetable.dialog.ts");
/* harmony import */ var _dialog_addresult_result_dialog__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./dialog/addresult/result.dialog */ "./src/app/dialog/addresult/result.dialog.ts");
/* harmony import */ var _dialog_addprincipal_addprincipal_dialog__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./dialog/addprincipal/addprincipal.dialog */ "./src/app/dialog/addprincipal/addprincipal.dialog.ts");
/* harmony import */ var _dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./dialog/logoutconfirm/logout.dialog */ "./src/app/dialog/logoutconfirm/logout.dialog.ts");
































var appRoutes = [
    { path: 'login', component: _app_components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"] },
    {
        path: 'main', component: _app_components_mainpage_mainpage_component__WEBPACK_IMPORTED_MODULE_6__["MainpageComponent"], children: [
            { path: 'permission', component: _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_13__["PermissionComponent"] },
            { path: 'home', component: _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"] },
            { path: 'teacher', component: _app_components_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__["TeacherComponent"] },
            { path: 'principal', component: _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_19__["PrincipalComponent"] },
            { path: 'grade/:id', component: _components_grades_grades_component__WEBPACK_IMPORTED_MODULE_15__["GradesComponent"] },
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
                _components_grades_studentlist_studentlist_component__WEBPACK_IMPORTED_MODULE_21__["StudentlistComponent"],
                _components_grades_timetable_timetable_component__WEBPACK_IMPORTED_MODULE_22__["TimetableComponent"],
                _components_grades_studentresult_studentresult_component__WEBPACK_IMPORTED_MODULE_25__["StudentresultComponent"],
                _components_grades_studentfees_studentfees_component__WEBPACK_IMPORTED_MODULE_26__["StudentfeesComponent"],
                _app_components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _app_components_teacher_teacher_component__WEBPACK_IMPORTED_MODULE_10__["TeacherComponent"],
                _components_grades_grades_component__WEBPACK_IMPORTED_MODULE_15__["GradesComponent"],
                _components_principal_principal_component__WEBPACK_IMPORTED_MODULE_19__["PrincipalComponent"],
                _dialog_addteacher_addteacher_dialog__WEBPACK_IMPORTED_MODULE_17__["DialogAddTeacherDialog"],
                _dialog_addstudent_addstudent_dialog__WEBPACK_IMPORTED_MODULE_18__["DialogAddStudentDialog"],
                _dialog_studentDetails_studentdetails_dialog__WEBPACK_IMPORTED_MODULE_23__["DialogStudentDetailsDialog"],
                _dialog_deletebox_delete_dialog__WEBPACK_IMPORTED_MODULE_20__["DialogDeleteDialog"],
                _dialog_addclass_addclass_dialog__WEBPACK_IMPORTED_MODULE_16__["DialogAddClassDialog"],
                _dialog_addpermission_addpremission_dialog__WEBPACK_IMPORTED_MODULE_14__["DialogAddPermissionDialog"],
                _dialog_addtimetable_timetable_dialog__WEBPACK_IMPORTED_MODULE_27__["DialogTimeTableDialog"],
                _dialog_addresult_result_dialog__WEBPACK_IMPORTED_MODULE_28__["DialogResultDialog"],
                _dialog_addprincipal_addprincipal_dialog__WEBPACK_IMPORTED_MODULE_29__["DialogAddPricipalDialog"],
                _dialog_logoutconfirm_logout_dialog__WEBPACK_IMPORTED_MODULE_30__["DialogLogoutConfirmDialog"],
                _components_permission_permission_component__WEBPACK_IMPORTED_MODULE_13__["PermissionComponent"]],
            imports: [_app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _material_module__WEBPACK_IMPORTED_MODULE_11__["DemoMaterialModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_24__["FlexLayoutModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
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

module.exports = __webpack_require__(/*! C:\Users\INFI\Documents\adminpage\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map