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
var connect_1 = require("../connect");
var email_notify_entity_1 = require("../entity/email_notify.entity");
var EmailApi = /** @class */ (function () {
    function EmailApi() {
    }
    EmailApi.prototype.createEmailNotify = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var emailInfoRepository, emailNotify;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emailInfoRepository = connect_1.connect.getConnection().getRepository(email_notify_entity_1.EmailNotify);
                        emailNotify = new email_notify_entity_1.EmailNotify();
                        emailNotify.pid = info.pid;
                        emailNotify.uid = info.uid;
                        emailNotify.name = info.name;
                        emailNotify.address = info.address;
                        emailNotify.setting = info.setting;
                        return [4 /*yield*/, emailInfoRepository.save(emailNotify)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmailApi.prototype.findEmailNotifyNameList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(email_notify_entity_1.EmailNotify);
                        query = repository.createQueryBuilder('cp');
                        query
                            .select('cp*')
                            .groupBy('cp.name');
                        return [4 /*yield*/, query.getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmailApi.prototype.findEmailNotifyList = function (pid, status) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(email_notify_entity_1.EmailNotify);
                        if (!(status != undefined)) return [3 /*break*/, 2];
                        return [4 /*yield*/, repository.findOne({ pid: pid, status: status })];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2: return [4 /*yield*/, repository.findOne({ pid: pid })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmailApi.prototype.updateEmailNotifyInfo = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var emailInfoRepository, emailNotify;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emailInfoRepository = connect_1.connect.getConnection().getRepository(email_notify_entity_1.EmailNotify);
                        return [4 /*yield*/, emailInfoRepository.findOne({ id: info.id })];
                    case 1:
                        emailNotify = _a.sent();
                        if (!emailNotify) {
                            throw new Error('数据不存在');
                        }
                        emailNotify.name = info.name;
                        emailNotify.address = info.address;
                        emailNotify.setting = info.setting;
                        return [4 /*yield*/, emailInfoRepository.save(emailNotify)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'update emailNotifyInfo done'];
                }
            });
        });
    };
    EmailApi.prototype.updateEmailNotifyStatus = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var emailInfoRepository, emailNotify;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        emailInfoRepository = connect_1.connect.getConnection().getRepository(email_notify_entity_1.EmailNotify);
                        return [4 /*yield*/, emailInfoRepository.findOne({ id: info.id })];
                    case 1:
                        emailNotify = _a.sent();
                        if (!emailNotify) {
                            throw new Error('数据不存在');
                        }
                        emailNotify.status = info.status;
                        return [4 /*yield*/, emailInfoRepository.save(emailNotify)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'update emailNotifyStatus done'];
                }
            });
        });
    };
    EmailApi.prototype.deleteEmailNotify = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, error_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        queryRunner = connect_1.connect.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 5, 7, 9]);
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .delete()
                                .from(email_notify_entity_1.EmailNotify)
                                .where('id=:id', { id: id })
                                .execute()];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 9];
                    case 5:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 6:
                        _a.sent();
                        throw error_1;
                    case 7: return [4 /*yield*/, queryRunner.release()];
                    case 8:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 9: return [2 /*return*/, 'delete auto step done'];
                }
            });
        });
    };
    return EmailApi;
}());
exports.emailApi = new EmailApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWwuYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL2FwaS9lbWFpbC5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUM7QUFDckMscUVBQTREO0FBRzVEO0lBQUE7SUF3RUEsQ0FBQztJQXZFTSxvQ0FBaUIsR0FBdkIsVUFBd0IsSUFBMkI7Ozs7Ozt3QkFDOUMsbUJBQW1CLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUNBQVcsQ0FBQyxDQUFDO3dCQUN6RSxXQUFXLEdBQUcsSUFBSSxpQ0FBVyxFQUFFLENBQUM7d0JBQ3BDLFdBQVcsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDM0IsV0FBVyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUMzQixXQUFXLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7d0JBQzdCLFdBQVcsQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDbkMsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUM1QixxQkFBTSxtQkFBbUIsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEVBQUE7NEJBQWxELHNCQUFPLFNBQTJDLEVBQUM7Ozs7S0FDbkQ7SUFFSywwQ0FBdUIsR0FBN0I7Ozs7Ozt3QkFDSyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUNBQVcsQ0FBQyxDQUFDO3dCQUNoRSxLQUFLLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRCxLQUFLOzZCQUNILE1BQU0sQ0FBQyxLQUFLLENBQUM7NkJBQ2IsT0FBTyxDQUFDLFNBQVMsQ0FBQyxDQUFDO3dCQUNkLHFCQUFNLEtBQUssQ0FBQyxVQUFVLEVBQUUsRUFBQTs0QkFBL0Isc0JBQU8sU0FBd0IsRUFBQzs7OztLQUNoQztJQUVLLHNDQUFtQixHQUF6QixVQUEwQixHQUFXLEVBQUUsTUFBZTs7Ozs7O3dCQUNqRCxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUNBQVcsQ0FBQyxDQUFDOzZCQUNqRSxDQUFBLE1BQU0sSUFBRSxTQUFTLENBQUEsRUFBakIsd0JBQWlCO3dCQUNaLHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBQyxNQUFNLEVBQUUsQ0FBQyxFQUFBOzRCQUE1RCxzQkFBTyxTQUFxRCxFQUFDOzRCQUV2RCxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLEVBQUE7NEJBQTdDLHNCQUFPLFNBQXNDLEVBQUM7Ozs7S0FDOUM7SUFFSyx3Q0FBcUIsR0FBM0IsVUFBNEIsSUFBMkI7Ozs7Ozt3QkFDbEQsbUJBQW1CLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUNBQVcsQ0FBQyxDQUFDO3dCQUMzRCxxQkFBTSxtQkFBbUIsQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLEVBQUUsSUFBSSxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUE7O3dCQUFoRSxXQUFXLEdBQUcsU0FBa0Q7d0JBQ3BFLElBQUksQ0FBQyxXQUFXLEVBQUU7NEJBQ2pCLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3pCO3dCQUNELFdBQVcsQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDN0IsV0FBVyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO3dCQUNuQyxXQUFXLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7d0JBQ25DLHFCQUFNLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLHNCQUFPLDZCQUE2QixFQUFDOzs7O0tBQ3JDO0lBRUssMENBQXVCLEdBQTdCLFVBQThCLElBQTJCOzs7Ozs7d0JBQ3BELG1CQUFtQixHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLGlDQUFXLENBQUMsQ0FBQzt3QkFDM0QscUJBQU0sbUJBQW1CLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLElBQUksQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBaEUsV0FBVyxHQUFHLFNBQWtEO3dCQUNwRSxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUN6Qjt3QkFDRCxXQUFXLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUM7d0JBQ2pDLHFCQUFNLG1CQUFtQixDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQTNDLFNBQTJDLENBQUM7d0JBQzVDLHNCQUFPLCtCQUErQixFQUFDOzs7O0tBQ3ZDO0lBRUssb0NBQWlCLEdBQXZCLFVBQXdCLEVBQVU7Ozs7Ozt3QkFDN0IsV0FBVyxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDOUQscUJBQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzt3QkFDNUIscUJBQU0sV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDOzs7O3dCQUVwQyxxQkFBTSxXQUFXLENBQUMsT0FBTztpQ0FDeEIsa0JBQWtCLEVBQUU7aUNBQ3BCLE1BQU0sRUFBRTtpQ0FDUixJQUFJLENBQUMsaUNBQVcsQ0FBQztpQ0FDakIsS0FBSyxDQUFDLFFBQVEsRUFBRSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQztpQ0FDM0IsT0FBTyxFQUFFLEVBQUE7O3dCQUxWLFNBS1UsQ0FBQzs7Ozt3QkFFWCxxQkFBTSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUM7d0JBQ3hDLE1BQU0sT0FBSyxDQUFDOzRCQUVaLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7OzRCQUU3QixzQkFBTyx1QkFBdUIsRUFBQzs7OztLQUMvQjtJQUNGLGVBQUM7QUFBRCxDQUFDLEFBeEVELElBd0VDO0FBRVUsUUFBQSxRQUFRLEdBQUcsSUFBSSxRQUFRLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9jb25uZWN0JztcclxuaW1wb3J0IHsgRW1haWxOb3RpZnkgfSBmcm9tICcuLi9lbnRpdHkvZW1haWxfbm90aWZ5LmVudGl0eSc7XHJcbmltcG9ydCB7IEVtYWlsTm90aWZ5Q3JlYXRlSW5mbyB9IGZyb20gJy4uL21vZGVsL2luZm9fbW9kZWwnO1xyXG5cclxuY2xhc3MgRW1haWxBcGkge1xyXG5cdGFzeW5jIGNyZWF0ZUVtYWlsTm90aWZ5KGluZm86IEVtYWlsTm90aWZ5Q3JlYXRlSW5mbykge1xyXG5cdFx0bGV0IGVtYWlsSW5mb1JlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEVtYWlsTm90aWZ5KTtcclxuXHRcdGxldCBlbWFpbE5vdGlmeSA9IG5ldyBFbWFpbE5vdGlmeSgpO1xyXG5cdFx0ZW1haWxOb3RpZnkucGlkID0gaW5mby5waWQ7XHJcblx0XHRlbWFpbE5vdGlmeS51aWQgPSBpbmZvLnVpZDtcclxuXHRcdGVtYWlsTm90aWZ5Lm5hbWUgPSBpbmZvLm5hbWU7XHJcblx0XHRlbWFpbE5vdGlmeS5hZGRyZXNzID0gaW5mby5hZGRyZXNzO1xyXG5cdFx0ZW1haWxOb3RpZnkuc2V0dGluZyA9IGluZm8uc2V0dGluZztcclxuXHRcdHJldHVybiBhd2FpdCBlbWFpbEluZm9SZXBvc2l0b3J5LnNhdmUoZW1haWxOb3RpZnkpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZEVtYWlsTm90aWZ5TmFtZUxpc3QoKXtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShFbWFpbE5vdGlmeSk7XHJcblx0XHRsZXQgcXVlcnkgPSByZXBvc2l0b3J5LmNyZWF0ZVF1ZXJ5QnVpbGRlcignY3AnKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJ2NwKicpXHJcblx0XHRcdC5ncm91cEJ5KCdjcC5uYW1lJyk7XHJcblx0XHRyZXR1cm4gYXdhaXQgcXVlcnkuZ2V0UmF3TWFueSgpO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZEVtYWlsTm90aWZ5TGlzdChwaWQ6IHN0cmluZywgc3RhdHVzPzpib29sZWFuKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoRW1haWxOb3RpZnkpO1xyXG5cdFx0aWYoc3RhdHVzIT11bmRlZmluZWQpe1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgcmVwb3NpdG9yeS5maW5kT25lKHsgcGlkOiBwaWQsIHN0YXR1czpzdGF0dXMgfSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXdhaXQgcmVwb3NpdG9yeS5maW5kT25lKHsgcGlkOiBwaWQgfSk7XHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVFbWFpbE5vdGlmeUluZm8oaW5mbzogRW1haWxOb3RpZnlDcmVhdGVJbmZvKXtcclxuXHRcdGxldCBlbWFpbEluZm9SZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShFbWFpbE5vdGlmeSk7XHJcblx0XHRsZXQgZW1haWxOb3RpZnkgPSBhd2FpdCBlbWFpbEluZm9SZXBvc2l0b3J5LmZpbmRPbmUoeyBpZDogaW5mby5pZCB9KTtcclxuXHRcdGlmICghZW1haWxOb3RpZnkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfmlbDmja7kuI3lrZjlnKgnKTtcclxuXHRcdH1cclxuXHRcdGVtYWlsTm90aWZ5Lm5hbWUgPSBpbmZvLm5hbWU7XHJcblx0XHRlbWFpbE5vdGlmeS5hZGRyZXNzID0gaW5mby5hZGRyZXNzO1xyXG5cdFx0ZW1haWxOb3RpZnkuc2V0dGluZyA9IGluZm8uc2V0dGluZztcclxuXHRcdGF3YWl0IGVtYWlsSW5mb1JlcG9zaXRvcnkuc2F2ZShlbWFpbE5vdGlmeSk7XHJcblx0XHRyZXR1cm4gJ3VwZGF0ZSBlbWFpbE5vdGlmeUluZm8gZG9uZSc7XHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVFbWFpbE5vdGlmeVN0YXR1cyhpbmZvOiBFbWFpbE5vdGlmeUNyZWF0ZUluZm8pe1xyXG5cdFx0bGV0IGVtYWlsSW5mb1JlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEVtYWlsTm90aWZ5KTtcclxuXHRcdGxldCBlbWFpbE5vdGlmeSA9IGF3YWl0IGVtYWlsSW5mb1JlcG9zaXRvcnkuZmluZE9uZSh7IGlkOiBpbmZvLmlkIH0pO1xyXG5cdFx0aWYgKCFlbWFpbE5vdGlmeSkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ+aVsOaNruS4jeWtmOWcqCcpO1xyXG5cdFx0fVxyXG5cdFx0ZW1haWxOb3RpZnkuc3RhdHVzID0gaW5mby5zdGF0dXM7XHJcblx0XHRhd2FpdCBlbWFpbEluZm9SZXBvc2l0b3J5LnNhdmUoZW1haWxOb3RpZnkpO1xyXG5cdFx0cmV0dXJuICd1cGRhdGUgZW1haWxOb3RpZnlTdGF0dXMgZG9uZSc7XHJcblx0fVxyXG5cclxuXHRhc3luYyBkZWxldGVFbWFpbE5vdGlmeShpZDogc3RyaW5nKXtcclxuXHRcdGxldCBxdWVyeVJ1bm5lciA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5zdGFydFRyYW5zYWN0aW9uKCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyXHJcblx0XHRcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxyXG5cdFx0XHQuZGVsZXRlKClcclxuXHRcdFx0LmZyb20oRW1haWxOb3RpZnkpXHJcblx0XHRcdC53aGVyZSgnaWQ9OmlkJywgeyBpZDogaWQgfSlcclxuXHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ2RlbGV0ZSBhdXRvIHN0ZXAgZG9uZSc7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGVtYWlsQXBpID0gbmV3IEVtYWlsQXBpKCk7XHJcbiJdfQ==