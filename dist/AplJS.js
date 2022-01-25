/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/AplJS.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/AplJS.js":
/*!**********************!*\
  !*** ./src/AplJS.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_polyfills_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills/polyfills.js */ "./src/polyfills/polyfills.js");
/* harmony import */ var _core_Core_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/Core.js */ "./src/core/Core.js");


var AplJS = {};
AplJS.App = _core_Core_js__WEBPACK_IMPORTED_MODULE_1__["default"];

if (typeof window != "undefined") {
  window.AplJS = AplJS;
}

/* harmony default export */ __webpack_exports__["default"] = (AplJS);

/***/ }),

/***/ "./src/core/Core.js":
/*!**************************!*\
  !*** ./src/core/Core.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/*------------ Конструктор ------------*/

/**
*	Функция конструктор.
*
*	@author th12legion(Pavlo Kudil)
*
*	@constructor
* 	@this {App}
*
* 	@param {Object} app_options - параметры приложения.
*
*/
function App() {
  var app_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (!(this instanceof App)) {
    return new App(app_options);
  }

  ;

  this.__set_system_options__(typeof app_options["parent"] != "undefined" ? app_options["parent"] : "body"); // Установка системных опций


  this.__set_app_options__(app_options);

  if (this.options["auto"] == true) {
    // Проверяем запускать ли приложение автоматически
    this.run();
  }
}
/*------------ Конструктор ------------*/

/*------------ Вспомагательные функции ------------*/

/**
*	Функция для поиска элементов приложения на котором произошло сосбтие
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} elem - Элемент на котором произошло событие.
* 	@param {Object} attr - Аттрибут элемента, который ищем.
* 	@param {Object} elem - Сигнатура приложения.
*
*	@return {Array} - Массив со статусом и элементом
*
*/


var search_element = function search_element(elem, attr, sign) {
  var btn = elem.target.closest("[" + attr + "]");

  if (btn == null) {
    return [false, null];
  }

  var app = btn.closest('[apl-sign="' + sign + '"]');

  if (app == null) {
    return [false, null];
  }

  return [true, btn];
};
/*------------ Вспомагательные функции ------------*/

/*------------ Установка опций приложения ------------*/

/**
*	Установка базовый опций.
*
*	@author th12legion(Pavlo Kudil)
*
*/


App.prototype.__set_system_options__ = function () {
  var parent = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "body";
  this.__started__ = false; // Запущено ли приложение

  this.__attached__ = false; // Прикреплино ли приложение

  this.__timer__ = null; // Запущено ли приложение

  this.__wait_list__ = []; // Массив подписаных событий, который буду ждать их вызова

  this.__scope__ = {}; // Объект для хранения переменных приложения

  this.__body__ = tar(parent); // Ищем основной элемент на странице

  this.__events_nlist__ = {}; // Объект для хранения нужных ивентов на прослушку

  this.__set_system_attached_callback__(); // Прикрипляем основную функцию каллбека событий

};
/**
*	Прикрипляем основную функцию каллбека событий.
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} app_options - параметры приложения.
*
*/


App.prototype.__set_system_attached_callback__ = function () {
  var _this = this; // Функция калбек реагирующая на клик на странице


  this.__attached_callback__ = function (event) {
    var _search_element = search_element(event, "apl-btn", _this.options["sign"]),
        _search_element2 = _slicedToArray(_search_element, 2),
        status_btn = _search_element2[0],
        btn = _search_element2[1];

    if (status_btn == true) {
      var target = btn.attr('apl-btn');
      var tmp = target.match(/^(btn|route|param|hash|event)/);
      var target_type = tmp !== null ? tmp[1] : "btn";
      target = tmp === null ? target_type + ":" + target : target;

      var _parse_wait = parse_wait(target),
          _parse_wait2 = _slicedToArray(_parse_wait, 3),
          type = _parse_wait2[0],
          ext = _parse_wait2[1],
          method = _parse_wait2[2];

      _this.beep(target, btn, event, {
        "type": type,
        "ext": ext,
        "method": method
      });

      return true;
    }
  };
};
/**
*	Установка опций, которые передали при инициализации.
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} app_options - параметры приложения.
*
*/


App.prototype.__set_app_options__ = function () {
  var app_options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  this.__set_app_default_options__();

  this.__merge_app_options__(app_options);
};
/**
*	Установка дефолтных опций.
*
*	@author th12legion(Pavlo Kudil)
*
*/


App.prototype.__set_app_default_options__ = function () {
  this.options = {
    // Список опций приложения
    "type": "apl",
    // Тип приложения apl || daemon
    "rtime": 1,
    // Время перевызова таймера если приложение daemon
    "name": null,
    // Имя приложения
    "sign": null,
    // Подпись ХТМЛ контейнера приложения, раcполагается в дата атрибуте apl-sign=""
    "attach": false,
    // Указатель искать ли приложение по сигнатуре
    "auto": false,
    // Запускать ли приложение автоматически true || false
    "bevents": ["keyup"],
    // Событие по которому срабатывает связывание поля и переменной
    "callback": function callback() {} // Функция коллбека, которую приложение вызывает при запуске или каждый раз при вызове демона

  };
};
/**
*	Установка опций, которые передали при инициализации.
*
*	@author th12legion(Pavlo Kudil)
*
* 	@param {Object} app_options - параметры приложения.
*
*/


App.prototype.__merge_app_options__ = function (app_options) {
  if (app_options != undefined && _typeof(app_options) == "object") {
    // Если передали объект переписываем свойства в наш объект
    for (var key in app_options) {
      this.options[key] = app_options[key];
    }
  } else if (app_options != undefined && typeof app_options == "function") {
    // Если функция, то записываем функцию возврата
    this.options["callback"] = app_options;
  }
};
/*------------ Установка опций приложения ------------*/

/*------------ Запуск/Остановка приложения ------------*/

/**
*	Функция для запуска приложения 
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {Function} callback - функция вызова, не обязательный параметр
*
*	@return {this} - Возвращаем объект App
*
*/


App.prototype.run = function (callback) {
  var _this = this; // Если приложение запущено, то повторного его не запускаем


  if (this.__started__ == true) {
    return this;
  } // Если надо прикрепить приложение к странице, то прикрепляем его


  if (this.options["attach"] === true) {
    this.__attached__ = true;

    this.__body__.listen('on', 'click', this.__attached_callback__);

    window.addEventListener('popstate', function (event) {
      _this.__router_check_run__();
    });

    if (_this.options["bevents"].length > 0) {
      var bind_evnets = _this.options["bevents"].join(",");

      this.wait("event:[" + bind_evnets + "]", function (elem, event) {
        var bind = elem.attr("apl-bind");

        if (bind === null || bind === "") {
          return false;
        }

        if (this.grab(bind) == elem.value) {
          return false;
        }

        var check = elem.attr("apl-check");

        if (check != null && elem.value !== "") {
          var check_storage = check.split("/");

          if (check_storage.length != 3) {
            elem.attr("apl-error", "value");
            return false;
          }

          var check_status = elem.value.match(new RegExp(check_storage[1], check_storage[2]));

          if (check_status === null) {
            elem.attr("apl-error", "value");
            return false;
          }
        }

        elem.attr("apl-error", null);
        this.staff(bind, elem.value);
        return true;
      });
    }
  } // Ставим статус запуска приложения


  this.__started__ = true; // Если есть новый коллбек, то обновляем коолбек приложения

  if (callback != undefined && typeof callback == "function") {
    this.options["callback"] = callback;
  } // Вызываем коолбек
  // Если надо прикрепить приложение к странице, то прикрепляем его


  this.options["callback"].call(this); // Если приложение демон то запускаем таймер

  if (this.options["type"] === "daemon") {
    var _this2 = this;

    this.__timer__ = setInterval(function () {
      _this2.options["callback"].call(_this2);
    }, this.options["rtime"] * 1000);
  }

  this.__router_check_run__();

  return this;
};
/**
*	Остановка приложения 
*
*	@author th12legion(Pavlo Kudil)
*
*	@return {this} - Возвращаем объект App
*
*/


App.prototype.stop = function () {
  if (this.__attached__ == true) {
    this.__body__.listen('off', 'click', this.__attached_callback__);

    this.__attached__ = false;
  }

  this.__started__ = false;

  if (this.options["type"] === "daemon" && this.__timer__ != null) {
    clearInterval(this.__timer__);
  }
};
/*------------ Запуск/Остановка приложения ------------*/

/*------------ Регистрация и вызов вейтеров ------------*/

/**
*	Метод для проверки URL и вызова вейтеров
*
*	@author th12legion(Pavlo Kudil)
*
*/


App.prototype.__router_check_run__ = function () {
  this.beep("route:" + location.pathname);

  if (location.hash != "") {
    this.beep("hash:" + location.hash);
  }

  var params_pos = location.href.indexOf("?");

  if (params_pos !== -1) {
    var params_str = location.href.slice(params_pos + 1).split("#")[0];
    var params = parse_params(params_str);

    for (var key in params) {
      this.beep("param:" + key, params[key], key);
    }
  }
};
/**
*	Функция для парсинга вейтеров
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} str_params - строка параметров
*	
*	@return {Object} - Список обработанных параметров
*
*/


var parse_params = function parse_params(str_params) {
  var ret = {},
      seg = str_params.split('&'),
      len = seg.length,
      i = 0,
      s;

  for (; i < len; i++) {
    if (!seg[i]) {
      continue;
    }

    s = seg[i].split('=');
    ret[s[0]] = s[1];
  }

  return ret;
};
/**
*	Функция для парсинга вейтеров
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель на вейтер
*	
*	@return {Array} - Список обработанных параметров
*
*/


var parse_wait = function parse_wait() {
  var raw_target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  raw_target = raw_target.toLowerCase();
  raw_target = raw_target.replace(/\)[\s]+;/gi, ");").replace(/\/+/gi, "/").replace(/[\/+]$/gi, "");
  var retrun_list = ["", "*", "*", "*"];
  var return_index = 0;
  var part = 0;
  var expression = false;
  var reg_list = [];
  var reg = "";

  for (var i = 0; i < raw_target.length; i++) {
    switch (raw_target[i]) {
      case ":":
        if (part == 0) {
          part = 1;
          return_index = 3;
          break;
        }

      case "{":
        if (part == 1 && expression == false) {
          return_index = 1;
          break;
        }

      case "[":
        if (part == 1 && expression == false) {
          return_index = 2;
          break;
        }

      case "}":
      case "]":
        if (part == 1 && expression == false) {
          return_index = 3;
          break;
        }

      default:
        if (expression === true) {
          reg += raw_target[i];
        }

        if (raw_target[i] == "(" && raw_target.substring(i - 3, i) == "reg") {
          expression = true;
          reg = "";
        }

        if (raw_target[i] == ")" && typeof raw_target[i + 1] != "undefined" && raw_target[i + 1] == ";") {
          expression = false;
          reg_list.push(reg.substring(0, reg.length - 1));
          reg = "";
        }

        retrun_list[return_index] = retrun_list[return_index] == "*" ? "" : retrun_list[return_index];
        retrun_list[return_index] += raw_target[i];
        break;
    }
  }

  retrun_list[3] = retrun_list[0] + ":" + retrun_list[3];
  retrun_list[4] = reg_list;

  for (var _i2 = 0; _i2 < reg_list.length; _i2++) {
    var reg_key = "reg(" + reg_list[_i2] + ");";
    retrun_list[3] = retrun_list[3].replace(reg_key, "reg@" + _i2);
  }

  retrun_list[3] = retrun_list[3].replace(/\s+/gi, "");
  retrun_list[2] = retrun_list[2].replace(/\s+/gi, "");
  return retrun_list;
};
/**
*	Функция запуска листенеров
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {Object} event_list - Список ивентов
*	
*	@return {this} - Возвращаем объект App
*
*/


App.prototype.__start_event_listeners__ = function () {
  var _this3 = this;

  if (this.options["attach"] === false) {
    return this;
  }

  var _this = this;

  var _loop = function _loop(key) {
    if (_this3.__events_nlist__[key] !== null) {
      return "continue";
    }

    (function (event_name) {
      _this.__events_nlist__[key] = function (event) {
        var _search_element3 = search_element(event, "apl-event", _this.options["sign"]),
            _search_element4 = _slicedToArray(_search_element3, 2),
            status_element = _search_element4[0],
            element = _search_element4[1];

        if (status_element == true) {
          var target = element.attr('apl-event');
          var tmp = target.match(/^(event)/);
          var target_type = tmp !== null ? tmp[1] : "event";
          target = tmp === null ? target_type + ":" + target : target;

          var _parse_wait3 = parse_wait(target),
              _parse_wait4 = _slicedToArray(_parse_wait3, 4),
              type = _parse_wait4[0],
              ext = _parse_wait4[1],
              method_raw = _parse_wait4[2],
              target_raw = _parse_wait4[3];

          var method_storage = method_raw.split(",");

          for (var i = 0; i < method_storage.length; i++) {
            var method = method_storage[i];

            if (method != "*" && method != event_name) {
              continue;
            }

            target = target_raw + "{" + ext + "}" + "[" + method + "]";

            _this.beep(target, element, event, {
              "type": type,
              "ext": ext,
              "method": method
            });
          }

          return true;
        }
      };
    })(key);

    _this3.__body__.listen('on', key, _this3.__events_nlist__[key]);
  };

  for (var key in this.__events_nlist__) {
    var _ret = _loop(key);

    if (_ret === "continue") continue;
  }

  return this;
};
/**
*	Функция для добавления в список цели для прослушивания кликов на псевдокнопки приложени
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель,какой вейтер слушать
*	@param {Function} callback - функция вызова, не обязательный параметр
*	
*	@return {this} - Возвращаем объект App
*
*/


App.prototype.wait = function () {
  var raw_target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
  var callback = arguments.length > 1 ? arguments[1] : undefined;

  //if(raw_target.indexOf(":")==-1){return this;}
  callback = callback || function () {};

  var _parse_wait5 = parse_wait(raw_target),
      _parse_wait6 = _slicedToArray(_parse_wait5, 5),
      type = _parse_wait6[0],
      ext = _parse_wait6[1],
      method_raw = _parse_wait6[2],
      target = _parse_wait6[3],
      exprs = _parse_wait6[4];

  if (type === target || type == "event" && method_raw === "*") {
    return this;
  }

  var method_storage = method_raw.split(",");

  for (var i = 0; i < method_storage.length; i++) {
    var method = method_storage[i];

    if (type == "event") {
      if (typeof this.__events_nlist__[method] == "undefined") {
        this.__events_nlist__[method] = null;
      }

      this.__start_event_listeners__();
    }

    if (typeof this.__wait_list__[target] == "undefined") {
      this.__wait_list__[target] = [];
    }

    this.__wait_list__[target].push({
      "ext": ext,
      "func": callback,
      "exprs": exprs,
      "method": method,
      "type": type
    });
  }

  return this;
};
/**
*	Функция для вызова функции, которую поставили на прослушку
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель,какую кнопку слушать
*	@param {Разный тип} arguments - data параметры, который надо передать в функцию.
*	
*	@return {this} - Возвращаем объект App
*
*/


