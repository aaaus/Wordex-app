webpackJsonp([5],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_wordsbase__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__model_wordsbase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__model_wordsbase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Word__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__model_Word___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__model_Word__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


//import {  homedir} from 'os';


var HomePage = /** @class */ (function () {
    function HomePage(appCtrl, navCtrl, alertCtrl, loadCtrl) {
        this.appCtrl = appCtrl;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.loadCtrl = loadCtrl;
        this.toLearnAmount = 0;
        this.knownAmount = 0;
        this.toRepeatAmount = 0;
        this.learnedAmount = 0;
    }
    HomePage_1 = HomePage;
    HomePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.refreshWords();
        if (+localStorage.getItem("words_imported") == 0) {
            this.importWords();
            localStorage.setItem("words_imported", "1");
        }
        var counter = +localStorage.getItem("rateCounter");
        var rateBool = localStorage.getItem("rateBool");
        if (counter >= 20 && rateBool != "true")
            this.alertCtrl.create({
                title: 'Оцените Wordex',
                subTitle: 'Вы выучили более 20 слов, не желаете ли оценить приложение в магазине?',
                buttons: [
                    {
                        text: 'Да',
                        handler: function (data) {
                            localStorage.setItem("rateBool", "true");
                            _this.alertCtrl.create({
                                title: '¯\\_(ツ)_/¯',
                                subTitle: 'Вам повезло, никакой ссылки еще нет',
                                buttons: ['OK']
                            }).present();
                        }
                    },
                    {
                        text: 'Нет',
                        handler: function (data) {
                            localStorage.setItem("rateBool", "true");
                        }
                    }
                ]
            }).present();
    };
    HomePage.prototype.refreshWords = function () {
        var _this = this;
        var loading = this.loadCtrl.create({
            content: 'Пожалуйста, подождите'
        });
        loading.present().then(function () {
            try {
                _this.toLearnAmount = JSON.parse(localStorage.getItem("toLearnWords")).length;
                _this.knownAmount = JSON.parse(localStorage.getItem("knownWords")).length;
                _this.toRepeatAmount = JSON.parse(localStorage.getItem("toRepeatWords")).length;
                _this.learnedAmount = JSON.parse(localStorage.getItem("learnedWords")).length;
            }
            catch (err) { }
        }).then(function () {
            loading.dismiss();
        });
    };
    HomePage.prototype.ls = function (key) {
        var key1 = localStorage.getItem(key);
        return key1;
    };
    HomePage.prototype.refreshPage = function () {
        this.navCtrl.setRoot(HomePage_1);
    };
    HomePage.prototype.importWords = function () {
        localStorage.setItem("toRepeatWords", "[]");
        localStorage.setItem("knownWords", "[]");
        localStorage.setItem("learnedWords", "[]");
        var data = __WEBPACK_IMPORTED_MODULE_2__model_wordsbase___default.a.split("\n");
        var _words = [];
        for (var i = 0; i < data.length; i++) {
            var en = data[i].split(" -- ")[0];
            var ru = data[i].split(" -- ")[1];
            _words.unshift(new __WEBPACK_IMPORTED_MODULE_3__model_Word___default.a(ru, en));
        }
        localStorage.setItem("toLearnWords", JSON.stringify(_words));
    };
    HomePage.prototype.navigateTo = function (pageName) {
        this.navCtrl.push(pageName);
    };
    HomePage.prototype.viewKnownWords = function (words) {
        this.appCtrl.getRootNav().push('WordsViewerPage', words);
    };
    HomePage = HomePage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\Users\MineDan\Desktop\ionic\Wordex\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-buttons start>\n      <button ion-button menuToggle>\n        <ion-icon name="menu" style="color: #2cd8d7;"></ion-icon>\n      </button>\n    </ion-buttons>\n\n    <ion-buttons end>\n      <button ion-button style="font-size: 2.7rem;" (click)="refreshPage();">\n        <ion-icon name="ios-refresh-outline" style="color: #2cd8d7;"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-title>\n      <span class="mono w">WORDEX</span>\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content padding id="mainScreen">\n\n  <ion-card class="c" text-center (click)="viewKnownWords(\'knownWords\');">\n    <ion-card-header>\n      <span class="w b fz-25 monts">Известные слова:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ knownAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="c" text-center (click)="viewKnownWords(\'learnedWords\');">\n    <ion-card-header>\n      <span class="w b fz-25 monts">Выученные слова:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ learnedAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="c" text-center (click)="viewKnownWords(\'toRepeatWords\');">\n    <ion-card-header>\n      <span class="w b fz-25 monts">Для повторения:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ toRepeatAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card class="c" text-center>\n    <ion-card-header>\n      <span class="w b fz-25 monts">Для изучения:</span>\n    </ion-card-header>\n\n    <ion-card-content>\n      <span class="w b fz-40 eina">{{ toLearnAmount }}</span>\n    </ion-card-content>\n  </ion-card>\n\n  <hr>\n\n  <ion-grid text-center>\n    <ion-row>\n      <ion-col>\n        <button ion-button round outline block style="border-width: 2px;" (click)="navigateTo(\'LearnScreenPage\');" class="monts">Выучить новые</button>\n      </ion-col>\n      <ion-col>\n        <button ion-button color="light" block round outline style="border-width: 2px;" (click)="viewKnownWords(\'toRepeatWords\');" class="monts">Повторить старые</button>\n      </ion-col>\n    </ion-row>\n    <button ion-button color="secondary" round outline style="border-width: 2px;" (click)="navigateTo(\'WordTestPage\');" class="monts">Пройти тест</button>\n  </ion-grid>\n\n</ion-content>\n'/*ion-inline-end:"C:\Users\MineDan\Desktop\ionic\Wordex\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* AlertController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* LoadingController */]])
    ], HomePage);
    return HomePage;
    var HomePage_1;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 110:
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
webpackEmptyAsyncContext.id = 110;

