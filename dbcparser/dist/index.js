module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __webpack_require__(/*! fs */ "fs");
var PS;
(function (PS) {
    PS[PS["idle"] = 0] = "idle";
    PS[PS["ns_"] = 1] = "ns_";
    PS[PS["string"] = 2] = "string";
})(PS || (PS = {}));
var dbc = /** @class */ (function () {
    function dbc() {
        this.obj = {};
        this.state = PS.idle;
        this.tmpObject = {};
        this.tmpLine = '';
        this.tmpStr = '';
        this.id = '';
        this.line_num = 0;
        this.word = [];
        this.obj.messages = {};
        this.obj.NS_ = [];
        this.obj.BU_ = [];
        this.obj.annotation = {};
        this.obj.types = {};
        this.obj.value = {};
        this.obj.msgCycleTime = {};
        this.obj.sigStartValue = {};
    }
    dbc.prototype.parseVersion = function (word) {
        this.obj.version = word[1];
        return;
    };
    dbc.prototype.parseNS_ = function (word) {
        var e_1, _a;
        this.state = PS.ns_;
        try {
            for (var _b = __values(word.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var iterator = _c.value;
                this.obj.NS_.push(iterator);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return;
    };
    dbc.prototype.parseBS_ = function (word) {
        /// 波特率定义
        this.state = PS.idle;
    };
    dbc.prototype.parseBU_ = function (word) {
        /// 网络节点的定义
        var e_2, _a;
        this.state = PS.idle;
        try {
            for (var _b = __values(word.slice(1)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var iterator = _c.value;
                this.obj.BU_.push(iterator);
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
    };
    dbc.prototype.parseBO_ = function (word) {
        /// 报文帧的定义
        this.tmpObject = {};
        if (word.length == 5) {
            this.id = word[1];
            this.tmpObject.name = word[2];
            this.tmpObject.dlc = word[3];
            this.tmpObject.signals = [];
        }
        else {
            // console.log(this.line_num, word);
        }
        this.obj.messages[this.id] = this.tmpObject;
    };
    dbc.prototype.parseSG_ = function (word) {
        /// 信号的定义
        /// SG_ SignalName : StartBit|SignalSize@ByteOrder ValueType (Factor,Offset) [Min|Max] Unit Receiver
        if (word.length == 7) {
            var x = /(\d*)\|(\d*)@(\d*)(\+|\-)/i.exec(word[2]);
            var y = /\(([-+]?\d+\.?\d*),([-+]?\d+\.?\d*)\)/i.exec(word[3]);
            var z = /\[([-+]?\d+\.?\d*)\|([-+]?\d+\.?\d*)\]/i.exec(word[4]);
            if (x && y && z) {
                var tmp = {
                    name: word[1],
                    startbit: +x[1],
                    bitlength: +x[2],
                    endianess: +x[3] ? 'intel' : 'motorola',
                    valuetype: x[4],
                    factor: +y[1],
                    offset: +y[2],
                    min: +z[1],
                    max: +z[2],
                    unit: word[5],
                    receiver: word[6]
                };
                this.tmpObject.signals.push(tmp);
            }
            else {
                // console.log(x, y, z);
            }
        }
    };
    dbc.prototype.parseCM_BO_ = function (word) {
        this.tmpObject = {};
        if (word.length > 3) {
            this.id = word[2];
            this.tmpObject.info = word[3];
            //this.tmpObject.type = word[1];
            this.tmpObject.signals = {};
            this.obj.annotation[this.id] = this.tmpObject;
        }
        else {
            // console.log(this.line_num, word);
        }
    };
    dbc.prototype.parseCM_SG_ = function (word) {
        if (word.length > 4) {
            this.tmpObject.signals[word[3]] = word[4];
        }
    };
    dbc.prototype.parseCM_ = function (word) {
        switch (word[1].toLowerCase()) {
            case 'bo_':
                this.parseCM_BO_(word);
                break;
            case 'sg_':
                this.parseCM_SG_(word);
                break;
            case 'bu_':
                break;
            default:
                break;
        }
    };
    dbc.prototype.parseBA_ = function (word) {
        if (word.length > 4) {
            switch (word[1]) {
                case 'GenMsgCycleTime':
                    this.obj.msgCycleTime[word[3]] = parseInt(word[4].replace(';', ''));
                    break;
                case 'GenSigStartValue':
                    this.obj.sigStartValue[word[4]] = parseInt(word[5].replace(';', ''));
                    break;
                default:
                    break;
            }
        }
    };
    dbc.prototype.parseBA_DEF_ = function (word) {
        // this.tmpObject = {};
        // if (word.length > 3) {
        // 	this.id;
        // 	this.tmpObject[word[3]] = word[4];
        // 	this.obj.types[this.id] = this.tmpObject;
        // }
    };
    dbc.prototype.parseBA_DEF_DEF_ = function (word) { };
    dbc.prototype.parseVAL_ = function (word) {
        this.tmpObject = {};
        if (word.length > 4) {
            this.id = word[2];
            this.tmpObject.msgId = +word[1];
            this.tmpObject.list = [];
            for (var index = 3; index + 1 < word.length; index += 2) {
                // this.tmpObject.list[word[index]] = word[index + 1];
                this.tmpObject.list.push({ val: +word[index], title: word[index + 1] });
            }
            this.obj.value[this.id] = this.tmpObject;
        }
    };
    dbc.prototype.parseOther = function (word) {
        while (1) {
            switch (this.state) {
                case PS.idle:
                    break;
                case PS.ns_:
                    if (word.length == 1) {
                        this.obj.NS_.push(word[0]);
                    }
                    else {
                        this.state = PS.idle;
                        continue;
                    }
                    break;
            }
            break;
        }
    };
    dbc.prototype.split = function (line) {
        ///todo 不考虑字符串中包含\"的情况
        for (var index = 0; index < line.length; index++) {
            var element = line[index];
            switch (element) {
                case ' ':
                case ':':
                case '\t':
                    if (this.state != PS.string) {
                        if (this.tmpStr.length) {
                            this.word.push(this.tmpStr);
                            this.tmpStr = '';
                        }
                    }
                    else {
                        this.tmpStr += element;
                    }
                    break;
                case '"':
                    if (this.state == PS.string) {
                        this.word.push(this.tmpStr);
                        this.tmpStr = '';
                        this.state = PS.idle;
                    }
                    else {
                        this.state = PS.string;
                    }
                    break;
                case '\r':
                case '\n':
                    if (this.state != PS.string) {
                        if (this.tmpStr.length) {
                            this.word.push(this.tmpStr);
                            this.tmpStr = '';
                        }
                        break;
                    }
                default:
                    this.tmpStr += element;
                    break;
            }
        }
        if (this.state == PS.string) {
            this.tmpStr += '\n';
            return false;
        }
        return true;
    };
    dbc.prototype.dispatch = function (word) {
        if (this.state == PS.ns_) {
            this.parseOther(word);
        }
        else if (this.state == PS.idle) {
            switch (word[0].toLowerCase()) {
                case 'version':
                    return this.parseVersion(word);
                case 'ns_':
                    return this.parseNS_(word);
                case 'ba_':
                    return this.parseBA_(word);
                case 'bs_':
                    return this.parseBS_(word);
                case 'bu_':
                    return this.parseBU_(word);
                case 'bo_':
                    return this.parseBO_(word);
                case 'sg_':
                    return this.parseSG_(word);
                case 'cm_':
                    return this.parseCM_(word);
                case 'ba_def_':
                    return this.parseBA_DEF_(word);
                case 'ba_def_def_':
                    return this.parseBA_DEF_DEF_(word);
                case 'val_':
                    return this.parseVAL_(word);
                default:
                    return this.parseOther(word);
            }
        }
        else {
            ///error!!!
        }
    };
    dbc.prototype.parseString = function (data) {
        if (this.tmpLine.length) {
            data = this.tmpLine + data;
            this.tmpLine = '';
        }
        var lines = data.split('\n');
        if (!data.endsWith('\n')) {
            var tmp = lines.pop();
            if (tmp)
                this.tmpLine = tmp;
        }
        for (var index = 0; index < lines.length; index++) {
            this.line_num++;
            var line = lines[index];
            if (this.split(line)) {
                if (this.word.length) {
                    this.dispatch(this.word);
                    this.word = [];
                }
            }
            else {
                // console.log(line);
            }
        }
    };
    dbc.prototype.parse = function (path, encoding, cb) {
        var _this = this;
        if (typeof encoding == 'function') {
            cb = encoding;
            encoding = 'utf8';
        }
        var c = fs_1.createReadStream(path, encoding);
        c.on('data', function (data) {
            _this.parseString(data);
        });
        c.on('end', function () {
            cb(_this.obj);
        });
    };
    return dbc;
}());
exports.default = dbc;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLHlCQUF1RTtBQUN2RSxJQUFLLEVBSUo7QUFKRCxXQUFLLEVBQUU7SUFDTiwyQkFBSSxDQUFBO0lBQ0oseUJBQUcsQ0FBQTtJQUNILCtCQUFNLENBQUE7QUFDUCxDQUFDLEVBSkksRUFBRSxLQUFGLEVBQUUsUUFJTjtBQUNEO0lBU0M7UUFSQSxRQUFHLEdBQVEsRUFBRSxDQUFDO1FBQ2QsVUFBSyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUM7UUFDaEIsY0FBUyxHQUFRLEVBQUUsQ0FBQztRQUNwQixZQUFPLEdBQVcsRUFBRSxDQUFDO1FBQ3JCLFdBQU0sR0FBVyxFQUFFLENBQUM7UUFDcEIsT0FBRSxHQUFXLEVBQUUsQ0FBQztRQUNoQixhQUFRLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsU0FBSSxHQUFhLEVBQUUsQ0FBQztRQUVuQixJQUFJLENBQUMsR0FBRyxDQUFDLFFBQVEsR0FBRyxFQUFFLENBQUM7UUFDdkIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO1FBQ2xCLElBQUksQ0FBQyxHQUFHLENBQUMsR0FBRyxHQUFHLEVBQUUsQ0FBQztRQUNsQixJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsR0FBRyxFQUFFLENBQUM7UUFDekIsSUFBSSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxFQUFFLENBQUM7UUFDM0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO0lBQzdCLENBQUM7SUFDRCwwQkFBWSxHQUFaLFVBQWEsSUFBYztRQUMxQixJQUFJLENBQUMsR0FBRyxDQUFDLE9B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bGVTeW5jLCBjcmVhdGVXcml0ZVN0cmVhbSB9IGZyb20gJ2ZzJztcclxuZW51bSBQUyB7XHJcblx0aWRsZSxcclxuXHRuc18sXHJcblx0c3RyaW5nXHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgZGJjIHtcclxuXHRvYmo6IGFueSA9IHt9O1xyXG5cdHN0YXRlID0gUFMuaWRsZTtcclxuXHR0bXBPYmplY3Q6IGFueSA9IHt9O1xyXG5cdHRtcExpbmU6IHN0cmluZyA9ICcnO1xyXG5cdHRtcFN0cjogc3RyaW5nID0gJyc7XHJcblx0aWQ6IHN0cmluZyA9ICcnO1xyXG5cdGxpbmVfbnVtID0gMDtcclxuXHR3b3JkOiBzdHJpbmdbXSA9IFtdO1xyXG5cdGNvbnN0cnVjdG9yKCkge1xyXG5cdFx0dGhpcy5vYmoubWVzc2FnZXMgPSB7fTtcclxuXHRcdHRoaXMub2JqLk5TXyA9IFtdO1xyXG5cdFx0dGhpcy5vYmouQlVfID0gW107XHJcblx0XHR0aGlzLm9iai5hbm5vdGF0aW9uID0ge307XHJcblx0XHR0aGlzLm9iai50eXBlcyA9IHt9O1xyXG5cdFx0dGhpcy5vYmoudmFsdWUgPSB7fTtcclxuXHRcdHRoaXMub2JqLm1zZ0N5Y2xlVGltZSA9IHt9O1xyXG5cdFx0dGhpcy5vYmouc2lnU3RhcnRWYWx1ZSA9IHt9O1xyXG5cdH1cclxuXHRwYXJzZVZlcnNpb24od29yZDogc3RyaW5nW10pIHtcclxuXHRcdHRoaXMub2JqLnZlcnNpb24gPSB3b3JkWzFdO1xyXG5cdFx0cmV0dXJuO1xyXG5cdH1cclxuXHRwYXJzZU5TXyh3b3JkOiBzdHJpbmdbXSkge1xyXG5cdFx0dGhpcy5zdGF0ZSA9IFBTLm5zXztcclxuXHRcdGZvciAoY29uc3QgaXRlcmF0b3Igb2Ygd29yZC5zbGljZSgxKSkge1xyXG5cdFx0XHR0aGlzLm9iai5OU18ucHVzaChpdGVyYXRvcik7XHJcblx0XHR9XHJcblx0XHRyZXR1cm47XHJcblx0fVxyXG5cdHBhcnNlQlNfKHdvcmQ6IHN0cmluZ1tdKSB7XHJcblx0XHQvLy8g5rOi54m5546H5a6a5LmJXHJcblx0XHR0aGlzLnN0YXRlID0gUFMuaWRsZTtcclxuXHR9XHJcblx0cGFyc2VCVV8od29yZDogc3RyaW5nW10pIHtcclxuXHRcdC8vLyDnvZHnu5zoioLngrnnmoTlrprkuYlcclxuXHJcblx0XHR0aGlzLnN0YXRlID0gUFMuaWRsZTtcclxuXHRcdGZvciAoY29uc3QgaXRlcmF0b3Igb2Ygd29yZC5zbGljZSgxKSkge1xyXG5cdFx0XHR0aGlzLm9iai5CVV8ucHVzaChpdGVyYXRvcik7XHJcblx0XHR9XHJcblx0fVxyXG5cdHBhcnNlQk9fKHdvcmQ6IHN0cmluZ1tdKSB7XHJcblx0XHQvLy8g5oql5paH5bin55qE5a6a5LmJXHJcblx0XHR0aGlzLnRtcE9iamVjdCA9IHt9O1xyXG5cdFx0aWYgKHdvcmQubGVuZ3RoID09IDUpIHtcclxuXHRcdFx0dGhpcy5pZCA9IHdvcmRbMV07XHJcblx0XHRcdHRoaXMudG1wT2JqZWN0Lm5hbWUgPSB3b3JkWzJdO1xyXG5cdFx0XHR0aGlzLnRtcE9iamVjdC5kbGMgPSB3b3JkWzNdO1xyXG5cdFx0XHR0aGlzLnRtcE9iamVjdC5zaWduYWxzID0gW107XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmxpbmVfbnVtLCB3b3JkKTtcclxuXHRcdH1cclxuXHRcdHRoaXMub2JqLm1lc3NhZ2VzW3RoaXMuaWRdID0gdGhpcy50bXBPYmplY3Q7XHJcblx0fVxyXG5cdHBhcnNlU0dfKHdvcmQ6IHN0cmluZ1tdKSB7XHJcblx0XHQvLy8g5L+h5Y+355qE5a6a5LmJXHJcblx0XHQvLy8gU0dfIFNpZ25hbE5hbWUgOiBTdGFydEJpdHxTaWduYWxTaXplQEJ5dGVPcmRlciBWYWx1ZVR5cGUgKEZhY3RvcixPZmZzZXQpIFtNaW58TWF4XSBVbml0IFJlY2VpdmVyXHJcblx0XHRpZiAod29yZC5sZW5ndGggPT0gNykge1xyXG5cdFx0XHRsZXQgeCA9IC8oXFxkKilcXHwoXFxkKilAKFxcZCopKFxcK3xcXC0pL2kuZXhlYyh3b3JkWzJdKTtcclxuXHRcdFx0bGV0IHkgPSAvXFwoKFstK10/XFxkK1xcLj9cXGQqKSwoWy0rXT9cXGQrXFwuP1xcZCopXFwpL2kuZXhlYyh3b3JkWzNdKTtcclxuXHRcdFx0bGV0IHogPSAvXFxbKFstK10/XFxkK1xcLj9cXGQqKVxcfChbLStdP1xcZCtcXC4/XFxkKilcXF0vaS5leGVjKHdvcmRbNF0pO1xyXG5cclxuXHRcdFx0aWYgKHggJiYgeSAmJiB6KSB7XHJcblx0XHRcdFx0bGV0IHRtcCA9IHtcclxuXHRcdFx0XHRcdG5hbWU6IHdvcmRbMV0sXHJcblx0XHRcdFx0XHRzdGFydGJpdDogK3hbMV0sXHJcblx0XHRcdFx0XHRiaXRsZW5ndGg6ICt4WzJdLFxyXG5cdFx0XHRcdFx0ZW5kaWFuZXNzOiAreFszXSA/ICdpbnRlbCcgOiAnbW90b3JvbGEnLFxyXG5cdFx0XHRcdFx0dmFsdWV0eXBlOiB4WzRdLFxyXG5cdFx0XHRcdFx0ZmFjdG9yOiAreVsxXSxcclxuXHRcdFx0XHRcdG9mZnNldDogK3lbMl0sXHJcblx0XHRcdFx0XHRtaW46ICt6WzFdLFxyXG5cdFx0XHRcdFx0bWF4OiArelsyXSxcclxuXHRcdFx0XHRcdHVuaXQ6IHdvcmRbNV0sXHJcblx0XHRcdFx0XHRyZWNlaXZlcjogd29yZFs2XVxyXG5cdFx0XHRcdH07XHJcblx0XHRcdFx0dGhpcy50bXBPYmplY3Quc2lnbmFscy5wdXNoKHRtcCk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2coeCwgeSwgeik7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cGFyc2VDTV9CT18od29yZDogc3RyaW5nW10pIHtcclxuXHRcdHRoaXMudG1wT2JqZWN0ID0ge307XHJcblx0XHRpZiAod29yZC5sZW5ndGggPiAzKSB7XHJcblx0XHRcdHRoaXMuaWQgPSB3b3JkWzJdO1xyXG5cdFx0XHR0aGlzLnRtcE9iamVjdC5pbmZvID0gd29yZFszXTtcclxuXHRcdFx0Ly90aGlzLnRtcE9iamVjdC50eXBlID0gd29yZFsxXTtcclxuXHRcdFx0dGhpcy50bXBPYmplY3Quc2lnbmFscyA9IHt9O1xyXG5cdFx0XHR0aGlzLm9iai5hbm5vdGF0aW9uW3RoaXMuaWRdID0gdGhpcy50bXBPYmplY3Q7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLyBjb25zb2xlLmxvZyh0aGlzLmxpbmVfbnVtLCB3b3JkKTtcclxuXHRcdH1cclxuXHR9XHJcblx0cGFyc2VDTV9TR18od29yZDogc3RyaW5nW10pIHtcclxuXHRcdGlmICh3b3JkLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0dGhpcy50bXBPYmplY3Quc2lnbmFsc1t3b3JkWzNdXSA9IHdvcmRbNF07XHJcblx0XHR9XHJcblx0fVxyXG5cdHBhcnNlQ01fKHdvcmQ6IHN0cmluZ1tdKSB7XHJcblx0XHRzd2l0Y2ggKHdvcmRbMV0udG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRjYXNlICdib18nOlxyXG5cdFx0XHRcdHRoaXMucGFyc2VDTV9CT18od29yZCk7XHJcblx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdGNhc2UgJ3NnXyc6XHJcblx0XHRcdFx0dGhpcy5wYXJzZUNNX1NHXyh3b3JkKTtcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0Y2FzZSAnYnVfJzpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0cGFyc2VCQV8od29yZDogc3RyaW5nW10pIHtcclxuXHRcdGlmICh3b3JkLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0c3dpdGNoICh3b3JkWzFdKSB7XHJcblx0XHRcdFx0Y2FzZSAnR2VuTXNnQ3ljbGVUaW1lJzpcclxuXHRcdFx0XHRcdHRoaXMub2JqLm1zZ0N5Y2xlVGltZVt3b3JkWzNdXSA9IHBhcnNlSW50KHdvcmRbNF0ucmVwbGFjZSgnOycsICcnKSk7XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlICdHZW5TaWdTdGFydFZhbHVlJzpcclxuXHRcdFx0XHRcdHRoaXMub2JqLnNpZ1N0YXJ0VmFsdWVbd29yZFs0XV0gPSBwYXJzZUludCh3b3JkWzVdLnJlcGxhY2UoJzsnLCAnJykpO1xyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0ZGVmYXVsdDpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0fVxyXG5cdHBhcnNlQkFfREVGXyh3b3JkOiBzdHJpbmdbXSkge1xyXG5cdFx0Ly8gdGhpcy50bXBPYmplY3QgPSB7fTtcclxuXHRcdC8vIGlmICh3b3JkLmxlbmd0aCA+IDMpIHtcclxuXHRcdC8vIFx0dGhpcy5pZDtcclxuXHRcdC8vIFx0dGhpcy50bXBPYmplY3Rbd29yZFszXV0gPSB3b3JkWzRdO1xyXG5cdFx0Ly8gXHR0aGlzLm9iai50eXBlc1t0aGlzLmlkXSA9IHRoaXMudG1wT2JqZWN0O1xyXG5cdFx0Ly8gfVxyXG5cdH1cclxuXHRwYXJzZUJBX0RFRl9ERUZfKHdvcmQ6IHN0cmluZ1tdKSB7fVxyXG5cdHBhcnNlVkFMXyh3b3JkOiBzdHJpbmdbXSkge1xyXG5cdFx0dGhpcy50bXBPYmplY3QgPSB7fTtcclxuXHRcdGlmICh3b3JkLmxlbmd0aCA+IDQpIHtcclxuXHRcdFx0dGhpcy5pZCA9IHdvcmRbMl07XHJcblx0XHRcdHRoaXMudG1wT2JqZWN0Lm1zZ0lkID0gK3dvcmRbMV07XHJcblx0XHRcdHRoaXMudG1wT2JqZWN0Lmxpc3QgPSBbXTtcclxuXHRcdFx0Zm9yIChsZXQgaW5kZXggPSAzOyBpbmRleCArIDEgPCB3b3JkLmxlbmd0aDsgaW5kZXggKz0gMikge1xyXG5cdFx0XHRcdC8vIHRoaXMudG1wT2JqZWN0Lmxpc3Rbd29yZFtpbmRleF1dID0gd29yZFtpbmRleCArIDFdO1xyXG5cdFx0XHRcdHRoaXMudG1wT2JqZWN0Lmxpc3QucHVzaCh7IHZhbDogK3dvcmRbaW5kZXhdLCB0aXRsZTogd29yZFtpbmRleCArIDFdIH0pO1xyXG5cdFx0XHR9XHJcblx0XHRcdHRoaXMub2JqLnZhbHVlW3RoaXMuaWRdID0gdGhpcy50bXBPYmplY3Q7XHJcblx0XHR9XHJcblx0fVxyXG5cdHBhcnNlT3RoZXIod29yZDogc3RyaW5nW10pIHtcclxuXHRcdHdoaWxlICgxKSB7XHJcblx0XHRcdHN3aXRjaCAodGhpcy5zdGF0ZSkge1xyXG5cdFx0XHRcdGNhc2UgUFMuaWRsZTpcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgUFMubnNfOlxyXG5cdFx0XHRcdFx0aWYgKHdvcmQubGVuZ3RoID09IDEpIHtcclxuXHRcdFx0XHRcdFx0dGhpcy5vYmouTlNfLnB1c2god29yZFswXSk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gUFMuaWRsZTtcclxuXHRcdFx0XHRcdFx0Y29udGludWU7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRicmVhaztcclxuXHRcdH1cclxuXHR9XHJcblx0c3BsaXQobGluZTogc3RyaW5nKSB7XHJcblx0XHQvLy90b2RvIOS4jeiAg+iZkeWtl+espuS4suS4reWMheWQq1xcXCLnmoTmg4XlhrVcclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lLmxlbmd0aDsgaW5kZXgrKykge1xyXG5cdFx0XHRjb25zdCBlbGVtZW50ID0gbGluZVtpbmRleF07XHJcblx0XHRcdHN3aXRjaCAoZWxlbWVudCkge1xyXG5cdFx0XHRcdGNhc2UgJyAnOlxyXG5cdFx0XHRcdGNhc2UgJzonOlxyXG5cdFx0XHRcdGNhc2UgJ1xcdCc6XHJcblx0XHRcdFx0XHRpZiAodGhpcy5zdGF0ZSAhPSBQUy5zdHJpbmcpIHtcclxuXHRcdFx0XHRcdFx0aWYgKHRoaXMudG1wU3RyLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdHRoaXMud29yZC5wdXNoKHRoaXMudG1wU3RyKTtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLnRtcFN0ciA9ICcnO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnRtcFN0ciArPSBlbGVtZW50O1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnXCInOlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUgPT0gUFMuc3RyaW5nKSB7XHJcblx0XHRcdFx0XHRcdHRoaXMud29yZC5wdXNoKHRoaXMudG1wU3RyKTtcclxuXHRcdFx0XHRcdFx0dGhpcy50bXBTdHIgPSAnJztcclxuXHRcdFx0XHRcdFx0dGhpcy5zdGF0ZSA9IFBTLmlkbGU7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHR0aGlzLnN0YXRlID0gUFMuc3RyaW5nO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSAnXFxyJzpcclxuXHRcdFx0XHRjYXNlICdcXG4nOlxyXG5cdFx0XHRcdFx0aWYgKHRoaXMuc3RhdGUgIT0gUFMuc3RyaW5nKSB7XHJcblx0XHRcdFx0XHRcdGlmICh0aGlzLnRtcFN0ci5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHR0aGlzLndvcmQucHVzaCh0aGlzLnRtcFN0cik7XHJcblx0XHRcdFx0XHRcdFx0dGhpcy50bXBTdHIgPSAnJztcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRkZWZhdWx0OlxyXG5cdFx0XHRcdFx0dGhpcy50bXBTdHIgKz0gZWxlbWVudDtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAodGhpcy5zdGF0ZSA9PSBQUy5zdHJpbmcpIHtcclxuXHRcdFx0dGhpcy50bXBTdHIgKz0gJ1xcbic7XHJcblx0XHRcdHJldHVybiBmYWxzZTtcclxuXHRcdH1cclxuXHRcdHJldHVybiB0cnVlO1xyXG5cdH1cclxuXHJcblx0ZGlzcGF0Y2god29yZDogc3RyaW5nW10pIHtcclxuXHRcdGlmICh0aGlzLnN0YXRlID09IFBTLm5zXykge1xyXG5cdFx0XHR0aGlzLnBhcnNlT3RoZXIod29yZCk7XHJcblx0XHR9IGVsc2UgaWYgKHRoaXMuc3RhdGUgPT0gUFMuaWRsZSkge1xyXG5cdFx0XHRzd2l0Y2ggKHdvcmRbMF0udG9Mb3dlckNhc2UoKSkge1xyXG5cdFx0XHRcdGNhc2UgJ3ZlcnNpb24nOlxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VWZXJzaW9uKHdvcmQpO1xyXG5cdFx0XHRcdGNhc2UgJ25zXyc6XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZU5TXyh3b3JkKTtcclxuXHRcdFx0XHRjYXNlICdiYV8nOlxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VCQV8od29yZCk7XHJcblx0XHRcdFx0Y2FzZSAnYnNfJzpcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcnNlQlNfKHdvcmQpO1xyXG5cdFx0XHRcdGNhc2UgJ2J1Xyc6XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUJVXyh3b3JkKTtcclxuXHRcdFx0XHRjYXNlICdib18nOlxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VCT18od29yZCk7XHJcblx0XHRcdFx0Y2FzZSAnc2dfJzpcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcnNlU0dfKHdvcmQpO1xyXG5cdFx0XHRcdGNhc2UgJ2NtXyc6XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUNNXyh3b3JkKTtcclxuXHRcdFx0XHRjYXNlICdiYV9kZWZfJzpcclxuXHRcdFx0XHRcdHJldHVybiB0aGlzLnBhcnNlQkFfREVGXyh3b3JkKTtcclxuXHRcdFx0XHRjYXNlICdiYV9kZWZfZGVmXyc6XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZUJBX0RFRl9ERUZfKHdvcmQpO1xyXG5cdFx0XHRcdGNhc2UgJ3ZhbF8nOlxyXG5cdFx0XHRcdFx0cmV0dXJuIHRoaXMucGFyc2VWQUxfKHdvcmQpO1xyXG5cdFx0XHRcdGRlZmF1bHQ6XHJcblx0XHRcdFx0XHRyZXR1cm4gdGhpcy5wYXJzZU90aGVyKHdvcmQpO1xyXG5cdFx0XHR9XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQvLy9lcnJvciEhIVxyXG5cdFx0fVxyXG5cdH1cclxuXHRwYXJzZVN0cmluZyhkYXRhOiBzdHJpbmcpIHtcclxuXHRcdGlmICh0aGlzLnRtcExpbmUubGVuZ3RoKSB7XHJcblx0XHRcdGRhdGEgPSB0aGlzLnRtcExpbmUgKyBkYXRhO1xyXG5cdFx0XHR0aGlzLnRtcExpbmUgPSAnJztcclxuXHRcdH1cclxuXHRcdHZhciBsaW5lcyA9IGRhdGEuc3BsaXQoJ1xcbicpO1xyXG5cdFx0aWYgKCFkYXRhLmVuZHNXaXRoKCdcXG4nKSkge1xyXG5cdFx0XHRsZXQgdG1wID0gbGluZXMucG9wKCk7XHJcblx0XHRcdGlmICh0bXApIHRoaXMudG1wTGluZSA9IHRtcDtcclxuXHRcdH1cclxuXHRcdGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBsaW5lcy5sZW5ndGg7IGluZGV4KyspIHtcclxuXHRcdFx0dGhpcy5saW5lX251bSsrO1xyXG5cdFx0XHRjb25zdCBsaW5lID0gbGluZXNbaW5kZXhdO1xyXG5cdFx0XHRpZiAodGhpcy5zcGxpdChsaW5lKSkge1xyXG5cdFx0XHRcdGlmICh0aGlzLndvcmQubGVuZ3RoKSB7XHJcblx0XHRcdFx0XHR0aGlzLmRpc3BhdGNoKHRoaXMud29yZCk7XHJcblx0XHRcdFx0XHR0aGlzLndvcmQgPSBbXTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0Ly8gY29uc29sZS5sb2cobGluZSk7XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHR9XHJcblx0cGFyc2UocGF0aDogc3RyaW5nLCBjYjogKG9iajogYW55KSA9PiB2b2lkKTogdm9pZDtcclxuXHRwYXJzZShwYXRoOiBzdHJpbmcsIGVuY29kaW5nOiBzdHJpbmcsIGNiOiAob2JqOiBhbnkpID0+IHZvaWQpOiB2b2lkO1xyXG5cdHBhcnNlKHBhdGg6IHN0cmluZywgZW5jb2Rpbmc6IGFueSwgY2I/OiBhbnkpIHtcclxuXHRcdGlmICh0eXBlb2YgZW5jb2RpbmcgPT0gJ2Z1bmN0aW9uJykge1xyXG5cdFx0XHRjYiA9IGVuY29kaW5nO1xyXG5cdFx0XHRlbmNvZGluZyA9ICd1dGY4JztcclxuXHRcdH1cclxuXHRcdGxldCBjID0gY3JlYXRlUmVhZFN0cmVhbShwYXRoLCBlbmNvZGluZyk7XHJcblx0XHRjLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcclxuXHRcdFx0dGhpcy5wYXJzZVN0cmluZyhkYXRhKTtcclxuXHRcdH0pO1xyXG5cdFx0Yy5vbignZW5kJywgKCkgPT4ge1xyXG5cdFx0XHRjYih0aGlzLm9iaik7XHJcblx0XHR9KTtcclxuXHR9XHJcbn1cclxuIl19

/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map