App.prototype.beep = function (raw_target) {
  //if(raw_target.indexOf(":")==-1){return this;}
  var args = Array.prototype.slice.call(arguments, 1);

  if (args.length == 0) {
    args.push(null);
  }

  var _parse_wait7 = parse_wait(raw_target),
      _parse_wait8 = _slicedToArray(_parse_wait7, 4),
      type = _parse_wait8[0],
      ext = _parse_wait8[1],
      method = _parse_wait8[2],
      target = _parse_wait8[3];

  var return_values = {},
      return_value = null;
  var return_status = false;
  var wait_index = 1;

  var _this = this;

  var force_waiters = function force_waiters(parent, out_args) {
    for (var i = 0; i < parent.length; i++) {
      if (ext != "*" && parent[i]["ext"] != ext) {
        continue;
      }

      if (method != "*" && parent[i]["method"] != method) {
        continue;
      }

      return_value = parent[i]["func"].apply(_this, out_args);

      if (return_value != null && typeof return_value != "undefined") {
        return_status = true;

        if (parent[i]["ext"] == "*") {
          return_values["wait_" + wait_index] = return_value;
          wait_index++;
        } else {
          return_values["wait_" + parent[i]["ext"]] = return_value;
        }
      }
    }
  };

  if (this.__wait_list__[type + ":*"] != undefined) {
    force_waiters(this.__wait_list__[type + ":*"], args);
  }

  if (target == type + ":*") {
    for (var key in this.__wait_list__) {
      if (this.__wait_list__[key][0]["type"] != type || key == this.__wait_list__[key][0]["type"] + ":*") {
        continue;
      }

      force_waiters(this.__wait_list__[key], args);
    }
  } else if (this.__wait_list__[target] != undefined) {
    force_waiters(this.__wait_list__[target], args);
  } else if (type === "route") {
    for (var _key in this.__wait_list__) {
      if (this.__wait_list__[_key][0]["type"] != "route" || _key == this.__wait_list__[_key][0]["type"] + ":*") {
        continue;
      }

      var beep_storage = target.substring(type.length + 1).split("/");

      var list_storage = _key.substring(type.length + 1).split("/");

      beep_storage = beep_storage.filter(function (i) {
        return i;
      });
      list_storage = list_storage.filter(function (i) {
        return i;
      });

      if (beep_storage.length != list_storage.length) {
        break;
      }

      var compare = true;
      var route_args = {};

      for (var j = 0; j < beep_storage.length; j++) {
        var var_name = "";
        var var_expr = "";
        var var_expr_keys = "";

        if (list_storage[j].slice(0, 4) === "reg@") {
          var expr_key = parseInt(list_storage[j].slice(4));
          var expr_raw = this.__wait_list__[_key][0]["exprs"][expr_key];

          if (expr_raw[0] != "/") {
            var var_pos = expr_raw.indexOf(":");

            if (var_pos != -1) {
              var_name = expr_raw.substring(0, var_pos);
              var_expr = expr_raw.substring(var_pos + 1);
              var tmp = var_expr.split("/");
              tmp = tmp.filter(function (i) {
                return i;
              });
              var_expr = tmp[0];
              var_expr_keys = tmp[1];
            }
          }

          var reg = var_expr != "" ? new RegExp(var_expr, var_expr_keys) : "";

          if (reg == "" || beep_storage[j].match(reg) === null) {
            compare = false;
            break;
          } else {
            route_args[var_name] = beep_storage[j];
          }
        } else if (beep_storage[j] != list_storage[j]) {
          compare = false;
          break;
        }
      }

      if (compare === true) {
        force_waiters(this.__wait_list__[_key], [route_args]);
      }
    }
  } // Если надо вернуть все параметры и есть что возвращать, возвращаем это


  if (ext != "*" && return_status == true) {
    return return_values[ext];
  }

  return return_status == false ? this : return_values;
};
/**
*	Функция для удаления вейтера из приложения
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} raw_target - указатель,какой вейтер удалять
*	
*	@return {this} - Возвращаем объект App
*
*/


App.prototype.del = function () {
  var raw_target = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";

  if (raw_target.indexOf(":") == -1) {
    return this;
  }

  var _parse_wait9 = parse_wait(raw_target),
      _parse_wait10 = _slicedToArray(_parse_wait9, 4),
      type = _parse_wait10[0],
      ext = _parse_wait10[1],
      method = _parse_wait10[2],
      target = _parse_wait10[3];

  delete this.__wait_list__[target];
  return this;
};
/*------------ Регистрация и вызов вейтеров ------------*/

/*------------ Работа с хранилищем данных ------------*/

/**
*	Функция для задания переменной
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} name - Имя переменной.
*	@param {Разный тип} val - Значение переменной.
*	@param {Boolean} bind - Отправлять ли событие bind.
*	
*	@return {this} - Возвращаем объект App
*
*/


App.prototype.staff = function (name) {
  var val = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  var bind = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
  var protection = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
  this.__scope__[name] = val;

  if (bind === true) {
    this.beep("bind:" + name, val, name);
  }

  if (this.options["attach"] == true) {
    var bind_elems = tar('[apl-sign="' + this.options["sign"] + '"] [apl-bind="' + name + '"]', -1);

    for (var i = 0; i < bind_elems.length; i++) {
      var bind_elem = bind_elems[i];

      if (bind_elem != null && typeof bind_elem.value != "undefined" && bind === true && bind_elem.value != val) {
        bind_elem.value = val === null || typeof val == "undefined" ? "" : val;
      } else if (bind_elem != null && typeof bind_elem.innerHTML != "undefined" && bind === true && protection === false) {
        bind_elem.innerHTML = val === null || typeof val == "undefined" ? "" : val;
      } else if (bind_elem != null && typeof bind_elem.innerText != "undefined" && bind === true && protection === true) {
        bind_elem.innerText = val === null || typeof val == "undefined" ? "" : val;
      }
    }
  }

  return this;
};
/**
*	Функция для взятия переменной
*
*	@author th12legion(Pavlo Kudil)
*
*	@param {String} name - Имя переменной
*	@param {Разный тип} dval - Дефолтное значение переменной, если переменная не существует.
*	
*	@return {Разный тип} - Значение переменной
*
*/


App.prototype.grab = function (name) {
  var dval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
  return typeof this.__scope__[name] == "undefined" ? dval : this.__scope__[name];
};
/*------------ Работа с хранилищем данных ------------*/

/*------------ APL атрибуты ------------*/
// apl-sign
// apl-btn
// apl-event
// apl-bind
// apl-check

/*------------ APL атрибуты ------------*/


/* harmony default export */ __webpack_exports__["default"] = (App);

/***/ }),

/***/ "./src/polyfills/dom_manage.js":
/*!*************************************!*\
  !*** ./src/polyfills/dom_manage.js ***!
  \*************************************/
/*! exports provided: dom_manage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "dom_manage", function() { return dom_manage; });
/*------------ Работа с селекторами ------------*/
if (!Element.prototype.matches) {
  Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
  Element.prototype.closest = function (css) {
    var node = this;

    while (node) {
      if (node.matches(css)) return node;else node = node.parentElement;
    }

    return null;
  };
}

if (!document.querySelectorAll) {
  document.querySelectorAll = function (selector) {
    var colections = [],
        elements = document.getElementsByTagName("*");
    [].forEach.call(elements, function (el) {
      if (el.matches(selector) == true) {
        colections.push(el);
      }
    });
    return colections;
  };
}

if (!Element.prototype.find) {
  Element.prototype.find = function (selector) {
    var elemets = this.querySelectorAll(selector);
    return elemets;
  };
}
/*------------ Работа с селекторами ------------*/

/*------------ Работа с фтрибутами ------------*/


if (!Element.prototype.attr) {
  Element.prototype.attr = function (name, value) {
    if (this == null) {
      return false;
    }

    var name = name || "";
    var value = typeof value == "undefined" ? false : value;

    if (name == "") {
      return false;
    }

    if (value === null) {
      this.removeAttribute(name);
      return true;
    } else if (value === false) {
      return this.getAttribute(name);
    } else {
      this.setAttribute(name, value);
      return true;
    }
  };
}
/*------------ Работа с фтрибутами ------------*/


var dom_manage = true;

/***/ }),

/***/ "./src/polyfills/events.js":
/*!*********************************!*\
  !*** ./src/polyfills/events.js ***!
  \*********************************/
/*! exports provided: events */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "events", function() { return events; });
/*------------ Слушатели на события ------------*/
if (!Element.prototype.njEventStorage) {
  Element.prototype.njEventStorage = [];
}

if (!Element.prototype.listen) {
  Element.prototype.listen = function (mode, eventName, callBack) {
    var mode = mode.toLowerCase();

    if (mode == "on") {
      if (eventName == undefined) {
        return false;
      }

      var callBack = callBack || function () {};

      this.njEventStorage.push({
        evt: eventName,
        func: callBack
      });
      this.addEventListener(eventName, callBack);
    } else if ('off') {
      if (callBack == undefined && eventName == undefined) {
        for (var i = 0, len = this.njEventStorage.length; i < len; i++) {
          this.removeEventListener(this.njEventStorage[i].evt, this.njEventStorage[i].func);
        }

        this.njEventStorage = [];
      } else if (callBack == undefined && eventName != undefined) {
        var tempNewStorage = [];

        for (var i = 0, len = this.njEventStorage.length; i < len; i++) {
          if (eventName == this.njEventStorage[i].evt) {
            this.removeEventListener(this.njEventStorage[i].evt, this.njEventStorage[i].func);
          } else {
            tempNewStorage.push(this.njEventStorage[i]);
          }
        }

        this.njEventStorage = tempNewStorage;
      } else if (callBack != undefined && eventName != undefined) {
        this.removeEventListener(eventName, callBack);
      }
    }

    return this;
  };
}

if (!Element.prototype.on) {
  Element.prototype.on = function (eventName, callBack) {
    return this.listen("on", eventName, callBack);
  };
}

if (!Element.prototype.off) {
  Element.prototype.off = function (eventName, callBack) {
    return this.listen("off", eventName, callBack);
  };
}

if (!Element.prototype.mouseClick) {
  Element.prototype.mouseClick = function () {
    var evt = new MouseEvent("click", {
      bubbles: true,
      cancelable: true,
      view: window
    });
    this.dispatchEvent(evt);
    return this;
  };
}
/*------------ Слушатели на события ------------*/


var events = true;

/***/ }),

/***/ "./src/polyfills/ext.js":
/*!******************************!*\
  !*** ./src/polyfills/ext.js ***!
  \******************************/
/*! exports provided: ext */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ext", function() { return ext; });
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

/*------------ Поиск элементов ------------*/
window.tar = function (selector, output, context) {
  switch (_typeof(selector)) {
    case "function":
      if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', selector);
      } else if (document.readyState && !document.onload) {
        document.onreadystatechange = function () {
          if (document.readyState == "loaded" || document.readyState == "complete") {
            document.onreadystatechange = null;
            selector();
          }
        };
      } else {
        document.onload = selector;
      }

      break;

    case "string":
      var context = context || document,
          index = output || 0,
          elemets = null,
          elem = null;

      if (!selector) {
        return null;
      }

      if (context.querySelectorAll) {
        elemets = context.querySelectorAll(selector);

        if (elemets.length > 0) {
          if (index == -1) {
            var sliceArr = Array.prototype.slice ? [].slice.call(elemets, 0) : elemets;
            return sliceArr;
          }

          elem = elemets[index];
          return elem != undefined ? elem : null;
        }

        if (index == -1) {
          return [];
        }
      }

      break;

    case "object":
    case "array":
      //if (nj.require_is(filename)){return nj;}
      var callBack = output || function () {
        return false;
      },
          loadedStatus = function loadedStatus(loadedFile, cBack) {
        if (loadedFile.readyState && !loadedFile.onload) {
          loadedFile.onreadystatechange = function () {
            if (loadedFile.readyState == "loaded" || loadedFile.readyState == "complete") {
              loadedFile.onreadystatechange = null;
              cBack();
            }
          };
        } else {
          loadedFile.onload = cBack;
        }
      },
          file = "",
          reg = /\.(js|css)/i,
          match = null,
          load_status = true;

      for (var i = 0, len = selector.length; i < len; i++) {
        load_status = true;
        file = selector[i];
        match = reg.exec(file);

        if (match == null) {
          continue;
        }

        tar('script', -1).forEach(function (script) {
          if (script.src.indexOf(file) != -1) {
            load_status = false;
            callBack.call(script);
          }
        });
        tar('link', -1).forEach(function (link) {
          if (link.href.indexOf(file) != -1) {
            load_status = false;
            callBack.call(link);
          }
        });

        if (load_status == false) {
          //console.log("Tar Файл "+file+" уже загружен!");
          continue;
        }

        switch (match[1]) {
          case "js":
            var newFile = document.createElement('script'),
                head = document.getElementsByTagName('HEAD')[0];
            newFile.type = 'text/javascript'; //document.getElementsByTagName('HEAD')[0].appendChild(newFile);

            head.insertBefore(newFile, head.firstChild);
            loadedStatus(newFile, callBack);
            newFile.src = file;
            break;

          case "css":
            var newFile = document.createElement('link'),
                head = document.getElementsByTagName('HEAD')[0];
            newFile.type = 'text/css';
            newFile.rel = 'stylesheet'; //document.getElementsByTagName('HEAD')[0].appendChild(newFile);

            head.insertBefore(newFile, head.firstChild);
            loadedStatus(newFile, callBack);
            newFile.href = file;
            break;
        }
      }

      break;
  }

  return null;
};
/*------------ Поиск элементов ------------*/

/*------------ Разное ------------*/


if (!Element.prototype.css) {
  Element.prototype.css = function (option, value) {
    if (typeof option == "string" && value != undefined) {
      this.style[option] = value;
      return this;
    } else if (typeof option == "string" && value == undefined) {
      return this.style[option] != undefined ? this.style[option] : "";
    } else if (_typeof(option) == "object") {
      for (var key in option) {
        this.style[key] = option[key];
      }
    }
  };
}

if (!Element.prototype.wrap) {
  Element.prototype.wrap = function (parent_element) {
    if (parent_element == undefined) {
      return false;
    }

    parent_element.innerHTML = this.outerHTML;
    this.parentNode.replaceChild(parent_element, this);
    return parent_element;
  };
}

if (!Element.prototype.replace) {
  Element.prototype.replace = function (replace_element) {
    if (replace_element == undefined) {
      return false;
    }

    this.parentNode.replaceChild(replace_element, this);
    return replace_element;
  };
}

if (!Element.prototype.clear) {
  Element.prototype.clear = function () {
    while (this.hasChildNodes()) {
      this.removeChild(this.firstChild);
    }
  };
}

if (!Element.prototype.info) {
  Element.prototype.info = function () {
    var rect_info = this.getBoundingClientRect();
    rect_info.width = rect_info.width ? rect_info.width : rect_info.right - rect_info.left;
    rect_info.height = rect_info.height ? rect_info.height : rect_info.bottom - rect_info.top;
    return {
      'width': rect_info.width,
      'height': rect_info.height,
      'left': rect_info.left,
      'right': rect_info.right,
      'top': rect_info.top,
      'bottom': rect_info.bottom
    };
  };
}

if (!Element.prototype.position) {
  Element.prototype.position = function () {
    var x = function (elem) {
      var curleft = 0;

      if (elem.offsetParent) {
        while (1) {
          curleft += elem.offsetLeft;

          if (!elem.offsetParent) {
            break;
          }

          elem = elem.offsetParent;
        }
      } else if (elem.x) {
        curleft += elem.x;
      }

      return curleft;
    }(this);

    var y = function (elem) {
      var curtop = 0;

      if (elem.offsetParent) {
        while (1) {
          curtop += elem.offsetTop;

          if (!elem.offsetParent) {
            break;
          }

          elem = elem.offsetParent;
        }
      } else if (elem.y) {
        curtop += elem.y;
      }

      return curtop;
    }(this);

    return {
      "x": x,
      "y": y
    };
  };
}
/**
*	Функция для создания ХТМЛ ноде элементов
*
*	@param {String} name - Имя элемента 
*	@param {Object} attributes - Атрибуты элемента
*	
*	@return {HTMLNode} - ХТМЛ элемент
*
*/


window.newElem = function (name, attributes) {
  var el = document.createElement(name);

  if (_typeof(attributes) == 'object') {
    for (var i in attributes) {
      el.setAttribute(i, attributes[i]);

      if (i.toLowerCase() == 'class') {
        el.className = attributes[i]; // for IE compatibility
      } else if (i.toLowerCase() == 'style') {
        el.style.cssText = attributes[i]; // for IE compatibility
      }
    }
  }

  for (var i = 2; i < arguments.length; i++) {
    var val = arguments[i];

    if (typeof val == 'string') {
      val = document.createTextNode(val);
    }

    ;
    el.appendChild(val);
  }

  return el;
};
/*------------ Разное ------------*/


var ext = true;

/***/ }),

/***/ "./src/polyfills/polyfills.js":
/*!************************************!*\
  !*** ./src/polyfills/polyfills.js ***!
  \************************************/
/*! exports provided: polifills */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "polifills", function() { return polifills; });
/* harmony import */ var _dom_manage_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom_manage.js */ "./src/polyfills/dom_manage.js");
/* harmony import */ var _ext_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ext.js */ "./src/polyfills/ext.js");
/* harmony import */ var _events_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./events.js */ "./src/polyfills/events.js");