/***/ }),

/***/ 151:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/help-screen/help-screen.module": [
		272,
		4
	],
	"../pages/learn-screen/learn-screen.module": [
		274,
		3
	],
	"../pages/preview-exact-word/preview-exact-word.module": [
		275,
		2
	],
	"../pages/word-test/word-test.module": [
		273,
		1
	],
	"../pages/words-viewer/words-viewer.module": [
		276,
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
webpackAsyncContext.id = 151;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 195:
/***/ (function(module, exports) {

class Word
{
    constructor(ruWord, enWord)
    {
        this.ruWord = ruWord;
        this.enWord = enWord;
    }
}

module.exports = Word;

/***/ }),

/***/ 196:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(219);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 219:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__ = __webpack_require__(194);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                    mode: 'ios'
                }, {
                    links: [
                        { loadChildren: '../pages/help-screen/help-screen.module#HelpScreenPageModule', name: 'HelpScreenPage', segment: 'help-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/word-test/word-test.module#WordTestPageModule', name: 'WordTestPage', segment: 'word-test', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/learn-screen/learn-screen.module#LearnScreenPageModule', name: 'LearnScreenPage', segment: 'learn-screen', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/preview-exact-word/preview-exact-word.module#PreviewExactWordPageModule', name: 'PreviewExactWordPage', segment: 'preview-exact-word', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/words-viewer/words-viewer.module#WordsViewerPageModule', name: 'WordsViewerPage', segment: 'words-viewer', priority: 'low', defaultHistory: [] }
                    ]
                })
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_5__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_text_to_speech__["a" /* TextToSpeech */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 253:
/***/ (function(module, exports) {

var data = `a -- неопределенный артикль
abandon -- отказываться, покидать, прекращать
abandoned -- заброшенный 
abate -- уменьшить
abbey -- Аббатство 
abbreviation -- сокращение
ABC -- алфавит, азбука, букварь, начатки, основы
abide -- ждать, терпеть
ability -- способность ( не от слова capable)
able -- способный 
aboard -- на корабле, на борту, в вагоне
abode -- местопребывание, жилище (не lodge)
abominable -- отвратительный, противный
about -- о
above -- над, выше, наверху
abroad -- за границей
abrupt -- резкий, внезапный, крутой, обрывистый
abruptly -- внезапно, резко, грубо 
absence -- отсутствие
absent -- отсутствующий
absolute -- совершенный, чистый
absolutely -- абсолютно, совершенно
absorb -- поглощать, всасывать, впитывать
absorbed -- увлечённый чем-либо 
absorption -- Поглощение 
abstract -- отвлеченный, абстрактный
absurd -- нелепый
absurdity -- нелепость
abundance -- богатство, изобилие
abundant -- обильный
acacia -- акация
accent -- подчеркивать, произносить
accept -- принимать
accepted -- принятый
access -- доступ, подход, доступность
accessible -- доступный
accident -- несчастный случай
accidental -- случайный, нечаянный
accidentally -- случайно, нечаянно
acclaim -- провозглашать
accommodate -- согласовывать, улаживать, примирять
accommodation -- удобство, согласование
accompany -- сопровождать
accompanying -- сопровождающий
accomplice -- сообщник
accomplish -- выполнять
accomplished -- Выполненный 
accord -- согласие, гармония
accordance -- согласованность, согласие, соответствие
according -- согласно -ing
accordingly -- согласно
account -- счет, оценка, причина
accounts -- Счета 
accuracy -- точность, аккуратность
accurate -- точный, правильный
accusation -- обвинение
accuse -- обвинять
accused -- Обвиняемый 
accustom -- приучать
accustomed -- Приученный 
ache -- боль a-
achieve -- достигать, успешно выполнять a-
achievement -- выполнение, достижение
acid -- кислый, кислота (не sour)
acknowledge -- признавать, вознаграждать
acknowledged -- Подтвержденный 
acorn -- желудь
acquaintance -- знакомство, знакомый
acquire -- приобретать
acquired -- приобретённый 
acquisition -- приобретение
acquit -- оправдывать
across -- через, поперек
act -- акт, дело, действовать
acted -- Действовал 
acting -- временно исполняющий обязанности, игра
action -- действие, поступок
active -- активный
actively -- активно, деятельно
activity -- деятельность, активность
actor -- актер
actress -- актриса
acts -- Действия 
actual -- текущий, современный
actually -- фактически, в настоящее время
acute -- острый, проницательный
adapt -- приспособить, переделать
adapted -- Приспособленный 
add -- добавлять, прибавлять
addition -- прибавление, сложение
additional -- дополнительный
additions -- Дополнения 
address -- адрес, обращение
adept -- знаток, сторонник
adequate -- достаточный, соответствующий
adhere -- прилипать, приставать ( to) , приклеиваться, хвататься
adjoining -- Смежный -ing 
adjust -- регулировать, приспосабливать
adjustment -- регулирование *
administration -- администрация
administrator -- администратор
admirable -- замечательный (не wonderful)
admiral -- адмирал
admiration -- восхищение
admire -- восхищаться
admired -- восхищался (от admire)
admiring -- Восхищающийся -ing 
admission -- допуск, вход, прием
admit -- допускать
admittance -- впуск, доступ a-ce
admitted -- Признанный(допущенный) 
adopt -- принимать, присваивать
adopted -- Принятый 
adore -- обожать
adorn -- украшать
adrift -- по течению, по воле волн
ads -- реклама
adult -- взрослый
adults -- взрослые (от adult)
advance -- продвижение вперед, продвигать
advanced -- передовой
advancing -- Продвижение -ing 
advantage -- преимущество, выгода
advantages -- Преимущества 
adventure -- рисковать, отваживаться
adventurer -- искатель приключений, авантюрист
adventurous -- отважный, предприимчивый (не undertaking)
adversary -- противник
adversity -- бедствие, несчастье
advertise -- помещать объявление, рекламировать
advertisement -- объявление, реклама
advice -- cовет
advise -- советовать
advised -- Рекомендованный 
advocate -- отстаивать, защищать
aerial -- воздушный, антенна
aeroplane -- самолет
afar -- далеко, вдали
affair -- дело, занятие
affairs -- делишки 
affect -- влиять, трогать, вредить
affected -- пораженный
affection -- привязанность, любовь
affectionate -- любящий, нежный
affectionately -- Нежно 
affections -- Привязанности 
affirmative -- утвердительный
afford -- позволить себе
afforded -- Предоставляемый *f- 
affray -- пугать
afore -- перед
afraid -- испуганный
afresh -- снова, опять
after -- после
afternoon -- время после полудня
afterward -- Позже 
afterwards -- впоследствии, позже
again -- снова
against -- против
age -- век, возраст
aged -- старый, в возрасте
agency -- агентство
agent -- деятель, исполнитель
aggregate -- совокупность
aggregated -- Соединенный 
aggregation -- Скопление 
agitated -- Взволнованный *g- (не thrilled) 
agitation -- агитация
agony -- мучение, сильная боль
agree -- соглашаться
agreeable -- приятный, милый
agreed -- согласился (от agree)
agreement -- согласие, соглашение
agricultural -- сельскохозяйственный
agriculture -- сельское хозяйство
aha -- Ага 
ahead -- вперед
aid -- помощь
aileen -- Эйлин 
ailing -- больной -ing
aim -- целиться, цель
air -- воздушный, авиационный, проветривать
airborne -- авиационный
airliner -- лайнер
airport -- аэропорт
ajar -- приоткрытый
alarm -- тревога, (вс)тревожить (alarm)
alas -- Увы 
albert -- Альберт 
album -- альбом
alec -- Алек 
alert -- бдительный, проворный
alexis -- Алексис 
alfred -- Альфред 
alias -- Псевдоним 
aliases -- Псевдонимы 
alibi -- Алиби 
alibis -- Алиби 
alight -- выходить, спускаться
alignment -- выравнивание, линия
alike -- похожий
alive -- живой
all -- все, весь
allegiance -- преданность, верность
allen -- Аллен 
alley -- аллея, переулок
allied -- союзный, родственный
allocate -- предназначать
allocation -- распределение, назначение
allow -- разрешать, разрешить
allowance -- дозволение, допущение (allowance)
allowing -- Разрешение -ing 
allows -- Позволяет 
alloy -- примесь, сплав
alluded -- Ссылался 
ally -- союзник, соединять
almond -- миндаль, миндалина
almost -- почти, едва не (a-)
aloft -- наверху, наверх
alone -- один, одинокий
along -- вдоль
alongside -- рядом
aloud -- громко, вслух
alphabet -- алфавит, азбука
already -- уже
also -- тоже, также
alter -- изменять
alteration -- изменение, перемена
altered -- Измененный (не changed) 
alternate -- переменный
alternative -- альтернатива, выбор
although -- хотя
altitude -- высота (не highness)
altogether -- всего, в общем
always -- всегда
am -- (я) есть (от be)
amateur -- любитель
amazed -- изумлённый, поражённый (не wonder) 
amazement -- удивление, изумление
amazing -- Удивительный -ing 
amber -- янтарь, янтарный
ambiguous -- двусмысленный
ambition -- честолюбие, желание
ambitious -- честолюбивый
ambulance -- полевой госпиталь, карета скорой помощи
amends -- возмещение
amiable -- любезный, милый
amid -- между, посреди, среди 
ammonia -- аммиак
ammunition -- боеприпасы
among -- среди (не midst)
amongst -- Среди 
amorous -- влюбленный, любовный
amount -- количество, сумма, составлять (сумму)
ample -- обширный, просторный
amuse -- забавлять, развлекать
amusement -- забава, развлечение
amusing -- забавный, интересный
amy -- Эми 
an -- неопределенный артикль (перед гласным звуком)
ana -- сборник изречений
analogous -- Аналогичный 
analyse -- анализировать, разбирать
analysis -- анализ
ancestor -- предок
anchor -- якорь
ancient -- древний
and -- и, а
anew -- снова, заново
angel -- ангел
angela -- Анжела 
angeles -- Анхелес 
anger -- гнев, злость
angle -- угол, точка зрения
angles -- Углы 
angrily -- сердито 
angry -- сердитый
anguish -- страдание
animal -- животное
animated -- оживленный, анимированный
ankle -- щиколотка, лодыжка
anna -- Анна 
anne -- Энн 
annihilation -- уничтожение
anniversary -- годовщина
announce -- объявлять
announced -- объявлял, объявленный (от announce)
announcement -- объявление, сообщение
annoy -- досаждать, надоедать
annoyance -- Раздражение 
annual -- годовой, ежегодный, ежегодник (не yearly)
annually -- ежегодно
anomaly -- аномалия
anonymous -- анонимный
another -- еще один, другой
answer -- ответ, отвечать
answered -- ответил (от answer)
ant -- муравей
antarctic -- антарктический
anthony -- Энтони 
anticipate -- предвидеть
anticipated -- Ожидаемый 
antidote -- противоядие
antique -- древний (не ancient)
antiquity -- древность
antony -- Энтони 
anvil -- наковальня
anxiety -- тревога, беспокойство
anxious -- беспокойный *n-
anxiously -- тревожно 
anyhow -- во всяком случае
anyone -- любой, всякий( утв предлож), кто-нибудь, никто (в отриц предлож) 
anyway -- во что бы то ни стало
anywhere -- где-нибудь 
apart -- в стороне, отдельно (не aside)
apartment -- квартира
ape -- обезьяна (человекообразная)
apes -- Обезьяны 
apex -- верхушка, вершина (не peak)
apiece -- за штуку, поштучно
apologies -- извинения (от apology)
apologize -- извиняться
apology -- извинение
app -- Приложение 
appalling -- ужасный, плачевный -ing
apparatus -- аппарат
apparel -- одевать, наряжать
apparent -- видимый, очевидный
apparently -- явно, очевидно
appeal -- апелляция, апеллировать (юр.), обращаться
appear -- появляться
appearance -- появление, внешность
appeared -- появился (от appear)
appears -- Появляется 
appendix -- приложение, аппендикс (анат.)
appetite -- аппетит, охота, желание
applause -- аплодисменты
apple -- яблоко
apples -- яблоки (от apple)
applet -- Апплет 
application -- заявление, применение
applications -- Заявления(применения) 
applied -- прикладной
apply -- обращаться, применять
appointed -- Назначенный 
appointment -- условленная встреча *pp*...
appreciate -- оценивать
approach -- приближаться, подступ
approbation -- одобрение (не approvement)
appropriate -- подходящий, соответствующий
approval -- одобрение
approve -- одобрять
approximate -- приблизительный
approximately -- приблизительно
apricot -- абрикос
April -- апрель
apron -- фартук
apt -- подходящий, уместный, склонный
arable -- пахотный
arbitrary -- произвольный
arbour -- беседка, дерево, ось
arc -- дуга (мат.)
arcadia -- Аркадия 
arch -- арка, дуга
archaic -- устарелый, архаический
arched -- Арочный 
archie -- Арчи 
archipelago -- Архипелаг 
architect -- архитектор
architecture -- архитектура
arctic -- полярный, арктический
ardent -- пылкий
ardour -- жар, пыл, рвение
arduous -- тяжелый, напряженный
are -- есть (от be)
area -- площадь, район
argue -- спорить
argument -- спор
arguments -- Аргументы(споры) 
arid -- сухой, засушливый
arise -- возникать, появляться
arithmetic -- арифметика
arm -- рука
armament -- вооружение
armed -- вооруженный
armies -- Армии 
armour -- броня
arms -- оружие
army -- армия
arose -- возник, появился 
around -- вокруг, по
arouse -- будить, пробуждать
aroused -- разбуженный 
arrange -- устраивать, договариваться
arrangement -- договоренность
arrangements -- Меры (не measurements) 
array -- массив, множество, наряжать, украшать
arrest -- арестовывать, арест
arrested -- Арестованный 
arrival -- прибытие
arrive -- приезжать
arrived -- приехал, прибыл (от arrive)
arriving -- прибывающий (-ing)
arrow -- стрела
arson -- поджог
art -- искусство
artful -- хитрый, ловкий
article -- статья, предмет, изделие
articles -- предметы (от article)
artificial -- искусственный
artillery -- артиллерия
artist -- художник
artistic -- художественный
arts -- Искусства 
as -- как, так, в то время как
asa -- Аса 
ascent -- восхождение, подъем a-
ascertain -- установить, удостовериться
ascertained -- Установленный 
ash -- ясень
ashamed -- пристыженный 
ashes -- Пепел 
ashore -- на берег
asia -- Азия 
aside -- в сторону
ask -- просить, спрашивать
asked -- просил, требовал (от ask)
asking -- спрашивающий, просящий
asks -- спрашивает (от ask)
asleep -- спящий (не sleepy)
aspect -- взгляд, точка зрения
ass -- осел (библ.)
assassination -- убийство
assault -- нападать, нападение
assemble -- созывать
assembled -- Собранный 
assembly -- собрание, ассамблея
asserted -- Утвержденный (не attested) 
asset -- имущество
assign -- назначать
assigned -- Назначенный 
assignment -- назначение
assist -- помочь, помогать
assistance -- помощь
assistant -- помощник
assisted -- Помогал 
associate -- соединять, присоединять
association -- ассоциация, соединение
assortment -- выбор, ассортимент
assume -- принимать на себя
assumed -- Принятый (не adopted) 
assumption -- предположение
assurance -- заверение, уверенность
assure -- уверять, обеспечивать
assured -- уверенный, застрахованный 
asterisk -- звездочка
astonished -- удивленный 
astonishing -- Удивительный -ing 
astonishment -- удивление, изумление
astronomy -- астрономия
at -- в, у
ate -- ел, съел (от eat)
athlete -- спортсмен, атлет
athletics -- атлетика
athwart -- через, вопреки (не through)
atlas -- атлас
atmosphere -- атмосфера
atmospheric -- атмосферный
atom -- атом
attach -- придавать
attached -- Приложенный (не embedded) 
attachment -- привязанность, прикрепление
attack -- нападение, наступать
attacked -- Атакованный 
attacks -- Нападения 
attempt -- пробовать, пытаться, попытка
attempting -- Попытка -ing 
attempts -- Попытки 
attend -- посещать, обслуживать
attendance -- присутствие, аудитория
attendant -- служитель, слуга
attendants -- Дежурные 
attended -- обслуженный, обслужил (от attend)
attending -- Посещение(сопровождение) -ing 
attention -- внимание
attentions -- Внимание 
attentive -- внимательный, заботливый
attest -- удостоверять
attic -- чердак
attire -- украшение, наряд
attitude -- позиция, отношение, поза
attorney -- адвокат, поверенный (не advocate)
attract -- привлекать
attraction -- привлекательность, аттракцион
attractive -- привлекательный
attribute -- приписывать
attributed -- Приписанный 
auction -- аукцион
audacity -- отвага, нахальство
audible -- слышный, слышимый
audience -- публика
auditorium -- зрительный зал
August -- август
aunt -- тетя
authentic -- подлинный
author -- автор
authoritative -- авторитетный
authorities -- Власти 
authority -- власть, полномочие, управление
authorize -- санкционировать
authors -- Авторы 
auto -- автомобиль
autobiography -- автобиография
autograph -- Автограф 
automatic -- автоматический
automatically -- автоматически
automobile -- автомобиль
autumn -- осень
auxiliary -- вспомогательный, дополнительный
available -- доступный
avalanche -- снежный обвал, лавина
ave -- прощание
avenge -- (ото)мстить
avenue -- проспект
average -- средний
aversion -- отвращение
avoid -- избегать, избежать
await -- ждать
awake -- бодрствующий
awakened -- Пробужденный 
aware -- сознающий
away -- прочь
awe -- (благоговейный) страх
awestruck -- пораженный
awful -- ужасный
awfully -- ужасно, очень (разг.), крайне
awhile -- некоторое время
awkward -- неуклюжий
awoke -- будил *w- 
axis -- ось
ay -- Да 
aye -- Утвердительный ответ, положительный ответ (не yes) 
bab -- Бэб 
babble -- бормотание, болтовня b-
baby -- ребенок
back -- спина, назад
backed -- Поддержанный 
background -- фон, задний план
backs -- Задние части b- 
backup -- Резервный *a- 
backward -- назад, обратно, наоборот
backwards -- Назад 
bacon -- бекон
bad -- плохой
bade -- Предлагал 
badge -- знак, символ, эмблема
badger -- барсук, травить
badly -- сильно, плохо
baffle -- озадачивать, мешать
bag -- сумка
bagful -- мешок b-
baggage -- багаж b-
bags -- сумки, багаж (от bag)
bail -- поручительство
bait -- приманка
baker -- пекарь, булочник
bakery -- пекарня
balance -- равновесие
balanced -- уравновешенный
balcony -- балкон
bald -- лысый, оголенный
ball -- мяч
ballast -- балласт, опыт, убеждения
ballet -- балет
balloon -- воздушный шар
balloons -- Воздушные шары 
balmy -- душистый, нежный, целебный
bamboo -- бамбук
ban -- запрещать
banana -- банан
bananas -- бананы (от banana)
band -- лента, оркестр, ансамбль (музыкальный)
bandage -- бинт, повязка, перевязывать, бинтовать
bands -- ансамбли (от band)
bandy -- перебрасываться, хоккей, клюшка
bang -- ударять, хлопать (дверью и т.п.)
banged -- ударенный 
banisters -- перила (лестницы)
bank -- банк
banner -- знамя
banquet -- банкет
bar -- бар
barbara -- Барбара 
barbed -- колючий, ядовитый
bare -- голый, бедный, простой
barefooted -- босой
barely -- только, едва (b-)
bargain -- сделка
barge -- баржа
bark -- кора дерева
barley -- ячмень
barn -- амбар
barnabas -- Барнабас 
barnacle -- Моллюск 
baron -- Барон 
barrel -- баррель
barren -- бесплодный, неплодородный
barrier -- барьер, преграда
barrow -- носилки
bars -- Бруски(бары) 
barton -- имение, поместье, усадьба (не estate) 
base -- основа
baseball -- бейсбол
based -- Основанный 
basement -- основание
basic -- основной b-
basically -- в основном
basin -- бассейн b-
basis -- основа, основание
basket -- корзина
bass -- бас, басовый
bat -- бить
batch -- выпечка, партия, группа
bates -- Убавляет 
bath -- ванна
bathe -- купаться
bathing -- купание, купальный
bathroom -- ванная комната
battery -- аккумулятор
battle -- бой, сражение
bay -- бухта, залив
be -- быть
beach -- пляж
beacon -- сигнальный огонь, маяк
beagle -- Гончая 
beak -- клюв
beaker -- кубок, чаша (не rummer)
beam -- сиять, излучать (свет)
beamed -- Сиял 
beaming -- Сияющий (от слова beam) 
beams -- Лучи 
bean -- боб
beans -- фасоль
bear -- медведь, спекулянт
bearable -- терпимый, сносный b-
beard -- борода
bearer -- носитель, податель, предъявитель
bearing -- Отношение(поведение) -ing 
bears -- Медведи 
beast -- зверь, животное
beastly -- противный (разг.) -- от слова ЗВЕРЬ!!!
beasts -- звери 
beat -- ударить, бить
beaten -- битый
beating -- поражение b-
beau -- кавалер, поклонник
beautiful -- красивый
beautifully -- красиво, прекрасно
beauty -- красота, косметический
became -- становился, стал (от become)
because -- потому что
beck -- кивок, приветствие
become -- становиться
becomes -- становится (от become)
becoming -- подобающий, приличествующий, соответственный, идущий (к лицу) (не eligible, suitable) -ing
bed -- постель
bedding -- спальные принадлежности (bedding)
bedroom -- спальня
beds -- Кровати 
bedside -- постель
bee -- пчела
beech -- бук
beef -- говядина
beehive -- улей
been -- быть (от be)
beer -- пиво
bees -- Пчелы 
beetle -- трамбовать, дробить камни
beetroot -- красная свекла
before -- перед, до того как
daybreak -- рассвет
daylight -- дневной свет
days -- дни (от day)
daytime -- дневное время
dazed -- ошеломленный
dead -- мертвый
deadlock -- тупик, безвыходное положение
deadly -- смертельно
deaf -- глухой
deal -- значительное количество
dealing -- раздачаv -ing
dean -- декан
dear -- дорогой
dearest -- Дорогой (не darling) 
death -- смерть
debate -- дебаты, спор, полемика
debris -- обломки, развалины
debt -- долг
debts -- долги (от debt)
decay -- гниение, разложение
deceive -- обманывать
deceived -- обманутый 
December -- декабрь
decency -- приличие, благопристойность
decent -- приличный, скромный
deception -- обман, хитрость -ion
deceptive -- обманчивый
decide -- решать
decided -- решил (от decide)
decidedly -- определённо, точно, бесспорно (не doubtless) 
decimal -- десятичный, десятичная дробь
decipher -- расшифровывать
decision -- решение
decisive -- решающий
deck -- палуба
declaration -- декларация
declare -- декларировать
declared -- Объявленный 
decline -- опускаться, уменьшаться, убывать
declined -- Отклоненный **c- 
decorate -- украшать
decoy -- западня, приманка; заманивать в ловушку 
decrease -- уменьшать, уменьшить
decree -- декрет, указ; издавать декрет; постановлять
decrepit -- ветхий, дряхлый
dedicate -- посвящать, посвятить
deduction -- вычитание, вычет, удержание, вывод, заключение (-ion)
deed -- подвиг, дело
deep -- глубокий
deeper -- Глубже 
deeply -- глубоко
deer -- олень, лань
default -- Неплатеж, невыполнение обязательств 
defeat -- поражение
defeated -- побеждённый 
defect -- недостаток, недочет
defective -- неисправный, недостаточный, неполноценный, дефективный
defence -- оборона, защита
defend -- защищать, оборонять
defender -- защитник, чемпион (не champion)
defense -- оборона 
defensive -- оборонительный, оборона
defiance -- неповиновение, пренебрежение
defiant -- вызывающий, дерзкий
deficiency -- недостаток, дефицит 
define -- определять, устанавливать
defined -- Определенный 
definite -- определенный, точный
definitely -- Определенно 
definition -- определение
defy -- действовать наперекор
degrade -- понижать, разжаловать
degree -- степень, звание
deity -- божество
dejected -- удрученный, угнетенный
delay -- отсрочка
delayed -- отложен (от delay)
delete -- Удалить 
deliberate -- умышленный, обдуманный
deliberately -- сознательно, обдуманно 
delicacy -- деликатность, тонкость, нежность (красок); хрупкость, болезненность
delicate -- изящный 
delicious -- восхитительный, прелестный, вкусный 
delight -- восхищение, восхищаться
delighted -- восхищался (от delight)
delightful -- восхитительный (не marvellous)
delirium -- бред
deliver -- доставлять, передавать
deliverance -- освобождение, избавление
delivered -- доставил (от deliver)
delivery -- доставка
deluge -- наводнение, ливень
delusion -- заблуждение
delve -- впадина, рытвина
demand -- требовать
demanded -- требовал (от demand)
demolition -- уничтожение
demonstrate -- демонстрировать
demonstration -- демонстрация
den -- берлога, притон
dene -- долина, дюны
denial -- отрицание, опровержение
denied -- Отклоненный 
denote -- означать, обозначать
dense -- густой, плотный (не bushy)
dentist -- зубной врач
deny -- отрицать, отвергать
detachment -- отряд
detail -- деталь
detailed -- детальный, подробный
detain -- задерживать, удерживать
detect -- открывать, обнаруживать 
detected -- Обнаруженный 
detection -- открытие, обнаружение
detective -- детектив(ный)
detectives -- Детективы 
detention -- задержание
determination -- решимость, определение
determine -- определять, устанавливать, разрешать
determined -- решительный
detest -- питать отвращение, ненавидеть
detrimental -- приносящий ущерб (не destructive)
develop -- развивать
developed -- развил (от develop)
developer -- развивающийся (о человеке) 
development -- развитие
device -- прибор, схема, проект, прием, устройство
devil -- дьявол, сатана
devote -- посвящать
devoted -- преданный
devotion -- преданность
devour -- пожирать
dew -- роса
dexterity -- проворство, ловкость
varying -- Изменение -ing 
vase -- ваза
vast -- обширный, громадный
vastly -- значительно
vault -- свод
veal -- телятина
vegetable -- овощ, растение, овощной
vegetables -- овощи (от vegetable)
vegetation -- Растительность 
vehemently -- сильно v-
vehicle -- транспортное средство
veil -- завеса, покрывало
vein -- вена, жила, жилка
velvet -- бархат, преимущество
veneering -- Облицовывание -ing 
vengeance -- месть, мщение
vent -- выпускать, испускать
venture -- предприятие, риск
ventures -- предприятия (от venture)
venus -- Венера 
verandah -- Веранда 
verdure -- зелень ***d***
verge -- грань, край
verify -- проверять, подтверждать
vernon -- Вернон 
verse -- стихи, поэзия
version -- версия
versions -- Версии 
vertical -- вертикальный
vertically -- Вертикально 
very -- очень, тот самый
vessel -- сосуд, судно
vest -- жилет (амер.), майка
veteran -- ветеран
vex -- раздражать, сердить
vexation -- досада, раздражение (не nuisance)
vexed -- сердил, раздражал (от vex)
via -- через
vice -- порок
vicinity -- окрестности, соседство, близость
vicious -- порочный
victim -- жертва
victorious -- победоносный
victory -- победа
view -- взгляд, мнение, осматривать
viewed -- Рассматриваемый 
viewpoint -- точка зрения
views -- Представления(виды) 
vigilance -- бдительность
vigorous -- сильный v-
vigorously -- энергично 
vigour -- сила, энергия v-
village -- деревня
villager -- сельский житель
villain -- злодей, негодяй
vine -- виноградная лоза
vinegar -- уксус
violence -- сила, неистовство, насилие
violent -- яростный v-
violently -- неистово v-
violet -- фиолетовый (не purple)
virtual -- фактический
virtue -- добродетель
viscount -- Виконт 
visible -- видимый, очевидный
vision -- зрение, видение
visit -- визит, посещать, навещать
visited -- посетил (от visit)
visiting -- приезжий -ing
visitor -- гость
visits -- Посещения 
visual -- зрительный, наглядный
vital -- жизненный, крайне необходимый
vivid -- живой, яркий
vocation -- призвание
voice -- голос
void -- лишенный, недействительный (юр.)
volcano -- вулкан
volume -- объем, громкость
voluntary -- добровольный
vote -- голос (на выборах), голосование, голосовать
vow -- обет, клятва
voyage -- путешествие v-
wad -- прокладывать
wade -- пробираться, продираться
wag -- махать, трясти
wage -- заработная плата
wager -- держать пари, рисковать
waggoner -- Извозчик 
wagon -- повозка 
wail -- вопль, вой, вопить, выть
wailed -- Вопил 
wailing -- Вопящий -ing 
waist -- талия
waistcoat -- жилет
wait -- ждать, ожидать, ожидание
waited -- ждал (от wait)
waiter -- официант
waiting -- ждать (от to keep waiting)
waitress -- официантка
wake -- будить, просыпаться
walk -- гулять, ходить пешком (не hike)
walked -- гулял (от walk)
walking -- гуляющий
wall -- стена
wallace -- Уоллис 
wallet -- бумажник
wallpaper -- обои
walnut -- грецкий орех
walrus -- морж
walter -- Уолтер 
wan -- бледный, изнуренный
wand -- Палочка 
wander -- бродить, блуждать
wanderer -- странник (не stranger)
wandering -- блуждание 
want -- хотеть, желать, нуждаться в
wanted -- хотел, желанный (от want)
wanting -- Желание 
wants -- хочет, желает, нуждается в (от want)
war -- война, воевать
we -- мы
weak -- слабый
weed -- сорняк, полоть
week -- неделя
weekend -- выходные
weekly -- еженедельный, еженедельно
weep -- плакать
weeping -- Плач *e-ing 
weigh -- взвешивать, весить
weight -- вес, тяжесть, груз
weighty -- веский
weird -- судьба, рок, таинственный, странный
welcome -- желанный, гостеприимство
welfare -- благосостояние
widen -- расширять(ся)
widow -- вдова
width -- ширина
wife -- жена
wig -- парик
wild -- исступленный, безумный
wilderness -- пустыня, глушь
wildly -- Дико 
Wilfrid -- Вилфрид 
will -- вспомогательный глагол будущего времени
william -- Уильям 
willing -- готовый, охотно делающий что-либо
willingly -- охотно
willow -- ива
win -- выигрывать, побеждать
wind -- ветер, виток, виться, наматывать
windfall -- неожиданная удача
winding -- изгиб w- -ing
window -- окно, оконный
windows -- окна (от window)
winds -- Ветры 
world -- мир, свет
worlds -- Миры 
worm -- червь, глист, ничтожество (перен.)
worn -- потёртый, изношенный 
worry -- беспокоиться
worse -- хуже (от bad)
worship -- поклоняться (не regards)
worst -- наихудший
worth -- стоящий, заслуживающий
worthless -- ничего не стоящий, дрянной
worthy -- достойный
would -- вспомогательный, модальный глагол (от will)
wound -- рана
wounded -- раненый
wow -- Ничего себе 
yours -- ваш, ваши, твой, твои
yourself -- сам, сами
yourselves -- Самостоятельно 
youth -- молодежь
youthful -- юный, юношеский y-
yuri -- Юрий 
zeal -- усердие, рвение
zero -- ноль
zigzag -- Зигзаг 
zinc -- цинк, цинковый, оцинковывать
zone -- зона
zoo -- зоопарк
zoological -- Зоологический `;

module.exports = data;

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(100);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = /** @class */ (function () {
    function MyApp(appCtrl, platform, statusBar, splashScreen) {
        this.appCtrl = appCtrl;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        this.initializeApp();
        this.pages = [
            { title: 'Домашняя', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */], icon: 'ios-home-outline', type: 'None' },
            { title: 'Известные слова', component: 'WordsViewerPage', icon: 'ios-search-outline', type: 'knownWords' },
            { title: 'Выученные слова', component: 'WordsViewerPage', icon: 'cloud-outline', type: 'learnedWords' },
            { title: 'Слова для повторения', component: 'WordsViewerPage', icon: 'ios-information-circle-outline', type: 'toRepeatWords' },
            { title: 'Пройти тест', component: 'WordTestPage', icon: 'stats', type: 'None' },
            { title: 'Помощь', component: 'HelpScreenPage', icon: 'help-circle-outline', type: 'None' }
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
        });
    };
    MyApp.prototype.pushTo = function (page) {
        if (page.title == 'Домашняя')
            this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */]);
        else if (page.type != 'None')
            this.appCtrl.getRootNav().push(page.component, page.type);
        else
            this.appCtrl.getRootNav().push(page.component);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\Users\MineDan\Desktop\ionic\Wordex\src\app\app.html"*/'<ion-menu [content]="content">\n  <ion-content text-center>\n    <h2 class="mono">WORDEX</h2>\n    <h6><b class="eina">v. 2.6</b></h6>\n    <ion-list>\n      <ion-item *ngFor="let page of pages" (click)="pushTo(page);" menuClose>\n        <ion-icon name="{{ page.icon }}"></ion-icon><span class="monts b"> {{ page.title }}</span></ion-item>\n    </ion-list>\n\n  </ion-content>\n\n  <ion-footer text-center>\n      <h6 class="eina">Developed by Dan Durnev aka <b><i>danmoop</i></b></h6>\n      <h6 class="eina"><a href="https://github.com/danmoop">Github</a></h6>\n      <h6 class="eina">dandurnev0@gmail.com</h6>\n  </ion-footer>\n\n</ion-menu>\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false"></ion-nav>\n'/*ion-inline-end:"C:\Users\MineDan\Desktop\ionic\Wordex\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* App */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ })

},[196]);
//# sourceMappingURL=main.js.map