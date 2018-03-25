webpackJsonp(["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n<!-- Routed views go here -->\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'SmyData';
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("./src/app/app.component.html"),
            styles: [__webpack_require__("./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("./node_modules/@angular/platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("./node_modules/@angular/forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__app_component__ = __webpack_require__("./src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__ = __webpack_require__("./src/app/signup/signup.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sign_in_sign_in_component__ = __webpack_require__("./src/app/sign-in/sign-in.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__user_data_user_data_component__ = __webpack_require__("./src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__otp_authentication_otp_authentication_component__ = __webpack_require__("./src/app/otp-authentication/otp-authentication.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};












var appRoutes = [
    { path: 'signIn', component: __WEBPACK_IMPORTED_MODULE_8__sign_in_sign_in_component__["a" /* SignInComponent */] },
    { path: 'signUp', component: __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */] },
    { path: 'userData', component: __WEBPACK_IMPORTED_MODULE_9__user_data_user_data_component__["a" /* UserDataComponent */] },
    { path: 'otpVerification', component: __WEBPACK_IMPORTED_MODULE_11__otp_authentication_otp_authentication_component__["a" /* OtpAuthenticationComponent */] },
    { path: '',
        redirectTo: '/signIn',
        pathMatch: 'full'
    }
];
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_7__signup_signup_component__["a" /* SignupComponent */],
                __WEBPACK_IMPORTED_MODULE_8__sign_in_sign_in_component__["a" /* SignInComponent */],
                __WEBPACK_IMPORTED_MODULE_9__user_data_user_data_component__["a" /* UserDataComponent */],
                __WEBPACK_IMPORTED_MODULE_11__otp_authentication_otp_authentication_component__["a" /* OtpAuthenticationComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["b" /* RouterModule */].forRoot(appRoutes, { enableTracing: true } // <-- debugging purposes only
                )
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_5_ngx_cookie_service__["a" /* CookieService */], __WEBPACK_IMPORTED_MODULE_10__data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_6__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("./node_modules/@angular/common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__ = __webpack_require__("./node_modules/rxjs/_esm5/BehaviorSubject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

//import {Observable} from 'rxjs/Observable';


var httpOptions = {
    headers: new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'application/json' })
};
var key = 'AIzaSyBFcZOIYqk_s0-qilRmve1TjMCXhYxUP3c';
var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.messageSource = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](12345);
        this.cast = this.messageSource.asObservable();
        this.newBusiness = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.newBusinessVal = this.newBusiness.asObservable();
        this.editBusiness = new __WEBPACK_IMPORTED_MODULE_2_rxjs_BehaviorSubject__["a" /* BehaviorSubject */](false);
        this.editBusinessDetails = this.editBusiness.asObservable();
    }
    DataService.prototype.changeMessage = function (message) {
        console.log('message:servuce:' + message);
        this.messageSource.next(message);
    };
    DataService.prototype.isNewBusiness = function (value) {
        console.log('isNewBusiness:service:' + value);
        this.newBusiness.next(value);
    };
    DataService.prototype.editBusinessData = function (data) {
        console.log(data);
        this.editBusiness.next(data);
    };
    DataService.prototype.registerUser = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = 'http://localhost:8585/api/saveUser/registration';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    DataService.prototype.addingNewBusiness = function (data) {
        var body = JSON.stringify(data);
        console.log(data);
        var url = 'http://localhost:8585/api/saveUser/add';
        console.log(url);
        return this.http.post(url, body, httpOptions);
    };
    DataService.prototype.editBusinessService = function (editData) {
        console.log(editData);
        var url = 'http://localhost:8585/api/saveUser/edit';
        return this.http.post(url, editData);
    };
    DataService.prototype.viewMyBusiness = function () {
        var url = 'http://localhost:8585/api/viewMyBusiness';
        return this.http.get(url);
    };
    DataService.prototype.logInUser = function (data) {
        console.log(data);
        var url = 'http://localhost:8585/api/loginUser';
        return this.http.post(url, data);
    };
    DataService.prototype.getLocationDetails = function (place) {
        console.log(place);
        var url = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + place.details + '&key=' + key;
        return this.http.get(url);
    };
    DataService.prototype.sendOtp = function (number) {
        console.log('In service sendOtp:: ' + number);
        var url = 'http://localhost:8585/api/sendOtp/' + number;
        return this.http.get(url);
    };
    DataService.prototype.resetpassword = function (pwd, mobile) {
        console.log(pwd + mobile);
        var url = 'http://localhost:8585/api/resetPwd/' + pwd;
        return this.http.get(url, pwd);
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.css":
/***/ (function(module, exports) {

module.exports = ".reset-pswd{\r\n  background-color: #9EEBA1;\r\n  border-radius: 10px;\r\n  border: 1px solid;\r\n   -webkit-box-shadow: 5px 10px #888888;\r\n           box-shadow: 5px 10px #888888;\r\n  margin-top: 10%;\r\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t box-shadow: 0 10px 6px -6px #777;\r\n }\r\n"

/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.html":
/***/ (function(module, exports) {

module.exports = "<div  *ngIf='!resetPwd' class=\"col-md-3 col-md-offset-4 otp-box signIn\" >\n  <form (ngSubmit)=\"verifyOtp(); otpVerify.reset()\" #otpVerify=\"ngForm\" class=\"otp-verify\">\n    <div *ngIf='invalidOtp' class=\"alert alert-danger\" (click)=\"invalidOtp = false\">\n      <strong>Invalid OTP</strong>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"otp\">Enter The One time password (OTP) that was sent to your mobile device:</label>\n    <input type=\"text\" class=\"form-control\" id=\"otp\"\n           required\n           [(ngModel)]=\"otpValue\" name=\"otp\"\n           #otp=\"ngModel\"/>\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary btn-md\" >Submit</button>\n  <button type=\"submit\" [disabled]='clicked' (click)=\"clicked = true\" class=\"btn btn-primary btn-md\" >Resend OTP</button>\n  </form>\n\n</div>\n\n<div *ngIf='resetPwd' class=\"col-md-3 col-md-offset-4 reset-pswd signIn\" id=\"resetPswd\">\n  <form (ngSubmit)=\"resetPswd(); pwdReset.reset()\" #pwdReset=\"ngForm\" class=\"pwd-form\">\n    <div *ngIf='errorDisplay' class=\"alert alert-danger\"  (click)=\"errorDisplay = false\">\n      <strong>{{errMsg}}</strong>\n    </div>\n  <div class=\"form-group\">\n    <label for=\"mobileNum\">New Password:</label>\n    <input type=\"password\" class=\"form-control\" id=\"pwd\"\n           required\n           [(ngModel)]=\"pwdValNew\" name=\"pwd\"\n           #pwd=\"ngModel\"/>\n    <div [hidden]=\"pwd.valid || pwd.pristine\"\n         class=\"alert alert-danger\">\n       Password is required\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"mobileNum\">Confirm Password:</label>\n    <input type=\"password\" class=\"form-control\" id=\"Cpwd\"\n           required\n           [(ngModel)]=\"pwdValCnf\" name=\"Cpwd\"\n           #Cpwd=\"ngModel\"/>\n    <div [hidden]=\"Cpwd.valid || Cpwd.pristine\"\n         class=\"alert alert-danger\">\n       Password is required\n    </div>\n  </div>\n  <button  type=\"submit\" class=\"btn btn-primary btn-md\" [disabled]=\"!pwdReset.form.valid\">Submit</button>\n\n</form>\n</div>\n\n<div class=\"container\" *ngIf='successRegPopUp'>\n  <!-- Modal -->\n    <div class=\"modal show fade\" id=\"myModalRegister\" role=\"dialog\" >\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n\t\t\t\t<br><br>\n        <div class=\"modal-body\">\n          <h4>Your sign up was successful click continue to logIn to  your account</h4>\n\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary btn-md\" routerLink=\"/userData\">Continue</button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/otp-authentication/otp-authentication.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return OtpAuthenticationComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var OtpAuthenticationComponent = /** @class */ (function () {
    function OtpAuthenticationComponent(data, router, cookieService) {
        this.data = data;
        this.router = router;
        this.cookieService = cookieService;
    }
    OtpAuthenticationComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.resetPwd = false;
        this.data.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        console.log('message::' + this.messageSource);
    };
    OtpAuthenticationComponent.prototype.verifyOtp = function () {
        var _this = this;
        this.data.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        console.log('verifyOtp::' + this.messageSource);
        if (this.messageSource == (this.otpValue + 'Regi')) {
            this.successRegPopUp = true;
            //    this.router.navigate(['/', 'userData']);
        }
        else if (this.messageSource == this.otpValue) {
            this.resetPwd = true;
        }
        else {
            this.invalidOtp = true;
        }
    };
    OtpAuthenticationComponent.prototype.resetPswd = function () {
        var _this = this;
        if (this.pwdValNew == this.pwdValCnf) {
            this.mobile = this.cookieService.get('resetPwdMobile');
            this.data.resetpassword(this.pwdValNew, this.mobile).subscribe(function (data) {
                _this.router.navigate(['/', 'userData']);
                return true;
            }, function (error) {
                _this.errorDisplay = true;
                _this.errMsg = 'Could not Reset the password. Try Again';
            });
        }
        else {
            this.errorDisplay = true;
            this.errMsg = 'Password Match error';
        }
    };
    OtpAuthenticationComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-otp-authentication',
            template: __webpack_require__("./src/app/otp-authentication/otp-authentication.component.html"),
            styles: [__webpack_require__("./src/app/otp-authentication/otp-authentication.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], OtpAuthenticationComponent);
    return OtpAuthenticationComponent;
}());



/***/ }),

/***/ "./src/app/sign-in/sign-in.component.css":
/***/ (function(module, exports) {

module.exports = ".signIn{\r\n  width: 40%;\r\n  height: auto;\r\n  background-color: #9EEBA1;\r\n  border-radius: 10px;\r\n  border: 1px solid;\r\n   -webkit-box-shadow: 5px 10px #888888;\r\n           box-shadow: 5px 10px #888888;\r\n  margin-top: 10%;\r\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t box-shadow: 0 10px 6px -6px #777;\r\n }\r\n\r\n.btnStyle{\r\n  width: 230px;\r\n}\r\n\r\n.login-form{\r\n  margin: 20px;\r\n}\r\n\r\n.forgotPwd:hover{\r\n  cursor: pointer;\r\n  color: #1b69b6;\r\n  text-decoration:underline;\r\n}\r\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container signIn\">\n\t<div [hidden]=\"submitted\">\n\t\t<h1>Log In</h1>\n\t\t<form (ngSubmit)=\"onSubmit(); signin.reset()\" #signin=\"ngForm\" class=\"login-form\">\n\t\t\t<div *ngIf='loginFail' class=\"alert alert-danger\" (click)=\"loginFail = false\">\n\t\t\t\t<strong>Invalid mobile or password</strong>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Mobile</label>\n\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"mobile\"\n               required\n               [(ngModel)]=\"model.mobile\" name=\"mobile\"\n               #mobile=\"ngModel\"/>\n\t\t\t\t<div [hidden]=\"mobile.valid || mobile.pristine\"\n             class=\"alert alert-danger\">\n           Mobile Number is required\n        </div>\n\t\t\t</div>\n\t\t\t<div class=\"form-group\">\n\t\t\t\t<label for=\"name\">Password</label>\n\t\t\t\t<input type=\"password\" class=\"form-control\" id=\"password\"\n               required\n               [(ngModel)]=\"model.password\" name=\"password\"\n               #password=\"ngModel\" />\n\t\t\t\t<div [hidden]=\"password.valid || password.pristine\"\n             class=\"alert alert-danger\">\n          Password is required\n        </div>\n\t\t\t</div>\n\t\t\t<button  type=\"submit\" class=\"btn btn-success btn-md btnStyle\" [disabled]=\"!signin.form.valid\" >Log In</button>\n\t\t\t<button  type=\"button\" class=\"btn btn-primary btn-md btnStyle\"  routerLink=\"/signUp\">Register</button>\n<div>\n\t\t\t<label ><input #rememberVal type=\"checkbox\" name=\"rememberMe\" value=\"true\" [(ngModel)]=\"rememberMe\"> Remember Me</label>\n\t\t\t<div class=\"pull-right forgot-password\">\n\t\t\t\t<label class='forgotPwd' data-toggle=\"modal\" data-target=\"#myModal\">Forgot your password?</label>\n\t\t\t</div>\n</div>\n\t\t\t</form>\n\t\t</div>\n\t</div>\n<br>\n<div class=\"container\">\n  <!-- Modal -->\n  <div class=\"modal fade\" id=\"myModal\" role=\"dialog\" >\n    <div class=\"modal-dialog\">\n      <!-- Modal content-->\n      <div class=\"modal-content\">\n\t\t\t\t<br><br>\n        <div class=\"modal-header\">\n\t\t\t\t\t  <h3 class=\"modal-title\">Reset Password</h3>\n          <button type=\"button\" class=\"close\" id=\"modalWindow\" data-dismiss=\"modal\" #closeAddExpenseModal >&times;</button>\n        </div>\n        <div class=\"modal-body\">\n\t\t\t\t\t<form (ngSubmit)=\"sendOtp();\" #otp=\"ngForm\" class=\"otp-form\">\n\t\t\t\t\t<div class=\"form-group\">\n\t\t\t\t\t\t<label for=\"mobileNum\">Enter Mobile Number:</label>\n\t\t\t\t\t\t<input type=\"text\" class=\"form-control\" id=\"mobileNum\"\n\t\t               required\n\t\t               [(ngModel)]=\"mobileNumVal\" name=\"mobileNum\"\n\t\t               #mobileNum=\"ngModel\"/>\n\t\t\t\t\t\t<div [hidden]=\"mobileNum.valid || mobileNum.pristine\"\n\t\t             class=\"alert alert-danger\">\n\t\t           Mobile Number is required\n\t\t        </div>\n\t\t\t\t\t</div>\n\t\t\t\t\t<button  type=\"submit\" class=\"btn btn-primary btn-md\" [disabled]=\"!otp.form.valid\">Send OTP</button>\n\n\t\t\t\t</form>\n        </div>\n      </div>\n\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/sign-in/sign-in.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignInComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var SignInComponent = /** @class */ (function () {
    function SignInComponent(_demoService, router, cookieService) {
        this._demoService = _demoService;
        this.router = router;
        this.cookieService = cookieService;
        this.cookieValue = 'UNKNOWN';
        this.model = { mobile: '', password: '' };
        this.submitted = false;
        this.rememberMe = false;
        this.loginFail = false;
        this.data = [];
        this.storage = [];
    }
    SignInComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.cast.subscribe(function (messageSource) { return _this.messageSource = messageSource; });
        console.log('message::' + this.messageSource);
        this.allCookies = this.cookieService.getAll();
        console.log(this.allCookies);
        if (this.allCookies && this.allCookies.rememberMeVal == 'TRUE') {
            this.model.mobile = this.allCookies.mobile;
            this.model.password = this.allCookies.pswd;
            this.rememberMe = true;
        }
        ;
    };
    ;
    SignInComponent.prototype.onSubmit = function () {
        console.log(this.model);
        this.logInUser(this.model);
        if (this.rememberMe) {
            this.cookieService.set('mobile', this.model.mobile);
            this.cookieService.set('pswd', this.model.password);
            this.cookieService.set('rememberMeVal', this.rememberMe ? 'TRUE' : 'FALSE');
        }
        else {
            this.cookieService.deleteAll();
        }
        ;
    };
    ;
    SignInComponent.prototype.sendOtp = function () {
        var _this = this;
        console.log(this.mobileNumVal);
        this.router.navigate(['/', 'otpVerification']);
        document.getElementById('modalWindow').click();
        this.cookieService.set('resetPwdMobile', this.mobileNumVal);
        this._demoService.sendOtp(this.mobileNumVal).subscribe(function (data) {
            _this._demoService.changeMessage(data);
        }, function (error) {
            _this.cookieService.delete('resetPwdMobile');
        });
    };
    SignInComponent.prototype.logInUser = function (data) {
        var _this = this;
        var JsonData = data;
        this._demoService.logInUser(JsonData).subscribe(function (data) {
            console.log(data);
            console.log("valid user!");
            _this.submitted = true;
            _this.router.navigate(['/', 'userData']);
            return true;
        }, function (error) {
            console.error("not registered!");
            _this.loginFail = true;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignInComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-sign-in',
            template: __webpack_require__("./src/app/sign-in/sign-in.component.html"),
            styles: [__webpack_require__("./src/app/sign-in/sign-in.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_4_ngx_cookie_service__["a" /* CookieService */]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/signup/signup.component.css":
/***/ (function(module, exports) {

module.exports = ".signUp{\r\n  width: 40%;\r\n  background: -webkit-gradient(linear, left top, left bottom, from(green), color-stop(yellow), to(green));\r\n  background: linear-gradient(green, yellow, green);\r\n  background-color: #FFF;\r\n  border-radius: 10px;\r\n  border: 1px solid;\r\n   -webkit-box-shadow: 5px 10px #888888;\r\n           box-shadow: 5px 10px #888888;\r\n  margin-top: 10px;\r\n\t-webkit-box-shadow: 0 10px 6px -6px #777;\r\n\t box-shadow: 0 10px 6px -6px #777;\r\n }\r\n .signup-form{\r\n   margin: 20px;\r\n }\r\n .flexDiv{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n .flex-item{\r\n  width: 25%\r\n}\r\n .flex-item-middle{\r\n  margin: 0 5px;\r\n}\r\n .dropdown-flex{\r\n  display: -webkit-box;\r\n  display: -ms-flexbox;\r\n  display: flex;\r\n}\r\n .dropdown-category{\r\n  width: 45%;\r\n}\r\n .dropdown-register{\r\n  margin-left: 10%;\r\n  width: 45%;\r\n}\r\n .flex-item-getAdd{\r\n  margin-top: 25px;\r\n  width:30%\r\n}\r\n .flex-item-buAdd{\r\n  width: 70%\r\n}\r\n"

/***/ }),

/***/ "./src/app/signup/signup.component.html":
/***/ (function(module, exports) {

module.exports = "<!-- <script src=\"https://maps.googleapis.com/maps/api/js?sensor=false\"></script> -->\n<div class=\"container signUp\">\n   <div [hidden]=\"submitted\">\n      <h1>{{formTitle}}</h1>\n      <form (ngSubmit)=\"onSubmit(); signup.reset()\" #signup=\"ngForm\" class=\"signup-form\">\n        <div *ngIf='registrationFailed' class=\"alert alert-danger\" (click)=\"registrationFailed = false\">\n  \t\t\t\t<strong>Registration failed</strong>\n  \t\t\t</div>\n      <div class=\"form-group\">\n         <label for=\"name\">Company Name / Business name</label>\n         <input type=\"text\" class=\"form-control\" id=\"name\"\n         required\n         [(ngModel)]=\"model.companyName\" name=\"name\"\n         #name=\"ngModel\"/>\n         <div [hidden]=\"name.valid || name.pristine\"\n            class=\"alert alert-danger\">\n            Company Name / Business name is required\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Owner / Manager name</label>\n         <input type=\"text\" class=\"form-control\" id=\"ownername\"\n         required\n         [(ngModel)]=\"model.ownerName\" name=\"ownername\"\n         #ownername=\"ngModel\" />\n         <div [hidden]=\"ownername.valid || ownername.pristine\"\n            class=\"alert alert-danger\">\n            Owner / Manager name is required\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Mobile number</label>\n         <input type=\"text\" class=\"form-control\" id=\"mobile\"\n         required\n         [(ngModel)]=\"model.mobile\" name=\"mobile\"\n         #mobile=\"ngModel\"/>\n         <div [hidden]=\"mobile.valid || mobile.pristine\"\n            class=\"alert alert-danger\">\n            mobile number is required\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='!addNew'>\n         <label for=\"name\">Password</label>\n         <input type=\"text\" class=\"form-control\" id=\"password\"\n         required\n         [(ngModel)]=\"model.password\" name=\"password\"\n         #password=\"ngModel\"/>\n         <div [hidden]=\"password.valid || password.pristine\"\n            class=\"alert alert-danger\">\n            password is required\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"alterEgo\">Email address</label>\n         <input type=\"text\" class=\"form-control\" id=\"alterEgo\"\n         [(ngModel)]=\"model.email\" name=\"alterEgo\">\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Business address</label>\n         <input type=\"text\" class=\"form-control\" id=\"businessAddr\"\n         required\n         [(ngModel)]=\"model.businessAddress\" name=\"businessAddr\"\n         #businessAddr=\"ngModel\"/>\n         <div [hidden]=\"businessAddr.valid || businessAddr.pristine\"\n            class=\"alert alert-danger\">\n            Business Address is required\n         </div>\n      </div>\n      <div  class=\"flexDiv\">\n      <div class=\"form-group flex-item-buAdd\">\n         <label for=\"name\">PIN Code</label>\n         <input type=\"text\" class=\"form-control\" id=\"pin\"\n         required\n         [(ngModel)]=\"model.pinCode\" name=\"pin\"\n         #pin=\"ngModel\"/>\n         <div [hidden]=\"pin.valid || pin.pristine\"\n            class=\"alert alert-danger\">\n            PIN Code is required\n         </div>\n      </div>\n      <div  class=\"form-group flex-item-getAdd\">\n          <button type=\"button\" class=\"btn btn-success btn-block\"\n          [disabled]=\"!model.pinCode\"\n          (click)=\"update(pin.value)\">\n          Get Location\n        </button>\n      </div>\n    </div>\n      <div *ngIf=\"showAddr && model.pinCode\" class=\"flexDiv\">\n         <div class=\"form-group flex-item\">\n            <label for=\"city\">City</label>\n            <input type=\"text\" class=\"form-control\" id=\"city\" required\n            [(ngModel)]=\"model.city\" name=\"city\" #city=\"ngModel\"/>\n            <div [hidden]=\"city.valid || city.pristine\"\n               class=\"alert alert-danger\">\n               City is required\n            </div>\n         </div>\n         <div class=\"form-group flex-item flex-item-middle\">\n            <label for=\"state\">State</label>\n            <input type=\"text\" class=\"form-control\" id=\"state\" required\n            [(ngModel)]=\"model.state\" name=\"state\" #state=\"ngModel\"/>\n            <div [hidden]=\"state.valid || state.pristine\"\n               class=\"alert alert-danger\">\n               State is required\n            </div>\n         </div>\n         <div class=\"form-group flex-item\">\n            <label for=\"country\">Country</label>\n            <input type=\"text\" class=\"form-control\" id=\"country\" required\n            [(ngModel)]=\"model.country\" name=\"country\" #country=\"ngModel\"/>\n            <div [hidden]=\"country.valid || country.pristine\"\n               class=\"alert alert-danger\">\n               Country is required\n            </div>\n         </div>\n      </div>\n      <div class=\"form-group\">\n         <label for=\"name\">Website</label>\n         <input type=\"text\" class=\"form-control\" id=\"website\"\n         required\n         [(ngModel)]=\"model.website\" name=\"website\"\n         #website=\"ngModel\"/>\n         <div [hidden]=\"website.valid || website.pristine\"\n            class=\"alert alert-danger\">\n            Website Address is required\n         </div>\n      </div>\n      <div class=\"dropdown-flex\">\n         <div class=\"form-group dropdown-category\" >\n            <label for=\"name\">Business Category</label>\n            <select name=\"state\" ngModel class=\"form-control\" id=\"category\"\n            required\n            [(ngModel)]=\"model.category\" name=\"category\"\n            #category=\"ngModel\">\n            <option value=\"\" disabled>Select Category</option>\n            <option *ngFor=\"let data of categoryInfo\" [ngValue]=\"data.id\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n         <div class=\"form-group dropdown-register\" >\n            <label for=\"name\">Registration Info</label>\n            <select name=\"reg\" ngModel class=\"form-control\" id=\"reg\"\n            required\n            [(ngModel)]=\"regInfo\" name=\"reg\"\n            #reg=\"ngModel\">\n            <option value=\"\" disabled>Registration Info</option>\n            <option *ngFor=\"let data of registerInfo\" [ngValue]=\"data\">\n            {{ data.name }}\n            </option>\n            </select>\n         </div>\n      </div>\n      <div class=\"form-group\" *ngIf='regInfo'>\n         <label for=\"name\">Enter {{regInfo.name}} Number</label>\n         <input type=\"text\" class=\"form-control\" id=\"regDetails\"\n         required\n         [(ngModel)]=\"model.regProof\" name=\"regDetails\"\n         #regDetails=\"ngModel\"/>\n         <div [hidden]=\"regDetails.valid || regDetails.pristine\"\n            class=\"alert alert-danger\">\n            Proof Id  is required\n         </div>\n      </div>\n      <button type=\"submit\" class=\"btn btn-success btn-block\" [disabled]=\"!signup.form.valid\" >{{formSubmitName}}</button>\n      </form>\n   </div>\n</div>\n<div [hidden]=\"!submitted\" class=\"alert alert-success alert-dismissible\">\n   <a href=\"#\" class=\"close\" data-dismiss=\"alert\" aria-label=\"close\" routerLink=\"/userData\" routerLinkActive=\"active\">&times;</a>\n   <strong style=\"text-align:center\">Sign Up successful!!\n   <small> <a href=\"#\" routerLink=\"/signIn\" routerLinkActive=\"active\">click here</a></small>to Sign In\n   </strong>\n</div>\n"

/***/ }),

/***/ "./src/app/signup/signup.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SignupComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__ = __webpack_require__("./node_modules/rxjs/_esm5/Rx.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




//import { google } from 'google/googleMap';
var SignupComponent = /** @class */ (function () {
    function SignupComponent(_demoService, router) {
        this._demoService = _demoService;
        this.router = router;
        this.categoryInfo = [{
                name: 'Clothing',
                id: '1'
            },
            {
                name: 'Furniture',
                id: '2'
            },
            {
                name: 'Fashion jewellery',
                id: '3'
            },
            {
                name: 'Valves',
                id: '4'
            },
            {
                name: 'Computer Hardware',
                id: '5'
            },
        ];
        this.registerInfo = [{
                name: 'PanCard',
                id: '1'
            },
            {
                name: 'Aadhar',
                id: '2'
            },
            {
                name: 'LabourId',
                id: '3'
            },
            {
                name: 'TIN',
                id: '4'
            },
            {
                name: 'RegId',
                id: '5'
            },
        ];
        this.submitted = false;
        this.showAddr = false;
        this.registrationFailed = false;
        this.formSubmitName = 'Register';
        this.regInfo = '';
        this.formTitle = 'Registration Form';
        this.model = { "companyName": "", "ownerName": "", "mobile": "", "password": "", "email": "", "businessAddress": "", "pinCode": "", "city": "", "state": "", "country": "", "website": "", "category": "", "regProof": "", "reg": this.regInfo.id };
    }
    SignupComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.newBusinessVal.subscribe(function (newBusinessVal) { return _this.addNewBusinessForm = newBusinessVal; });
        this._demoService.editBusinessDetails.subscribe(function (editBusinessDetails) { return _this.businessEditableForm = editBusinessDetails; });
        console.log(this.addNewBusinessForm);
        console.log(this.businessEditableForm);
        if (this.addNewBusinessForm) {
            this.formSubmitName = 'Add Business';
            this.formTitle = 'Add New Business';
            this.addNew = true;
        }
        else if (this.businessEditableForm) {
            console.log(this.businessEditableForm);
            this.formSubmitName = 'Submit';
            this.formTitle = this.businessEditableForm.companyName;
            this.model = this.businessEditableForm;
        }
        else { }
        console.log('newBusinessVal::' + this.addNewBusinessForm);
    };
    SignupComponent.prototype.onSubmit = function () {
        if (this.addNewBusinessForm) {
            console.log('newBusinessVal::' + this.addNewBusinessForm);
            console.log(this.model);
            console.log('addNew comp.ts');
            this.addNewBusiness(this.model);
        }
        else if (this.businessEditableForm) {
            console.log(this.model);
            console.log('edit comp.ts');
            this.editBusiness(this.model);
        }
        else {
            this.registerUser(this.model);
            console.log('register comp.ts');
            console.log(JSON.stringify(this.model));
        }
    };
    SignupComponent.prototype.update = function (value) {
        if (value != null)
            this.addressDetails(value);
    };
    SignupComponent.prototype.locDeatils = function (data) {
        if (data) {
            var addrDataArr = data.results[0].formatted_address.split(',');
            this.model['country'] = addrDataArr[addrDataArr.length - 1].trim();
            this.model['state'] = addrDataArr[addrDataArr.length - 2].trim();
            this.model['city'] = addrDataArr[addrDataArr.length - 3].trim();
            this.showAddr = true;
        }
    };
    SignupComponent.prototype.registerUser = function (dataJson) {
        var _this = this;
        this.mobileOTP = dataJson.mobile;
        this._demoService.registerUser(dataJson).subscribe(function (data) {
            console.log("Data saved successfully!");
            _this.sendOtp(_this.mobileOTP);
            return true;
        }, function (error) {
            console.error("Error saving data!");
            _this.registrationFailed = true;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.addNewBusiness = function (dataJson) {
        var _this = this;
        this._demoService.addingNewBusiness(dataJson).subscribe(function (data) {
            console.log("Data saved successfully!");
            alert('successfully added');
            _this._demoService.isNewBusiness(false);
            return true;
        }, function (error) {
            console.error("Error saving data!");
            alert('failed to add');
            _this.registrationFailed = true;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.editBusiness = function (dataJson) {
        var _this = this;
        this._demoService.editBusinessService(dataJson).subscribe(function (data) {
            console.log("Data saved successfully!");
            alert('successfully saved');
            return true;
        }, function (error) {
            console.error("Error saving data!");
            alert('failed to edit');
            _this.registrationFailed = true;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.addressDetails = function (data) {
        var _this = this;
        var JsonData = { details: data };
        this._demoService.getLocationDetails(JsonData).subscribe(function (data) {
            console.log(data);
            _this.locDeatils(data);
            return true;
        }, function (error) {
            console.error("Error fetching data!");
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Rx__["a" /* Observable */].throw(error);
        });
    };
    SignupComponent.prototype.sendOtp = function (mobileNum) {
        var _this = this;
        console.log('send otp comp.ts' + mobileNum);
        this.router.navigate(['/', 'otpVerification']);
        this._demoService.sendOtp(mobileNum).subscribe(function (data) {
            _this._demoService.changeMessage(data + 'Regi');
        }, function (error) {
        });
    };
    SignupComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-signup',
            template: __webpack_require__("./src/app/signup/signup.component.html"),
            styles: [__webpack_require__("./src/app/signup/signup.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* Router */]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/user-data/user-data.component.css":
/***/ (function(module, exports) {

module.exports = ".dropdown:hover>.dropdown-menu {\r\n  display: block;\r\n}\r\n"

/***/ }),

/***/ "./src/app/user-data/user-data.component.html":
/***/ (function(module, exports) {

module.exports = "\n<nav class=\"navbar fixed-top navbar-expand-lg navbar-light bg-light\">\n\n  <div class=\"navbar-header\">\n        <a class=\"navbar-brand\" href=\"#\"><h2>SMyData</h2></a>\n      </div>\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item dropdown\">\n        <a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">\n          profile\n        </a>\n        <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\n          <li class=\"dropdown-item\" (click)='addNewBusiness();showbusinessList = false' >Add New Business</li>\n          <li class=\"dropdown-item\" (click)='showBuList();showeditForm = false;showRegForm = false'>view my business</li>\n          <div class=\"dropdown-divider\"></div>\n          <li class=\"dropdown-item\" href=\"#\">Rewards</li>\n        </div>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<div  class=\"mt-5 pt-5 col-md-6 col-md-offset-3\" *ngIf ='showbusinessList'>\n  <h2>Business List</h2>\n<ul class=\"list-group\" >\n  <li class=\"list-group-item\" *ngFor=\"let item of businessList\" (click)='viewBusinessDetails(item)'>{{item.companyName}}</li>\n</ul>\n</div>\n\n<div class=\"mt-5 pt-5\">\n  <app-signup *ngIf='showRegForm'  id=\"formData\"></app-signup>\n</div>\n<div class=\"mt-5 pt-5\">\n  <app-signup *ngIf='showeditForm'  id=\"formData\"></app-signup>\n</div>\n"

/***/ }),

/***/ "./src/app/user-data/user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__data_service__ = __webpack_require__("./src/app/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("./node_modules/@angular/router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__ = __webpack_require__("./node_modules/ngx-cookie-service/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var UserDataComponent = /** @class */ (function () {
    function UserDataComponent(_demoService, router, cookieService) {
        this._demoService = _demoService;
        this.router = router;
        this.cookieService = cookieService;
    }
    UserDataComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._demoService.newBusinessVal.subscribe(function (newBusinessVal) { return _this.addNewBusinessForm = newBusinessVal; });
        this.showRegForm = this.addNewBusinessForm;
    };
    UserDataComponent.prototype.addNewBusiness = function () {
        this.showeditForm = false;
        this._demoService.isNewBusiness(true);
        this.showRegForm = this.addNewBusinessForm;
    };
    UserDataComponent.prototype.viewBusinessDetails = function (data) {
        this.showRegForm = false;
        this._demoService.isNewBusiness(false);
        var model = data;
        this._demoService.editBusinessData(model);
        this.showeditForm = true;
        this.showbusinessList = false;
    };
    UserDataComponent.prototype.showBuList = function () {
        var _this = this;
        this.showbusinessList = true;
        this._demoService.viewMyBusiness().subscribe(function (data) {
            console.log('showBuList::' + data);
            _this.businessList = data;
        }, function (error) {
        });
    };
    UserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-user-data',
            template: __webpack_require__("./src/app/user-data/user-data.component.html"),
            styles: [__webpack_require__("./src/app/user-data/user-data.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__data_service__["a" /* DataService */], __WEBPACK_IMPORTED_MODULE_2__angular_router__["a" /* Router */], __WEBPACK_IMPORTED_MODULE_3_ngx_cookie_service__["a" /* CookieService */]])
    ], UserDataComponent);
    return UserDataComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "./src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("./node_modules/@angular/core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("./node_modules/@angular/platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("./src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("./src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map