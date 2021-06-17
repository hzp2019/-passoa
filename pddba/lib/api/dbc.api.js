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
var dbc_entity_1 = require("../entity/dbc.entity");
var DBCApi = /** @class */ (function () {
    function DBCApi() {
    }
    DBCApi.prototype.bindingDBCByProject = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, dbc, newDBC;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(dbc_entity_1.DBC);
                        return [4 /*yield*/, repository.findOne({ pid: info.pid })];
                    case 1:
                        dbc = _a.sent();
                        if (!dbc) return [3 /*break*/, 4];
                        return [4 /*yield*/, connect_1.connect
                                .getConnection()
                                .createQueryBuilder()
                                .update(dbc_entity_1.DBC)
                                .set({ filename: info.filename, uid: info.uid })
                                .where('pid = :pid', { pid: info.pid })
                                .execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, repository.findOne({ pid: info.pid })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        newDBC = new dbc_entity_1.DBC();
                        newDBC.filename = info.filename;
                        newDBC.pid = info.pid;
                        newDBC.uid = info.uid;
                        return [4 /*yield*/, repository.save(newDBC)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DBCApi.prototype.findDBCFileNameByProject = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(dbc_entity_1.DBC);
                        return [4 /*yield*/, repository.findOne({ pid: info.pid })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    DBCApi.prototype.copyByProjectId = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, dbc, newDBC;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(dbc_entity_1.DBC);
                        return [4 /*yield*/, repository.findOne({ pid: info.copy_pid })];
                    case 1:
                        dbc = _a.sent();
                        if (!dbc) return [3 /*break*/, 3];
                        newDBC = new dbc_entity_1.DBC();
                        newDBC.filename = dbc.filename;
                        newDBC.pid = info.new_pid;
                        newDBC.uid = info.uid;
                        return [4 /*yield*/, repository.save(newDBC)];
                    case 2: return [2 /*return*/, _a.sent()];
                    case 3: return [2 /*return*/, 'copy dbc done'];
                }
            });
        });
    };
    return DBCApi;
}());
exports.dbcApi = new DBCApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGJjLmFwaS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uLy4uL3BkZGJhL3NyYy9hcGkvZGJjLmFwaS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHNDQUFxQztBQUNyQyxtREFBMkM7QUFHM0M7SUFBQTtJQXFDQSxDQUFDO0lBcENNLG9DQUFtQixHQUF6QixVQUEwQixJQUFhOzs7Ozs7d0JBQ2xDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBRyxDQUFDLENBQUM7d0JBQ2xELHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUE7O3dCQUFqRCxHQUFHLEdBQUcsU0FBMkM7NkJBQ2pELEdBQUcsRUFBSCx3QkFBRzt3QkFDTixxQkFBTSxpQkFBTztpQ0FDWCxhQUFhLEVBQUU7aUNBQ2Ysa0JBQWtCLEVBQUU7aUNBQ3BCLE1BQU0sQ0FBQyxnQkFBRyxDQUFDO2lDQUNYLEdBQUcsQ0FBQyxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUNBQy9DLEtBQUssQ0FBQyxZQUFZLEVBQUUsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDO2lDQUN0QyxPQUFPLEVBQUUsRUFBQTs7d0JBTlgsU0FNVyxDQUFDO3dCQUNMLHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUE7NEJBQWxELHNCQUFPLFNBQTJDLEVBQUM7O3dCQUUvQyxNQUFNLEdBQUcsSUFBSSxnQkFBRyxFQUFFLENBQUM7d0JBQ3ZCLE1BQU0sQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQzt3QkFDaEMsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUN0QixNQUFNLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2YscUJBQU0sVUFBVSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBQTs0QkFBcEMsc0JBQU8sU0FBNkIsRUFBQzs7OztLQUV0QztJQUNLLHlDQUF3QixHQUE5QixVQUErQixJQUFhOzs7Ozs7d0JBQ3ZDLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxnQkFBRyxDQUFDLENBQUM7d0JBQ3JELHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUE7NEJBQWxELHNCQUFPLFNBQTJDLEVBQUM7Ozs7S0FDbkQ7SUFDSyxnQ0FBZSxHQUFyQixVQUFzQixJQUFxQjs7Ozs7O3dCQUN0QyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsZ0JBQUcsQ0FBQyxDQUFDO3dCQUNsRCxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxFQUFBOzt3QkFBdEQsR0FBRyxHQUFHLFNBQWdEOzZCQUN2RCxHQUFHLEVBQUgsd0JBQUc7d0JBQ0QsTUFBTSxHQUFHLElBQUksZ0JBQUcsRUFBRSxDQUFDO3dCQUN2QixNQUFNLENBQUMsUUFBUSxHQUFHLEdBQUcsQ0FBQyxRQUFRLENBQUM7d0JBQy9CLE1BQU0sQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLE9BQU8sQ0FBQzt3QkFDMUIsTUFBTSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNmLHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLEVBQUE7NEJBQXBDLHNCQUFPLFNBQTZCLEVBQUM7NEJBRXRDLHNCQUFPLGVBQWUsRUFBQzs7OztLQUN2QjtJQUNGLGFBQUM7QUFBRCxDQUFDLEFBckNELElBcUNDO0FBRVUsUUFBQSxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9jb25uZWN0JztcclxuaW1wb3J0IHsgREJDIH0gZnJvbSAnLi4vZW50aXR5L2RiYy5lbnRpdHknO1xyXG5pbXBvcnQgeyBEQkNJbmZvLENvcHlQcm9qZWN0SW5mbyB9IGZyb20gJy4uL21vZGVsL2luZm9fbW9kZWwnO1xyXG5cclxuY2xhc3MgREJDQXBpIHtcclxuXHRhc3luYyBiaW5kaW5nREJDQnlQcm9qZWN0KGluZm86IERCQ0luZm8pIHtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShEQkMpO1xyXG5cdFx0bGV0IGRiYyA9IGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IHBpZDogaW5mby5waWQgfSk7XHJcblx0XHRpZiAoZGJjKSB7XHJcblx0XHRcdGF3YWl0IGNvbm5lY3RcclxuXHRcdFx0XHQuZ2V0Q29ubmVjdGlvbigpXHJcblx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0LnVwZGF0ZShEQkMpXHJcblx0XHRcdFx0LnNldCh7IGZpbGVuYW1lOiBpbmZvLmZpbGVuYW1lLCB1aWQ6IGluZm8udWlkIH0pXHJcblx0XHRcdFx0LndoZXJlKCdwaWQgPSA6cGlkJywgeyBwaWQ6IGluZm8ucGlkIH0pXHJcblx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IHBpZDogaW5mby5waWQgfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgbmV3REJDID0gbmV3IERCQygpO1xyXG5cdFx0XHRuZXdEQkMuZmlsZW5hbWUgPSBpbmZvLmZpbGVuYW1lO1xyXG5cdFx0XHRuZXdEQkMucGlkID0gaW5mby5waWQ7XHJcblx0XHRcdG5ld0RCQy51aWQgPSBpbmZvLnVpZDtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuc2F2ZShuZXdEQkMpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRhc3luYyBmaW5kREJDRmlsZU5hbWVCeVByb2plY3QoaW5mbzogREJDSW5mbykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KERCQyk7XHJcblx0XHRyZXR1cm4gYXdhaXQgcmVwb3NpdG9yeS5maW5kT25lKHsgcGlkOiBpbmZvLnBpZCB9KTtcclxuXHR9XHJcblx0YXN5bmMgY29weUJ5UHJvamVjdElkKGluZm86IENvcHlQcm9qZWN0SW5mbyl7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoREJDKTtcclxuXHRcdGxldCBkYmMgPSBhd2FpdCByZXBvc2l0b3J5LmZpbmRPbmUoeyBwaWQ6IGluZm8uY29weV9waWQgfSk7XHJcblx0XHRpZihkYmMpe1xyXG5cdFx0XHRsZXQgbmV3REJDID0gbmV3IERCQygpO1xyXG5cdFx0XHRuZXdEQkMuZmlsZW5hbWUgPSBkYmMuZmlsZW5hbWU7XHJcblx0XHRcdG5ld0RCQy5waWQgPSBpbmZvLm5ld19waWQ7XHJcblx0XHRcdG5ld0RCQy51aWQgPSBpbmZvLnVpZDtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuc2F2ZShuZXdEQkMpO1xyXG5cdFx0fVxyXG5cdFx0cmV0dXJuICdjb3B5IGRiYyBkb25lJztcclxuXHR9XHJcbn1cclxuXHJcbmV4cG9ydCBsZXQgZGJjQXBpID0gbmV3IERCQ0FwaSgpO1xyXG4iXX0=