(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
        /***/ "./$$_lazy_route_resource lazy recursive": 
        /*!******************************************************!*\
          !*** ./$$_lazy_route_resource lazy namespace object ***!
          \******************************************************/
        /*! no static exports found */
        /***/ (function (module, exports) {
            function webpackEmptyAsyncContext(req) {
                // Here Promise.resolve().then() is used instead of new Promise() to prevent
                // uncaught exception popping up in devtools
                return Promise.resolve().then(function () {
                    var e = new Error("Cannot find module '" + req + "'");
                    e.code = 'MODULE_NOT_FOUND';
                    throw e;
                });
            }
            webpackEmptyAsyncContext.keys = function () { return []; };
            webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
            module.exports = webpackEmptyAsyncContext;
            webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-component/app.component.html": 
        /*!****************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app-component/app.component.html ***!
          \****************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='block' style=\"justify-content: space-around;\">\r\n    <mat-nav-list>\r\n        <a mat-list-item routerLinkActive=\"active\" routerLink=\"/home\" class=\"btn btn-primary\"\r\n            style=\"float: left; width: 20%;\">\r\n            HOME\r\n        </a>\r\n        <button mat-raised-button (click)=\"login()\" class=\"btn btn-primary\" style=\"width: 20%; float:right\"\r\n            *ngIf=\"loged==false\">Login</button>\r\n        <button mat-raised-button (click)=\"logout()\" class=\"btn btn-primary\" style=\"width: 20%; float : right\"\r\n            *ngIf=\"loged==true\">Logout</button>\r\n        <a mat-list-item routerLinkActive=\"active\" routerLink=\"/admin\" class=\"btn btn-primary\" *ngIf=\"loged==true\"\r\n            style=\"float: left; width: 20%;\">\r\n            ADMIN\r\n        </a>\r\n    </mat-nav-list>\r\n</div>\r\n<router-outlet></router-outlet>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-player/add-player.component.html": 
        /*!*******************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-player/add-player.component.html ***!
          \*******************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\r\n    <div class=\"images-holder\">\r\n        <img src=\"../../../assets/images/avatar.png\">\r\n    </div>\r\n\r\n\r\n    <form class='form-holder' [formGroup]=\"playerForm\" (ngSubmit)=\"commit()\">\r\n        <div> <small *ngIf=\"playerForm.invalid && playerForm.touched\" style=\"color: red; text-align: center;\"> All Field must be filled </small></div>\r\n        <div class=\"info-holder\">\r\n            <div class=\"form-group\">\r\n                <label>Player Name </label>\r\n                <input type=\"text\" formControlName=\"player\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter Player Name\">\r\n                <div class='alert alert-danger'  *ngIf=\"player.touched && !player.valid\" >\r\n                        <div *ngIf=\"player.invalid && player.dirty\">\r\n                                Player Name shouldn't have a number or special character \r\n                            <small>If numbermatics is needed then use Roman Number  ( Which would look much cooler )</small>\r\n                        </div>\r\n                        <div *ngIf=\"player.errors.required\"> Player Name is required</div>\r\n                        <div *ngIf=\"player.errors.minlength\"> Minium length should be more then 4 </div>  \r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"info-holder\">\r\n            <div class=\"form-group\">\r\n                <label>Rank </label>\r\n                <mat-form-field style=\"width: 100%;\">\r\n                    <mat-label>Rank List</mat-label>\r\n                    <mat-select  formControlName=\"rank\">\r\n                        <mat-option *ngFor=\"let rank of RankList\" [value]=\"rank\" (click)=\"select_rank(rank)\" >\r\n                            {{rank}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"info-holder\">\r\n            <div class=\"form-group\">\r\n                <label>Score </label>\r\n                <input type=\"text\" formControlName=\"score\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter Score\">\r\n                <div class='alert alert-danger' *ngIf=\"score.touched && !score.valid\">\r\n                    <div *ngIf=\"score.errors.required\"> player score shouldn't be blank</div>\r\n                    <div *ngIf=\"score.dirty && score.invalid\">Number Only</div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"info-holder\">\r\n            <div class=\"form-group\">\r\n                <label>Time </label>\r\n                <input type=\"text\" formControlName=\"time\" class=\"form-control\" aria-describedby=\"emailHelp\" placeholder=\"Enter Time\">\r\n                <div class='alert alert-danger' *ngIf=\"time.touched && !time.valid\">\r\n                    <div *ngIf=\"time.errors.required\"> There must a time for everything right ?</div>\r\n                    <div *ngIf=\"time.dirty && time.invalid\">No special character please</div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n\r\n        <div class=\"info-holder\">\r\n            <div class='form-group'>\r\n                <label>Favorite Game choice </label>\r\n                <mat-form-field style=\"width : 60% ; text-align: center; font: bold\">\r\n                    <mat-select placeholder=\"Favorite Game\" formControlName=\"favorite\">\r\n                        <mat-option *ngFor=\"let g of GameData\" [value]=\"g.title\" (click)=\"selected_game(g.title)\">\r\n                            {{g.title}}\r\n                        </mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n        </div>\r\n\r\n        <div class='button-holder'>\r\n            <button type=\"submit\" class=\"btn btn-primary\" style=\"margin-left: 2%;\" [disabled]=\"!playerForm.valid\">\r\n                ADD PLAYER\r\n            </button>\r\n            <a class=\"btn btn-danger\" role=\"button\" style=\"float: right; margin-right:2%; width: 30%;\"\r\n                (click)=\"cancel()\">Cancel</a>\r\n        </div>\r\n    </form>\r\n\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-screen/admin-screen.component.html": 
        /*!***********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-screen/admin-screen.component.html ***!
          \***********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<!-- AUTHENTHICATION  -->\r\n<div>\r\n    <!-- GAME LIST  -->\r\n    <button class=\"btn btn-secondary\" (click)=\"show_games()\" style=\"float: left; width: 20%; position: absolute;\"> GAME LIST</button>\r\n    <!-- ADD PLAYER BUTTON -->\r\n    <button class=\"btn btn-primary\" (click)=\"add()\" style=\"float: right; width: 20%;\"> Add new player</button>\r\n    <!-- FILTER -->\r\n    <mat-form-field style=\"width : 100%\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <div class=\"player-list\">\r\n        <mat-table [dataSource]=\"dataSource\" matSort>    \r\n            <!--  PLAYER NAME -->\r\n            <ng-container matColumnDef=\"player\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Player name </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"PLAYER\"> {{element.player}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--  RANK -->\r\n            <ng-container matColumnDef=\"rank\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Rank </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"RANK\"> {{element.rank}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--  SCORE -->\r\n            <ng-container matColumnDef=\"score\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Score </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"SCORE\"> {{element.score}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--  TIME SPENDED ON PLAYING -->\r\n            <ng-container matColumnDef=\"time\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Time played </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"TIME\"> {{element.time}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"game_history\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Game History List </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element ; let i=index;\" data-label=\"GAME HISTORY\" >     \r\n                    <mat-form-field>\r\n                        <mat-label>Click to show</mat-label>\r\n                        <mat-select  (click)=\"test(i)\" >\r\n                            <mat-option *ngFor=\"let game of GamePlayed\" >\r\n                                {{game}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                      <!--  get the index of each game by let i=index -->\r\n                    </mat-cell>\r\n            </ng-container>\r\n\r\n\r\n             <!--  FAVORITE  -->\r\n             <ng-container matColumnDef=\"favorite\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Favorite Game </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"FAVORITE\"> {{element.favorite}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!--  STATUS -->\r\n            <ng-container matColumnDef=\"status\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"STATUS\"> {{element.status | uppercase}} </mat-cell>\r\n            </ng-container>\r\n\r\n            \r\n            <!-- UPDATE -->\r\n            <ng-container matColumnDef=\"update\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> UPDATE </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"UPDATE\">\r\n                    <button class=\"btn btn-info\" (click)=\"update(element._id )\"> UPDATE </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n            <!-- DELETE -->\r\n            <ng-container matColumnDef=\"delete\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> DELETE </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element; let i = index;\" data-label=\"DELETE\" (click)=\"delete(i,element)\">\r\n                    <button class=\"btn btn-info\"> DELETE </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n\r\n\r\n\r\n            <!-- GET DATA AND PUT INTO COLUMNS -->\r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n\r\n        <!-- PAGINATION -->\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-player/edit-player.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-player/edit-player.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\r\n        <div class=\"images-holder\">\r\n            <img src=\"../../../assets/images/avatar.png\">\r\n        </div>\r\n    \r\n    \r\n        <form class='form-holder' [formGroup]=\"playerForm\" (ngSubmit)=\"commit()\">\r\n            <div class=\"info-holder\">\r\n                <div class=\"form-group\">\r\n                    <label>Player Name </label>\r\n                    <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" formControlName=\"player\">\r\n                    <div class='alert alert-danger' *ngIf=\"player.touched && !player.valid\">\r\n                        <div *ngIf=\"player.errors.required\"> player shouldn't be blank</div>\r\n                        <div *ngIf=\"player.dirty && player.invalid\">player must not have special character aside from \" _ \" and \" - \"</div>\r\n                        <div *ngIf=\"player.errors.minlength\"> Minium length should be more then 4</div>\r\n                    </div>\r\n                </div>\r\n    \r\n            </div>\r\n    \r\n            <div class=\"info-holder\">\r\n                <div class=\"form-group\">\r\n                    <label>Rank </label>\r\n                    <mat-form-field style=\"width : 100% ; text-align: center; font: bold\">\r\n                        <mat-select [placeholder]=\"rank\" formControlName=\"rank\">\r\n                            <mat-option *ngFor=\"let r of rank_setting\" [value]=\"r\">\r\n                                {{r}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"info-holder\">\r\n                <div class=\"form-group\">\r\n                    <label>Score </label>\r\n                    <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\"  formControlName=\"score\">\r\n                    <div class='alert alert-danger' *ngIf=\"score.touched && !score.valid\">\r\n                        <div *ngIf=\"score.errors.required\"> player score shouldn't be blank</div>\r\n                        <div *ngIf=\"score.dirty && score.invalid\">Number Only</div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n    \r\n            <div class=\"info-holder\">\r\n                <div class=\"form-group\">\r\n                    <label>Time </label>\r\n                    <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\"  formControlName=\"time\">\r\n                    <div class='alert alert-danger' *ngIf=\"time.touched && !time.valid\">\r\n                        <div *ngIf=\"time.errors.required\"> There must a time for everything right ?</div>\r\n                        <div *ngIf=\"time.dirty && time.invalid\">No special character please</div>\r\n                    </div>\r\n                </div>\r\n    \r\n            </div>\r\n    \r\n    \r\n            <div class=\"info-holder\">\r\n                <div class='form-group'>\r\n                    <label>Favorite Game choice </label>\r\n                    <mat-form-field style=\"width : 100% ; text-align: center; font: bold\">\r\n                        <mat-select [placeholder]=\"favorite\" formControlName=\"favorite\">\r\n                            <mat-option *ngFor=\"let g of game\" [value]=\"g.title\" >\r\n                                {{g.title}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n    \r\n    \r\n            <div class=\"info-holder\">\r\n                <div class='form-group'>\r\n                    <label>Status </label>\r\n                    <mat-form-field style=\"width : 100% ; text-align: center; font: bold\">\r\n                        <mat-select [placeholder]=\"status\" formControlName=\"status\">\r\n                            <mat-option *ngFor=\"let a of avaliable\" [value]=\"a\" >\r\n                                {{a}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n    \r\n    \r\n            <div class='button-holder'>\r\n                <button class=\"btn btn-primary\" style=\"margin-left: 2%;\" [disabled]=\"!playerForm.valid\">\r\n                    EDDIT PLAYER\r\n                </button>\r\n                <a class=\"btn btn-danger\" role=\"button\" style=\"float: right; margin-right:2%; width: 30%;\"\r\n                    (click)=\"cancel()\">Cancel</a>\r\n            </div>\r\n        </form>\r\n    \r\n    </div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-list/game-list.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-list/game-list.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div >\r\n\r\n    \r\n    <!-- FILTER -->\r\n    <mat-form-field style=\"width : 100%\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n\r\n    <!-- NG IF TO CHANGE ELEMENT TO ADMIN ELEMENT -->\r\n    <div class=\"game-list\">\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"title\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Game Title </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"TITLE\"> {{element.title}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"platform\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Platform </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"platform\"> {{element.platform}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"genre\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Genre </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"GENRE\"> {{element.genre}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"rating\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Rating </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"RATING\"> {{element.rating}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"publisher\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Publisher </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"PUBLISHER\"> {{element.publisher}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"release\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Release date </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"RELEASE\"> {{element.release}} </mat-cell>\r\n            </ng-container>\r\n            <ng-container matColumnDef=\"status\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"STATUS\"> {{element.status}} </mat-cell>\r\n            </ng-container>\r\n            \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/join-game/join-game.component.html": 
        /*!*****************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/join-game/join-game.component.html ***!
          \*****************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\r\n    <div class=\"images-holder\">\r\n        <img src=\"../../../assets/images/avatar.png\">\r\n    </div>\r\n\r\n      \r\n    <form class='form-holder' [formGroup]=\"playerForm\" (ngSubmit)=\"join_game()\" >\r\n\r\n        <!-- PLAYER NAME -->\r\n        <div class=\"info-holder\">\r\n            <div class=\"form-group\">\r\n                <label>Player Name </label>\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" formControlName=\"player_name\" [readonly]='true'>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- RANK -->\r\n        <div class=\"info-holder\"> \r\n            <div class=\"form-group\">\r\n                <label>Rank :  </label>\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" formControlName=\"rank\" [readonly]='true'>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- SCORE -->\r\n        <div class=\"info-holder\"> \r\n            <div class=\"form-group\">\r\n                <label>Score :  </label>\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" formControlName=\"score\" [readonly]='true' >\r\n            </div>\r\n        </div>\r\n\r\n        <!-- TIME PLAYED -->\r\n        <div class=\"info-holder\">\r\n            <div class=\"form-group\">\r\n                <label>Time Played </label>\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" formControlName=\"time\" [readonly]='true'>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- FAVORITE GAME -->\r\n        <div class=\"info-holder\"> \r\n            <div class=\"form-group\">\r\n                <label>Favorite Game </label>\r\n                <input type=\"text\" class=\"form-control\" aria-describedby=\"emailHelp\" formControlName=\"favorite\" [readonly]='true'>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- CUSTOMER PERFERED GAME -->\r\n        <div class=\"info-holder\"> \r\n            <label>Customer : </label>\r\n            <mat-form-field style=\"width : 60% ; text-align: center; font: bold\" >\r\n                    <mat-select placeholder=\"Choose your game\"  >\r\n                      <mat-option  *ngFor=\"let g of game\" [value]=\"g.title\"   (click)=\"selected_game(g.title)\">{{g.title}}</mat-option>\r\n                    </mat-select>\r\n                    <div *ngIf=\"game_choice == false\"> Please enter your perfered game</div>\r\n            </mat-form-field>\r\n        </div>\r\n\r\n        \r\n        <div class = 'button-holder'>\r\n\r\n            <!-- JOIN BUTTON -->\r\n            <button class=\"btn btn-primary\" type='submit' style=\"margin-left: 2%;\" [disabled]=\"game_choice == false || game_choice == null\" >\r\n                JOIN GAME\r\n            </button>\r\n\r\n            <!-- CANCEL BUTTON -->\r\n            <a class=\"btn btn-danger\"  role=\"button\" style=\"float: right; margin-right:2%; width: 30%;\" (click)=\"cancel()\">Cancel</a>\r\n        </div>\r\n    </form>\r\n    \r\n</div>\r\n\r\n");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html": 
        /*!*********************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html ***!
          \*********************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div class='container'>\r\n  <h1> Login </h1>\r\n  <form (ngSubmit)=\"onSubmit()\" [formGroup]=\"loginForm\">\r\n    <div class=\"form-group\">\r\n      <label> Username </label>\r\n      <input type=\"text\" class=\"form-control\" formControlName='username'>\r\n      <div class='alert alert-danger' *ngIf=\"username.touched && !username.valid\">\r\n          <div *ngIf=\"username.errors.required\"> Username shouldn't be blank</div>\r\n          <div *ngIf=\"username.dirty && username.invalid\">Username must not have special character aside from \" _ \" and \" - \"</div>\r\n          <div *ngIf=\"username.errors.minlength\"> Minium length should be more then 8</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label> password </label>\r\n      <input type=\"password\" class=\"form-control\" formControlName='password'>\r\n      <div class='alert alert-danger'  *ngIf=\"password.touched && !password.valid\" >\r\n          <div *ngIf=\"password.invalid && password.dirty\"> Minimum eight characters, at least one letter, one number and one special character</div>\r\n          <div *ngIf=\"password.errors.required\"> Password shouldn't be blank</div>\r\n          <div *ngIf=\"password.errors.minlength\"> Minium length should be more then 8 </div>  \r\n      </div>\r\n    </div>\r\n    <button type=\"submit\" class=\"btn btn-success\"  [disabled]=\"!loginForm.valid\">Submit</button>\r\n  </form>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-list/player-list.component.html": 
        /*!*********************************************************************************************************!*\
          !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-list/player-list.component.html ***!
          \*********************************************************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("<div >\r\n    <!-- FILTER -->\r\n    <mat-form-field style=\"width : 100%\">\r\n        <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Filter\">\r\n    </mat-form-field>\r\n    <!-- NG IF TO CHANGE ELEMENT TO ADMIN ELEMENT -->\r\n    <div class=\"player-list\">\r\n        <mat-table [dataSource]=\"dataSource\" matSort>\r\n\r\n            <ng-container matColumnDef=\"player\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Player name </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"PLAYER\"> {{element.player}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"rank\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Rank </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"RANK\"> {{element.rank}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"score\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Score </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"SCORE\"> {{element.score}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"time\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Time played </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"TIME\"> {{element.time}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"game_history\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Game History List </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element ; let i=index;\" data-label=\"GAME HISTORY\" >     \r\n                    <mat-form-field>\r\n                        <mat-label>Click to show</mat-label>\r\n                        <mat-select  (click)=\"test(i)\" >\r\n                            <mat-option *ngFor=\"let game of GamePlayed\" >\r\n                                {{game}}\r\n                            </mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                      <!--  get the index of each game by let i=index -->\r\n                    </mat-cell>\r\n            </ng-container>\r\n\r\n                <!--  TESTING -->\r\n            \r\n\r\n\r\n               <!--  FAVORITE  -->\r\n               <ng-container matColumnDef=\"favorite\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Favorite Game </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"FAVORITE\"> {{element.favorite}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <ng-container matColumnDef=\"status\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header> Status </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"STATUS\"> {{element.status | uppercase}} </mat-cell>\r\n            </ng-container>\r\n\r\n            <!-- JOIN  -->\r\n            <ng-container matColumnDef=\"joinable\">\r\n                <mat-header-cell *matHeaderCellDef mat-sort-header style=\"float: right;\"> JOIN </mat-header-cell>\r\n                <mat-cell *matCellDef=\"let element\" data-label=\"JOIN\">\r\n                    <button class=\"btn btn-info\" [hidden]=\"avaliable_checker(element.status) == false\"\r\n                        (click)=\"join_game(element._id , element.status , element.joinable)\">\r\n                        {{element.joinable | uppercase}}\r\n                    </button>\r\n                </mat-cell>\r\n            </ng-container>\r\n           \r\n\r\n            \r\n            <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n            <mat-row *matRowDef=\"let row; columns: displayedColumns;\"></mat-row>\r\n        </mat-table>\r\n        <mat-paginator [pageSizeOptions]=\"[5, 10]\" showFirstLastButtons></mat-paginator>\r\n    </div>\r\n</div>");
            /***/ 
        }),
        /***/ "./node_modules/tslib/tslib.es6.js": 
        /*!*****************************************!*\
          !*** ./node_modules/tslib/tslib.es6.js ***!
          \*****************************************/
        /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function () { return __extends; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function () { return __assign; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function () { return __rest; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function () { return __decorate; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function () { return __param; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function () { return __metadata; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function () { return __awaiter; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function () { return __generator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function () { return __exportStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function () { return __values; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function () { return __read; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function () { return __spread; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () { return __spreadArrays; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function () { return __await; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () { return __asyncGenerator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () { return __asyncDelegator; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function () { return __asyncValues; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () { return __makeTemplateObject; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function () { return __importStar; });
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function () { return __importDefault; });
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
            var extendStatics = function (d, b) {
                extendStatics = Object.setPrototypeOf ||
                    ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
                    function (d, b) { for (var p in b)
                        if (b.hasOwnProperty(p))
                            d[p] = b[p]; };
                return extendStatics(d, b);
            };
            function __extends(d, b) {
                extendStatics(d, b);
                function __() { this.constructor = d; }
                d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
            }
            var __assign = function () {
                __assign = Object.assign || function __assign(t) {
                    for (var s, i = 1, n = arguments.length; i < n; i++) {
                        s = arguments[i];
                        for (var p in s)
                            if (Object.prototype.hasOwnProperty.call(s, p))
                                t[p] = s[p];
                    }
                    return t;
                };
                return __assign.apply(this, arguments);
            };
            function __rest(s, e) {
                var t = {};
                for (var p in s)
                    if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
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
                if (typeof Reflect === "object" && typeof Reflect.decorate === "function")
                    r = Reflect.decorate(decorators, target, key, desc);
                else
                    for (var i = decorators.length - 1; i >= 0; i--)
                        if (d = decorators[i])
                            r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
                return c > 3 && r && Object.defineProperty(target, key, r), r;
            }
            function __param(paramIndex, decorator) {
                return function (target, key) { decorator(target, key, paramIndex); };
            }
            function __metadata(metadataKey, metadataValue) {
                if (typeof Reflect === "object" && typeof Reflect.metadata === "function")
                    return Reflect.metadata(metadataKey, metadataValue);
            }
            function __awaiter(thisArg, _arguments, P, generator) {
                return new (P || (P = Promise))(function (resolve, reject) {
                    function fulfilled(value) { try {
                        step(generator.next(value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function rejected(value) { try {
                        step(generator["throw"](value));
                    }
                    catch (e) {
                        reject(e);
                    } }
                    function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
                    step((generator = generator.apply(thisArg, _arguments || [])).next());
                });
            }
            function __generator(thisArg, body) {
                var _ = { label: 0, sent: function () { if (t[0] & 1)
                        throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
                return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function () { return this; }), g;
                function verb(n) { return function (v) { return step([n, v]); }; }
                function step(op) {
                    if (f)
                        throw new TypeError("Generator is already executing.");
                    while (_)
                        try {
                            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done)
                                return t;
                            if (y = 0, t)
                                op = [op[0] & 2, t.value];
                            switch (op[0]) {
                                case 0:
                                case 1:
                                    t = op;
                                    break;
                                case 4:
                                    _.label++;
                                    return { value: op[1], done: false };
                                case 5:
                                    _.label++;
                                    y = op[1];
                                    op = [0];
                                    continue;
                                case 7:
                                    op = _.ops.pop();
                                    _.trys.pop();
                                    continue;
                                default:
                                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                                        _ = 0;
                                        continue;
                                    }
                                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                                        _.label = op[1];
                                        break;
                                    }
                                    if (op[0] === 6 && _.label < t[1]) {
                                        _.label = t[1];
                                        t = op;
                                        break;
                                    }
                                    if (t && _.label < t[2]) {
                                        _.label = t[2];
                                        _.ops.push(op);
                                        break;
                                    }
                                    if (t[2])
                                        _.ops.pop();
                                    _.trys.pop();
                                    continue;
                            }
                            op = body.call(thisArg, _);
                        }
                        catch (e) {
                            op = [6, e];
                            y = 0;
                        }
                        finally {
                            f = t = 0;
                        }
                    if (op[0] & 5)
                        throw op[1];
                    return { value: op[0] ? op[1] : void 0, done: true };
                }
            }
            function __exportStar(m, exports) {
                for (var p in m)
                    if (!exports.hasOwnProperty(p))
                        exports[p] = m[p];
            }
            function __values(o) {
                var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
                if (m)
                    return m.call(o);
                return {
                    next: function () {
                        if (o && i >= o.length)
                            o = void 0;
                        return { value: o && o[i++], done: !o };
                    }
                };
            }
            function __read(o, n) {
                var m = typeof Symbol === "function" && o[Symbol.iterator];
                if (!m)
                    return o;
                var i = m.call(o), r, ar = [], e;
                try {
                    while ((n === void 0 || n-- > 0) && !(r = i.next()).done)
                        ar.push(r.value);
                }
                catch (error) {
                    e = { error: error };
                }
                finally {
                    try {
                        if (r && !r.done && (m = i["return"]))
                            m.call(i);
                    }
                    finally {
                        if (e)
                            throw e.error;
                    }
                }
                return ar;
            }
            function __spread() {
                for (var ar = [], i = 0; i < arguments.length; i++)
                    ar = ar.concat(__read(arguments[i]));
                return ar;
            }
            function __spreadArrays() {
                for (var s = 0, i = 0, il = arguments.length; i < il; i++)
                    s += arguments[i].length;
                for (var r = Array(s), k = 0, i = 0; i < il; i++)
                    for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                        r[k] = a[j];
                return r;
            }
            ;
            function __await(v) {
                return this instanceof __await ? (this.v = v, this) : new __await(v);
            }
            function __asyncGenerator(thisArg, _arguments, generator) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var g = generator.apply(thisArg, _arguments || []), i, q = [];
                return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
                function verb(n) { if (g[n])
                    i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
                function resume(n, v) { try {
                    step(g[n](v));
                }
                catch (e) {
                    settle(q[0][3], e);
                } }
                function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
                function fulfill(value) { resume("next", value); }
                function reject(value) { resume("throw", value); }
                function settle(f, v) { if (f(v), q.shift(), q.length)
                    resume(q[0][0], q[0][1]); }
            }
            function __asyncDelegator(o) {
                var i, p;
                return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
                function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
            }
            function __asyncValues(o) {
                if (!Symbol.asyncIterator)
                    throw new TypeError("Symbol.asyncIterator is not defined.");
                var m = o[Symbol.asyncIterator], i;
                return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
                function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
                function settle(resolve, reject, d, v) { Promise.resolve(v).then(function (v) { resolve({ value: v, done: d }); }, reject); }
            }
            function __makeTemplateObject(cooked, raw) {
                if (Object.defineProperty) {
                    Object.defineProperty(cooked, "raw", { value: raw });
                }
                else {
                    cooked.raw = raw;
                }
                return cooked;
            }
            ;
            function __importStar(mod) {
                if (mod && mod.__esModule)
                    return mod;
                var result = {};
                if (mod != null)
                    for (var k in mod)
                        if (Object.hasOwnProperty.call(mod, k))
                            result[k] = mod[k];
                result.default = mod;
                return result;
            }
            function __importDefault(mod) {
                return (mod && mod.__esModule) ? mod : { default: mod };
            }
            /***/ 
        }),
        /***/ "./src/app/app-component/app.component.css": 
        /*!*************************************************!*\
          !*** ./src/app/app-component/app.component.css ***!
          \*************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\n.wide-button{\r\n    width: 30%;\r\n    margin-top:7px;\r\n    margin-left : 30%;\r\n    \r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLWNvbXBvbmVudC9hcHAuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0E7SUFDSSxVQUFVO0lBQ1YsY0FBYztJQUNkLGlCQUFpQjs7QUFFckIiLCJmaWxlIjoic3JjL2FwcC9hcHAtY29tcG9uZW50L2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi53aWRlLWJ1dHRvbntcclxuICAgIHdpZHRoOiAzMCU7XHJcbiAgICBtYXJnaW4tdG9wOjdweDtcclxuICAgIG1hcmdpbi1sZWZ0IDogMzAlO1xyXG4gICAgXHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/app-component/app.component.ts": 
        /*!************************************************!*\
          !*** ./src/app/app-component/app.component.ts ***!
          \************************************************/
        /*! exports provided: AppComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function () { return AppComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var AppComponent = /** @class */ (function () {
                function AppComponent(dialog, share, router) {
                    this.dialog = dialog;
                    this.share = share;
                    this.router = router;
                    this.loged = this.share.loged;
                    this.title = 'front-end';
                    console.log("Username : ThanhQuan123  Password : WhoisJoe?1 ");
                }
                AppComponent.prototype.login = function () {
                    var _this = this;
                    this.dialog.open(_components_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], { width: '500px', height: '450px' }).afterClosed().subscribe(function () {
                        if (_this.share.loged == true) {
                            _this.loged = true;
                        }
                        else {
                            console.log("Wrong password or username");
                        }
                    });
                };
                AppComponent.prototype.logout = function () {
                    this.share.loged == false;
                    this.loged = false;
                    this.router.navigateByUrl("");
                };
                return AppComponent;
            }());
            AppComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"] },
                { type: _services_share_service__WEBPACK_IMPORTED_MODULE_4__["ShareService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-root',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app-component/app.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app-component/app.component.css")).default]
                })
            ], AppComponent);
            /***/ 
        }),
        /***/ "./src/app/app-routing.module.ts": 
        /*!***************************************!*\
          !*** ./src/app/app-routing.module.ts ***!
          \***************************************/
        /*! exports provided: AppRoutingModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () { return AppRoutingModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _components_admin_screen_admin_screen_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/admin-screen/admin-screen.component */ "./src/app/components/admin-screen/admin-screen.component.ts");
            /* harmony import */ var _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/player-list/player-list.component */ "./src/app/components/player-list/player-list.component.ts");
            /* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
            var routes = [
                { path: '', pathMatch: 'full', redirectTo: 'home' },
                { path: 'home', component: _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_4__["PlayerListComponent"] },
                { path: 'admin', component: _components_admin_screen_admin_screen_component__WEBPACK_IMPORTED_MODULE_3__["AdminScreenComponent"], canActivate: [_guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_5__["AuthGuard"]] }
                // { path: '**', component: PageNotFoundComponent }
            ];
            var AppRoutingModule = /** @class */ (function () {
                function AppRoutingModule() {
                }
                return AppRoutingModule;
            }());
            AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
                    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
                    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
                })
            ], AppRoutingModule);
            /***/ 
        }),
        /***/ "./src/app/app.module.ts": 
        /*!*******************************!*\
          !*** ./src/app/app.module.ts ***!
          \*******************************/
        /*! exports provided: AppModule */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function () { return AppModule; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
            /* harmony import */ var _app_component_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app-component/app.component */ "./src/app/app-component/app.component.ts");
            /* harmony import */ var _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/player-list/player-list.component */ "./src/app/components/player-list/player-list.component.ts");
            /* harmony import */ var _components_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/join-game/join-game.component */ "./src/app/components/join-game/join-game.component.ts");
            /* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
            /* harmony import */ var _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/game-list/game-list.component */ "./src/app/components/game-list/game-list.component.ts");
            /* harmony import */ var _components_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/add-player/add-player.component */ "./src/app/components/add-player/add-player.component.ts");
            /* harmony import */ var _components_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/edit-player/edit-player.component */ "./src/app/components/edit-player/edit-player.component.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/player.service */ "./src/app/services/player.service.ts");
            /* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/share.service */ "./src/app/services/share.service.ts");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _components_admin_screen_admin_screen_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/admin-screen/admin-screen.component */ "./src/app/components/admin-screen/admin-screen.component.ts");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            /* harmony import */ var _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./guards/auth-guard.service */ "./src/app/guards/auth-guard.service.ts");
            var AppModule = /** @class */ (function () {
                function AppModule() {
                }
                return AppModule;
            }());
            AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
                    declarations: [
                        _app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                        _components_player_list_player_list_component__WEBPACK_IMPORTED_MODULE_5__["PlayerListComponent"],
                        _components_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_6__["JoinGameComponent"],
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_8__["GameListComponent"],
                        _components_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_9__["AddPlayerComponent"],
                        _components_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_10__["EditPlayerComponent"],
                        _components_admin_screen_admin_screen_component__WEBPACK_IMPORTED_MODULE_17__["AdminScreenComponent"]
                    ],
                    imports: [
                        _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                        _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatDialogModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["FormsModule"],
                        _angular_forms__WEBPACK_IMPORTED_MODULE_11__["ReactiveFormsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTabsModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatTableModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatPaginatorModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatSelectModule"],
                        _angular_material__WEBPACK_IMPORTED_MODULE_13__["MatInputModule"],
                        _angular_common_http__WEBPACK_IMPORTED_MODULE_18__["HttpClientModule"],
                    ],
                    entryComponents: [
                        //modal components
                        _components_login_login_component__WEBPACK_IMPORTED_MODULE_7__["LoginComponent"],
                        _components_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_6__["JoinGameComponent"],
                        _components_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_9__["AddPlayerComponent"],
                        _components_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_10__["EditPlayerComponent"],
                        _components_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_8__["GameListComponent"]
                    ],
                    //service provider
                    providers: [_services_player_service__WEBPACK_IMPORTED_MODULE_14__["PlayerService"], _services_share_service__WEBPACK_IMPORTED_MODULE_15__["ShareService"], _services_game_service__WEBPACK_IMPORTED_MODULE_16__["GameService"], _guards_auth_guard_service__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
                    bootstrap: [_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
                    schemas: [_angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"]]
                })
            ], AppModule);
            /***/ 
        }),
        /***/ "./src/app/components/add-player/add-player.component.css": 
        /*!****************************************************************!*\
          !*** ./src/app/components/add-player/add-player.component.css ***!
          \****************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-dirty.ng-valid {\r\n    border-left:5px solid green\r\n  }\r\n  input.ng-touched.ng-invalid\r\n  {\r\n    border-left:5px solid #a94442\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZGQtcGxheWVyL2FkZC1wbGF5ZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJO0VBQ0Y7RUFDQTs7SUFFRTtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZGQtcGxheWVyL2FkZC1wbGF5ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImlucHV0Lm5nLWRpcnR5Lm5nLXZhbGlkIHtcclxuICAgIGJvcmRlci1sZWZ0OjVweCBzb2xpZCBncmVlblxyXG4gIH1cclxuICBpbnB1dC5uZy10b3VjaGVkLm5nLWludmFsaWRcclxuICB7XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgI2E5NDQ0MlxyXG4gIH1cclxuICBcclxuICAiXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/add-player/add-player.component.ts": 
        /*!***************************************************************!*\
          !*** ./src/app/components/add-player/add-player.component.ts ***!
          \***************************************************************/
        /*! exports provided: AddPlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPlayerComponent", function () { return AddPlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
            /* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var AddPlayerComponent = /** @class */ (function () {
                function AddPlayerComponent(data, fb, player_service, game_service, dialogRef, share) {
                    this.data = data;
                    this.fb = fb;
                    this.player_service = player_service;
                    this.game_service = game_service;
                    this.dialogRef = dialogRef;
                    this.share = share;
                    this.GameData = [];
                    //selected game perfered
                    this.game_perfered = "";
                }
                AddPlayerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.game_service.getGames().subscribe(function (res) {
                        _this.GameData = res;
                        console.log(_this.GameData);
                    });
                    this.RankList = this.share.RankList;
                    this.avaliable = ["avaliable", "unavaliable"];
                    this.playerForm = this.fb.group({
                        player: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[A-Za-z]+(?:[ ][A-Za-z]+)*$/)]],
                        rank: ["", _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
                        score: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].maxLength(20), _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
                        time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].pattern(/^[A-Za-z0-9]+(?:[ ][A-Za-z0-9]+)*$/)]],
                        favorite: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        status: ["avaliable", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
                        joinable: ["join game", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]]
                    });
                };
                Object.defineProperty(AddPlayerComponent.prototype, "player", {
                    get: function () {
                        return this.playerForm.get("player");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddPlayerComponent.prototype, "score", {
                    get: function () {
                        return this.playerForm.get("score");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(AddPlayerComponent.prototype, "time", {
                    get: function () {
                        return this.playerForm.get("time");
                    },
                    enumerable: true,
                    configurable: true
                });
                AddPlayerComponent.prototype.selected_game = function (title) {
                    console.log("You have selected " + title + " as your perfered game to play");
                    this.game_perfered = title;
                };
                // COMMIT TO ADDING A NEW PLAYER
                AddPlayerComponent.prototype.commit = function () {
                    this.player_service.AddPlayer(this.playerForm.value).subscribe(function () {
                        console.log("ADDED A NEW PLAYER TO THE LOBBY");
                    });
                    console.log("Added new player");
                    this.dialogRef.close();
                };
                AddPlayerComponent.prototype.cancel = function () {
                    this.dialogRef.close();
                };
                AddPlayerComponent.prototype.select_rank = function (i) {
                    console.log(i);
                    this.index = i;
                };
                AddPlayerComponent.prototype.select_avaliable = function (status) {
                    console.log(status);
                };
                return AddPlayerComponent;
            }());
            AddPlayerComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"] },
                { type: _services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] },
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _services_share_service__WEBPACK_IMPORTED_MODULE_5__["ShareService"] }
            ]; };
            AddPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-add-player",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/add-player/add-player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-player.component.css */ "./src/app/components/add-player/add-player.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], AddPlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/admin-screen/admin-screen.component.css": 
        /*!********************************************************************!*\
          !*** ./src/app/components/admin-screen/admin-screen.component.css ***!
          \********************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\nbody {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;\r\n    \r\n}\r\n@media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n    .mat-table .mat-header-cell {\r\n      \r\n      border: 10px solid;\r\n      clip: rect(0 0 0 0);\r\n      height: 1px;\r\n      margin: -1px;\r\n      padding: 0;\r\n      position: absolute;\r\n      width: 1px;\r\n    }\r\n    \r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      font-weight: bold;\r\n      height:30px;\r\n      margin-left: 7%;\r\n      margin-bottom: 4%;\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      \r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1zY3JlZW4vYWRtaW4tc2NyZWVuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksNkNBQTZDO0lBQzdDLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJO01BQ0UsU0FBUztNQUNUO0lBQ0Y7O0lBRUE7TUFDRSxjQUFjO0lBQ2hCOztJQUVBOztNQUVFLGtCQUFrQjtNQUNsQixtQkFBbUI7TUFDbkIsV0FBVztNQUNYLFlBQVk7TUFDWixVQUFVO01BQ1Ysa0JBQWtCO01BQ2xCLFVBQVU7SUFDWjs7SUFFQTtNQUNFLDZCQUE2QjtNQUM3QixjQUFjO0lBQ2hCO0lBQ0E7OztLQUdDO0lBQ0Q7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztNQUNkLGNBQWM7TUFDZCxpQkFBaUI7TUFDakIsaUJBQWlCO01BQ2pCLFdBQVc7TUFDWCxlQUFlO01BQ2YsaUJBQWlCO0lBQ25CO0lBQ0E7TUFDRTs7O09BR0M7TUFDRCx5QkFBeUI7TUFDekIsV0FBVzs7TUFFWCx5QkFBeUI7TUFDekIsbUJBQW1COztNQUVuQixnQkFBZ0I7SUFDbEI7SUFDQTtNQUNFLGdCQUFnQjtJQUNsQjtNQUNFO01BQ0EsY0FBYztJQUNoQjtFQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9hZG1pbi1zY3JlZW4vYWRtaW4tc2NyZWVuLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuYm9keSB7XHJcbiAgICBmb250LWZhbWlseTogJ0NvdmVyZWQgQnkgWW91ciBHcmFjZScsIGN1cnNpdmU7XHJcbiAgICBsaW5lLWhlaWdodDogMS4yNTtcclxuICAgIFxyXG59XHJcbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDk2MHB4KSB7XHJcbiAgICAubWF0LXRhYmxlIHtcclxuICAgICAgYm9yZGVyOiAwO1xyXG4gICAgICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlXHJcbiAgICB9XHJcbiAgXHJcbiAgICAubWF0LXRhYmxlIGNhcHRpb24ge1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgIH1cclxuICAgIFxyXG4gICAgLm1hdC10YWJsZSAubWF0LWhlYWRlci1jZWxsIHtcclxuICAgICAgXHJcbiAgICAgIGJvcmRlcjogMTBweCBzb2xpZDtcclxuICAgICAgY2xpcDogcmVjdCgwIDAgMCAwKTtcclxuICAgICAgaGVpZ2h0OiAxcHg7XHJcbiAgICAgIG1hcmdpbjogLTFweDtcclxuICAgICAgcGFkZGluZzogMDtcclxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgICB3aWR0aDogMXB4O1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93IHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogNXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgfVxyXG4gICAgLypcclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3c6bnRoLWNoaWxkKGV2ZW4pIHtiYWNrZ3JvdW5kOiAjQ0NDfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQob2RkKSB7YmFja2dyb3VuZDogI0ZGRn1cclxuICAgICovXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZGRkO1xyXG4gICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgZm9udC1zaXplOiAxZW07XHJcbiAgICAgIHRleHQtYWxpZ246IHJpZ2h0O1xyXG4gICAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgICAgaGVpZ2h0OjMwcHg7XHJcbiAgICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgICAgbWFyZ2luLWJvdHRvbTogNCU7XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpiZWZvcmUge1xyXG4gICAgICAvKlxyXG4gICAgICAqIGFyaWEtbGFiZWwgaGFzIG5vIGFkdmFudGFnZSwgaXQgd29uJ3QgYmUgcmVhZCBpbnNpZGUgYSB0YWJsZVxyXG4gICAgICBjb250ZW50OiBhdHRyKGFyaWEtbGFiZWwpO1xyXG4gICAgICAqL1xyXG4gICAgICBjb250ZW50OiBhdHRyKGRhdGEtbGFiZWwpO1xyXG4gICAgICBmbG9hdDogbGVmdDtcclxuICAgICAgXHJcbiAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBub3JtYWw7XHJcbiAgICAgIFxyXG4gICAgICBmb250LXNpemU6IC44NWVtO1xyXG4gICAgfVxyXG4gICAgLm1hdC10YWJsZSAubWF0LWNlbGw6bGFzdC1jaGlsZCB7XHJcbiAgICAgIGJvcmRlci1ib3R0b206IDA7XHJcbiAgICB9XHJcbiAgICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmZpcnN0LWNoaWxkIHtcclxuICAgICAgbWFyZ2luLXRvcDogNCU7XHJcbiAgICB9XHJcbiAgfSJdfQ== */");
            /***/ 
        }),
        /***/ "./src/app/components/admin-screen/admin-screen.component.ts": 
        /*!*******************************************************************!*\
          !*** ./src/app/components/admin-screen/admin-screen.component.ts ***!
          \*******************************************************************/
        /*! exports provided: AdminScreenComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AdminScreenComponent", function () { return AdminScreenComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/player.service */ "./src/app/services/player.service.ts");
            /* harmony import */ var _add_player_add_player_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../add-player/add-player.component */ "./src/app/components/add-player/add-player.component.ts");
            /* harmony import */ var _game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../game-list/game-list.component */ "./src/app/components/game-list/game-list.component.ts");
            /* harmony import */ var _edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../edit-player/edit-player.component */ "./src/app/components/edit-player/edit-player.component.ts");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var src_app_services_share_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/share.service */ "./src/app/services/share.service.ts");
            var AdminScreenComponent = /** @class */ (function () {
                function AdminScreenComponent(player_service, dialog, share) {
                    var _this = this;
                    this.player_service = player_service;
                    this.dialog = dialog;
                    this.share = share;
                    this.PlayerData = [];
                    this.GamePlayed = [];
                    this.player_data = this.player_service.getPlayers();
                    this.displayedColumns = [
                        "player",
                        "rank",
                        "score",
                        "time",
                        "game_history",
                        "favorite",
                        "status",
                        "update",
                        "delete"
                    ]; //space freaking sensitivie
                    this.player_service.getPlayers().subscribe(function (data) {
                        _this.PlayerData = data;
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.PlayerData);
                        setTimeout(function () {
                            _this.dataSource.paginator = _this.paginator;
                        }, 0);
                    });
                }
                AdminScreenComponent.prototype.ngOnInit = function () {
                    this.refresh();
                };
                //search function
                AdminScreenComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                //update a player information
                AdminScreenComponent.prototype.update = function (id, favorite, status) {
                    var _this = this;
                    this.dialog
                        .open(_edit_player_edit_player_component__WEBPACK_IMPORTED_MODULE_5__["EditPlayerComponent"], {
                        width: "600px",
                        height: "620px",
                        data: { id: id }
                    })
                        .afterClosed()
                        .subscribe(function () {
                        _this.refresh();
                    });
                };
                //deleting a player 
                AdminScreenComponent.prototype.delete = function (index, e) {
                    if (window.confirm("Are you sure")) {
                        this.player_service.DeletePlayer(e._id).subscribe();
                        this.dataSource.data.splice(index, 1);
                        this.dataSource._updateChangeSubscription();
                    }
                };
                //adding new player to the lobby
                AdminScreenComponent.prototype.add = function () {
                    var _this = this;
                    this.dialog
                        .open(_add_player_add_player_component__WEBPACK_IMPORTED_MODULE_3__["AddPlayerComponent"], { width: "500px", height: "520px" })
                        .afterClosed()
                        .subscribe(function () {
                        _this.refresh();
                    });
                };
                // LISTING THE GAME COMPONENT
                AdminScreenComponent.prototype.show_games = function () {
                    this.dialog.open(_game_list_game_list_component__WEBPACK_IMPORTED_MODULE_4__["GameListComponent"], { width: "800px", height: "520px" });
                };
                // getting data everytime this function is hit
                AdminScreenComponent.prototype.refresh = function () {
                    var _this = this;
                    this.player_service.getPlayers().subscribe(function (data) {
                        _this.PlayerData = data;
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_7__["MatTableDataSource"](_this.PlayerData);
                        setTimeout(function () {
                            _this.dataSource.paginator = _this.paginator;
                        }, 0);
                    });
                };
                AdminScreenComponent.prototype.test = function (i) {
                    this.GamePlayed = this.dataSource.data[i].game_history;
                    console.log(this.GamePlayed);
                };
                return AdminScreenComponent;
            }());
            AdminScreenComponent.ctorParameters = function () { return [
                { type: src_app_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"] },
                { type: src_app_services_share_service__WEBPACK_IMPORTED_MODULE_9__["ShareService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], AdminScreenComponent.prototype, "admin_authenthication", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"], { static: true })
            ], AdminScreenComponent.prototype, "paginator", void 0);
            AdminScreenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-admin-screen",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./admin-screen.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/admin-screen/admin-screen.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./admin-screen.component.css */ "./src/app/components/admin-screen/admin-screen.component.css")).default]
                })
            ], AdminScreenComponent);
            /***/ 
        }),
        /***/ "./src/app/components/edit-player/edit-player.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/edit-player/edit-player.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-dirty.ng-valid {\r\n    border-left:5px solid green\r\n  }\r\n  input.ng-touched.ng-invalid\r\n  {\r\n    border-left:5px solid #a94442\r\n  }\r\n  \r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lZGl0LXBsYXllci9lZGl0LXBsYXllci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0k7RUFDRjtFQUNBOztJQUVFO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2VkaXQtcGxheWVyL2VkaXQtcGxheWVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XHJcbiAgICBib3JkZXItbGVmdDo1cHggc29saWQgZ3JlZW5cclxuICB9XHJcbiAgaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkXHJcbiAge1xyXG4gICAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkICNhOTQ0NDJcclxuICB9XHJcbiAgXHJcbiAgIl19 */");
            /***/ 
        }),
        /***/ "./src/app/components/edit-player/edit-player.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/edit-player/edit-player.component.ts ***!
          \*****************************************************************/
        /*! exports provided: EditPlayerComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditPlayerComponent", function () { return EditPlayerComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var EditPlayerComponent = /** @class */ (function () {
                function EditPlayerComponent(data, player_service, game_service, dialogRef, fb) {
                    var _this = this;
                    this.data = data;
                    this.player_service = player_service;
                    this.game_service = game_service;
                    this.dialogRef = dialogRef;
                    this.fb = fb;
                    this.rank_setting = ["Copper", "Silver", "Gold", "Platium", "Dimond", " Crystal", "Master", "Grand Master", "Galaxy", "Top 500"];
                    this.game = [];
                    console.log(this.data.id);
                    // SETTING THE PREFIX VALUE
                    this.player_service.getPlayer(this.data.id).subscribe(function (data) {
                        _this.playerForm = _this.fb.group({
                            player: [data.player, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].maxLength(25), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-z]+(?:[ ][A-Za-z]+)*$/)]],
                            rank: [data.rank, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            score: [data.score, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
                            time: [data.time, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[A-Za-z0-9]+(?:[ ][A-Za-z0-9]+)*$/)]],
                            game_history: [data.game_history, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            favorite: [data.favorite],
                            status: [data.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            joinable: [data.joinable, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
                        });
                    });
                }
                EditPlayerComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    //GET GAME DATDA
                    this.game_service.getGames().subscribe(function (res) {
                        _this.game = res;
                        console.log(_this.game);
                    });
                    // STATIC AVALIABLE OPTION
                    this.avaliable = ["avaliable", "unavaliable"];
                    //INIT THE PLAYER DATA AS ""
                    this.playerForm = this.fb.group({
                        player: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].minLength(4)]],
                        rank: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        score: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^-?(0|[1-9]\d*)?$/)]],
                        time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].pattern(/^[a-zA-Z0-9]{1,30}$/)]],
                        game_history: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        favorite: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        status: ["avaliable", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        joinable: ["join game", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]]
                    });
                };
                Object.defineProperty(EditPlayerComponent.prototype, "player", {
                    get: function () {
                        return this.playerForm.get("player");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EditPlayerComponent.prototype, "score", {
                    get: function () {
                        return this.playerForm.get("score");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(EditPlayerComponent.prototype, "time", {
                    get: function () {
                        return this.playerForm.get("time");
                    },
                    enumerable: true,
                    configurable: true
                });
                //SUBMIT BUTTON PRESSED AND CHANGE STATUS 
                EditPlayerComponent.prototype.commit = function () {
                    console.log(this.playerForm.value);
                    if (this.playerForm.value.status == "avaliable") {
                        this.playerForm.value.joinable = "join game";
                    }
                    else {
                        this.playerForm.value.joinable = "unable";
                    }
                    var id = this.data.id;
                    this.player_service
                        .UpdatePlayer(id, this.playerForm.value)
                        .subscribe(function (res) {
                        console.log("EDITED");
                    });
                    this.dialogRef.close();
                };
                //CANCEL 
                EditPlayerComponent.prototype.cancel = function () {
                    this.dialogRef.close();
                };
                return EditPlayerComponent;
            }());
            EditPlayerComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] },
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
            ]; };
            EditPlayerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-edit-player",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./edit-player.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/edit-player/edit-player.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./edit-player.component.css */ "./src/app/components/edit-player/edit-player.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], EditPlayerComponent);
            /***/ 
        }),
        /***/ "./src/app/components/game-list/game-list.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/game-list/game-list.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2FtZS1saXN0L2dhbWUtbGlzdC5jb21wb25lbnQuY3NzIn0= */");
            /***/ 
        }),
        /***/ "./src/app/components/game-list/game-list.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/game-list/game-list.component.ts ***!
          \*************************************************************/
        /*! exports provided: GameListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameListComponent", function () { return GameListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
            var GameListComponent = /** @class */ (function () {
                function GameListComponent(dialog, game_service) {
                    var _this = this;
                    this.dialog = dialog;
                    this.game_service = game_service;
                    this.Gamedata = [];
                    this.displayedColumns = [
                        "title",
                        "platform",
                        "genre",
                        "rating",
                        "publisher",
                        "release",
                        "status"
                    ]; //space freaking sensitivie
                    this.game_service.getGames().subscribe(function (data) {
                        _this.Gamedata = data;
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_3__["MatTableDataSource"](_this.Gamedata);
                        setTimeout(function () {
                            _this.dataSource.paginator = _this.paginator;
                        }, 0);
                    });
                }
                GameListComponent.prototype.ngOnInit = function () {
                };
                GameListComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                return GameListComponent;
            }());
            GameListComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"] },
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_5__["GameService"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_2__["MatPaginator"], { static: true })
            ], GameListComponent.prototype, "paginator", void 0);
            GameListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: 'app-game-list',
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./game-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/game-list/game-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./game-list.component.css */ "./src/app/components/game-list/game-list.component.css")).default]
                })
            ], GameListComponent);
            /***/ 
        }),
        /***/ "./src/app/components/join-game/join-game.component.css": 
        /*!**************************************************************!*\
          !*** ./src/app/components/join-game/join-game.component.css ***!
          \**************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = (".images-holder{\r\n    float: left;\r\n    width: 25%;\r\n    height: auto;\r\n}\r\n.form-holder{\r\n    float: left;\r\n    width: 65%;\r\n}\r\n.container{\r\n    justify-content: space-between;\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.button-holder{\r\n    width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9qb2luLWdhbWUvam9pbi1nYW1lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxVQUFVO0FBQ2Q7QUFDQTtJQUNJLDhCQUE4QjtJQUM5QixhQUFhO0lBQ2IsbUJBQW1CO0FBQ3ZCO0FBRUE7SUFDSSxXQUFXO0FBQ2YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2pvaW4tZ2FtZS9qb2luLWdhbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pbWFnZXMtaG9sZGVye1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB3aWR0aDogMjUlO1xyXG4gICAgaGVpZ2h0OiBhdXRvO1xyXG59XHJcbi5mb3JtLWhvbGRlcntcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgd2lkdGg6IDY1JTtcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbn1cclxuXHJcbi5idXR0b24taG9sZGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn0iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/join-game/join-game.component.ts": 
        /*!*************************************************************!*\
          !*** ./src/app/components/join-game/join-game.component.ts ***!
          \*************************************************************/
        /*! exports provided: JoinGameComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "JoinGameComponent", function () { return JoinGameComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_game_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/game.service */ "./src/app/services/game.service.ts");
            /* harmony import */ var _services_player_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/player.service */ "./src/app/services/player.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            var JoinGameComponent = /** @class */ (function () {
                function JoinGameComponent(data, player_service, game_service, dialogRef, fb) {
                    var _this = this;
                    this.data = data;
                    this.player_service = player_service;
                    this.game_service = game_service;
                    this.dialogRef = dialogRef;
                    this.fb = fb;
                    this.game = [];
                    //selected game perfered
                    this.game_perfered = "";
                    console.log(this.data.id);
                    this.player_service.getPlayer(this.data.id).subscribe(function (info) {
                        _this.playerForm = _this.fb.group({
                            player_name: [info.player, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            rank: [info.rank, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            score: [info.score, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            time: [info.time],
                            //change for display
                            game_history: [info.game_history, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            favorite: [info.favorite],
                            status: [info.status, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                            joinable: [info.joinable, [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        });
                    });
                }
                JoinGameComponent.prototype.ngOnInit = function () {
                    var _this = this;
                    this.game_service.getGames().subscribe(function (res) {
                        _this.game = res;
                        console.log(_this.game);
                    });
                    this.playerForm = this.fb.group({
                        player_name: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        rank: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        score: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        time: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        game_history: [this.fb.array([]), [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        favorite: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        status: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                        joinable: ["", [_angular_forms__WEBPACK_IMPORTED_MODULE_5__["Validators"].required]],
                    });
                };
                JoinGameComponent.prototype.selected_game = function (title) {
                    console.log("You have selected " + title + " as your perfered game to play");
                    this.game_perfered = title;
                    this.game_choice = true;
                    console.log(this.game_choice);
                };
                JoinGameComponent.prototype.join_game = function () {
                    console.log("Validation completed");
                    this.playerForm.value.status = "unavaliable";
                    this.playerForm.value.joinable = "unable";
                    this.playerForm.value.game_history.push(this.game_perfered);
                    this.player_service
                        .UpdatePlayer(this.data.id, this.playerForm.value)
                        .subscribe();
                    this.dialogRef.close();
                };
                JoinGameComponent.prototype.cancel = function () {
                    this.dialogRef.close();
                };
                return JoinGameComponent;
            }());
            JoinGameComponent.ctorParameters = function () { return [
                { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"], args: [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"],] }] },
                { type: _services_player_service__WEBPACK_IMPORTED_MODULE_4__["PlayerService"] },
                { type: _services_game_service__WEBPACK_IMPORTED_MODULE_3__["GameService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormBuilder"] }
            ]; };
            JoinGameComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-join-game",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./join-game.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/join-game/join-game.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./join-game.component.css */ "./src/app/components/join-game/join-game.component.css")).default]
                }),
                tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"]))
            ], JoinGameComponent);
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.css": 
        /*!******************************************************!*\
          !*** ./src/app/components/login/login.component.css ***!
          \******************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("input.ng-dirty.ng-valid {\r\n  border-left:5px solid green\r\n}\r\ninput.ng-touched.ng-invalid\r\n{\r\n  border-left:5px solid #a94442\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9sb2dpbi9sb2dpbi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0U7QUFDRjtBQUNBOztFQUVFO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJpbnB1dC5uZy1kaXJ0eS5uZy12YWxpZCB7XHJcbiAgYm9yZGVyLWxlZnQ6NXB4IHNvbGlkIGdyZWVuXHJcbn1cclxuaW5wdXQubmctdG91Y2hlZC5uZy1pbnZhbGlkXHJcbntcclxuICBib3JkZXItbGVmdDo1cHggc29saWQgI2E5NDQ0MlxyXG59XHJcblxyXG4iXX0= */");
            /***/ 
        }),
        /***/ "./src/app/components/login/login.component.ts": 
        /*!*****************************************************!*\
          !*** ./src/app/components/login/login.component.ts ***!
          \*****************************************************/
        /*! exports provided: LoginComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function () { return LoginComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/share.service */ "./src/app/services/share.service.ts");
            /* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            var LoginComponent = /** @class */ (function () {
                function LoginComponent(dialogRef, share, builder, router) {
                    this.dialogRef = dialogRef;
                    this.share = share;
                    this.builder = builder;
                    this.router = router;
                }
                LoginComponent.prototype.ngOnInit = function () {
                    // this.dialogRef.updatePosition({ top: `30px`,
                    // right: `40px`});
                    this.loginForm = this.builder.group({
                        username: [
                            "",
                            [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8), _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^[A-Za-z0-9]+(?:[_-][A-Za-z0-9]+)*$/)] //ValidateAdmin
                        ],
                        password: [
                            "",
                            [
                                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required,
                                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].minLength(8),
                                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].pattern(/^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/)
                            ]
                        ]
                    });
                };
                Object.defineProperty(LoginComponent.prototype, "username", {
                    get: function () {
                        return this.loginForm.get("username");
                    },
                    enumerable: true,
                    configurable: true
                });
                Object.defineProperty(LoginComponent.prototype, "password", {
                    get: function () {
                        return this.loginForm.get("password");
                    },
                    enumerable: true,
                    configurable: true
                });
                LoginComponent.prototype.log = function (x) {
                    console.log(x);
                };
                LoginComponent.prototype.onSubmit = function () {
                    if (this.loginForm.value.username == "ThanhQuan123" && this.loginForm.value.password == "WhoisJoe?1") {
                        console.log("Submited");
                        this.dialogRef.close();
                        this.share.setTrue();
                        console.log(this.share.loged);
                        this.router.navigateByUrl('/admin');
                    }
                    else {
                        this.share.setFalse();
                        this.dialogRef.close();
                        this.router.navigateByUrl('');
                    }
                };
                return LoginComponent;
            }());
            LoginComponent.ctorParameters = function () { return [
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"] },
                { type: _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] },
                { type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }
            ]; };
            LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-login",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/login/login.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")).default]
                })
            ], LoginComponent);
            /***/ 
        }),
        /***/ "./src/app/components/player-list/player-list.component.css": 
        /*!******************************************************************!*\
          !*** ./src/app/components/player-list/player-list.component.css ***!
          \******************************************************************/
        /*! exports provided: default */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony default export */ __webpack_exports__["default"] = ("\r\nbody {\r\n    font-family: 'Covered By Your Grace', cursive;\r\n    line-height: 1.25;\r\n    \r\n}\r\n@media screen and (max-width: 960px) {\r\n    .mat-table {\r\n      border: 0;\r\n      vertical-align: middle\r\n    }\r\n  \r\n    .mat-table caption {\r\n      font-size: 1em;\r\n    }\r\n    \r\n    .mat-table .mat-header-cell {\r\n      \r\n      border: 10px solid;\r\n      clip: rect(0 0 0 0);\r\n      height: 1px;\r\n      margin: -1px;\r\n      padding: 0;\r\n      position: absolute;\r\n      width: 1px;\r\n    }\r\n    \r\n    .mat-table .mat-row {\r\n      border-bottom: 5px solid #ddd;\r\n      display: block;\r\n    }\r\n    /*\r\n    .mat-table .mat-row:nth-child(even) {background: #CCC}\r\n    .mat-table .mat-row:nth-child(odd) {background: #FFF}\r\n    */\r\n    .mat-table .mat-cell {\r\n      border-bottom: 1px solid #ddd;\r\n      display: block;\r\n      font-size: 1em;\r\n      text-align: right;\r\n      font-weight: bold;\r\n      height:30px;\r\n      margin-left: 7%;\r\n      margin-bottom: 4%;\r\n    }\r\n    .mat-table .mat-cell:before {\r\n      /*\r\n      * aria-label has no advantage, it won't be read inside a table\r\n      content: attr(aria-label);\r\n      */\r\n      content: attr(data-label);\r\n      float: left;\r\n      \r\n      text-transform: uppercase;\r\n      font-weight: normal;\r\n      \r\n      font-size: .85em;\r\n    }\r\n    .mat-table .mat-cell:last-child {\r\n      border-bottom: 0;\r\n    }\r\n      .mat-table .mat-cell:first-child {\r\n      margin-top: 4%;\r\n    }\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9wbGF5ZXItbGlzdC9wbGF5ZXItbGlzdC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQTtJQUNJLDZDQUE2QztJQUM3QyxpQkFBaUI7O0FBRXJCO0FBQ0E7SUFDSTtNQUNFLFNBQVM7TUFDVDtJQUNGOztJQUVBO01BQ0UsY0FBYztJQUNoQjs7SUFFQTs7TUFFRSxrQkFBa0I7TUFDbEIsbUJBQW1CO01BQ25CLFdBQVc7TUFDWCxZQUFZO01BQ1osVUFBVTtNQUNWLGtCQUFrQjtNQUNsQixVQUFVO0lBQ1o7O0lBRUE7TUFDRSw2QkFBNkI7TUFDN0IsY0FBYztJQUNoQjtJQUNBOzs7S0FHQztJQUNEO01BQ0UsNkJBQTZCO01BQzdCLGNBQWM7TUFDZCxjQUFjO01BQ2QsaUJBQWlCO01BQ2pCLGlCQUFpQjtNQUNqQixXQUFXO01BQ1gsZUFBZTtNQUNmLGlCQUFpQjtJQUNuQjtJQUNBO01BQ0U7OztPQUdDO01BQ0QseUJBQXlCO01BQ3pCLFdBQVc7O01BRVgseUJBQXlCO01BQ3pCLG1CQUFtQjs7TUFFbkIsZ0JBQWdCO0lBQ2xCO0lBQ0E7TUFDRSxnQkFBZ0I7SUFDbEI7TUFDRTtNQUNBLGNBQWM7SUFDaEI7RUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcGxheWVyLWxpc3QvcGxheWVyLWxpc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5ib2R5IHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQ292ZXJlZCBCeSBZb3VyIEdyYWNlJywgY3Vyc2l2ZTtcclxuICAgIGxpbmUtaGVpZ2h0OiAxLjI1O1xyXG4gICAgXHJcbn1cclxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTYwcHgpIHtcclxuICAgIC5tYXQtdGFibGUge1xyXG4gICAgICBib3JkZXI6IDA7XHJcbiAgICAgIHZlcnRpY2FsLWFsaWduOiBtaWRkbGVcclxuICAgIH1cclxuICBcclxuICAgIC5tYXQtdGFibGUgY2FwdGlvbiB7XHJcbiAgICAgIGZvbnQtc2l6ZTogMWVtO1xyXG4gICAgfVxyXG4gICAgXHJcbiAgICAubWF0LXRhYmxlIC5tYXQtaGVhZGVyLWNlbGwge1xyXG4gICAgICBcclxuICAgICAgYm9yZGVyOiAxMHB4IHNvbGlkO1xyXG4gICAgICBjbGlwOiByZWN0KDAgMCAwIDApO1xyXG4gICAgICBoZWlnaHQ6IDFweDtcclxuICAgICAgbWFyZ2luOiAtMXB4O1xyXG4gICAgICBwYWRkaW5nOiAwO1xyXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgIHdpZHRoOiAxcHg7XHJcbiAgICB9XHJcbiAgICBcclxuICAgIC5tYXQtdGFibGUgLm1hdC1yb3cge1xyXG4gICAgICBib3JkZXItYm90dG9tOiA1cHggc29saWQgI2RkZDtcclxuICAgICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB9XHJcbiAgICAvKlxyXG4gICAgLm1hdC10YWJsZSAubWF0LXJvdzpudGgtY2hpbGQoZXZlbikge2JhY2tncm91bmQ6ICNDQ0N9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtcm93Om50aC1jaGlsZChvZGQpIHtiYWNrZ3JvdW5kOiAjRkZGfVxyXG4gICAgKi9cclxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgICBmb250LXNpemU6IDFlbTtcclxuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgICBoZWlnaHQ6MzBweDtcclxuICAgICAgbWFyZ2luLWxlZnQ6IDclO1xyXG4gICAgICBtYXJnaW4tYm90dG9tOiA0JTtcclxuICAgIH1cclxuICAgIC5tYXQtdGFibGUgLm1hdC1jZWxsOmJlZm9yZSB7XHJcbiAgICAgIC8qXHJcbiAgICAgICogYXJpYS1sYWJlbCBoYXMgbm8gYWR2YW50YWdlLCBpdCB3b24ndCBiZSByZWFkIGluc2lkZSBhIHRhYmxlXHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoYXJpYS1sYWJlbCk7XHJcbiAgICAgICovXHJcbiAgICAgIGNvbnRlbnQ6IGF0dHIoZGF0YS1sYWJlbCk7XHJcbiAgICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgICBcclxuICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcclxuICAgICAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcclxuICAgICAgXHJcbiAgICAgIGZvbnQtc2l6ZTogLjg1ZW07XHJcbiAgICB9XHJcbiAgICAubWF0LXRhYmxlIC5tYXQtY2VsbDpsYXN0LWNoaWxkIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMDtcclxuICAgIH1cclxuICAgICAgLm1hdC10YWJsZSAubWF0LWNlbGw6Zmlyc3QtY2hpbGQge1xyXG4gICAgICBtYXJnaW4tdG9wOiA0JTtcclxuICAgIH1cclxuICB9Il19 */");
            /***/ 
        }),
        /***/ "./src/app/components/player-list/player-list.component.ts": 
        /*!*****************************************************************!*\
          !*** ./src/app/components/player-list/player-list.component.ts ***!
          \*****************************************************************/
        /*! exports provided: PlayerListComponent */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerListComponent", function () { return PlayerListComponent; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var src_app_services_player_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/player.service */ "./src/app/services/player.service.ts");
            /* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm2015/paginator.js");
            /* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
            /* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
            /* harmony import */ var _join_game_join_game_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../join-game/join-game.component */ "./src/app/components/join-game/join-game.component.ts");
            var PlayerListComponent = /** @class */ (function () {
                function PlayerListComponent(player_service, dialog) {
                    var _this = this;
                    this.player_service = player_service;
                    this.dialog = dialog;
                    this.PlayerData = [];
                    this.GamePlayed = [];
                    // useless
                    this.player_data = this.player_service.getPlayers();
                    this.displayedColumns = [
                        "player",
                        "rank",
                        "score",
                        "time",
                        "game_history",
                        "favorite",
                        "status",
                        "joinable"
                    ]; //space freaking sensitivie
                    this.player_service.getPlayers().subscribe(function (data) {
                        _this.PlayerData = data;
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.PlayerData);
                        setTimeout(function () {
                            _this.dataSource.paginator = _this.paginator;
                        }, 0);
                    });
                }
                PlayerListComponent.prototype.ngOnInit = function () {
                    this.refresh();
                };
                PlayerListComponent.prototype.avaliable_checker = function (status) {
                    if (status == "avaliable") {
                        return true;
                    }
                    else if (status == "unavaliable") {
                        return false;
                    }
                };
                PlayerListComponent.prototype.test = function (i) {
                    this.GamePlayed = this.dataSource.data[i].game_history;
                    console.log(this.GamePlayed);
                };
                //use modal to go to join game component
                PlayerListComponent.prototype.join_game = function (id) {
                    var _this = this;
                    this.dialog
                        .open(_join_game_join_game_component__WEBPACK_IMPORTED_MODULE_6__["JoinGameComponent"], {
                        width: "600px",
                        height: "550px",
                        data: { id: id }
                    })
                        .afterClosed()
                        .subscribe(function () {
                        _this.refresh();
                    });
                };
                PlayerListComponent.prototype.refresh = function () {
                    var _this = this;
                    this.player_service.getPlayers().subscribe(function (data) {
                        _this.PlayerData = data;
                        _this.dataSource = new _angular_material_table__WEBPACK_IMPORTED_MODULE_4__["MatTableDataSource"](_this.PlayerData);
                        setTimeout(function () {
                            _this.dataSource.paginator = _this.paginator;
                        }, 0);
                    });
                };
                PlayerListComponent.prototype.applyFilter = function (filterValue) {
                    this.dataSource.filter = filterValue.trim().toLowerCase();
                };
                return PlayerListComponent;
            }());
            PlayerListComponent.ctorParameters = function () { return [
                { type: src_app_services_player_service__WEBPACK_IMPORTED_MODULE_2__["PlayerService"] },
                { type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"] }
            ]; };
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()
            ], PlayerListComponent.prototype, "admin_authenthication", void 0);
            tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_3__["MatPaginator"], { static: true })
            ], PlayerListComponent.prototype, "paginator", void 0);
            PlayerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
                    selector: "app-player-list",
                    template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./player-list.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/components/player-list/player-list.component.html")).default,
                    styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./player-list.component.css */ "./src/app/components/player-list/player-list.component.css")).default]
                })
            ], PlayerListComponent);
            /***/ 
        }),
        /***/ "./src/app/guards/auth-guard.service.ts": 
        /*!**********************************************!*\
          !*** ./src/app/guards/auth-guard.service.ts ***!
          \**********************************************/
        /*! exports provided: AuthGuard */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function () { return AuthGuard; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
            /* harmony import */ var _services_share_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/share.service */ "./src/app/services/share.service.ts");
            var AuthGuard = /** @class */ (function () {
                function AuthGuard(share, router) {
                    this.share = share;
                    this.router = router;
                }
                AuthGuard.prototype.canActivate = function (next, state) {
                    if (this.share.loged == true) {
                        return true;
                    }
                    else {
                        this.router.navigateByUrl("");
                        return false;
                    }
                };
                return AuthGuard;
            }());
            AuthGuard.ctorParameters = function () { return [
                { type: _services_share_service__WEBPACK_IMPORTED_MODULE_3__["ShareService"] },
                { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
            ]; };
            AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
            ], AuthGuard);
            /***/ 
        }),
        /***/ "./src/app/services/game.service.ts": 
        /*!******************************************!*\
          !*** ./src/app/services/game.service.ts ***!
          \******************************************/
        /*! exports provided: GameService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GameService", function () { return GameService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var GameService = /** @class */ (function () {
                function GameService(http) {
                    this.http = http;
                    // game_endpoint: string = "http://localhost:4000/api/game";
                    this.game_endpoint = "/api/game";
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]().set("Content-Type", "application/json");
                }
                GameService.prototype.getGames = function () {
                    return this.http.get("" + this.game_endpoint);
                };
                return GameService;
            }());
            GameService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
            ]; };
            GameService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], GameService);
            /***/ 
        }),
        /***/ "./src/app/services/player.service.ts": 
        /*!********************************************!*\
          !*** ./src/app/services/player.service.ts ***!
          \********************************************/
        /*! exports provided: PlayerService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PlayerService", function () { return PlayerService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
            /* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
            var PlayerService = /** @class */ (function () {
                function PlayerService(http) {
                    this.http = http;
                    // player_endpoint: string = "http://localhost:4000/api/player";
                    this.player_endpoint = "/api/player";
                    this.headers = new _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpHeaders"]().set("Content-Type", "application/json");
                }
                //PLAYER
                // Add PLAYER
                PlayerService.prototype.AddPlayer = function (data) {
                    var API_URL = this.player_endpoint + "/add-player";
                    console.log(API_URL);
                    return this.http.post(API_URL, data, { headers: this.headers });
                };
                // Get all students
                PlayerService.prototype.getPlayers = function () {
                    return this.http.get("" + this.player_endpoint);
                };
                // Get student
                PlayerService.prototype.getPlayer = function (id) {
                    var API_URL = this.player_endpoint + "/get-player/" + id;
                    return this.http.get(API_URL, { headers: this.headers }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["map"])(function (res) {
                        return res;
                    }));
                };
                // Update student
                PlayerService.prototype.UpdatePlayer = function (id, data) {
                    var API_URL = this.player_endpoint + "/update-player/" + id;
                    return this.http.post(API_URL, data, { headers: this.headers });
                };
                // Delete student
                PlayerService.prototype.DeletePlayer = function (id) {
                    var API_URL = this.player_endpoint + "/delete-player/" + id;
                    return this.http.delete(API_URL);
                };
                return PlayerService;
            }());
            PlayerService.ctorParameters = function () { return [
                { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }
            ]; };
            PlayerService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], PlayerService);
            /***/ 
        }),
        /***/ "./src/app/services/share.service.ts": 
        /*!*******************************************!*\
          !*** ./src/app/services/share.service.ts ***!
          \*******************************************/
        /*! exports provided: ShareService */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ShareService", function () { return ShareService; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            var ShareService = /** @class */ (function () {
                function ShareService() {
                    this.RankList = ["Copper", "Silver", "Gold", "Platium", "Dimond", " Crystal", "Master", "Grand Master", "Galaxy", "Top 500"];
                    this.loged = false;
                }
                ShareService.prototype.setTrue = function () {
                    this.loged = true;
                };
                ShareService.prototype.setFalse = function () {
                    this.loged = false;
                };
                return ShareService;
            }());
            ShareService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
                    providedIn: "root"
                })
            ], ShareService);
            /***/ 
        }),
        /***/ "./src/environments/environment.ts": 
        /*!*****************************************!*\
          !*** ./src/environments/environment.ts ***!
          \*****************************************/
        /*! exports provided: environment */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function () { return environment; });
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
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
            /***/ 
        }),
        /***/ "./src/main.ts": 
        /*!*********************!*\
          !*** ./src/main.ts ***!
          \*********************/
        /*! no exports provided */
        /***/ (function (module, __webpack_exports__, __webpack_require__) {
            "use strict";
            __webpack_require__.r(__webpack_exports__);
            /* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
            /* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/ __webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
            /* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
            /* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
            /* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
            /* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
            if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
                Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
            }
            Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
                .catch(function (err) { return console.error(err); });
            /***/ 
        }),
        /***/ 0: 
        /*!***************************!*\
          !*** multi ./src/main.ts ***!
          \***************************/
        /*! no static exports found */
        /***/ (function (module, exports, __webpack_require__) {
            module.exports = __webpack_require__(/*! C:\Users\vuaba\Desktop\Javascript Projects\COMP3124\MEAN_GAME_LOBBY\front-end\src\main.ts */ "./src/main.ts");
            /***/ 
        })
    }, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map
//# sourceMappingURL=main-es5.js.map