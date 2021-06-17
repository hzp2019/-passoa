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
Object.defineProperty(exports, "__esModule", { value: true });
var fs_extra_1 = require("fs-extra");
var cmLog_1 = require("./cmLog");
var FormData = require("form-data");
var axios_1 = require("axios");
var compressing_1 = require("compressing");
var stream_1 = require("stream");
var fs_1 = require("fs");
var Uploader = /** @class */ (function () {
    function Uploader() {
    }
    Uploader.prototype.packTgz = function (src, dst) {
        var _this = this;
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var ts, destStream, len;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        ts = new compressing_1.tgz.Stream();
                        ts.addEntry(src);
                        return [4 /*yield*/, fs_extra_1.ensureFile(dst)];
                    case 1:
                        _a.sent();
                        destStream = fs_extra_1.createWriteStream(dst);
                        len = 0;
                        ts.on('data', function (data) {
                            cmLog_1.slog("ziped :" + (len += data.length));
                        });
                        stream_1.pipeline(ts, destStream, function (ev) {
                            if (ev) {
                                console.log(ev);
                                reject(-1);
                            }
                            else {
                                resolve(0);
                            }
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    Uploader.prototype.readFileByPath = function (path) { };
    Uploader.prototype.upload = function (url, path, token, opt) {
        var _this = this;
        if (opt === void 0) { opt = { method: 'put', form: false }; }
        return new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
            var form, headers;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        headers = {};
                        if (!form) return [3 /*break*/, 1];
                        form = new FormData(); // FormData 对象
                        form.append('files', fs_extra_1.createReadStream(path));
                        headers = form.getHeaders();
                        return [3 /*break*/, 3];
                    case 1: return [4 /*yield*/, new Promise(function (resolve, reject) {
                            fs_1.readFile(path, function (err, data) {
                                if (err) {
                                    reject(err);
                                }
                                else {
                                    resolve(data);
                                }
                            });
                        })];
                    case 2:
                        form = _a.sent();
                        headers['Content-Length'] = form.length;
                        _a.label = 3;
                    case 3:
                        headers.Authorization = "Basic " + token;
                        axios_1.default({
                            method: 'put',
                            url: url,
                            data: form,
                            headers: headers,
                            transformRequest: function (data, headers) {
                                // Do whatever you want to transform the data
                                if (data._valuesToMeasure) {
                                    data._valuesToMeasure[0].on('data', function (data) {
                                        console.log('uploaded:' + data.length);
                                    });
                                }
                                return data;
                            }
                        })
                            // axios({
                            // 	method: 'put',
                            // 	url: url,
                            // 	data: form,
                            // 	headers: headers,
                            // 	onUploadProgress: (progressEvent) => {
                            // 		let complete = ((progressEvent.loaded / progressEvent.total * 100) | 0) + '%';
                            // 		console.log('upload:', complete);
                            // 	}
                            // })
                            .then(function (res) {
                            //根据服务器返回进行处理
                            if (res.status > 199 && res.status < 300) {
                                console.log('upload done');
                                resolve(0);
                            }
                            else {
                                console.log('upload fail');
                                reject(-1);
                            }
                        })
                            .catch(function (error) {
                            console.log("[uploaded error]:", error.message);
                            reject(-2);
                        });
                        return [2 /*return*/];
                }
            });
        }); });
    };
    return Uploader;
}());
exports.Uploader = Uploader;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXBsb2FkZXIuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvdXBsb2FkZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxxQ0FBMkU7QUFDM0UsaUNBQStCO0FBQy9CLG9DQUFzQztBQUN0QywrQkFBMEI7QUFDMUIsMkNBQWtDO0FBQ2xDLGlDQUFrQztBQUNsQyx5QkFBOEI7QUFFOUI7SUFDQztJQUFnQixDQUFDO0lBQ2pCLDBCQUFPLEdBQVAsVUFBUSxHQUFXLEVBQUUsR0FBVztRQUFoQyxpQkFtQkM7UUFsQkEsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFPLE9BQU8sRUFBRSxNQUFNOzs7Ozt3QkFDcEMsRUFBRSxHQUFHLElBQUksaUJBQUcsQ0FBQyxNQUFNLEVBQUUsQ0FBQzt3QkFDMUIsRUFBRSxDQUFDLFFBQVEsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDakIscUJBQU0scUJBQVUsQ0FBQyxHQUFHLENBQUMsRUFBQTs7d0JBQXJCLFNBQXFCLENBQUM7d0JBQ2xCLFVBQVUsR0FBRyw0QkFBaUIsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDcEMsR0FBRyxHQUFHLENBQUMsQ0FBQzt3QkFDWixFQUFFLENBQUMsRUFBRSxDQUFDLE1BQU0sRUFBRSxVQUFDLElBQUk7NEJBQ2xCLFlBQUksQ0FBQyxZQUFVLENBQUMsR0FBRyxJQUFJLElBQUksQ0FBQyxNQUFNLENBQUcsQ0FBQyxDQUFDO3dCQUN4QyxDQUFDLENBQUMsQ0FBQzt3QkFDSCxpQkFBUSxDQUFDLEVBQUUsRUFBRSxVQUFVLEVBQUUsVUFBQyxFQUFFOzRCQUMzQixJQUFJLEVBQUUsRUFBRTtnQ0FDUCxPQUFPLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dDQUNoQixNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs2QkFDWDtpQ0FBTTtnQ0FDTixPQUFPLENBQUMsQ0FBQyxDQUFDLENBQUM7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QyxDQUFDOzs7O2FBQ0osQ0FBQyxDQUFDO0lBQ0osQ0FBQztJQUNGLGVBQUM7QUFBRCxDQUFDLEFBdEZELElBc0ZDO0FBdEZZLDRCQUFRIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlUmVhZFN0cmVhbSwgY3JlYXRlV3JpdGVTdHJlYW0sIGVuc3VyZUZpbGUgfSBmcm9tICdmcy1leHRyYSc7XHJcbmltcG9ydCB7IHNsb2cgfSBmcm9tICcuL2NtTG9nJztcclxuaW1wb3J0ICogYXMgRm9ybURhdGEgZnJvbSAnZm9ybS1kYXRhJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdGd6IH0gZnJvbSAnY29tcHJlc3NpbmcnO1xyXG5pbXBvcnQgeyBwaXBlbGluZSB9IGZyb20gJ3N0cmVhbSc7XHJcbmltcG9ydCB7IHJlYWRGaWxlIH0gZnJvbSAnZnMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVwbG9hZGVyIHtcclxuXHRjb25zdHJ1Y3RvcigpIHsgfVxyXG5cdHBhY2tUZ3ooc3JjOiBzdHJpbmcsIGRzdDogc3RyaW5nKSB7XHJcblx0XHRyZXR1cm4gbmV3IFByb21pc2UoYXN5bmMgKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRsZXQgdHMgPSBuZXcgdGd6LlN0cmVhbSgpO1xyXG5cdFx0XHR0cy5hZGRFbnRyeShzcmMpO1xyXG5cdFx0XHRhd2FpdCBlbnN1cmVGaWxlKGRzdCk7XHJcblx0XHRcdGxldCBkZXN0U3RyZWFtID0gY3JlYXRlV3JpdGVTdHJlYW0oZHN0KTtcclxuXHRcdFx0bGV0IGxlbiA9IDA7XHJcblx0XHRcdHRzLm9uKCdkYXRhJywgKGRhdGEpID0+IHtcclxuXHRcdFx0XHRzbG9nKGB6aXBlZCA6JHsobGVuICs9IGRhdGEubGVuZ3RoKX1gKTtcclxuXHRcdFx0fSk7XHJcblx0XHRcdHBpcGVsaW5lKHRzLCBkZXN0U3RyZWFtLCAoZXYpID0+IHtcclxuXHRcdFx0XHRpZiAoZXYpIHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGV2KTtcclxuXHRcdFx0XHRcdHJlamVjdCgtMSk7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdHJlc29sdmUoMCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRyZWFkRmlsZUJ5UGF0aChwYXRoOiBzdHJpbmcpIHsgfVxyXG5cdHVwbG9hZCh1cmw6IHN0cmluZywgcGF0aDogc3RyaW5nLCB0b2tlbjogc3RyaW5nLCBvcHQgPSB7IG1ldGhvZDogJ3B1dCcsIGZvcm06IGZhbHNlIH0pIHtcclxuXHRcdHJldHVybiBuZXcgUHJvbWlzZShhc3luYyAocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcblx0XHRcdGxldCBmb3JtOiBhbnk7XHJcblx0XHRcdGxldCBoZWFkZXJzOiBhbnkgPSB7fTtcclxuXHRcdFx0aWYgKGZvcm0pIHtcclxuXHRcdFx0XHRmb3JtID0gbmV3IEZvcm1EYXRhKCk7IC8vIEZvcm1EYXRhIOWvueixoVxyXG5cdFx0XHRcdGZvcm0uYXBwZW5kKCdmaWxlcycsIGNyZWF0ZVJlYWRTdHJlYW0ocGF0aCkpO1xyXG5cdFx0XHRcdGhlYWRlcnMgPSBmb3JtLmdldEhlYWRlcnMoKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRmb3JtID0gYXdhaXQgbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG5cdFx0XHRcdFx0cmVhZEZpbGUocGF0aCwgKGVyciwgZGF0YSkgPT4ge1xyXG5cdFx0XHRcdFx0XHRpZiAoZXJyKSB7XHJcblx0XHRcdFx0XHRcdFx0cmVqZWN0KGVycik7XHJcblx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0cmVzb2x2ZShkYXRhKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdFx0aGVhZGVyc1snQ29udGVudC1MZW5ndGgnXSA9IGZvcm0ubGVuZ3RoO1xyXG5cdFx0XHR9XHJcblx0XHRcdGhlYWRlcnMuQXV0aG9yaXphdGlvbiA9IGBCYXNpYyAke3Rva2VufWA7XHJcblx0XHRcdGF4aW9zKHtcclxuXHRcdFx0XHRtZXRob2Q6ICdwdXQnLFxyXG5cdFx0XHRcdHVybDogdXJsLFxyXG5cdFx0XHRcdGRhdGE6IGZvcm0sXHJcblx0XHRcdFx0aGVhZGVyczogaGVhZGVycyxcclxuXHRcdFx0XHR0cmFuc2Zvcm1SZXF1ZXN0OiAoZGF0YSwgaGVhZGVycykgPT4ge1xyXG5cdFx0XHRcdFx0Ly8gRG8gd2hhdGV2ZXIgeW91IHdhbnQgdG8gdHJhbnNmb3JtIHRoZSBkYXRhXHJcblx0XHRcdFx0XHRpZiAoZGF0YS5fdmFsdWVzVG9NZWFzdXJlKSB7XHJcblx0XHRcdFx0XHRcdGRhdGEuX3ZhbHVlc1RvTWVhc3VyZVswXS5vbignZGF0YScsIChkYXRhOiBCdWZmZXIpID0+IHtcclxuXHRcdFx0XHRcdFx0XHRjb25zb2xlLmxvZygndXBsb2FkZWQ6JyArIGRhdGEubGVuZ3RoKTtcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRyZXR1cm4gZGF0YTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pXHJcblx0XHRcdFx0Ly8gYXhpb3Moe1xyXG5cdFx0XHRcdC8vIFx0bWV0aG9kOiAncHV0JyxcclxuXHRcdFx0XHQvLyBcdHVybDogdXJsLFxyXG5cdFx0XHRcdC8vIFx0ZGF0YTogZm9ybSxcclxuXHRcdFx0XHQvLyBcdGhlYWRlcnM6IGhlYWRlcnMsXHJcblx0XHRcdFx0Ly8gXHRvblVwbG9hZFByb2dyZXNzOiAocHJvZ3Jlc3NFdmVudCkgPT4ge1xyXG5cdFx0XHRcdC8vIFx0XHRsZXQgY29tcGxldGUgPSAoKHByb2dyZXNzRXZlbnQubG9hZGVkIC8gcHJvZ3Jlc3NFdmVudC50b3RhbCAqIDEwMCkgfCAwKSArICclJztcclxuXHRcdFx0XHQvLyBcdFx0Y29uc29sZS5sb2coJ3VwbG9hZDonLCBjb21wbGV0ZSk7XHJcblx0XHRcdFx0Ly8gXHR9XHJcblx0XHRcdFx0Ly8gfSlcclxuXHRcdFx0XHQudGhlbigocmVzKSA9PiB7XHJcblx0XHRcdFx0XHQvL+agueaNruacjeWKoeWZqOi/lOWbnui/m+ihjOWkhOeQhlxyXG5cclxuXHRcdFx0XHRcdGlmIChyZXMuc3RhdHVzID4gMTk5ICYmIHJlcy5zdGF0dXMgPCAzMDApIHtcclxuXHRcdFx0XHRcdFx0Y29uc29sZS5sb2coJ3VwbG9hZCBkb25lJyk7XHJcblx0XHRcdFx0XHRcdHJlc29sdmUoMCk7XHJcblx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRjb25zb2xlLmxvZygndXBsb2FkIGZhaWwnKTtcclxuXHRcdFx0XHRcdFx0cmVqZWN0KC0xKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9KVxyXG5cdFx0XHRcdC5jYXRjaCgoZXJyb3IpID0+IHtcclxuXHRcdFx0XHRcdGNvbnNvbGUubG9nKFwiW3VwbG9hZGVkIGVycm9yXTpcIiwgZXJyb3IubWVzc2FnZSk7XHJcblx0XHRcdFx0XHRyZWplY3QoLTIpO1xyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fSk7XHJcblx0fVxyXG59XHJcbiJdfQ==