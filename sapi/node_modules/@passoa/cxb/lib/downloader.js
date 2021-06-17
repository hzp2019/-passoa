"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
var cmLog_1 = require("./cmLog");
var fs = require("fs-extra");
var path = require("path");
var axios_1 = require("axios");
var compressing_1 = require("compressing");
var Downloader = /** @class */ (function () {
    function Downloader(options) {
        this.done = 0;
        this.length = 0;
        this.unzipTotal = 0;
        this.unzipNo = 0;
        this.notifyOk = function (result) { };
    }
    Downloader.prototype.downloadAll = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var op, task_1, task_1_1, iter;
            var e_1, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        op = [];
                        try {
                            for (task_1 = __values(task), task_1_1 = task_1.next(); !task_1_1.done; task_1_1 = task_1.next()) {
                                iter = task_1_1.value;
                                op.push(this.downloadFile(iter));
                            }
                        }
                        catch (e_1_1) { e_1 = { error: e_1_1 }; }
                        finally {
                            try {
                                if (task_1_1 && !task_1_1.done && (_a = task_1.return)) _a.call(task_1);
                            }
                            finally { if (e_1) throw e_1.error; }
                        }
                        return [4 /*yield*/, Promise.all(op)];
                    case 1:
                        _b.sent();
                        console.log('\ndownload all end\n');
                        return [2 /*return*/];
                }
            });
        });
    };
    Downloader.prototype.downloadFile = function (iter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            axios_1.default({
                method: 'get',
                url: iter.src,
                responseType: 'stream'
            })
                .then(function (response) {
                _this.length += parseInt(response.headers['content-length'], 10);
                fs.ensureDirSync(path.dirname(iter.dst));
                response.data.on('data', function (chunk) {
                    _this.done += chunk.length;
                    if (isNaN(_this.length)) {
                        cmLog_1.slog("Downloading " + (_this.done / 1024).toFixed(2) + "/ unknow kb");
                    }
                    else {
                        cmLog_1.slog("Downloading " + (_this.done / 1024).toFixed(2) + "/ " + (_this.length / 1024).toFixed(2) + " kb");
                    }
                });
                fs.ensureFileSync(iter.dst);
                response.data.pipe(fs
                    .createWriteStream(iter.dst)
                    .on('close', function () {
                    resolve(true);
                })
                    .on('error', function (err) {
                    throw new Error("some error was happend with write file " + iter.src);
                })
                    .on('finish', function () { }));
            })
                .catch(function (err) {
                reject(err);
            });
        });
    };
    Downloader.prototype.getExt = function (filename, extlist) {
        var e_2, _a;
        var found = '';
        try {
            for (var extlist_1 = __values(extlist), extlist_1_1 = extlist_1.next(); !extlist_1_1.done; extlist_1_1 = extlist_1.next()) {
                var ext = extlist_1_1.value;
                if (filename.endsWith('.' + ext)) {
                    if (found.length < ext.length) {
                        found = ext;
                    }
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (extlist_1_1 && !extlist_1_1.done && (_a = extlist_1.return)) _a.call(extlist_1);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return found;
    };
    Downloader.prototype.unzipAll = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var op, task_2, task_2_1, iter, ext;
            var e_3, _a;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        op = [];
                        try {
                            for (task_2 = __values(task), task_2_1 = task_2.next(); !task_2_1.done; task_2_1 = task_2.next()) {
                                iter = task_2_1.value;
                                ext = this.getExt(iter.src, ['tgz', 'tar.gz', 'zip', 'gz', 'gzip']);
                                switch (ext) {
                                    case 'tgz':
                                    case 'tar.gz':
                                        op.push(this.uncompressingTgz(iter));
                                        break;
                                    case 'zip':
                                        op.push(this.uncompressingZip(iter));
                                        break;
                                    case 'gz':
                                    case 'gzip':
                                        op.push(this.uncompressingGZip(iter));
                                        break;
                                }
                            }
                        }
                        catch (e_3_1) { e_3 = { error: e_3_1 }; }
                        finally {
                            try {
                                if (task_2_1 && !task_2_1.done && (_a = task_2.return)) _a.call(task_2);
                            }
                            finally { if (e_3) throw e_3.error; }
                        }
                        return [4 /*yield*/, Promise.all(op)];
                    case 1:
                        _b.sent();
                        console.log('\nunzip all end\n');
                        return [2 /*return*/];
                }
            });
        });
    };
    Downloader.prototype.strip = function (str, deep) {
        var arr = path.normalize(str).split(path.sep);
        arr.splice(0, arr.length < deep ? arr.length - 1 : deep);
        return arr.join(path.sep);
    };
    Downloader.prototype.onEntry = function (iter, header, stream, next) {
        var _this = this;
        stream.on('end', next);
        if (iter.option && iter.option.strip)
            header.name = this.strip(header.name, iter.option.strip);
        if (header.type === 'file') {
            this.unzipTotal++;
            fs.ensureDirSync(path.dirname(path.join(iter.dst, header.name)));
            stream.pipe(fs.createWriteStream(path.join(iter.dst, header.name)).on('close', function () {
                _this.unzipNo++;
                _this.notifyFinish();
            }));
        }
        else {
            // directory
            fs.ensureDirSync(path.dirname(path.join(iter.dst, header.name)));
            stream.resume();
        }
    };
    Downloader.prototype.notifyFinish = function () {
        if (this.notifyOk && this.unzipNo >= this.unzipTotal)
            this.notifyOk(true);
    };
    Downloader.prototype.uncompressingTgz = function (iter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            new compressing_1.tgz.UncompressStream({ source: iter.src })
                .on('error', function (err) {
                reject(err);
            })
                .on('finish', function () {
                _this.notifyOk = resolve;
                _this.notifyFinish();
            }) // uncompressing is done
                .on('entry', function (header, stream, next) {
                _this.onEntry(iter, header, stream, next);
            });
        });
    };
    Downloader.prototype.uncompressingZip = function (iter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            new compressing_1.zip.UncompressStream({ source: iter.src })
                .on('error', function (err) {
                reject(err);
            })
                .on('finish', function () {
                _this.notifyOk = resolve;
                _this.notifyFinish();
            }) // uncompressing is done
                .on('entry', function (header, stream, next) {
                _this.onEntry(iter, header, stream, next);
            });
        });
    };
    Downloader.prototype.uncompressingGZip = function (iter) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            new compressing_1.gzip.UncompressStream({ source: iter.src })
                .on('error', function (err) {
                reject(err);
            })
                .on('finish', function () {
                _this.notifyOk = resolve;
                _this.notifyFinish();
            }) // uncompressing is done
                .on('entry', function (header, stream, next) {
                _this.onEntry(iter, header, stream, next);
            });
        });
    };
    return Downloader;
}());
exports.Downloader = Downloader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZG93bmxvYWRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kb3dubG9hZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxpQ0FBd0M7QUFDeEMsNkJBQStCO0FBQy9CLDJCQUE2QjtBQUM3QiwrQkFBMEI7QUFDMUIsMkNBQTZDO0FBVzdDO0lBTUMsb0JBQVksT0FBZ0I7UUFMcEIsU0FBSSxHQUFXLENBQUMsQ0FBQztRQUNqQixXQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLGVBQVUsR0FBRyxDQUFDLENBQUM7UUFDZixZQUFPLEdBQUcsQ0FBQyxDQUFDO1FBQ1osYUFBUSxHQUFHLFVBQUMsTUFBVyxJQUFNLENBQUMsQ0FBQztJQUNSLENBQUM7SUFDMUIsZ0NBQVcsR0FBakIsVUFBa0IsSUFBWTs7Ozs7Ozt3QkFDekIsRUFBRSxHQUFHLEVBQUUsQ0FBQzs7NEJBQ1osS0FBbUIsU0FBQSxTQUFBLElBQUksQ0FBQSxzRUFBRTtnQ0FBZCxJQUFJO2dDQUNkLEVBQUUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDOzZCQUNqQzs7Ozs7Ozs7O3dCQUNELHFCQUFNLE9BQU8sQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUE7O3dCQUFyQixTQUFxQixDQUFDO3dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLHNCQUFzQixDQUFDLENBQUM7Ozs7O0tBQ3BDO0lBQ08saUNBQVksR0FBcEIsVUFBcUIsSUFBVTtRQUEvQixpQkFtQ0M7UUFsQ0EsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLGVBQUssQ0FBQztnQkFDTCxNQUFNLEVBQUUsS0FBSztnQkFDYixHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUc7Z0JBQ2IsWUFBWSxFQUFFLFFBQVE7YUFDdEIsQ0FBQztpQkFDQSxJQUFJLENBQUMsVUFBQyxRQUFRO2dCQUNkLEtBQUksQ0FBQyxNQUFNLElBQUksUUFBUSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsZ0JBQWdCLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztnQkFDaEUsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDO2dCQUN6QyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxNQUFNLEVBQUUsVUFBQyxLQUFhO29CQUN0QyxLQUFJLENBQUMsSUFBSSxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUM7b0JBQzFCLElBQUksS0FBSyxDQUFDLEtBQUksQ0FBQyxNQUFNLENBQUMsRUFBRTt3QkFDdkIsWUFBSSxDQUFDLGlCQUFlLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLGdCQUFhLENBQUMsQ0FBQztxQkFDaEU7eUJBQU07d0JBQ04sWUFBSSxDQUFDLGlCQUFlLENBQUMsS0FBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxDQUFDLFVBQUssQ0FBQyxLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsUUFBSyxDQUFDLENBQUM7cUJBQzVGO2dCQUNGLENBQUMsQ0FBQyxDQUFDO2dCQUNILEVBQUUsQ0FBQyxjQUFjLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUM1QixRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsRUFBRTtxQkFDQSxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO3FCQUMzQixFQUFFLENBQUMsT0FBTyxFQUFFO29CQUNaLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQztnQkFDZixDQUFDLENBQUM7cUJBQ0QsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLEdBQUc7b0JBQ2hCLE1BQU0sSUFBSSxLQUFLLENBQUMsNENBQTBDLElBQUksQ0FBQyxHQUFLLENBQUMsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDO3FCQUNELEVBQUUsQ0FBQyxRQUFRLEVBQUUsY0FBTyxDQUFDLENBQUMsQ0FDeEIsQ0FBQztZQUNILENBQUMsQ0FBQztpQkFDRCxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNWLE1BQU0sQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUNiLENBQUMsQ0FBQyxDQUFDO1FBQ0wsQ0FBQyxDQUFDLENBQUM7SUFDSixDQUFDO0lBQ0QsMkJBQU0sR0FBTixVQUFPLFFBQWdCLEVBQUUsT0FBaUI7O1FBQ3pDLElBQUksS0FBSyxHQUFXLEVBQUUsQ0FBQzs7WUFDdkIsS0FBZ0IsSUFBQSxZQUFBLFNBQUEsT0FBTyxDQUFBLGdDQUFBLHFEQUFFO2dCQUFwQixJQUFJLEdBQUcsb0JBQUE7Z0JBQ1gsSUFBSSxRQUFRLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsRUFBRTtvQkFDakMsSUFBSSxLQUFLLENBQUMsTUFBTSxHQUFHLEdBQUcsQ0FBQyxNQUFNLEVBQUU7d0JBQzlCLEtBQUssR0FBRyxHQUFHLENBQUM7cUJBQ1o7aUJBQ0Q7YUFDRDs7Ozs7Ozs7O1FBQ0QsT0FBTyxLQUFLLENBQUM7SUFDZCxDQUFDO0lBQ0ssNkJBQVEsR0FBZCxVQUFlLElBQVk7Ozs7Ozs7d0JBQ3RCLEVBQUUsR0FBRyxFQUFFLENBQUM7OzRCQUVaLEtBQW1CLFNBQUEsU0FBQSxJQUFJLENBQUEsc0VBQUU7Z0NBQWQsSUFBSTtnQ0FDVixHQUFHLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUUsS0FBSyxFQUFFLFFBQVEsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFLE1BQU0sQ0FBRSxDQUFDLENBQUM7Z0NBQzFFLFFBQVEsR0FBRyxFQUFFO29DQUNaLEtBQUssS0FBSyxDQUFDO29DQUNYLEtBQUssUUFBUTt3Q0FDWixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dDQUNyQyxNQUFNO29DQUNQLEtBQUssS0FBSzt3Q0FDVCxFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dDQUNyQyxNQUFNO29DQUNQLEtBQUssSUFBSSxDQUFDO29DQUNWLEtBQUssTUFBTTt3Q0FDVixFQUFFLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO3dDQUN0QyxNQUFNO2lDQUNQOzZCQUNEOzs7Ozs7Ozs7d0JBRUQscUJBQU0sT0FBTyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQzs7Ozs7S0FDakM7SUFFTywwQkFBSyxHQUFiLFVBQWMsR0FBVyxFQUFFLElBQVk7UUFDdEMsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1FBQzlDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQyxFQUFFLEdBQUcsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDekQsT0FBTyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ08sNEJBQU8sR0FBZixVQUFnQixJQUFVLEVBQUUsTUFBVyxFQUFFLE1BQVcsRUFBRSxJQUFnQjtRQUF0RSxpQkFpQkM7UUFoQkEsTUFBTSxDQUFDLEVBQUUsQ0FBQyxLQUFLLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDdkIsSUFBSSxJQUFJLENBQUMsTUFBTSxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSztZQUFFLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDL0YsSUFBSSxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sRUFBRTtZQUMzQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7WUFDbEIsRUFBRSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pFLE1BQU0sQ0FBQyxJQUFJLENBQ1YsRUFBRSxDQUFDLGlCQUFpQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsT0FBTyxFQUFFO2dCQUNsRSxLQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7Z0JBQ2YsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUNGLENBQUM7U0FDRjthQUFNO1lBQ04sWUFBWTtZQUNaLEVBQUUsQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqRSxNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7U0FDaEI7SUFDRixDQUFDO0lBQ08saUNBQVksR0FBcEI7UUFDQyxJQUFJLElBQUksQ0FBQyxRQUFRLElBQUksSUFBSSxDQUFDLE9BQU8sSUFBSSxJQUFJLENBQUMsVUFBVTtZQUFFLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDM0UsQ0FBQztJQUNELHFDQUFnQixHQUFoQixVQUFpQixJQUFVO1FBQTNCLGlCQWNDO1FBYkEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLElBQUksaUJBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzVDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7aUJBQ0QsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDYixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtpQkFDMUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtnQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUVELHFDQUFnQixHQUFoQixVQUFpQixJQUFVO1FBQTNCLGlCQWNDO1FBYkEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLElBQUksaUJBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzVDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7aUJBQ0QsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDYixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtpQkFDMUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtnQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNELHNDQUFpQixHQUFqQixVQUFrQixJQUFVO1FBQTVCLGlCQWNDO1FBYkEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2xDLElBQUksa0JBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUJBQzdDLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQyxHQUFHO2dCQUNoQixNQUFNLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDYixDQUFDLENBQUM7aUJBQ0QsRUFBRSxDQUFDLFFBQVEsRUFBRTtnQkFDYixLQUFJLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztnQkFDeEIsS0FBSSxDQUFDLFlBQVksRUFBRSxDQUFDO1lBQ3JCLENBQUMsQ0FBQyxDQUFDLHdCQUF3QjtpQkFDMUIsRUFBRSxDQUFDLE9BQU8sRUFBRSxVQUFDLE1BQU0sRUFBRSxNQUFNLEVBQUUsSUFBSTtnQkFDakMsS0FBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsTUFBTSxFQUFFLE1BQU0sRUFBRSxJQUFJLENBQUMsQ0FBQztZQUMxQyxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQTlKRCxJQThKQztBQTlKWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHNsb2csIGlmQ01Mb2cgfSBmcm9tICcuL2NtTG9nJztcbmltcG9ydCAqIGFzIGZzIGZyb20gJ2ZzLWV4dHJhJztcbmltcG9ydCAqIGFzIHBhdGggZnJvbSAncGF0aCc7XG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xuaW1wb3J0IHsgZ3ppcCwgdGd6LCB6aXAgfSBmcm9tICdjb21wcmVzc2luZyc7XG5cbmV4cG9ydCBpbnRlcmZhY2Ugb3B0VW5aaXAge1xuXHRzdHJpcDogbnVtYmVyO1xuXHRmaWx0ZXI/OiAoZW50cnlQYXRoOiBzdHJpbmcpID0+IGJvb2xlYW47XG59XG5leHBvcnQgaW50ZXJmYWNlIGlmS3kge1xuXHRzcmM6IHN0cmluZztcblx0ZHN0OiBzdHJpbmc7XG5cdG9wdGlvbj86IG9wdFVuWmlwO1xufVxuZXhwb3J0IGNsYXNzIERvd25sb2FkZXIge1xuXHRwcml2YXRlIGRvbmU6IG51bWJlciA9IDA7XG5cdHByaXZhdGUgbGVuZ3RoOiBudW1iZXIgPSAwO1xuXHRwcml2YXRlIHVuemlwVG90YWwgPSAwO1xuXHRwcml2YXRlIHVuemlwTm8gPSAwO1xuXHRwcml2YXRlIG5vdGlmeU9rID0gKHJlc3VsdDogYW55KSA9PiB7fTtcblx0Y29uc3RydWN0b3Iob3B0aW9uczogaWZDTUxvZykge31cblx0YXN5bmMgZG93bmxvYWRBbGwodGFzazogaWZLeVtdKSB7XG5cdFx0bGV0IG9wID0gW107XG5cdFx0Zm9yIChjb25zdCBpdGVyIG9mIHRhc2spIHtcblx0XHRcdG9wLnB1c2godGhpcy5kb3dubG9hZEZpbGUoaXRlcikpO1xuXHRcdH1cblx0XHRhd2FpdCBQcm9taXNlLmFsbChvcCk7XG5cdFx0Y29uc29sZS5sb2coJ1xcbmRvd25sb2FkIGFsbCBlbmRcXG4nKTtcblx0fVxuXHRwcml2YXRlIGRvd25sb2FkRmlsZShpdGVyOiBpZkt5KTogUHJvbWlzZTxib29sZWFuPiB7XG5cdFx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdGF4aW9zKHtcblx0XHRcdFx0bWV0aG9kOiAnZ2V0Jyxcblx0XHRcdFx0dXJsOiBpdGVyLnNyYyxcblx0XHRcdFx0cmVzcG9uc2VUeXBlOiAnc3RyZWFtJ1xuXHRcdFx0fSlcblx0XHRcdFx0LnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5sZW5ndGggKz0gcGFyc2VJbnQocmVzcG9uc2UuaGVhZGVyc1snY29udGVudC1sZW5ndGgnXSwgMTApO1xuXHRcdFx0XHRcdGZzLmVuc3VyZURpclN5bmMocGF0aC5kaXJuYW1lKGl0ZXIuZHN0KSk7XG5cdFx0XHRcdFx0cmVzcG9uc2UuZGF0YS5vbignZGF0YScsIChjaHVuazogQnVmZmVyKSA9PiB7XG5cdFx0XHRcdFx0XHR0aGlzLmRvbmUgKz0gY2h1bmsubGVuZ3RoO1xuXHRcdFx0XHRcdFx0aWYgKGlzTmFOKHRoaXMubGVuZ3RoKSkge1xuXHRcdFx0XHRcdFx0XHRzbG9nKGBEb3dubG9hZGluZyAkeyh0aGlzLmRvbmUgLyAxMDI0KS50b0ZpeGVkKDIpfS8gdW5rbm93IGtiYCk7XG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdFx0XHRzbG9nKGBEb3dubG9hZGluZyAkeyh0aGlzLmRvbmUgLyAxMDI0KS50b0ZpeGVkKDIpfS8gJHsodGhpcy5sZW5ndGggLyAxMDI0KS50b0ZpeGVkKDIpfSBrYmApO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGZzLmVuc3VyZUZpbGVTeW5jKGl0ZXIuZHN0KTtcblx0XHRcdFx0XHRyZXNwb25zZS5kYXRhLnBpcGUoXG5cdFx0XHRcdFx0XHRmc1xuXHRcdFx0XHRcdFx0XHQuY3JlYXRlV3JpdGVTdHJlYW0oaXRlci5kc3QpXG5cdFx0XHRcdFx0XHRcdC5vbignY2xvc2UnLCAoKSA9PiB7XG5cdFx0XHRcdFx0XHRcdFx0cmVzb2x2ZSh0cnVlKTtcblx0XHRcdFx0XHRcdFx0fSlcblx0XHRcdFx0XHRcdFx0Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcblx0XHRcdFx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoYHNvbWUgZXJyb3Igd2FzIGhhcHBlbmQgd2l0aCB3cml0ZSBmaWxlICR7aXRlci5zcmN9YCk7XG5cdFx0XHRcdFx0XHRcdH0pXG5cdFx0XHRcdFx0XHRcdC5vbignZmluaXNoJywgKCkgPT4ge30pXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fSlcblx0XHRcdFx0LmNhdGNoKChlcnIpID0+IHtcblx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblx0Z2V0RXh0KGZpbGVuYW1lOiBzdHJpbmcsIGV4dGxpc3Q6IHN0cmluZ1tdKTogc3RyaW5nIHtcblx0XHRsZXQgZm91bmQ6IHN0cmluZyA9ICcnO1xuXHRcdGZvciAobGV0IGV4dCBvZiBleHRsaXN0KSB7XG5cdFx0XHRpZiAoZmlsZW5hbWUuZW5kc1dpdGgoJy4nICsgZXh0KSkge1xuXHRcdFx0XHRpZiAoZm91bmQubGVuZ3RoIDwgZXh0Lmxlbmd0aCkge1xuXHRcdFx0XHRcdGZvdW5kID0gZXh0O1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHRcdHJldHVybiBmb3VuZDtcblx0fVxuXHRhc3luYyB1bnppcEFsbCh0YXNrOiBpZkt5W10pIHtcblx0XHRsZXQgb3AgPSBbXTtcblxuXHRcdGZvciAoY29uc3QgaXRlciBvZiB0YXNrKSB7XG5cdFx0XHRsZXQgZXh0ID0gdGhpcy5nZXRFeHQoaXRlci5zcmMsIFsgJ3RneicsICd0YXIuZ3onLCAnemlwJywgJ2d6JywgJ2d6aXAnIF0pO1xuXHRcdFx0c3dpdGNoIChleHQpIHtcblx0XHRcdFx0Y2FzZSAndGd6Jzpcblx0XHRcdFx0Y2FzZSAndGFyLmd6Jzpcblx0XHRcdFx0XHRvcC5wdXNoKHRoaXMudW5jb21wcmVzc2luZ1RneihpdGVyKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgJ3ppcCc6XG5cdFx0XHRcdFx0b3AucHVzaCh0aGlzLnVuY29tcHJlc3NpbmdaaXAoaXRlcikpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlICdneic6XG5cdFx0XHRcdGNhc2UgJ2d6aXAnOlxuXHRcdFx0XHRcdG9wLnB1c2godGhpcy51bmNvbXByZXNzaW5nR1ppcChpdGVyKSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0YXdhaXQgUHJvbWlzZS5hbGwob3ApO1xuXHRcdGNvbnNvbGUubG9nKCdcXG51bnppcCBhbGwgZW5kXFxuJyk7XG5cdH1cblxuXHRwcml2YXRlIHN0cmlwKHN0cjogc3RyaW5nLCBkZWVwOiBudW1iZXIpIHtcblx0XHRsZXQgYXJyID0gcGF0aC5ub3JtYWxpemUoc3RyKS5zcGxpdChwYXRoLnNlcCk7XG5cdFx0YXJyLnNwbGljZSgwLCBhcnIubGVuZ3RoIDwgZGVlcCA/IGFyci5sZW5ndGggLSAxIDogZGVlcCk7XG5cdFx0cmV0dXJuIGFyci5qb2luKHBhdGguc2VwKTtcblx0fVxuXHRwcml2YXRlIG9uRW50cnkoaXRlcjogaWZLeSwgaGVhZGVyOiBhbnksIHN0cmVhbTogYW55LCBuZXh0OiAoKSA9PiB2b2lkKSB7XG5cdFx0c3RyZWFtLm9uKCdlbmQnLCBuZXh0KTtcblx0XHRpZiAoaXRlci5vcHRpb24gJiYgaXRlci5vcHRpb24uc3RyaXApIGhlYWRlci5uYW1lID0gdGhpcy5zdHJpcChoZWFkZXIubmFtZSwgaXRlci5vcHRpb24uc3RyaXApO1xuXHRcdGlmIChoZWFkZXIudHlwZSA9PT0gJ2ZpbGUnKSB7XG5cdFx0XHR0aGlzLnVuemlwVG90YWwrKztcblx0XHRcdGZzLmVuc3VyZURpclN5bmMocGF0aC5kaXJuYW1lKHBhdGguam9pbihpdGVyLmRzdCwgaGVhZGVyLm5hbWUpKSk7XG5cdFx0XHRzdHJlYW0ucGlwZShcblx0XHRcdFx0ZnMuY3JlYXRlV3JpdGVTdHJlYW0ocGF0aC5qb2luKGl0ZXIuZHN0LCBoZWFkZXIubmFtZSkpLm9uKCdjbG9zZScsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLnVuemlwTm8rKztcblx0XHRcdFx0XHR0aGlzLm5vdGlmeUZpbmlzaCgpO1xuXHRcdFx0XHR9KVxuXHRcdFx0KTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Ly8gZGlyZWN0b3J5XG5cdFx0XHRmcy5lbnN1cmVEaXJTeW5jKHBhdGguZGlybmFtZShwYXRoLmpvaW4oaXRlci5kc3QsIGhlYWRlci5uYW1lKSkpO1xuXHRcdFx0c3RyZWFtLnJlc3VtZSgpO1xuXHRcdH1cblx0fVxuXHRwcml2YXRlIG5vdGlmeUZpbmlzaCgpIHtcblx0XHRpZiAodGhpcy5ub3RpZnlPayAmJiB0aGlzLnVuemlwTm8gPj0gdGhpcy51bnppcFRvdGFsKSB0aGlzLm5vdGlmeU9rKHRydWUpO1xuXHR9XG5cdHVuY29tcHJlc3NpbmdUZ3ooaXRlcjogaWZLeSk6IFByb21pc2U8Ym9vbGVhbj4ge1xuXHRcdHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHRuZXcgdGd6LlVuY29tcHJlc3NTdHJlYW0oeyBzb3VyY2U6IGl0ZXIuc3JjIH0pXG5cdFx0XHRcdC5vbignZXJyb3InLCAoZXJyKSA9PiB7XG5cdFx0XHRcdFx0cmVqZWN0KGVycik7XG5cdFx0XHRcdH0pXG5cdFx0XHRcdC5vbignZmluaXNoJywgKCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMubm90aWZ5T2sgPSByZXNvbHZlO1xuXHRcdFx0XHRcdHRoaXMubm90aWZ5RmluaXNoKCk7XG5cdFx0XHRcdH0pIC8vIHVuY29tcHJlc3NpbmcgaXMgZG9uZVxuXHRcdFx0XHQub24oJ2VudHJ5JywgKGhlYWRlciwgc3RyZWFtLCBuZXh0KSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5vbkVudHJ5KGl0ZXIsIGhlYWRlciwgc3RyZWFtLCBuZXh0KTtcblx0XHRcdFx0fSk7XG5cdFx0fSk7XG5cdH1cblxuXHR1bmNvbXByZXNzaW5nWmlwKGl0ZXI6IGlmS3kpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bmV3IHppcC5VbmNvbXByZXNzU3RyZWFtKHsgc291cmNlOiBpdGVyLnNyYyB9KVxuXHRcdFx0XHQub24oJ2Vycm9yJywgKGVycikgPT4ge1xuXHRcdFx0XHRcdHJlamVjdChlcnIpO1xuXHRcdFx0XHR9KVxuXHRcdFx0XHQub24oJ2ZpbmlzaCcsICgpID0+IHtcblx0XHRcdFx0XHR0aGlzLm5vdGlmeU9rID0gcmVzb2x2ZTtcblx0XHRcdFx0XHR0aGlzLm5vdGlmeUZpbmlzaCgpO1xuXHRcdFx0XHR9KSAvLyB1bmNvbXByZXNzaW5nIGlzIGRvbmVcblx0XHRcdFx0Lm9uKCdlbnRyeScsIChoZWFkZXIsIHN0cmVhbSwgbmV4dCkgPT4ge1xuXHRcdFx0XHRcdHRoaXMub25FbnRyeShpdGVyLCBoZWFkZXIsIHN0cmVhbSwgbmV4dCk7XG5cdFx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9XG5cdHVuY29tcHJlc3NpbmdHWmlwKGl0ZXI6IGlmS3kpOiBQcm9taXNlPGJvb2xlYW4+IHtcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdFx0bmV3IGd6aXAuVW5jb21wcmVzc1N0cmVhbSh7IHNvdXJjZTogaXRlci5zcmMgfSlcblx0XHRcdFx0Lm9uKCdlcnJvcicsIChlcnIpID0+IHtcblx0XHRcdFx0XHRyZWplY3QoZXJyKTtcblx0XHRcdFx0fSlcblx0XHRcdFx0Lm9uKCdmaW5pc2gnLCAoKSA9PiB7XG5cdFx0XHRcdFx0dGhpcy5ub3RpZnlPayA9IHJlc29sdmU7XG5cdFx0XHRcdFx0dGhpcy5ub3RpZnlGaW5pc2goKTtcblx0XHRcdFx0fSkgLy8gdW5jb21wcmVzc2luZyBpcyBkb25lXG5cdFx0XHRcdC5vbignZW50cnknLCAoaGVhZGVyLCBzdHJlYW0sIG5leHQpID0+IHtcblx0XHRcdFx0XHR0aGlzLm9uRW50cnkoaXRlciwgaGVhZGVyLCBzdHJlYW0sIG5leHQpO1xuXHRcdFx0XHR9KTtcblx0XHR9KTtcblx0fVxufVxuIl19