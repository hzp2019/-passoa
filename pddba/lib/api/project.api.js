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
var project_entity_1 = require("../entity/project.entity");
var version_entity_1 = require("../entity/version.entity");
var local_result_entity_1 = require("../entity/local_result.entity");
var email_notify_entity_1 = require("../entity/email_notify.entity");
var dbc_entity_1 = require("../entity/dbc.entity");
var case_entity_1 = require("../entity/case.entity");
var case_history_entity_1 = require("../entity/case_history.entity");
var auto_step_entity_1 = require("../entity/auto_step.entity");
var auto_history_entity_1 = require("../entity/auto_history.entity");
var cache_result_entity_1 = require("../entity/cache_result.entity");
var after_ng_entity_1 = require("../entity/after_ng.entity");
var ProjectApi = /** @class */ (function () {
    function ProjectApi() {
    }
    ProjectApi.prototype.create = function (projectInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, project;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(project_entity_1.Project);
                        project = new project_entity_1.Project();
                        project.name = projectInfo.name;
                        project.uid = projectInfo.uid;
                        return [4 /*yield*/, repository.save(project)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectApi.prototype.findAll = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(project_entity_1.Project);
                        return [4 /*yield*/, repository.find({ select: ['id', 'uid', 'name', 'create_date'] })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectApi.prototype.findProjectEmailInfo = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(project_entity_1.Project);
                        return [4 /*yield*/, repository.findOne({ id: id })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ProjectApi.prototype.updateProjectEmailInfo = function (id, info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, projectInfo;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(project_entity_1.Project);
                        return [4 /*yield*/, repository.findOne({ id: id })];
                    case 1:
                        projectInfo = _a.sent();
                        if (!projectInfo) {
                            throw new Error('数据不存在');
                        }
                        projectInfo.email_info = info;
                        return [4 /*yield*/, repository.save(projectInfo)];
                    case 2:
                        _a.sent();
                        return [2 /*return*/, 'update emailInfo done'];
                }
            });
        });
    };
    ProjectApi.prototype.delete = function (id) {
        return __awaiter(this, void 0, void 0, function () {
            var queryRunner, err_1;
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
                        _a.trys.push([3, 16, 18, 20]);
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(project_entity_1.Project).where('id=:id', { id: id }).execute()];
                    case 4:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(version_entity_1.Version).where('pid=:id', { id: id }).execute()];
                    case 5:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(local_result_entity_1.LocalResult).where('pid=:id', { id: id }).execute()];
                    case 6:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(email_notify_entity_1.EmailNotify).where('pid=:id', { id: id }).execute()];
                    case 7:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(dbc_entity_1.DBC).where('pid=:id', { id: id }).execute()];
                    case 8:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(case_entity_1.Case).where('pid=:id', { id: id }).execute()];
                    case 9:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(case_history_entity_1.CaseHistory).where('pid=:id', { id: id }).execute()];
                    case 10:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(auto_step_entity_1.AutoStep).where('pid=:id', { id: id }).execute()];
                    case 11:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(auto_history_entity_1.AutoHistory).where('pid=:id', { id: id }).execute()];
                    case 12:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(cache_result_entity_1.CacheResult).where('pid=:id', { id: id }).execute()];
                    case 13:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.manager.createQueryBuilder().delete().from(after_ng_entity_1.AfterNg).where('pid=:id', { id: id }).execute()];
                    case 14:
                        _a.sent();
                        return [4 /*yield*/, queryRunner.commitTransaction()];
                    case 15:
                        _a.sent();
                        return [3 /*break*/, 20];
                    case 16:
                        err_1 = _a.sent();
                        return [4 /*yield*/, queryRunner.rollbackTransaction()];
                    case 17:
                        _a.sent();
                        throw err_1;
                    case 18: return [4 /*yield*/, queryRunner.release()];
                    case 19:
                        _a.sent();
                        return [7 /*endfinally*/];
                    case 20: return [2 /*return*/, 'delete project done'];
                }
            });
        });
    };
    return ProjectApi;
}());
exports.projectApi = new ProjectApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdC5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvYXBpL3Byb2plY3QuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBQ3JDLDJEQUFtRDtBQUNuRCwyREFBbUQ7QUFDbkQscUVBQTREO0FBQzVELHFFQUE0RDtBQUM1RCxtREFBMkM7QUFDM0MscURBQTZDO0FBQzdDLHFFQUE0RDtBQUM1RCwrREFBc0Q7QUFDdEQscUVBQTREO0FBQzVELHFFQUE0RDtBQUM1RCw2REFBb0Q7QUFHcEQ7SUFBQTtJQW9EQSxDQUFDO0lBbkRNLDJCQUFNLEdBQVosVUFBYSxXQUF3Qjs7Ozs7O3dCQUNoQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsd0JBQU8sQ0FBQyxDQUFDO3dCQUM1RCxPQUFPLEdBQUcsSUFBSSx3QkFBTyxFQUFFLENBQUM7d0JBQzVCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDaEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO3dCQUN2QixxQkFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxFQUFBOzRCQUFyQyxzQkFBTyxTQUE4QixFQUFDOzs7O0tBQ3RDO0lBQ0ssNEJBQU8sR0FBYjs7Ozs7O3dCQUNLLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyx3QkFBTyxDQUFDLENBQUM7d0JBQ3pELHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxhQUFhLENBQUUsRUFBRSxDQUFDLEVBQUE7NEJBQWhGLHNCQUFPLFNBQXlFLEVBQUM7Ozs7S0FDakY7SUFDSyx5Q0FBb0IsR0FBMUIsVUFBMkIsRUFBVTs7Ozs7O3dCQUNoQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsd0JBQU8sQ0FBQyxDQUFDO3dCQUN6RCxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLEVBQUE7NEJBQTNDLHNCQUFPLFNBQW9DLEVBQUM7Ozs7S0FDNUM7SUFDSywyQ0FBc0IsR0FBNUIsVUFBNkIsRUFBUyxFQUFFLElBQVc7Ozs7Ozt3QkFDOUMsVUFBVSxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLHdCQUFPLENBQUMsQ0FBQzt3QkFDOUMscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFBOzt3QkFBbEQsV0FBVyxHQUFHLFNBQW9DO3dCQUN0RCxJQUFJLENBQUMsV0FBVyxFQUFFOzRCQUNqQixNQUFNLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO3lCQUN6Qjt3QkFDRCxXQUFXLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQzt3QkFDOUIscUJBQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsRUFBQTs7d0JBQWxDLFNBQWtDLENBQUM7d0JBQ25DLHNCQUFPLHVCQUF1QixFQUFDOzs7O0tBQy9CO0lBQ0ssMkJBQU0sR0FBWixVQUFhLEVBQVM7Ozs7Ozt3QkFDakIsV0FBVyxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsaUJBQWlCLEVBQUUsQ0FBQzt3QkFDOUQscUJBQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzt3QkFDNUIscUJBQU0sV0FBVyxDQUFDLGdCQUFnQixFQUFFLEVBQUE7O3dCQUFwQyxTQUFvQyxDQUFDOzs7O3dCQUVwQyxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUEzRyxTQUEyRyxDQUFDO3dCQUM1RyxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLHdCQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUE1RyxTQUE0RyxDQUFDO3dCQUM3RyxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUFoSCxTQUFnSCxDQUFDO3dCQUNqSCxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUFoSCxTQUFnSCxDQUFDO3dCQUNqSCxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGdCQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUF4RyxTQUF3RyxDQUFDO3dCQUN6RyxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGtCQUFJLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUF6RyxTQUF5RyxDQUFDO3dCQUMxRyxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUFoSCxTQUFnSCxDQUFDO3dCQUNqSCxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLDJCQUFRLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUE3RyxTQUE2RyxDQUFDO3dCQUM5RyxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUFoSCxTQUFnSCxDQUFDO3dCQUNqSCxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLGlDQUFXLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUFoSCxTQUFnSCxDQUFDO3dCQUNqSCxxQkFBTSxXQUFXLENBQUMsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUMsTUFBTSxFQUFFLENBQUMsSUFBSSxDQUFDLHlCQUFPLENBQUMsQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFLEVBQUUsRUFBRSxFQUFFLEVBQUUsRUFBRSxDQUFDLENBQUMsT0FBTyxFQUFFLEVBQUE7O3dCQUE1RyxTQUE0RyxDQUFDO3dCQUM3RyxxQkFBTSxXQUFXLENBQUMsaUJBQWlCLEVBQUUsRUFBQTs7d0JBQXJDLFNBQXFDLENBQUM7Ozs7d0JBRXRDLHFCQUFNLFdBQVcsQ0FBQyxtQkFBbUIsRUFBRSxFQUFBOzt3QkFBdkMsU0FBdUMsQ0FBQzt3QkFDeEMsTUFBTSxLQUFHLENBQUM7NkJBRVYscUJBQU0sV0FBVyxDQUFDLE9BQU8sRUFBRSxFQUFBOzt3QkFBM0IsU0FBMkIsQ0FBQzs7NkJBRTdCLHNCQUFPLHFCQUFxQixFQUFDOzs7O0tBRTdCO0lBQ0YsaUJBQUM7QUFBRCxDQUFDLEFBcERELElBb0RDO0FBRVUsUUFBQSxVQUFVLEdBQUcsSUFBSSxVQUFVLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9jb25uZWN0JztcclxuaW1wb3J0IHsgUHJvamVjdCB9IGZyb20gJy4uL2VudGl0eS9wcm9qZWN0LmVudGl0eSc7XHJcbmltcG9ydCB7IFZlcnNpb24gfSBmcm9tICcuLi9lbnRpdHkvdmVyc2lvbi5lbnRpdHknO1xyXG5pbXBvcnQgeyBMb2NhbFJlc3VsdCB9IGZyb20gJy4uL2VudGl0eS9sb2NhbF9yZXN1bHQuZW50aXR5JztcclxuaW1wb3J0IHsgRW1haWxOb3RpZnkgfSBmcm9tICcuLi9lbnRpdHkvZW1haWxfbm90aWZ5LmVudGl0eSc7XHJcbmltcG9ydCB7IERCQyB9IGZyb20gJy4uL2VudGl0eS9kYmMuZW50aXR5JztcclxuaW1wb3J0IHsgQ2FzZSB9IGZyb20gJy4uL2VudGl0eS9jYXNlLmVudGl0eSc7XHJcbmltcG9ydCB7IENhc2VIaXN0b3J5IH0gZnJvbSAnLi4vZW50aXR5L2Nhc2VfaGlzdG9yeS5lbnRpdHknO1xyXG5pbXBvcnQgeyBBdXRvU3RlcCB9IGZyb20gJy4uL2VudGl0eS9hdXRvX3N0ZXAuZW50aXR5JztcclxuaW1wb3J0IHsgQXV0b0hpc3RvcnkgfSBmcm9tICcuLi9lbnRpdHkvYXV0b19oaXN0b3J5LmVudGl0eSc7XHJcbmltcG9ydCB7IENhY2hlUmVzdWx0IH0gZnJvbSAnLi4vZW50aXR5L2NhY2hlX3Jlc3VsdC5lbnRpdHknO1xyXG5pbXBvcnQgeyBBZnRlck5nIH0gZnJvbSAnLi4vZW50aXR5L2FmdGVyX25nLmVudGl0eSc7XHJcbmltcG9ydCB7IFByb2plY3RJbmZvIH0gZnJvbSAnLi4vbW9kZWwvaW5mb19tb2RlbCc7XHJcblxyXG5jbGFzcyBQcm9qZWN0QXBpIHtcclxuXHRhc3luYyBjcmVhdGUocHJvamVjdEluZm86IFByb2plY3RJbmZvKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoUHJvamVjdCk7XHJcblx0XHRsZXQgcHJvamVjdCA9IG5ldyBQcm9qZWN0KCk7XHJcblx0XHRwcm9qZWN0Lm5hbWUgPSBwcm9qZWN0SW5mby5uYW1lO1xyXG5cdFx0cHJvamVjdC51aWQgPSBwcm9qZWN0SW5mby51aWQ7XHJcblx0XHRyZXR1cm4gYXdhaXQgcmVwb3NpdG9yeS5zYXZlKHByb2plY3QpO1xyXG5cdH1cclxuXHRhc3luYyBmaW5kQWxsKCkge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KFByb2plY3QpO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuZmluZCh7IHNlbGVjdDogWyAnaWQnLCAndWlkJywgJ25hbWUnLCAnY3JlYXRlX2RhdGUnIF0gfSk7XHJcblx0fVxyXG5cdGFzeW5jIGZpbmRQcm9qZWN0RW1haWxJbmZvKGlkOiBzdHJpbmcpe1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KFByb2plY3QpO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IGlkOiBpZCB9KTtcclxuXHR9XHJcblx0YXN5bmMgdXBkYXRlUHJvamVjdEVtYWlsSW5mbyhpZDpzdHJpbmcsIGluZm86c3RyaW5nKXtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShQcm9qZWN0KTtcclxuXHRcdGxldCBwcm9qZWN0SW5mbyA9IGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IGlkOiBpZCB9KTtcclxuXHRcdGlmICghcHJvamVjdEluZm8pIHtcclxuXHRcdFx0dGhyb3cgbmV3IEVycm9yKCfmlbDmja7kuI3lrZjlnKgnKTtcclxuXHRcdH1cclxuXHRcdHByb2plY3RJbmZvLmVtYWlsX2luZm8gPSBpbmZvO1xyXG5cdFx0YXdhaXQgcmVwb3NpdG9yeS5zYXZlKHByb2plY3RJbmZvKTtcclxuXHRcdHJldHVybiAndXBkYXRlIGVtYWlsSW5mbyBkb25lJztcclxuXHR9XHJcblx0YXN5bmMgZGVsZXRlKGlkOnN0cmluZyl7XHJcblx0XHRsZXQgcXVlcnlSdW5uZXIgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5jcmVhdGVRdWVyeVJ1bm5lcigpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuY29ubmVjdCgpO1xyXG5cdFx0YXdhaXQgcXVlcnlSdW5uZXIuc3RhcnRUcmFuc2FjdGlvbigpO1xyXG5cdFx0dHJ5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKFByb2plY3QpLndoZXJlKCdpZD06aWQnLCB7IGlkOiBpZCB9KS5leGVjdXRlKCk7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuY3JlYXRlUXVlcnlCdWlsZGVyKCkuZGVsZXRlKCkuZnJvbShWZXJzaW9uKS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKExvY2FsUmVzdWx0KS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKEVtYWlsTm90aWZ5KS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKERCQykud2hlcmUoJ3BpZD06aWQnLCB7IGlkOiBpZCB9KS5leGVjdXRlKCk7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLm1hbmFnZXIuY3JlYXRlUXVlcnlCdWlsZGVyKCkuZGVsZXRlKCkuZnJvbShDYXNlKS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKENhc2VIaXN0b3J5KS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKEF1dG9TdGVwKS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKEF1dG9IaXN0b3J5KS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKENhY2hlUmVzdWx0KS53aGVyZSgncGlkPTppZCcsIHsgaWQ6IGlkIH0pLmV4ZWN1dGUoKTtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIubWFuYWdlci5jcmVhdGVRdWVyeUJ1aWxkZXIoKS5kZWxldGUoKS5mcm9tKEFmdGVyTmcpLndoZXJlKCdwaWQ9OmlkJywgeyBpZDogaWQgfSkuZXhlY3V0ZSgpO1xyXG5cdFx0XHRhd2FpdCBxdWVyeVJ1bm5lci5jb21taXRUcmFuc2FjdGlvbigpO1xyXG5cdFx0fSBjYXRjaCAoZXJyKSB7XHJcblx0XHRcdGF3YWl0IHF1ZXJ5UnVubmVyLnJvbGxiYWNrVHJhbnNhY3Rpb24oKTtcclxuXHRcdFx0dGhyb3cgZXJyO1xyXG5cdFx0fSBmaW5hbGx5IHtcclxuXHRcdFx0YXdhaXQgcXVlcnlSdW5uZXIucmVsZWFzZSgpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICdkZWxldGUgcHJvamVjdCBkb25lJztcclxuXHRcdFxyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGxldCBwcm9qZWN0QXBpID0gbmV3IFByb2plY3RBcGkoKTtcclxuIl19