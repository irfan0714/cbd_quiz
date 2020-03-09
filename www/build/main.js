webpackJsonp([3],{

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BiodataPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__questions_questions__ = __webpack_require__(105);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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







var BiodataPage = (function () {
    function BiodataPage(postPvdr, navCtrl, toastCtrl, http, storage, loadingCtrl, navParams) {
        this.postPvdr = postPvdr;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.storage = storage;
        this.loadingCtrl = loadingCtrl;
        this.navParams = navParams;
        this.token = '37105c388133e2a6ba04dfa2568307a6';
        this.nama = '';
        this.no_telp = '';
    }
    BiodataPage.prototype.presentLoading = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = this;
                        return [4 /*yield*/, this.loadingCtrl.create({
                                content: "",
                            })];
                    case 1:
                        _a.loader = _b.sent();
                        return [4 /*yield*/, this.loader.present()];
                    case 2: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    BiodataPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.presentLoading();
        var body = {
            'token': this.token,
            'action': 'getEventOn'
        };
        this.postPvdr.postData(body, 'read').subscribe(function (res) {
            if (res.response == 200 && res.message == 'success') {
                _this.storage.set('EventID', res.data.EventID);
                _this.EventName = res.data.EventName;
            }
            else {
                _this.presentToast('Failed');
            }
            _this.loader.dismiss();
        }, function (error) {
            _this.presentToast("Connection Failed, Try again.");
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
            _this.loader.dismiss();
        });
    };
    BiodataPage.prototype.pageHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    BiodataPage.prototype.submit = function () {
        var _this = this;
        if (this.nama == '') {
            this.presentToast('Silahkan isi nama !');
        }
        else if (this.no_telp == '') {
            this.presentToast('Silahkan isi No. Telepon !');
        }
        else {
            this.presentLoading();
            this.storage.get('EventID').then(function (res) {
                var body = {
                    'token': _this.token,
                    'action': 'addParticipant',
                    'nama': _this.nama,
                    'no_telp': _this.no_telp,
                    'event_id': res
                };
                _this.postPvdr.postData(body, 'read').subscribe(function (res) {
                    if (res.response == 200 && res.message == 'success') {
                        _this.storage.set('HeaderID', res.data.HeaderID);
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__questions_questions__["a" /* QuestionsPage */]);
                    }
                    else {
                        _this.presentToast('Failed');
                    }
                    _this.loader.dismiss();
                }, function (error) {
                    _this.presentToast("Connection Failed, Try again.");
                    _this.loader.dismiss();
                });
            });
        }
    };
    BiodataPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    BiodataPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-biodata',template:/*ion-inline-start:"C:\ionic-project\quiz\src\pages\biodata\biodata.html"*/`<div color="primary" class="header-custom">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10> <ion-icon ios="ios-flask-outline" md="md-flask"></ion-icon> {{ EventName }}</ion-col>\n      <ion-col col-2 style="text-align:right;"><ion-icon (click)="pageHome()" ios="ios-close-outline" md="md-close"></ion-icon></ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-content padding class="bg-content-custom ">\n  <ion-grid style="padding-top:70px;" >\n    <ion-row>\n      <ion-col col-12  class="text-center">\n        <input type="text" class="input-custom" placeholder="Nama" [(ngModel)]="nama">\n      </ion-col>\n    </ion-row>\n    <ion-row>\n      <ion-col col-12  class="text-center">\n        <input type="text" class="input-custom" placeholder="No. Telepon" [(ngModel)]="no_telp">\n      </ion-col>\n    </ion-row> \n    <ion-row>\n      <ion-col col-12  class="text-center">\n        <button  ion-button color="secondary" (click)="submit()" class="btn-custom-top">Mulai</button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n</ion-content>\n<!-- test -->\n<ion-footer>\n    <ion-grid>\n      <ion-row  class="btn-footer-custom">\n        <ion-col col-12 class="text-center">\n            <button ion-button color="secondary" (click)="submit()"   class="btn-custom-buttom">Mulai</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer>\n`/*ion-inline-end:"C:\ionic-project\quiz\src\pages\biodata\biodata.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], BiodataPage);
    return BiodataPage;
}());

