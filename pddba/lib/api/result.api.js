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
var local_result_entity_1 = require("../entity/local_result.entity");
var cache_result_entity_1 = require("../entity/cache_result.entity");
var case_history_entity_1 = require("../entity/case_history.entity");
var project_entity_1 = require("../entity/project.entity");
var version_entity_1 = require("../entity/version.entity");
var typeorm_1 = require("typeorm");
var ResultApi = /** @class */ (function () {
    function ResultApi() {
    }
    ResultApi.prototype.create = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, result;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(local_result_entity_1.LocalResult);
                        result = new local_result_entity_1.LocalResult();
                        result.pid = info.pid;
                        result.vid = info.vid;
                        result.chid = info.chid;
                        result.type = info.type;
                        result.queueName = info.queueName;
                        result.case_module = info.case_module;
                        result.result = info.result;
                        result.detail_result = info.detail_result;
                        result.case_info = info.case_info;
                        result.steps_info = info.steps_info;
                        return [4 /*yield*/, repository.save(result)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResultApi.prototype.clearLocalData = function (queueName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connect_1.connect
                            .getConnection()
                            .createQueryBuilder()
                            .delete()
                            .from(local_result_entity_1.LocalResult)
                            .where('queueName = :queueName', { queueName: queueName })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultApi.prototype.findBriefResult = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var localResultRepository, localResult, okCount, ngCount;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        localResultRepository = connect_1.connect.getConnection().getRepository(local_result_entity_1.LocalResult);
                        return [4 /*yield*/, localResultRepository.findOne({
                                queueName: info.queueName,
                                type: info.type
                            })];
                    case 1:
                        localResult = _a.sent();
                        return [4 /*yield*/, localResultRepository.count({
                                queueName: info.queueName,
                                type: info.type,
                                result: 0
                            })];
                    case 2:
                        okCount = _a.sent();
                        return [4 /*yield*/, localResultRepository.count({
                                queueName: info.queueName,
                                type: info.type,
                                result: typeorm_1.MoreThan(0)
                            })];
                    case 3:
                        ngCount = _a.sent();
                        return [2 /*return*/, localResult ? { create_time: localResult.create_date, ok: okCount, ng: ngCount } : null];
                }
            });
        });
    };
    ResultApi.prototype.findModule = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(local_result_entity_1.LocalResult);
                        query = repository.createQueryBuilder('cp');
                        query
                            .select('cp.case_module', 'case_module')
                            .where('cp.queueName=:queueName and cp.type=:type', {
                            queueName: info.queueName,
                            type: info.type
                        })
                            .groupBy('cp.case_module');
                        return [4 /*yield*/, query.getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ResultApi.prototype.findByModule = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query, _a, key, element;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(local_result_entity_1.LocalResult);
                        query = repository.createQueryBuilder('lr');
                        query
                            .where('lr.queueName=:queueName and lr.type=:type', { queueName: dto.queueName, type: dto.type })
                            .andWhere('lr.case_module=:case_module', { case_module: dto.case_module });
                        if (!dto.isCount) return [3 /*break*/, 2];
                        _a = {
                            queueName: dto.queueName
                        };
                        return [4 /*yield*/, query.getCount()];
                    case 1: return [2 /*return*/, (_a.count = _b.sent(),
                            _a)];
                    case 2:
                        if (dto.order) {
                            for (key in dto.order) {
                                if (dto.order.hasOwnProperty(key)) {
                                    element = dto.order[key];
                                    if (typeof element == 'number')
                                        element = element == 1 ? 'ASC' : 'DESC';
                                    query.addOrderBy("lr." + key, element);
                                }
                            }
                        }
                        if (dto.skip) {
                            query.skip(dto.skip);
                        }
                        if (dto.take) {
                            query.take(dto.take);
                        }
                        return [4 /*yield*/, query.getMany()];
                    case 3: return [2 /*return*/, _b.sent()];
                }
            });
        });
    };
    ResultApi.prototype.startCacheResult = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var cacheRepository, cache_info, queryRunner, cacheData, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        cacheRepository = connect_1.connect.getConnection().getRepository(cache_result_entity_1.CacheResult);
                        return [4 /*yield*/, cacheRepository.findOne({ pid: info.pid, queueName: info.queueName })];
                    case 1:
                        cache_info = _a.sent();
                        queryRunner = connect_1.connect.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 7, 9, 11]);
                        cacheData = cache_info ? cache_info : new cache_result_entity_1.CacheResult();
                        cacheData.pid = info.pid;
                        cacheData.vid = info.vid;
                        cacheData.uid = info.uid;
                        cacheData.chid = info.chid;
                        cacheData.type = info.type;
                        cacheData.queueName = info.queueName;
                        cacheData.test_info = info.test_info;
                        return [4 /*yield*/, queryRunner.manager.save(cacheData)];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 8:
                        _a.sent();
                        throw err_1;
                    case 9: return [4 /*yield*/, queryRunner.release()];
                    case 10:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, 'cache done'];
                }
            });
        });
    };
    ResultApi.prototype.clearCacheResult = function (queueName) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connect_1.connect
                            .getConnection()
                            .createQueryBuilder()
                            .delete()
                            .from(cache_result_entity_1.CacheResult)
                            .where('queueName = :queueName', { queueName: queueName })
                            .execute()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    ResultApi.prototype.findCacheResultByQueueName = function (queueName) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(cache_result_entity_1.CacheResult);
                        query = repository.createQueryBuilder('ah');
                        query
                            .select(['ah.test_info', 'ah.update_date'])
                            .leftJoinAndMapOne('ah.case_info', case_history_entity_1.CaseHistory, 'ch', 'ah.chid=ch.id')
                            .leftJoinAndMapOne('ah.project_info', project_entity_1.Project, 'prj', 'ah.pid=prj.id')
                            .leftJoinAndMapOne('ah.version_info', version_entity_1.Version, 'ver', 'ah.vid=ver.id')
                            .where('ah.queueName = :queueName', { queueName: queueName });
                        return [4 /*yield*/, query.getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ResultApi;
}());
exports.resultApi = new ResultApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzdWx0LmFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9hcGkvcmVzdWx0LmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxQztBQUNyQyxxRUFBNEQ7QUFDNUQscUVBQTREO0FBQzVELHFFQUE0RDtBQUM1RCwyREFBbUQ7QUFDbkQsMkRBQW1EO0FBR25ELG1DQUFtQztBQUVuQztJQUFBO0lBaUlBLENBQUM7SUFoSU0sMEJBQU0sR0FBWixVQUFhLElBQTJCOzs7Ozs7d0JBQ25DLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxpQ0FBVyxDQUFDLENBQUM7d0JBQ2hFLE1BQU0sR0FBRyxJQUFJLGlDQUFXLEVBQUUsQ0FBQzt3QkFDL0IsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ3RCLE1BQU0sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQzt3QkFDeEIsTUFBTSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUN4QixNQUFNLENBQUMsU0FBUyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUM7d0JBQ2xDLE1BQU0sQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDdEMsTUFBTSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO3dCQUM1QixNQUFNLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7d0JBQzFDLE1BQU0sQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQzt3QkFDbEMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDO3dCQUM3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U0FBUyxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi4vY29ubmVjdCc7XHJcbmltcG9ydCB7IExvY2FsUmVzdWx0IH0gZnJvbSAnLi4vZW50aXR5L2xvY2FsX3Jlc3VsdC5lbnRpdHknO1xyXG5pbXBvcnQgeyBDYWNoZVJlc3VsdCB9IGZyb20gJy4uL2VudGl0eS9jYWNoZV9yZXN1bHQuZW50aXR5JztcclxuaW1wb3J0IHsgQ2FzZUhpc3RvcnkgfSBmcm9tICcuLi9lbnRpdHkvY2FzZV9oaXN0b3J5LmVudGl0eSc7XHJcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi9lbnRpdHkvcHJvamVjdC5lbnRpdHknO1xyXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnLi4vZW50aXR5L3ZlcnNpb24uZW50aXR5JztcclxuaW1wb3J0IHsgTG9jYWxSZXN1bHRDcmVhdGVJbmZvLFN0YXJ0Q2FjaGVSZXN1bHRJbmZvIH0gZnJvbSAnLi4vbW9kZWwvaW5mb19tb2RlbCc7XHJcbmltcG9ydCB7IEZpbmRCcmllZlJlc3VsdER0bywgUmVzdWx0RmluZEJ5TW9kdWxlRHRvIH0gZnJvbSAnLi4vbW9kZWwvcXVlcnlfbW9kZWwnO1xyXG5pbXBvcnQgeyBNb3JlVGhhbiB9IGZyb20gJ3R5cGVvcm0nO1xyXG5cclxuY2xhc3MgUmVzdWx0QXBpIHtcclxuXHRhc3luYyBjcmVhdGUoaW5mbzogTG9jYWxSZXN1bHRDcmVhdGVJbmZvKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoTG9jYWxSZXN1bHQpO1xyXG5cdFx0bGV0IHJlc3VsdCA9IG5ldyBMb2NhbFJlc3VsdCgpO1xyXG5cdFx0cmVzdWx0LnBpZCA9IGluZm8ucGlkO1xyXG5cdFx0cmVzdWx0LnZpZCA9IGluZm8udmlkO1xyXG5cdFx0cmVzdWx0LmNoaWQgPSBpbmZvLmNoaWQ7XHJcblx0XHRyZXN1bHQudHlwZSA9IGluZm8udHlwZTtcclxuXHRcdHJlc3VsdC5xdWV1ZU5hbWUgPSBpbmZvLnF1ZXVlTmFtZTtcclxuXHRcdHJlc3VsdC5jYXNlX21vZHVsZSA9IGluZm8uY2FzZV9tb2R1bGU7XHJcblx0XHRyZXN1bHQucmVzdWx0ID0gaW5mby5yZXN1bHQ7XHJcblx0XHRyZXN1bHQuZGV0YWlsX3Jlc3VsdCA9IGluZm8uZGV0YWlsX3Jlc3VsdDtcclxuXHRcdHJlc3VsdC5jYXNlX2luZm8gPSBpbmZvLmNhc2VfaW5mbztcclxuXHRcdHJlc3VsdC5zdGVwc19pbmZvID0gaW5mby5zdGVwc19pbmZvO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuc2F2ZShyZXN1bHQpO1xyXG5cdH1cclxuXHRhc3luYyBjbGVhckxvY2FsRGF0YShxdWV1ZU5hbWU6IHN0cmluZykge1xyXG5cdFx0YXdhaXQgY29ubmVjdFxyXG5cdFx0XHQuZ2V0Q29ubmVjdGlvbigpXHJcblx0XHRcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxyXG5cdFx0XHQuZGVsZXRlKClcclxuXHRcdFx0LmZyb20oTG9jYWxSZXN1bHQpXHJcblx0XHRcdC53aGVyZSgncXVldWVOYW1lID0gOnF1ZXVlTmFtZScsIHsgcXVldWVOYW1lOiBxdWV1ZU5hbWUgfSlcclxuXHRcdFx0LmV4ZWN1dGUoKTtcclxuXHR9XHJcblx0YXN5bmMgZmluZEJyaWVmUmVzdWx0KGluZm86IEZpbmRCcmllZlJlc3VsdER0bykge1xyXG5cdFx0bGV0IGxvY2FsUmVzdWx0UmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoTG9jYWxSZXN1bHQpO1xyXG5cdFx0bGV0IGxvY2FsUmVzdWx0ID0gYXdhaXQgbG9jYWxSZXN1bHRSZXBvc2l0b3J5LmZpbmRPbmUoe1xyXG5cdFx0XHRxdWV1ZU5hbWU6IGluZm8ucXVldWVOYW1lLFxyXG5cdFx0XHR0eXBlOiBpbmZvLnR5cGVcclxuXHRcdH0pO1xyXG5cdFx0bGV0IG9rQ291bnQgPSBhd2FpdCBsb2NhbFJlc3VsdFJlcG9zaXRvcnkuY291bnQoe1xyXG5cdFx0XHRxdWV1ZU5hbWU6IGluZm8ucXVldWVOYW1lLFxyXG5cdFx0XHR0eXBlOiBpbmZvLnR5cGUsXHJcblx0XHRcdHJlc3VsdDogMFxyXG5cdFx0fSk7XHJcblx0XHRsZXQgbmdDb3VudCA9IGF3YWl0IGxvY2FsUmVzdWx0UmVwb3NpdG9yeS5jb3VudCh7XHJcblx0XHRcdHF1ZXVlTmFtZTogaW5mby5xdWV1ZU5hbWUsXHJcblx0XHRcdHR5cGU6IGluZm8udHlwZSxcclxuXHRcdFx0cmVzdWx0OiBNb3JlVGhhbigwKVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gbG9jYWxSZXN1bHQgPyB7IGNyZWF0ZV90aW1lOiBsb2NhbFJlc3VsdC5jcmVhdGVfZGF0ZSwgb2s6IG9rQ291bnQsIG5nOiBuZ0NvdW50IH0gOiBudWxsO1xyXG5cdH1cclxuXHRhc3luYyBmaW5kTW9kdWxlKGluZm86IEZpbmRCcmllZlJlc3VsdER0bykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KExvY2FsUmVzdWx0KTtcclxuXHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdjcCcpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnY3AuY2FzZV9tb2R1bGUnLCAnY2FzZV9tb2R1bGUnKVxyXG5cdFx0XHQud2hlcmUoJ2NwLnF1ZXVlTmFtZT06cXVldWVOYW1lIGFuZCBjcC50eXBlPTp0eXBlJywge1xyXG5cdFx0XHRcdHF1ZXVlTmFtZTogaW5mby5xdWV1ZU5hbWUsXHJcblx0XHRcdFx0dHlwZTogaW5mby50eXBlXHJcblx0XHRcdH0pXHJcblx0XHRcdC5ncm91cEJ5KCdjcC5jYXNlX21vZHVsZScpO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHF1ZXJ5LmdldFJhd01hbnkoKTtcclxuXHR9XHJcblx0YXN5bmMgZmluZEJ5TW9kdWxlKGR0bzogUmVzdWx0RmluZEJ5TW9kdWxlRHRvKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoTG9jYWxSZXN1bHQpO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gcmVwb3NpdG9yeS5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2xyJyk7XHJcblx0XHRxdWVyeVxyXG5cdFx0XHQud2hlcmUoJ2xyLnF1ZXVlTmFtZT06cXVldWVOYW1lIGFuZCBsci50eXBlPTp0eXBlJywgeyBxdWV1ZU5hbWU6IGR0by5xdWV1ZU5hbWUsIHR5cGU6IGR0by50eXBlIH0pXHJcblx0XHRcdC5hbmRXaGVyZSgnbHIuY2FzZV9tb2R1bGU9OmNhc2VfbW9kdWxlJywgeyBjYXNlX21vZHVsZTogZHRvLmNhc2VfbW9kdWxlIH0pO1xyXG5cdFx0aWYgKGR0by5pc0NvdW50KSB7XHJcblx0XHRcdHJldHVybiB7XHJcblx0XHRcdFx0cXVldWVOYW1lOiBkdG8ucXVldWVOYW1lLFxyXG5cdFx0XHRcdGNvdW50OiBhd2FpdCBxdWVyeS5nZXRDb3VudCgpXHJcblx0XHRcdH07XHJcblx0XHR9XHJcblx0XHRpZiAoZHRvLm9yZGVyKSB7XHJcblx0XHRcdGZvciAoY29uc3Qga2V5IGluIGR0by5vcmRlcikge1xyXG5cdFx0XHRcdGlmIChkdG8ub3JkZXIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xyXG5cdFx0XHRcdFx0bGV0IGVsZW1lbnQgPSBkdG8ub3JkZXJba2V5XTtcclxuXHRcdFx0XHRcdGlmICh0eXBlb2YgZWxlbWVudCA9PSAnbnVtYmVyJykgZWxlbWVudCA9IGVsZW1lbnQgPT0gMSA/ICdBU0MnIDogJ0RFU0MnO1xyXG5cdFx0XHRcdFx0cXVlcnkuYWRkT3JkZXJCeShgbHIuJHtrZXl9YCwgZWxlbWVudCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHR9XHJcblx0XHRpZiAoZHRvLnNraXApIHtcclxuXHRcdFx0cXVlcnkuc2tpcChkdG8uc2tpcCk7XHJcblx0XHR9XHJcblx0XHRpZiAoZHRvLnRha2UpIHtcclxuXHRcdFx0cXVlcnkudGFrZShkdG8udGFrZSk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gYXdhaXQgcXVlcnkuZ2V0TWFueSgpO1xyXG5cdH1cclxuXHRhc3luYyBzdGFydENhY2hlUmVzdWx0KGluZm86IFN0YXJ0Q2FjaGVSZXN1bHRJbmZvKXtcclxuXHRcdGxldCBjYWNoZVJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhY2hlUmVzdWx0KTtcclxuXHRcdGxldCBjYWNoZV9pbmZvID0gYXdhaXQgY2FjaGVSZXBvc2l0b3J5LmZpbmRPbmUoeyBwaWQ6IGluZm8ucGlkLCBxdWV1ZU5hbWU6IGluZm8ucXVldWVOYW1lIH0pO1xyXG5cdFx0bGV0IHF1ZXJ5UnVubmVyID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuY3JlYXRlUXVlcnlSdW5uZXIoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbm5lY3QoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBjYWNoZURhdGE6YW55ID0gY2FjaGVfaW5mbz8gY2FjaGVfaW5mbyA6IG5ldyBDYWNoZVJlc3VsdCgpO1xyXG5cdFx0XHRjYWNoZURhdGEucGlkID0gaW5mby5waWQ7XHJcblx0XHRcdGNhY2hlRGF0YS52aWQgPSBpbmZvLnZpZDtcclxuXHRcdFx0Y2FjaGVEYXRhLnVpZCA9IGluZm8udWlkO1xyXG5cdFx0XHRjYWNoZURhdGEuY2hpZCA9IGluZm8uY2hpZDtcclxuXHRcdFx0Y2FjaGVEYXRhLnR5cGUgPSBpbmZvLnR5cGU7XHJcblx0XHRcdGNhY2hlRGF0YS5xdWV1ZU5hbWUgPSBpbmZvLnF1ZXVlTmFtZTtcclxuXHRcdFx0Y2FjaGVEYXRhLnRlc3RfaW5mbyA9IGluZm8udGVzdF9pbmZvO1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUoY2FjaGVEYXRhKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuXHRcdH1jYXRjaCAoZXJyKSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucmVsZWFzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICdjYWNoZSBkb25lJztcclxuXHR9XHJcblx0YXN5bmMgY2xlYXJDYWNoZVJlc3VsdChxdWV1ZU5hbWU6IHN0cmluZyl7XHJcblx0XHRhd2FpdCBjb25uZWN0XHJcblx0XHRcdC5nZXRDb25uZWN0aW9uKClcclxuXHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdC5kZWxldGUoKVxyXG5cdFx0XHQuZnJvbShDYWNoZVJlc3VsdClcclxuXHRcdFx0LndoZXJlKCdxdWV1ZU5hbWUgPSA6cXVldWVOYW1lJywgeyBxdWV1ZU5hbWU6IHF1ZXVlTmFtZSB9KVxyXG5cdFx0XHQuZXhlY3V0ZSgpO1xyXG5cdH1cclxuXHRhc3luYyBmaW5kQ2FjaGVSZXN1bHRCeVF1ZXVlTmFtZShxdWV1ZU5hbWU6IHN0cmluZyl7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQ2FjaGVSZXN1bHQpO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gcmVwb3NpdG9yeS5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2FoJyk7XHJcblx0XHRxdWVyeVxyXG5cdFx0XHQuc2VsZWN0KFsnYWgudGVzdF9pbmZvJywgJ2FoLnVwZGF0ZV9kYXRlJ10pXHJcblx0XHRcdC5sZWZ0Sm9pbkFuZE1hcE9uZSgnYWguY2FzZV9pbmZvJywgQ2FzZUhpc3RvcnksICdjaCcsICdhaC5jaGlkPWNoLmlkJylcclxuXHRcdFx0LmxlZnRKb2luQW5kTWFwT25lKCdhaC5wcm9qZWN0X2luZm8nLCBQcm9qZWN0LCAncHJqJywgJ2FoLnBpZD1wcmouaWQnKVxyXG5cdFx0XHQubGVmdEpvaW5BbmRNYXBPbmUoJ2FoLnZlcnNpb25faW5mbycsIFZlcnNpb24sICd2ZXInLCAnYWgudmlkPXZlci5pZCcpXHJcblx0XHRcdC53aGVyZSgnYWgucXVldWVOYW1lID0gOnF1ZXVlTmFtZScsIHsgcXVldWVOYW1lOiBxdWV1ZU5hbWUgfSk7XHJcblx0XHRyZXR1cm4gYXdhaXQgcXVlcnkuZ2V0T25lKCk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbGV0IHJlc3VsdEFwaSA9IG5ldyBSZXN1bHRBcGkoKTtcclxuIl19