var polifills = true;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQXBsSlMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL0FwbEpTLmpzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0NvcmUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3BvbHlmaWxscy9kb21fbWFuYWdlLmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMvZXZlbnRzLmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMvZXh0LmpzIiwid2VicGFjazovLy8uL3NyYy9wb2x5ZmlsbHMvcG9seWZpbGxzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL0FwbEpTLmpzXCIpO1xuIiwiaW1wb3J0IHtwb2xpZmlsbHN9IGZyb20gXCIuL3BvbHlmaWxscy9wb2x5ZmlsbHMuanNcIjtcbmltcG9ydCBBcHAgZnJvbSBcIi4vY29yZS9Db3JlLmpzXCI7XG5cbnZhciBBcGxKUyA9IHt9O1xuQXBsSlMuQXBwID0gQXBwO1xuXG5pZiAodHlwZW9mIHdpbmRvdyE9XCJ1bmRlZmluZWRcIil7XG5cdHdpbmRvdy5BcGxKUyA9IEFwbEpTO1xufVxuXG5leHBvcnQgZGVmYXVsdCBBcGxKUzsiLCIvKi0tLS0tLS0tLS0tLSDQmtC+0L3RgdGC0YDRg9C60YLQvtGAIC0tLS0tLS0tLS0tLSovXG5cbi8qKlxuKlx00KTRg9C90LrRhtC40Y8g0LrQvtC90YHRgtGA0YPQutGC0L7RgC5cbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbipcdEBjb25zdHJ1Y3RvclxuKiBcdEB0aGlzIHtBcHB9XG4qXG4qIFx0QHBhcmFtIHtPYmplY3R9IGFwcF9vcHRpb25zIC0g0L/QsNGA0LDQvNC10YLRgNGLINC/0YDQuNC70L7QttC10L3QuNGPLlxuKlxuKi9cbmZ1bmN0aW9uIEFwcChhcHBfb3B0aW9ucyA9IHt9KXtcblx0aWYgKCEodGhpcyBpbnN0YW5jZW9mIEFwcCkpe3JldHVybiBuZXcgQXBwKGFwcF9vcHRpb25zKX07XG5cdHRoaXMuX19zZXRfc3lzdGVtX29wdGlvbnNfXygodHlwZW9mIGFwcF9vcHRpb25zW1wicGFyZW50XCJdIT1cInVuZGVmaW5lZFwiP2FwcF9vcHRpb25zW1wicGFyZW50XCJdOlwiYm9keVwiKSk7IC8vINCj0YHRgtCw0L3QvtCy0LrQsCDRgdC40YHRgtC10LzQvdGL0YUg0L7Qv9GG0LjQuVxuXHR0aGlzLl9fc2V0X2FwcF9vcHRpb25zX18oYXBwX29wdGlvbnMpO1xuXHRpZiAodGhpcy5vcHRpb25zW1wiYXV0b1wiXT09dHJ1ZSl7IC8vINCf0YDQvtCy0LXRgNGP0LXQvCDQt9Cw0L/Rg9GB0LrQsNGC0Ywg0LvQuCDQv9GA0LjQu9C+0LbQtdC90LjQtSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuFxuXHRcdHRoaXMucnVuKCk7XG5cdH1cbn1cblxuLyotLS0tLS0tLS0tLS0g0JrQvtC90YHRgtGA0YPQutGC0L7RgCAtLS0tLS0tLS0tLS0qL1xuXG4vKi0tLS0tLS0tLS0tLSDQktGB0L/QvtC80LDQs9Cw0YLQtdC70YzQvdGL0LUg0YTRg9C90LrRhtC40LggLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4qXHTQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtC40YHQutCwINGN0LvQtdC80LXQvdGC0L7QsiDQv9GA0LjQu9C+0LbQtdC90LjRjyDQvdCwINC60L7RgtC+0YDQvtC8INC/0YDQvtC40LfQvtGI0LvQviDRgdC+0YHQsdGC0LjQtVxuKlxuKlx0QGF1dGhvciB0aDEybGVnaW9uKFBhdmxvIEt1ZGlsKVxuKlxuKiBcdEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0g0K3Qu9C10LzQtdC90YIg0L3QsCDQutC+0YLQvtGA0L7QvCDQv9GA0L7QuNC30L7RiNC70L4g0YHQvtCx0YvRgtC40LUuXG4qIFx0QHBhcmFtIHtPYmplY3R9IGF0dHIgLSDQkNGC0YLRgNC40LHRg9GCINGN0LvQtdC80LXQvdGC0LAsINC60L7RgtC+0YDRi9C5INC40YnQtdC8LlxuKiBcdEBwYXJhbSB7T2JqZWN0fSBlbGVtIC0g0KHQuNCz0L3QsNGC0YPRgNCwINC/0YDQuNC70L7QttC10L3QuNGPLlxuKlxuKlx0QHJldHVybiB7QXJyYXl9IC0g0JzQsNGB0YHQuNCyINGB0L4g0YHRgtCw0YLRg9GB0L7QvCDQuCDRjdC70LXQvNC10L3RgtC+0LxcbipcbiovXG52YXIgc2VhcmNoX2VsZW1lbnQgPSBmdW5jdGlvbihlbGVtLCBhdHRyLCBzaWduKXtcblx0dmFyIGJ0biA9IGVsZW0udGFyZ2V0LmNsb3Nlc3QoXCJbXCIrYXR0citcIl1cIik7XG5cdGlmIChidG49PW51bGwpe3JldHVybiBbZmFsc2UsbnVsbF07fVxuXG5cdHZhciBhcHAgPSBidG4uY2xvc2VzdCgnW2FwbC1zaWduPVwiJytzaWduKydcIl0nKTtcblx0aWYoYXBwPT1udWxsKXtyZXR1cm4gW2ZhbHNlLG51bGxdO31cblxuXHRyZXR1cm4gW3RydWUsIGJ0bl07XG59XG4vKi0tLS0tLS0tLS0tLSDQktGB0L/QvtC80LDQs9Cw0YLQtdC70YzQvdGL0LUg0YTRg9C90LrRhtC40LggLS0tLS0tLS0tLS0tKi9cblxuLyotLS0tLS0tLS0tLS0g0KPRgdGC0LDQvdC+0LLQutCwINC+0L/RhtC40Lkg0L/RgNC40LvQvtC20LXQvdC40Y8gLS0tLS0tLS0tLS0tKi9cblxuLyoqXG4qXHTQo9GB0YLQsNC90L7QstC60LAg0LHQsNC30L7QstGL0Lkg0L7Qv9GG0LjQuS5cbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbiovXG5BcHAucHJvdG90eXBlLl9fc2V0X3N5c3RlbV9vcHRpb25zX18gPSBmdW5jdGlvbihwYXJlbnQgPSBcImJvZHlcIil7XG5cdHRoaXMuX19zdGFydGVkX18gPSBmYWxzZTsgLy8g0JfQsNC/0YPRidC10L3QviDQu9C4INC/0YDQuNC70L7QttC10L3QuNC1XG5cdHRoaXMuX19hdHRhY2hlZF9fID0gZmFsc2U7IC8vINCf0YDQuNC60YDQtdC/0LvQuNC90L4g0LvQuCDQv9GA0LjQu9C+0LbQtdC90LjQtVxuXHR0aGlzLl9fdGltZXJfXyA9IG51bGw7IC8vINCX0LDQv9GD0YnQtdC90L4g0LvQuCDQv9GA0LjQu9C+0LbQtdC90LjQtVxuXHR0aGlzLl9fd2FpdF9saXN0X18gPSBbXTsgLy8g0JzQsNGB0YHQuNCyINC/0L7QtNC/0LjRgdCw0L3Ri9GFINGB0L7QsdGL0YLQuNC5LCDQutC+0YLQvtGA0YvQuSDQsdGD0LTRgyDQttC00LDRgtGMINC40YUg0LLRi9C30L7QstCwXG5cdHRoaXMuX19zY29wZV9fID0ge307IC8vINCe0LHRitC10LrRgiDQtNC70Y8g0YXRgNCw0L3QtdC90LjRjyDQv9C10YDQtdC80LXQvdC90YvRhSDQv9GA0LjQu9C+0LbQtdC90LjRj1xuXHR0aGlzLl9fYm9keV9fID0gdGFyKHBhcmVudCk7IC8vINCY0YnQtdC8INC+0YHQvdC+0LLQvdC+0Lkg0Y3Qu9C10LzQtdC90YIg0L3QsCDRgdGC0YDQsNC90LjRhtC1XG5cdHRoaXMuX19ldmVudHNfbmxpc3RfXyA9IHt9OyAvLyDQntCx0YrQtdC60YIg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0L3Rg9C20L3Ri9GFINC40LLQtdC90YLQvtCyINC90LAg0L/RgNC+0YHQu9GD0YjQutGDXG5cdHRoaXMuX19zZXRfc3lzdGVtX2F0dGFjaGVkX2NhbGxiYWNrX18oKTsgLy8g0J/RgNC40LrRgNC40L/Qu9GP0LXQvCDQvtGB0L3QvtCy0L3Rg9GOINGE0YPQvdC60YbQuNGOINC60LDQu9C70LHQtdC60LAg0YHQvtCx0YvRgtC40Llcbn1cblxuLyoqXG4qXHTQn9GA0LjQutGA0LjQv9C70Y/QtdC8INC+0YHQvdC+0LLQvdGD0Y4g0YTRg9C90LrRhtC40Y4g0LrQsNC70LvQsdC10LrQsCDRgdC+0LHRi9GC0LjQuS5cbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbiogXHRAcGFyYW0ge09iamVjdH0gYXBwX29wdGlvbnMgLSDQv9Cw0YDQsNC80LXRgtGA0Ysg0L/RgNC40LvQvtC20LXQvdC40Y8uXG4qXG4qL1xuQXBwLnByb3RvdHlwZS5fX3NldF9zeXN0ZW1fYXR0YWNoZWRfY2FsbGJhY2tfXyA9IGZ1bmN0aW9uKCl7XG5cdGxldCBfdGhpcyA9IHRoaXM7XG5cblx0Ly8g0KTRg9C90LrRhtC40Y8g0LrQsNC70LHQtdC6INGA0LXQsNCz0LjRgNGD0Y7RidCw0Y8g0L3QsCDQutC70LjQuiDQvdCwINGB0YLRgNCw0L3QuNGG0LVcblx0dGhpcy5fX2F0dGFjaGVkX2NhbGxiYWNrX18gPSBmdW5jdGlvbihldmVudCl7XG5cdFx0dmFyIFtzdGF0dXNfYnRuLGJ0bl0gPSBzZWFyY2hfZWxlbWVudChldmVudCwgXCJhcGwtYnRuXCIsIF90aGlzLm9wdGlvbnNbXCJzaWduXCJdKTtcblx0XHRpZiAoc3RhdHVzX2J0bj09dHJ1ZSl7XG5cdFx0XHRsZXQgdGFyZ2V0ID0gYnRuLmF0dHIoJ2FwbC1idG4nKTtcblx0XHRcdGxldCB0bXAgPSB0YXJnZXQubWF0Y2goL14oYnRufHJvdXRlfHBhcmFtfGhhc2h8ZXZlbnQpLyk7XG5cdFx0XHRsZXQgdGFyZ2V0X3R5cGUgPSAodG1wIT09bnVsbCk/dG1wWzFdOlwiYnRuXCI7XG5cdFx0XHRcblx0XHRcdHRhcmdldCA9ICh0bXA9PT1udWxsKT90YXJnZXRfdHlwZStcIjpcIit0YXJnZXQ6dGFyZ2V0O1xuXHRcdFx0bGV0IFt0eXBlLCBleHQsIG1ldGhvZF0gPSBwYXJzZV93YWl0KHRhcmdldCk7XG5cdFx0XHRfdGhpcy5iZWVwKHRhcmdldCwgYnRuLCBldmVudCwge1widHlwZVwiOiB0eXBlLCBcImV4dFwiOiBleHQsIFwibWV0aG9kXCI6IG1ldGhvZH0pO1xuXHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbipcdNCj0YHRgtCw0L3QvtCy0LrQsCDQvtC/0YbQuNC5LCDQutC+0YLQvtGA0YvQtSDQv9C10YDQtdC00LDQu9C4INC/0YDQuCDQuNC90LjRhtC40LDQu9C40LfQsNGG0LjQuC5cbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbiogXHRAcGFyYW0ge09iamVjdH0gYXBwX29wdGlvbnMgLSDQv9Cw0YDQsNC80LXRgtGA0Ysg0L/RgNC40LvQvtC20LXQvdC40Y8uXG4qXG4qL1xuQXBwLnByb3RvdHlwZS5fX3NldF9hcHBfb3B0aW9uc19fID0gZnVuY3Rpb24oYXBwX29wdGlvbnMgPSB7fSl7XG5cdHRoaXMuX19zZXRfYXBwX2RlZmF1bHRfb3B0aW9uc19fKCk7XG5cdHRoaXMuX19tZXJnZV9hcHBfb3B0aW9uc19fKGFwcF9vcHRpb25zKTtcbn1cblxuLyoqXG4qXHTQo9GB0YLQsNC90L7QstC60LAg0LTQtdGE0L7Qu9GC0L3Ri9GFINC+0L/RhtC40LkuXG4qXG4qXHRAYXV0aG9yIHRoMTJsZWdpb24oUGF2bG8gS3VkaWwpXG4qXG4qL1xuQXBwLnByb3RvdHlwZS5fX3NldF9hcHBfZGVmYXVsdF9vcHRpb25zX18gPSBmdW5jdGlvbigpe1xuXHR0aGlzLm9wdGlvbnMgPSB7IC8vINCh0L/QuNGB0L7QuiDQvtC/0YbQuNC5INC/0YDQuNC70L7QttC10L3QuNGPXG5cdFx0XCJ0eXBlXCI6IFwiYXBsXCIsIC8vINCi0LjQvyDQv9GA0LjQu9C+0LbQtdC90LjRjyBhcGwgfHwgZGFlbW9uXG5cdFx0XCJydGltZVwiOiAxLCAvLyDQktGA0LXQvNGPINC/0LXRgNC10LLRi9C30L7QstCwINGC0LDQudC80LXRgNCwINC10YHQu9C4INC/0YDQuNC70L7QttC10L3QuNC1IGRhZW1vblxuXHRcdFwibmFtZVwiOiBudWxsLC8vINCY0LzRjyDQv9GA0LjQu9C+0LbQtdC90LjRj1xuXHRcdFwic2lnblwiOiBudWxsLC8vINCf0L7QtNC/0LjRgdGMINCl0KLQnNCbINC60L7QvdGC0LXQudC90LXRgNCwINC/0YDQuNC70L7QttC10L3QuNGPLCDRgNCwY9C/0L7Qu9Cw0LPQsNC10YLRgdGPINCyINC00LDRgtCwINCw0YLRgNC40LHRg9GC0LUgYXBsLXNpZ249XCJcIlxuXHRcdFwiYXR0YWNoXCI6IGZhbHNlLC8vINCj0LrQsNC30LDRgtC10LvRjCDQuNGB0LrQsNGC0Ywg0LvQuCDQv9GA0LjQu9C+0LbQtdC90LjQtSDQv9C+INGB0LjQs9C90LDRgtGD0YDQtVxuXHRcdFwiYXV0b1wiOiBmYWxzZSwvLyDQl9Cw0L/Rg9GB0LrQsNGC0Ywg0LvQuCDQv9GA0LjQu9C+0LbQtdC90LjQtSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuCB0cnVlIHx8IGZhbHNlXG5cdFx0XCJiZXZlbnRzXCI6IFtcImtleXVwXCJdLCAvLyDQodC+0LHRi9GC0LjQtSDQv9C+INC60L7RgtC+0YDQvtC80YMg0YHRgNCw0LHQsNGC0YvQstCw0LXRgiDRgdCy0Y/Qt9GL0LLQsNC90LjQtSDQv9C+0LvRjyDQuCDQv9C10YDQtdC80LXQvdC90L7QuVxuXHRcdFwiY2FsbGJhY2tcIjogZnVuY3Rpb24oKXt9Ly8g0KTRg9C90LrRhtC40Y8g0LrQvtC70LvQsdC10LrQsCwg0LrQvtGC0L7RgNGD0Y4g0L/RgNC40LvQvtC20LXQvdC40LUg0LLRi9C30YvQstCw0LXRgiDQv9GA0Lgg0LfQsNC/0YPRgdC60LUg0LjQu9C4INC60LDQttC00YvQuSDRgNCw0Lcg0L/RgNC4INCy0YvQt9C+0LLQtSDQtNC10LzQvtC90LBcblx0fTtcbn1cblxuLyoqXG4qXHTQo9GB0YLQsNC90L7QstC60LAg0L7Qv9GG0LjQuSwg0LrQvtGC0L7RgNGL0LUg0L/QtdGA0LXQtNCw0LvQuCDQv9GA0Lgg0LjQvdC40YbQuNCw0LvQuNC30LDRhtC40LguXG4qXG4qXHRAYXV0aG9yIHRoMTJsZWdpb24oUGF2bG8gS3VkaWwpXG4qXG4qIFx0QHBhcmFtIHtPYmplY3R9IGFwcF9vcHRpb25zIC0g0L/QsNGA0LDQvNC10YLRgNGLINC/0YDQuNC70L7QttC10L3QuNGPLlxuKlxuKi9cbkFwcC5wcm90b3R5cGUuX19tZXJnZV9hcHBfb3B0aW9uc19fID0gZnVuY3Rpb24oYXBwX29wdGlvbnMpe1xuXHRpZiAoYXBwX29wdGlvbnMhPXVuZGVmaW5lZCAmJiB0eXBlb2YgYXBwX29wdGlvbnMgPT0gXCJvYmplY3RcIil7IC8vINCV0YHQu9C4INC/0LXRgNC10LTQsNC70Lgg0L7QsdGK0LXQutGCINC/0LXRgNC10L/QuNGB0YvQstCw0LXQvCDRgdCy0L7QudGB0YLQstCwINCyINC90LDRiCDQvtCx0YrQtdC60YJcblx0XHRmb3IgKHZhciBrZXkgaW4gYXBwX29wdGlvbnMpe1xuXHRcdFx0dGhpcy5vcHRpb25zW2tleV0gPSBhcHBfb3B0aW9uc1trZXldO1xuXHRcdH1cblx0fWVsc2UgaWYoYXBwX29wdGlvbnMhPXVuZGVmaW5lZCAmJiB0eXBlb2YgYXBwX29wdGlvbnMgPT0gXCJmdW5jdGlvblwiKXsgLy8g0JXRgdC70Lgg0YTRg9C90LrRhtC40Y8sINGC0L4g0LfQsNC/0LjRgdGL0LLQsNC10Lwg0YTRg9C90LrRhtC40Y4g0LLQvtC30LLRgNCw0YLQsFxuXHRcdHRoaXMub3B0aW9uc1tcImNhbGxiYWNrXCJdID0gYXBwX29wdGlvbnM7XG5cdH1cbn1cblxuLyotLS0tLS0tLS0tLS0g0KPRgdGC0LDQvdC+0LLQutCwINC+0L/RhtC40Lkg0L/RgNC40LvQvtC20LXQvdC40Y8gLS0tLS0tLS0tLS0tKi9cblxuLyotLS0tLS0tLS0tLS0g0JfQsNC/0YPRgdC6L9Ce0YHRgtCw0L3QvtCy0LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRjyAtLS0tLS0tLS0tLS0qL1xuXG4vKipcbipcdNCk0YPQvdC60YbQuNGPINC00LvRjyDQt9Cw0L/Rg9GB0LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRjyBcbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbipcdEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0g0YTRg9C90LrRhtC40Y8g0LLRi9C30L7QstCwLCDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90YvQuSDQv9Cw0YDQsNC80LXRgtGAXG4qXG4qXHRAcmV0dXJuIHt0aGlzfSAtINCS0L7Qt9Cy0YDQsNGJ0LDQtdC8INC+0LHRitC10LrRgiBBcHBcbipcbiovXG5BcHAucHJvdG90eXBlLnJ1biA9IGZ1bmN0aW9uKGNhbGxiYWNrKXtcblx0bGV0IF90aGlzID0gdGhpcztcblx0Ly8g0JXRgdC70Lgg0L/RgNC40LvQvtC20LXQvdC40LUg0LfQsNC/0YPRidC10L3Qviwg0YLQviDQv9C+0LLRgtC+0YDQvdC+0LPQviDQtdCz0L4g0L3QtSDQt9Cw0L/Rg9GB0LrQsNC10Lxcblx0aWYodGhpcy5fX3N0YXJ0ZWRfXz09dHJ1ZSl7XG5cdFx0cmV0dXJuIHRoaXM7XG5cdH1cblx0Ly8g0JXRgdC70Lgg0L3QsNC00L4g0L/RgNC40LrRgNC10L/QuNGC0Ywg0L/RgNC40LvQvtC20LXQvdC40LUg0Log0YHRgtGA0LDQvdC40YbQtSwg0YLQviDQv9GA0LjQutGA0LXQv9C70Y/QtdC8INC10LPQvlxuXHRpZih0aGlzLm9wdGlvbnNbXCJhdHRhY2hcIl09PT10cnVlKXtcblx0XHR0aGlzLl9fYXR0YWNoZWRfXyA9IHRydWU7XG5cdFx0dGhpcy5fX2JvZHlfXy5saXN0ZW4oJ29uJywgJ2NsaWNrJywgdGhpcy5fX2F0dGFjaGVkX2NhbGxiYWNrX18pO1xuXG5cdFx0d2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3BvcHN0YXRlJywgZnVuY3Rpb24gKGV2ZW50KSB7XG5cdFx0XHRfdGhpcy5fX3JvdXRlcl9jaGVja19ydW5fXygpO1xuXHRcdH0pO1xuXG5cdFx0aWYoX3RoaXMub3B0aW9uc1tcImJldmVudHNcIl0ubGVuZ3RoPjApe1xuXHRcdFx0bGV0IGJpbmRfZXZuZXRzID0gX3RoaXMub3B0aW9uc1tcImJldmVudHNcIl0uam9pbihcIixcIik7XG5cdFx0XHR0aGlzLndhaXQoXCJldmVudDpbXCIrYmluZF9ldm5ldHMrXCJdXCIsZnVuY3Rpb24oZWxlbSwgZXZlbnQpe1xuXHRcdFx0XHRsZXQgYmluZCA9IGVsZW0uYXR0cihcImFwbC1iaW5kXCIpO1xuXHRcdFx0XHRpZihiaW5kPT09bnVsbCB8fCBiaW5kPT09XCJcIil7cmV0dXJuIGZhbHNlO31cblx0XHRcdFx0aWYodGhpcy5ncmFiKGJpbmQpPT1lbGVtLnZhbHVlKXtyZXR1cm4gZmFsc2U7fVxuXHRcdFx0XHRsZXQgY2hlY2sgPSBlbGVtLmF0dHIoXCJhcGwtY2hlY2tcIik7XG5cdFx0XHRcdGlmKGNoZWNrIT1udWxsICYmIGVsZW0udmFsdWUhPT1cIlwiKXtcblx0XHRcdFx0XHRsZXQgY2hlY2tfc3RvcmFnZSA9IGNoZWNrLnNwbGl0KFwiL1wiKTtcblx0XHRcdFx0XHRpZihjaGVja19zdG9yYWdlLmxlbmd0aCE9Myl7XG5cdFx0XHRcdFx0XHRlbGVtLmF0dHIoXCJhcGwtZXJyb3JcIiwgXCJ2YWx1ZVwiKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0bGV0IGNoZWNrX3N0YXR1cyA9IGVsZW0udmFsdWUubWF0Y2gobmV3IFJlZ0V4cChjaGVja19zdG9yYWdlWzFdLCBjaGVja19zdG9yYWdlWzJdKSk7XG5cdFx0XHRcdFx0aWYoY2hlY2tfc3RhdHVzPT09bnVsbCl7XG5cdFx0XHRcdFx0XHRlbGVtLmF0dHIoXCJhcGwtZXJyb3JcIiwgXCJ2YWx1ZVwiKTtcblx0XHRcdFx0XHRcdHJldHVybiBmYWxzZTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdFx0ZWxlbS5hdHRyKFwiYXBsLWVycm9yXCIsIG51bGwpO1xuXHRcdFx0XHR0aGlzLnN0YWZmKGJpbmQsIGVsZW0udmFsdWUpO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0pO1xuXHRcdH1cblx0fVxuXHQgLy8g0KHRgtCw0LLQuNC8INGB0YLQsNGC0YPRgSDQt9Cw0L/Rg9GB0LrQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xuXHR0aGlzLl9fc3RhcnRlZF9fID0gdHJ1ZTtcblx0Ly8g0JXRgdC70Lgg0LXRgdGC0Ywg0L3QvtCy0YvQuSDQutC+0LvQu9Cx0LXQuiwg0YLQviDQvtCx0L3QvtCy0LvRj9C10Lwg0LrQvtC+0LvQsdC10Log0L/RgNC40LvQvtC20LXQvdC40Y9cblx0aWYoY2FsbGJhY2shPXVuZGVmaW5lZCAmJiB0eXBlb2YgY2FsbGJhY2sgPT0gXCJmdW5jdGlvblwiKXt0aGlzLm9wdGlvbnNbXCJjYWxsYmFja1wiXSA9IGNhbGxiYWNrO31cblx0Ly8g0JLRi9C30YvQstCw0LXQvCDQutC+0L7Qu9Cx0LXQulxuXG5cdC8vINCV0YHQu9C4INC90LDQtNC+INC/0YDQuNC60YDQtdC/0LjRgtGMINC/0YDQuNC70L7QttC10L3QuNC1INC6INGB0YLRgNCw0L3QuNGG0LUsINGC0L4g0L/RgNC40LrRgNC10L/Qu9GP0LXQvCDQtdCz0L5cblx0dGhpcy5vcHRpb25zW1wiY2FsbGJhY2tcIl0uY2FsbCh0aGlzKTtcblx0Ly8g0JXRgdC70Lgg0L/RgNC40LvQvtC20LXQvdC40LUg0LTQtdC80L7QvSDRgtC+INC30LDQv9GD0YHQutCw0LXQvCDRgtCw0LnQvNC10YBcblx0aWYodGhpcy5vcHRpb25zW1widHlwZVwiXT09PVwiZGFlbW9uXCIpe1xuXHRcdGxldCBfdGhpcyA9IHRoaXM7XG5cdFx0dGhpcy5fX3RpbWVyX18gPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG5cdFx0XHRfdGhpcy5vcHRpb25zW1wiY2FsbGJhY2tcIl0uY2FsbChfdGhpcyk7XG5cdFx0fSwgdGhpcy5vcHRpb25zW1wicnRpbWVcIl0gKiAxMDAwKTtcblx0fVxuXHRcblx0dGhpcy5fX3JvdXRlcl9jaGVja19ydW5fXygpO1xuXHRcblx0cmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuKlx00J7RgdGC0LDQvdC+0LLQutCwINC/0YDQuNC70L7QttC10L3QuNGPIFxuKlxuKlx0QGF1dGhvciB0aDEybGVnaW9uKFBhdmxvIEt1ZGlsKVxuKlxuKlx0QHJldHVybiB7dGhpc30gLSDQktC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIgQXBwXG4qXG4qL1xuQXBwLnByb3RvdHlwZS5zdG9wID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5fX2F0dGFjaGVkX189PXRydWUpe1xuXHRcdHRoaXMuX19ib2R5X18ubGlzdGVuKCdvZmYnLCAnY2xpY2snLCB0aGlzLl9fYXR0YWNoZWRfY2FsbGJhY2tfXyk7XG5cdFx0dGhpcy5fX2F0dGFjaGVkX18gPSBmYWxzZTtcblx0fVxuXHR0aGlzLl9fc3RhcnRlZF9fID0gZmFsc2U7XG5cblx0aWYodGhpcy5vcHRpb25zW1widHlwZVwiXT09PVwiZGFlbW9uXCIgJiYgdGhpcy5fX3RpbWVyX18hPW51bGwpe1xuXHRcdGNsZWFySW50ZXJ2YWwodGhpcy5fX3RpbWVyX18pO1xuXHR9XG59XG5cbi8qLS0tLS0tLS0tLS0tINCX0LDQv9GD0YHQui/QntGB0YLQsNC90L7QstC60LAg0L/RgNC40LvQvtC20LXQvdC40Y8gLS0tLS0tLS0tLS0tKi9cblxuLyotLS0tLS0tLS0tLS0g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQuCDQstGL0LfQvtCyINCy0LXQudGC0LXRgNC+0LIgLS0tLS0tLS0tLS0tKi9cbi8qKlxuKlx00JzQtdGC0L7QtCDQtNC70Y8g0L/RgNC+0LLQtdGA0LrQuCBVUkwg0Lgg0LLRi9C30L7QstCwINCy0LXQudGC0LXRgNC+0LJcbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbiovXG5BcHAucHJvdG90eXBlLl9fcm91dGVyX2NoZWNrX3J1bl9fID0gZnVuY3Rpb24oKXtcblx0dGhpcy5iZWVwKFwicm91dGU6XCIrbG9jYXRpb24ucGF0aG5hbWUpO1xuXHRpZihsb2NhdGlvbi5oYXNoIT1cIlwiKXtcblx0XHR0aGlzLmJlZXAoXCJoYXNoOlwiK2xvY2F0aW9uLmhhc2gpO1xuXHR9XG5cdGxldCBwYXJhbXNfcG9zID0gbG9jYXRpb24uaHJlZi5pbmRleE9mKFwiP1wiKTtcblx0aWYocGFyYW1zX3BvcyE9PS0xKXtcblx0XHRsZXQgcGFyYW1zX3N0ciA9IGxvY2F0aW9uLmhyZWYuc2xpY2UocGFyYW1zX3BvcysxKS5zcGxpdChcIiNcIilbMF07XG5cdFx0bGV0IHBhcmFtcyA9IHBhcnNlX3BhcmFtcyhwYXJhbXNfc3RyKTtcblx0XHRmb3IobGV0IGtleSBpbiBwYXJhbXMpe1xuXHRcdFx0dGhpcy5iZWVwKFwicGFyYW06XCIra2V5LCBwYXJhbXNba2V5XSwga2V5KTtcblx0XHR9XG5cdH1cbn1cblxuLyoqXG4qXHTQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QsNGA0YHQuNC90LPQsCDQstC10LnRgtC10YDQvtCyXG4qXG4qXHRAYXV0aG9yIHRoMTJsZWdpb24oUGF2bG8gS3VkaWwpXG4qXG4qXHRAcGFyYW0ge1N0cmluZ30gc3RyX3BhcmFtcyAtINGB0YLRgNC+0LrQsCDQv9Cw0YDQsNC80LXRgtGA0L7QslxuKlx0XG4qXHRAcmV0dXJuIHtPYmplY3R9IC0g0KHQv9C40YHQvtC6INC+0LHRgNCw0LHQvtGC0LDQvdC90YvRhSDQv9Cw0YDQsNC80LXRgtGA0L7QslxuKlxuKi9cbnZhciBwYXJzZV9wYXJhbXMgPSBmdW5jdGlvbihzdHJfcGFyYW1zKXtcblx0dmFyIHJldCA9IHt9LFxuXHRcdHNlZyA9IHN0cl9wYXJhbXMuc3BsaXQoJyYnKSxcblx0XHRsZW4gPSBzZWcubGVuZ3RoLCBpID0gMCwgcztcblx0Zm9yICg7aTxsZW47aSsrKSB7XG5cdFx0aWYgKCFzZWdbaV0pIHsgY29udGludWU7IH1cblx0XHRzID0gc2VnW2ldLnNwbGl0KCc9Jyk7XG5cdFx0cmV0W3NbMF1dID0gc1sxXTtcblx0fVxuXHRyZXR1cm4gcmV0O1xufVxuXG4vKipcbipcdNCk0YPQvdC60YbQuNGPINC00LvRjyDQv9Cw0YDRgdC40L3Qs9CwINCy0LXQudGC0LXRgNC+0LJcbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbipcdEBwYXJhbSB7U3RyaW5nfSByYXdfdGFyZ2V0IC0g0YPQutCw0LfQsNGC0LXQu9GMINC90LAg0LLQtdC50YLQtdGAXG4qXHRcbipcdEByZXR1cm4ge0FycmF5fSAtINCh0L/QuNGB0L7QuiDQvtCx0YDQsNCx0L7RgtCw0L3QvdGL0YUg0L/QsNGA0LDQvNC10YLRgNC+0LJcbipcbiovXG52YXIgcGFyc2Vfd2FpdCA9IGZ1bmN0aW9uKHJhd190YXJnZXQgPSBcIlwiKXtcblx0cmF3X3RhcmdldCA9IHJhd190YXJnZXQudG9Mb3dlckNhc2UoKTtcblx0cmF3X3RhcmdldCA9IHJhd190YXJnZXQucmVwbGFjZSgvXFwpW1xcc10rOy9naSwgXCIpO1wiKS5yZXBsYWNlKC9cXC8rL2dpLFwiL1wiKS5yZXBsYWNlKC9bXFwvK10kL2dpLFwiXCIpO1xuXG5cdGxldCByZXRydW5fbGlzdCA9IFtcIlwiLCBcIipcIiwgXCIqXCIsIFwiKlwiXTtcblx0bGV0IHJldHVybl9pbmRleCA9IDA7XG5cdGxldCBwYXJ0ID0gMDtcblx0bGV0IGV4cHJlc3Npb24gPSBmYWxzZTtcblx0bGV0IHJlZ19saXN0ID0gW107XG5cdGxldCByZWcgPSBcIlwiO1xuXG5cdGZvcihsZXQgaSA9IDA7IGk8cmF3X3RhcmdldC5sZW5ndGg7IGkrKyl7XG5cdFx0c3dpdGNoIChyYXdfdGFyZ2V0W2ldKSB7XG5cdFx0XHRjYXNlIFwiOlwiOmlmKHBhcnQ9PTApe3BhcnQgPSAxO3JldHVybl9pbmRleCA9IDM7YnJlYWs7fVxuXHRcdFx0Y2FzZSBcIntcIjppZihwYXJ0PT0xICYmIGV4cHJlc3Npb249PWZhbHNlKXtyZXR1cm5faW5kZXggPSAxO2JyZWFrO31cblx0XHRcdGNhc2UgXCJbXCI6aWYocGFydD09MSAmJiBleHByZXNzaW9uPT1mYWxzZSl7cmV0dXJuX2luZGV4ID0gMjticmVhazt9XG5cdFx0XHRjYXNlIFwifVwiOlxuXHRcdFx0Y2FzZSBcIl1cIjppZihwYXJ0PT0xICYmIGV4cHJlc3Npb249PWZhbHNlKXtyZXR1cm5faW5kZXggPSAzO2JyZWFrO31cblx0XHRcdGRlZmF1bHQ6XG5cdFx0XHRcdGlmKGV4cHJlc3Npb249PT10cnVlKXtyZWcgKz0gcmF3X3RhcmdldFtpXTt9XG5cdFx0XHRcdGlmKHJhd190YXJnZXRbaV09PVwiKFwiICYmIHJhd190YXJnZXQuc3Vic3RyaW5nKGktMywgaSk9PVwicmVnXCIpe2V4cHJlc3Npb24gPSB0cnVlOyByZWcgPSBcIlwiO31cblx0XHRcdFx0XG5cdFx0XHRcdGlmKHJhd190YXJnZXRbaV09PVwiKVwiICYmIHR5cGVvZiByYXdfdGFyZ2V0W2krMV0hPVwidW5kZWZpbmVkXCIgJiYgcmF3X3RhcmdldFtpKzFdPT1cIjtcIil7XG5cdFx0XHRcdFx0ZXhwcmVzc2lvbiA9IGZhbHNlOyByZWdfbGlzdC5wdXNoKHJlZy5zdWJzdHJpbmcoMCwgcmVnLmxlbmd0aCAtIDEpKTsgcmVnID0gXCJcIjtcblx0XHRcdFx0fVxuXHRcdFx0XHRyZXRydW5fbGlzdFtyZXR1cm5faW5kZXhdID0gKHJldHJ1bl9saXN0W3JldHVybl9pbmRleF09PVwiKlwiKT9cIlwiOnJldHJ1bl9saXN0W3JldHVybl9pbmRleF07XG5cdFx0XHRcdHJldHJ1bl9saXN0W3JldHVybl9pbmRleF0gKz0gcmF3X3RhcmdldFtpXTtcblx0XHRcdFx0YnJlYWs7XG5cdFx0fVxuXHR9XG5cdFxuXHRyZXRydW5fbGlzdFszXSA9IHJldHJ1bl9saXN0WzBdK1wiOlwiK3JldHJ1bl9saXN0WzNdO1xuXHRyZXRydW5fbGlzdFs0XSA9IHJlZ19saXN0O1xuXHRmb3IobGV0IGkgPSAwOyBpPHJlZ19saXN0Lmxlbmd0aDsgaSsrKXtcblx0XHRsZXQgcmVnX2tleSA9IFwicmVnKFwiK3JlZ19saXN0W2ldK1wiKTtcIjtcblx0XHRyZXRydW5fbGlzdFszXSA9IHJldHJ1bl9saXN0WzNdLnJlcGxhY2UocmVnX2tleSwgXCJyZWdAXCIraSk7XG5cdH1cblx0cmV0cnVuX2xpc3RbM10gPSByZXRydW5fbGlzdFszXS5yZXBsYWNlKC9cXHMrL2dpLCBcIlwiKTtcblx0cmV0cnVuX2xpc3RbMl0gPSByZXRydW5fbGlzdFsyXS5yZXBsYWNlKC9cXHMrL2dpLCBcIlwiKTtcblx0XG5cdHJldHVybiByZXRydW5fbGlzdDtcbn1cblxuLyoqXG4qXHTQpNGD0L3QutGG0LjRjyDQt9Cw0L/Rg9GB0LrQsCDQu9C40YHRgtC10L3QtdGA0L7QslxuKlxuKlx0QGF1dGhvciB0aDEybGVnaW9uKFBhdmxvIEt1ZGlsKVxuKlxuKlx0QHBhcmFtIHtPYmplY3R9IGV2ZW50X2xpc3QgLSDQodC/0LjRgdC+0Log0LjQstC10L3RgtC+0LJcbipcdFxuKlx0QHJldHVybiB7dGhpc30gLSDQktC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIgQXBwXG4qXG4qL1xuQXBwLnByb3RvdHlwZS5fX3N0YXJ0X2V2ZW50X2xpc3RlbmVyc19fID0gZnVuY3Rpb24oKXtcblx0aWYodGhpcy5vcHRpb25zW1wiYXR0YWNoXCJdPT09ZmFsc2Upe1xuXHRcdHJldHVybiB0aGlzO1xuXHR9XG5cblx0bGV0IF90aGlzID0gdGhpcztcblx0Zm9yKGxldCBrZXkgaW4gdGhpcy5fX2V2ZW50c19ubGlzdF9fKXtcblx0XHRpZih0aGlzLl9fZXZlbnRzX25saXN0X19ba2V5XSE9PW51bGwpe2NvbnRpbnVlO31cblx0XHQoZnVuY3Rpb24oZXZlbnRfbmFtZSl7XG5cdFx0XHRfdGhpcy5fX2V2ZW50c19ubGlzdF9fW2tleV0gPSBmdW5jdGlvbihldmVudCl7XG5cdFx0XHRcdHZhciBbc3RhdHVzX2VsZW1lbnQsIGVsZW1lbnRdID0gc2VhcmNoX2VsZW1lbnQoZXZlbnQsIFwiYXBsLWV2ZW50XCIsIF90aGlzLm9wdGlvbnNbXCJzaWduXCJdKTtcblx0XHRcdFx0aWYgKHN0YXR1c19lbGVtZW50PT10cnVlKXtcblx0XHRcdFx0XHRsZXQgdGFyZ2V0ID0gZWxlbWVudC5hdHRyKCdhcGwtZXZlbnQnKTtcblx0XHRcdFx0XHRsZXQgdG1wID0gdGFyZ2V0Lm1hdGNoKC9eKGV2ZW50KS8pO1xuXHRcdFx0XHRcdGxldCB0YXJnZXRfdHlwZSA9ICh0bXAhPT1udWxsKT90bXBbMV06XCJldmVudFwiO1xuXHRcdFx0XHRcdFxuXHRcdFx0XHRcdHRhcmdldCA9ICh0bXA9PT1udWxsKT90YXJnZXRfdHlwZStcIjpcIit0YXJnZXQ6dGFyZ2V0O1xuXHRcdFx0XHRcdGxldCBbdHlwZSwgZXh0LCBtZXRob2RfcmF3LCB0YXJnZXRfcmF3XSA9IHBhcnNlX3dhaXQodGFyZ2V0KTtcblx0XHRcdFx0XHRsZXQgbWV0aG9kX3N0b3JhZ2UgPSBtZXRob2RfcmF3LnNwbGl0KFwiLFwiKTtcblx0XHRcdFx0XHRmb3IobGV0IGkgPSAwOyBpPG1ldGhvZF9zdG9yYWdlLmxlbmd0aDsgaSsrKXtcblx0XHRcdFx0XHRcdGxldCBtZXRob2QgPSBtZXRob2Rfc3RvcmFnZVtpXTtcblx0XHRcdFx0XHRcdGlmKG1ldGhvZCE9XCIqXCIgJiYgbWV0aG9kIT1ldmVudF9uYW1lKXtcblx0XHRcdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR0YXJnZXQgPSB0YXJnZXRfcmF3K1wie1wiK2V4dCtcIn1cIitcIltcIittZXRob2QrXCJdXCI7XG5cdFx0XHRcdFx0XHRfdGhpcy5iZWVwKHRhcmdldCwgZWxlbWVudCwgZXZlbnQsIHtcInR5cGVcIjogdHlwZSwgXCJleHRcIjogZXh0LCBcIm1ldGhvZFwiOiBtZXRob2R9KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0cmV0dXJuIHRydWU7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KShrZXkpO1xuXHRcdFxuXHRcdHRoaXMuX19ib2R5X18ubGlzdGVuKCdvbicsIGtleSwgdGhpcy5fX2V2ZW50c19ubGlzdF9fW2tleV0pO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuKlx00KTRg9C90LrRhtC40Y8g0LTQu9GPINC00L7QsdCw0LLQu9C10L3QuNGPINCyINGB0L/QuNGB0L7QuiDRhtC10LvQuCDQtNC70Y8g0L/RgNC+0YHQu9GD0YjQuNCy0LDQvdC40Y8g0LrQu9C40LrQvtCyINC90LAg0L/RgdC10LLQtNC+0LrQvdC+0L/QutC4INC/0YDQuNC70L7QttC10L3QuFxuKlxuKlx0QGF1dGhvciB0aDEybGVnaW9uKFBhdmxvIEt1ZGlsKVxuKlxuKlx0QHBhcmFtIHtTdHJpbmd9IHJhd190YXJnZXQgLSDRg9C60LDQt9Cw0YLQtdC70Yws0LrQsNC60L7QuSDQstC10LnRgtC10YAg0YHQu9GD0YjQsNGC0YxcbipcdEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIC0g0YTRg9C90LrRhtC40Y8g0LLRi9C30L7QstCwLCDQvdC1INC+0LHRj9C30LDRgtC10LvRjNC90YvQuSDQv9Cw0YDQsNC80LXRgtGAXG4qXHRcbipcdEByZXR1cm4ge3RoaXN9IC0g0JLQvtC30LLRgNCw0YnQsNC10Lwg0L7QsdGK0LXQutGCIEFwcFxuKlxuKi9cbkFwcC5wcm90b3R5cGUud2FpdCA9IGZ1bmN0aW9uKHJhd190YXJnZXQgPSBcIlwiLCBjYWxsYmFjayl7XG5cdC8vaWYocmF3X3RhcmdldC5pbmRleE9mKFwiOlwiKT09LTEpe3JldHVybiB0aGlzO31cblx0Y2FsbGJhY2sgPSBjYWxsYmFjayB8fCBmdW5jdGlvbigpe307XG5cdFxuXHRsZXQgW3R5cGUsIGV4dCwgbWV0aG9kX3JhdywgdGFyZ2V0LCBleHByc10gPSBwYXJzZV93YWl0KHJhd190YXJnZXQpO1xuXHRpZih0eXBlPT09dGFyZ2V0IHx8ICh0eXBlPT1cImV2ZW50XCIgJiYgbWV0aG9kX3Jhdz09PVwiKlwiKSl7cmV0dXJuIHRoaXM7fVxuXHRcblx0bGV0IG1ldGhvZF9zdG9yYWdlID0gbWV0aG9kX3Jhdy5zcGxpdChcIixcIik7XG5cdGZvcihsZXQgaSA9IDA7IGk8bWV0aG9kX3N0b3JhZ2UubGVuZ3RoOyBpKyspe1xuXHRcdGxldCBtZXRob2QgPSBtZXRob2Rfc3RvcmFnZVtpXTtcblxuXHRcdGlmKHR5cGU9PVwiZXZlbnRcIil7XG5cdFx0XHRpZih0eXBlb2YgdGhpcy5fX2V2ZW50c19ubGlzdF9fW21ldGhvZF09PVwidW5kZWZpbmVkXCIpe1xuXHRcdFx0XHR0aGlzLl9fZXZlbnRzX25saXN0X19bbWV0aG9kXSA9IG51bGw7XG5cdFx0XHR9XG5cblx0XHRcdHRoaXMuX19zdGFydF9ldmVudF9saXN0ZW5lcnNfXygpO1xuXHRcdH1cblx0XHRcblx0XHRpZih0eXBlb2YgdGhpcy5fX3dhaXRfbGlzdF9fW3RhcmdldF09PVwidW5kZWZpbmVkXCIpe1xuXHRcdFx0dGhpcy5fX3dhaXRfbGlzdF9fW3RhcmdldF0gPSBbXTtcblx0XHR9XG5cblx0XHR0aGlzLl9fd2FpdF9saXN0X19bdGFyZ2V0XS5wdXNoKHtcImV4dFwiOmV4dCxcImZ1bmNcIjpjYWxsYmFjaywgXCJleHByc1wiOmV4cHJzLCBcIm1ldGhvZFwiOm1ldGhvZCwgXCJ0eXBlXCI6dHlwZX0pO1xuXHR9XG5cblx0cmV0dXJuIHRoaXM7XG59XG5cbi8qKlxuKlx00KTRg9C90LrRhtC40Y8g0LTQu9GPINCy0YvQt9C+0LLQsCDRhNGD0L3QutGG0LjQuCwg0LrQvtGC0L7RgNGD0Y4g0L/QvtGB0YLQsNCy0LjQu9C4INC90LAg0L/RgNC+0YHQu9GD0YjQutGDXG4qXG4qXHRAYXV0aG9yIHRoMTJsZWdpb24oUGF2bG8gS3VkaWwpXG4qXG4qXHRAcGFyYW0ge1N0cmluZ30gcmF3X3RhcmdldCAtINGD0LrQsNC30LDRgtC10LvRjCzQutCw0LrRg9GOINC60L3QvtC/0LrRgyDRgdC70YPRiNCw0YLRjFxuKlx0QHBhcmFtIHvQoNCw0LfQvdGL0Lkg0YLQuNC/fSBhcmd1bWVudHMgLSBkYXRhINC/0LDRgNCw0LzQtdGC0YDRiywg0LrQvtGC0L7RgNGL0Lkg0L3QsNC00L4g0L/QtdGA0LXQtNCw0YLRjCDQsiDRhNGD0L3QutGG0LjRji5cbipcdFxuKlx0QHJldHVybiB7dGhpc30gLSDQktC+0LfQstGA0LDRidCw0LXQvCDQvtCx0YrQtdC60YIgQXBwXG4qXG4qL1xuQXBwLnByb3RvdHlwZS5iZWVwID0gZnVuY3Rpb24ocmF3X3RhcmdldCl7XG5cdC8vaWYocmF3X3RhcmdldC5pbmRleE9mKFwiOlwiKT09LTEpe3JldHVybiB0aGlzO31cblx0XG5cdGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAxKTtcblx0aWYoYXJncy5sZW5ndGg9PTApe1xuXHRcdGFyZ3MucHVzaChudWxsKTtcblx0fVxuXHRcblx0bGV0IFt0eXBlLCBleHQsIG1ldGhvZCwgdGFyZ2V0XSA9IHBhcnNlX3dhaXQocmF3X3RhcmdldCk7XG5cdFxuXHRsZXQgcmV0dXJuX3ZhbHVlcyA9IHt9LFxuXHRcdHJldHVybl92YWx1ZSA9IG51bGw7XG5cdGxldCByZXR1cm5fc3RhdHVzID0gZmFsc2U7XG5cdGxldCB3YWl0X2luZGV4ID0gMTtcblx0bGV0IF90aGlzID0gdGhpcztcblx0bGV0IGZvcmNlX3dhaXRlcnMgPSBmdW5jdGlvbihwYXJlbnQsIG91dF9hcmdzKXtcblx0XHRmb3IgKGxldCBpID0gMDsgaTxwYXJlbnQubGVuZ3RoOyBpKyspe1xuXHRcdFx0aWYgKGV4dCE9XCIqXCIgJiYgcGFyZW50W2ldW1wiZXh0XCJdIT1leHQpe1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0aWYgKG1ldGhvZCE9XCIqXCIgJiYgcGFyZW50W2ldW1wibWV0aG9kXCJdIT1tZXRob2Qpe1xuXHRcdFx0XHRjb250aW51ZTtcblx0XHRcdH1cblx0XHRcdFxuXHRcdFx0cmV0dXJuX3ZhbHVlID0gcGFyZW50W2ldW1wiZnVuY1wiXS5hcHBseShfdGhpcywgb3V0X2FyZ3MpO1xuXHRcdFx0aWYgKHJldHVybl92YWx1ZSE9bnVsbCAmJiB0eXBlb2YgcmV0dXJuX3ZhbHVlICE9IFwidW5kZWZpbmVkXCIpe1xuXHRcdFx0XHRyZXR1cm5fc3RhdHVzID0gdHJ1ZTtcblx0XHRcdFx0aWYocGFyZW50W2ldW1wiZXh0XCJdPT1cIipcIil7XG5cdFx0XHRcdFx0cmV0dXJuX3ZhbHVlc1tcIndhaXRfXCIrd2FpdF9pbmRleF0gPSByZXR1cm5fdmFsdWU7XG5cdFx0XHRcdFx0d2FpdF9pbmRleCsrO1xuXHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRyZXR1cm5fdmFsdWVzW1wid2FpdF9cIitwYXJlbnRbaV1bXCJleHRcIl1dID0gcmV0dXJuX3ZhbHVlO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0aWYgKHRoaXMuX193YWl0X2xpc3RfX1t0eXBlK1wiOipcIl0hPXVuZGVmaW5lZCApe1xuXHRcdGZvcmNlX3dhaXRlcnModGhpcy5fX3dhaXRfbGlzdF9fW3R5cGUrXCI6KlwiXSwgYXJncyk7XG5cdH1cblx0XG5cdGlmKHRhcmdldD09dHlwZStcIjoqXCIpe1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX193YWl0X2xpc3RfXyl7XG5cdFx0XHRpZih0aGlzLl9fd2FpdF9saXN0X19ba2V5XVswXVtcInR5cGVcIl0hPXR5cGUgXG5cdFx0XHQgICB8fCBrZXkgPT0gdGhpcy5fX3dhaXRfbGlzdF9fW2tleV1bMF1bXCJ0eXBlXCJdK1wiOipcIil7Y29udGludWU7fVxuXHRcdFx0Zm9yY2Vfd2FpdGVycyh0aGlzLl9fd2FpdF9saXN0X19ba2V5XSwgYXJncyk7XG5cdFx0fVxuXHR9ZWxzZSBpZiAodGhpcy5fX3dhaXRfbGlzdF9fW3RhcmdldF0hPXVuZGVmaW5lZCl7XG5cdFx0Zm9yY2Vfd2FpdGVycyh0aGlzLl9fd2FpdF9saXN0X19bdGFyZ2V0XSwgYXJncyk7XG5cdH1lbHNlIGlmICh0eXBlID09PSBcInJvdXRlXCIpe1xuXHRcdGZvcihsZXQga2V5IGluIHRoaXMuX193YWl0X2xpc3RfXyl7XG5cdFx0XHRpZih0aGlzLl9fd2FpdF9saXN0X19ba2V5XVswXVtcInR5cGVcIl0hPVwicm91dGVcIiB8fCBrZXkgPT0gdGhpcy5fX3dhaXRfbGlzdF9fW2tleV1bMF1bXCJ0eXBlXCJdK1wiOipcIil7Y29udGludWU7fVxuXHRcdFx0bGV0IGJlZXBfc3RvcmFnZSA9IHRhcmdldC5zdWJzdHJpbmcodHlwZS5sZW5ndGgrMSkuc3BsaXQoXCIvXCIpO1xuXHRcdFx0bGV0IGxpc3Rfc3RvcmFnZSA9IGtleS5zdWJzdHJpbmcodHlwZS5sZW5ndGgrMSkuc3BsaXQoXCIvXCIpO1xuXHRcdFx0YmVlcF9zdG9yYWdlID0gYmVlcF9zdG9yYWdlLmZpbHRlcihpID0+IGkpO1xuXHRcdFx0bGlzdF9zdG9yYWdlID0gbGlzdF9zdG9yYWdlLmZpbHRlcihpID0+IGkpO1xuXHRcdFx0XG5cdFx0XHRpZihiZWVwX3N0b3JhZ2UubGVuZ3RoIT1saXN0X3N0b3JhZ2UubGVuZ3RoKXticmVhazt9XG5cdFx0XHRsZXQgY29tcGFyZSA9IHRydWU7XG5cdFx0XHRsZXQgcm91dGVfYXJncyA9IHt9O1xuXHRcdFx0XG5cdFx0XHRmb3IobGV0IGogPSAwOyBqPGJlZXBfc3RvcmFnZS5sZW5ndGg7IGorKyl7XG5cdFx0XHRcdGxldCB2YXJfbmFtZSA9IFwiXCI7XG5cdFx0XHRcdGxldCB2YXJfZXhwciA9IFwiXCI7XG5cdFx0XHRcdGxldCB2YXJfZXhwcl9rZXlzID0gXCJcIjtcblxuXHRcdFx0XHRpZihsaXN0X3N0b3JhZ2Vbal0uc2xpY2UoMCw0KT09PVwicmVnQFwiKXtcblx0XHRcdFx0XHRsZXQgZXhwcl9rZXkgPSBwYXJzZUludChsaXN0X3N0b3JhZ2Vbal0uc2xpY2UoNCkpO1xuXHRcdFx0XHRcdGxldCBleHByX3JhdyA9IHRoaXMuX193YWl0X2xpc3RfX1trZXldWzBdW1wiZXhwcnNcIl1bZXhwcl9rZXldO1xuXHRcdFx0XHRcdGlmKGV4cHJfcmF3WzBdIT1cIi9cIil7XG5cdFx0XHRcdFx0XHRsZXQgdmFyX3BvcyA9IGV4cHJfcmF3LmluZGV4T2YoXCI6XCIpO1xuXHRcdFx0XHRcdFx0aWYodmFyX3BvcyE9LTEpe1xuXHRcdFx0XHRcdFx0XHR2YXJfbmFtZSA9IGV4cHJfcmF3LnN1YnN0cmluZygwLCB2YXJfcG9zKTtcblx0XHRcdFx0XHRcdFx0dmFyX2V4cHIgPSBleHByX3Jhdy5zdWJzdHJpbmcodmFyX3BvcysxKTtcblx0XHRcdFx0XHRcdFx0bGV0IHRtcCA9IHZhcl9leHByLnNwbGl0KFwiL1wiKTtcblx0XHRcdFx0XHRcdFx0dG1wID0gdG1wLmZpbHRlcihpID0+IGkpO1xuXHRcdFx0XHRcdFx0XHR2YXJfZXhwciA9IHRtcFswXTtcblx0XHRcdFx0XHRcdFx0dmFyX2V4cHJfa2V5cyA9IHRtcFsxXTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHR9XG5cblx0XHRcdFx0XHRsZXQgcmVnID0gKHZhcl9leHByIT1cIlwiKT9uZXcgUmVnRXhwKHZhcl9leHByLCB2YXJfZXhwcl9rZXlzKTpcIlwiO1xuXG5cdFx0XHRcdFx0aWYocmVnPT1cIlwiIHx8IGJlZXBfc3RvcmFnZVtqXS5tYXRjaChyZWcpPT09bnVsbCl7XG5cdFx0XHRcdFx0XHRjb21wYXJlID0gZmFsc2U7XG5cdFx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0XHR9ZWxzZXtcblx0XHRcdFx0XHRcdHJvdXRlX2FyZ3NbdmFyX25hbWVdID0gYmVlcF9zdG9yYWdlW2pdO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fWVsc2UgaWYoYmVlcF9zdG9yYWdlW2pdIT1saXN0X3N0b3JhZ2Vbal0pe1xuXHRcdFx0XHRcdGNvbXBhcmUgPSBmYWxzZTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdFx0aWYoY29tcGFyZT09PXRydWUpe1xuXHRcdFx0XHRmb3JjZV93YWl0ZXJzKHRoaXMuX193YWl0X2xpc3RfX1trZXldLCBbcm91dGVfYXJnc10pO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRcblx0Ly8g0JXRgdC70Lgg0L3QsNC00L4g0LLQtdGA0L3Rg9GC0Ywg0LLRgdC1INC/0LDRgNCw0LzQtdGC0YDRiyDQuCDQtdGB0YLRjCDRh9GC0L4g0LLQvtC30LLRgNCw0YnQsNGC0YwsINCy0L7Qt9Cy0YDQsNGJ0LDQtdC8INGN0YLQvlxuXHRpZiAoZXh0IT1cIipcIiAmJiByZXR1cm5fc3RhdHVzPT10cnVlKXtcblx0XHRyZXR1cm4gcmV0dXJuX3ZhbHVlc1tleHRdO1xuXHR9XG5cdFxuXHRyZXR1cm4gKHJldHVybl9zdGF0dXM9PWZhbHNlKT90aGlzOnJldHVybl92YWx1ZXM7XG5cbn1cblxuLyoqXG4qXHTQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YPQtNCw0LvQtdC90LjRjyDQstC10LnRgtC10YDQsCDQuNC3INC/0YDQuNC70L7QttC10L3QuNGPXG4qXG4qXHRAYXV0aG9yIHRoMTJsZWdpb24oUGF2bG8gS3VkaWwpXG4qXG4qXHRAcGFyYW0ge1N0cmluZ30gcmF3X3RhcmdldCAtINGD0LrQsNC30LDRgtC10LvRjCzQutCw0LrQvtC5INCy0LXQudGC0LXRgCDRg9C00LDQu9GP0YLRjFxuKlx0XG4qXHRAcmV0dXJuIHt0aGlzfSAtINCS0L7Qt9Cy0YDQsNGJ0LDQtdC8INC+0LHRitC10LrRgiBBcHBcbipcbiovXG5BcHAucHJvdG90eXBlLmRlbCA9IGZ1bmN0aW9uKHJhd190YXJnZXQgPSBcIlwiKXtcblx0aWYocmF3X3RhcmdldC5pbmRleE9mKFwiOlwiKT09LTEpe3JldHVybiB0aGlzO31cblx0XG5cdGxldCBbdHlwZSwgZXh0LCBtZXRob2QsIHRhcmdldF0gPSBwYXJzZV93YWl0KHJhd190YXJnZXQpO1xuXG5cdGRlbGV0ZSB0aGlzLl9fd2FpdF9saXN0X19bdGFyZ2V0XTtcblxuXHRyZXR1cm4gdGhpcztcbn1cblxuLyotLS0tLS0tLS0tLS0g0KDQtdCz0LjRgdGC0YDQsNGG0LjRjyDQuCDQstGL0LfQvtCyINCy0LXQudGC0LXRgNC+0LIgLS0tLS0tLS0tLS0tKi9cblxuLyotLS0tLS0tLS0tLS0g0KDQsNCx0L7RgtCwINGBINGF0YDQsNC90LjQu9C40YnQtdC8INC00LDQvdC90YvRhSAtLS0tLS0tLS0tLS0qL1xuXG4vKipcbipcdNCk0YPQvdC60YbQuNGPINC00LvRjyDQt9Cw0LTQsNC90LjRjyDQv9C10YDQtdC80LXQvdC90L7QuVxuKlxuKlx0QGF1dGhvciB0aDEybGVnaW9uKFBhdmxvIEt1ZGlsKVxuKlxuKlx0QHBhcmFtIHtTdHJpbmd9IG5hbWUgLSDQmNC80Y8g0L/QtdGA0LXQvNC10L3QvdC+0LkuXG4qXHRAcGFyYW0ge9Cg0LDQt9C90YvQuSDRgtC40L99IHZhbCAtINCX0L3QsNGH0LXQvdC40LUg0L/QtdGA0LXQvNC10L3QvdC+0LkuXG4qXHRAcGFyYW0ge0Jvb2xlYW59IGJpbmQgLSDQntGC0L/RgNCw0LLQu9GP0YLRjCDQu9C4INGB0L7QsdGL0YLQuNC1IGJpbmQuXG4qXHRcbipcdEByZXR1cm4ge3RoaXN9IC0g0JLQvtC30LLRgNCw0YnQsNC10Lwg0L7QsdGK0LXQutGCIEFwcFxuKlxuKi9cbkFwcC5wcm90b3R5cGUuc3RhZmYgPSBmdW5jdGlvbihuYW1lLCB2YWwgPSBudWxsLCBiaW5kID0gdHJ1ZSwgcHJvdGVjdGlvbiA9IGZhbHNlKXtcblx0dGhpcy5fX3Njb3BlX19bbmFtZV0gPSB2YWw7XG5cdGlmKGJpbmQ9PT10cnVlKXtcblx0XHR0aGlzLmJlZXAoXCJiaW5kOlwiK25hbWUsIHZhbCwgbmFtZSk7XG5cdH1cblx0XG5cdGlmKHRoaXMub3B0aW9uc1tcImF0dGFjaFwiXT09dHJ1ZSl7XG5cdFx0bGV0IGJpbmRfZWxlbXMgPSB0YXIoJ1thcGwtc2lnbj1cIicrdGhpcy5vcHRpb25zW1wic2lnblwiXSsnXCJdIFthcGwtYmluZD1cIicrbmFtZSsnXCJdJywgLTEpO1xuXHRcdGZvcihsZXQgaSA9IDA7IGk8YmluZF9lbGVtcy5sZW5ndGg7IGkrKyl7XG5cdFx0XHRsZXQgYmluZF9lbGVtID0gYmluZF9lbGVtc1tpXTtcblx0XHRcdGlmKGJpbmRfZWxlbSE9bnVsbCAmJiB0eXBlb2YgYmluZF9lbGVtLnZhbHVlIT1cInVuZGVmaW5lZFwiICYmIGJpbmQ9PT10cnVlICYmIGJpbmRfZWxlbS52YWx1ZSE9dmFsKXtcblx0XHRcdFx0YmluZF9lbGVtLnZhbHVlID0gKHZhbD09PW51bGwgfHwgdHlwZW9mIHZhbD09XCJ1bmRlZmluZWRcIik/XCJcIjp2YWw7XG5cdFx0XHR9ZWxzZSBpZihiaW5kX2VsZW0hPW51bGwgJiYgdHlwZW9mIGJpbmRfZWxlbS5pbm5lckhUTUwhPVwidW5kZWZpbmVkXCIgJiYgYmluZD09PXRydWUgJiYgcHJvdGVjdGlvbj09PWZhbHNlKXtcblx0XHRcdFx0YmluZF9lbGVtLmlubmVySFRNTCA9ICh2YWw9PT1udWxsIHx8IHR5cGVvZiB2YWw9PVwidW5kZWZpbmVkXCIpP1wiXCI6dmFsO1xuXHRcdFx0fWVsc2UgaWYoYmluZF9lbGVtIT1udWxsICYmIHR5cGVvZiBiaW5kX2VsZW0uaW5uZXJUZXh0IT1cInVuZGVmaW5lZFwiICYmIGJpbmQ9PT10cnVlICYmIHByb3RlY3Rpb249PT10cnVlKXtcblx0XHRcdFx0YmluZF9lbGVtLmlubmVyVGV4dCA9ICh2YWw9PT1udWxsIHx8IHR5cGVvZiB2YWw9PVwidW5kZWZpbmVkXCIpP1wiXCI6dmFsO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXG5cdHJldHVybiB0aGlzO1xufVxuXG4vKipcbipcdNCk0YPQvdC60YbQuNGPINC00LvRjyDQstC30Y/RgtC40Y8g0L/QtdGA0LXQvNC10L3QvdC+0LlcbipcbipcdEBhdXRob3IgdGgxMmxlZ2lvbihQYXZsbyBLdWRpbClcbipcbipcdEBwYXJhbSB7U3RyaW5nfSBuYW1lIC0g0JjQvNGPINC/0LXRgNC10LzQtdC90L3QvtC5XG4qXHRAcGFyYW0ge9Cg0LDQt9C90YvQuSDRgtC40L99IGR2YWwgLSDQlNC10YTQvtC70YLQvdC+0LUg0LfQvdCw0YfQtdC90LjQtSDQv9C10YDQtdC80LXQvdC90L7QuSwg0LXRgdC70Lgg0L/QtdGA0LXQvNC10L3QvdCw0Y8g0L3QtSDRgdGD0YnQtdGB0YLQstGD0LXRgi5cbipcdFxuKlx0QHJldHVybiB70KDQsNC30L3Ri9C5INGC0LjQv30gLSDQl9C90LDRh9C10L3QuNC1INC/0LXRgNC10LzQtdC90L3QvtC5XG4qXG4qL1xuQXBwLnByb3RvdHlwZS5ncmFiID0gZnVuY3Rpb24obmFtZSwgZHZhbCA9IG51bGwpe1xuXHRyZXR1cm4gKHR5cGVvZiB0aGlzLl9fc2NvcGVfX1tuYW1lXT09XCJ1bmRlZmluZWRcIik/ZHZhbDp0aGlzLl9fc2NvcGVfX1tuYW1lXTtcbn1cblxuLyotLS0tLS0tLS0tLS0g0KDQsNCx0L7RgtCwINGBINGF0YDQsNC90LjQu9C40YnQtdC8INC00LDQvdC90YvRhSAtLS0tLS0tLS0tLS0qL1xuXG4vKi0tLS0tLS0tLS0tLSBBUEwg0LDRgtGA0LjQsdGD0YLRiyAtLS0tLS0tLS0tLS0qL1xuXG4vLyBhcGwtc2lnblxuLy8gYXBsLWJ0blxuLy8gYXBsLWV2ZW50XG4vLyBhcGwtYmluZFxuLy8gYXBsLWNoZWNrXG5cbi8qLS0tLS0tLS0tLS0tIEFQTCDQsNGC0YDQuNCx0YPRgtGLIC0tLS0tLS0tLS0tLSovXG5cbmV4cG9ydCBkZWZhdWx0IEFwcDsiLCIvKi0tLS0tLS0tLS0tLSDQoNCw0LHQvtGC0LAg0YEg0YHQtdC70LXQutGC0L7RgNCw0LzQuCAtLS0tLS0tLS0tLS0qL1xyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLm1hdGNoZXMpIHtcclxuXHRFbGVtZW50LnByb3RvdHlwZS5tYXRjaGVzID0gRWxlbWVudC5wcm90b3R5cGUubWF0Y2hlc1NlbGVjdG9yIHx8IFxyXG5cdEVsZW1lbnQucHJvdG90eXBlLm1vek1hdGNoZXNTZWxlY3RvciB8fFxyXG5cdEVsZW1lbnQucHJvdG90eXBlLm1zTWF0Y2hlc1NlbGVjdG9yIHx8IFxyXG5cdEVsZW1lbnQucHJvdG90eXBlLm9NYXRjaGVzU2VsZWN0b3IgfHwgXHJcblx0RWxlbWVudC5wcm90b3R5cGUud2Via2l0TWF0Y2hlc1NlbGVjdG9yO1xyXG59XHJcblxyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsb3Nlc3QpIHtcclxuXHRFbGVtZW50LnByb3RvdHlwZS5jbG9zZXN0ID0gZnVuY3Rpb24oY3NzKSB7XHJcblx0XHR2YXIgbm9kZSA9IHRoaXM7XHJcblx0XHR3aGlsZSAobm9kZSkge1xyXG5cdFx0XHRpZiAobm9kZS5tYXRjaGVzKGNzcykpIHJldHVybiBub2RlO1xyXG5cdFx0XHRlbHNlIG5vZGUgPSBub2RlLnBhcmVudEVsZW1lbnQ7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gbnVsbDtcclxuXHR9O1xyXG59XHJcblxyXG5pZiAoIWRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwpe1xyXG5cdGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwgPSBmdW5jdGlvbiAoc2VsZWN0b3Ipe1xyXG5cdFx0dmFyIGNvbGVjdGlvbnMgPSBbXSxcclxuXHRcdFx0ZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcIipcIik7XHJcblx0XHRbXS5mb3JFYWNoLmNhbGwoZWxlbWVudHMsZnVuY3Rpb24oZWwpe1xyXG5cdFx0XHRpZiAoZWwubWF0Y2hlcyhzZWxlY3Rvcik9PXRydWUpIHtcclxuXHRcdFx0XHRjb2xlY3Rpb25zLnB1c2goZWwpO1xyXG5cdFx0XHR9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBjb2xlY3Rpb25zO1xyXG5cdH07XHJcbn1cclxuXHJcbmlmICghRWxlbWVudC5wcm90b3R5cGUuZmluZCkge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLmZpbmQgPSBmdW5jdGlvbihzZWxlY3Rvcil7XHJcblx0XHR2YXIgZWxlbWV0cyA9IHRoaXMucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XHJcblx0XHRyZXR1cm4gZWxlbWV0cztcclxuXHR9XHJcbn1cclxuLyotLS0tLS0tLS0tLS0g0KDQsNCx0L7RgtCwINGBINGB0LXQu9C10LrRgtC+0YDQsNC80LggLS0tLS0tLS0tLS0tKi9cclxuXHJcbi8qLS0tLS0tLS0tLS0tINCg0LDQsdC+0YLQsCDRgSDRhNGC0YDQuNCx0YPRgtCw0LzQuCAtLS0tLS0tLS0tLS0qL1xyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmF0dHIpIHtcclxuXHRFbGVtZW50LnByb3RvdHlwZS5hdHRyID0gZnVuY3Rpb24obmFtZSwgdmFsdWUpe1xyXG5cdFx0aWYodGhpcyA9PSBudWxsKXtyZXR1cm4gZmFsc2U7fVxyXG5cdFx0dmFyIG5hbWUgPSBuYW1lIHx8IFwiXCI7XHJcblx0XHR2YXIgdmFsdWUgPSAodHlwZW9mIHZhbHVlPT1cInVuZGVmaW5lZFwiKT9mYWxzZTp2YWx1ZTtcclxuXHRcdFxyXG5cdFx0aWYgKG5hbWU9PVwiXCIpe1xyXG5cdFx0XHRyZXR1cm4gZmFsc2U7XHJcblx0XHR9XHJcblx0XHRcclxuXHRcdGlmKHZhbHVlPT09bnVsbCl7XHJcblx0XHRcdHRoaXMucmVtb3ZlQXR0cmlidXRlKG5hbWUpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1lbHNlIGlmKHZhbHVlPT09ZmFsc2Upe1xyXG5cdFx0XHRyZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUobmFtZSk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0dGhpcy5zZXRBdHRyaWJ1dGUobmFtZSwgdmFsdWUpO1xyXG5cdFx0XHRyZXR1cm4gdHJ1ZTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuLyotLS0tLS0tLS0tLS0g0KDQsNCx0L7RgtCwINGBINGE0YLRgNC40LHRg9GC0LDQvNC4IC0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgdmFyIGRvbV9tYW5hZ2UgPSB0cnVlOyIsIi8qLS0tLS0tLS0tLS0tINCh0LvRg9GI0LDRgtC10LvQuCDQvdCwINGB0L7QsdGL0YLQuNGPIC0tLS0tLS0tLS0tLSovXHJcbmlmICghRWxlbWVudC5wcm90b3R5cGUubmpFdmVudFN0b3JhZ2UpIHtcclxuXHRFbGVtZW50LnByb3RvdHlwZS5uakV2ZW50U3RvcmFnZSA9IFtdO1xyXG59XHJcblxyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmxpc3Rlbikge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLmxpc3RlbiA9IGZ1bmN0aW9uKG1vZGUsZXZlbnROYW1lLGNhbGxCYWNrKXtcclxuXHRcdHZhciBtb2RlID0gbW9kZS50b0xvd2VyQ2FzZSgpO1xyXG5cdFx0aWYgKG1vZGU9PVwib25cIil7XHJcblx0XHRcdGlmIChldmVudE5hbWU9PXVuZGVmaW5lZCl7cmV0dXJuIGZhbHNlO31cclxuXHRcdFx0dmFyIGNhbGxCYWNrID0gY2FsbEJhY2sgfHwgZnVuY3Rpb24oKXt9O1xyXG5cdFx0XHR0aGlzLm5qRXZlbnRTdG9yYWdlLnB1c2goe2V2dDpldmVudE5hbWUsIGZ1bmM6Y2FsbEJhY2t9KTtcclxuXHRcdFx0dGhpcy5hZGRFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgY2FsbEJhY2spO1xyXG5cdFx0fWVsc2UgaWYoJ29mZicpe1xyXG5cdFx0XHRpZiAoY2FsbEJhY2s9PXVuZGVmaW5lZCAmJiBldmVudE5hbWU9PXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0Zm9yKHZhciBpPTAsbGVuID0gdGhpcy5uakV2ZW50U3RvcmFnZS5sZW5ndGg7IGk8bGVuOyBpKyspe1xyXG5cdFx0XHRcdFx0dGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKHRoaXMubmpFdmVudFN0b3JhZ2VbaV0uZXZ0LHRoaXMubmpFdmVudFN0b3JhZ2VbaV0uZnVuYyk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdHRoaXMubmpFdmVudFN0b3JhZ2UgPSBbXTtcclxuXHRcdFx0fWVsc2UgaWYoY2FsbEJhY2s9PXVuZGVmaW5lZCAmJiBldmVudE5hbWUhPXVuZGVmaW5lZCl7XHJcblx0XHRcdFx0dmFyIHRlbXBOZXdTdG9yYWdlID0gW107XHJcblx0XHRcdFx0Zm9yKHZhciBpPTAsbGVuID0gdGhpcy5uakV2ZW50U3RvcmFnZS5sZW5ndGg7IGk8bGVuOyBpKyspe1xyXG5cdFx0XHRcdFx0aWYgKGV2ZW50TmFtZT09dGhpcy5uakV2ZW50U3RvcmFnZVtpXS5ldnQpe1xyXG5cdFx0XHRcdFx0XHR0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIodGhpcy5uakV2ZW50U3RvcmFnZVtpXS5ldnQsdGhpcy5uakV2ZW50U3RvcmFnZVtpXS5mdW5jKTtcclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHR0ZW1wTmV3U3RvcmFnZS5wdXNoKHRoaXMubmpFdmVudFN0b3JhZ2VbaV0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHR0aGlzLm5qRXZlbnRTdG9yYWdlID0gdGVtcE5ld1N0b3JhZ2U7XHJcblx0XHRcdH1lbHNlIGlmKGNhbGxCYWNrIT11bmRlZmluZWQgJiYgZXZlbnROYW1lIT11bmRlZmluZWQpe1xyXG5cdFx0XHRcdHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsY2FsbEJhY2spO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn1cclxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5vbikge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLm9uID0gZnVuY3Rpb24gKGV2ZW50TmFtZSxjYWxsQmFjayl7XHJcblx0XHRyZXR1cm4gdGhpcy5saXN0ZW4oXCJvblwiLGV2ZW50TmFtZSxjYWxsQmFjayk7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLm9mZikge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLm9mZiA9IGZ1bmN0aW9uIChldmVudE5hbWUsY2FsbEJhY2spe1xyXG5cdFx0cmV0dXJuIHRoaXMubGlzdGVuKFwib2ZmXCIsZXZlbnROYW1lLGNhbGxCYWNrKTtcclxuXHR9XHJcbn1cclxuXHJcbmlmICghRWxlbWVudC5wcm90b3R5cGUubW91c2VDbGljaykge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLm1vdXNlQ2xpY2sgPSBmdW5jdGlvbiAoKXtcclxuXHRcdHZhciBldnQgPSBuZXcgTW91c2VFdmVudChcImNsaWNrXCIsIHtcclxuXHRcdFx0XHRidWJibGVzOiB0cnVlLFxyXG5cdFx0XHRcdGNhbmNlbGFibGU6IHRydWUsXHJcblx0XHRcdFx0dmlldzogd2luZG93XHJcblx0XHRcdH0pO1xyXG5cdFx0dGhpcy5kaXNwYXRjaEV2ZW50KGV2dCk7XHJcblx0XHRyZXR1cm4gdGhpcztcclxuXHR9XHJcbn1cclxuLyotLS0tLS0tLS0tLS0g0KHQu9GD0YjQsNGC0LXQu9C4INC90LAg0YHQvtCx0YvRgtC40Y8gLS0tLS0tLS0tLS0tKi9cclxuXHJcbmV4cG9ydCB2YXIgZXZlbnRzID0gdHJ1ZTsiLCIvKi0tLS0tLS0tLS0tLSDQn9C+0LjRgdC6INGN0LvQtdC80LXQvdGC0L7QsiAtLS0tLS0tLS0tLS0qL1xyXG5cclxud2luZG93LnRhciA9IGZ1bmN0aW9uIChzZWxlY3Rvciwgb3V0cHV0LCBjb250ZXh0KXtcclxuXHRzd2l0Y2ggKHR5cGVvZiBzZWxlY3Rvcil7XHJcblx0XHRjYXNlIFwiZnVuY3Rpb25cIjpcclxuXHRcdFx0aWYgKCBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyICl7XHJcblx0XHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsIHNlbGVjdG9yKTtcclxuXHRcdFx0fWVsc2UgaWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgJiYgIWRvY3VtZW50Lm9ubG9hZCkge1xyXG5cdFx0XHRcdGRvY3VtZW50Lm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdFx0aWYgKGRvY3VtZW50LnJlYWR5U3RhdGUgPT0gXCJsb2FkZWRcIiB8fCBkb2N1bWVudC5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIikge1xyXG5cdFx0XHRcdFx0XHRkb2N1bWVudC5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRzZWxlY3RvcigpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0ZG9jdW1lbnQub25sb2FkID0gc2VsZWN0b3I7XHJcblx0XHRcdH1cclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcInN0cmluZ1wiOlxyXG5cdFx0XHR2YXIgY29udGV4dCA9IGNvbnRleHQgfHwgZG9jdW1lbnQsXHJcblx0XHRcdFx0aW5kZXggPSBvdXRwdXQgfHwgMCxcclxuXHRcdFx0XHRlbGVtZXRzID0gbnVsbCxcclxuXHRcdFx0XHRlbGVtID0gbnVsbDtcclxuXHRcdFx0XHRcclxuXHRcdFx0aWYgKCAhc2VsZWN0b3IgKXtcclxuXHRcdFx0XHRyZXR1cm4gbnVsbDtcclxuXHRcdFx0fVxyXG5cdFx0XHRcclxuXHRcdFx0aWYgKCBjb250ZXh0LnF1ZXJ5U2VsZWN0b3JBbGwgKXtcclxuXHRcdFx0XHRlbGVtZXRzID0gY29udGV4dC5xdWVyeVNlbGVjdG9yQWxsKHNlbGVjdG9yKTtcclxuXHRcdFx0XHRpZiAoZWxlbWV0cy5sZW5ndGg+MCl7XHJcblx0XHRcdFx0XHRpZiAoaW5kZXg9PS0xKXtcclxuXHRcdFx0XHRcdFx0dmFyIHNsaWNlQXJyID0gKEFycmF5LnByb3RvdHlwZS5zbGljZSk/W10uc2xpY2UuY2FsbChlbGVtZXRzLDApOmVsZW1ldHM7XHJcblx0XHRcdFx0XHRcdHJldHVybiBzbGljZUFycjtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsZW0gPSBlbGVtZXRzW2luZGV4XTtcclxuXHRcdFx0XHRcdHJldHVybiAoZWxlbSE9dW5kZWZpbmVkKT9lbGVtOm51bGw7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHRcdGlmIChpbmRleD09LTEpe3JldHVybiBbXTt9XHJcblx0XHRcdH1cclxuXHRcdGJyZWFrO1xyXG5cdFx0Y2FzZSBcIm9iamVjdFwiOlxyXG5cdFx0Y2FzZSBcImFycmF5XCI6XHJcblx0XHRcdC8vaWYgKG5qLnJlcXVpcmVfaXMoZmlsZW5hbWUpKXtyZXR1cm4gbmo7fVxyXG5cdFx0XHR2YXIgY2FsbEJhY2sgPSBvdXRwdXQgfHwgZnVuY3Rpb24gKCl7cmV0dXJuIGZhbHNlO30sXHJcblx0XHRcdFx0bG9hZGVkU3RhdHVzID0gZnVuY3Rpb24gKGxvYWRlZEZpbGUsY0JhY2spe1xyXG5cdFx0XHRcdFx0aWYgKGxvYWRlZEZpbGUucmVhZHlTdGF0ZSAmJiAhbG9hZGVkRmlsZS5vbmxvYWQpIHtcclxuXHRcdFx0XHRcdFx0bG9hZGVkRmlsZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0XHRpZiAobG9hZGVkRmlsZS5yZWFkeVN0YXRlID09IFwibG9hZGVkXCIgfHwgbG9hZGVkRmlsZS5yZWFkeVN0YXRlID09IFwiY29tcGxldGVcIikge1xyXG5cdFx0XHRcdFx0XHRcdFx0bG9hZGVkRmlsZS5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBudWxsO1xyXG5cdFx0XHRcdFx0XHRcdFx0Y0JhY2soKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRsb2FkZWRGaWxlLm9ubG9hZCA9IGNCYWNrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0sXHJcblx0XHRcdFx0ZmlsZSA9IFwiXCIsXHJcblx0XHRcdFx0cmVnID0gL1xcLihqc3xjc3MpL2ksXHJcblx0XHRcdFx0bWF0Y2ggPSBudWxsLFxyXG5cdFx0XHRcdGxvYWRfc3RhdHVzID0gdHJ1ZTtcclxuXHRcdFx0Zm9yICh2YXIgaT0wLGxlbj1zZWxlY3Rvci5sZW5ndGg7IGk8bGVuOyBpKyspe1xyXG5cdFx0XHRcdGxvYWRfc3RhdHVzID0gdHJ1ZVxyXG5cdFx0XHRcdGZpbGUgPSBzZWxlY3RvcltpXTtcclxuXHRcdFx0XHRtYXRjaCA9IHJlZy5leGVjKGZpbGUpO1xyXG5cdFx0XHRcdGlmIChtYXRjaD09bnVsbCl7Y29udGludWU7fVxyXG5cdFx0XHRcdHRhcignc2NyaXB0JywtMSkuZm9yRWFjaChmdW5jdGlvbihzY3JpcHQpe1xyXG5cdFx0XHRcdFx0aWYgKHNjcmlwdC5zcmMuaW5kZXhPZihmaWxlKSE9LTEpe1xyXG5cdFx0XHRcdFx0XHRsb2FkX3N0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRjYWxsQmFjay5jYWxsKHNjcmlwdCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0dGFyKCdsaW5rJywtMSkuZm9yRWFjaChmdW5jdGlvbihsaW5rKXtcclxuXHRcdFx0XHRcdGlmIChsaW5rLmhyZWYuaW5kZXhPZihmaWxlKSE9LTEpe1xyXG5cdFx0XHRcdFx0XHRsb2FkX3N0YXR1cyA9IGZhbHNlO1xyXG5cdFx0XHRcdFx0XHRjYWxsQmFjay5jYWxsKGxpbmspO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdGlmIChsb2FkX3N0YXR1cz09ZmFsc2Upe1xyXG5cdFx0XHRcdFx0Ly9jb25zb2xlLmxvZyhcIlRhciDQpNCw0LnQuyBcIitmaWxlK1wiINGD0LbQtSDQt9Cw0LPRgNGD0LbQtdC9IVwiKTtcclxuXHRcdFx0XHRcdGNvbnRpbnVlO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0XHRzd2l0Y2gobWF0Y2hbMV0pe1xyXG5cdFx0XHRcdFx0Y2FzZSBcImpzXCI6XHJcblx0XHRcdFx0XHRcdHZhciBuZXdGaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0JyksXHJcblx0XHRcdFx0XHRcdFx0aGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIRUFEJylbMF07XHJcblx0XHRcdFx0XHRcdG5ld0ZpbGUudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG5cdFx0XHRcdFx0XHQvL2RvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdIRUFEJylbMF0uYXBwZW5kQ2hpbGQobmV3RmlsZSk7XHJcblx0XHRcdFx0XHRcdGhlYWQuaW5zZXJ0QmVmb3JlKG5ld0ZpbGUsIGhlYWQuZmlyc3RDaGlsZCk7XHJcblx0XHRcdFx0XHRcdGxvYWRlZFN0YXR1cyhuZXdGaWxlLGNhbGxCYWNrKTtcclxuXHRcdFx0XHRcdFx0bmV3RmlsZS5zcmMgPSBmaWxlO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRjYXNlIFwiY3NzXCI6XHJcblx0XHRcdFx0XHRcdHZhciBuZXdGaWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGluaycpLFxyXG5cdFx0XHRcdFx0XHRcdGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSEVBRCcpWzBdO1xyXG5cdFx0XHRcdFx0XHRuZXdGaWxlLnR5cGUgPSAndGV4dC9jc3MnO1xyXG5cdFx0XHRcdFx0XHRuZXdGaWxlLnJlbCA9ICdzdHlsZXNoZWV0JztcclxuXHRcdFx0XHRcdFx0Ly9kb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnSEVBRCcpWzBdLmFwcGVuZENoaWxkKG5ld0ZpbGUpO1xyXG5cdFx0XHRcdFx0XHRoZWFkLmluc2VydEJlZm9yZShuZXdGaWxlLCBoZWFkLmZpcnN0Q2hpbGQpO1xyXG5cdFx0XHRcdFx0XHRsb2FkZWRTdGF0dXMobmV3RmlsZSxjYWxsQmFjayk7XHJcblx0XHRcdFx0XHRcdG5ld0ZpbGUuaHJlZiA9IGZpbGU7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0XHJcblx0XHRicmVhaztcclxuXHR9XHJcblx0cmV0dXJuIG51bGw7XHJcbn1cclxuXHJcbi8qLS0tLS0tLS0tLS0tINCf0L7QuNGB0Log0Y3Qu9C10LzQtdC90YLQvtCyIC0tLS0tLS0tLS0tLSovXHJcblxyXG4vKi0tLS0tLS0tLS0tLSDQoNCw0LfQvdC+0LUgLS0tLS0tLS0tLS0tKi9cclxuXHJcbmlmICghRWxlbWVudC5wcm90b3R5cGUuY3NzKSB7XHJcblx0RWxlbWVudC5wcm90b3R5cGUuY3NzID0gZnVuY3Rpb24ob3B0aW9uLHZhbHVlKXtcclxuXHRcdGlmICh0eXBlb2Ygb3B0aW9uPT1cInN0cmluZ1wiICYmIHZhbHVlIT11bmRlZmluZWQpe1xyXG5cdFx0XHR0aGlzLnN0eWxlW29wdGlvbl0gPSB2YWx1ZTtcclxuXHRcdFx0cmV0dXJuIHRoaXM7XHJcblx0XHR9ZWxzZSBpZih0eXBlb2Ygb3B0aW9uPT1cInN0cmluZ1wiICYmIHZhbHVlPT11bmRlZmluZWQpe1xyXG5cdFx0XHRyZXR1cm4gKHRoaXMuc3R5bGVbb3B0aW9uXSE9dW5kZWZpbmVkKT90aGlzLnN0eWxlW29wdGlvbl06XCJcIjtcclxuXHRcdH1lbHNlIGlmKHR5cGVvZiBvcHRpb24gPT0gXCJvYmplY3RcIil7XHJcblx0XHRcdGZvciAodmFyIGtleSBpbiBvcHRpb24pe1xyXG5cdFx0XHRcdHRoaXMuc3R5bGVba2V5XSA9IG9wdGlvbltrZXldO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLndyYXApIHtcclxuXHRFbGVtZW50LnByb3RvdHlwZS53cmFwID0gZnVuY3Rpb24ocGFyZW50X2VsZW1lbnQpe1xyXG5cdFx0aWYocGFyZW50X2VsZW1lbnQ9PXVuZGVmaW5lZCl7cmV0dXJuIGZhbHNlO31cclxuXHRcdHBhcmVudF9lbGVtZW50LmlubmVySFRNTCA9IHRoaXMub3V0ZXJIVE1MO1xyXG5cdFx0dGhpcy5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChwYXJlbnRfZWxlbWVudCx0aGlzKTtcclxuXHRcdHJldHVybiBwYXJlbnRfZWxlbWVudDtcclxuXHR9XHJcbn1cclxuXHJcbmlmICghRWxlbWVudC5wcm90b3R5cGUucmVwbGFjZSkge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLnJlcGxhY2UgPSBmdW5jdGlvbihyZXBsYWNlX2VsZW1lbnQpe1xyXG5cdFx0aWYocmVwbGFjZV9lbGVtZW50PT11bmRlZmluZWQpe3JldHVybiBmYWxzZTt9XHJcblx0XHR0aGlzLnBhcmVudE5vZGUucmVwbGFjZUNoaWxkKHJlcGxhY2VfZWxlbWVudCx0aGlzKTtcclxuXHRcdHJldHVybiByZXBsYWNlX2VsZW1lbnQ7XHJcblx0fVxyXG59XHJcblxyXG5pZiAoIUVsZW1lbnQucHJvdG90eXBlLmNsZWFyKSB7XHJcblx0RWxlbWVudC5wcm90b3R5cGUuY2xlYXIgPSBmdW5jdGlvbigpe1xyXG5cdFx0d2hpbGUgKHRoaXMuaGFzQ2hpbGROb2RlcygpKSB7XHJcblx0XHRcdHRoaXMucmVtb3ZlQ2hpbGQodGhpcy5maXJzdENoaWxkKTtcclxuXHRcdH1cclxuXHR9XHJcbn1cclxuXHJcbmlmICghRWxlbWVudC5wcm90b3R5cGUuaW5mbykge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLmluZm8gPSBmdW5jdGlvbigpe1xyXG5cdFx0dmFyIHJlY3RfaW5mbyA9IHRoaXMuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XHJcblx0XHRyZWN0X2luZm8ud2lkdGggPSAocmVjdF9pbmZvLndpZHRoKT9yZWN0X2luZm8ud2lkdGg6KHJlY3RfaW5mby5yaWdodC1yZWN0X2luZm8ubGVmdCk7XHJcblx0XHRyZWN0X2luZm8uaGVpZ2h0ID0gKHJlY3RfaW5mby5oZWlnaHQpP3JlY3RfaW5mby5oZWlnaHQ6KHJlY3RfaW5mby5ib3R0b20tcmVjdF9pbmZvLnRvcCk7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XHJcblx0XHRcdCd3aWR0aCc6cmVjdF9pbmZvLndpZHRoLFxyXG5cdFx0XHQnaGVpZ2h0JzpyZWN0X2luZm8uaGVpZ2h0LFxyXG5cdFx0XHQnbGVmdCc6cmVjdF9pbmZvLmxlZnQsXHJcblx0XHRcdCdyaWdodCc6cmVjdF9pbmZvLnJpZ2h0LFxyXG5cdFx0XHQndG9wJzpyZWN0X2luZm8udG9wLFxyXG5cdFx0XHQnYm90dG9tJzpyZWN0X2luZm8uYm90dG9tXHJcblx0XHR9O1xyXG5cdH1cclxufVxyXG5cclxuaWYgKCFFbGVtZW50LnByb3RvdHlwZS5wb3NpdGlvbikge1xyXG5cdEVsZW1lbnQucHJvdG90eXBlLnBvc2l0aW9uID0gZnVuY3Rpb24oKXtcclxuXHRcdHZhciB4ID0gKGZ1bmN0aW9uKGVsZW0pe1xyXG5cdFx0XHQgdmFyIGN1cmxlZnQgPSAwO1xyXG5cdFx0XHRpZiAoZWxlbS5vZmZzZXRQYXJlbnQpIHtcclxuXHRcdFx0XHR3aGlsZSAoMSkge1xyXG5cdFx0XHRcdFx0Y3VybGVmdCs9ZWxlbS5vZmZzZXRMZWZ0O1xyXG5cdFx0XHRcdFx0aWYgKCFlbGVtLm9mZnNldFBhcmVudCkge1xyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGVsZW09ZWxlbS5vZmZzZXRQYXJlbnQ7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9IGVsc2UgaWYgKGVsZW0ueCkge1xyXG5cdFx0XHRcdGN1cmxlZnQrPWVsZW0ueDtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY3VybGVmdDtcclxuXHRcdH0pKHRoaXMpO1xyXG5cdFx0dmFyIHkgPSAoZnVuY3Rpb24oZWxlbSl7XHJcblx0XHRcdHZhciBjdXJ0b3AgPSAwO1xyXG5cdFx0XHRpZiAoZWxlbS5vZmZzZXRQYXJlbnQpIHtcclxuXHRcdFx0XHR3aGlsZSAoMSkge1xyXG5cdFx0XHRcdFx0Y3VydG9wKz1lbGVtLm9mZnNldFRvcDtcclxuXHRcdFx0XHRcdGlmICghZWxlbS5vZmZzZXRQYXJlbnQpIHtcclxuXHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRlbGVtPWVsZW0ub2Zmc2V0UGFyZW50O1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIGlmIChlbGVtLnkpIHtcclxuXHRcdFx0XHRjdXJ0b3ArPWVsZW0ueTtcclxuXHRcdFx0fVxyXG5cdFx0XHRyZXR1cm4gY3VydG9wO1xyXG5cdFx0fSkodGhpcyk7XHJcblx0XHRcclxuXHRcdHJldHVybiB7XCJ4XCI6eCxcInlcIjp5fTtcclxuXHR9XHJcbn1cclxuXHJcbi8qKlxyXG4qXHTQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YHQvtC30LTQsNC90LjRjyDQpdCi0JzQmyDQvdC+0LTQtSDRjdC70LXQvNC10L3RgtC+0LJcclxuKlxyXG4qXHRAcGFyYW0ge1N0cmluZ30gbmFtZSAtINCY0LzRjyDRjdC70LXQvNC10L3RgtCwIFxyXG4qXHRAcGFyYW0ge09iamVjdH0gYXR0cmlidXRlcyAtINCQ0YLRgNC40LHRg9GC0Ysg0Y3Qu9C10LzQtdC90YLQsFxyXG4qXHRcclxuKlx0QHJldHVybiB7SFRNTE5vZGV9IC0g0KXQotCc0Jsg0Y3Qu9C10LzQtdC90YJcclxuKlxyXG4qL1xyXG53aW5kb3cubmV3RWxlbSA9IGZ1bmN0aW9uKG5hbWUsIGF0dHJpYnV0ZXMpe1xyXG5cdHZhciBlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQobmFtZSk7XHJcblx0aWYgKCB0eXBlb2YgYXR0cmlidXRlcyA9PSAnb2JqZWN0JyApIHtcclxuXHRcdGZvciAoIHZhciBpIGluIGF0dHJpYnV0ZXMgKSB7XHJcblx0XHRcdGVsLnNldEF0dHJpYnV0ZSggaSwgYXR0cmlidXRlc1tpXSApO1xyXG5cdFx0XHRpZiAoIGkudG9Mb3dlckNhc2UoKSA9PSAnY2xhc3MnICkge1xyXG5cdFx0XHRcdGVsLmNsYXNzTmFtZSA9IGF0dHJpYnV0ZXNbaV07IC8vIGZvciBJRSBjb21wYXRpYmlsaXR5XHJcblx0XHRcdH0gZWxzZSBpZiAoIGkudG9Mb3dlckNhc2UoKSA9PSAnc3R5bGUnICkge1xyXG5cdFx0XHRcdGVsLnN0eWxlLmNzc1RleHQgPSBhdHRyaWJ1dGVzW2ldOyAvLyBmb3IgSUUgY29tcGF0aWJpbGl0eVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdGZvciAoIHZhciBpID0gMjsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyApe1xyXG5cdFx0dmFyIHZhbCA9IGFyZ3VtZW50c1tpXTtcclxuXHRcdGlmICggdHlwZW9mIHZhbCA9PSAnc3RyaW5nJyApIHsgdmFsID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoIHZhbCApIH07XHJcblx0XHRlbC5hcHBlbmRDaGlsZCggdmFsICk7XHJcblx0fVxyXG5cdHJldHVybiBlbDtcclxufVxyXG5cclxuLyotLS0tLS0tLS0tLS0g0KDQsNC30L3QvtC1IC0tLS0tLS0tLS0tLSovXHJcblxyXG5leHBvcnQgdmFyIGV4dCA9IHRydWU7IiwiaW1wb3J0IHtkb21fbWFuYWdlfSBmcm9tIFwiLi9kb21fbWFuYWdlLmpzXCI7XHJcbmltcG9ydCB7ZXh0fSBmcm9tIFwiLi9leHQuanNcIjtcclxuaW1wb3J0IHtldmVudHN9IGZyb20gXCIuL2V2ZW50cy5qc1wiO1xyXG5cclxuZXhwb3J0IHZhciBwb2xpZmlsbHMgPSB0cnVlOyJdLCJtYXBwaW5ncyI6IjtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDVkE7QUFDQTtBQUNBOzs7Ozs7Ozs7OztBQVdBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7OztBQU1BO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7Ozs7Ozs7Ozs7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7QUFRQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUVBOzs7Ozs7OztBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBVEE7QUFVQTtBQUVBOzs7Ozs7Ozs7O0FBUUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7OztBQVVBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7OztBQVFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7O0FBVUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBZkE7QUFpQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUVBOzs7Ozs7Ozs7Ozs7QUFVQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFOQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQWhDQTtBQUNBO0FBS0E7QUFBQTtBQUNBO0FBREE7QUEyQkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQVdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7OztBQVdBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFQQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQVNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7Ozs7Ozs7Ozs7OztBQVVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7OztBQVlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7Ozs7Ozs7Ozs7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMxbkJBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFLQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBRUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBREE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7OztBQ2pFQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFIQTtBQUtBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3REE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFJQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFaQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBZ0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW5CQTtBQXFCQTtBQUNBO0FBQ0E7QUF0R0E7QUFDQTtBQXVHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBTkE7QUFRQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTs7Ozs7Ozs7Ozs7QUFTQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7QUMvT0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBOzs7O0EiLCJzb3VyY2VSb290IjoiIn0=