//# sourceMappingURL=biodata.js.map

/***/ }),

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_post_provider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__congrat_congrat__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var QuestionsPage = (function () {
    function QuestionsPage(postPvdr, navCtrl, toastCtrl, http, storage, navParams) {
        this.postPvdr = postPvdr;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.http = http;
        this.storage = storage;
        this.navParams = navParams;
        this.token = '37105c388133e2a6ba04dfa2568307a6';
        this.HeaderID = "";
        this.QuestionHeaderID = "";
    }
    QuestionsPage.prototype.ionViewDidLoad = function () {
        this.getData('1');
        this.ChooseOption = 'A';
    };
    QuestionsPage.prototype.pageHome = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    QuestionsPage.prototype.submit = function (antrian, totalAntrian) {
        var _this = this;
        if (antrian == totalAntrian) {
            this.storage.get('HeaderID').then(function (val1) {
                _this.HeaderID = val1;
                _this.storage.get('QuestionHeaderID').then(function (val2) {
                    _this.QuestionHeaderID = val2;
                    var body = {
                        'token': _this.token,
                        'action': 'addAnswerEnd',
                        'header_id': _this.HeaderID,
                        'question_header_id': _this.QuestionHeaderID,
                        'key_answer': _this.ChooseOption
                    };
                    _this.postPvdr.postData(body, 'read').subscribe(function (res) {
                        if (res.response == 200 && res.message == 'success') {
                            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__congrat_congrat__["a" /* CongratPage */], res.data);
                        }
                        else {
                            _this.presentToast('Failed, Try again.');
                        }
                    }, function (error) {
                        _this.presentToast("Connection Failed, Try again.");
                    });
                });
            });
        }
        else {
            this.storage.get('HeaderID').then(function (val1) {
                _this.HeaderID = val1;
                _this.storage.get('QuestionHeaderID').then(function (val2) {
                    _this.QuestionHeaderID = val2;
                    var body = {
                        'token': _this.token,
                        'action': 'addAnswer',
                        'header_id': _this.HeaderID,
                        'question_header_id': _this.QuestionHeaderID,
                        'key_answer': _this.ChooseOption
                    };
                    _this.postPvdr.postData(body, 'read').subscribe(function (res) {
                        if (res.response == 200 && res.message == 'success') {
                            _this.nomor = parseInt(antrian) + 1;
                            _this.getData(_this.nomor);
                        }
                        else {
                            _this.presentToast("Connection Failed, Try again.");
                        }
                    }, function (error) {
                        _this.presentToast("Connection Failed, Try again.");
                    });
                });
            });
        }
    };
    QuestionsPage.prototype.getData = function (antrian) {
        var _this = this;
        var body = {
            'token': this.token,
            'action': 'getQuestion',
            'antrian': antrian
        };
        this.postPvdr.postData(body, 'read').subscribe(function (res) {
            if (res.response == 200 && res.message == 'success') {
                _this.storage.set('QuestionHeaderID', res.data.QuestionHeader[0]['question_header_id']);
                _this.EventName = res.data.EventName;
                _this.TotalQuestion = res.data.QuestionTotal;
                _this.NoQuestion = res.data.QuestionHeader[0]['antrian'];
                _this.Question = res.data.QuestionHeader[0]['question'];
                _this.ButtonNext = (res.data.QuestionHeader[0]['antrian'] == res.data.QuestionTotal) ? 'SUBMIT' : 'NEXT';
                _this.Answers = [];
                for (var i = 0; i < res.data.QuestionDetail.length; i++) {
                    _this.Answers.push({
                        KeyAnswer: res.data.QuestionDetail[i]['key_answer'],
                        DescriptionAnswer: res.data.QuestionDetail[i]['description_answer']
                    });
                }
            }
            else {
                _this.presentToast('Failed');
            }
        }, function (error) {
            _this.presentToast("Connection Failed, Try again.");
        });
    };
    QuestionsPage.prototype.getChooseOption = function (option) {
        this.ChooseOption = option;
    };
    QuestionsPage.prototype.presentToast = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    };
    QuestionsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-questions',template:/*ion-inline-start:"C:\ionic-project\quiz\src\pages\questions\questions.html"*/`<div color="primary" class="header-custom">\n    <ion-grid>\n      <ion-row>\n        <ion-col col-10> <ion-icon ios="ios-flask-outline" md="md-flask"></ion-icon> {{ EventName }}</ion-col>\n        <ion-col col-2 style="text-align:right;"><ion-icon (click)="pageHome()" ios="ios-close-outline" md="md-close"></ion-icon></ion-col>\n      </ion-row>\n    </ion-grid>\n  </div>\n  \n   <!-- n -->\n  <ion-content padding class="bg-content-custom">\n    <ion-grid class="grid-custom">\n      <ion-row>\n        <ion-col col-12 class="color-custom">\n          Question : {{ NoQuestion }}/{{ TotalQuestion }}\n          <hr class="hr-custom"> \n        </ion-col>\n      </ion-row> \n      <ion-row>\n        <ion-col col-12 class="color-custom">\n          {{ NoQuestion }}. {{ Question }}\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12 class="color-custom">\n          <ul>\n              <li *ngFor=" let answer of Answers">\n                <input type="radio" [checked]="answer.KeyAnswer ==\'A\'" name="1" value="{{ answer.KeyAnswer }}" (click)="getChooseOption(answer.KeyAnswer)">\n                <label>{{ answer.DescriptionAnswer }} </label>\n                <div class="bullet">\n                  <div class="line zero"></div>\n                  <div class="line one"></div>\n                  <div class="line two"></div>\n                  <div class="line three"></div>\n                  <div class="line four"></div>\n                  <div class="line five"></div>\n                  <div class="line six"></div>\n                  <div class="line seven"></div>\n                </div>\n              </li>\n            </ul>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n            <button ion-button color="secondary" (click)="submit(NoQuestion,TotalQuestion)"  full class="btn-custom-top">{{ ButtonNext }}</button>\n        </ion-col>\n      </ion-row>\n      <ion-row>\n        <ion-col col-12>\n            <input type="hidden" value="{{ ChooseOption }}" [(ngModel)]="ChooseOption">\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-content>\n  \n  <ion-footer>\n    <ion-grid>\n      <ion-row class="btn-footer-custom">\n        <ion-col col-12 class="text-center">\n            <button ion-button color="secondary" (click)="submit(NoQuestion,TotalQuestion)"  full class="btn-custom-buttom">{{ ButtonNext }}</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n  </ion-footer>\n  `/*ion-inline-end:"C:\ionic-project\quiz\src\pages\questions\questions.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3__providers_post_provider__["a" /* PostProvider */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* ToastController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_Storage__["b" /* Storage */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], QuestionsPage);
    return QuestionsPage;
}());

