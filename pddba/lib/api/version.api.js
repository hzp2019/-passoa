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
var version_entity_1 = require("../entity/version.entity");
var VersionApi = /** @class */ (function () {
    function VersionApi() {
    }
    VersionApi.prototype.create = function (versionInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, version;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(version_entity_1.Version);
                        version = new version_entity_1.Version();
                        version.name = versionInfo.name;
                        version.pid = versionInfo.pid;
                        version.uid = versionInfo.uid;
                        return [4 /*yield*/, repository.save(version)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    VersionApi.prototype.findByProject = function (pid) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(version_entity_1.Version);
                        return [4 /*yield*/, repository.find({ select: ['id', 'pid', 'uid', 'name', 'create_date'], where: { pid: pid } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return VersionApi;
}());
exports.versionApi = new VersionApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmVyc2lvbi5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvYXBpL3ZlcnNpb24uYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBQ3JDLDJEQUFtRDtBQUduRDtJQUFBO0lBYUEsQ0FBQztJQVpNLDJCQUFNLEdBQVosVUFBYSxXQUF3Qjs7Ozs7O3dCQUNoQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsd0JBQU8sQ0FBQyxDQUFDO3dCQUM1RCxPQUFPLEdBQUcsSUFBSSx3QkFBTyxFQUFFLENBQUM7d0JBQzVCLE9BQU8sQ0FBQyxJQUFJLEdBQUcsV0FBVyxDQUFDLElBQUksQ0FBQzt3QkFDaEMsT0FBTyxDQUFDLEdBQUcsR0FBRyxXQUFXLENBQUMsR0FBRyxDQUFDO3dCQUM5QixPQUFPLENBQUMsR0FBRyxHQUFHLFdBQVcsQ0FBQyxHQUFHLENBQUM7d0JBQ3ZCLHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLEVBQUE7NEJBQXJDLHNCQUFPLFNBQThCLEVBQUM7Ozs7S0FDdEM7SUFDSyxrQ0FBYSxHQUFuQixVQUFvQixHQUFXOzs7Ozs7d0JBQzFCLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyx3QkFBTyxDQUFDLENBQUM7d0JBQ3pELHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBRSxJQUFJLEVBQUUsS0FBSyxFQUFFLEtBQUssRUFBRSxNQUFNLEVBQUUsYUFBYSxDQUFFLEVBQUUsS0FBSyxFQUFFLEVBQUUsR0FBRyxFQUFFLEdBQUcsRUFBRSxFQUFFLENBQUMsRUFBQTs0QkFBNUcsc0JBQU8sU0FBcUcsRUFBQzs7OztLQUM3RztJQUNGLGlCQUFDO0FBQUQsQ0FBQyxBQWJELElBYUM7QUFFVSxRQUFBLFVBQVUsR0FBRyxJQUFJLFVBQVUsRUFBRSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY29ubmVjdCB9IGZyb20gJy4uL2Nvbm5lY3QnO1xyXG5pbXBvcnQgeyBWZXJzaW9uIH0gZnJvbSAnLi4vZW50aXR5L3ZlcnNpb24uZW50aXR5JztcclxuaW1wb3J0IHsgVmVyc2lvbkluZm8gfSBmcm9tICcuLi9tb2RlbC9pbmZvX21vZGVsJztcclxuXHJcbmNsYXNzIFZlcnNpb25BcGkge1xyXG5cdGFzeW5jIGNyZWF0ZSh2ZXJzaW9uSW5mbzogVmVyc2lvbkluZm8pIHtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShWZXJzaW9uKTtcclxuXHRcdGxldCB2ZXJzaW9uID0gbmV3IFZlcnNpb24oKTtcclxuXHRcdHZlcnNpb24ubmFtZSA9IHZlcnNpb25JbmZvLm5hbWU7XHJcblx0XHR2ZXJzaW9uLnBpZCA9IHZlcnNpb25JbmZvLnBpZDtcclxuXHRcdHZlcnNpb24udWlkID0gdmVyc2lvbkluZm8udWlkO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuc2F2ZSh2ZXJzaW9uKTtcclxuXHR9XHJcblx0YXN5bmMgZmluZEJ5UHJvamVjdChwaWQ6IHN0cmluZykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KFZlcnNpb24pO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuZmluZCh7IHNlbGVjdDogWyAnaWQnLCAncGlkJywgJ3VpZCcsICduYW1lJywgJ2NyZWF0ZV9kYXRlJyBdLCB3aGVyZTogeyBwaWQ6IHBpZCB9IH0pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGxldCB2ZXJzaW9uQXBpID0gbmV3IFZlcnNpb25BcGkoKTtcclxuIl19