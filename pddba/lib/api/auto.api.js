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
var auto_history_entity_1 = require("../entity/auto_history.entity");
var auto_step_entity_1 = require("../entity/auto_step.entity");
var case_history_entity_1 = require("../entity/case_history.entity");
var case_entity_1 = require("../entity/case.entity");
var image_entity_1 = require("../entity/image.entity");
var auto_result_entity_1 = require("../entity/auto_result.entity");
var bson_1 = require("bson");
var AutoApi = /** @class */ (function () {
    function AutoApi() {
    }
    AutoApi.prototype.updateAutoHistory = function (autoHistoryUpdateInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var caseInfoRepository, caseInfo, queryRunner, caseHistoryRepository, caseHistory, autoHistoryRepository, autoHistory, newHistory, err_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caseInfoRepository = connect_1.connect.getConnection().getRepository(case_entity_1.Case);
                        return [4 /*yield*/, caseInfoRepository.findOne({ id: autoHistoryUpdateInfo.cid })];
                    case 1:
                        caseInfo = _a.sent();
                        if (!caseInfo) {
                            throw new Error('用例不存在');
                        }
                        queryRunner = connect_1.connect.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        _a.trys.push([4, 14, 16, 18]);
                        caseInfo.case_type = autoHistoryUpdateInfo.case_type;
                        return [4 /*yield*/, queryRunner.manager.save(caseInfo)];
                    case 5:
                        _a.sent();
                        caseHistoryRepository = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        return [4 /*yield*/, caseHistoryRepository.findOne({ id: autoHistoryUpdateInfo.chid })];
                    case 6:
                        caseHistory = _a.sent();
                        if (!caseHistory) {
                            throw new Error('用例不存在');
                        }
                        caseHistory.case_type = autoHistoryUpdateInfo.case_type;
                        return [4 /*yield*/, queryRunner.manager.save(caseHistory)];
                    case 7:
                        _a.sent();
                        autoHistoryRepository = connect_1.connect.getConnection().getRepository(auto_history_entity_1.AutoHistory);
                        return [4 /*yield*/, autoHistoryRepository.findOne({
                                chid: autoHistoryUpdateInfo.chid
                            })];
                    case 8:
                        autoHistory = _a.sent();
                        if (!!autoHistory) return [3 /*break*/, 10];
                        newHistory = new auto_history_entity_1.AutoHistory();
                        newHistory.pid = autoHistoryUpdateInfo.pid;
                        newHistory.chid = autoHistoryUpdateInfo.chid;
                        newHistory.uid = autoHistoryUpdateInfo.uid;
                        newHistory.run_time = autoHistoryUpdateInfo.runTime;
                        newHistory.steps = autoHistoryUpdateInfo.stepList;
                        return [4 /*yield*/, queryRunner.manager.save(newHistory)];
                    case 9:
                        _a.sent();
                        return [3 /*break*/, 12];
                    case 10:
                        autoHistory.pid = autoHistoryUpdateInfo.pid;
                        autoHistory.uid = autoHistoryUpdateInfo.uid;
                        autoHistory.run_time = autoHistoryUpdateInfo.runTime;
                        autoHistory.steps = autoHistoryUpdateInfo.stepList;
                        return [4 /*yield*/, queryRunner.manager.save(autoHistory)];
                    case 11:
                        _a.sent();
                        _a.label = 12;
                    case 12: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 13:
                        _a.sent();
                        return [3 /*break*/, 18];
                    case 14:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 15:
                        _a.sent();
                        throw err_1;
                    case 16: return [4 /*yield*/, queryRunner.release()];
                    case 17:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 18: return [2 /*return*/, 'update auto_history done'];
                }
            });
        });
    };
    AutoApi.prototype.findOneAutoHistory = function (chid) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_history_entity_1.AutoHistory);
                        query = repository.createQueryBuilder('ah');
                        query
                            .select(['ah.run_time', 'ah.steps'])
                            .leftJoinAndMapOne('ah.case_info', case_history_entity_1.CaseHistory, 'ch', 'ah.chid=ch.id')
                            .where('ah.chid = :chid', { chid: chid });
                        return [4 /*yield*/, query.getOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.createAutoStep = function (autoStepInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var autoStepInfoRepository, newAutoStep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        autoStepInfoRepository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        newAutoStep = new auto_step_entity_1.AutoStep();
                        newAutoStep.pid = autoStepInfo.pid;
                        newAutoStep.parent_id = autoStepInfo.parent_id;
                        newAutoStep.name = autoStepInfo.name;
                        newAutoStep.content = autoStepInfo.content;
                        newAutoStep.uid = autoStepInfo.uid;
                        return [4 /*yield*/, autoStepInfoRepository.save(newAutoStep)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.updateAutoStepById = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var autoStepInfoRepository, step;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        autoStepInfoRepository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        return [4 /*yield*/, autoStepInfoRepository.findOne({ id: info.id })];
                    case 1:
                        step = _a.sent();
                        if (!step) {
                            throw new Error('步骤ID不存在');
                        }
                        step.parent_id = info.parent_id;
                        step.name = info.name;
                        step.uid = info.uid;
                        if (info.content != '') {
                            step.content = info.content;
                        }
                        return [4 /*yield*/, autoStepInfoRepository.save(step)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'update auto step name done'];
                }
            });
        });
    };
    AutoApi.prototype.updateAutoStepContent = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var autoStepInfoRepository, step;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        autoStepInfoRepository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        return [4 /*yield*/, autoStepInfoRepository.findOne({ id: info.id })];
                    case 1:
                        step = _a.sent();
                        if (!step) {
                            throw new Error('步骤ID不存在');
                        }
                        step.content = info.content;
                        return [4 /*yield*/, autoStepInfoRepository.save(step)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'update auto step content done'];
                }
            });
        });
    };
    //
    AutoApi.prototype.findAutoStepByParentId = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        query = repository.createQueryBuilder('as');
                        if (info.parent_id === 'phone') {
                            query
                                .select(['as.id', 'as.parent_id', 'as.name', 'as.fixed_id', 'as.content'])
                                .leftJoinAndMapOne('as.info', image_entity_1.Image, 'img', 'as.id=img.auto_step_id')
                                .where('as.parent_id=:parent_id', { parent_id: info.parent_id })
                                .addOrderBy('as.name', 'ASC');
                        }
                        else {
                            query
                                .select(['as.id', 'as.parent_id', 'as.name', 'as.fixed_id', 'as.content'])
                                .leftJoinAndMapOne('as.info', image_entity_1.Image, 'img', 'as.id=img.auto_step_id')
                                .where('as.pid=:pid and as.parent_id=:parent_id', { pid: info.pid, parent_id: info.parent_id });
                        }
                        return [4 /*yield*/, query.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.fuzzyMatchByName = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        query = repository.createQueryBuilder('as');
                        query.select(['as.id', 'as.parent_id', 'as.name', 'as.fixed_id', 'as.content']).where('as.name like "%' + info.name + '%" and as.parent_id IN ' + query.subQuery().select('af.id').from(auto_step_entity_1.AutoStep, 'af').where('af.pid=:pid and af.parent_id=:parent_id', { pid: info.pid, parent_id: info.parent_id }).getQuery());
                        query.leftJoinAndMapOne('as.info', auto_step_entity_1.AutoStep, 'at', 'as.parent_id=at.id');
                        return [4 /*yield*/, query.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.findAutoStepsByAction = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        query = repository.createQueryBuilder('as');
                        query.select(['as.id', 'as.parent_id', 'as.name', 'as.fixed_id', 'as.content']).where('as.parent_id IN ' + query.subQuery().select('af.id').from(auto_step_entity_1.AutoStep, 'af').where('af.pid=:pid and af.parent_id=:parent_id', { pid: info.pid, parent_id: info.parent_id }).getQuery());
                        query.leftJoinAndMapOne('as.info', auto_step_entity_1.AutoStep, 'at', 'as.parent_id=at.id');
                        return [4 /*yield*/, query.getMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.deleteAutoStepById = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, repository, query, list, i, AutoList, rm_afer, j, step, autoStepRepository, groupAct, i, childAct, j, steps, rm_afer, k, err_2;
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
                        _a.trys.push([3, 21, 23, 25]);
                        repository = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        query = repository
                            .createQueryBuilder('ch')
                            .where('ch.pid=:pid and ch.case_type=1 and ch.case_status=0', { pid: info.pid });
                        query.select(['ch.id']).innerJoinAndMapOne('ch.info', auto_history_entity_1.AutoHistory, 'ah', 'ch.id=ah.chid');
                        return [4 /*yield*/, query.getMany()];
                    case 4:
                        list = _a.sent();
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < list.length)) return [3 /*break*/, 9];
                        AutoList = list[i].info;
                        rm_afer = [];
                        for (j = 0; j < AutoList.steps.length; j++) {
                            step = AutoList.steps[j];
                            if (step.action.id === info.actId) {
                                if (info.parent_id !== '') {
                                    if (step.secondLevel.id !== info.parent_id) {
                                        rm_afer.push(step);
                                    }
                                }
                                else {
                                    if (step.thirdLevel.id !== info.id) {
                                        rm_afer.push(step);
                                    }
                                }
                            }
                            else {
                                rm_afer.push(step);
                            }
                        }
                        if (!(rm_afer.length !== AutoList.steps.length)) return [3 /*break*/, 8];
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .update(auto_history_entity_1.AutoHistory)
                                .set({ steps: rm_afer })
                                .where('id = :id', { id: AutoList.id })
                                .execute()];
                    case 6:
                        _a.sent();
                        if (!(rm_afer.length === 0)) return [3 /*break*/, 8];
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .update(case_history_entity_1.CaseHistory)
                                .set({ case_type: 0 })
                                .where('id = :id', { id: list[i].id })
                                .execute()];
                    case 7:
                        _a.sent();
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 5];
                    case 9:
                        if (!(info.actId !== 'group')) return [3 /*break*/, 17];
                        autoStepRepository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        return [4 /*yield*/, autoStepRepository.find({ pid: info.pid, parent_id: 'group' })];
                    case 10:
                        groupAct = _a.sent();
                        if (!groupAct.length) return [3 /*break*/, 17];
                        i = 0;
                        _a.label = 11;
                    case 11:
                        if (!(i < groupAct.length)) return [3 /*break*/, 17];
                        return [4 /*yield*/, autoStepRepository.find({ pid: info.pid, parent_id: groupAct[i].id })];
                    case 12:
                        childAct = _a.sent();
                        if (!childAct.length) return [3 /*break*/, 16];
                        j = 0;
                        _a.label = 13;
                    case 13:
                        if (!(j < childAct.length)) return [3 /*break*/, 16];
                        steps = childAct[j].content;
                        rm_afer = [];
                        for (k = 0; k < steps.length; k++) {
                            if (steps[k].action.id === info.actId) {
                                if (info.parent_id !== '') {
                                    if (steps[k].secondLevel.id !== info.parent_id) {
                                        rm_afer.push(steps[k]);
                                    }
                                }
                                else {
                                    if (steps[k].thirdLevel.id !== info.id) {
                                        rm_afer.push(steps[k]);
                                    }
                                }
                            }
                            else {
                                rm_afer.push(steps[k]);
                            }
                        }
                        if (!(rm_afer.length !== steps.length)) return [3 /*break*/, 15];
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .update(auto_step_entity_1.AutoStep)
                                .set({ content: rm_afer })
                                .where('id = :id', { id: childAct[j].id })
                                .execute()];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15:
                        j++;
                        return [3 /*break*/, 13];
                    case 16:
                        i++;
                        return [3 /*break*/, 11];
                    case 17: 
                    // 删除步骤
                    return [4 /*yield*/, queryRunner.manager
                            .createQueryBuilder()
                            .delete()
                            .from(auto_step_entity_1.AutoStep)
                            .where('id=:id', { id: info.id })
                            .execute()];
                    case 18:
                        // 删除步骤
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .delete()
                                .from(auto_step_entity_1.AutoStep)
                                .where('parent_id=:parent_id', { parent_id: info.parent_id })
                                .execute()];
                    case 19:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 20:
                        _a.sent();
                        return [3 /*break*/, 25];
                    case 21:
                        err_2 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 22:
                        _a.sent();
                        throw err_2;
                    case 23: return [4 /*yield*/, queryRunner.release()];
                    case 24:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 25: return [2 /*return*/, 'delete auto step done'];
                }
            });
        });
    };
    AutoApi.prototype.createAutoResult = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, autoResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_result_entity_1.AutoResult);
                        autoResult = new auto_result_entity_1.AutoResult();
                        autoResult.chid = info.chid;
                        autoResult.uid = info.uid;
                        autoResult.case_module = info.case_module;
                        autoResult.start_time = info.start_time;
                        autoResult.end_time = info.end_time;
                        autoResult.fail_info = info.fail_info;
                        autoResult.case_info = info.case_info;
                        autoResult.step_info = info.step_info;
                        return [4 /*yield*/, repository.save(autoResult)];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, 'create auto result done'];
                }
            });
        });
    };
    AutoApi.prototype.clearAutoResult = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, connect_1.connect.getConnection().createQueryBuilder().delete().from(auto_result_entity_1.AutoResult).execute()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.findAutoResult = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, first;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_result_entity_1.AutoResult);
                        if (!!info.case_module) return [3 /*break*/, 2];
                        return [4 /*yield*/, repository.findOne()];
                    case 1:
                        first = _a.sent();
                        if (first)
                            info.case_module = first.case_module;
                        else
                            return [2 /*return*/, []];
                        _a.label = 2;
                    case 2: return [4 /*yield*/, repository.find({
                            where: { case_module: info.case_module },
                            skip: info.skip,
                            take: info.take,
                            order: info.order
                        })];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.renameAutoStepByFixedID = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, step, newAutoStep;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        return [4 /*yield*/, repository.findOne({ pid: info.pid, parent_id: info.parent_id, fixed_id: info.fixed_id })];
                    case 1:
                        step = _a.sent();
                        if (!step) return [3 /*break*/, 3];
                        step.name = info.name;
                        step.uid = info.uid;
                        return [4 /*yield*/, repository.save(step)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3:
                        newAutoStep = new auto_step_entity_1.AutoStep();
                        newAutoStep.pid = info.pid;
                        newAutoStep.parent_id = info.parent_id;
                        newAutoStep.name = info.name;
                        newAutoStep.fixed_id = info.fixed_id;
                        newAutoStep.uid = info.uid;
                        return [4 /*yield*/, repository.save(newAutoStep)];
                    case 4: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.findAllAutoStepId = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        query = repository.createQueryBuilder('as');
                        query
                            .select('as.id', 'id')
                            .addSelect('as.name', 'name')
                            .addSelect('as.fixed_id', 'fixed_id')
                            .addSelect('as.content', 'content')
                            .where('as.pid=:pid', { pid: pid });
                        return [4 /*yield*/, query.getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.findOneAutoStepById = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        query = repository.createQueryBuilder('as');
                        query
                            .select('as.id', 'id')
                            .addSelect('as.name', 'name')
                            .addSelect('as.content', 'content')
                            .where('as.id=:id', { id: id });
                        return [4 /*yield*/, query.getRawOne()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.findSignalBindingList = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        query = repository.createQueryBuilder('as');
                        query
                            .select('as.id', 'id')
                            .addSelect('as.content', 'content')
                            .where('as.pid=:pid and as.parent_id="binding_can"', { pid: pid });
                        return [4 /*yield*/, query.getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    AutoApi.prototype.copyAllAutoStepByProjectId = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var imageList, actList, queryRunner, repository, query, QR, list, idcge, group_list, i, cQuery, cQR, qrid, j, front_id, i, gid, j, content, k, oid, oid, aQR, iQR, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        imageList = [];
                        actList = ["click_pic", "assert_pic", "assert_pho", "click_point", "slide", "relay", "speak", "group", "text", "panel_btn", "click_random", "com", "binding_can", "enter_can", "message_can", "after_ng"];
                        queryRunner = connect_1.connect.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _a.trys.push([3, 16, 18, 20]);
                        repository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        query = repository.createQueryBuilder('as');
                        query.select(['as.id', 'as.parent_id', 'as.name', 'as.fixed_id', 'as.content']).where('as.pid=:pid and as.parent_id IN (:...actList)', { pid: info.copy_pid, actList: actList });
                        return [4 /*yield*/, query.getMany()];
                    case 4:
                        QR = _a.sent();
                        list = [];
                        idcge = {};
                        group_list = [];
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < QR.length)) return [3 /*break*/, 8];
                        cQuery = repository.createQueryBuilder('as');
                        cQuery.select(['as.id', 'as.parent_id', 'as.name', 'as.fixed_id', 'as.content']).where('as.pid=:pid and as.parent_id=:parent_id', { pid: info.copy_pid, parent_id: QR[i].id });
                        return [4 /*yield*/, cQuery.getMany()];
                    case 6:
                        cQR = _a.sent();
                        qrid = QR[i].id;
                        QR[i].id = new bson_1.ObjectID().toString();
                        QR[i].pid = info.new_pid;
                        QR[i].uid = info.uid;
                        list.push(QR[i]);
                        idcge[qrid] = QR[i].id;
                        for (j = 0; j < cQR.length; j++) {
                            front_id = cQR[j].id;
                            cQR[j].id = new bson_1.ObjectID().toString();
                            cQR[j].pid = info.new_pid;
                            cQR[j].uid = info.uid;
                            cQR[j].parent_id = QR[i].id;
                            list.push(cQR[j]);
                            idcge[front_id] = cQR[j].id;
                            if (QR[i].parent_id == "click_pic" || QR[i].parent_id == "assert_pic") {
                                imageList.push({ front: front_id, now: cQR[j].id });
                            }
                            else if (QR[i].parent_id == 'group') {
                                group_list.push(cQR[j].id);
                            }
                        }
                        _a.label = 7;
                    case 7:
                        i++;
                        return [3 /*break*/, 5];
                    case 8:
                        for (i = 0; i < group_list.length; i++) {
                            gid = group_list[i];
                            for (j = 0; j < list.length; j++) {
                                if (gid == list[j].id) {
                                    content = list[j].content;
                                    for (k = 0; k < content.length; k++) {
                                        if (content[k].action.id == 'phone') {
                                            break;
                                        }
                                        if (content[k].secondLevel) {
                                            oid = content[k].secondLevel.id;
                                            content[k].secondLevel.id = idcge[oid];
                                        }
                                        if (content[k].thirdLevel) {
                                            oid = content[k].thirdLevel.id;
                                            content[k].thirdLevel.id = idcge[oid];
                                        }
                                    }
                                    list[j].content = content;
                                    break;
                                }
                            }
                        }
                        if (!(list.length > 50)) return [3 /*break*/, 12];
                        aQR = list;
                        _a.label = 9;
                    case 9:
                        if (!(aQR.length > 0)) return [3 /*break*/, 11];
                        iQR = aQR.slice(0, 50);
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(auto_step_entity_1.AutoStep).values(iQR).execute()];
                    case 10:
                        _a.sent();
                        aQR = aQR.slice(50);
                        return [3 /*break*/, 9];
                    case 11: return [3 /*break*/, 14];
                    case 12: return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(auto_step_entity_1.AutoStep).values(list).execute()];
                    case 13:
                        _a.sent();
                        _a.label = 14;
                    case 14: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 15:
                        _a.sent();
                        return [3 /*break*/, 20];
                    case 16:
                        err_3 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 17:
                        _a.sent();
                        throw err_3;
                    case 18: return [4 /*yield*/, queryRunner.release()];
                    case 19:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 20: return [2 /*return*/, imageList];
                }
            });
        });
    };
    return AutoApi;
}());
exports.autoApi = new AutoApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0by5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvYXBpL2F1dG8uYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBQ3JDLHFFQUE0RDtBQUM1RCwrREFBc0Q7QUFDdEQscUVBQTREO0FBQzVELHFEQUE2QztBQUM3Qyx1REFBK0M7QUFZL0MsbUVBQTBEO0FBQzFELDZCQUFnQztBQUVoQztJQUFBO0lBMFlBLENBQUM7SUF6WU0sbUNBQWlCLEdBQXZCLFVBQXdCLHFCQUE0Qzs7Ozs7O3dCQUMvRCxrQkFBa0IsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBSSxDQUFDLENBQUM7d0JBQ3RELHFCQUFNLGtCQUFrQixDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxxQkFBcUIsQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFBOzt3QkFBOUUsUUFBUSxHQUFHLFNBQW1FO3dCQUNsRixJQUFJLENBQUMsUUFBUSxFQUFFOzRCQUNkLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7eUJBQ3pCO3dCQUNHLFdBQVcsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQzlELHFCQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7d0JBQzVCLHFCQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FBQzs7Ozt3QkFFcEMsUUFBUSxDQUFDLFNBQVMsR0FBRyxxQkFBcUIsQ0FBQyxTQUFTLENBQUM7d0JBQ3JELHFCQUFNLFdBQVcsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzt3QkFBeEMsU0FBd0MsQ0FBQzt3QkFFckMscUJBQXFC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Q0FBQzt3QkFDekIsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUNqQixLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzt3QkFDdkIsS0FBUSxDQUFDLEdBQUMsQ0FBQyxFQUFFLENBQUMsR0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFDOzRCQUMxQixRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDekIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsR0FBRyxJQUFJLGVBQVEsRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDOzRCQUN0QyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7NEJBQzFCLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLEdBQUcsQ0FBQzs0QkFDdEIsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDOzRCQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOzRCQUNsQixLQUFLLENBQUMsUUFBUSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQzs0QkFDNUIsSUFBRyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLFdBQVcsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsU0FBUyxJQUFJLFlBQVksRUFBQztnQ0FDcEUsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUUsR0FBRyxFQUFDLEdBQUcsQ0FBQyxDQUFD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O3dCQUN4QyxNQUFNLEtBQUcsQ0FBQzs2QkFFVixxQkFBTSxXQUFXLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUEzQixTQUEyQixDQUFDOzs2QkFFN0Isc0JBQU8sU0FBUyxFQUFDOzs7O0tBQ2pCO0lBQ0YsY0FBQztBQUFELENBQUMsQUExWUQsSUEwWUM7QUFFVSxRQUFBLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4uL2Nvbm5lY3QnO1xyXG5pbXBvcnQgeyBBdXRvSGlzdG9yeSB9IGZyb20gJy4uL2VudGl0eS9hdXRvX2hpc3RvcnkuZW50aXR5JztcclxuaW1wb3J0IHsgQXV0b1N0ZXAgfSBmcm9tICcuLi9lbnRpdHkvYXV0b19zdGVwLmVudGl0eSc7XHJcbmltcG9ydCB7IENhc2VIaXN0b3J5IH0gZnJvbSAnLi4vZW50aXR5L2Nhc2VfaGlzdG9yeS5lbnRpdHknO1xyXG5pbXBvcnQgeyBDYXNlIH0gZnJvbSAnLi4vZW50aXR5L2Nhc2UuZW50aXR5JztcclxuaW1wb3J0IHsgSW1hZ2UgfSBmcm9tICcuLi9lbnRpdHkvaW1hZ2UuZW50aXR5JztcclxuaW1wb3J0IHtcclxuXHRBdXRvSGlzdG9yeVVwZGF0ZUluZm8sXHJcblx0QXV0b1N0ZXBDcmVhdGVJbmZvLFxyXG5cdEF1dG9TdGVwTmFtZVVwZGF0ZUluZm8sXHJcblx0QXV0b1N0ZXBDb250ZW50VXBkYXRlSW5mbyxcclxuXHRBdXRvUmVzdWx0Q3JlYXRlSW5mbyxcclxuXHRSZW5hbWVTdGVwQ3JlYXRlSW5mbyxcclxuXHRSZW1vdmVBdXRvU3RlcEluZm8sXHJcblx0Q29weVByb2plY3RJbmZvXHJcbn0gZnJvbSAnLi4vbW9kZWwvaW5mb19tb2RlbCc7XHJcbmltcG9ydCB7IEF1dG9TdGVwRmluZEJ5UGFyZW50SWREdG8sIEZpbmRBdXRvUmVzdWx0RHRvLCBBdXRvU3RlcEZ1enp5TWF0Y2hEdG8gfSBmcm9tICcuLi9tb2RlbC9xdWVyeV9tb2RlbCc7XHJcbmltcG9ydCB7IEF1dG9SZXN1bHQgfSBmcm9tICcuLi9lbnRpdHkvYXV0b19yZXN1bHQuZW50aXR5JztcclxuaW1wb3J0IHsgT2JqZWN0SUQgfSBmcm9tICdic29uJztcclxuXHJcbmNsYXNzIEF1dG9BcGkge1xyXG5cdGFzeW5jIHVwZGF0ZUF1dG9IaXN0b3J5KGF1dG9IaXN0b3J5VXBkYXRlSW5mbzogQXV0b0hpc3RvcnlVcGRhdGVJbmZvKSB7XHJcblx0XHRsZXQgY2FzZUluZm9SZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShDYXNlKTtcclxuXHRcdGxldCBjYXNlSW5mbyA9IGF3YWl0IGNhc2VJbmZvUmVwb3NpdG9yeS5maW5kT25lKHsgaWQ6IGF1dG9IaXN0b3J5VXBkYXRlSW5mby5jaWQgfSk7XHJcblx0XHRpZiAoIWNhc2VJbmZvKSB7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcign55So5L6L5LiN5a2Y5ZyoJyk7XHJcblx0XHR9XHJcblx0XHRsZXQgcXVlcnlSdW5uZXIgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5jcmVhdGVRdWVyeVJ1bm5lcigpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Y2FzZUluZm8uY2FzZV90eXBlID0gYXV0b0hpc3RvcnlVcGRhdGVJbmZvLmNhc2VfdHlwZTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGNhc2VJbmZvKTtcclxuXHJcblx0XHRcdGxldCBjYXNlSGlzdG9yeVJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhc2VIaXN0b3J5KTtcclxuXHRcdFx0bGV0IGNhc2VIaXN0b3J5ID0gYXdhaXQgY2FzZUhpc3RvcnlSZXBvc2l0b3J5LmZpbmRPbmUoeyBpZDogYXV0b0hpc3RvcnlVcGRhdGVJbmZvLmNoaWQgfSk7XHJcblx0XHRcdGlmICghY2FzZUhpc3RvcnkpIHtcclxuXHRcdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ+eUqOS+i+S4jeWtmOWcqCcpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGNhc2VIaXN0b3J5LmNhc2VfdHlwZSA9IGF1dG9IaXN0b3J5VXBkYXRlSW5mby5jYXNlX3R5cGU7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuc2F2ZShjYXNlSGlzdG9yeSk7XHJcblxyXG5cdFx0XHRsZXQgYXV0b0hpc3RvcnlSZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShBdXRvSGlzdG9yeSk7XHJcblx0XHRcdGxldCBhdXRvSGlzdG9yeSA9IGF3YWl0IGF1dG9IaXN0b3J5UmVwb3NpdG9yeS5maW5kT25lKHtcclxuXHRcdFx0XHRjaGlkOiBhdXRvSGlzdG9yeVVwZGF0ZUluZm8uY2hpZFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKCFhdXRvSGlzdG9yeSkge1xyXG5cdFx0XHRcdGxldCBuZXdIaXN0b3J5ID0gbmV3IEF1dG9IaXN0b3J5KCk7XHJcblx0XHRcdFx0bmV3SGlzdG9yeS5waWQgPSBhdXRvSGlzdG9yeVVwZGF0ZUluZm8ucGlkO1xyXG5cdFx0XHRcdG5ld0hpc3RvcnkuY2hpZCA9IGF1dG9IaXN0b3J5VXBkYXRlSW5mby5jaGlkO1xyXG5cdFx0XHRcdG5ld0hpc3RvcnkudWlkID0gYXV0b0hpc3RvcnlVcGRhdGVJbmZvLnVpZDtcclxuXHRcdFx0XHRuZXdIaXN0b3J5LnJ1bl90aW1lID0gYXV0b0hpc3RvcnlVcGRhdGVJbmZvLnJ1blRpbWU7XHJcblx0XHRcdFx0bmV3SGlzdG9yeS5zdGVwcyA9IGF1dG9IaXN0b3J5VXBkYXRlSW5mby5zdGVwTGlzdDtcclxuXHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUobmV3SGlzdG9yeSk7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0YXV0b0hpc3RvcnkucGlkID0gYXV0b0hpc3RvcnlVcGRhdGVJbmZvLnBpZDtcclxuXHRcdFx0XHRhdXRvSGlzdG9yeS51aWQgPSBhdXRvSGlzdG9yeVVwZGF0ZUluZm8udWlkO1xyXG5cdFx0XHRcdGF1dG9IaXN0b3J5LnJ1bl90aW1lID0gYXV0b0hpc3RvcnlVcGRhdGVJbmZvLnJ1blRpbWU7XHJcblx0XHRcdFx0YXV0b0hpc3Rvcnkuc3RlcHMgPSBhdXRvSGlzdG9yeVVwZGF0ZUluZm8uc3RlcExpc3Q7XHJcblx0XHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGF1dG9IaXN0b3J5KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb21taXRUcmFuc2FjdGlvbigpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucmVsZWFzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICd1cGRhdGUgYXV0b19oaXN0b3J5IGRvbmUnO1xyXG5cdH1cclxuXHRhc3luYyBmaW5kT25lQXV0b0hpc3RvcnkoY2hpZDogc3RyaW5nKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQXV0b0hpc3RvcnkpO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gcmVwb3NpdG9yeS5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2FoJyk7XHJcblx0XHRxdWVyeVxyXG5cdFx0XHQuc2VsZWN0KFsgJ2FoLnJ1bl90aW1lJywgJ2FoLnN0ZXBzJyBdKVxyXG5cdFx0XHQubGVmdEpvaW5BbmRNYXBPbmUoJ2FoLmNhc2VfaW5mbycsIENhc2VIaXN0b3J5LCAnY2gnLCAnYWguY2hpZD1jaC5pZCcpXHJcblx0XHRcdC53aGVyZSgnYWguY2hpZCA9IDpjaGlkJywgeyBjaGlkOiBjaGlkIH0pO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHF1ZXJ5LmdldE9uZSgpO1xyXG5cdH1cclxuXHRhc3luYyBjcmVhdGVBdXRvU3RlcChhdXRvU3RlcEluZm86IEF1dG9TdGVwQ3JlYXRlSW5mbykge1xyXG5cdFx0bGV0IGF1dG9TdGVwSW5mb1JlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdGxldCBuZXdBdXRvU3RlcCA9IG5ldyBBdXRvU3RlcCgpO1xyXG5cdFx0bmV3QXV0b1N0ZXAucGlkID0gYXV0b1N0ZXBJbmZvLnBpZDtcclxuXHRcdG5ld0F1dG9TdGVwLnBhcmVudF9pZCA9IGF1dG9TdGVwSW5mby5wYXJlbnRfaWQ7XHJcblx0XHRuZXdBdXRvU3RlcC5uYW1lID0gYXV0b1N0ZXBJbmZvLm5hbWU7XHJcblx0XHRuZXdBdXRvU3RlcC5jb250ZW50ID0gYXV0b1N0ZXBJbmZvLmNvbnRlbnQ7XHJcblx0XHRuZXdBdXRvU3RlcC51aWQgPSBhdXRvU3RlcEluZm8udWlkO1xyXG5cdFx0cmV0dXJuIGF3YWl0IGF1dG9TdGVwSW5mb1JlcG9zaXRvcnkuc2F2ZShuZXdBdXRvU3RlcCk7XHJcblx0fVxyXG5cdGFzeW5jIHVwZGF0ZUF1dG9TdGVwQnlJZChpbmZvOiBBdXRvU3RlcE5hbWVVcGRhdGVJbmZvKSB7XHJcblx0XHRsZXQgYXV0b1N0ZXBJbmZvUmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQXV0b1N0ZXApO1xyXG5cdFx0bGV0IHN0ZXAgPSBhd2FpdCBhdXRvU3RlcEluZm9SZXBvc2l0b3J5LmZpbmRPbmUoeyBpZDogaW5mby5pZCB9KTtcclxuXHRcdGlmICghc3RlcCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ+atpemqpElE5LiN5a2Y5ZyoJyk7XHJcblx0XHR9XHJcblx0XHRzdGVwLnBhcmVudF9pZCA9IGluZm8ucGFyZW50X2lkO1xyXG5cdFx0c3RlcC5uYW1lID0gaW5mby5uYW1lO1xyXG5cdFx0c3RlcC51aWQgPSBpbmZvLnVpZDtcclxuXHRcdGlmIChpbmZvLmNvbnRlbnQgIT0gJycpIHtcclxuXHRcdFx0c3RlcC5jb250ZW50ID0gaW5mby5jb250ZW50O1xyXG5cdFx0fVxyXG5cdFx0YXdhaXQgYXV0b1N0ZXBJbmZvUmVwb3NpdG9yeS5zYXZlKHN0ZXApO1xyXG5cdFx0cmV0dXJuICd1cGRhdGUgYXV0byBzdGVwIG5hbWUgZG9uZSc7XHJcblx0fVxyXG5cdGFzeW5jIHVwZGF0ZUF1dG9TdGVwQ29udGVudChpbmZvOiBBdXRvU3RlcENvbnRlbnRVcGRhdGVJbmZvKSB7XHJcblx0XHRsZXQgYXV0b1N0ZXBJbmZvUmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQXV0b1N0ZXApO1xyXG5cdFx0bGV0IHN0ZXAgPSBhd2FpdCBhdXRvU3RlcEluZm9SZXBvc2l0b3J5LmZpbmRPbmUoeyBpZDogaW5mby5pZCB9KTtcclxuXHRcdGlmICghc3RlcCkge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ+atpemqpElE5LiN5a2Y5ZyoJyk7XHJcblx0XHR9XHJcblx0XHRzdGVwLmNvbnRlbnQgPSBpbmZvLmNvbnRlbnQ7XHJcblx0XHRhd2FpdCBhdXRvU3RlcEluZm9SZXBvc2l0b3J5LnNhdmUoc3RlcCk7XHJcblx0XHRyZXR1cm4gJ3VwZGF0ZSBhdXRvIHN0ZXAgY29udGVudCBkb25lJztcclxuXHR9XHJcblx0Ly9cclxuXHRhc3luYyBmaW5kQXV0b1N0ZXBCeVBhcmVudElkKGluZm86IEF1dG9TdGVwRmluZEJ5UGFyZW50SWREdG8pIHtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShBdXRvU3RlcCk7XHJcblx0XHRsZXQgcXVlcnkgPSByZXBvc2l0b3J5LmNyZWF0ZVF1ZXJ5QnVpbGRlcignYXMnKTtcclxuXHRcdGlmKGluZm8ucGFyZW50X2lkID09PSAncGhvbmUnKXtcclxuXHRcdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdChbICdhcy5pZCcsICdhcy5wYXJlbnRfaWQnLCAnYXMubmFtZScsICdhcy5maXhlZF9pZCcsICdhcy5jb250ZW50JyBdKVxyXG5cdFx0XHQubGVmdEpvaW5BbmRNYXBPbmUoJ2FzLmluZm8nLCBJbWFnZSwgJ2ltZycsICdhcy5pZD1pbWcuYXV0b19zdGVwX2lkJylcclxuXHRcdFx0LndoZXJlKCdhcy5wYXJlbnRfaWQ9OnBhcmVudF9pZCcsIHsgcGFyZW50X2lkOiBpbmZvLnBhcmVudF9pZCB9KVxyXG5cdFx0XHQuYWRkT3JkZXJCeSgnYXMubmFtZScsJ0FTQycpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoWyAnYXMuaWQnLCAnYXMucGFyZW50X2lkJywgJ2FzLm5hbWUnLCAnYXMuZml4ZWRfaWQnLCAnYXMuY29udGVudCcgXSlcclxuXHRcdFx0LmxlZnRKb2luQW5kTWFwT25lKCdhcy5pbmZvJywgSW1hZ2UsICdpbWcnLCAnYXMuaWQ9aW1nLmF1dG9fc3RlcF9pZCcpXHJcblx0XHRcdC53aGVyZSgnYXMucGlkPTpwaWQgYW5kIGFzLnBhcmVudF9pZD06cGFyZW50X2lkJywgeyBwaWQ6IGluZm8ucGlkLCBwYXJlbnRfaWQ6IGluZm8ucGFyZW50X2lkIH0pO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuIGF3YWl0IHF1ZXJ5LmdldE1hbnkoKTtcclxuXHR9XHJcblx0YXN5bmMgZnV6enlNYXRjaEJ5TmFtZShpbmZvOiBBdXRvU3RlcEZ1enp5TWF0Y2hEdG8pe1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdhcycpO1xyXG5cdFx0cXVlcnkuc2VsZWN0KFsgJ2FzLmlkJywgJ2FzLnBhcmVudF9pZCcsICdhcy5uYW1lJywgJ2FzLmZpeGVkX2lkJywgJ2FzLmNvbnRlbnQnIF0pLndoZXJlKCdhcy5uYW1lIGxpa2UgXCIlJyArIGluZm8ubmFtZSArICclXCIgYW5kIGFzLnBhcmVudF9pZCBJTiAnICsgcXVlcnkuc3ViUXVlcnkoKS5zZWxlY3QoJ2FmLmlkJykuZnJvbShBdXRvU3RlcCwgJ2FmJykud2hlcmUoJ2FmLnBpZD06cGlkIGFuZCBhZi5wYXJlbnRfaWQ9OnBhcmVudF9pZCcse3BpZDogaW5mby5waWQsIHBhcmVudF9pZDogaW5mby5wYXJlbnRfaWR9KS5nZXRRdWVyeSgpKTtcclxuXHRcdHF1ZXJ5LmxlZnRKb2luQW5kTWFwT25lKCdhcy5pbmZvJywgQXV0b1N0ZXAsICdhdCcsICdhcy5wYXJlbnRfaWQ9YXQuaWQnKTtcclxuXHRcdHJldHVybiBhd2FpdCBxdWVyeS5nZXRNYW55KCk7XHJcblx0fVxyXG5cdGFzeW5jIGZpbmRBdXRvU3RlcHNCeUFjdGlvbihpbmZvOiBBdXRvU3RlcEZ1enp5TWF0Y2hEdG8pe1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdhcycpO1xyXG5cdFx0cXVlcnkuc2VsZWN0KFsgJ2FzLmlkJywgJ2FzLnBhcmVudF9pZCcsICdhcy5uYW1lJywgJ2FzLmZpeGVkX2lkJywgJ2FzLmNvbnRlbnQnIF0pLndoZXJlKCdhcy5wYXJlbnRfaWQgSU4gJyArIHF1ZXJ5LnN1YlF1ZXJ5KCkuc2VsZWN0KCdhZi5pZCcpLmZyb20oQXV0b1N0ZXAsICdhZicpLndoZXJlKCdhZi5waWQ9OnBpZCBhbmQgYWYucGFyZW50X2lkPTpwYXJlbnRfaWQnLHtwaWQ6IGluZm8ucGlkLCBwYXJlbnRfaWQ6IGluZm8ucGFyZW50X2lkfSkuZ2V0UXVlcnkoKSk7XHJcblx0XHRxdWVyeS5sZWZ0Sm9pbkFuZE1hcE9uZSgnYXMuaW5mbycsIEF1dG9TdGVwLCAnYXQnLCAnYXMucGFyZW50X2lkPWF0LmlkJyk7XHJcblx0XHRyZXR1cm4gYXdhaXQgcXVlcnkuZ2V0TWFueSgpO1xyXG5cdH1cclxuXHRhc3luYyBkZWxldGVBdXRvU3RlcEJ5SWQoaW5mbzogUmVtb3ZlQXV0b1N0ZXBJbmZvKSB7XHJcblx0XHRsZXQgcXVlcnlSdW5uZXIgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5jcmVhdGVRdWVyeVJ1bm5lcigpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0Ly/liKDpmaTnlKjkvovkuK3nmoTmraXpqqRcclxuXHRcdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhc2VIaXN0b3J5KTtcclxuXHRcdFx0bGV0IHF1ZXJ5ID0gcmVwb3NpdG9yeVxyXG5cdFx0XHRcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2NoJylcclxuXHRcdFx0XHQud2hlcmUoJ2NoLnBpZD06cGlkIGFuZCBjaC5jYXNlX3R5cGU9MSBhbmQgY2guY2FzZV9zdGF0dXM9MCcsIHsgcGlkOiBpbmZvLnBpZCB9KTtcclxuXHRcdFx0cXVlcnkuc2VsZWN0KFsgJ2NoLmlkJyBdKS5pbm5lckpvaW5BbmRNYXBPbmUoJ2NoLmluZm8nLCBBdXRvSGlzdG9yeSwgJ2FoJywgJ2NoLmlkPWFoLmNoaWQnKTtcclxuXHRcdFx0bGV0IGxpc3Q6IGFueSA9IGF3YWl0IHF1ZXJ5LmdldE1hbnkoKTtcclxuXHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcblx0XHRcdFx0bGV0IEF1dG9MaXN0ID0gbGlzdFtpXS5pbmZvO1xyXG5cdFx0XHRcdGxldCBybV9hZmVyID0gW107XHJcblx0XHRcdFx0Zm9yIChsZXQgaiA9IDA7IGogPCBBdXRvTGlzdC5zdGVwcy5sZW5ndGg7IGorKykge1xyXG5cdFx0XHRcdFx0bGV0IHN0ZXAgPSBBdXRvTGlzdC5zdGVwc1tqXTtcclxuXHRcdFx0XHRcdGlmIChzdGVwLmFjdGlvbi5pZCA9PT0gaW5mby5hY3RJZCkge1xyXG5cdFx0XHRcdFx0XHRpZiAoaW5mby5wYXJlbnRfaWQgIT09ICcnKSB7XHJcblx0XHRcdFx0XHRcdFx0aWYgKHN0ZXAuc2Vjb25kTGV2ZWwuaWQgIT09IGluZm8ucGFyZW50X2lkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRybV9hZmVyLnB1c2goc3RlcCk7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdGlmIChzdGVwLnRoaXJkTGV2ZWwuaWQgIT09IGluZm8uaWQpIHtcclxuXHRcdFx0XHRcdFx0XHRcdHJtX2FmZXIucHVzaChzdGVwKTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdHJtX2FmZXIucHVzaChzdGVwKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0aWYgKHJtX2FmZXIubGVuZ3RoICE9PSBBdXRvTGlzdC5zdGVwcy5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXJcclxuXHRcdFx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0XHRcdC51cGRhdGUoQXV0b0hpc3RvcnkpXHJcblx0XHRcdFx0XHRcdC5zZXQoeyBzdGVwczogcm1fYWZlciB9KVxyXG5cdFx0XHRcdFx0XHQud2hlcmUoJ2lkID0gOmlkJywgeyBpZDogQXV0b0xpc3QuaWQgfSlcclxuXHRcdFx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0XHRcdGlmIChybV9hZmVyLmxlbmd0aCA9PT0gMCkge1xyXG5cdFx0XHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyXHJcblx0XHRcdFx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0XHRcdFx0LnVwZGF0ZShDYXNlSGlzdG9yeSlcclxuXHRcdFx0XHRcdFx0XHQuc2V0KHsgY2FzZV90eXBlOiAwIH0pXHJcblx0XHRcdFx0XHRcdFx0LndoZXJlKCdpZCA9IDppZCcsIHsgaWQ6IGxpc3RbaV0uaWQgfSlcclxuXHRcdFx0XHRcdFx0XHQuZXhlY3V0ZSgpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHQvLyDliKDpmaTnu4TlkIjmraXpqqTkuK3nmoTmraXpqqRcclxuXHRcdFx0aWYgKGluZm8uYWN0SWQgIT09ICdncm91cCcpIHtcclxuXHRcdFx0XHRsZXQgYXV0b1N0ZXBSZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShBdXRvU3RlcCk7XHJcblx0XHRcdFx0bGV0IGdyb3VwQWN0ID0gYXdhaXQgYXV0b1N0ZXBSZXBvc2l0b3J5LmZpbmQoeyBwaWQ6IGluZm8ucGlkLCBwYXJlbnRfaWQ6ICdncm91cCcgfSk7XHJcblx0XHRcdFx0aWYgKGdyb3VwQWN0Lmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0Zm9yIChsZXQgaSA9IDA7IGkgPCBncm91cEFjdC5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRsZXQgY2hpbGRBY3QgPSBhd2FpdCBhdXRvU3RlcFJlcG9zaXRvcnkuZmluZCh7IHBpZDogaW5mby5waWQsIHBhcmVudF9pZDogZ3JvdXBBY3RbaV0uaWQgfSk7XHJcblx0XHRcdFx0XHRcdGlmIChjaGlsZEFjdC5sZW5ndGgpIHtcclxuXHRcdFx0XHRcdFx0XHRmb3IgKGxldCBqID0gMDsgaiA8IGNoaWxkQWN0Lmxlbmd0aDsgaisrKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgc3RlcHM6IGFueSA9IGNoaWxkQWN0W2pdLmNvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdFx0XHRsZXQgcm1fYWZlciA9IFtdO1xyXG5cdFx0XHRcdFx0XHRcdFx0Zm9yIChsZXQgayA9IDA7IGsgPCBzdGVwcy5sZW5ndGg7IGsrKykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoc3RlcHNba10uYWN0aW9uLmlkID09PSBpbmZvLmFjdElkKSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKGluZm8ucGFyZW50X2lkICE9PSAnJykge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKHN0ZXBzW2tdLnNlY29uZExldmVsLmlkICE9PSBpbmZvLnBhcmVudF9pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRybV9hZmVyLnB1c2goc3RlcHNba10pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZiAoc3RlcHNba10udGhpcmRMZXZlbC5pZCAhPT0gaW5mby5pZCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRybV9hZmVyLnB1c2goc3RlcHNba10pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRybV9hZmVyLnB1c2goc3RlcHNba10pO1xyXG5cdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRpZiAocm1fYWZlci5sZW5ndGggIT09IHN0ZXBzLmxlbmd0aCkge1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0LnVwZGF0ZShBdXRvU3RlcClcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHQuc2V0KHsgY29udGVudDogcm1fYWZlciB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC53aGVyZSgnaWQgPSA6aWQnLCB7IGlkOiBjaGlsZEFjdFtqXS5pZCB9KVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdC5leGVjdXRlKCk7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9XHJcblx0XHRcdC8vIOWIoOmZpOatpemqpFxyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyXHJcblx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0LmRlbGV0ZSgpXHJcblx0XHRcdFx0LmZyb20oQXV0b1N0ZXApXHJcblx0XHRcdFx0LndoZXJlKCdpZD06aWQnLCB7IGlkOiBpbmZvLmlkIH0pXHJcblx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlclxyXG5cdFx0XHRcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxyXG5cdFx0XHRcdC5kZWxldGUoKVxyXG5cdFx0XHRcdC5mcm9tKEF1dG9TdGVwKVxyXG5cdFx0XHRcdC53aGVyZSgncGFyZW50X2lkPTpwYXJlbnRfaWQnLCB7IHBhcmVudF9pZDogaW5mby5wYXJlbnRfaWQgfSlcclxuXHRcdFx0XHQuZXhlY3V0ZSgpO1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb21taXRUcmFuc2FjdGlvbigpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucmVsZWFzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICdkZWxldGUgYXV0byBzdGVwIGRvbmUnO1xyXG5cdH1cclxuXHRhc3luYyBjcmVhdGVBdXRvUmVzdWx0KGluZm86IEF1dG9SZXN1bHRDcmVhdGVJbmZvKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQXV0b1Jlc3VsdCk7XHJcblx0XHRsZXQgYXV0b1Jlc3VsdCA9IG5ldyBBdXRvUmVzdWx0KCk7XHJcblx0XHRhdXRvUmVzdWx0LmNoaWQgPSBpbmZvLmNoaWQ7XHJcblx0XHRhdXRvUmVzdWx0LnVpZCA9IGluZm8udWlkO1xyXG5cdFx0YXV0b1Jlc3VsdC5jYXNlX21vZHVsZSA9IGluZm8uY2FzZV9tb2R1bGU7XHJcblx0XHRhdXRvUmVzdWx0LnN0YXJ0X3RpbWUgPSBpbmZvLnN0YXJ0X3RpbWU7XHJcblx0XHRhdXRvUmVzdWx0LmVuZF90aW1lID0gaW5mby5lbmRfdGltZTtcclxuXHRcdGF1dG9SZXN1bHQuZmFpbF9pbmZvID0gaW5mby5mYWlsX2luZm87XHJcblx0XHRhdXRvUmVzdWx0LmNhc2VfaW5mbyA9IGluZm8uY2FzZV9pbmZvO1xyXG5cdFx0YXV0b1Jlc3VsdC5zdGVwX2luZm8gPSBpbmZvLnN0ZXBfaW5mbztcclxuXHRcdGF3YWl0IHJlcG9zaXRvcnkuc2F2ZShhdXRvUmVzdWx0KTtcclxuXHRcdHJldHVybiAnY3JlYXRlIGF1dG8gcmVzdWx0IGRvbmUnO1xyXG5cdH1cclxuXHRhc3luYyBjbGVhckF1dG9SZXN1bHQoKSB7XHJcblx0XHRyZXR1cm4gYXdhaXQgY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuY3JlYXRlUXVlcnlCdWlsZGVyKCkuZGVsZXRlKCkuZnJvbShBdXRvUmVzdWx0KS5leGVjdXRlKCk7XHJcblx0fVxyXG5cdGFzeW5jIGZpbmRBdXRvUmVzdWx0KGluZm86IEZpbmRBdXRvUmVzdWx0RHRvKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQXV0b1Jlc3VsdCk7XHJcblx0XHRpZiAoIWluZm8uY2FzZV9tb2R1bGUpIHtcclxuXHRcdFx0bGV0IGZpcnN0ID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kT25lKCk7XHJcblx0XHRcdGlmIChmaXJzdCkgaW5mby5jYXNlX21vZHVsZSA9IGZpcnN0LmNhc2VfbW9kdWxlO1xyXG5cdFx0XHRlbHNlIHJldHVybiBbXTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhd2FpdCByZXBvc2l0b3J5LmZpbmQoe1xyXG5cdFx0XHR3aGVyZTogeyBjYXNlX21vZHVsZTogaW5mby5jYXNlX21vZHVsZSB9LFxyXG5cdFx0XHRza2lwOiBpbmZvLnNraXAsXHJcblx0XHRcdHRha2U6IGluZm8udGFrZSxcclxuXHRcdFx0b3JkZXI6IGluZm8ub3JkZXJcclxuXHRcdH0pO1xyXG5cdH1cclxuXHRhc3luYyByZW5hbWVBdXRvU3RlcEJ5Rml4ZWRJRChpbmZvOiBSZW5hbWVTdGVwQ3JlYXRlSW5mbykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdGxldCBzdGVwID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kT25lKHsgcGlkOiBpbmZvLnBpZCwgcGFyZW50X2lkOiBpbmZvLnBhcmVudF9pZCwgZml4ZWRfaWQ6IGluZm8uZml4ZWRfaWQgfSk7XHJcblx0XHRpZiAoc3RlcCkge1xyXG5cdFx0XHRzdGVwLm5hbWUgPSBpbmZvLm5hbWU7XHJcblx0XHRcdHN0ZXAudWlkID0gaW5mby51aWQ7XHJcblx0XHRcdHJldHVybiBhd2FpdCByZXBvc2l0b3J5LnNhdmUoc3RlcCk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgbmV3QXV0b1N0ZXAgPSBuZXcgQXV0b1N0ZXAoKTtcclxuXHRcdFx0bmV3QXV0b1N0ZXAucGlkID0gaW5mby5waWQ7XHJcblx0XHRcdG5ld0F1dG9TdGVwLnBhcmVudF9pZCA9IGluZm8ucGFyZW50X2lkO1xyXG5cdFx0XHRuZXdBdXRvU3RlcC5uYW1lID0gaW5mby5uYW1lO1xyXG5cdFx0XHRuZXdBdXRvU3RlcC5maXhlZF9pZCA9IGluZm8uZml4ZWRfaWQ7XHJcblx0XHRcdG5ld0F1dG9TdGVwLnVpZCA9IGluZm8udWlkO1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgcmVwb3NpdG9yeS5zYXZlKG5ld0F1dG9TdGVwKTtcclxuXHRcdH1cclxuXHR9XHJcblx0YXN5bmMgZmluZEFsbEF1dG9TdGVwSWQocGlkOiBzdHJpbmcpIHtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShBdXRvU3RlcCk7XHJcblx0XHRsZXQgcXVlcnkgPSByZXBvc2l0b3J5LmNyZWF0ZVF1ZXJ5QnVpbGRlcignYXMnKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5zZWxlY3QoJ2FzLmlkJywgJ2lkJylcclxuXHRcdFx0LmFkZFNlbGVjdCgnYXMubmFtZScsICduYW1lJylcclxuXHRcdFx0LmFkZFNlbGVjdCgnYXMuZml4ZWRfaWQnLCAnZml4ZWRfaWQnKVxyXG5cdFx0XHQuYWRkU2VsZWN0KCdhcy5jb250ZW50JywgJ2NvbnRlbnQnKVxyXG5cdFx0XHQud2hlcmUoJ2FzLnBpZD06cGlkJywgeyBwaWQ6IHBpZCB9KTtcclxuXHRcdHJldHVybiBhd2FpdCBxdWVyeS5nZXRSYXdNYW55KCk7XHJcblx0fVxyXG5cdGFzeW5jIGZpbmRPbmVBdXRvU3RlcEJ5SWQoaWQ6IHN0cmluZykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdhcycpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnYXMuaWQnLCAnaWQnKVxyXG5cdFx0XHQuYWRkU2VsZWN0KCdhcy5uYW1lJywgJ25hbWUnKVxyXG5cdFx0XHQuYWRkU2VsZWN0KCdhcy5jb250ZW50JywgJ2NvbnRlbnQnKVxyXG5cdFx0XHQud2hlcmUoJ2FzLmlkPTppZCcsIHsgaWQ6IGlkIH0pO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHF1ZXJ5LmdldFJhd09uZSgpO1xyXG5cdH1cclxuXHRhc3luYyBmaW5kU2lnbmFsQmluZGluZ0xpc3QocGlkOiBzdHJpbmcpe1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdhcycpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnYXMuaWQnLCAnaWQnKVxyXG5cdFx0XHQuYWRkU2VsZWN0KCdhcy5jb250ZW50JywgJ2NvbnRlbnQnKVxyXG5cdFx0XHQud2hlcmUoJ2FzLnBpZD06cGlkIGFuZCBhcy5wYXJlbnRfaWQ9XCJiaW5kaW5nX2NhblwiJywgeyBwaWQ6IHBpZCB9KTtcclxuXHRcdHJldHVybiBhd2FpdCBxdWVyeS5nZXRSYXdNYW55KCk7XHJcblx0fVxyXG5cdGFzeW5jIGNvcHlBbGxBdXRvU3RlcEJ5UHJvamVjdElkKGluZm86IENvcHlQcm9qZWN0SW5mbyl7XHJcblx0XHRsZXQgaW1hZ2VMaXN0ID0gW107XHJcblx0XHRsZXQgYWN0TGlzdCA9IFtcImNsaWNrX3BpY1wiLFwiYXNzZXJ0X3BpY1wiLFwiYXNzZXJ0X3Bob1wiLFwiY2xpY2tfcG9pbnRcIixcInNsaWRlXCIsXCJyZWxheVwiLFwic3BlYWtcIixcImdyb3VwXCIsXCJ0ZXh0XCIsXCJwYW5lbF9idG5cIixcImNsaWNrX3JhbmRvbVwiLFwiY29tXCIsXCJiaW5kaW5nX2NhblwiLFwiZW50ZXJfY2FuXCIsXCJtZXNzYWdlX2NhblwiLFwiYWZ0ZXJfbmdcIl07XHJcblx0XHRsZXQgcXVlcnlSdW5uZXIgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5jcmVhdGVRdWVyeVJ1bm5lcigpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdFx0bGV0IHF1ZXJ5ID0gcmVwb3NpdG9yeS5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2FzJyk7XHJcblx0XHRcdHF1ZXJ5LnNlbGVjdChbJ2FzLmlkJywnYXMucGFyZW50X2lkJywgJ2FzLm5hbWUnLCAnYXMuZml4ZWRfaWQnLCAnYXMuY29udGVudCddKS53aGVyZSgnYXMucGlkPTpwaWQgYW5kIGFzLnBhcmVudF9pZCBJTiAoOi4uLmFjdExpc3QpJyAsIHtwaWQ6aW5mby5jb3B5X3BpZCwgYWN0TGlzdDphY3RMaXN0fSk7XHRcdFx0XHJcblx0XHRcdGxldCBRUjphbnkgPSBhd2FpdCBxdWVyeS5nZXRNYW55KCk7XHJcblx0XHRcdGxldCBsaXN0ID0gW107XHJcblx0XHRcdGxldCBpZGNnZTphbnkgPSB7fTtcclxuXHRcdFx0bGV0IGdyb3VwX2xpc3QgPSBbXTtcclxuXHRcdFx0Zm9yKGxldCBpPTA7aTxRUi5sZW5ndGg7aSsrKXtcclxuXHRcdFx0XHRsZXQgY1F1ZXJ5ID0gcmVwb3NpdG9yeS5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2FzJyk7XHJcblx0XHRcdFx0Y1F1ZXJ5LnNlbGVjdChbJ2FzLmlkJywnYXMucGFyZW50X2lkJywgJ2FzLm5hbWUnLCAnYXMuZml4ZWRfaWQnLCAnYXMuY29udGVudCddKS53aGVyZSgnYXMucGlkPTpwaWQgYW5kIGFzLnBhcmVudF9pZD06cGFyZW50X2lkJywge3BpZDppbmZvLmNvcHlfcGlkLCBwYXJlbnRfaWQ6UVJbaV0uaWR9KTtcclxuXHRcdFx0XHRsZXQgY1FSID0gYXdhaXQgY1F1ZXJ5LmdldE1hbnkoKTtcclxuXHRcdFx0XHRsZXQgcXJpZCA9IFFSW2ldLmlkO1xyXG5cdFx0XHRcdFFSW2ldLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRRUltpXS5waWQgPSBpbmZvLm5ld19waWQ7XHJcblx0XHRcdFx0UVJbaV0udWlkID0gaW5mby51aWQ7XHJcblx0XHRcdFx0bGlzdC5wdXNoKFFSW2ldKTtcclxuXHRcdFx0XHRpZGNnZVtxcmlkXSA9IFFSW2ldLmlkO1xyXG5cdFx0XHRcdGZvcihsZXQgaj0wOyBqPGNRUi5sZW5ndGg7IGorKyl7XHJcblx0XHRcdFx0XHRsZXQgZnJvbnRfaWQgPSBjUVJbal0uaWQ7XHJcblx0XHRcdFx0XHRjUVJbal0uaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0Y1FSW2pdLnBpZCA9IGluZm8ubmV3X3BpZDtcclxuXHRcdFx0XHRcdGNRUltqXS51aWQgPSBpbmZvLnVpZDtcclxuXHRcdFx0XHRcdGNRUltqXS5wYXJlbnRfaWQgPSBRUltpXS5pZDtcclxuXHRcdFx0XHRcdGxpc3QucHVzaChjUVJbal0pO1xyXG5cdFx0XHRcdFx0aWRjZ2VbZnJvbnRfaWRdID0gY1FSW2pdLmlkO1xyXG5cdFx0XHRcdFx0aWYoUVJbaV0ucGFyZW50X2lkID09IFwiY2xpY2tfcGljXCIgfHwgUVJbaV0ucGFyZW50X2lkID09IFwiYXNzZXJ0X3BpY1wiKXtcclxuXHRcdFx0XHRcdFx0aW1hZ2VMaXN0LnB1c2goe2Zyb250OmZyb250X2lkLCBub3c6Y1FSW2pdLmlkfSk7XHJcblx0XHRcdFx0XHR9ZWxzZSBpZihRUltpXS5wYXJlbnRfaWQgPT0gJ2dyb3VwJyl7XHJcblx0XHRcdFx0XHRcdGdyb3VwX2xpc3QucHVzaChjUVJbal0uaWQpO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRmb3IobGV0IGk9MDtpPGdyb3VwX2xpc3QubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0bGV0IGdpZCA9IGdyb3VwX2xpc3RbaV07XHJcblx0XHRcdFx0Zm9yKGxldCBqPTA7ajxsaXN0Lmxlbmd0aDtqKyspe1xyXG5cdFx0XHRcdFx0aWYoZ2lkID09IGxpc3Rbal0uaWQpe1xyXG5cdFx0XHRcdFx0XHRsZXQgY29udGVudCA9IGxpc3Rbal0uY29udGVudDtcclxuXHRcdFx0XHRcdFx0Zm9yKGxldCBrPTA7azxjb250ZW50Lmxlbmd0aDtrKyspe1xyXG5cdFx0XHRcdFx0XHRcdGlmKGNvbnRlbnRba10uYWN0aW9uLmlkID09ICdwaG9uZScpe1xyXG5cdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHRcdGlmKGNvbnRlbnRba10uc2Vjb25kTGV2ZWwpe1xyXG5cdFx0XHRcdFx0XHRcdFx0bGV0IG9pZCA9IGNvbnRlbnRba10uc2Vjb25kTGV2ZWwuaWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50W2tdLnNlY29uZExldmVsLmlkID0gaWRjZ2Vbb2lkXTtcclxuXHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0aWYoY29udGVudFtrXS50aGlyZExldmVsKXtcclxuXHRcdFx0XHRcdFx0XHRcdGxldCBvaWQgPWNvbnRlbnRba10udGhpcmRMZXZlbC5pZDtcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnRba10udGhpcmRMZXZlbC5pZCA9IGlkY2dlW29pZF07XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdGxpc3Rbal0uY29udGVudCA9IGNvbnRlbnQ7XHJcblx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0XHRpZihsaXN0Lmxlbmd0aCA+IDUwKXtcclxuXHRcdFx0XHRsZXQgYVFSID0gbGlzdDtcclxuXHRcdFx0XHR3aGlsZSAoYVFSLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGxldCBpUVIgPSBhUVIuc2xpY2UoMCw1MCk7XHJcblx0XHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpLmluc2VydCgpLmludG8oQXV0b1N0ZXApLnZhbHVlcyhpUVIpLmV4ZWN1dGUoKTtcclxuXHRcdFx0XHRcdGFRUiA9IGFRUi5zbGljZSg1MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpLmluc2VydCgpLmludG8oQXV0b1N0ZXApLnZhbHVlcyhsaXN0KS5leGVjdXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcblx0XHRcdHRocm93IGVycjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJlbGVhc2UoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBpbWFnZUxpc3Q7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGF1dG9BcGkgPSBuZXcgQXV0b0FwaSgpO1xyXG4iXX0=