//# sourceMappingURL=questions.js.map

/***/ }),

/***/ 106:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CongratPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var CongratPage = (function () {
    function CongratPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.Score = navParams.get('Score');
    }
    CongratPage.prototype.ionViewDidLoad = function () {
        console.log(this.Score);
    };
    CongratPage.prototype.close = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__home_home__["a" /* HomePage */]);
    };
    CongratPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-congrat',template:/*ion-inline-start:"C:\ionic-project\quiz\src\pages\congrat\congrat.html"*/`<div color="primary" class="header-custom">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-10></ion-col>\n      <ion-col col-2 style="text-align:right;"><ion-icon (click)="close()" ios="ios-close-outline" md="md-close"></ion-icon></ion-col>\n    </ion-row>\n  </ion-grid>\n</div>\n\n<ion-content padding class="bg-content-custom">\n  <div class="box-congrat text-center ">\n    <img src="assets/imgs/congrats.png" ><br>\n    <h5><b>Congrats!</b></h5>\n    <h3 class="score"><b>{{ Score }}% Score</b></h3>\n    <p><b>Quiz complete successfully.</b></p>\n\n  </div>\n</ion-content>\n<!-- <ion-footer>\n    <ion-grid>\n      <ion-row  class="btn-footer-custom">\n        <ion-col col-12 class="text-center">\n            <button ion-button color="secondary" (click)="close()"  full class="btn-custom">Close</button>\n        </ion-col>\n      </ion-row>\n    </ion-grid>\n</ion-footer> -->\n`/*ion-inline-end:"C:\ionic-project\quiz\src\pages\congrat\congrat.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavParams */]])
    ], CongratPage);
    return CongratPage;
}());

