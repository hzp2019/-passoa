'use strict';
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
var environment = require('./environment');
var path = require('path');
var urljoin = require('url-join');
var fs = require('fs-extra');
var cmLog_1 = require("./cmLog");
var targetOptions_1 = require("./targetOptions");
var runtimePaths_1 = require("./runtimePaths");
var downloader_1 = require("./downloader");
function getStat(path) {
    try {
        return fs.statSync(path);
    }
    catch (e) {
        return {
            isFile: function () {
                return false;
            },
            isDirectory: function () {
                return false;
            }
        };
    }
}
var Dist = /** @class */ (function () {
    function Dist(options) {
        this.options = options || {};
        this.log = new cmLog_1.CMLog(this.options);
        this.targetOptions = new targetOptions_1.TargetOptions(this.options);
        this.downloader = new downloader_1.Downloader(this.options);
    }
    Object.defineProperty(Dist.prototype, "internalPath", {
        get: function () {
            return path.join(environment.home, '.cxb', this.targetOptions.runtime + '-' + this.targetOptions.arch, 'v' + this.targetOptions.runtimeVersion);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dist.prototype, "externalPath", {
        get: function () {
            return runtimePaths_1.runtimePaths.get(this.targetOptions).externalPath;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dist.prototype, "downloaded", {
        get: function () {
            var e_1, _a;
            var headers = false;
            var libs = true;
            var stat = getStat(this.internalPath);
            if (stat.isDirectory()) {
                if (this.headerOnly) {
                    stat = getStat(path.join(this.internalPath, 'include/node/node.h'));
                    headers = stat.isFile();
                }
                else {
                    stat = getStat(path.join(this.internalPath, 'src/node.h'));
                    if (stat.isFile()) {
                        stat = getStat(path.join(this.internalPath, 'deps/v8/include/v8.h'));
                        headers = stat.isFile();
                    }
                }
                if (environment.isWin) {
                    try {
                        for (var _b = __values(this.winLibs), _c = _b.next(); !_c.done; _c = _b.next()) {
                            var libPath = _c.value;
                            stat = getStat(libPath);
                            libs = libs && stat.isFile();
                        }
                    }
                    catch (e_1_1) { e_1 = { error: e_1_1 }; }
                    finally {
                        try {
                            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                        }
                        finally { if (e_1) throw e_1.error; }
                    }
                }
            }
            return headers && libs;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dist.prototype, "winLibs", {
        get: function () {
            var e_2, _a;
            var libs = runtimePaths_1.runtimePaths.get(this.targetOptions).winLibs;
            var result = [];
            try {
                for (var libs_1 = __values(libs), libs_1_1 = libs_1.next(); !libs_1_1.done; libs_1_1 = libs_1.next()) {
                    var lib = libs_1_1.value;
                    result.push(path.join(this.internalPath, lib.dir, lib.name));
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (libs_1_1 && !libs_1_1.done && (_a = libs_1.return)) _a.call(libs_1);
                }
                finally { if (e_2) throw e_2.error; }
            }
            return result;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Dist.prototype, "headerOnly", {
        get: function () {
            return runtimePaths_1.runtimePaths.get(this.targetOptions).headerOnly;
        },
        enumerable: true,
        configurable: true
    });
    Dist.prototype.ensureDownloaded = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!!this.downloaded) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.download()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/];
                }
            });
        });
    };
    Dist.prototype.download = function () {
        return __awaiter(this, void 0, void 0, function () {
            var log, task1, task2;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        log = this.log;
                        log.info('DIST', 'Downloading distribution files.');
                        return [4 /*yield*/, fs.ensureDir(this.internalPath)];
                    case 1:
                        _a.sent();
                        task1 = new Array(), task2 = new Array();
                        this._downloadLibs(task1);
                        this._downloadTar(task1, task2);
                        return [4 /*yield*/, this.downloader.downloadAll(task1)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, this.downloader.unzipAll(task2)];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Dist.prototype._downloadTar = function (task1, task2) {
        return __awaiter(this, void 0, void 0, function () {
            var log, self, tarLocalPath, tarUrl;
            return __generator(this, function (_a) {
                log = this.log;
                self = this;
                tarLocalPath = runtimePaths_1.runtimePaths.get(self.targetOptions).tarPath;
                tarUrl = urljoin(self.externalPath, tarLocalPath);
                log.http('DIST', '\t- ' + tarUrl);
                fs.ensureDirSync('tmp/stage/');
                task1.push({ src: tarUrl, dst: 'tmp/stage/' + tarLocalPath });
                task2.push({ src: 'tmp/stage/' + tarLocalPath, dst: self.internalPath, option: { strip: 1 } });
                return [2 /*return*/];
            });
        });
    };
    Dist.prototype._downloadLibs = function (task) {
        return __awaiter(this, void 0, void 0, function () {
            var log, self, paths, _a, _b, dirs, subDir, fn, fPath, libUrl;
            var e_3, _c;
            return __generator(this, function (_d) {
                log = this.log;
                self = this;
                if (!environment.isWin) {
                    return [2 /*return*/];
                }
                paths = runtimePaths_1.runtimePaths.get(self.targetOptions);
                try {
                    for (_a = __values(paths.winLibs), _b = _a.next(); !_b.done; _b = _a.next()) {
                        dirs = _b.value;
                        subDir = dirs.dir;
                        fn = dirs.name;
                        fPath = subDir ? urljoin(subDir, fn) : fn;
                        libUrl = urljoin(self.externalPath, fPath);
                        log.http('DIST', '\t- ' + libUrl);
                        fs.ensureDirSync(path.join(self.internalPath, subDir));
                        task.push({ src: libUrl, dst: path.join(self.internalPath, fPath) });
                    }
                }
                catch (e_3_1) { e_3 = { error: e_3_1 }; }
                finally {
                    try {
                        if (_b && !_b.done && (_c = _a.return)) _c.call(_a);
                    }
                    finally { if (e_3) throw e_3.error; }
                }
                return [2 /*return*/];
            });
        });
    };
    return Dist;
}());
exports.Dist = Dist;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL3NyYy9kaXN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLFlBQVksQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUNiLElBQUksV0FBVyxHQUFHLE9BQU8sQ0FBQyxlQUFlLENBQUMsQ0FBQztBQUMzQyxJQUFJLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFDM0IsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO0FBQ2xDLElBQUksRUFBRSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUM3QixpQ0FBZ0M7QUFDaEMsaURBQWdEO0FBQ2hELCtDQUE4QztBQUM5QywyQ0FBZ0Q7QUFLaEQsU0FBUyxPQUFPLENBQUMsSUFBWTtJQUM1QixJQUFJO1FBQ0gsT0FBTyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0tBQ3pCO0lBQUMsT0FBTyxDQUFDLEVBQUU7UUFDWCxPQUFPO1lBQ04sTUFBTSxFQUFFO2dCQUNQLE9BQU8sS0FBSyxDQUFDO1lBQ2QsQ0FBQztZQUNELFdBQVcsRUFBRTtnQkFDWixPQUFPLEtBQUssQ0FBQztZQUNkLENBQUM7U0FDRCxDQUFDO0tBQ0Y7QUFDRixDQUFDO0FBQ0Q7SUFLQyxjQUFZLE9BQXFCO1FBQ2hDLElBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxJQUFJLEVBQUUsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksYUFBSyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNuQyxJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksNkJBQWEsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDckQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLHVCQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lB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SSxDQUFDLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksRUFBRSxLQUFLLENBQUMsRUFBRSxDQUFDLENBQUM7cUJBQ3JFOzs7Ozs7Ozs7Ozs7S0FDRDtJQUNGLFdBQUM7QUFBRCxDQUFDLEFBM0dELElBMkdDO0FBM0dZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBzdHJpY3QnO1xubGV0IGVudmlyb25tZW50ID0gcmVxdWlyZSgnLi9lbnZpcm9ubWVudCcpO1xubGV0IHBhdGggPSByZXF1aXJlKCdwYXRoJyk7XG5sZXQgdXJsam9pbiA9IHJlcXVpcmUoJ3VybC1qb2luJyk7XG5sZXQgZnMgPSByZXF1aXJlKCdmcy1leHRyYScpO1xuaW1wb3J0IHsgQ01Mb2cgfSBmcm9tICcuL2NtTG9nJztcbmltcG9ydCB7IFRhcmdldE9wdGlvbnMgfSBmcm9tICcuL3RhcmdldE9wdGlvbnMnO1xuaW1wb3J0IHsgcnVudGltZVBhdGhzIH0gZnJvbSAnLi9ydW50aW1lUGF0aHMnO1xuaW1wb3J0IHsgRG93bmxvYWRlciwgaWZLeSB9IGZyb20gJy4vZG93bmxvYWRlcic7XG5cbmludGVyZmFjZSBEaXN0T3B0aW9ucyB7XG5cdFtrZXk6IHN0cmluZ106IGFueTtcbn1cbmZ1bmN0aW9uIGdldFN0YXQocGF0aDogc3RyaW5nKSB7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIGZzLnN0YXRTeW5jKHBhdGgpO1xuXHR9IGNhdGNoIChlKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzRmlsZTogKCkgPT4ge1xuXHRcdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0XHR9LFxuXHRcdFx0aXNEaXJlY3Rvcnk6ICgpID0+IHtcblx0XHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn1cbmV4cG9ydCBjbGFzcyBEaXN0IHtcblx0cHJpdmF0ZSBvcHRpb25zOiBEaXN0T3B0aW9ucztcblx0cHJpdmF0ZSBsb2c6IENNTG9nO1xuXHRwcml2YXRlIHRhcmdldE9wdGlvbnM6IFRhcmdldE9wdGlvbnM7XG5cdHByaXZhdGUgZG93bmxvYWRlcjogRG93bmxvYWRlcjtcblx0Y29uc3RydWN0b3Iob3B0aW9ucz86IERpc3RPcHRpb25zKSB7XG5cdFx0dGhpcy5vcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblx0XHR0aGlzLmxvZyA9IG5ldyBDTUxvZyh0aGlzLm9wdGlvbnMpO1xuXHRcdHRoaXMudGFyZ2V0T3B0aW9ucyA9IG5ldyBUYXJnZXRPcHRpb25zKHRoaXMub3B0aW9ucyk7XG5cdFx0dGhpcy5kb3dubG9hZGVyID0gbmV3IERvd25sb2FkZXIodGhpcy5vcHRpb25zKTtcblx0fVxuXG5cdGdldCBpbnRlcm5hbFBhdGgoKSB7XG5cdFx0cmV0dXJuIHBhdGguam9pbihcblx0XHRcdGVudmlyb25tZW50LmhvbWUsXG5cdFx0XHQnLmN4YicsXG5cdFx0XHR0aGlzLnRhcmdldE9wdGlvbnMucnVudGltZSArICctJyArIHRoaXMudGFyZ2V0T3B0aW9ucy5hcmNoLFxuXHRcdFx0J3YnICsgdGhpcy50YXJnZXRPcHRpb25zLnJ1bnRpbWVWZXJzaW9uXG5cdFx0KTtcblx0fVxuXHRnZXQgZXh0ZXJuYWxQYXRoKCkge1xuXHRcdHJldHVybiBydW50aW1lUGF0aHMuZ2V0KHRoaXMudGFyZ2V0T3B0aW9ucykuZXh0ZXJuYWxQYXRoO1xuXHR9XG5cdGdldCBkb3dubG9hZGVkKCkge1xuXHRcdGxldCBoZWFkZXJzID0gZmFsc2U7XG5cdFx0bGV0IGxpYnMgPSB0cnVlO1xuXHRcdGxldCBzdGF0ID0gZ2V0U3RhdCh0aGlzLmludGVybmFsUGF0aCk7XG5cdFx0aWYgKHN0YXQuaXNEaXJlY3RvcnkoKSkge1xuXHRcdFx0aWYgKHRoaXMuaGVhZGVyT25seSkge1xuXHRcdFx0XHRzdGF0ID0gZ2V0U3RhdChwYXRoLmpvaW4odGhpcy5pbnRlcm5hbFBhdGgsICdpbmNsdWRlL25vZGUvbm9kZS5oJykpO1xuXHRcdFx0XHRoZWFkZXJzID0gc3RhdC5pc0ZpbGUoKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdHN0YXQgPSBnZXRTdGF0KHBhdGguam9pbih0aGlzLmludGVybmFsUGF0aCwgJ3NyYy9ub2RlLmgnKSk7XG5cdFx0XHRcdGlmIChzdGF0LmlzRmlsZSgpKSB7XG5cdFx0XHRcdFx0c3RhdCA9IGdldFN0YXQocGF0aC5qb2luKHRoaXMuaW50ZXJuYWxQYXRoLCAnZGVwcy92OC9pbmNsdWRlL3Y4LmgnKSk7XG5cdFx0XHRcdFx0aGVhZGVycyA9IHN0YXQuaXNGaWxlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChlbnZpcm9ubWVudC5pc1dpbikge1xuXHRcdFx0XHRmb3IgKGxldCBsaWJQYXRoIG9mIHRoaXMud2luTGlicykge1xuXHRcdFx0XHRcdHN0YXQgPSBnZXRTdGF0KGxpYlBhdGgpO1xuXHRcdFx0XHRcdGxpYnMgPSBsaWJzICYmIHN0YXQuaXNGaWxlKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9XG5cdFx0cmV0dXJuIGhlYWRlcnMgJiYgbGlicztcblx0fVxuXHRnZXQgd2luTGlicygpIHtcblx0XHRsZXQgbGlicyA9IHJ1bnRpbWVQYXRocy5nZXQodGhpcy50YXJnZXRPcHRpb25zKS53aW5MaWJzO1xuXHRcdGxldCByZXN1bHQgPSBbXTtcblx0XHRmb3IgKGxldCBsaWIgb2YgbGlicykge1xuXHRcdFx0cmVzdWx0LnB1c2gocGF0aC5qb2luKHRoaXMuaW50ZXJuYWxQYXRoLCBsaWIuZGlyLCBsaWIubmFtZSkpO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVzdWx0O1xuXHR9XG5cdGdldCBoZWFkZXJPbmx5KCkge1xuXHRcdHJldHVybiBydW50aW1lUGF0aHMuZ2V0KHRoaXMudGFyZ2V0T3B0aW9ucykuaGVhZGVyT25seTtcblx0fVxuXHRhc3luYyBlbnN1cmVEb3dubG9hZGVkKCkge1xuXHRcdGlmICghdGhpcy5kb3dubG9hZGVkKSB7XG5cdFx0XHRhd2FpdCB0aGlzLmRvd25sb2FkKCk7XG5cdFx0fVxuXHR9XG5cblx0YXN5bmMgZG93bmxvYWQoKSB7XG5cdFx0bGV0IGxvZyA9IHRoaXMubG9nO1xuXHRcdGxvZy5pbmZvKCdESVNUJywgJ0Rvd25sb2FkaW5nIGRpc3RyaWJ1dGlvbiBmaWxlcy4nKTtcblx0XHRhd2FpdCBmcy5lbnN1cmVEaXIodGhpcy5pbnRlcm5hbFBhdGgpO1xuXHRcdC8vbGV0IHN1bXMgPSBhd2FpdCB0aGlzLl9kb3dubG9hZFNoYVN1bXMoKTtcblx0XHRsZXQgdGFzazEgPSBuZXcgQXJyYXk8aWZLeT4oKSxcblx0XHRcdHRhc2syID0gbmV3IEFycmF5PGlmS3k+KCk7XG5cdFx0dGhpcy5fZG93bmxvYWRMaWJzKHRhc2sxKTtcblx0XHR0aGlzLl9kb3dubG9hZFRhcih0YXNrMSwgdGFzazIpO1xuXHRcdGF3YWl0IHRoaXMuZG93bmxvYWRlci5kb3dubG9hZEFsbCh0YXNrMSk7XG5cdFx0YXdhaXQgdGhpcy5kb3dubG9hZGVyLnVuemlwQWxsKHRhc2syKTtcblx0fVxuXG5cdGFzeW5jIF9kb3dubG9hZFRhcih0YXNrMTogaWZLeVtdLCB0YXNrMjogaWZLeVtdKSB7XG5cdFx0bGV0IGxvZyA9IHRoaXMubG9nO1xuXHRcdGxldCBzZWxmID0gdGhpcztcblx0XHRsZXQgdGFyTG9jYWxQYXRoID0gcnVudGltZVBhdGhzLmdldChzZWxmLnRhcmdldE9wdGlvbnMpLnRhclBhdGg7XG5cdFx0bGV0IHRhclVybCA9IHVybGpvaW4oc2VsZi5leHRlcm5hbFBhdGgsIHRhckxvY2FsUGF0aCk7XG5cdFx0bG9nLmh0dHAoJ0RJU1QnLCAnXFx0LSAnICsgdGFyVXJsKTtcblx0XHRmcy5lbnN1cmVEaXJTeW5jKCd0bXAvc3RhZ2UvJyk7XG5cdFx0dGFzazEucHVzaCh7IHNyYzogdGFyVXJsLCBkc3Q6ICd0bXAvc3RhZ2UvJyArIHRhckxvY2FsUGF0aCB9KTtcblx0XHR0YXNrMi5wdXNoKHsgc3JjOiAndG1wL3N0YWdlLycgKyB0YXJMb2NhbFBhdGgsIGRzdDogc2VsZi5pbnRlcm5hbFBhdGgsIG9wdGlvbjogeyBzdHJpcDogMSB9IH0pO1xuXHR9XG5cblx0YXN5bmMgX2Rvd25sb2FkTGlicyh0YXNrOiBpZkt5W10pIHtcblx0XHRjb25zdCBsb2cgPSB0aGlzLmxvZztcblx0XHRjb25zdCBzZWxmID0gdGhpcztcblx0XHRpZiAoIWVudmlyb25tZW50LmlzV2luKSB7XG5cdFx0XHRyZXR1cm47XG5cdFx0fVxuXG5cdFx0Y29uc3QgcGF0aHMgPSBydW50aW1lUGF0aHMuZ2V0KHNlbGYudGFyZ2V0T3B0aW9ucyk7XG5cdFx0Zm9yIChjb25zdCBkaXJzIG9mIHBhdGhzLndpbkxpYnMpIHtcblx0XHRcdGNvbnN0IHN1YkRpciA9IGRpcnMuZGlyO1xuXHRcdFx0Y29uc3QgZm4gPSBkaXJzLm5hbWU7XG5cdFx0XHRjb25zdCBmUGF0aCA9IHN1YkRpciA/IHVybGpvaW4oc3ViRGlyLCBmbikgOiBmbjtcblx0XHRcdGNvbnN0IGxpYlVybCA9IHVybGpvaW4oc2VsZi5leHRlcm5hbFBhdGgsIGZQYXRoKTtcblx0XHRcdGxvZy5odHRwKCdESVNUJywgJ1xcdC0gJyArIGxpYlVybCk7XG5cblx0XHRcdGZzLmVuc3VyZURpclN5bmMocGF0aC5qb2luKHNlbGYuaW50ZXJuYWxQYXRoLCBzdWJEaXIpKTtcblx0XHRcdHRhc2sucHVzaCh7IHNyYzogbGliVXJsLCBkc3Q6IHBhdGguam9pbihzZWxmLmludGVybmFsUGF0aCwgZlBhdGgpIH0pO1xuXHRcdH1cblx0fVxufVxuIl19