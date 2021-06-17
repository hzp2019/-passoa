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
var after_ng_entity_1 = require("../entity/after_ng.entity");
var auto_step_entity_1 = require("../entity/auto_step.entity");
var AfterNgApi = /** @class */ (function () {
    function AfterNgApi() {
    }
    AfterNgApi.prototype.setStep = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, stepId, repository, findret, afterNg, err_1;
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
                        _a.trys.push([3, 10, 12, 14]);
                        repository = connect_1.connect.getConnection().getRepository(after_ng_entity_1.AfterNg);
                        return [4 /*yield*/, repository.findOne({ pid: info.pid })];
                    case 4:
                        findret = _a.sent();
                        if (!!findret) return [3 /*break*/, 6];
                        afterNg = new after_ng_entity_1.AfterNg();
                        afterNg.pid = info.pid;
                        afterNg.uid = info.uid;
                        afterNg.sid = info.sid;
                        return [4 /*yield*/, queryRunner.manager.save(afterNg)];
                    case 5:
                        stepId = _a.sent();
                        return [3 /*break*/, 8];
                    case 6:
                        findret.uid = info.uid;
                        findret.sid = info.sid;
                        return [4 /*yield*/, queryRunner.manager.save(findret)];
                    case 7:
                        stepId = _a.sent();
                        _a.label = 8;
                    case 8: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 14];
                    case 10:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 11:
                        _a.sent();
                        throw err_1;
                    case 12: return [4 /*yield*/, queryRunner.release()];
                    case 13:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 14: return [2 /*return*/, stepId];
                }
            });
        });
    };
    AfterNgApi.prototype.findStep = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(after_ng_entity_1.AfterNg);
                        query = repository.createQueryBuilder('af');
                        query
                            .select(['af.id', 'af.pid', 'af.uid', 'af.sid'])
                            .leftJoinAndMapOne('af.info', auto_step_entity_1.AutoStep, 'as', 'af.sid=as.id')
                            .where('af.pid=:pid', { pid: pid });
                        return [4 /*yield*/, query.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AfterNgApi.prototype.deleteStep = function (id) {
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
                                .from(after_ng_entity_1.AfterNg)
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
                    case 10: return [2 /*return*/, 'delete done'];
                }
            });
        });
    };
    return AfterNgApi;
}());
exports.afterNgApi = new AfterNgApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWZ0ZXJfbmcuYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGRkYmEvc3JjL2FwaS9hZnRlcl9uZy5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUM7QUFDckMsNkRBQW9EO0FBQ3BELCtEQUFzRDtBQUd0RDtJQUFBO0lBNERBLENBQUM7SUEzRE0sNEJBQU8sR0FBYixVQUFjLElBQXVCOzs7Ozs7d0JBQ2hDLFdBQVcsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQzlELHFCQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7d0JBQ3RCLHFCQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FBQzs7Ozt3QkFHdEMsVUFBVSxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLHlCQUFPLENBQUMsQ0FBQzt3QkFDbEQscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQTs7d0JBQXJELE9BQU8sR0FBRyxTQUEyQzs2QkFDdEQsQ0FBQyxPQUFPLEVBQVIsd0JBQVE7d0JBQ04sT0FBTyxHQUFHLElBQUkseUJBQU8sRUFBRSxDQUFDO3dCQUM1QixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ3ZCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzt3QkFDdkIsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNkLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzt3QkFBaEQsTUFBTSxHQUFHLFNBQXVDLENBQUM7Ozt3QkFFakQsT0FBTyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUN2QixPQUFPLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2QscUJBQU0sV0FBVyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7O3dCQUFoRCxNQUFNLEdBQUcsU0FBdUMsQ0FBQzs7NEJBRWxELHFCQUFNLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBckMsU0FBcUMsQ0FBQzs7Ozt3QkFFdEMscUJBQU0sV0FBVyxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O3dCQUF2QyxTQUF1QyxDQUFDO3dCQUN4QyxNQUFNLEtBQUcsQ0FBQzs2QkFFVixxQkFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs2QkFFN0Isc0JBQU8sTUFBTSxFQUFDOzs7O0tBQ2Q7SUFFSyw2QkFBUSxHQUFkLFVBQWUsR0FBVzs7Ozs7O3dCQUNyQixVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMseUJBQU8sQ0FBQyxDQUFDO3dCQUM1RCxLQUFLLEdBQUcsVUFBVSxDQUFDLGtCQUFrQixDQUFDLElBQUksQ0FBQyxDQUFDO3dCQUNoRCxLQUFLOzZCQUNILE1BQU0sQ0FBQyxDQUFFLE9BQU8sRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLFFBQVEsQ0FBQyxDQUFDOzZCQUNoRCxpQkFBaUIsQ0FBQyxTQUFTLEVBQUUsMkJBQVEsRUFBRSxJQUFJLEVBQUUsY0FBYyxDQUFDOzZCQUM1RCxLQUFLLENBQUMsYUFBYSxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7d0JBQzlCLHFCQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQTs0QkFBNUIsc0JBQU8sU0FBcUIsRUFBQzs7OztLQUM3QjtJQUVLLCtCQUFVLEdBQWhCLFVBQWlCLEVBQVU7Ozs7Ozt3QkFDdEIsV0FBVyxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDOUQscUJBQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzt3QkFDNUIscUJBQU0sV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDOzs7O3dCQUVwQyxxQkFBTSxXQUFXLENBQUMsT0FBTztpQ0FDeEIsa0JBQWtCLEVBQUU7aUNBQ3BCLE1BQU0sRUFBRTtpQ0FDUixJQUFJLENBQUMseUJBQU8sQ0FBQztpQ0FDYixLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDO2lDQUMzQixPQUFPLEVBQUUsRUFBQTs7d0JBTFYsU0FLVSxDQUFDO3dCQUNYLHFCQUFNLFdBQVcsQ0FBQyxpQkFBaUIsRUFBRSxFQUFBOzt3QkFBckMsU0FBcUMsQ0FBQzs7Ozt3QkFFdEMscUJBQU0sV0FBVyxDQUFDLG1CQUFtQixFQUFFLEVBQUE7O3dCQUF2QyxTQUF1QyxDQUFDO3dCQUN4QyxNQUFNLE9BQUssQ0FBQzs0QkFFWixxQkFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs2QkFFN0Isc0JBQU8sYUFBYSxFQUFDOzs7O0tBQ3JCO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBNURELElBNERDO0FBRVUsUUFBQSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9jb25uZWN0JztcclxuaW1wb3J0IHsgQWZ0ZXJOZyB9IGZyb20gJy4uL2VudGl0eS9hZnRlcl9uZy5lbnRpdHknO1xyXG5pbXBvcnQgeyBBdXRvU3RlcCB9IGZyb20gJy4uL2VudGl0eS9hdXRvX3N0ZXAuZW50aXR5JztcclxuaW1wb3J0IHsgQWZ0ZXJOZ0NyZWF0ZUluZm8gfSBmcm9tICcuLi9tb2RlbC9pbmZvX21vZGVsJztcclxuXHJcbmNsYXNzIEFmdGVyTmdBcGkge1xyXG5cdGFzeW5jIHNldFN0ZXAoaW5mbzogQWZ0ZXJOZ0NyZWF0ZUluZm8pIHtcclxuXHRcdGxldCBxdWVyeVJ1bm5lciA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcbiAgICAgICAgYXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG4gICAgICAgIGxldCBzdGVwSWQ6YW55O1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEFmdGVyTmcpO1xyXG5cdFx0XHRsZXQgZmluZHJldCA9IGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IHBpZDogaW5mby5waWQgfSk7XHJcblx0XHRcdGlmKCFmaW5kcmV0KXtcclxuXHRcdFx0XHRsZXQgYWZ0ZXJOZyA9IG5ldyBBZnRlck5nKCk7XHJcblx0XHRcdFx0YWZ0ZXJOZy5waWQgPSBpbmZvLnBpZDtcclxuXHRcdFx0XHRhZnRlck5nLnVpZCA9IGluZm8udWlkO1xyXG5cdFx0XHRcdGFmdGVyTmcuc2lkID0gaW5mby5zaWQ7XHJcblx0XHRcdFx0c3RlcElkID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGFmdGVyTmcpO1xyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRmaW5kcmV0LnVpZCA9IGluZm8udWlkO1xyXG5cdFx0XHRcdGZpbmRyZXQuc2lkID0gaW5mby5zaWQ7XHJcblx0XHRcdFx0c3RlcElkID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGZpbmRyZXQpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbW1pdFRyYW5zYWN0aW9uKCk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucm9sbGJhY2tUcmFuc2FjdGlvbigpO1xyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gc3RlcElkO1xyXG5cdH1cclxuXHJcblx0YXN5bmMgZmluZFN0ZXAocGlkOiBzdHJpbmcpIHtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShBZnRlck5nKTtcclxuXHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdhZicpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdChbICdhZi5pZCcsICdhZi5waWQnLCAnYWYudWlkJywgJ2FmLnNpZCddKVxyXG5cdFx0XHQubGVmdEpvaW5BbmRNYXBPbmUoJ2FmLmluZm8nLCBBdXRvU3RlcCwgJ2FzJywgJ2FmLnNpZD1hcy5pZCcpXHJcblx0XHRcdC53aGVyZSgnYWYucGlkPTpwaWQnLCB7IHBpZDogcGlkIH0pO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHF1ZXJ5LmdldE1hbnkoKTtcclxuXHR9XHJcblxyXG5cdGFzeW5jIGRlbGV0ZVN0ZXAoaWQ6IHN0cmluZyl7XHJcblx0XHRsZXQgcXVlcnlSdW5uZXIgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5jcmVhdGVRdWVyeVJ1bm5lcigpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlclxyXG5cdFx0XHQuY3JlYXRlUXVlcnlCdWlsZGVyKClcclxuXHRcdFx0LmRlbGV0ZSgpXHJcblx0XHRcdC5mcm9tKEFmdGVyTmcpXHJcblx0XHRcdC53aGVyZSgnaWQ9OmlkJywgeyBpZDogaWQgfSlcclxuXHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuXHRcdFx0dGhyb3cgZXJyb3I7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ2RlbGV0ZSBkb25lJztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgYWZ0ZXJOZ0FwaSA9IG5ldyBBZnRlck5nQXBpKCk7XHJcbiJdfQ==