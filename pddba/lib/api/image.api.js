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
var image_entity_1 = require("../entity/image.entity");
var image_remote_entity_1 = require("../entity/image_remote.entity");
var ImageApi = /** @class */ (function () {
    function ImageApi() {
    }
    ImageApi.prototype.create = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, image, newImage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(image_entity_1.Image);
                        return [4 /*yield*/, repository.findOne({ auto_step_id: info.sid })];
                    case 1:
                        image = _a.sent();
                        if (!image) return [3 /*break*/, 4];
                        return [4 /*yield*/, connect_1.connect
                                .getConnection()
                                .createQueryBuilder()
                                .update(image_entity_1.Image)
                                .set({ uid: info.uid })
                                .where('auto_step_id = :sid', { sid: info.sid })
                                .execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, repository.findOne({ auto_step_id: info.sid })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        newImage = new image_entity_1.Image();
                        newImage.auto_step_id = info.sid;
                        newImage.uid = info.uid;
                        return [4 /*yield*/, repository.save(newImage)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImageApi.prototype.saveRemote = function (info) {
        return __awaiter(this, void 0, void 0, function () {
            var repository, image, newImage;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(image_remote_entity_1.ImageRemote);
                        return [4 /*yield*/, repository.findOne({ auto_step_id: info.sid })];
                    case 1:
                        image = _a.sent();
                        if (!image) return [3 /*break*/, 4];
                        return [4 /*yield*/, connect_1.connect
                                .getConnection()
                                .createQueryBuilder()
                                .update(image_remote_entity_1.ImageRemote)
                                .set({ update_date: info.update_date, uid: info.uid })
                                .where('auto_step_id = :sid', { sid: info.sid })
                                .execute()];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, repository.findOne({ auto_step_id: info.sid })];
                    case 3: return [2 /*return*/, _a.sent()];
                    case 4:
                        newImage = new image_remote_entity_1.ImageRemote();
                        newImage.auto_step_id = info.sid;
                        newImage.update_date = info.update_date;
                        newImage.uid = info.uid;
                        return [4 /*yield*/, repository.save(newImage)];
                    case 5: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImageApi.prototype.findImageUpdateTime = function (sid) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(image_entity_1.Image);
                        return [4 /*yield*/, repository.findOne({ auto_step_id: sid })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ImageApi.prototype.findRemoteImageUpdateTime = function (sid) {
        return __awaiter(this, void 0, void 0, function () {
            var repository;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        repository = connect_1.connect.getConnection().getRepository(image_remote_entity_1.ImageRemote);
                        return [4 /*yield*/, repository.findOne({ select: ['update_date'], where: { auto_step_id: sid } })];
                    case 1: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    return ImageApi;
}());
exports.imageApi = new ImageApi();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW1hZ2UuYXBpLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vcGRkYmEvc3JjL2FwaS9pbWFnZS5hcGkudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxzQ0FBcUM7QUFDckMsdURBQStDO0FBQy9DLHFFQUE0RDtBQUc1RDtJQUFBO0lBZ0RBLENBQUM7SUEvQ00seUJBQU0sR0FBWixVQUFhLElBQXFCOzs7Ozs7d0JBQzdCLFVBQVUsR0FBRyxpQkFBTyxDQUFDLGFBQWEsRUFBRSxDQUFDLGFBQWEsQ0FBQyxvQkFBSyxDQUFDLENBQUM7d0JBQ2xELHFCQUFNLFVBQVUsQ0FBQyxPQUFPLENBQUMsRUFBRSxZQUFZLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBRSxDQUFDLEVBQUE7O3dCQUE1RCxLQUFLLEdBQUcsU0FBb0Q7NkJBQzVELEtBQUssRUFBTCx3QkFBSzt3QkFDUixxQkFBTSxpQkFBTztpQ0FDWCxhQUFhLEVBQUU7aUNBQ2Ysa0JBQWtCLEVBQUU7aUNBQ3BCLE1BQU0sQ0FBQyxvQkFBSyxDQUFDO2lDQUNiLEdBQUcsQ0FBQyxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUNBQ3RCLEtBQUssQ0FBQyxxQkFBcUIsRUFBRSxFQUFFLEdBQUcsRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUM7aUNBQy9DLE9BQU8sRUFBRSxFQUFBOzt3QkFOWCxTQU1XLENBQUM7d0JBQ0wscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBQTs0QkFBM0Qsc0JBQU8sU0FBb0QsRUFBQzs7d0JBRXhELFFBQVEsR0FBRyxJQUFJLG9CQUFLLEVBQUUsQ0FBQzt3QkFDM0IsUUFBUSxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNqQyxRQUFRLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2pCLHFCQUFNLFVBQVUsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLEVBQUE7NEJBQXRDLHNCQUFPLFNBQStCLEVBQUM7Ozs7S0FFeEM7SUFDSyw2QkFBVSxHQUFoQixVQUFpQixJQUFxQjs7Ozs7O3dCQUNqQyxVQUFVLEdBQUcsaUJBQU8sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxhQUFhLENBQUMsaUNBQVcsQ0FBQyxDQUFDO3dCQUN4RCxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFBOzt3QkFBNUQsS0FBSyxHQUFHLFNBQW9EOzZCQUM1RCxLQUFLLEVBQUwsd0JBQUs7d0JBQ1IscUJBQU0saUJBQU87aUNBQ1gsYUFBYSxFQUFFO2lDQUNmLGtCQUFrQixFQUFFO2lDQUNwQixNQUFNLENBQUMsaUNBQVcsQ0FBQztpQ0FDbkIsR0FBRyxDQUFDLEVBQUUsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQ0FDckQsS0FBSyxDQUFDLHFCQUFxQixFQUFFLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQztpQ0FDL0MsT0FBTyxFQUFFLEVBQUE7O3dCQU5YLFNBTVcsQ0FBQzt3QkFDTCxxQkFBTSxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUUsWUFBWSxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxFQUFBOzRCQUEzRCxzQkFBTyxTQUFvRCxFQUFDOzt3QkFFeEQsUUFBUSxHQUFHLElBQUksaUNBQVcsRUFBRSxDQUFDO3dCQUNqQyxRQUFRLENBQUMsWUFBWSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUM7d0JBQ2pDLFFBQVEsQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQzt3QkFDeEMsUUFBUSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDO3dCQUNqQixxQkFBTSxVQUFVLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxFQUFBOzRCQUF0QyxzQkFBTyxTQUErQixFQUFDOzs7O0tBRXhDO0lBQ0ssc0NBQW1CLEdBQXpCLFVBQTBCLEdBQVc7Ozs7Ozt3QkFDaEMsVUFBVSxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLG9CQUFLLENBQUMsQ0FBQzt3QkFDdkQscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsQ0FBQyxFQUFBOzRCQUF0RCxzQkFBTyxTQUErQyxFQUFDOzs7O0tBQ3ZEO0lBQ0ssNENBQXlCLEdBQS9CLFVBQWdDLEdBQVc7Ozs7Ozt3QkFDdEMsVUFBVSxHQUFHLGlCQUFPLENBQUMsYUFBYSxFQUFFLENBQUMsYUFBYSxDQUFDLGlDQUFXLENBQUMsQ0FBQzt3QkFDN0QscUJBQU0sVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFLE1BQU0sRUFBRSxDQUFFLGFBQWEsQ0FBRSxFQUFFLEtBQUssRUFBRSxFQUFFLFlBQVksRUFBRSxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUE7NEJBQTVGLHNCQUFPLFNBQXFGLEVBQUM7Ozs7S0FDN0Y7SUFDRixlQUFDO0FBQUQsQ0FBQyxBQWhERCxJQWdEQztBQUVVLFFBQUEsUUFBUSxHQUFHLElBQUksUUFBUSxFQUFFLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25uZWN0IH0gZnJvbSAnLi4vY29ubmVjdCc7XHJcbmltcG9ydCB7IEltYWdlIH0gZnJvbSAnLi4vZW50aXR5L2ltYWdlLmVudGl0eSc7XHJcbmltcG9ydCB7IEltYWdlUmVtb3RlIH0gZnJvbSAnLi4vZW50aXR5L2ltYWdlX3JlbW90ZS5lbnRpdHknO1xyXG5pbXBvcnQgeyBJbWFnZUNyZWF0ZUluZm8sIEltYWdlUmVtb3RlSW5mbyB9IGZyb20gJy4uL21vZGVsL2luZm9fbW9kZWwnO1xyXG5cclxuY2xhc3MgSW1hZ2VBcGkge1xyXG5cdGFzeW5jIGNyZWF0ZShpbmZvOiBJbWFnZUNyZWF0ZUluZm8pIHtcclxuXHRcdGxldCByZXBvc2l0b3J5ID0gY29ubmVjdC5nZXRDb25uZWN0aW9uKCkuZ2V0UmVwb3NpdG9yeShJbWFnZSk7XHJcblx0XHRsZXQgaW1hZ2UgPSBhd2FpdCByZXBvc2l0b3J5LmZpbmRPbmUoeyBhdXRvX3N0ZXBfaWQ6IGluZm8uc2lkIH0pO1xyXG5cdFx0aWYgKGltYWdlKSB7XHJcblx0XHRcdGF3YWl0IGNvbm5lY3RcclxuXHRcdFx0XHQuZ2V0Q29ubmVjdGlvbigpXHJcblx0XHRcdFx0LmNyZWF0ZVF1ZXJ5QnVpbGRlcigpXHJcblx0XHRcdFx0LnVwZGF0ZShJbWFnZSlcclxuXHRcdFx0XHQuc2V0KHsgdWlkOiBpbmZvLnVpZCB9KVxyXG5cdFx0XHRcdC53aGVyZSgnYXV0b19zdGVwX2lkID0gOnNpZCcsIHsgc2lkOiBpbmZvLnNpZCB9KVxyXG5cdFx0XHRcdC5leGVjdXRlKCk7XHJcblx0XHRcdHJldHVybiBhd2FpdCByZXBvc2l0b3J5LmZpbmRPbmUoeyBhdXRvX3N0ZXBfaWQ6IGluZm8uc2lkIH0pO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0bGV0IG5ld0ltYWdlID0gbmV3IEltYWdlKCk7XHJcblx0XHRcdG5ld0ltYWdlLmF1dG9fc3RlcF9pZCA9IGluZm8uc2lkO1xyXG5cdFx0XHRuZXdJbWFnZS51aWQgPSBpbmZvLnVpZDtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuc2F2ZShuZXdJbWFnZSk7XHJcblx0XHR9XHJcblx0fVxyXG5cdGFzeW5jIHNhdmVSZW1vdGUoaW5mbzogSW1hZ2VSZW1vdGVJbmZvKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoSW1hZ2VSZW1vdGUpO1xyXG5cdFx0bGV0IGltYWdlID0gYXdhaXQgcmVwb3NpdG9yeS5maW5kT25lKHsgYXV0b19zdGVwX2lkOiBpbmZvLnNpZCB9KTtcclxuXHRcdGlmIChpbWFnZSkge1xyXG5cdFx0XHRhd2FpdCBjb25uZWN0XHJcblx0XHRcdFx0LmdldENvbm5lY3Rpb24oKVxyXG5cdFx0XHRcdC5jcmVhdGVRdWVyeUJ1aWxkZXIoKVxyXG5cdFx0XHRcdC51cGRhdGUoSW1hZ2VSZW1vdGUpXHJcblx0XHRcdFx0LnNldCh7IHVwZGF0ZV9kYXRlOiBpbmZvLnVwZGF0ZV9kYXRlLCB1aWQ6IGluZm8udWlkIH0pXHJcblx0XHRcdFx0LndoZXJlKCdhdXRvX3N0ZXBfaWQgPSA6c2lkJywgeyBzaWQ6IGluZm8uc2lkIH0pXHJcblx0XHRcdFx0LmV4ZWN1dGUoKTtcclxuXHRcdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IGF1dG9fc3RlcF9pZDogaW5mby5zaWQgfSk7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHRsZXQgbmV3SW1hZ2UgPSBuZXcgSW1hZ2VSZW1vdGUoKTtcclxuXHRcdFx0bmV3SW1hZ2UuYXV0b19zdGVwX2lkID0gaW5mby5zaWQ7XHJcblx0XHRcdG5ld0ltYWdlLnVwZGF0ZV9kYXRlID0gaW5mby51cGRhdGVfZGF0ZTtcclxuXHRcdFx0bmV3SW1hZ2UudWlkID0gaW5mby51aWQ7XHJcblx0XHRcdHJldHVybiBhd2FpdCByZXBvc2l0b3J5LnNhdmUobmV3SW1hZ2UpO1xyXG5cdFx0fVxyXG5cdH1cclxuXHRhc3luYyBmaW5kSW1hZ2VVcGRhdGVUaW1lKHNpZDogc3RyaW5nKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoSW1hZ2UpO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IGF1dG9fc3RlcF9pZDogc2lkIH0pO1xyXG5cdH1cclxuXHRhc3luYyBmaW5kUmVtb3RlSW1hZ2VVcGRhdGVUaW1lKHNpZDogc3RyaW5nKSB7XHJcblx0XHRsZXQgcmVwb3NpdG9yeSA9IGNvbm5lY3QuZ2V0Q29ubmVjdGlvbigpLmdldFJlcG9zaXRvcnkoSW1hZ2VSZW1vdGUpO1xyXG5cdFx0cmV0dXJuIGF3YWl0IHJlcG9zaXRvcnkuZmluZE9uZSh7IHNlbGVjdDogWyAndXBkYXRlX2RhdGUnIF0sIHdoZXJlOiB7IGF1dG9fc3RlcF9pZDogc2lkIH0gfSk7XHJcblx0fVxyXG59XHJcblxyXG5leHBvcnQgbGV0IGltYWdlQXBpID0gbmV3IEltYWdlQXBpKCk7XHJcbiJdfQ==