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
var user_entity_1 = require("../entity/user.entity");
var EmailApi = /** @class */ (function () {
    function EmailApi() {
    }
    EmailApi.prototype.createEmailNotify = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, uid, newuser, u, emailNotify, err_1;
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
                        _a.trys.push([3, 9, 11, 13]);
                        uid = '';
                        if (!info.uid) return [3 /*break*/, 4];
                        uid = info.uid;
                        return [3 /*break*/, 6];
                    case 4:
                        newuser = new user_entity_1.User();
                        newuser.username = '';
                        newuser.password = '';
                        newuser.name = info.name;
                        newuser.email = info.email;
                        return [4 /*yield*/, queryRunner.manager.save(newuser)];
                    case 5:
                        u = _a.sent();
                        uid = u.id;
                        _a.label = 6;
                    case 6:
                        emailNotify = new email_notify_entity_1.EmailNotify();
                        emailNotify.pid = info.pid;
                        emailNotify.uid = uid;
                        emailNotify.setting = info.setting;
                        return [4 /*yield*/, queryRunner.manager.save(emailNotify)];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 8:
                        _a.sent();
                        return [3 /*break*/, 13];
                    case 9:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 10:
                        _a.sent();
                        throw err_1;
                    case 11: return [4 /*yield*/, queryRunner.release()];
                    case 12:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 13: return [2 /*return*/, 'create emailnotify done'];
                }
            });
        });
    };
    EmailApi.prototype.findEmailNotifyList = function (pid, status) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(email_notify_entity_1.EmailNotify);
                        query = repository.createQueryBuilder('as');
                        if (status != undefined) {
                            query
                                .select(['as.id', 'as.pid', 'as.uid', 'as.setting', 'as.status'])
                                .leftJoinAndMapOne('as.info', user_entity_1.User, 'ur', 'as.uid=ur.id')
                                .where('as.pid=:pid and as.status=:status', { pid: pid, status: status });
                        }
                        else {
                            query
                                .select(['as.id', 'as.pid', 'as.uid', 'as.setting', 'as.status'])
                                .leftJoinAndMapOne('as.info', user_entity_1.User, 'ur', 'as.uid=ur.id')
                                .where('as.pid=:pid', { pid: pid });
                        }
                        return [4 /*yield*/, query.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    EmailApi.prototype.updateEmailNotifyInfo = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, userRepository, user, emailRepository, emailNotify, err_2;
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
                        _a.trys.push([3, 13, 15, 17]);
                        if (!info.uid) return [3 /*break*/, 7];
                        userRepository = connect_1.connect.getConnection().getRepository(user_entity_1.User);
                        return [4 /*yield*/, userRepository.findOne({ id: info.uid })];
                    case 4:
                        user = _a.sent();
                        if (!!user) return [3 /*break*/, 5];
                        throw new Error('用户不存在');
                    case 5:
                        user.email = info.email;
                        return [4 /*yield*/, queryRunner.manager.save(user)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7:
                        emailRepository = connect_1.connect.getConnection().getRepository(email_notify_entity_1.EmailNotify);
                        return [4 /*yield*/, emailRepository.findOne({ id: info.id, pid: info.pid })];
                    case 8:
                        emailNotify = _a.sent();
                        if (!!emailNotify) return [3 /*break*/, 9];
                        throw new Error('数据不存在');
                    case 9:
                        emailNotify.setting = info.setting;
                        return [4 /*yield*/, queryRunner.manager.save(emailNotify)];
                    case 10:
                        _a.sent();
                        _a.label = 11;
                    case 11: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 12:
                        _a.sent();
                        return [3 /*break*/, 17];
                    case 13:
                        err_2 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 14:
                        _a.sent();
                        throw err_2;
                    case 15: return [4 /*yield*/, queryRunner.release()];
                    case 16:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 17: return [2 /*return*/, 'create emailnotify done'];
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
                        _a.trys.push([3, 6, 8, 10]);
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .delete()
                                .from(email_notify_entity_1.EmailNotify)
                                .where('id=:id', { id: id })
                                .execute()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 5:
                        _a.sent();
                        return [3 /*break*/, 10];
                    case 6:
                        error_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 7:
                        _a.sent();
                        throw error_1;
                    case 8: return [4 /*yield*/, queryRunner.release()];
                    case 9:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, 'delete emailNotify done'];
                }
            });
        });
    };
    return EmailApi;
}());
exports.emailApi = new EmailApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW1haWxfbm90aWZ5LmFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9hcGkvZW1haWxfbm90aWZ5LmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxQztBQUNyQyxxRUFBNEQ7QUFDNUQscURBQTZDO0FBRzdDO0lBQUE7SUFrSEEsQ0FBQztJQWpITSxvQ0FBaUIsR0FBdkIsVUFBd0IsSUFBMkI7Ozs7Ozt3QkFDOUMsV0FBVyxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDOUQscUJBQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzt3QkFDNUIscUJBQU0sV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDOzs7O3dCQUVoQyxHQUFHLEdBQUcsRUFBRSxDQUFDOzZCQUNWLElBQUksQ0FBQyxHQUFHLEVBQVIsd0JBQVE7d0JBQ1YsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7Ozt3QkFFWCxPQUFPLEdBQUcsSUFBSSxrQkFBSSxFQUFFLENBQUM7d0JBQ3pCLE9BQU8sQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO3dCQUN0QixPQUFPLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQzt3QkFDdEIsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUN6QixPQUFPLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUM7d0JBQ25CLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBM0MsQ0FBQyxHQUFHLFNBQXVDO3dCQUMvQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs7O3dCQUVSLFdBQVcsR0FBRyxJ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dCB7IGNvbm5lY3QgfSBmcm9tICcuLi9jb25uZWN0JztcclxuaW1wb3J0IHsgRW1haWxOb3RpZnkgfSBmcm9tICcuLi9lbnRpdHkvZW1haWxfbm90aWZ5LmVudGl0eSc7XHJcbmltcG9ydCB7IFVzZXIgfSBmcm9tICcuLi9lbnRpdHkvdXNlci5lbnRpdHknO1xyXG5pbXBvcnQgeyBFbWFpbE5vdGlmeUNyZWF0ZUluZm8gfSBmcm9tICcuLi9tb2RlbC9pbmZvX21vZGVsJztcclxuXHJcbmNsYXNzIEVtYWlsQXBpIHtcclxuXHRhc3luYyBjcmVhdGVFbWFpbE5vdGlmeShpbmZvOiBFbWFpbE5vdGlmeUNyZWF0ZUluZm8pIHtcclxuXHRcdGxldCBxdWVyeVJ1bm5lciA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5zdGFydFRyYW5zYWN0aW9uKCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgdWlkID0gJyc7XHJcblx0XHRcdGlmKGluZm8udWlkKXtcclxuXHRcdFx0XHR1aWQgPSBpbmZvLnVpZDtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRsZXQgbmV3dXNlciA9IG5ldyBVc2VyKCk7XHJcblx0XHRcdFx0bmV3dXNlci51c2VybmFtZSA9ICcnO1xyXG5cdFx0XHRcdG5ld3VzZXIucGFzc3dvcmQgPSAnJztcclxuXHRcdFx0XHRuZXd1c2VyLm5hbWUgPSBpbmZvLm5hbWU7XHJcblx0XHRcdFx0bmV3dXNlci5lbWFpbCA9IGluZm8uZW1haWw7XHJcblx0XHRcdFx0bGV0IHUgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUobmV3dXNlcik7XHJcblx0XHRcdFx0dWlkID0gdS5pZDtcclxuXHRcdFx0fVxyXG5cdFx0XHRsZXQgZW1haWxOb3RpZnkgPSBuZXcgRW1haWxOb3RpZnkoKTtcclxuXHRcdFx0ZW1haWxOb3RpZnkucGlkID0gaW5mby5waWQ7XHJcblx0XHRcdGVtYWlsTm90aWZ5LnVpZCA9IHVpZDtcclxuXHRcdFx0ZW1haWxOb3RpZnkuc2V0dGluZyA9IGluZm8uc2V0dGluZztcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGVtYWlsTm90aWZ5KTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcblx0XHRcdHRocm93IGVycjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJlbGVhc2UoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnY3JlYXRlIGVtYWlsbm90aWZ5IGRvbmUnO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZEVtYWlsTm90aWZ5TGlzdChwaWQ6IHN0cmluZywgc3RhdHVzPzpib29sZWFuKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoRW1haWxOb3RpZnkpO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gcmVwb3NpdG9yeS5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2FzJyk7XHJcblx0XHRpZihzdGF0dXMgIT0gdW5kZWZpbmVkKXtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdChbICdhcy5pZCcsICdhcy5waWQnLCAnYXMudWlkJywgJ2FzLnNldHRpbmcnLCAnYXMuc3RhdHVzJyBdKVxyXG5cdFx0XHQubGVmdEpvaW5BbmRNYXBPbmUoJ2FzLmluZm8nLCBVc2VyLCAndXInLCAnYXMudWlkPXVyLmlkJylcclxuXHRcdFx0LndoZXJlKCdhcy5waWQ9OnBpZCBhbmQgYXMuc3RhdHVzPTpzdGF0dXMnLCB7IHBpZDogcGlkLCBzdGF0dXM6IHN0YXR1cyB9KTtcclxuXHRcdH1lbHNle1xyXG5cdFx0XHRxdWVyeVxyXG5cdFx0XHQuc2VsZWN0KFsgJ2FzLmlkJywgJ2FzLnBpZCcsICdhcy51aWQnLCAnYXMuc2V0dGluZycsICdhcy5zdGF0dXMnIF0pXHJcblx0XHRcdC5sZWZ0Sm9pbkFuZE1hcE9uZSgnYXMuaW5mbycsIFVzZXIsICd1cicsICdhcy51aWQ9dXIuaWQnKVxyXG5cdFx0XHQud2hlcmUoJ2FzLnBpZD06cGlkJywgeyBwaWQ6IHBpZCB9KTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhd2FpdCBxdWVyeS5nZXRNYW55KCk7XHJcblx0fVxyXG5cclxuXHRhc3luYyB1cGRhdGVFbWFpbE5vdGlmeUluZm8oaW5mbzogRW1haWxOb3RpZnlDcmVhdGVJbmZvKXtcclxuXHRcdGxldCBxdWVyeVJ1bm5lciA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5zdGFydFRyYW5zYWN0aW9uKCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRpZihpbmZvLnVpZCl7XHJcblx0XHRcdFx0bGV0IHVzZXJSZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShVc2VyKTtcclxuXHRcdFx0XHRsZXQgdXNlciA9IGF3YWl0IHVzZXJSZXBvc2l0b3J5LmZpbmRPbmUoeyBpZDogaW5mby51aWQgfSk7XHJcblx0XHRcdFx0aWYgKCF1c2VyKSB7XHJcblx0XHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ+eUqOaIt+S4jeWtmOWcqCcpO1xyXG5cdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHR1c2VyLmVtYWlsID0gaW5mby5lbWFpbDtcclxuXHRcdFx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuc2F2ZSh1c2VyKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0bGV0IGVtYWlsUmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoRW1haWxOb3RpZnkpO1xyXG5cdFx0XHRsZXQgZW1haWxOb3RpZnkgPSBhd2FpdCBlbWFpbFJlcG9zaXRvcnkuZmluZE9uZSh7IGlkOiBpbmZvLmlkLCBwaWQ6IGluZm8ucGlkIH0pO1xyXG5cdFx0XHRpZiAoIWVtYWlsTm90aWZ5KSB7XHJcblx0XHRcdFx0dGhyb3cgbmV3IEVycm9yKCfmlbDmja7kuI3lrZjlnKgnKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRlbWFpbE5vdGlmeS5zZXR0aW5nID0gaW5mby5zZXR0aW5nO1xyXG5cdFx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuc2F2ZShlbWFpbE5vdGlmeSk7XHJcblx0XHRcdH1cclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcblx0XHRcdHRocm93IGVycjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJlbGVhc2UoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnY3JlYXRlIGVtYWlsbm90aWZ5IGRvbmUnO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgdXBkYXRlRW1haWxOb3RpZnlTdGF0dXMoaW5mbzogRW1haWxOb3RpZnlDcmVhdGVJbmZvKXtcclxuXHRcdGxldCBlbWFpbEluZm9SZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShFbWFpbE5vdGlmeSk7XHJcblx0XHRsZXQgZW1haWxOb3RpZnkgPSBhd2FpdCBlbWFpbEluZm9SZXBvc2l0b3J5LmZpbmRPbmUoeyBpZDogaW5mby5pZCB9KTtcclxuXHRcdGlmICghZW1haWxOb3RpZnkpIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfmlbDmja7kuI3lrZjlnKgnKTtcclxuXHRcdH1cclxuXHRcdGVtYWlsTm90aWZ5LnN0YXR1cyA9IGluZm8uc3RhdHVzO1xyXG5cdFx0YXdhaXQgZW1haWxJbmZvUmVwb3NpdG9yeS5zYXZlKGVtYWlsTm90aWZ5KTtcclxuXHRcdHJldHVybiAndXBkYXRlIGVtYWlsTm90aWZ5U3RhdHVzIGRvbmUnO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZGVsZXRlRW1haWxOb3RpZnkoaWQ6IHN0cmluZyl7XHJcblx0XHRsZXQgcXVlcnlSdW5uZXIgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5jcmVhdGVRdWVyeVJ1bm5lcigpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlclxyXG5cdFx0XHQuY3JlYXRlUXVlcnlCdWlsZGVyKClcclxuXHRcdFx0LmRlbGV0ZSgpXHJcblx0XHRcdC5mcm9tKEVtYWlsTm90aWZ5KVxyXG5cdFx0XHQud2hlcmUoJ2lkPTppZCcsIHsgaWQ6IGlkIH0pXHJcblx0XHRcdC5leGVjdXRlKCk7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbW1pdFRyYW5zYWN0aW9uKCk7XHJcblx0XHR9IGNhdGNoIChlcnJvcikge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcblx0XHRcdHRocm93IGVycm9yO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucmVsZWFzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICdkZWxldGUgZW1haWxOb3RpZnkgZG9uZSc7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGVtYWlsQXBpID0gbmV3IEVtYWlsQXBpKCk7XHJcbiJdfQ==