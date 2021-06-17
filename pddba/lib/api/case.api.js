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
var case_entity_1 = require("../entity/case.entity");
var case_history_entity_1 = require("../entity/case_history.entity");
var case_result_entity_1 = require("../entity/case_result.entity");
var auto_history_entity_1 = require("../entity/auto_history.entity");
var auto_step_entity_1 = require("../entity/auto_step.entity");
var bson_1 = require("bson");
var CaseApi = /** @class */ (function () {
    function CaseApi() {
    }
    CaseApi.prototype.createCase = function (caseInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, newCase, saveCase, newCaseHistory, caseHistory, newAutoHistory, err_1;
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
                        newCase = new case_entity_1.Case();
                        newCase.pid = caseInfo.pid;
                        newCase.vid = caseInfo.vid;
                        newCase.uid = caseInfo.uid;
                        newCase.dam_num = caseInfo.dam_num;
                        newCase.dam_name = caseInfo.dam_name;
                        newCase.case_id = caseInfo.case_id;
                        newCase.case_name = caseInfo.case_name;
                        newCase.case_level = caseInfo.case_level;
                        newCase.case_module = caseInfo.case_module;
                        newCase.case_pre = caseInfo.case_pre;
                        newCase.case_op = caseInfo.case_op;
                        newCase.case_exp = caseInfo.case_exp;
                        newCase.case_note = caseInfo.case_note;
                        newCase.case_type = caseInfo.case_type;
                        newCase.case_status = 0;
                        return [4 /*yield*/, queryRunner.manager.save(newCase)];
                    case 4:
                        saveCase = _a.sent();
                        newCaseHistory = new case_history_entity_1.CaseHistory();
                        newCaseHistory.pid = caseInfo.pid;
                        newCaseHistory.vid = caseInfo.vid;
                        newCaseHistory.cid = saveCase.id;
                        newCaseHistory.uid = caseInfo.uid;
                        newCaseHistory.dam_num = caseInfo.dam_num;
                        newCaseHistory.dam_name = caseInfo.dam_name;
                        newCaseHistory.case_id = caseInfo.case_id;
                        newCaseHistory.case_name = caseInfo.case_name;
                        newCaseHistory.case_level = caseInfo.case_level;
                        newCaseHistory.case_module = caseInfo.case_module;
                        newCaseHistory.case_pre = caseInfo.case_pre;
                        newCaseHistory.case_op = caseInfo.case_op;
                        newCaseHistory.case_exp = caseInfo.case_exp;
                        newCaseHistory.case_note = caseInfo.case_note;
                        newCaseHistory.case_type = caseInfo.case_type;
                        newCaseHistory.case_status = 0;
                        return [4 /*yield*/, queryRunner.manager.save(newCaseHistory)];
                    case 5:
                        caseHistory = _a.sent();
                        if (!caseInfo.case_type) return [3 /*break*/, 7];
                        newAutoHistory = new auto_history_entity_1.AutoHistory();
                        newAutoHistory.pid = caseInfo.pid;
                        newAutoHistory.chid = caseHistory.id;
                        newAutoHistory.uid = caseInfo.uid;
                        newAutoHistory.run_time = caseInfo.runTime;
                        newAutoHistory.steps = caseInfo.stepList;
                        return [4 /*yield*/, queryRunner.manager.save(newAutoHistory)];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [4 /*yield*/, queryRunner.commitTransaction()];
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
                    case 13: return [2 /*return*/, 'create case done'];
                }
            });
        });
    };
    CaseApi.prototype.copyCase = function (copyInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var caseInfoRepository, caseInfo, csret, newCase;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caseInfoRepository = connect_1.connect.getConnection().getRepository(case_entity_1.Case);
                        return [4 /*yield*/, caseInfoRepository.findOne({ pid: copyInfo.pid, case_id: copyInfo.case_id })];
                    case 1:
                        caseInfo = _a.sent();
                        if (!caseInfo) return [3 /*break*/, 2];
                        throw new Error('用例ID已存在');
                    case 2: return [4 /*yield*/, this.copySteps(copyInfo)];
                    case 3:
                        csret = _a.sent();
                        if (!csret) return [3 /*break*/, 5];
                        return [4 /*yield*/, this.createCase(copyInfo)];
                    case 4:
                        newCase = _a.sent();
                        if (newCase) {
                            return [2 /*return*/, csret];
                        }
                        return [2 /*return*/, new Error('复制用例失败')];
                    case 5: return [2 /*return*/, new Error('复制自动化步骤失败')];
                }
            });
        });
    };
    CaseApi.prototype.copySteps = function (copyInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var imageList, queryRunner, autoRepository, _a, err_2;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        imageList = [];
                        queryRunner = connect_1.connect.getConnection().createQueryRunner();
                        return [4 /*yield*/, queryRunner.connect()];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, queryRunner.startTransaction()];
                    case 2:
                        _b.sent();
                        _b.label = 3;
                    case 3:
                        _b.trys.push([3, 6, 8, 10]);
                        autoRepository = connect_1.connect.getConnection().getRepository(auto_step_entity_1.AutoStep);
                        _a = copyInfo;
                        return [4 /*yield*/, this.disposedSteps(queryRunner, autoRepository, copyInfo.copy_info, copyInfo.stepList, copyInfo.pid, copyInfo.copy_pid, copyInfo.uid, imageList)];
                    case 4:
                        _a.stepList = _b.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 5:
                        _b.sent();
                        return [3 /*break*/, 10];
                    case 6:
                        err_2 = _b.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 7:
                        _b.sent();
                        throw err_2;
                    case 8: return [4 /*yield*/, queryRunner.release()];
                    case 9:
                        _b.sent();
                        return [7 /*endfinally*/];
                    case 10: return [2 /*return*/, imageList];
                }
            });
        });
    };
    CaseApi.prototype.disposedSteps = function (queryRunner, autoRepository, copy_info, steps, pid, copy_pid, uid, imageList) {
        return __awaiter(this, void 0, void 0, function () {
            var deleteList, i, step, _a, findsecondForName, findthirdForName, secondInfo, thirdInfo_1, newThirdLevel_1, tmpId, _b, newSecondLevel, newThirdLevel_2, tmpId, _c, _d, thirdInfo, newThirdLevel_3, _e, newThirdLevel, _f, j, thirdInfo_2, newThirdLevel_4, _g, thirdInfo_3, newThirdLevel_5, _h, groupSteps, _j, newSecondLevel, newThirdLevel_6, _k, _l, groupSteps, _m, outs, i;
            return __generator(this, function (_o) {
                switch (_o.label) {
                    case 0:
                        deleteList = [];
                        i = 0;
                        _o.label = 1;
                    case 1:
                        if (!(i < steps.length)) return [3 /*break*/, 48];
                        step = steps[i];
                        _a = step.action.id;
                        switch (_a) {
                            case "click_pic": return [3 /*break*/, 2];
                            case "assert_pic": return [3 /*break*/, 2];
                            case "assert_pho": return [3 /*break*/, 2];
                            case "click_point": return [3 /*break*/, 2];
                            case "slide": return [3 /*break*/, 2];
                            case "speak": return [3 /*break*/, 14];
                            case "panel_btn": return [3 /*break*/, 14];
                            case "click_random": return [3 /*break*/, 14];
                            case "com": return [3 /*break*/, 14];
                            case "text": return [3 /*break*/, 20];
                            case "pcan": return [3 /*break*/, 24];
                            case "usbcan": return [3 /*break*/, 24];
                            case "group": return [3 /*break*/, 30];
                        }
                        return [3 /*break*/, 46];
                    case 2: return [4 /*yield*/, autoRepository.findOne({ pid: copy_pid, parent_id: step.action.id, id: step.secondLevel.id })];
                    case 3:
                        findsecondForName = _o.sent();
                        return [4 /*yield*/, autoRepository.findOne({ pid: copy_pid, parent_id: step.secondLevel.id, id: step.thirdLevel.id })];
                    case 4:
                        findthirdForName = _o.sent();
                        return [4 /*yield*/, autoRepository.findOne({ pid: pid, parent_id: step.action.id, name: findsecondForName.name })];
                    case 5:
                        secondInfo = _o.sent();
                        if (!secondInfo) return [3 /*break*/, 10];
                        step.secondLevel = secondInfo;
                        return [4 /*yield*/, autoRepository.findOne({ pid: pid, parent_id: secondInfo.id, name: findthirdForName.name })];
                    case 6:
                        thirdInfo_1 = _o.sent();
                        if (!thirdInfo_1) return [3 /*break*/, 7];
                        step.thirdLevel = thirdInfo_1;
                        return [3 /*break*/, 9];
                    case 7:
                        newThirdLevel_1 = this.newAutoStep({
                            pid: pid,
                            parent_id: secondInfo.id,
                            name: findthirdForName.name,
                            content: findthirdForName.content,
                            uid: uid
                        });
                        tmpId = step.thirdLevel.id;
                        _b = step;
                        return [4 /*yield*/, queryRunner.manager.save(newThirdLevel_1)];
                    case 8:
                        _b.thirdLevel = _o.sent();
                        if (step.action.id == "click_pic" || step.action.id == "assert_pic")
                            imageList.push({ src: tmpId, dst: step.thirdLevel.id });
                        _o.label = 9;
                    case 9: return [3 /*break*/, 13];
                    case 10:
                        newSecondLevel = this.newAutoStep({
                            pid: pid,
                            parent_id: step.action.id,
                            name: findsecondForName.name,
                            content: findsecondForName.content,
                            uid: uid
                        });
                        newThirdLevel_2 = this.newAutoStep({
                            pid: pid,
                            parent_id: newSecondLevel.id,
                            name: findthirdForName.name,
                            content: findthirdForName.content,
                            uid: uid
                        });
                        tmpId = step.thirdLevel.id;
                        _c = step;
                        return [4 /*yield*/, queryRunner.manager.save(newSecondLevel)];
                    case 11:
                        _c.secondLevel = _o.sent();
                        _d = step;
                        return [4 /*yield*/, queryRunner.manager.save(newThirdLevel_2)];
                    case 12:
                        _d.thirdLevel = _o.sent();
                        if (step.action.id == "click_pic" || step.action.id == "assert_pic")
                            imageList.push({ src: tmpId, dst: step.thirdLevel.id });
                        _o.label = 13;
                    case 13: return [3 /*break*/, 46];
                    case 14: return [4 /*yield*/, autoRepository.findOne({ pid: copy_pid, parent_id: step.action.id, id: step.thirdLevel.id })];
                    case 15:
                        findthirdForName = _o.sent();
                        return [4 /*yield*/, autoRepository.findOne({ pid: pid, parent_id: step.action.id, name: findthirdForName.name })];
                    case 16:
                        thirdInfo = _o.sent();
                        if (!thirdInfo) return [3 /*break*/, 17];
                        step.thirdLevel = thirdInfo;
                        return [3 /*break*/, 19];
                    case 17:
                        newThirdLevel_3 = this.newAutoStep({
                            pid: pid,
                            parent_id: step.action.id,
                            name: findthirdForName.name,
                            content: findthirdForName.content,
                            uid: uid
                        });
                        _e = step;
                        return [4 /*yield*/, queryRunner.manager.save(newThirdLevel_3)];
                    case 18:
                        _e.thirdLevel = _o.sent();
                        _o.label = 19;
                    case 19: return [3 /*break*/, 46];
                    case 20: return [4 /*yield*/, autoRepository.findOne({ pid: copy_pid, parent_id: step.action.id, id: step.thirdLevel.id })];
                    case 21:
                        findthirdForName = _o.sent();
                        return [4 /*yield*/, autoRepository.findOne({ pid: pid, parent_id: step.action.id, name: findthirdForName.name })];
                    case 22:
                        thirdInfo = _o.sent();
                        if (thirdInfo) {
                            if (thirdInfo.content.from == step.thirdLevel.content.from) {
                                step.thirdLevel = thirdInfo;
                                return [3 /*break*/, 46];
                            }
                        }
                        newThirdLevel = this.newAutoStep({
                            pid: pid,
                            parent_id: step.action.id,
                            name: findthirdForName.name,
                            content: findthirdForName.content,
                            uid: uid
                        });
                        _f = step;
                        return [4 /*yield*/, queryRunner.manager.save(newThirdLevel)];
                    case 23:
                        _f.thirdLevel = _o.sent();
                        return [3 /*break*/, 46];
                    case 24:
                        if (!(step.type.id == 0 || step.type.id == 2)) return [3 /*break*/, 25];
                        if (copy_info.clash) {
                            for (j = 0; j < copy_info.list.length; j++) {
                                if (copy_info.list[j].clash.thirdLevel.id == step.thirdLevel.id) {
                                    if (copy_info.list[j].op == 1) { // 1 delete
                                        deleteList.push(i);
                                    }
                                    else if (copy_info.list[j].op == 2) { // 2 update
                                        step.thirdLevel = copy_info.list[j].new.thirdLevel;
                                        if (step.type.id == 0) {
                                            step.secondLevel = copy_info.list[j].new.secondLevel;
                                            if (step.signal)
                                                step.signal = undefined;
                                            if (step.value)
                                                step.value = undefined;
                                            if (copy_info.list[j].new.signal)
                                                step.signal = copy_info.list[j].new.signal;
                                            else
                                                step.value = copy_info.list[j].new.value;
                                        }
                                    }
                                    break;
                                }
                            }
                        }
                        return [3 /*break*/, 29];
                    case 25:
                        if (!(step.type.id == 1)) return [3 /*break*/, 29];
                        return [4 /*yield*/, autoRepository.findOne({ pid: pid, parent_id: "enter_can", name: step.thirdLevel.name })];
                    case 26:
                        thirdInfo_2 = _o.sent();
                        if (!thirdInfo_2) return [3 /*break*/, 27];
                        step.thirdLevel = thirdInfo_2;
                        return [3 /*break*/, 29];
                    case 27:
                        newThirdLevel_4 = this.newAutoStep({
                            pid: pid,
                            parent_id: "enter_can",
                            name: step.thirdLevel.name,
                            content: step.thirdLevel.content,
                            uid: uid
                        });
                        _g = step;
                        return [4 /*yield*/, queryRunner.manager.save(newThirdLevel_4)];
                    case 28:
                        _g.thirdLevel = _o.sent();
                        _o.label = 29;
                    case 29: return [3 /*break*/, 46];
                    case 30: return [4 /*yield*/, autoRepository.findOne({ pid: copy_pid, parent_id: step.action.id, id: step.secondLevel.id })];
                    case 31:
                        findsecondForName = _o.sent();
                        return [4 /*yield*/, autoRepository.findOne({ pid: copy_pid, parent_id: step.secondLevel.id, id: step.thirdLevel.id })];
                    case 32:
                        findthirdForName = _o.sent();
                        return [4 /*yield*/, autoRepository.findOne({ pid: pid, parent_id: step.action.id, name: findsecondForName.name })];
                    case 33:
                        secondInfo = _o.sent();
                        if (!secondInfo) return [3 /*break*/, 40];
                        step.secondLevel = secondInfo;
                        return [4 /*yield*/, autoRepository.findOne({ pid: pid, parent_id: secondInfo.id, name: findthirdForName.name })];
                    case 34:
                        thirdInfo_3 = _o.sent();
                        if (!thirdInfo_3) return [3 /*break*/, 35];
                        step.thirdLevel = thirdInfo_3;
                        return [3 /*break*/, 39];
                    case 35:
                        newThirdLevel_5 = this.newAutoStep({
                            pid: pid,
                            parent_id: secondInfo.id,
                            name: findthirdForName.name,
                            content: [],
                            uid: uid
                        });
                        _h = step;
                        return [4 /*yield*/, queryRunner.manager.save(newThirdLevel_5)];
                    case 36:
                        _h.thirdLevel = _o.sent();
                        return [4 /*yield*/, this.disposedSteps(queryRunner, autoRepository, copy_info, findthirdForName.content, pid, copy_pid, uid, imageList)];
                    case 37:
                        groupSteps = _o.sent();
                        step.thirdLevel.content = groupSteps;
                        _j = step;
                        return [4 /*yield*/, queryRunner.manager.save(step.thirdLevel)];
                    case 38:
                        _j.thirdLevel = _o.sent();
                        _o.label = 39;
                    case 39: return [3 /*break*/, 45];
                    case 40:
                        newSecondLevel = this.newAutoStep({
                            pid: pid,
                            parent_id: step.action.id,
                            name: findsecondForName.name,
                            content: findsecondForName.content,
                            uid: uid
                        });
                        newThirdLevel_6 = this.newAutoStep({
                            pid: pid,
                            parent_id: newSecondLevel.id,
                            name: findthirdForName.name,
                            content: [],
                            uid: uid
                        });
                        _k = step;
                        return [4 /*yield*/, queryRunner.manager.save(newSecondLevel)];
                    case 41:
                        _k.secondLevel = _o.sent();
                        _l = step;
                        return [4 /*yield*/, queryRunner.manager.save(newThirdLevel_6)];
                    case 42:
                        _l.thirdLevel = _o.sent();
                        return [4 /*yield*/, this.disposedSteps(queryRunner, autoRepository, copy_info, findthirdForName.content, pid, copy_pid, uid, imageList)];
                    case 43:
                        groupSteps = _o.sent();
                        step.thirdLevel.content = groupSteps;
                        _m = step;
                        return [4 /*yield*/, queryRunner.manager.save(step.thirdLevel)];
                    case 44:
                        _m.thirdLevel = _o.sent();
                        _o.label = 45;
                    case 45: return [3 /*break*/, 46];
                    case 46:
                        steps[i] = step;
                        _o.label = 47;
                    case 47:
                        i++;
                        return [3 /*break*/, 1];
                    case 48:
                        outs = [];
                        if (deleteList.length) {
                            for (i = 0; i < steps.length; i++) {
                                if (deleteList.indexOf(i) == -1) {
                                    outs.push(steps[i]);
                                }
                            }
                        }
                        else {
                            outs = steps;
                        }
                        return [2 /*return*/, outs];
                }
            });
        });
    };
    CaseApi.prototype.newAutoStep = function (autoStepInfo) {
        var newAutoStep = new auto_step_entity_1.AutoStep();
        newAutoStep.pid = autoStepInfo.pid;
        newAutoStep.parent_id = autoStepInfo.parent_id;
        newAutoStep.name = autoStepInfo.name;
        newAutoStep.content = autoStepInfo.content;
        newAutoStep.uid = autoStepInfo.uid;
        return newAutoStep;
    };
    CaseApi.prototype.findCaseIdByProject = function (pid, case_id) {
        return __awaiter(this, void 0, void 0, function () {
            var caseInfoRepository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caseInfoRepository = connect_1.connect.getConnection().getRepository(case_entity_1.Case);
                        return [4 /*yield*/, caseInfoRepository.findOne({ pid: pid, case_id: case_id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CaseApi.prototype.findCaseByModule = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query, key, element;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        query = repository.createQueryBuilder('cp');
                        query
                            .innerJoinAndSelect(function (qb) {
                            return qb
                                .select('max(ch.id)', 'id')
                                .where('ch.pid=:pid and ch.vid <= :vid', {
                                pid: dto.pid,
                                vid: dto.vid
                            })
                                .from(case_history_entity_1.CaseHistory, 'ch')
                                .groupBy('ch.cid');
                        }, 'clid', 'cp.id=clid.id')
                            .where('cp.case_status != :status', { status: dto.case_status != null ? dto.case_status : 2 })
                            .andWhere('cp.case_module=:case_module', { case_module: dto.case_module });
                        if (!dto.isCount) return [3 /*break*/, 2];
                        return [4 /*yield*/, query.getCount()];
                    case 1: return [2 /*return*/, _a.sent()];
                    case 2:
                        if (dto.order) {
                            for (key in dto.order) {
                                if (dto.order.hasOwnProperty(key)) {
                                    element = dto.order[key];
                                    if (typeof element == 'number')
                                        element = element == 1 ? 'ASC' : 'DESC';
                                    query.addOrderBy("cp." + key, element);
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
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CaseApi.prototype.findAllAutoCases = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        query = repository.createQueryBuilder('cp');
                        query
                            .innerJoinAndSelect(function (qb) {
                            return qb
                                .select('max(ch.id)', 'id')
                                .where('ch.pid=:pid and ch.vid <= :vid', {
                                pid: dto.pid,
                                vid: dto.vid
                            })
                                .from(case_history_entity_1.CaseHistory, 'ch')
                                .groupBy('ch.cid');
                        }, 'clid', 'cp.id=clid.id')
                            .select('cp.id', 'id')
                            .addSelect('cp.case_module', 'case_module')
                            .addSelect('cp.case_id', 'case_id')
                            .where('cp.case_status != 2 and cp.case_type = 1');
                        query.addOrderBy('cp.case_module', 'ASC');
                        query.addOrderBy('cp.case_id', 'ASC');
                        return [4 /*yield*/, query.getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CaseApi.prototype.updateModule = function (caseModuleUpdateInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var caseInfoRepository, caseInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caseInfoRepository = connect_1.connect.getConnection().getRepository(case_entity_1.Case);
                        return [4 /*yield*/, caseInfoRepository.findOne({ pid: caseModuleUpdateInfo.pid, case_module: caseModuleUpdateInfo.newModuleName })];
                    case 1:
                        caseInfo = _a.sent();
                        if (!caseInfo) return [3 /*break*/, 2];
                        throw new Error('模块名称已存在');
                    case 2: return [4 /*yield*/, connect_1.connect.getConnection()
                            .createQueryBuilder()
                            .update(case_entity_1.Case)
                            .set({ case_module: caseModuleUpdateInfo.newModuleName, uid: caseModuleUpdateInfo.uid })
                            .where("pid = :pid and case_module = :oldModuleName", { pid: caseModuleUpdateInfo.pid, oldModuleName: caseModuleUpdateInfo.oldModuleName })
                            .execute()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, connect_1.connect.getConnection()
                                .createQueryBuilder()
                                .update(case_history_entity_1.CaseHistory)
                                .set({ case_module: caseModuleUpdateInfo.newModuleName, uid: caseModuleUpdateInfo.uid })
                                .where("pid = :pid and case_module = :oldModuleName", { pid: caseModuleUpdateInfo.pid, oldModuleName: caseModuleUpdateInfo.oldModuleName })
                                .execute()];
                    case 4:
                        _a.sent();
                        return [2 /*return*/, 'update Module Done'];
                }
            });
        });
    };
    CaseApi.prototype.updateCase = function (caseUpdateInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var caseInfoRepository, caseInfo, queryRunner, updatedCase, caseHistoryRepository, caseHistory, newCaseHistory, arr, casehistory, newAutoHistory, arr, err_3;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caseInfoRepository = connect_1.connect.getConnection().getRepository(case_entity_1.Case);
                        return [4 /*yield*/, caseInfoRepository.findOne({ pid: caseUpdateInfo.pid, id: caseUpdateInfo.cid })];
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
                        _a.trys.push([4, 16, 18, 20]);
                        caseInfo.vid = caseUpdateInfo.vid;
                        caseInfo.uid = caseUpdateInfo.uid;
                        caseInfo.dam_num = caseUpdateInfo.dam_num;
                        caseInfo.dam_name = caseUpdateInfo.dam_name;
                        caseInfo.case_name = caseUpdateInfo.case_name;
                        caseInfo.case_level = caseUpdateInfo.case_level;
                        caseInfo.case_module = caseUpdateInfo.case_module;
                        caseInfo.case_pre = caseUpdateInfo.case_pre;
                        caseInfo.case_op = caseUpdateInfo.case_op;
                        caseInfo.case_exp = caseUpdateInfo.case_exp;
                        caseInfo.case_note = caseUpdateInfo.case_note;
                        caseInfo.case_type = caseUpdateInfo.case_type;
                        caseInfo.case_status = 1;
                        return [4 /*yield*/, queryRunner.manager.save(caseInfo)];
                    case 5:
                        updatedCase = _a.sent();
                        caseHistoryRepository = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        return [4 /*yield*/, caseHistoryRepository.findOne({
                                pid: caseUpdateInfo.pid,
                                vid: caseUpdateInfo.vid,
                                cid: caseUpdateInfo.cid
                            })];
                    case 6:
                        caseHistory = _a.sent();
                        if (!!caseHistory) return [3 /*break*/, 11];
                        newCaseHistory = new case_history_entity_1.CaseHistory();
                        newCaseHistory.pid = caseUpdateInfo.pid;
                        newCaseHistory.vid = caseUpdateInfo.vid;
                        newCaseHistory.cid = updatedCase.id;
                        newCaseHistory.uid = caseUpdateInfo.uid;
                        newCaseHistory.dam_num = caseUpdateInfo.dam_num;
                        newCaseHistory.dam_name = caseUpdateInfo.dam_name;
                        newCaseHistory.case_id = caseUpdateInfo.case_id;
                        newCaseHistory.case_name = caseUpdateInfo.case_name;
                        newCaseHistory.case_level = caseUpdateInfo.case_level;
                        newCaseHistory.case_module = caseUpdateInfo.case_module;
                        newCaseHistory.case_pre = caseUpdateInfo.case_pre;
                        newCaseHistory.case_op = caseUpdateInfo.case_op;
                        newCaseHistory.case_exp = caseUpdateInfo.case_exp;
                        newCaseHistory.case_note = caseUpdateInfo.case_note;
                        newCaseHistory.case_type = caseUpdateInfo.case_type;
                        return [4 /*yield*/, caseHistoryRepository.find({
                                pid: caseUpdateInfo.pid,
                                cid: caseUpdateInfo.cid
                            })];
                    case 7:
                        arr = _a.sent();
                        if (arr.length == 1 && arr[0].vid == caseUpdateInfo.vid) {
                            newCaseHistory.case_status = 0;
                        }
                        else {
                            newCaseHistory.case_status = 1;
                        }
                        return [4 /*yield*/, queryRunner.manager.save(newCaseHistory)];
                    case 8:
                        casehistory = _a.sent();
                        if (!caseUpdateInfo.case_type) return [3 /*break*/, 10];
                        newAutoHistory = new auto_history_entity_1.AutoHistory();
                        newAutoHistory.pid = casehistory.pid;
                        newAutoHistory.chid = casehistory.id;
                        newAutoHistory.uid = caseUpdateInfo.uid;
                        newAutoHistory.run_time = caseUpdateInfo.runTime;
                        newAutoHistory.steps = caseUpdateInfo.stepList;
                        return [4 /*yield*/, queryRunner.manager.save(newAutoHistory)];
                    case 9:
                        _a.sent();
                        _a.label = 10;
                    case 10: return [3 /*break*/, 14];
                    case 11:
                        caseHistory.vid = caseUpdateInfo.vid;
                        caseHistory.uid = caseUpdateInfo.uid;
                        caseHistory.dam_num = caseUpdateInfo.dam_num;
                        caseHistory.dam_name = caseUpdateInfo.dam_name;
                        caseHistory.case_name = caseUpdateInfo.case_name;
                        caseHistory.case_level = caseUpdateInfo.case_level;
                        caseHistory.case_module = caseUpdateInfo.case_module;
                        caseHistory.case_pre = caseUpdateInfo.case_pre;
                        caseHistory.case_op = caseUpdateInfo.case_op;
                        caseHistory.case_exp = caseUpdateInfo.case_exp;
                        caseHistory.case_note = caseUpdateInfo.case_note;
                        caseHistory.case_type = caseUpdateInfo.case_type;
                        return [4 /*yield*/, caseHistoryRepository.find({
                                pid: caseUpdateInfo.pid,
                                cid: caseUpdateInfo.cid
                            })];
                    case 12:
                        arr = _a.sent();
                        if (arr.length == 1 && arr[0].vid == caseUpdateInfo.vid) {
                            caseHistory.case_status = 0;
                        }
                        else {
                            caseHistory.case_status = 1;
                        }
                        return [4 /*yield*/, queryRunner.manager.save(caseHistory)];
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
                    case 20: return [2 /*return*/, 'update case done'];
                }
            });
        });
    };
    CaseApi.prototype.deleteCase = function (caseDeleteInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var caseHistoryInfoRepository, caseHistoryInfo, queryRunner, deleteCaseHistory, err_4;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        caseHistoryInfoRepository = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        return [4 /*yield*/, caseHistoryInfoRepository.findOne({ id: caseDeleteInfo.chid })];
                    case 1:
                        caseHistoryInfo = _a.sent();
                        if (!caseHistoryInfo) {
                            throw new Error('用例历史不存在');
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
                        _a.trys.push([4, 8, 10, 12]);
                        deleteCaseHistory = new case_history_entity_1.CaseHistory();
                        deleteCaseHistory.pid = caseHistoryInfo.pid;
                        deleteCaseHistory.vid = caseDeleteInfo.vid;
                        deleteCaseHistory.cid = caseHistoryInfo.cid;
                        deleteCaseHistory.uid = caseDeleteInfo.uid;
                        deleteCaseHistory.dam_num = caseHistoryInfo.dam_num;
                        deleteCaseHistory.dam_name = caseHistoryInfo.dam_name;
                        deleteCaseHistory.case_id = caseHistoryInfo.case_id;
                        deleteCaseHistory.case_name = caseHistoryInfo.case_name;
                        deleteCaseHistory.case_level = caseHistoryInfo.case_level;
                        deleteCaseHistory.case_module = caseHistoryInfo.case_module;
                        deleteCaseHistory.case_pre = caseHistoryInfo.case_pre;
                        deleteCaseHistory.case_op = caseHistoryInfo.case_op;
                        deleteCaseHistory.case_exp = caseHistoryInfo.case_exp;
                        deleteCaseHistory.case_note = caseHistoryInfo.case_note;
                        deleteCaseHistory.case_type = caseHistoryInfo.case_type;
                        deleteCaseHistory.case_status = 2;
                        return [4 /*yield*/, queryRunner.manager.save(deleteCaseHistory)];
                    case 5:
                        _a.sent();
                        // //逻辑删除
                        // let caseInfoRepository = connect.getConnection().getRepository(Case);
                        // let caseInfo = await caseInfoRepository.findOne({
                        // 	id: caseHistoryInfo.cid
                        // });
                        // if (!caseInfo) {
                        // 	throw new Error('用例不存在');
                        // } else {
                        // 	caseInfo.vid = caseDeleteInfo.vid;
                        // 	caseInfo.uid = caseDeleteInfo.uid;
                        // 	caseInfo.case_status = 2;
                        // 	await queryRunner.manager.save(caseInfo);
                        // }
                        // 物理删除
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .delete()
                                .from(case_entity_1.Case)
                                .where('id=:id', { id: caseHistoryInfo.cid })
                                .execute()];
                    case 6:
                        // //逻辑删除
                        // let caseInfoRepository = connect.getConnection().getRepository(Case);
                        // let caseInfo = await caseInfoRepository.findOne({
                        // 	id: caseHistoryInfo.cid
                        // });
                        // if (!caseInfo) {
                        // 	throw new Error('用例不存在');
                        // } else {
                        // 	caseInfo.vid = caseDeleteInfo.vid;
                        // 	caseInfo.uid = caseDeleteInfo.uid;
                        // 	caseInfo.case_status = 2;
                        // 	await queryRunner.manager.save(caseInfo);
                        // }
                        // 物理删除
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 7:
                        _a.sent();
                        return [3 /*break*/, 12];
                    case 8:
                        err_4 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 9:
                        _a.sent();
                        throw err_4;
                    case 10: return [4 /*yield*/, queryRunner.release()];
                    case 11:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 12: return [2 /*return*/, 'deleteCase case done'];
                }
            });
        });
    };
    CaseApi.prototype.deleteCaseModule = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, err_5;
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
                        _a.trys.push([3, 7, 9, 11]);
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .delete()
                                .from(case_entity_1.Case)
                                .where('pid=:pid', { pid: info.pid })
                                .andWhere('case_module=:case_module', { case_module: info.case_module })
                                .execute()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager
                                .createQueryBuilder()
                                .update(case_history_entity_1.CaseHistory)
                                .set({ case_status: 2 })
                                .where('pid=:pid and case_status != 2', { pid: info.pid })
                                .andWhere('case_module=:case_module', { case_module: info.case_module })
                                .execute()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 6:
                        _a.sent();
                        return [3 /*break*/, 11];
                    case 7:
                        err_5 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 8:
                        _a.sent();
                        throw err_5;
                    case 9: return [4 /*yield*/, queryRunner.release()];
                    case 10:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 11: return [2 /*return*/, 'delete auto step done'];
                }
            });
        });
    };
    CaseApi.prototype.AddCaseResult = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, result, newResult;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(case_result_entity_1.CaseResult);
                        return [4 /*yield*/, repository.findOne({ chid: info.chid })];
                    case 1:
                        result = _a.sent();
                        if (!!result) return [3 /*break*/, 3];
                        newResult = new case_result_entity_1.CaseResult();
                        newResult.chid = info.chid;
                        newResult.uid = info.uid;
                        newResult.result = info.result;
                        newResult.data = info.data;
                        return [4 /*yield*/, repository.save(newResult)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3:
                        result.uid = info.uid;
                        result.result = info.result;
                        result.data = info.data;
                        return [4 /*yield*/, repository.save(result)];
                    case 4:
                        _a.sent();
                        _a.label = 5;
                    case 5: return [2 /*return*/, 'add case result done'];
                }
            });
        });
    };
    CaseApi.prototype.findCaseModule = function (dto) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, query;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        query = repository.createQueryBuilder('cp');
                        query
                            .select('cp.case_module', 'case_module')
                            .where('cp.pid=:pid and cp.vid <= :vid and cp.case_status != 2', {
                            pid: dto.pid,
                            vid: dto.vid
                        })
                            .groupBy('cp.case_module');
                        return [4 /*yield*/, query.getRawMany()];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    CaseApi.prototype.copyCaseByProjectId = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, repository, chrep, autorep, query, QR, CR, AR, i, ch, ah, aQR, iQR, aCR, iCR, aAR, iAR, err_6;
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
                        _a.trys.push([3, 29, 31, 33]);
                        repository = connect_1.connect.getConnection().getRepository(case_entity_1.Case);
                        chrep = connect_1.connect.getConnection().getRepository(case_history_entity_1.CaseHistory);
                        autorep = connect_1.connect.getConnection().getRepository(auto_history_entity_1.AutoHistory);
                        query = repository.createQueryBuilder('as');
                        query.select(['as.id', 'as.dam_num', 'as.dam_name', 'as.case_id', 'as.case_name', 'as.case_level', 'as.case_module', 'as.case_pre', 'as.case_op', 'as.case_exp', 'as.case_note', 'as.case_type', 'as.case_status']).where('as.pid=:pid', { pid: info.copy_pid });
                        return [4 /*yield*/, query.getMany()];
                    case 4:
                        QR = _a.sent();
                        CR = [];
                        AR = [];
                        i = 0;
                        _a.label = 5;
                    case 5:
                        if (!(i < QR.length)) return [3 /*break*/, 9];
                        return [4 /*yield*/, chrep.findOne({ pid: info.copy_pid, cid: QR[i].id, case_status: 0 })];
                    case 6:
                        ch = _a.sent();
                        QR[i].id = new bson_1.ObjectID().toString();
                        QR[i].pid = info.new_pid;
                        QR[i].vid = info.vid;
                        QR[i].uid = info.uid;
                        if (!ch) return [3 /*break*/, 8];
                        return [4 /*yield*/, autorep.findOne({ chid: ch.id })];
                    case 7:
                        ah = _a.sent();
                        ch.id = new bson_1.ObjectID().toString();
                        ch.cid = QR[i].id;
                        ch.pid = info.new_pid;
                        ch.vid = info.vid;
                        ch.uid = info.uid;
                        if (ah) {
                            ah.id = new bson_1.ObjectID().toString();
                            ah.chid = ch.id;
                            ah.pid = info.new_pid;
                            ah.uid = info.uid;
                            AR.push(ah);
                        }
                        CR.push(ch);
                        _a.label = 8;
                    case 8:
                        i++;
                        return [3 /*break*/, 5];
                    case 9:
                        if (!(QR.length > 50)) return [3 /*break*/, 13];
                        aQR = QR;
                        _a.label = 10;
                    case 10:
                        if (!(aQR.length > 0)) return [3 /*break*/, 12];
                        iQR = aQR.slice(0, 50);
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(case_entity_1.Case).values(iQR).execute()];
                    case 11:
                        _a.sent();
                        aQR = aQR.slice(50);
                        return [3 /*break*/, 10];
                    case 12: return [3 /*break*/, 15];
                    case 13: return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(case_entity_1.Case).values(QR).execute()];
                    case 14:
                        _a.sent();
                        _a.label = 15;
                    case 15:
                        if (!(CR.length > 50)) return [3 /*break*/, 19];
                        aCR = CR;
                        _a.label = 16;
                    case 16:
                        if (!(aCR.length > 0)) return [3 /*break*/, 18];
                        iCR = aCR.slice(0, 50);
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(case_history_entity_1.CaseHistory).values(iCR).execute()];
                    case 17:
                        _a.sent();
                        aCR = aCR.slice(50);
                        return [3 /*break*/, 16];
                    case 18: return [3 /*break*/, 21];
                    case 19: return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(case_history_entity_1.CaseHistory).values(CR).execute()];
                    case 20:
                        _a.sent();
                        _a.label = 21;
                    case 21:
                        if (!(AR.length > 50)) return [3 /*break*/, 25];
                        aAR = AR;
                        _a.label = 22;
                    case 22:
                        if (!(aAR.length > 0)) return [3 /*break*/, 24];
                        iAR = aAR.slice(0, 50);
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(auto_history_entity_1.AutoHistory).values(iAR).execute()];
                    case 23:
                        _a.sent();
                        aAR = aAR.slice(50);
                        return [3 /*break*/, 22];
                    case 24: return [3 /*break*/, 27];
                    case 25: return [4 /*yield*/, queryRunner.manager.createQueryBuilder().insert().into(auto_history_entity_1.AutoHistory).values(AR).execute()];
                    case 26:
                        _a.sent();
                        _a.label = 27;
                    case 27: return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 28:
                        _a.sent();
                        return [3 /*break*/, 33];
                    case 29:
                        err_6 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 30:
                        _a.sent();
                        throw err_6;
                    case 31: return [4 /*yield*/, queryRunner.release()];
                    case 32:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 33: return [2 /*return*/, 'copy case done'];
                }
            });
        });
    };
    return CaseApi;
}());
exports.caseApi = new CaseApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FzZS5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvYXBpL2Nhc2UuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBQ3JDLHFEQUE2QztBQWE3QyxxRUFBNEQ7QUFDNUQsbUVBQTBEO0FBQzFELHFFQUE0RDtBQUM1RCwrREFBc0Q7QUFDdEQsNkJBQWdDO0FBRWhDO0lBQUE7SUFncUJBLENBQUM7SUEvcEJNLDRCQUFVLEdBQWhCLFVBQWlCLFFBQXdCOzs7Ozs7d0JBQ3BDLFdBQVcsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGlCQUFpQixFQUFFLENBQUM7d0JBQzlELHFCQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7d0JBQzVCLHFCQUFNLFdBQVcsQ0FBQyxnQkFBZ0IsRUFBRSxFQUFBOzt3QkFBcEMsU0FBb0MsQ0FBQzs7Ozt3QkFFaEMsT0FBTyxHQUFHLElBQUksa0JBQUksRUFBRSxDQUFDO3dCQUN6QixPQUFPLENBQUMsR0FBRyxHQUFHLFFBQVEsQ0FBQyxHQUFHLENBQUM7d0JBQzNCLE9BQU8sQ0FBQyxHQUFHLEdBQUcsUUFBUSxDQUFDLEdBQUcsQ0FBQzt3QkFDM0IsT0FBTyxDQUFDLEdBQUcsR0FBRyxRQUFRLENBQUMsR0FBRyxDQUFDO3dCQUMzQixPQUFPLENBQUMsT0FBTyxHQUFHLFFBQVEsQ0FBQyxPQUFPLENBQUM7d0JBQ25DLE9BQU8sQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLFFBQVEsQ0FBQzt3QkFDckMsT0FBTyxDQUFDLE9BQU8sR0FBRyxRQUFRLENBQUMsT0FBTyxDQUFDO3dCQUNuQyxPQUFPLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQyxTQUFTLENBQUM7d0JBQ3ZDLE9BQU8sQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFD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Q0FBQyxFQUFFLENBQUMsQ0FBQzs7OzZCQUdyQixxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFXLENBQUMsQ0FBQyxNQUFNLENBQUMsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUE5RixTQUE4RixDQUFDOzs2QkFFaEcscUJBQU0sV0FBVyxDQUFDLGlCQUFpQixFQUFFLEVBQUE7O3dCQUFyQyxTQUFxQyxDQUFDOzs7O3dCQUV0QyxxQkFBTSxXQUFXLENBQUMsbUJBQW1CLEVBQUUsRUFBQTs7d0JBQXZDLFNBQXVDLENBQUM7d0JBQ3hDLE1BQU0sS0FBRyxDQUFDOzZCQUVWLHFCQUFNLFdBQVcsQ0FBQyxPQUFPLEVBQUUsRUFBQTs7d0JBQTNCLFNBQTJCLENBQUM7OzZCQUU3QixzQkFBTyxnQkFBZ0IsRUFBQzs7OztLQUN4QjtJQUNGLGNBQUM7QUFBRCxDQUFDLEFBaHFCRCxJQWdxQkM7QUFFVSxRQUFBLE9BQU8sR0FBRyxJQUFJLE9BQU8sRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4uL2Nvbm5lY3QnO1xyXG5pbXBvcnQgeyBDYXNlIH0gZnJvbSAnLi4vZW50aXR5L2Nhc2UuZW50aXR5JztcclxuaW1wb3J0IHtcclxuXHRDYXNlQ3JlYXRlSW5mbyxcclxuXHRDYXNlVXBkYXRlSW5mbyxcclxuXHRDYXNlRGVsZXRlSW5mbyxcclxuXHRDYXNlUmVzdWx0Q3JlYXRlSW5mbyxcclxuXHRNb2R1bGVEZWxldGVJbmZvLFxyXG5cdENhc2VNb2R1bGVVcGRhdGVJbmZvLFxyXG5cdENvcHlQcm9qZWN0SW5mbyxcclxuXHRDYXNlQ29weUluZm8sXHJcblx0QXV0b1N0ZXBDcmVhdGVJbmZvXHJcbn0gZnJvbSAnLi4vbW9kZWwvaW5mb19tb2RlbCc7XHJcbmltcG9ydCB7IENhc2VGaW5kQnlNb2R1bGVEdG8sIENhc2VNb2R1bGVGaW5kRHRvIH0gZnJvbSAnLi4vbW9kZWwvcXVlcnlfbW9kZWwnO1xyXG5pbXBvcnQgeyBDYXNlSGlzdG9yeSB9IGZyb20gJy4uL2VudGl0eS9jYXNlX2hpc3RvcnkuZW50aXR5JztcclxuaW1wb3J0IHsgQ2FzZVJlc3VsdCB9IGZyb20gJy4uL2VudGl0eS9jYXNlX3Jlc3VsdC5lbnRpdHknO1xyXG5pbXBvcnQgeyBBdXRvSGlzdG9yeSB9IGZyb20gJy4uL2VudGl0eS9hdXRvX2hpc3RvcnkuZW50aXR5JztcclxuaW1wb3J0IHsgQXV0b1N0ZXAgfSBmcm9tICcuLi9lbnRpdHkvYXV0b19zdGVwLmVudGl0eSc7XHJcbmltcG9ydCB7IE9iamVjdElEIH0gZnJvbSAnYnNvbic7XHJcblxyXG5jbGFzcyBDYXNlQXBpIHtcclxuXHRhc3luYyBjcmVhdGVDYXNlKGNhc2VJbmZvOiBDYXNlQ3JlYXRlSW5mbykge1xyXG5cdFx0bGV0IHF1ZXJ5UnVubmVyID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuY3JlYXRlUXVlcnlSdW5uZXIoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbm5lY3QoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCBuZXdDYXNlID0gbmV3IENhc2UoKTtcclxuXHRcdFx0bmV3Q2FzZS5waWQgPSBjYXNlSW5mby5waWQ7XHJcblx0XHRcdG5ld0Nhc2UudmlkID0gY2FzZUluZm8udmlkO1xyXG5cdFx0XHRuZXdDYXNlLnVpZCA9IGNhc2VJbmZvLnVpZDtcclxuXHRcdFx0bmV3Q2FzZS5kYW1fbnVtID0gY2FzZUluZm8uZGFtX251bTtcclxuXHRcdFx0bmV3Q2FzZS5kYW1fbmFtZSA9IGNhc2VJbmZvLmRhbV9uYW1lO1xyXG5cdFx0XHRuZXdDYXNlLmNhc2VfaWQgPSBjYXNlSW5mby5jYXNlX2lkO1xyXG5cdFx0XHRuZXdDYXNlLmNhc2VfbmFtZSA9IGNhc2VJbmZvLmNhc2VfbmFtZTtcclxuXHRcdFx0bmV3Q2FzZS5jYXNlX2xldmVsID0gY2FzZUluZm8uY2FzZV9sZXZlbDtcclxuXHRcdFx0bmV3Q2FzZS5jYXNlX21vZHVsZSA9IGNhc2VJbmZvLmNhc2VfbW9kdWxlO1xyXG5cdFx0XHRuZXdDYXNlLmNhc2VfcHJlID0gY2FzZUluZm8uY2FzZV9wcmU7XHJcblx0XHRcdG5ld0Nhc2UuY2FzZV9vcCA9IGNhc2VJbmZvLmNhc2Vfb3A7XHJcblx0XHRcdG5ld0Nhc2UuY2FzZV9leHAgPSBjYXNlSW5mby5jYXNlX2V4cDtcclxuXHRcdFx0bmV3Q2FzZS5jYXNlX25vdGUgPSBjYXNlSW5mby5jYXNlX25vdGU7XHJcblx0XHRcdG5ld0Nhc2UuY2FzZV90eXBlID0gY2FzZUluZm8uY2FzZV90eXBlO1xyXG5cdFx0XHRuZXdDYXNlLmNhc2Vfc3RhdHVzID0gMDtcclxuXHRcdFx0bGV0IHNhdmVDYXNlID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKG5ld0Nhc2UpO1xyXG5cclxuXHRcdFx0bGV0IG5ld0Nhc2VIaXN0b3J5ID0gbmV3IENhc2VIaXN0b3J5KCk7XHJcblx0XHRcdG5ld0Nhc2VIaXN0b3J5LnBpZCA9IGNhc2VJbmZvLnBpZDtcclxuXHRcdFx0bmV3Q2FzZUhpc3RvcnkudmlkID0gY2FzZUluZm8udmlkO1xyXG5cdFx0XHRuZXdDYXNlSGlzdG9yeS5jaWQgPSBzYXZlQ2FzZS5pZDtcclxuXHRcdFx0bmV3Q2FzZUhpc3RvcnkudWlkID0gY2FzZUluZm8udWlkO1xyXG5cdFx0XHRuZXdDYXNlSGlzdG9yeS5kYW1fbnVtID0gY2FzZUluZm8uZGFtX251bTtcclxuXHRcdFx0bmV3Q2FzZUhpc3RvcnkuZGFtX25hbWUgPSBjYXNlSW5mby5kYW1fbmFtZTtcclxuXHRcdFx0bmV3Q2FzZUhpc3RvcnkuY2FzZV9pZCA9IGNhc2VJbmZvLmNhc2VfaWQ7XHJcblx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2VfbmFtZSA9IGNhc2VJbmZvLmNhc2VfbmFtZTtcclxuXHRcdFx0bmV3Q2FzZUhpc3RvcnkuY2FzZV9sZXZlbCA9IGNhc2VJbmZvLmNhc2VfbGV2ZWw7XHJcblx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2VfbW9kdWxlID0gY2FzZUluZm8uY2FzZV9tb2R1bGU7XHJcblx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2VfcHJlID0gY2FzZUluZm8uY2FzZV9wcmU7XHJcblx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2Vfb3AgPSBjYXNlSW5mby5jYXNlX29wO1xyXG5cdFx0XHRuZXdDYXNlSGlzdG9yeS5jYXNlX2V4cCA9IGNhc2VJbmZvLmNhc2VfZXhwO1xyXG5cdFx0XHRuZXdDYXNlSGlzdG9yeS5jYXNlX25vdGUgPSBjYXNlSW5mby5jYXNlX25vdGU7XHJcblx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2VfdHlwZSA9IGNhc2VJbmZvLmNhc2VfdHlwZTtcclxuXHRcdFx0bmV3Q2FzZUhpc3RvcnkuY2FzZV9zdGF0dXMgPSAwO1xyXG5cdFx0XHRsZXQgY2FzZUhpc3RvcnkgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUobmV3Q2FzZUhpc3RvcnkpO1xyXG5cclxuXHRcdFx0aWYgKGNhc2VJbmZvLmNhc2VfdHlwZSkge1xyXG5cdFx0XHRcdGxldCBuZXdBdXRvSGlzdG9yeSA9IG5ldyBBdXRvSGlzdG9yeSgpO1xyXG5cdFx0XHRcdG5ld0F1dG9IaXN0b3J5LnBpZCA9IGNhc2VJbmZvLnBpZDtcclxuXHRcdFx0XHRuZXdBdXRvSGlzdG9yeS5jaGlkID0gY2FzZUhpc3RvcnkuaWQ7XHJcblx0XHRcdFx0bmV3QXV0b0hpc3RvcnkudWlkID0gY2FzZUluZm8udWlkO1xyXG5cdFx0XHRcdG5ld0F1dG9IaXN0b3J5LnJ1bl90aW1lID0gY2FzZUluZm8ucnVuVGltZTtcclxuXHRcdFx0XHRuZXdBdXRvSGlzdG9yeS5zdGVwcyA9IGNhc2VJbmZvLnN0ZXBMaXN0O1xyXG5cdFx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuc2F2ZShuZXdBdXRvSGlzdG9yeSk7XHJcblx0XHRcdH1cclxuXHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbW1pdFRyYW5zYWN0aW9uKCk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucm9sbGJhY2tUcmFuc2FjdGlvbigpO1xyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ2NyZWF0ZSBjYXNlIGRvbmUnO1xyXG5cdH1cclxuXHRhc3luYyBjb3B5Q2FzZShjb3B5SW5mbzogQ2FzZUNvcHlJbmZvKXtcclxuXHRcdGxldCBjYXNlSW5mb1JlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhc2UpO1xyXG5cdFx0bGV0IGNhc2VJbmZvID0gYXdhaXQgY2FzZUluZm9SZXBvc2l0b3J5LmZpbmRPbmUoeyBwaWQ6IGNvcHlJbmZvLnBpZCwgY2FzZV9pZDogY29weUluZm8uY2FzZV9pZCB9KTtcclxuXHRcdGlmKGNhc2VJbmZvKXtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfnlKjkvotJROW3suWtmOWcqCcpO1xyXG5cdFx0fWVsc2V7XHJcblx0XHRcdGxldCBjc3JldCA9IGF3YWl0IHRoaXMuY29weVN0ZXBzKGNvcHlJbmZvKTtcclxuXHRcdFx0aWYoY3NyZXQpe1xyXG5cdFx0XHRcdGxldCBuZXdDYXNlID0gYXdhaXQgdGhpcy5jcmVhdGVDYXNlKGNvcHlJbmZvKTtcclxuXHRcdFx0XHRpZihuZXdDYXNlKXtcclxuXHRcdFx0XHRcdHJldHVybiBjc3JldDtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0cmV0dXJuIG5ldyBFcnJvcign5aSN5Yi255So5L6L5aSx6LSlJyk7XHJcblx0XHRcdH1cclxuXHRcdFx0cmV0dXJuIG5ldyBFcnJvcign5aSN5Yi26Ieq5Yqo5YyW5q2l6aqk5aSx6LSlJyk7XHJcblx0XHR9XHJcblx0fVxyXG5cdHByaXZhdGUgYXN5bmMgY29weVN0ZXBzKGNvcHlJbmZvOiBhbnkpe1xyXG5cdFx0bGV0IGltYWdlTGlzdDphbnkgPSBbXTtcclxuXHRcdGxldCBxdWVyeVJ1bm5lciA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5zdGFydFRyYW5zYWN0aW9uKCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgYXV0b1JlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KEF1dG9TdGVwKTtcclxuXHRcdFx0Y29weUluZm8uc3RlcExpc3QgPSBhd2FpdCB0aGlzLmRpc3Bvc2VkU3RlcHMocXVlcnlSdW5uZXIsIGF1dG9SZXBvc2l0b3J5LCBjb3B5SW5mby5jb3B5X2luZm8sIGNvcHlJbmZvLnN0ZXBMaXN0LCBjb3B5SW5mby5waWQsIGNvcHlJbmZvLmNvcHlfcGlkLCBjb3B5SW5mby51aWQsIGltYWdlTGlzdCk7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbW1pdFRyYW5zYWN0aW9uKCk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucm9sbGJhY2tUcmFuc2FjdGlvbigpO1xyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gaW1hZ2VMaXN0O1xyXG5cdH1cclxuXHRwcml2YXRlIGFzeW5jIGRpc3Bvc2VkU3RlcHMocXVlcnlSdW5uZXI6YW55LCBhdXRvUmVwb3NpdG9yeTphbnksIGNvcHlfaW5mbzogYW55LCBzdGVwczogQXJyYXk8YW55PiwgcGlkOiBzdHJpbmcsIGNvcHlfcGlkOnN0cmluZywgdWlkOnN0cmluZywgaW1hZ2VMaXN0OmFueSl7XHJcblx0XHRsZXQgZGVsZXRlTGlzdCA9IFtdO1xyXG5cdFx0Zm9yKGxldCBpPTA7aTxzdGVwcy5sZW5ndGg7aSsrKXtcclxuXHRcdFx0bGV0IHN0ZXAgPSBzdGVwc1tpXTtcclxuXHRcdFx0c3dpdGNoKHN0ZXAuYWN0aW9uLmlkKXtcclxuXHRcdFx0XHRjYXNlIFwiY2xpY2tfcGljXCI6XHJcblx0XHRcdFx0Y2FzZSBcImFzc2VydF9waWNcIjpcclxuXHRcdFx0XHRjYXNlIFwiYXNzZXJ0X3Bob1wiOlxyXG5cdFx0XHRcdGNhc2UgXCJjbGlja19wb2ludFwiOlxyXG5cdFx0XHRcdGNhc2UgXCJzbGlkZVwiOlxyXG5cdFx0XHRcdFx0bGV0IGZpbmRzZWNvbmRGb3JOYW1lID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOmNvcHlfcGlkLCBwYXJlbnRfaWQ6IHN0ZXAuYWN0aW9uLmlkLCBpZDogc3RlcC5zZWNvbmRMZXZlbC5pZH0pO1xyXG5cdFx0XHRcdFx0bGV0IGZpbmR0aGlyZEZvck5hbWUgPSBhd2FpdCBhdXRvUmVwb3NpdG9yeS5maW5kT25lKHtwaWQ6Y29weV9waWQsIHBhcmVudF9pZDogc3RlcC5zZWNvbmRMZXZlbC5pZCwgaWQ6IHN0ZXAudGhpcmRMZXZlbC5pZH0pO1xyXG5cdFx0XHRcdFx0bGV0IHNlY29uZEluZm8gPSBhd2FpdCBhdXRvUmVwb3NpdG9yeS5maW5kT25lKHtwaWQ6cGlkLCBwYXJlbnRfaWQ6IHN0ZXAuYWN0aW9uLmlkLCBuYW1lOiBmaW5kc2Vjb25kRm9yTmFtZS5uYW1lfSk7XHJcblx0XHRcdFx0XHRpZihzZWNvbmRJbmZvKXtcclxuXHRcdFx0XHRcdFx0c3RlcC5zZWNvbmRMZXZlbCA9IHNlY29uZEluZm87XHJcblx0XHRcdFx0XHRcdGxldCB0aGlyZEluZm8gPSBhd2FpdCBhdXRvUmVwb3NpdG9yeS5maW5kT25lKHtwaWQ6cGlkLCBwYXJlbnRfaWQ6IHNlY29uZEluZm8uaWQsIG5hbWU6IGZpbmR0aGlyZEZvck5hbWUubmFtZX0pO1xyXG5cdFx0XHRcdFx0XHRpZih0aGlyZEluZm8pe1xyXG5cdFx0XHRcdFx0XHRcdHN0ZXAudGhpcmRMZXZlbCA9IHRoaXJkSW5mbztcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0bGV0IG5ld1RoaXJkTGV2ZWwgPSB0aGlzLm5ld0F1dG9TdGVwKHtcclxuXHRcdFx0XHRcdFx0XHRcdHBpZDogcGlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50X2lkOiBzZWNvbmRJbmZvLmlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogZmluZHRoaXJkRm9yTmFtZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdFx0Y29udGVudDogZmluZHRoaXJkRm9yTmFtZS5jb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdFx0dWlkOiB1aWRcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRsZXQgdG1wSWQgPSBzdGVwLnRoaXJkTGV2ZWwuaWQ7XHJcblx0XHRcdFx0XHRcdFx0c3RlcC50aGlyZExldmVsID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKG5ld1RoaXJkTGV2ZWwpO1xyXG5cdFx0XHRcdFx0XHRcdGlmKHN0ZXAuYWN0aW9uLmlkID09IFwiY2xpY2tfcGljXCIgfHwgc3RlcC5hY3Rpb24uaWQgPT0gXCJhc3NlcnRfcGljXCIpaW1hZ2VMaXN0LnB1c2goe3NyYzp0bXBJZCwgZHN0OnN0ZXAudGhpcmRMZXZlbC5pZH0pO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0bGV0IG5ld1NlY29uZExldmVsID0gdGhpcy5uZXdBdXRvU3RlcCh7XHJcblx0XHRcdFx0XHRcdFx0cGlkOiBwaWQsXHJcblx0XHRcdFx0XHRcdFx0cGFyZW50X2lkOiBzdGVwLmFjdGlvbi5pZCxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBmaW5kc2Vjb25kRm9yTmFtZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IGZpbmRzZWNvbmRGb3JOYW1lLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0dWlkOiB1aWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdGxldCBuZXdUaGlyZExldmVsID0gdGhpcy5uZXdBdXRvU3RlcCh7XHJcblx0XHRcdFx0XHRcdFx0cGlkOiBwaWQsXHJcblx0XHRcdFx0XHRcdFx0cGFyZW50X2lkOiBuZXdTZWNvbmRMZXZlbC5pZCxcclxuXHRcdFx0XHRcdFx0XHRuYW1lOiBmaW5kdGhpcmRGb3JOYW1lLm5hbWUsXHJcblx0XHRcdFx0XHRcdFx0Y29udGVudDogZmluZHRoaXJkRm9yTmFtZS5jb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdHVpZDogdWlkXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRsZXQgdG1wSWQgPSBzdGVwLnRoaXJkTGV2ZWwuaWQ7XHJcblx0XHRcdFx0XHRcdHN0ZXAuc2Vjb25kTGV2ZWwgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUobmV3U2Vjb25kTGV2ZWwpO1xyXG5cdFx0XHRcdFx0XHRzdGVwLnRoaXJkTGV2ZWwgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUobmV3VGhpcmRMZXZlbCk7XHJcblx0XHRcdFx0XHRcdGlmKHN0ZXAuYWN0aW9uLmlkID09IFwiY2xpY2tfcGljXCIgfHwgc3RlcC5hY3Rpb24uaWQgPT0gXCJhc3NlcnRfcGljXCIpaW1hZ2VMaXN0LnB1c2goe3NyYzp0bXBJZCwgZHN0OnN0ZXAudGhpcmRMZXZlbC5pZH0pO1xyXG5cdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0Y2FzZSBcInNwZWFrXCI6XHJcblx0XHRcdFx0Y2FzZSBcInBhbmVsX2J0blwiOlxyXG5cdFx0XHRcdGNhc2UgXCJjbGlja19yYW5kb21cIjpcclxuXHRcdFx0XHRjYXNlIFwiY29tXCI6XHJcblx0XHRcdFx0XHRmaW5kdGhpcmRGb3JOYW1lID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOmNvcHlfcGlkLCBwYXJlbnRfaWQ6IHN0ZXAuYWN0aW9uLmlkLCBpZDogc3RlcC50aGlyZExldmVsLmlkfSk7XHJcblx0XHRcdFx0XHRsZXQgdGhpcmRJbmZvID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOnBpZCwgcGFyZW50X2lkOiBzdGVwLmFjdGlvbi5pZCwgbmFtZTogZmluZHRoaXJkRm9yTmFtZS5uYW1lfSk7XHJcblx0XHRcdFx0XHRpZih0aGlyZEluZm8pe1xyXG5cdFx0XHRcdFx0XHRzdGVwLnRoaXJkTGV2ZWwgPSB0aGlyZEluZm87XHJcblx0XHRcdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRcdFx0bGV0IG5ld1RoaXJkTGV2ZWwgPSB0aGlzLm5ld0F1dG9TdGVwKHtcclxuXHRcdFx0XHRcdFx0XHRwaWQ6IHBpZCxcclxuXHRcdFx0XHRcdFx0XHRwYXJlbnRfaWQ6IHN0ZXAuYWN0aW9uLmlkLFxyXG5cdFx0XHRcdFx0XHRcdG5hbWU6IGZpbmR0aGlyZEZvck5hbWUubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBmaW5kdGhpcmRGb3JOYW1lLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdFx0dWlkOiB1aWRcclxuXHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdHN0ZXAudGhpcmRMZXZlbCA9IGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuc2F2ZShuZXdUaGlyZExldmVsKTtcclxuXHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJ0ZXh0XCI6XHJcblx0XHRcdFx0XHRmaW5kdGhpcmRGb3JOYW1lID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOmNvcHlfcGlkLCBwYXJlbnRfaWQ6IHN0ZXAuYWN0aW9uLmlkLCBpZDogc3RlcC50aGlyZExldmVsLmlkfSk7XHJcblx0XHRcdFx0XHR0aGlyZEluZm8gPSBhd2FpdCBhdXRvUmVwb3NpdG9yeS5maW5kT25lKHtwaWQ6cGlkLCBwYXJlbnRfaWQ6IHN0ZXAuYWN0aW9uLmlkLCBuYW1lOiBmaW5kdGhpcmRGb3JOYW1lLm5hbWV9KTtcclxuXHRcdFx0XHRcdGlmKHRoaXJkSW5mbyl7XHJcblx0XHRcdFx0XHRcdGlmKHRoaXJkSW5mby5jb250ZW50LmZyb20gPT0gc3RlcC50aGlyZExldmVsLmNvbnRlbnQuZnJvbSl7XHJcblx0XHRcdFx0XHRcdFx0c3RlcC50aGlyZExldmVsID0gdGhpcmRJbmZvO1xyXG5cdFx0XHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRsZXQgbmV3VGhpcmRMZXZlbCA9IHRoaXMubmV3QXV0b1N0ZXAoe1xyXG5cdFx0XHRcdFx0XHRwaWQ6IHBpZCxcclxuXHRcdFx0XHRcdFx0cGFyZW50X2lkOiBzdGVwLmFjdGlvbi5pZCxcclxuXHRcdFx0XHRcdFx0bmFtZTogZmluZHRoaXJkRm9yTmFtZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRjb250ZW50OiBmaW5kdGhpcmRGb3JOYW1lLmNvbnRlbnQsXHJcblx0XHRcdFx0XHRcdHVpZDogdWlkXHJcblx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdHN0ZXAudGhpcmRMZXZlbCA9IGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuc2F2ZShuZXdUaGlyZExldmVsKTtcclxuXHRcdFx0XHRcdGJyZWFrO1xyXG5cdFx0XHRcdGNhc2UgXCJwY2FuXCI6XHJcblx0XHRcdFx0Y2FzZSBcInVzYmNhblwiOlxyXG5cdFx0XHRcdFx0aWYoc3RlcC50eXBlLmlkID09IDAgfHwgc3RlcC50eXBlLmlkID09IDIpe1xyXG5cdFx0XHRcdFx0XHRpZihjb3B5X2luZm8uY2xhc2gpe1xyXG5cdFx0XHRcdFx0XHRcdGZvcihsZXQgaj0wO2o8Y29weV9pbmZvLmxpc3QubGVuZ3RoO2orKyl7XHJcblx0XHRcdFx0XHRcdFx0XHRpZihjb3B5X2luZm8ubGlzdFtqXS5jbGFzaC50aGlyZExldmVsLmlkID09IHN0ZXAudGhpcmRMZXZlbC5pZCl7XHJcblx0XHRcdFx0XHRcdFx0XHRcdGlmKGNvcHlfaW5mby5saXN0W2pdLm9wID09IDEpeyAvLyAxIGRlbGV0ZVxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGRlbGV0ZUxpc3QucHVzaChpKTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0fWVsc2UgaWYoY29weV9pbmZvLmxpc3Rbal0ub3AgPT0gMil7IC8vIDIgdXBkYXRlXHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0c3RlcC50aGlyZExldmVsID0gY29weV9pbmZvLmxpc3Rbal0ubmV3LnRoaXJkTGV2ZWw7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoc3RlcC50eXBlLmlkID09IDApe1xyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0c3RlcC5zZWNvbmRMZXZlbCA9IGNvcHlfaW5mby5saXN0W2pdLm5ldy5zZWNvbmRMZXZlbDtcdFx0XHRcdFx0XHRcdFx0XHRcdFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0aWYoc3RlcC5zaWduYWwpc3RlcC5zaWduYWwgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihzdGVwLnZhbHVlKXN0ZXAudmFsdWUgPSB1bmRlZmluZWQ7XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRpZihjb3B5X2luZm8ubGlzdFtqXS5uZXcuc2lnbmFsKXN0ZXAuc2lnbmFsID0gY29weV9pbmZvLmxpc3Rbal0ubmV3LnNpZ25hbDtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVsc2Ugc3RlcC52YWx1ZSA9IGNvcHlfaW5mby5saXN0W2pdLm5ldy52YWx1ZTtcclxuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0XHRcdH1cclxuXHRcdFx0XHRcdFx0XHRcdFx0YnJlYWs7XHJcblx0XHRcdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9IGVsc2UgaWYoc3RlcC50eXBlLmlkID09IDEpe1xyXG5cdFx0XHRcdFx0XHRsZXQgdGhpcmRJbmZvID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOnBpZCwgcGFyZW50X2lkOiBcImVudGVyX2NhblwiLCBuYW1lOiBzdGVwLnRoaXJkTGV2ZWwubmFtZX0pO1xyXG5cdFx0XHRcdFx0XHRpZih0aGlyZEluZm8pe1xyXG5cdFx0XHRcdFx0XHRcdHN0ZXAudGhpcmRMZXZlbCA9IHRoaXJkSW5mbztcclxuXHRcdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdFx0bGV0IG5ld1RoaXJkTGV2ZWwgPSB0aGlzLm5ld0F1dG9TdGVwKHtcclxuXHRcdFx0XHRcdFx0XHRcdHBpZDogcGlkLFxyXG5cdFx0XHRcdFx0XHRcdFx0cGFyZW50X2lkOiBcImVudGVyX2NhblwiLFxyXG5cdFx0XHRcdFx0XHRcdFx0bmFtZTogc3RlcC50aGlyZExldmVsLm5hbWUsXHJcblx0XHRcdFx0XHRcdFx0XHRjb250ZW50OiBzdGVwLnRoaXJkTGV2ZWwuY29udGVudCxcclxuXHRcdFx0XHRcdFx0XHRcdHVpZDogdWlkXHJcblx0XHRcdFx0XHRcdFx0fSk7XHJcblx0XHRcdFx0XHRcdFx0c3RlcC50aGlyZExldmVsID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKG5ld1RoaXJkTGV2ZWwpO1xyXG5cdFx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0XHRjYXNlIFwiZ3JvdXBcIjpcclxuXHRcdFx0XHRcdGZpbmRzZWNvbmRGb3JOYW1lID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOmNvcHlfcGlkLCBwYXJlbnRfaWQ6IHN0ZXAuYWN0aW9uLmlkLCBpZDogc3RlcC5zZWNvbmRMZXZlbC5pZH0pO1xyXG5cdFx0XHRcdFx0ZmluZHRoaXJkRm9yTmFtZSA9IGF3YWl0IGF1dG9SZXBvc2l0b3J5LmZpbmRPbmUoe3BpZDpjb3B5X3BpZCwgcGFyZW50X2lkOiBzdGVwLnNlY29uZExldmVsLmlkLCBpZDogc3RlcC50aGlyZExldmVsLmlkfSk7XHJcblx0XHRcdFx0XHRzZWNvbmRJbmZvID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOnBpZCwgcGFyZW50X2lkOiBzdGVwLmFjdGlvbi5pZCwgbmFtZTogZmluZHNlY29uZEZvck5hbWUubmFtZX0pO1xyXG5cdFx0XHRcdFx0aWYoc2Vjb25kSW5mbyl7XHJcblx0XHRcdFx0XHRcdHN0ZXAuc2Vjb25kTGV2ZWwgPSBzZWNvbmRJbmZvO1xyXG5cdFx0XHRcdFx0XHRsZXQgdGhpcmRJbmZvID0gYXdhaXQgYXV0b1JlcG9zaXRvcnkuZmluZE9uZSh7cGlkOnBpZCwgcGFyZW50X2lkOiBzZWNvbmRJbmZvLmlkLCBuYW1lOiBmaW5kdGhpcmRGb3JOYW1lLm5hbWV9KTtcclxuXHRcdFx0XHRcdFx0aWYodGhpcmRJbmZvKXtcclxuXHRcdFx0XHRcdFx0XHRzdGVwLnRoaXJkTGV2ZWwgPSB0aGlyZEluZm87XHJcblx0XHRcdFx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdFx0XHRcdGxldCBuZXdUaGlyZExldmVsID0gdGhpcy5uZXdBdXRvU3RlcCh7XHJcblx0XHRcdFx0XHRcdFx0XHRwaWQ6IHBpZCxcclxuXHRcdFx0XHRcdFx0XHRcdHBhcmVudF9pZDogc2Vjb25kSW5mby5pZCxcclxuXHRcdFx0XHRcdFx0XHRcdG5hbWU6IGZpbmR0aGlyZEZvck5hbWUubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFtdLFxyXG5cdFx0XHRcdFx0XHRcdFx0dWlkOiB1aWRcclxuXHRcdFx0XHRcdFx0XHR9KTtcclxuXHRcdFx0XHRcdFx0XHRzdGVwLnRoaXJkTGV2ZWwgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUobmV3VGhpcmRMZXZlbCk7XHJcblx0XHRcdFx0XHRcdFx0bGV0IGdyb3VwU3RlcHMgPSBhd2FpdCB0aGlzLmRpc3Bvc2VkU3RlcHMocXVlcnlSdW5uZXIsIGF1dG9SZXBvc2l0b3J5LCBjb3B5X2luZm8sIGZpbmR0aGlyZEZvck5hbWUuY29udGVudCwgcGlkLCBjb3B5X3BpZCwgdWlkLCBpbWFnZUxpc3QpO1xyXG5cdFx0XHRcdFx0XHRcdHN0ZXAudGhpcmRMZXZlbC5jb250ZW50ID0gZ3JvdXBTdGVwcztcclxuXHRcdFx0XHRcdFx0XHRzdGVwLnRoaXJkTGV2ZWwgPSBhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUoc3RlcC50aGlyZExldmVsKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdFx0fWVsc2V7XHJcblx0XHRcdFx0XHRcdGxldCBuZXdTZWNvbmRMZXZlbCA9IHRoaXMubmV3QXV0b1N0ZXAoe1xyXG5cdFx0XHRcdFx0XHRcdHBpZDogcGlkLFxyXG5cdFx0XHRcdFx0XHRcdHBhcmVudF9pZDogc3RlcC5hY3Rpb24uaWQsXHJcblx0XHRcdFx0XHRcdFx0bmFtZTogZmluZHNlY29uZEZvck5hbWUubmFtZSxcclxuXHRcdFx0XHRcdFx0XHRjb250ZW50OiBmaW5kc2Vjb25kRm9yTmFtZS5jb250ZW50LFxyXG5cdFx0XHRcdFx0XHRcdHVpZDogdWlkXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRsZXQgbmV3VGhpcmRMZXZlbCA9IHRoaXMubmV3QXV0b1N0ZXAoe1xyXG5cdFx0XHRcdFx0XHRcdHBpZDogcGlkLFxyXG5cdFx0XHRcdFx0XHRcdHBhcmVudF9pZDogbmV3U2Vjb25kTGV2ZWwuaWQsXHJcblx0XHRcdFx0XHRcdFx0bmFtZTogZmluZHRoaXJkRm9yTmFtZS5uYW1lLFxyXG5cdFx0XHRcdFx0XHRcdGNvbnRlbnQ6IFtdLFxyXG5cdFx0XHRcdFx0XHRcdHVpZDogdWlkXHJcblx0XHRcdFx0XHRcdH0pO1xyXG5cdFx0XHRcdFx0XHRzdGVwLnNlY29uZExldmVsID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKG5ld1NlY29uZExldmVsKTtcclxuXHRcdFx0XHRcdFx0c3RlcC50aGlyZExldmVsID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKG5ld1RoaXJkTGV2ZWwpO1xyXG5cdFx0XHRcdFx0XHRsZXQgZ3JvdXBTdGVwcyA9IGF3YWl0IHRoaXMuZGlzcG9zZWRTdGVwcyhxdWVyeVJ1bm5lciwgYXV0b1JlcG9zaXRvcnksIGNvcHlfaW5mbywgZmluZHRoaXJkRm9yTmFtZS5jb250ZW50LCBwaWQsIGNvcHlfcGlkLCB1aWQsIGltYWdlTGlzdCk7XHJcblx0XHRcdFx0XHRcdHN0ZXAudGhpcmRMZXZlbC5jb250ZW50ID0gZ3JvdXBTdGVwcztcclxuXHRcdFx0XHRcdFx0c3RlcC50aGlyZExldmVsID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKHN0ZXAudGhpcmRMZXZlbCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRicmVhaztcclxuXHRcdFx0fVxyXG5cdFx0XHRzdGVwc1tpXSA9IHN0ZXA7XHJcblx0XHR9XHJcblx0XHRsZXQgb3V0cyA9IFtdO1xyXG5cdFx0aWYoZGVsZXRlTGlzdC5sZW5ndGgpe1xyXG5cdFx0XHRmb3IobGV0IGk9MDtpPHN0ZXBzLmxlbmd0aDtpKyspe1xyXG5cdFx0XHRcdGlmKGRlbGV0ZUxpc3QuaW5kZXhPZihpKSA9PSAtMSl7XHJcblx0XHRcdFx0XHRvdXRzLnB1c2goc3RlcHNbaV0pO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fVxyXG5cdFx0fWVsc2V7XHJcblx0XHRcdG91dHMgPSBzdGVwcztcclxuXHRcdH1cclxuXHRcdHJldHVybiBvdXRzO1xyXG5cdH1cclxuXHRwcml2YXRlIG5ld0F1dG9TdGVwKGF1dG9TdGVwSW5mbzogQXV0b1N0ZXBDcmVhdGVJbmZvKXtcclxuXHRcdGxldCBuZXdBdXRvU3RlcCA9IG5ldyBBdXRvU3RlcCgpO1xyXG5cdFx0bmV3QXV0b1N0ZXAucGlkID0gYXV0b1N0ZXBJbmZvLnBpZDtcclxuXHRcdG5ld0F1dG9TdGVwLnBhcmVudF9pZCA9IGF1dG9TdGVwSW5mby5wYXJlbnRfaWQ7XHJcblx0XHRuZXdBdXRvU3RlcC5uYW1lID0gYXV0b1N0ZXBJbmZvLm5hbWU7XHJcblx0XHRuZXdBdXRvU3RlcC5jb250ZW50ID0gYXV0b1N0ZXBJbmZvLmNvbnRlbnQ7XHJcblx0XHRuZXdBdXRvU3RlcC51aWQgPSBhdXRvU3RlcEluZm8udWlkO1xyXG5cdFx0cmV0dXJuIG5ld0F1dG9TdGVwO1xyXG5cdH1cclxuXHRhc3luYyBmaW5kQ2FzZUlkQnlQcm9qZWN0KHBpZDpzdHJpbmcsIGNhc2VfaWQ6c3RyaW5nKXtcclxuXHRcdGxldCBjYXNlSW5mb1JlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhc2UpO1xyXG5cdFx0cmV0dXJuIGF3YWl0IGNhc2VJbmZvUmVwb3NpdG9yeS5maW5kT25lKHsgcGlkOiBwaWQsIGNhc2VfaWQ6IGNhc2VfaWQgfSk7XHJcblx0fVxyXG5cdGFzeW5jIGZpbmRDYXNlQnlNb2R1bGUoZHRvOiBDYXNlRmluZEJ5TW9kdWxlRHRvKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQ2FzZUhpc3RvcnkpO1xyXG5cdFx0bGV0IHF1ZXJ5ID0gcmVwb3NpdG9yeS5jcmVhdGVRdWVyeUJ1aWxkZXIoJ2NwJyk7XHJcblx0XHRxdWVyeVxyXG5cdFx0XHQuaW5uZXJKb2luQW5kU2VsZWN0KFxyXG5cdFx0XHRcdChxYikgPT4ge1xyXG5cdFx0XHRcdFx0cmV0dXJuIHFiXHJcblx0XHRcdFx0XHRcdC5zZWxlY3QoJ21heChjaC5pZCknLCAnaWQnKVxyXG5cdFx0XHRcdFx0XHQud2hlcmUoJ2NoLnBpZD06cGlkIGFuZCBjaC52aWQgPD0gOnZpZCcsIHtcclxuXHRcdFx0XHRcdFx0XHRwaWQ6IGR0by5waWQsXHJcblx0XHRcdFx0XHRcdFx0dmlkOiBkdG8udmlkXHJcblx0XHRcdFx0XHRcdH0pXHJcblx0XHRcdFx0XHRcdC5mcm9tKENhc2VIaXN0b3J5LCAnY2gnKVxyXG5cdFx0XHRcdFx0XHQuZ3JvdXBCeSgnY2guY2lkJyk7XHJcblx0XHRcdFx0fSxcclxuXHRcdFx0XHQnY2xpZCcsXHJcblx0XHRcdFx0J2NwLmlkPWNsaWQuaWQnXHJcblx0XHRcdClcclxuXHRcdFx0LndoZXJlKCdjcC5jYXNlX3N0YXR1cyAhPSA6c3RhdHVzJywgeyBzdGF0dXM6IGR0by5jYXNlX3N0YXR1cyAhPSBudWxsID8gZHRvLmNhc2Vfc3RhdHVzIDogMiB9KVxyXG5cdFx0XHQuYW5kV2hlcmUoJ2NwLmNhc2VfbW9kdWxlPTpjYXNlX21vZHVsZScsIHsgY2FzZV9tb2R1bGU6IGR0by5jYXNlX21vZHVsZSB9KTtcclxuXHRcdGlmIChkdG8uaXNDb3VudCkge1xyXG5cdFx0XHRyZXR1cm4gYXdhaXQgcXVlcnkuZ2V0Q291bnQoKTtcclxuXHRcdH1cclxuXHRcdGlmIChkdG8ub3JkZXIpIHtcclxuXHRcdFx0Zm9yIChjb25zdCBrZXkgaW4gZHRvLm9yZGVyKSB7XHJcblx0XHRcdFx0aWYgKGR0by5vcmRlci5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XHJcblx0XHRcdFx0XHRsZXQgZWxlbWVudCA9IGR0by5vcmRlcltrZXldO1xyXG5cdFx0XHRcdFx0aWYgKHR5cGVvZiBlbGVtZW50ID09ICdudW1iZXInKSBlbGVtZW50ID0gZWxlbWVudCA9PSAxID8gJ0FTQycgOiAnREVTQyc7XHJcblx0XHRcdFx0XHRxdWVyeS5hZGRPcmRlckJ5KGBjcC4ke2tleX1gLCBlbGVtZW50KTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdH1cclxuXHRcdGlmIChkdG8uc2tpcCkge1xyXG5cdFx0XHRxdWVyeS5za2lwKGR0by5za2lwKTtcclxuXHRcdH1cclxuXHRcdGlmIChkdG8udGFrZSkge1xyXG5cdFx0XHRxdWVyeS50YWtlKGR0by50YWtlKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiBhd2FpdCBxdWVyeS5nZXRNYW55KCk7XHJcblx0fVxyXG5cdGFzeW5jIGZpbmRBbGxBdXRvQ2FzZXMoZHRvOiBDYXNlRmluZEJ5TW9kdWxlRHRvKXtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShDYXNlSGlzdG9yeSk7XHJcblx0XHRsZXQgcXVlcnkgPSByZXBvc2l0b3J5LmNyZWF0ZVF1ZXJ5QnVpbGRlcignY3AnKTtcclxuXHRcdHF1ZXJ5XHJcblx0XHRcdC5pbm5lckpvaW5BbmRTZWxlY3QoXHJcblx0XHRcdFx0KHFiKSA9PiB7XHJcblx0XHRcdFx0XHRyZXR1cm4gcWJcclxuXHRcdFx0XHRcdFx0LnNlbGVjdCgnbWF4KGNoLmlkKScsICdpZCcpXHJcblx0XHRcdFx0XHRcdC53aGVyZSgnY2gucGlkPTpwaWQgYW5kIGNoLnZpZCA8PSA6dmlkJywge1xyXG5cdFx0XHRcdFx0XHRcdHBpZDogZHRvLnBpZCxcclxuXHRcdFx0XHRcdFx0XHR2aWQ6IGR0by52aWRcclxuXHRcdFx0XHRcdFx0fSlcclxuXHRcdFx0XHRcdFx0LmZyb20oQ2FzZUhpc3RvcnksICdjaCcpXHJcblx0XHRcdFx0XHRcdC5ncm91cEJ5KCdjaC5jaWQnKTtcclxuXHRcdFx0XHR9LFxyXG5cdFx0XHRcdCdjbGlkJyxcclxuXHRcdFx0XHQnY3AuaWQ9Y2xpZC5pZCdcclxuXHRcdFx0KVxyXG5cdFx0XHQuc2VsZWN0KCdjcC5pZCcsJ2lkJylcclxuXHRcdFx0LmFkZFNlbGVjdCgnY3AuY2FzZV9tb2R1bGUnLCdjYXNlX21vZHVsZScpXHJcblx0XHRcdC5hZGRTZWxlY3QoJ2NwLmNhc2VfaWQnLCdjYXNlX2lkJylcclxuXHRcdFx0LndoZXJlKCdjcC5jYXNlX3N0YXR1cyAhPSAyIGFuZCBjcC5jYXNlX3R5cGUgPSAxJyk7XHJcblx0XHRxdWVyeS5hZGRPcmRlckJ5KCdjcC5jYXNlX21vZHVsZScsICdBU0MnKTtcclxuXHRcdHF1ZXJ5LmFkZE9yZGVyQnkoJ2NwLmNhc2VfaWQnLCAnQVNDJyk7XHJcblx0XHRyZXR1cm4gYXdhaXQgcXVlcnkuZ2V0UmF3TWFueSgpO1xyXG5cdH1cclxuXHRhc3luYyB1cGRhdGVNb2R1bGUoY2FzZU1vZHVsZVVwZGF0ZUluZm86IENhc2VNb2R1bGVVcGRhdGVJbmZvKXtcclxuXHRcdGxldCBjYXNlSW5mb1JlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhc2UpO1xyXG5cdFx0bGV0IGNhc2VJbmZvID0gYXdhaXQgY2FzZUluZm9SZXBvc2l0b3J5LmZpbmRPbmUoeyBwaWQ6IGNhc2VNb2R1bGVVcGRhdGVJbmZvLnBpZCwgY2FzZV9tb2R1bGU6IGNhc2VNb2R1bGVVcGRhdGVJbmZvLm5ld01vZHVsZU5hbWUgfSk7XHJcblx0XHRpZihjYXNlSW5mbyl7XHJcblx0XHRcdHRocm93IG5ldyBFcnJvcign5qih5Z2X5ZCN56ew5bey5a2Y5ZyoJyk7XHJcblx0XHR9ZWxzZXtcclxuXHRcdFx0YXdhaXQgY29ubmVjdC5nZXRDb25uZWN0aW9uKClcclxuXHRcdFx0XHQuY3JlYXRlUXVlcnlCdWlsZGVyKClcclxuXHRcdFx0XHQudXBkYXRlKENhc2UpXHJcblx0XHRcdFx0LnNldCh7IGNhc2VfbW9kdWxlOiBjYXNlTW9kdWxlVXBkYXRlSW5mby5uZXdNb2R1bGVOYW1lLCB1aWQ6IGNhc2VNb2R1bGVVcGRhdGVJbmZvLnVpZCB9KVxyXG5cdFx0XHRcdC53aGVyZShcInBpZCA9IDpwaWQgYW5kIGNhc2VfbW9kdWxlID0gOm9sZE1vZHVsZU5hbWVcIiwgeyBwaWQ6IGNhc2VNb2R1bGVVcGRhdGVJbmZvLnBpZCAsIG9sZE1vZHVsZU5hbWU6Y2FzZU1vZHVsZVVwZGF0ZUluZm8ub2xkTW9kdWxlTmFtZSB9KVxyXG5cdFx0XHRcdC5leGVjdXRlKCk7XHJcblx0XHRcdGF3YWl0IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpXHJcblx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0LnVwZGF0ZShDYXNlSGlzdG9yeSlcclxuXHRcdFx0XHQuc2V0KHsgY2FzZV9tb2R1bGU6IGNhc2VNb2R1bGVVcGRhdGVJbmZvLm5ld01vZHVsZU5hbWUsIHVpZDogY2FzZU1vZHVsZVVwZGF0ZUluZm8udWlkIH0pXHJcblx0XHRcdFx0LndoZXJlKFwicGlkID0gOnBpZCBhbmQgY2FzZV9tb2R1bGUgPSA6b2xkTW9kdWxlTmFtZVwiLCB7IHBpZDogY2FzZU1vZHVsZVVwZGF0ZUluZm8ucGlkICwgb2xkTW9kdWxlTmFtZTpjYXNlTW9kdWxlVXBkYXRlSW5mby5vbGRNb2R1bGVOYW1lIH0pXHJcblx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0cmV0dXJuICd1cGRhdGUgTW9kdWxlIERvbmUnO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRhc3luYyB1cGRhdGVDYXNlKGNhc2VVcGRhdGVJbmZvOiBDYXNlVXBkYXRlSW5mbykge1xyXG5cdFx0bGV0IGNhc2VJbmZvUmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQ2FzZSk7XHJcblx0XHRsZXQgY2FzZUluZm8gPSBhd2FpdCBjYXNlSW5mb1JlcG9zaXRvcnkuZmluZE9uZSh7IHBpZDogY2FzZVVwZGF0ZUluZm8ucGlkLCBpZDogY2FzZVVwZGF0ZUluZm8uY2lkIH0pO1xyXG5cdFx0aWYgKCFjYXNlSW5mbykge1xyXG5cdFx0XHR0aHJvdyBuZXcgRXJyb3IoJ+eUqOS+i+S4jeWtmOWcqCcpO1xyXG5cdFx0fVxyXG5cdFx0bGV0IHF1ZXJ5UnVubmVyID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuY3JlYXRlUXVlcnlSdW5uZXIoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbm5lY3QoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGNhc2VJbmZvLnZpZCA9IGNhc2VVcGRhdGVJbmZvLnZpZDtcclxuXHRcdFx0Y2FzZUluZm8udWlkID0gY2FzZVVwZGF0ZUluZm8udWlkO1xyXG5cdFx0XHRjYXNlSW5mby5kYW1fbnVtID0gY2FzZVVwZGF0ZUluZm8uZGFtX251bTtcclxuXHRcdFx0Y2FzZUluZm8uZGFtX25hbWUgPSBjYXNlVXBkYXRlSW5mby5kYW1fbmFtZTtcclxuXHRcdFx0Y2FzZUluZm8uY2FzZV9uYW1lID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9uYW1lO1xyXG5cdFx0XHRjYXNlSW5mby5jYXNlX2xldmVsID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9sZXZlbDtcclxuXHRcdFx0Y2FzZUluZm8uY2FzZV9tb2R1bGUgPSBjYXNlVXBkYXRlSW5mby5jYXNlX21vZHVsZTtcclxuXHRcdFx0Y2FzZUluZm8uY2FzZV9wcmUgPSBjYXNlVXBkYXRlSW5mby5jYXNlX3ByZTtcclxuXHRcdFx0Y2FzZUluZm8uY2FzZV9vcCA9IGNhc2VVcGRhdGVJbmZvLmNhc2Vfb3A7XHJcblx0XHRcdGNhc2VJbmZvLmNhc2VfZXhwID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9leHA7XHJcblx0XHRcdGNhc2VJbmZvLmNhc2Vfbm90ZSA9IGNhc2VVcGRhdGVJbmZvLmNhc2Vfbm90ZTtcclxuXHRcdFx0Y2FzZUluZm8uY2FzZV90eXBlID0gY2FzZVVwZGF0ZUluZm8uY2FzZV90eXBlO1xyXG5cdFx0XHRjYXNlSW5mby5jYXNlX3N0YXR1cyA9IDE7XHJcblx0XHRcdGxldCB1cGRhdGVkQ2FzZSA9IGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuc2F2ZShjYXNlSW5mbyk7XHJcblxyXG5cdFx0XHRsZXQgY2FzZUhpc3RvcnlSZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShDYXNlSGlzdG9yeSk7XHJcblx0XHRcdGxldCBjYXNlSGlzdG9yeSA9IGF3YWl0IGNhc2VIaXN0b3J5UmVwb3NpdG9yeS5maW5kT25lKHtcclxuXHRcdFx0XHRwaWQ6IGNhc2VVcGRhdGVJbmZvLnBpZCxcclxuXHRcdFx0XHR2aWQ6IGNhc2VVcGRhdGVJbmZvLnZpZCxcclxuXHRcdFx0XHRjaWQ6IGNhc2VVcGRhdGVJbmZvLmNpZFxyXG5cdFx0XHR9KTtcclxuXHRcdFx0aWYgKCFjYXNlSGlzdG9yeSkge1xyXG5cdFx0XHRcdGxldCBuZXdDYXNlSGlzdG9yeSA9IG5ldyBDYXNlSGlzdG9yeSgpO1xyXG5cdFx0XHRcdG5ld0Nhc2VIaXN0b3J5LnBpZCA9IGNhc2VVcGRhdGVJbmZvLnBpZDtcclxuXHRcdFx0XHRuZXdDYXNlSGlzdG9yeS52aWQgPSBjYXNlVXBkYXRlSW5mby52aWQ7XHJcblx0XHRcdFx0bmV3Q2FzZUhpc3RvcnkuY2lkID0gdXBkYXRlZENhc2UuaWQ7XHJcblx0XHRcdFx0bmV3Q2FzZUhpc3RvcnkudWlkID0gY2FzZVVwZGF0ZUluZm8udWlkO1xyXG5cdFx0XHRcdG5ld0Nhc2VIaXN0b3J5LmRhbV9udW0gPSBjYXNlVXBkYXRlSW5mby5kYW1fbnVtO1xyXG5cdFx0XHRcdG5ld0Nhc2VIaXN0b3J5LmRhbV9uYW1lID0gY2FzZVVwZGF0ZUluZm8uZGFtX25hbWU7XHJcblx0XHRcdFx0bmV3Q2FzZUhpc3RvcnkuY2FzZV9pZCA9IGNhc2VVcGRhdGVJbmZvLmNhc2VfaWQ7XHJcblx0XHRcdFx0bmV3Q2FzZUhpc3RvcnkuY2FzZV9uYW1lID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9uYW1lO1xyXG5cdFx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2VfbGV2ZWwgPSBjYXNlVXBkYXRlSW5mby5jYXNlX2xldmVsO1xyXG5cdFx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2VfbW9kdWxlID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9tb2R1bGU7XHJcblx0XHRcdFx0bmV3Q2FzZUhpc3RvcnkuY2FzZV9wcmUgPSBjYXNlVXBkYXRlSW5mby5jYXNlX3ByZTtcclxuXHRcdFx0XHRuZXdDYXNlSGlzdG9yeS5jYXNlX29wID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9vcDtcclxuXHRcdFx0XHRuZXdDYXNlSGlzdG9yeS5jYXNlX2V4cCA9IGNhc2VVcGRhdGVJbmZvLmNhc2VfZXhwO1xyXG5cdFx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2Vfbm90ZSA9IGNhc2VVcGRhdGVJbmZvLmNhc2Vfbm90ZTtcclxuXHRcdFx0XHRuZXdDYXNlSGlzdG9yeS5jYXNlX3R5cGUgPSBjYXNlVXBkYXRlSW5mby5jYXNlX3R5cGU7XHJcblx0XHRcdFx0bGV0IGFyciA9IGF3YWl0IGNhc2VIaXN0b3J5UmVwb3NpdG9yeS5maW5kKHtcclxuXHRcdFx0XHRcdHBpZDogY2FzZVVwZGF0ZUluZm8ucGlkLFxyXG5cdFx0XHRcdFx0Y2lkOiBjYXNlVXBkYXRlSW5mby5jaWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoYXJyLmxlbmd0aCA9PSAxICYmIGFyclswXS52aWQgPT0gY2FzZVVwZGF0ZUluZm8udmlkKSB7XHJcblx0XHRcdFx0XHRuZXdDYXNlSGlzdG9yeS5jYXNlX3N0YXR1cyA9IDA7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdG5ld0Nhc2VIaXN0b3J5LmNhc2Vfc3RhdHVzID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0bGV0IGNhc2VoaXN0b3J5ID0gYXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKG5ld0Nhc2VIaXN0b3J5KTtcclxuXHRcdFx0XHRpZiAoY2FzZVVwZGF0ZUluZm8uY2FzZV90eXBlKSB7XHJcblx0XHRcdFx0XHRsZXQgbmV3QXV0b0hpc3RvcnkgPSBuZXcgQXV0b0hpc3RvcnkoKTtcclxuXHRcdFx0XHRcdG5ld0F1dG9IaXN0b3J5LnBpZCA9IGNhc2VoaXN0b3J5LnBpZDtcclxuXHRcdFx0XHRcdG5ld0F1dG9IaXN0b3J5LmNoaWQgPSBjYXNlaGlzdG9yeS5pZDtcclxuXHRcdFx0XHRcdG5ld0F1dG9IaXN0b3J5LnVpZCA9IGNhc2VVcGRhdGVJbmZvLnVpZDtcclxuXHRcdFx0XHRcdG5ld0F1dG9IaXN0b3J5LnJ1bl90aW1lID0gY2FzZVVwZGF0ZUluZm8ucnVuVGltZTtcclxuXHRcdFx0XHRcdG5ld0F1dG9IaXN0b3J5LnN0ZXBzID0gY2FzZVVwZGF0ZUluZm8uc3RlcExpc3Q7XHJcblx0XHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLnNhdmUobmV3QXV0b0hpc3RvcnkpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRjYXNlSGlzdG9yeS52aWQgPSBjYXNlVXBkYXRlSW5mby52aWQ7XHJcblx0XHRcdFx0Y2FzZUhpc3RvcnkudWlkID0gY2FzZVVwZGF0ZUluZm8udWlkO1xyXG5cdFx0XHRcdGNhc2VIaXN0b3J5LmRhbV9udW0gPSBjYXNlVXBkYXRlSW5mby5kYW1fbnVtO1xyXG5cdFx0XHRcdGNhc2VIaXN0b3J5LmRhbV9uYW1lID0gY2FzZVVwZGF0ZUluZm8uZGFtX25hbWU7XHJcblx0XHRcdFx0Y2FzZUhpc3RvcnkuY2FzZV9uYW1lID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9uYW1lO1xyXG5cdFx0XHRcdGNhc2VIaXN0b3J5LmNhc2VfbGV2ZWwgPSBjYXNlVXBkYXRlSW5mby5jYXNlX2xldmVsO1xyXG5cdFx0XHRcdGNhc2VIaXN0b3J5LmNhc2VfbW9kdWxlID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9tb2R1bGU7XHJcblx0XHRcdFx0Y2FzZUhpc3RvcnkuY2FzZV9wcmUgPSBjYXNlVXBkYXRlSW5mby5jYXNlX3ByZTtcclxuXHRcdFx0XHRjYXNlSGlzdG9yeS5jYXNlX29wID0gY2FzZVVwZGF0ZUluZm8uY2FzZV9vcDtcclxuXHRcdFx0XHRjYXNlSGlzdG9yeS5jYXNlX2V4cCA9IGNhc2VVcGRhdGVJbmZvLmNhc2VfZXhwO1xyXG5cdFx0XHRcdGNhc2VIaXN0b3J5LmNhc2Vfbm90ZSA9IGNhc2VVcGRhdGVJbmZvLmNhc2Vfbm90ZTtcclxuXHRcdFx0XHRjYXNlSGlzdG9yeS5jYXNlX3R5cGUgPSBjYXNlVXBkYXRlSW5mby5jYXNlX3R5cGU7XHJcblx0XHRcdFx0bGV0IGFyciA9IGF3YWl0IGNhc2VIaXN0b3J5UmVwb3NpdG9yeS5maW5kKHtcclxuXHRcdFx0XHRcdHBpZDogY2FzZVVwZGF0ZUluZm8ucGlkLFxyXG5cdFx0XHRcdFx0Y2lkOiBjYXNlVXBkYXRlSW5mby5jaWRcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0XHRpZiAoYXJyLmxlbmd0aCA9PSAxICYmIGFyclswXS52aWQgPT0gY2FzZVVwZGF0ZUluZm8udmlkKSB7XHJcblx0XHRcdFx0XHRjYXNlSGlzdG9yeS5jYXNlX3N0YXR1cyA9IDA7XHJcblx0XHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHRcdGNhc2VIaXN0b3J5LmNhc2Vfc3RhdHVzID0gMTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGNhc2VIaXN0b3J5KTtcclxuXHRcdFx0fVxyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb21taXRUcmFuc2FjdGlvbigpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucmVsZWFzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICd1cGRhdGUgY2FzZSBkb25lJztcclxuXHR9XHJcblx0YXN5bmMgZGVsZXRlQ2FzZShjYXNlRGVsZXRlSW5mbzogQ2FzZURlbGV0ZUluZm8pIHtcclxuXHRcdC8v6YC76L6R5Yig6ZmkXHJcblx0XHRsZXQgY2FzZUhpc3RvcnlJbmZvUmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQ2FzZUhpc3RvcnkpO1xyXG5cdFx0bGV0IGNhc2VIaXN0b3J5SW5mbyA9IGF3YWl0IGNhc2VIaXN0b3J5SW5mb1JlcG9zaXRvcnkuZmluZE9uZSh7IGlkOiBjYXNlRGVsZXRlSW5mby5jaGlkIH0pO1xyXG5cdFx0aWYgKCFjYXNlSGlzdG9yeUluZm8pIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfnlKjkvovljoblj7LkuI3lrZjlnKgnKTtcclxuXHRcdH1cclxuXHRcdGxldCBxdWVyeVJ1bm5lciA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5zdGFydFRyYW5zYWN0aW9uKCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRsZXQgZGVsZXRlQ2FzZUhpc3RvcnkgPSBuZXcgQ2FzZUhpc3RvcnkoKTtcclxuXHRcdFx0ZGVsZXRlQ2FzZUhpc3RvcnkucGlkID0gY2FzZUhpc3RvcnlJbmZvLnBpZDtcclxuXHRcdFx0ZGVsZXRlQ2FzZUhpc3RvcnkudmlkID0gY2FzZURlbGV0ZUluZm8udmlkO1xyXG5cdFx0XHRkZWxldGVDYXNlSGlzdG9yeS5jaWQgPSBjYXNlSGlzdG9yeUluZm8uY2lkO1xyXG5cdFx0XHRkZWxldGVDYXNlSGlzdG9yeS51aWQgPSBjYXNlRGVsZXRlSW5mby51aWQ7XHJcblx0XHRcdGRlbGV0ZUNhc2VIaXN0b3J5LmRhbV9udW0gPSBjYXNlSGlzdG9yeUluZm8uZGFtX251bTtcclxuXHRcdFx0ZGVsZXRlQ2FzZUhpc3RvcnkuZGFtX25hbWUgPSBjYXNlSGlzdG9yeUluZm8uZGFtX25hbWU7XHJcblx0XHRcdGRlbGV0ZUNhc2VIaXN0b3J5LmNhc2VfaWQgPSBjYXNlSGlzdG9yeUluZm8uY2FzZV9pZDtcclxuXHRcdFx0ZGVsZXRlQ2FzZUhpc3RvcnkuY2FzZV9uYW1lID0gY2FzZUhpc3RvcnlJbmZvLmNhc2VfbmFtZTtcclxuXHRcdFx0ZGVsZXRlQ2FzZUhpc3RvcnkuY2FzZV9sZXZlbCA9IGNhc2VIaXN0b3J5SW5mby5jYXNlX2xldmVsO1xyXG5cdFx0XHRkZWxldGVDYXNlSGlzdG9yeS5jYXNlX21vZHVsZSA9IGNhc2VIaXN0b3J5SW5mby5jYXNlX21vZHVsZTtcclxuXHRcdFx0ZGVsZXRlQ2FzZUhpc3RvcnkuY2FzZV9wcmUgPSBjYXNlSGlzdG9yeUluZm8uY2FzZV9wcmU7XHJcblx0XHRcdGRlbGV0ZUNhc2VIaXN0b3J5LmNhc2Vfb3AgPSBjYXNlSGlzdG9yeUluZm8uY2FzZV9vcDtcclxuXHRcdFx0ZGVsZXRlQ2FzZUhpc3RvcnkuY2FzZV9leHAgPSBjYXNlSGlzdG9yeUluZm8uY2FzZV9leHA7XHJcblx0XHRcdGRlbGV0ZUNhc2VIaXN0b3J5LmNhc2Vfbm90ZSA9IGNhc2VIaXN0b3J5SW5mby5jYXNlX25vdGU7XHJcblx0XHRcdGRlbGV0ZUNhc2VIaXN0b3J5LmNhc2VfdHlwZSA9IGNhc2VIaXN0b3J5SW5mby5jYXNlX3R5cGU7XHJcblx0XHRcdGRlbGV0ZUNhc2VIaXN0b3J5LmNhc2Vfc3RhdHVzID0gMjtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGRlbGV0ZUNhc2VIaXN0b3J5KTtcclxuXHRcdFx0Ly8gLy/pgLvovpHliKDpmaRcclxuXHRcdFx0Ly8gbGV0IGNhc2VJbmZvUmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoQ2FzZSk7XHJcblx0XHRcdC8vIGxldCBjYXNlSW5mbyA9IGF3YWl0IGNhc2VJbmZvUmVwb3NpdG9yeS5maW5kT25lKHtcclxuXHRcdFx0Ly8gXHRpZDogY2FzZUhpc3RvcnlJbmZvLmNpZFxyXG5cdFx0XHQvLyB9KTtcclxuXHRcdFx0Ly8gaWYgKCFjYXNlSW5mbykge1xyXG5cdFx0XHQvLyBcdHRocm93IG5ldyBFcnJvcign55So5L6L5LiN5a2Y5ZyoJyk7XHJcblx0XHRcdC8vIH0gZWxzZSB7XHJcblx0XHRcdC8vIFx0Y2FzZUluZm8udmlkID0gY2FzZURlbGV0ZUluZm8udmlkO1xyXG5cdFx0XHQvLyBcdGNhc2VJbmZvLnVpZCA9IGNhc2VEZWxldGVJbmZvLnVpZDtcclxuXHRcdFx0Ly8gXHRjYXNlSW5mby5jYXNlX3N0YXR1cyA9IDI7XHJcblx0XHRcdC8vIFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5zYXZlKGNhc2VJbmZvKTtcclxuXHRcdFx0Ly8gfVxyXG5cdFx0XHQvLyDniannkIbliKDpmaRcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlclxyXG5cdFx0XHRcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxyXG5cdFx0XHRcdC5kZWxldGUoKVxyXG5cdFx0XHRcdC5mcm9tKENhc2UpXHJcblx0XHRcdFx0LndoZXJlKCdpZD06aWQnLCB7IGlkOiBjYXNlSGlzdG9yeUluZm8uY2lkIH0pXHJcblx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcblx0XHRcdHRocm93IGVycjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJlbGVhc2UoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnZGVsZXRlQ2FzZSBjYXNlIGRvbmUnO1xyXG5cdH1cclxuXHRhc3luYyBkZWxldGVDYXNlTW9kdWxlKGluZm86IE1vZHVsZURlbGV0ZUluZm8pIHtcclxuXHRcdGxldCBxdWVyeVJ1bm5lciA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmNyZWF0ZVF1ZXJ5UnVubmVyKCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb25uZWN0KCk7XHJcblx0XHRhd2FpdCBxdWVyeVJ1bm5lci5zdGFydFRyYW5zYWN0aW9uKCk7XHJcblx0XHR0cnkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyXHJcblx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0LmRlbGV0ZSgpXHJcblx0XHRcdFx0LmZyb20oQ2FzZSlcclxuXHRcdFx0XHQud2hlcmUoJ3BpZD06cGlkJywgeyBwaWQ6IGluZm8ucGlkIH0pXHJcblx0XHRcdFx0LmFuZFdoZXJlKCdjYXNlX21vZHVsZT06Y2FzZV9tb2R1bGUnLCB7IGNhc2VfbW9kdWxlOiBpbmZvLmNhc2VfbW9kdWxlIH0pXHJcblx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlclxyXG5cdFx0XHRcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxyXG5cdFx0XHRcdC51cGRhdGUoQ2FzZUhpc3RvcnkpXHJcblx0XHRcdFx0LnNldCh7IGNhc2Vfc3RhdHVzOiAyfSlcclxuXHRcdFx0XHQud2hlcmUoJ3BpZD06cGlkIGFuZCBjYXNlX3N0YXR1cyAhPSAyJywgeyBwaWQ6IGluZm8ucGlkIH0pXHJcblx0XHRcdFx0LmFuZFdoZXJlKCdjYXNlX21vZHVsZT06Y2FzZV9tb2R1bGUnLCB7IGNhc2VfbW9kdWxlOiBpbmZvLmNhc2VfbW9kdWxlIH0pXHJcblx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29tbWl0VHJhbnNhY3Rpb24oKTtcclxuXHRcdH0gY2F0Y2ggKGVycikge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yb2xsYmFja1RyYW5zYWN0aW9uKCk7XHJcblx0XHRcdHRocm93IGVycjtcclxuXHRcdH0gZmluYWxseSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJlbGVhc2UoKTtcclxuXHRcdH1cclxuXHRcdHJldHVybiAnZGVsZXRlIGF1dG8gc3RlcCBkb25lJztcclxuXHR9XHJcblx0YXN5bmMgQWRkQ2FzZVJlc3VsdChpbmZvOiBDYXNlUmVzdWx0Q3JlYXRlSW5mbykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhc2VSZXN1bHQpO1xyXG5cdFx0bGV0IHJlc3VsdCA9IGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IGNoaWQ6IGluZm8uY2hpZCB9KTtcclxuXHRcdGlmICghcmVzdWx0KSB7XHJcblx0XHRcdGxldCBuZXdSZXN1bHQgPSBuZXcgQ2FzZVJlc3VsdCgpO1xyXG5cdFx0XHRuZXdSZXN1bHQuY2hpZCA9IGluZm8uY2hpZDtcclxuXHRcdFx0bmV3UmVzdWx0LnVpZCA9IGluZm8udWlkO1xyXG5cdFx0XHRuZXdSZXN1bHQucmVzdWx0ID0gaW5mby5yZXN1bHQ7XHJcblx0XHRcdG5ld1Jlc3VsdC5kYXRhID0gaW5mby5kYXRhO1xyXG5cdFx0XHRhd2FpdCByZXBvc2l0b3J5LnNhdmUobmV3UmVzdWx0KTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdHJlc3VsdC51aWQgPSBpbmZvLnVpZDtcclxuXHRcdFx0cmVzdWx0LnJlc3VsdCA9IGluZm8ucmVzdWx0O1xyXG5cdFx0XHRyZXN1bHQuZGF0YSA9IGluZm8uZGF0YTtcclxuXHRcdFx0YXdhaXQgcmVwb3NpdG9yeS5zYXZlKHJlc3VsdCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ2FkZCBjYXNlIHJlc3VsdCBkb25lJztcclxuXHR9XHJcblx0YXN5bmMgZmluZENhc2VNb2R1bGUoZHRvOiBDYXNlTW9kdWxlRmluZER0bykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KENhc2VIaXN0b3J5KTtcclxuXHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdjcCcpO1xyXG5cdFx0cXVlcnlcclxuXHRcdFx0LnNlbGVjdCgnY3AuY2FzZV9tb2R1bGUnLCAnY2FzZV9tb2R1bGUnKVxyXG5cdFx0XHQud2hlcmUoJ2NwLnBpZD06cGlkIGFuZCBjcC52aWQgPD0gOnZpZCBhbmQgY3AuY2FzZV9zdGF0dXMgIT0gMicsIHtcclxuXHRcdFx0XHRwaWQ6IGR0by5waWQsXHJcblx0XHRcdFx0dmlkOiBkdG8udmlkXHJcblx0XHRcdH0pXHJcblx0XHRcdC5ncm91cEJ5KCdjcC5jYXNlX21vZHVsZScpO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHF1ZXJ5LmdldFJhd01hbnkoKTtcclxuXHR9XHJcblx0YXN5bmMgY29weUNhc2VCeVByb2plY3RJZChpbmZvOiBDb3B5UHJvamVjdEluZm8pe1xyXG5cdFx0bGV0IHF1ZXJ5UnVubmVyID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuY3JlYXRlUXVlcnlSdW5uZXIoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbm5lY3QoKTtcclxuXHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnN0YXJ0VHJhbnNhY3Rpb24oKTtcclxuXHRcdHRyeSB7XHJcblx0XHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShDYXNlKTtcclxuXHRcdFx0bGV0IGNocmVwID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShDYXNlSGlzdG9yeSk7XHJcblx0XHRcdGxldCBhdXRvcmVwID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShBdXRvSGlzdG9yeSk7XHJcblx0XHRcdGxldCBxdWVyeSA9IHJlcG9zaXRvcnkuY3JlYXRlUXVlcnlCdWlsZGVyKCdhcycpO1xyXG5cdFx0XHRxdWVyeS5zZWxlY3QoWydhcy5pZCcsICdhcy5kYW1fbnVtJywgJ2FzLmRhbV9uYW1lJywgJ2FzLmNhc2VfaWQnLCAnYXMuY2FzZV9uYW1lJywgJ2FzLmNhc2VfbGV2ZWwnLCAnYXMuY2FzZV9tb2R1bGUnLCAnYXMuY2FzZV9wcmUnLCAnYXMuY2FzZV9vcCcsICdhcy5jYXNlX2V4cCcsICdhcy5jYXNlX25vdGUnLCAnYXMuY2FzZV90eXBlJywgJ2FzLmNhc2Vfc3RhdHVzJ10pLndoZXJlKCdhcy5waWQ9OnBpZCcsIHtwaWQ6aW5mby5jb3B5X3BpZH0pO1xyXG5cdFx0XHRsZXQgUVI6YW55ID0gYXdhaXQgcXVlcnkuZ2V0TWFueSgpO1xyXG5cdFx0XHRsZXQgQ1IgPSBbXTtcclxuXHRcdFx0bGV0IEFSID0gW107XHJcblx0XHRcdGZvcihsZXQgaT0wO2k8UVIubGVuZ3RoO2krKyl7XHJcblx0XHRcdFx0bGV0IGNoID0gYXdhaXQgY2hyZXAuZmluZE9uZSh7cGlkOmluZm8uY29weV9waWQsIGNpZDpRUltpXS5pZCwgY2FzZV9zdGF0dXM6MH0pO1xyXG5cdFx0XHRcdFFSW2ldLmlkID0gbmV3IE9iamVjdElEKCkudG9TdHJpbmcoKTtcclxuXHRcdFx0XHRRUltpXS5waWQgPSBpbmZvLm5ld19waWQ7XHJcblx0XHRcdFx0UVJbaV0udmlkID0gaW5mby52aWQ7XHJcblx0XHRcdFx0UVJbaV0udWlkID0gaW5mby51aWQ7XHJcblx0XHRcdFx0aWYoY2gpe1xyXG5cdFx0XHRcdFx0bGV0IGFoID0gYXdhaXQgYXV0b3JlcC5maW5kT25lKHtjaGlkOiBjaC5pZH0pO1xyXG5cdFx0XHRcdFx0Y2guaWQgPSBuZXcgT2JqZWN0SUQoKS50b1N0cmluZygpO1xyXG5cdFx0XHRcdFx0Y2guY2lkID0gUVJbaV0uaWQ7XHJcblx0XHRcdFx0XHRjaC5waWQgPSBpbmZvLm5ld19waWQ7XHJcblx0XHRcdFx0XHRjaC52aWQgPSBpbmZvLnZpZDtcclxuXHRcdFx0XHRcdGNoLnVpZCA9IGluZm8udWlkO1xyXG5cdFx0XHRcdFx0aWYoYWgpe1xyXG5cdFx0XHRcdFx0XHRhaC5pZCA9IG5ldyBPYmplY3RJRCgpLnRvU3RyaW5nKCk7XHJcblx0XHRcdFx0XHRcdGFoLmNoaWQgPSBjaC5pZDtcclxuXHRcdFx0XHRcdFx0YWgucGlkID0gaW5mby5uZXdfcGlkO1xyXG5cdFx0XHRcdFx0XHRhaC51aWQgPSBpbmZvLnVpZDtcclxuXHRcdFx0XHRcdFx0QVIucHVzaChhaCk7XHJcblx0XHRcdFx0XHR9XHJcblx0XHRcdFx0XHRDUi5wdXNoKGNoKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoUVIubGVuZ3RoID4gNTApe1xyXG5cdFx0XHRcdGxldCBhUVIgPSBRUjtcclxuXHRcdFx0XHR3aGlsZSAoYVFSLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGxldCBpUVIgPSBhUVIuc2xpY2UoMCw1MCk7XHJcblx0XHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpLmluc2VydCgpLmludG8oQ2FzZSkudmFsdWVzKGlRUikuZXhlY3V0ZSgpO1xyXG5cdFx0XHRcdFx0YVFSID0gYVFSLnNsaWNlKDUwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuY3JlYXRlUXVlcnlCdWlsZGVyKCkuaW5zZXJ0KCkuaW50byhDYXNlKS52YWx1ZXMoUVIpLmV4ZWN1dGUoKTtcclxuXHRcdFx0fVxyXG5cdFx0XHRpZihDUi5sZW5ndGggPiA1MCl7XHJcblx0XHRcdFx0bGV0IGFDUiA9IENSO1xyXG5cdFx0XHRcdHdoaWxlIChhQ1IubGVuZ3RoID4gMCkge1xyXG5cdFx0XHRcdFx0bGV0IGlDUiA9IGFDUi5zbGljZSgwLDUwKTtcclxuXHRcdFx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuY3JlYXRlUXVlcnlCdWlsZGVyKCkuaW5zZXJ0KCkuaW50byhDYXNlSGlzdG9yeSkudmFsdWVzKGlDUikuZXhlY3V0ZSgpO1xyXG5cdFx0XHRcdFx0YUNSID0gYUNSLnNsaWNlKDUwKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH1lbHNle1xyXG5cdFx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuY3JlYXRlUXVlcnlCdWlsZGVyKCkuaW5zZXJ0KCkuaW50byhDYXNlSGlzdG9yeSkudmFsdWVzKENSKS5leGVjdXRlKCk7XHJcblx0XHRcdH1cclxuXHRcdFx0aWYoQVIubGVuZ3RoID4gNTApe1xyXG5cdFx0XHRcdGxldCBhQVIgPSBBUjtcclxuXHRcdFx0XHR3aGlsZSAoYUFSLmxlbmd0aCA+IDApIHtcclxuXHRcdFx0XHRcdGxldCBpQVIgPSBhQVIuc2xpY2UoMCw1MCk7XHJcblx0XHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpLmluc2VydCgpLmludG8oQXV0b0hpc3RvcnkpLnZhbHVlcyhpQVIpLmV4ZWN1dGUoKTtcclxuXHRcdFx0XHRcdGFBUiA9IGFBUi5zbGljZSg1MCk7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9ZWxzZXtcclxuXHRcdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5tYW5hZ2VyLmNyZWF0ZVF1ZXJ5QnVpbGRlcigpLmluc2VydCgpLmludG8oQXV0b0hpc3RvcnkpLnZhbHVlcyhBUikuZXhlY3V0ZSgpO1xyXG5cdFx0XHR9XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLmNvbW1pdFRyYW5zYWN0aW9uKCk7XHJcblx0XHR9IGNhdGNoIChlcnIpIHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucm9sbGJhY2tUcmFuc2FjdGlvbigpO1xyXG5cdFx0XHR0aHJvdyBlcnI7XHJcblx0XHR9IGZpbmFsbHkge1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5yZWxlYXNlKCk7XHJcblx0XHR9XHJcblx0XHRyZXR1cm4gJ2NvcHkgY2FzZSBkb25lJztcclxuXHR9IFxyXG59XHJcblxyXG5leHBvcnQgbGV0IGNhc2VBcGkgPSBuZXcgQ2FzZUFwaSgpO1xyXG4iXX0=