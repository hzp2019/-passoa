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
var user_entity_1 = require("../entity/user.entity");
var UserApi = /** @class */ (function () {
    function UserApi() {
    }
    UserApi.prototype.create = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, user;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(user_entity_1.User);
                        user = new user_entity_1.User();
                        user.username = info.username;
                        user.password = info.password;
                        user.email = info.email;
                        user.name = info.name;
                        return [4 /*yield*/, repository.save(user)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.findOne = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(user_entity_1.User);
                        return [4 /*yield*/, repository.findOne(info)];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    UserApi.prototype.findEmailNameList = function () {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(user_entity_1.User);
                        return [4 /*yield*/, repository.find({ username: '' })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return UserApi;
}());
exports.userApi = new UserApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5hcGkuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi8uLi9wZGRiYS9zcmMvYXBpL3VzZXIuYXBpLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsc0NBQXFDO0FBQ3JDLHFEQUE2QztBQUk3QztJQUFBO0lBa0JBLENBQUM7SUFqQk0sd0JBQU0sR0FBWixVQUFhLElBQW9COzs7Ozs7d0JBQzVCLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBSSxDQUFDLENBQUM7d0JBQ3pELElBQUksR0FBRyxJQUFJLGtCQUFJLEVBQUUsQ0FBQzt3QkFDdEIsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDO3dCQUM5QixJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUM7d0JBQzlCLElBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQzt3QkFDeEIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDO3dCQUNmLHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUE7NEJBQWxDLHNCQUFPLFNBQTJCLEVBQUM7Ozs7S0FDbkM7SUFDSyx5QkFBTyxHQUFiLFVBQWMsSUFBa0I7Ozs7Ozt3QkFDM0IsVUFBVSxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLGtCQUFJLENBQUMsQ0FBQzt3QkFDdEQscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBQTs0QkFBckMsc0JBQU8sU0FBOEIsRUFBQzs7OztLQUN0QztJQUNLLG1DQUFpQixHQUF2Qjs7Ozs7O3dCQUNLLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxrQkFBSSxDQUFDLENBQUM7d0JBQ3RELHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsRUFBQyxRQUFRLEVBQUMsRUFBRSxFQUFDLENBQUMsRUFBQTs0QkFBM0Msc0JBQU8sU0FBb0MsRUFBQzs7OztLQUM1QztJQUNGLGNBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBRVUsUUFBQSxPQUFPLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbm5lY3QgfSBmcm9tICcuLi9jb25uZWN0JztcclxuaW1wb3J0IHsgVXNlciB9IGZyb20gJy4uL2VudGl0eS91c2VyLmVudGl0eSc7XHJcbmltcG9ydCB7IFVzZXJDcmVhdGVJbmZvIH0gZnJvbSAnLi4vbW9kZWwvaW5mb19tb2RlbCc7XHJcbmltcG9ydCB7IFVzZXJGaW5kSW5mbyB9IGZyb20gJy4uL21vZGVsL3F1ZXJ5X21vZGVsJztcclxuXHJcbmNsYXNzIFVzZXJBcGkge1xyXG5cdGFzeW5jIGNyZWF0ZShpbmZvOiBVc2VyQ3JlYXRlSW5mbykge1xyXG5cdFx0bGV0IHJlcG9zaXRvcnkgPSBjb25uZWN0LmdldENvbm5lY3Rpb24oKS5nZXRSZXBvc2l0b3J5KFVzZXIpO1xyXG5cdFx0bGV0IHVzZXIgPSBuZXcgVXNlcigpO1xyXG5cdFx0dXNlci51c2VybmFtZSA9IGluZm8udXNlcm5hbWU7XHJcblx0XHR1c2VyLnBhc3N3b3JkID0gaW5mby5wYXNzd29yZDtcclxuXHRcdHVzZXIuZW1haWwgPSBpbmZvLmVtYWlsO1xyXG5cdFx0dXNlci5uYW1lID0gaW5mby5uYW1lO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuc2F2ZSh1c2VyKTtcclxuXHR9XHJcblx0YXN5bmMgZmluZE9uZShpbmZvOiBVc2VyRmluZEluZm8pIHtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShVc2VyKTtcclxuXHRcdHJldHVybiBhd2FpdCByZXBvc2l0b3J5LmZpbmRPbmUoaW5mbyk7XHJcblx0fVxyXG5cdGFzeW5jIGZpbmRFbWFpbE5hbWVMaXN0KCl7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoVXNlcik7XHJcblx0XHRyZXR1cm4gYXdhaXQgcmVwb3NpdG9yeS5maW5kKHt1c2VybmFtZTonJ30pO1xyXG5cdH1cclxufVxyXG5cclxuZXhwb3J0IGxldCB1c2VyQXBpID0gbmV3IFVzZXJBcGkoKTtcclxuIl19