//# sourceMappingURL=congrat.js.map

/***/ }),

/***/ 116:
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
webpackEmptyAsyncContext.id = 116;

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/biodata/biodata.module": [
		281,
		2
	],
	"../pages/congrat/congrat.module": [
		282,
		1
	],
	"../pages/questions/questions.module": [
		283,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 158;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 202:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(226);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 226:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__providers_post_provider__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_Storage__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_home_home__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_biodata_biodata__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_congrat_congrat__ = __webpack_require__(106);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_biodata_biodata__["a" /* BiodataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_congrat_congrat__["a" /* CongratPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_Storage__["a" /* IonicStorageModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/biodata/biodata.module#BiodataPageModule', name: 'BiodataPage', segment: 'biodata', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/congrat/congrat.module#CongratPageModule', name: 'CongratPage', segment: 'congrat', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/questions/questions.module#QuestionsPageModule', name: 'QuestionsPage', segment: 'questions', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_9__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_10__pages_biodata_biodata__["a" /* BiodataPage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_questions_questions__["a" /* QuestionsPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_congrat_congrat__["a" /* CongratPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_6__providers_post_provider__["a" /* PostProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 280:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ionic-project\quiz\src\app\app.html"*/`<ion-nav [root]="rootPage"></ion-nav>\n`/*ion-inline-end:"C:\ionic-project\quiz\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 40:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__biodata_biodata__ = __webpack_require__(104);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, actionSheetCtrl, alertCtrl) {
        this.navCtrl = navCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertCtrl = alertCtrl;
        this.press = 0;
    }
    HomePage.prototype.pageBiodata = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__biodata_biodata__["a" /* BiodataPage */]);
    };
    HomePage.prototype.pressEvent = function (e) {
        this.press++;
        if (this.press == 5) {
            this.showPrompt();
            this.press = 0;
        }
    };
    HomePage.prototype.showPrompt = function () {
        var prompt = this.alertCtrl.create({
            title: 'Admin',
            inputs: [
                {
                    name: 'Password',
                    type: 'password',
                    placeholder: 'Password'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Login',
                    handler: function (data) {
                        console.log('Saved clicked');
                    }
                }
            ]
        });
        prompt.present();
    };
    HomePage.prototype.adminMenu = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: 'Menu Admin',
            buttons: [
                {
                    text: 'Destructive',
                    role: 'destructive',
                    handler: function () {
                        _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__biodata_biodata__["a" /* BiodataPage */]);
                    }
                }, {
                    text: 'Archive',
                    handler: function () {
                        console.log('Archive clicked');
                    }
                }, {
                    text: 'Close',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ionic-project\quiz\src\pages\home\home.html"*/`<ion-content padding class="bg-content-custom" (tap)="pressEvent($event)">\n  <ion-fab center middle> \n    <button ion-fab large (click)="pageBiodata()"  color="secondary" >MULAI</button>\n  </ion-fab>\n</ion-content>\n<!-- test -->\n`/*ion-inline-end:"C:\ionic-project\quiz\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _c || Object])
    ], HomePage);
    return HomePage;
    var _a, _b, _c;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PostProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(251);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
//provider api
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PostProvider = (function () {
    // server: string = "http://139.255.39.26:92/mobile_api/index.php/quiz/"
    // server: string = "http://192.168.1.20/mobile_api/index.php/quiz/"
    function PostProvider(http) {
        this.http = http;
        this.server = "http://160.202.43.61:7878/mobile_api/index.php/quiz/";
    }
    PostProvider.prototype.postData = function (body, file) {
        var type = "text/plain";
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Headers */]({ 'Content-Type': type });
        var options = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["d" /* RequestOptions */]({ headers: headers });
        return this.http.post(this.server + file, JSON.stringify(body), options)
            .map(function (res) { return res.json(); });
    };
    PostProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]])
    ], PostProvider);
    return PostProvider;
}());

//# sourceMappingURL=post-provider.js.map

/***/ })

},[202]);
//# sourceMappingURL=main.js.map